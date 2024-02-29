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
                const { count, rows } = await db.Room.findAndCountAll({
                    where: {
                        typeRoomID,
                    }
                })
                const timeShareArray = [];
                for (let i = 0; i < count; i++) {
                    timeShareArray.push({
                        price,
                        startDate: startDateDB,
                        endDate: endDateDB,
                        saleStatus: 0,
                        roomID: rows[i].id,
                        userID: userID,
                    })
                }
                await db.TimeShare.bulkCreate(timeShareArray);
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
                attributes: ['price', 'startDate', 'endDate', 'saleStatus', 'createdAt'],
                ...queries,
                group: ['createdAt', 'price', 'startDate', 'endDate', 'saleStatus']
            })

            //Get Id, TypeRoom and Project
            if (response && response.length !== 0) {
                for (let i = 0; i < response.length; i++) {
                    const timeShareResponse = await db.TimeShare.findOne({
                        where: {
                            createdAt: response[i].createdAt,
                        }
                    })
                    response[i].id = timeShareResponse.id
                    response[i].createdAt = undefined;
                    const roomResponse = await db.Room.findByPk(timeShareResponse.roomID, {
                        nest: true,
                        required: true,
                        include: {
                            model: db.TypeRoom,
                            attributes: ['name', 'persons'],
                            required: true,
                            include: {
                                model: db.TypeOfProject,
                                attributes: ['id'],
                                required: true,
                                include: {
                                    model: db.Project,
                                    attributes: ['name', 'location', 'thumbnailPathUrl'],
                                }
                            }
                        }
                    })
                    if (roomResponse) {
                        response[i].TypeRoom = {
                            name: roomResponse.TypeRoom.name,
                            persons: roomResponse.TypeRoom.persons
                        };
                        response[i].Project = {
                            name: roomResponse.TypeRoom.TypeOfProject.Project.name,
                            location: roomResponse.TypeRoom.TypeOfProject.Project.location,
                            thumbnailPathUrl: roomResponse.TypeRoom.TypeOfProject.Project.thumbnailPathUrl
                        };
                        //response[i].Project = roomResponse.TypeRoom.TypeOfProject.Project;
                    }
                }
            }

            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: (response && response.length !== 0) ? `All TimeShares` : `Can not find any TimeShares`,
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
            const queries = {}
            queries.nest = true;
            queries.raw = true;
            const projectResponse = await db.Project.findByPk(projectID);
            let response;
            const fOrderType = (orderType === 'DESC') ? 'DESC' : 'ASC';
            const fOrderBy = (orderBy) ? orderBy : 'id';
            queries.order = [[fOrderBy, fOrderType]];

            const typeOfProjectResponse = await db.TypeOfProject.findOne({
                where: {
                    projectID,
                }
            })
            if (projectResponse) {
                const roomResponse = await db.Room.findAll({
                    include: {
                        model: db.TypeRoom,
                        attributes: ['id'],
                        required: true,
                        include: {
                            model: db.TypeOfProject,
                            as: 'TypeOfProject',
                            attributes: ['id'],
                            required: true,
                            include: {
                                model: db.Project,
                                attributes: ['id'],
                                required: true,
                                where: {
                                    id: projectID,
                                }
                            }
                        }
                    }
                })
                response = await db.TimeShare.findAll({
                    attributes: ['price', 'startDate', 'endDate', 'saleStatus', 'createdAt'],
                    include: {
                        model: db.Room,
                        attributes: ['id'],
                        required: true,
                        include: {
                            model: db.TypeRoom,
                            attributes: ['id'],
                            required: true,
                            include: {
                                model: db.TypeOfProject,
                                as: 'TypeOfProject',
                                attributes: ['id'],
                                required: true,
                                include: {
                                    model: db.Project,
                                    attributes: ['id'],
                                    required: true,
                                    where: {
                                        id: projectID,
                                    }
                                }
                            }
                        }
                    },
                    //where: literal(`"TypeOfProject.projectID" = ${projectID}`),
                    ...queries,
                    //group: ['createdAt', 'price', 'startDate', 'endDate', 'saleStatus']
                })



                // //Get Id, TypeRoom and Project
                // if (response && response.length !== 0) {
                //     for (let i = 0; i < response.length; i++) {
                //         const timeShareResponse = await db.TimeShare.findOne({
                //             where: {
                //                 createdAt: response[i].createdAt,
                //             }
                //         })
                //         response[i].id = timeShareResponse.id
                //         response[i].createdAt = undefined;
                //         const roomResponse = await db.Room.findByPk(timeShareResponse.roomID, {
                //             nest: true,
                //             required: true,
                //             include: {
                //                 model: db.TypeRoom,
                //                 attributes: ['name', 'persons'],
                //                 required: true,
                //                 include: {
                //                     model: db.TypeOfProject,
                //                     attributes: ['id'],
                //                     required: true,
                //                     include: {
                //                         model: db.Project,
                //                         attributes: ['name', 'location', 'thumbnailPathUrl'],
                //                     }
                //                 }
                //             }
                //         })
                //         if (roomResponse) {
                //             response[i].TypeRoom = {
                //                 name: roomResponse.TypeRoom.name,
                //                 persons: roomResponse.TypeRoom.persons
                //             };
                //             response[i].Project = {
                //                 name: roomResponse.TypeRoom.TypeOfProject.Project.name,
                //                 location: roomResponse.TypeRoom.TypeOfProject.Project.location,
                //                 thumbnailPathUrl: roomResponse.TypeRoom.TypeOfProject.Project.thumbnailPathUrl
                //             };
                //             //response[i].Project = roomResponse.TypeRoom.TypeOfProject.Project;
                //         }
                //     }
                // }
            }

            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: !projectResponse ?
                    `Can not find Project (${projectID})` :
                    !(response && response.length !== 0) ? `Can not find any TimeShares of Project (${projectID})`
                        : `All TimeShares`,
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
            const response = await db.TimeShare.findByPk(id, {
                nest: true,
                raw: true,
                attributes: ['id', 'price', 'startDate', 'endDate', 'saleStatus', 'roomID'],
            });
            if (response) {
                const roomResponse = await db.Room.findByPk(response.roomID, {
                    nest: true,
                    required: true,
                    include: {
                        model: db.TypeRoom,
                        attributes: ['name', 'bedrooms', 'persons', 'size', 'bedTypes', 'amenities', 'description'],
                        required: true,
                        include: [
                            {
                                model: db.TypeOfProject,
                                attributes: ['id'],
                                required: true,
                                include: {
                                    model: db.Project,
                                    attributes: ['name', 'description', 'location', 'features', 'attractions', 'reservationPrice', 'openDate', 'thumbnailPathUrl'],
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
                console.log(roomResponse.TypeRoom);
                if (roomResponse) {
                    response.TypeRoom = {
                        name: roomResponse.TypeRoom.name,
                        bedrooms: roomResponse.TypeRoom.bedrooms,
                        persons: roomResponse.TypeRoom.persons,
                        size: roomResponse.TypeRoom.size,
                        bedTypes: roomResponse.TypeRoom.bedTypes?.split(','),
                        amenities: roomResponse.TypeRoom.amenities?.split(','),
                        description: roomResponse.TypeRoom.description,
                        images: roomResponse.TypeRoom.Images,
                    };
                    response.Project = {
                        name: roomResponse.TypeRoom.TypeOfProject.Project.name,
                        description: roomResponse.TypeRoom.TypeOfProject.Project.description,
                        location: roomResponse.TypeRoom.TypeOfProject.Project.location,
                        features: roomResponse.TypeRoom.TypeOfProject.Project.features?.split(','),
                        attraction: roomResponse.TypeRoom.TypeOfProject.Project.attractions?.split(','),
                        reservationPrice: roomResponse.TypeRoom.TypeOfProject.Project.reservationPrice,
                        openDate: roomResponse.TypeRoom.TypeOfProject.Project.openDate,
                        thumbnailPathUrl: roomResponse.TypeRoom.TypeOfProject.Project.thumbnailPathUrl,
                        images: roomResponse.TypeRoom.TypeOfProject.Project.Images,
                    };
                    //response[i].Project = roomResponse.TypeRoom.TypeOfProject.Project;
                }
            }
            resolve({
                err: response ? 0 : 1,
                message: response ? `TimeShare (${id}) found` : `Can not find TimeShare (${id})`,
                data: response
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}