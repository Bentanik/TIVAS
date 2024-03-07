import db from "../models";
import "dotenv/config";
import { Model, Op, fn, col, literal } from "sequelize";
import { pagination } from "../middlewares/pagination";

const convertDate = (dateString) => {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    return date;
}

export const createNewTimeShare = (
    typeRoomID,
    userID,
    {
        price,
        startDate,
        endDate
    },
) => {
    return new Promise(async (resolve, reject) => {
        try {
            const startDateDB = convertDate(startDate);
            const endDateDB = convertDate(endDate);

            //Find TypeRoom in DB
            const typeRoomResponse = await db.TypeRoom.findByPk(typeRoomID);

            //Find User in DB
            const userResponse = await db.User.findByPk(userID);

            if (typeRoomResponse && userResponse) {
                await db.TimeShare.create({
                    price,
                    startDate: startDateDB,
                    endDate: endDateDB,
                    userID,
                    saleStatus: 0,
                    typeRoomID,
                    quantity: typeRoomResponse.quantity,
                })
            }

            resolve({
                err: (typeRoomResponse && userResponse) ? 0 : 1,
                message: !typeRoomResponse ?
                    `Can not find TypeRoom (${typeRoomID})!`
                    : !userResponse ?
                        `Can not find User (${userID})!`
                        : "Create successfully."
            })

        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getAllTimeShare = ({
    page,
    limit,
    orderType,
    orderBy
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response;
            let pageInput = 1;
            const queries = pagination({ page, limit, orderType, orderBy });
            const timeShareResponse = await db.TimeShare.findAll();
            let countPages = timeShareResponse.length !== 0 ? 1 : 0;
            if (timeShareResponse.length / queries.limit > 1) {
                countPages = Math.ceil(timeShareResponse.length / queries.limit)
            }
            if(page){
                pageInput = page
            }
            queries.nest = true;
            queries.raw = true;
            if (pageInput <= countPages) {
                response = await db.TimeShare.findAll({
                    attributes: ['id', 'price', 'startDate', 'endDate', 'saleStatus', 'createdAt'],
                    include: {
                        model: db.TypeRoom,
                        attributes: ['id', 'name', 'persons'],
                        include: {
                            model: db.TypeOfProject,
                            attributes: ['id'],
                            include: {
                                model: db.Project,
                                attributes: ['id', 'name', 'thumbnailPathUrl', 'locationID'],
                            }
                        }
                    },
                    ...queries,
                })
                if (response.length !== 0) {
                    for (let i = 0; i < response.length; i++) {
                        const locationDB = await db.Location.findByPk(response[i].TypeRoom.TypeOfProject.Project.locationID);
                        response[i].location = locationDB.name;
                    }
                }
            }
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: pageInput > countPages ?
                    `Can not find any TimeShares in Page (${pageInput}) because there are only (${countPages}) Pages of TimeShares`
                    : (response && response.length !== 0) ? `All TimeShares Result` : `Can not find any TimeShares`,
                data: (response && response.length !== 0) ? response : null,
                count: response ? response.length : 0,
                countPages: countPages,
                page: pageInput
            })

        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getAllTimeShareOfProject = (projectID, {
    page,
    limit,
    orderBy,
    orderType,
}
) => {
    return new Promise(async (resolve, reject) => {
        try {
            let countPages = 0;
            let pageInput = 1;
            const queries = pagination({ page, limit, orderType, orderBy });
            queries.nest = true;
            queries.raw = true;
            const projectResponse = await db.Project.findByPk(projectID);
            let response = [];
            queries.nest = true;
            queries.raw = true;
            if (projectResponse) {
                const timeShareResponse = await db.TimeShare.findAll({
                    attributes: [],
                    include: {
                        model: db.TypeRoom,
                        attributes: [],
                        required: true,
                        include: {
                            model: db.TypeOfProject,
                            attributes: [],
                            where: {
                                projectID
                            },
                        }
                    }
                });
                countPages = timeShareResponse.length !== 0 ? 1 : 0;
                if (timeShareResponse.length / queries.limit > 1) {
                    countPages = Math.ceil(timeShareResponse.length / queries.limit)
                }
                if(page){
                    pageInput = page
                }
                console.log(page);
                console.log(countPages);
                console.log(page <= countPages);
                if (pageInput <= countPages) {
                    response = await db.TimeShare.findAll({
                        attributes: ['id', 'price', 'startDate', 'endDate', 'saleStatus', 'createdAt'],
                        include: {
                            model: db.TypeRoom,
                            attributes: ['id', 'name', 'persons'],
                            required: true,
                            include: {
                                model: db.TypeOfProject,
                                attributes: ['id'],
                                where: {
                                    projectID
                                },
                                include: {
                                    model: db.Project,
                                    attributes: ['id', 'name', 'thumbnailPathUrl', 'locationID']
                                }
                            }
                        },
                        ...queries,
                    })

                    if (response.length !== 0) {
                        for (let i = 0; i < response.length; i++) {
                            const locationDB = await db.Location.findByPk(response[i].TypeRoom.TypeOfProject.Project.locationID);
                            response[i].location = locationDB.name;
                        }
                    }
                }
            }

            resolve({
                err: response.length !== 0 ? 0 : 1,
                message: !projectResponse ?
                    `Can not find Project (${projectID})` :
                    pageInput > countPages ?
                        `Can not find any TimeShares in Page (${pageInput}) because there are only (${countPages}) Pages of TimeShares`
                        : !(response.length !== 0) ? `Can not find any TimeShares of Project (${projectID})`
                            : `All TimeShares Result`,
                data: response.length !== 0 ? response : null,
                count: response.length !== 0 ? response.length : 0,
                page: pageInput,
                countPages: countPages,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getDetailsTimeShare = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = {};
            const timeShareResponse = await db.TimeShare.findByPk(id, {
                attributes: ['id', 'price', 'startDate', 'endDate', 'saleStatus'],
                nest: true,
                include: {
                    model: db.TypeRoom,
                    attributes: ['id', 'name', 'bedrooms', 'bathrooms', 'persons', 'size', 'bedTypes', 'amenities', 'description'],
                    include: [
                        {
                            model: db.TypeOfProject,
                            attributes: ['id'],
                            required: true,
                            include: {
                                model: db.Project,
                                attributes: ['id', 'name', 'description', 'features', 'attractions', 'reservationPrice', 'openDate', 'status', 'thumbnailPathUrl', 'locationID'],
                                include: {
                                    model: db.Image,
                                    attributes: ['pathUrl'],
                                }
                            }
                        },
                        {
                            model: db.Image,
                            attributes: ['pathUrl'],
                        }
                    ]
                }
            })

            if (timeShareResponse) {
                response.TimeShare = {
                    id: timeShareResponse.id,
                    price: timeShareResponse.price,
                    startDate: timeShareResponse.startDate,
                    endDate: timeShareResponse.endDate,
                    saleStatus: timeShareResponse.saleStatus,
                }
                response.TypeRoom = {
                    id: timeShareResponse.TypeRoom.id,
                    name: timeShareResponse.TypeRoom.name,
                    bedrooms: timeShareResponse.TypeRoom.bedrooms,
                    bathrooms: timeShareResponse.TypeRoom.bathrooms,
                    persons: timeShareResponse.TypeRoom.persons,
                    size: timeShareResponse.TypeRoom.size,
                    bedTypes: timeShareResponse.TypeRoom.bedTypes?.split(','),
                    amenities: timeShareResponse.TypeRoom.amenities?.split(','),
                    description: timeShareResponse.TypeRoom.description,
                    images: timeShareResponse.TypeRoom.Images,
                };
                const locationDB = await db.Location.findByPk(timeShareResponse.TypeRoom.TypeOfProject.Project.locationID);
                response.Project = {
                    id: timeShareResponse.TypeRoom.TypeOfProject.Project.id,
                    name: timeShareResponse.TypeRoom.TypeOfProject.Project.name,
                    description: timeShareResponse.TypeRoom.TypeOfProject.Project.description,
                    location: locationDB.name,
                    features: timeShareResponse.TypeRoom.TypeOfProject.Project.features?.split(','),
                    attraction: timeShareResponse.TypeRoom.TypeOfProject.Project.attractions?.split(','),
                    reservationPrice: timeShareResponse.TypeRoom.TypeOfProject.Project.reservationPrice,
                    openDate: timeShareResponse.TypeRoom.TypeOfProject.Project.openDate,
                    status: timeShareResponse.TypeRoom.TypeOfProject.Project.status,
                    thumbnailPathUrl: timeShareResponse.TypeRoom.TypeOfProject.Project.thumbnailPathUrl,
                    images: timeShareResponse.TypeRoom.TypeOfProject.Project.Images,
                };
            }
            resolve({
                err: response.TimeShare ? 0 : 1,
                message: response.TimeShare ? `TimeShare (${id}) found` : `Can not find TimeShare (${id})`,
                data: response.TimeShare ? response : null,
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}