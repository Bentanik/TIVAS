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
            const queries = pagination({ page, limit, orderType, orderBy });
            queries.nest = true;
            queries.raw = true;
            const response = await db.TimeShare.findAll({
                attributes: ['id', 'price', 'startDate', 'endDate', 'saleStatus', 'createdAt'],
                include: {
                    model: db.TypeRoom,
                    attributes: ['name', 'persons'],
                    include: {
                        model: db.TypeOfProject,
                        attributes: ['id'],
                        include: {
                            model: db.Project,
                            attributes: ['name', 'location', 'thumbnailPathUrl']
                        }
                    }
                },
                ...queries,
            })

            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: (response && response.length !== 0) ? `All TimeShares Result` : `Can not find any TimeShares`,
                data: response,
                count: response ? response.length : 0,
                page: page
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
            const queries = pagination({ page, limit, orderType, orderBy });
            queries.nest = true;
            queries.raw = true;
            const projectResponse = await db.Project.findByPk(projectID);
            let response;
            if (projectResponse) {
                response = await db.TimeShare.findAll({
                    attributes: ['id', 'price', 'startDate', 'endDate', 'saleStatus', 'createdAt'],
                    include: {
                        model: db.TypeRoom,
                        attributes: ['name', 'persons'],
                        required: true,
                        include: {
                            model: db.TypeOfProject,
                            attributes: ['id'],
                            where: {
                                projectID
                            },
                            include: {
                                model: db.Project,
                                attributes: ['name', 'location', 'thumbnailPathUrl']
                            }
                        }
                    },
                    ...queries,
                })
            }

            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: !projectResponse ?
                    `Can not find Project (${projectID})` :
                    !(response && response.length !== 0) ? `Can not find any TimeShares of Project (${projectID})`
                        : `All TimeShares Result`,
                data: response,
                count: response ? response.length : 0,
                page: page
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
                    attributes: ['name', 'bedrooms', 'bathrooms', 'persons', 'size', 'bedTypes', 'amenities', 'description'],
                    include: [
                        {
                            model: db.TypeOfProject,
                            attributes: ['id'],
                            required: true,
                            include: {
                                model: db.Project,
                                attributes: ['name', 'description', 'location', 'features', 'attractions', 'reservationPrice', 'openDate', 'status', 'thumbnailPathUrl'],
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
                response.Project = {
                    name: timeShareResponse.TypeRoom.TypeOfProject.Project.name,
                    description: timeShareResponse.TypeRoom.TypeOfProject.Project.description,
                    location: timeShareResponse.TypeRoom.TypeOfProject.Project.location,
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
                data: response,
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}