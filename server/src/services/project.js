import db, { Sequelize } from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op, fn, col, literal, INTEGER } from "sequelize";
import { pagination } from "../middlewares/pagination";
const nodemailer = require("nodemailer");

const convertDate = (dateString) => {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    return date;
}

const deleteProjectImage = (fileData) => {
    if (fileData.thumbnail) {
        for (let i = 0; i < fileData.thumbnail.length; i++) {
            cloudinary.uploader.destroy(fileData.thumbnail[i].filename);
        }
    }
    if (fileData.images) {
        for (let i = 0; i < fileData.images.length; i++) {
            cloudinary.uploader.destroy(fileData.images[i].filename);
        }
    }
}

export const createNewProject = ({
    name,
    description,
    location,
    buildingStatus,
    type,
    features,
    attractions,
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const locationDB = await db.Location.findOne({
                where: {
                    name: location,
                }
            })
            let typeInDBError = 0;
            const imageProjectArray = [];
            const typeErrorMessage = [];
            let [project, created] = [];
            console.log(created);
            let stringT = type.split(",");
            for (let i = 0; i < stringT.length; i++) {
                let typeInDB = await db.Type.findOne({
                    where: {
                        name: stringT[i]
                    }
                })
                if (!typeInDB) {
                    typeInDBError = typeInDBError + 1;
                    typeErrorMessage.push(stringT[i])
                }
            }
            if (locationDB) {
                if (typeInDBError === 0) {
                    [project, created] = await db.Project.findOrCreate({
                        where: { name },
                        defaults: {
                            name,
                            description,
                            buildingStatus,
                            features,
                            attractions,
                            status: 0,
                            thumbnailPathUrl: fileData.thumbnail ? fileData.thumbnail[0].path : null,
                            thumbnailPathName: fileData.thumbnail ? fileData.thumbnail[0].filename : null,
                            locationID: locationDB.id
                        },
                    })
                    console.log(created)
                    if (created) {
                        for (let i = 0; i < stringT.length; i++) {
                            const TypeOfProject = await db.TypeOfProject.create({
                                projectID: project.id,
                                typeID: stringT[i] == "Villa" ? 1 : 2,
                            })
                        }

                        //Import images to imageTable
                        if (fileData.images) {
                            for (let i = 0; i < fileData.images.length; i++) {
                                const image = {
                                    pathUrl: fileData.images[i].path,
                                    pathName: fileData.images[i].filename,
                                    projectID: project.id
                                }
                                imageProjectArray.push(image);
                            }
                            await db.Image.bulkCreate(imageProjectArray);
                        }
                    }
                }
            }
            resolve({
                err: created ? 0 : 1,
                mess: !locationDB ?
                    `location (${location}) does not exist!` :
                    typeInDBError > 0 ?
                        `TypeOfProject: (${typeErrorMessage.join(',')}) not exist!`
                        : created ?
                            "Create Project Successfully."
                            : "Project Name has been used!",
            })
            if (fileData && !created) {
                console.log('123')
                deleteProjectImage(fileData);
            }
        } catch (error) {
            console.log(error);
            reject(error);
            if (fileData) {
                deleteProjectImage(fileData);
            }
        }
    })
}

export const getAllProject = ({ page, limit, orderType, orderBy }) => {
    return new Promise(async (resolve, reject) => {
        try {
            //pagination and limit
            let response;
            let pageInput = 1;
            const queries = pagination({ page, limit, orderType, orderBy });
            const projectResponse = await db.Project.findAll();
            let countPages = projectResponse.length !== 0 ? 1 : 0;
            if(projectResponse.length / queries.limit > 1){
                countPages = Math.ceil(projectResponse.length / queries.limit)
            }
            if(page){
                pageInput = page
            }
            if (pageInput <= countPages) {
                //queries.raw = true;
                response = await db.Project.findAll({
                    raw: true,
                    attributes: ['id', 'name', 'thumbnailPathUrl', 'status', 'buildingStatus', 'reservationDate', 'reservationPrice', 'openDate', 'closeDate', 'features', 'attractions', 'locationID'],
                    ...queries,
                })
                if (response && response.length !== 0) {
                    for (let i = 0; i < response.length; i++) {
                        const locationDB = await db.Location.findByPk(response[i].locationID);
                        response[i].location = locationDB.name;
                        if (response[i].features) {
                            response[i].features = response[i].features.split(',');
                        }
                        if (response[i].attractions) {
                            response[i].attractions = response[i].attractions.split(',');
                        }
                    }
                }
            }
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: pageInput > countPages ? 
                `Can not find any Projects in Page (${pageInput}) because there are only (${countPages}) Pages of Projects`
                : (response && response.length !== 0) ? `Get all of projects results` : 'Can not find any projects!',
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

export const getAllByLocation = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Project.findAll({
                where: {
                    locationID: id,
                }
            })
            resolve({
                err: response.length !== 0 ? 0 : 1,
                message: response.length !== 0 ? 'All Locations' : 'Can not find any Location',
                data: response.length !== 0 ? response : null,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }

    })
}

export const deleteProject = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const projectRespone = await db.Project.findByPk(id);
            if (projectRespone) {
                cloudinary.uploader.destroy(projectRespone.thumbnailPathName);
                const imageProject = await db.Image.findAll({
                    where: {
                        projectID: id
                    }
                })
                if (imageProject) {
                    Promise.all(imageProject.map((image) => {
                        cloudinary.uploader.destroy(image.pathName);
                    }))
                }
                await projectRespone.destroy();
            }
            resolve({
                err: projectRespone ? 0 : 1,
                message: projectRespone ? 'Deleted Successfully.' : `Can not find Project with id: ${id}`
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const updateProject = ({
    name,
    description,
    location,
    buildingStatus,
    features,
    attractions,
    thumbnailDeleted,
    imagesDeleted,
}, id, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nameDuplicated;
            let locationDB;
            let imageErrorMessage = [];
            const imageProjectArray = [];
            //Check TypeRoom is existed in DB
            let projectResult = await db.Project.findByPk(id);
            if (projectResult) {
                locationDB = await db.Location.findOne({
                    where: {
                        name: location,
                    }
                })
                if (projectResult.name !== name) {
                    nameDuplicated = await db.Project.findOne({
                        where: {
                            name
                        }
                    })
                }
                if (!nameDuplicated && locationDB) {
                    //Delete images
                    if (imagesDeleted) {
                        imagesDeleted = imagesDeleted.split(',');
                        await Promise.all(imagesDeleted.map(async (image) => {
                            const imageResult = await db.Image.findByPk(image);
                            if (imageResult) {
                                cloudinary.uploader.destroy(imageResult.pathName);
                                await db.Image.destroy({
                                    where: {
                                        id: image
                                    }
                                });

                            }
                            else {
                                imageErrorMessage.push(`(${image})`);
                            }
                        }));
                    }

                    //Delete or Update thumbnail
                    if ((parseInt(thumbnailDeleted) === 1) || fileData.thumbnail) {
                        cloudinary.uploader.destroy(projectResult.thumbnailPathName);
                    }

                    //Update
                    await db.Project.update({
                        name,
                        description,
                        buildingStatus,
                        features,
                        attractions,
                        thumbnailPathUrl: fileData.thumbnail ? fileData.thumbnail[0].path : (parseInt(thumbnailDeleted) === 1) ? null : projectResult.thumbnailPathUrl,
                        thumbnailPathName: fileData.thumbnail ? fileData.thumbnail[0].filename : (parseInt(thumbnailDeleted) === 1) ? null : projectResult.thumbnailPathName,
                        locationID: locationDB.id,
                    }, {
                        where: {
                            id: id,
                        }
                    })

                    //Import images to imageTable
                    if (fileData.images) {
                        for (let i = 0; i < fileData.images.length; i++) {
                            const image = {
                                pathUrl: fileData.images[i].path,
                                pathName: fileData.images[i].filename,
                                projectID: id
                            }
                            imageProjectArray.push(image);
                        }
                        await db.Image.bulkCreate(imageProjectArray);
                    }

                    if (!projectResult && fileData) {
                        deleteProjectImage(fileData);
                    }
                }
            }
            resolve({
                err: !nameDuplicated ? 0 : 1,
                message: !projectResult ?
                    `Can not find Project with id: (${id})`
                    : nameDuplicated ?
                        'Project Name has been used!'
                        : !locationDB ?
                            `location (${location}) does not exist!`
                            : 'Update Successfully.',
                messageImage: imageErrorMessage.length !== 0 ? `Can not find Image: ${imageErrorMessage.join(',')}` : null,
            });
        } catch (error) {
            reject(error);
            console.log(error);
            if (fileData) {
                deleteProjectImage(fileData);
            }
        }
    })
}


export const searchProject = ({type, ...query }) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type) {
                type = type.split(",");
            }
            let locationDB;
            //condition clause
            const whereClause = {};
            for (const [key, value] of Object.entries(query)) {
                if (key !== 'location') {
                    whereClause[key] = { [Op.substring]: value };
                } else {
                    locationDB = value;
                }
            }

            //pagination and limit
            // queries.raw = true;
            console.log(whereClause.location);
            const response = await db.Project.findAll({
                raw: true,
                nest: true,
                where: whereClause,
                attributes: ['id', 'name', 'thumbnailPathUrl', 'status', 'buildingStatus', 'reservationDate', 'reservationPrice', 'openDate', 'closeDate', 'closeDate', 'features', 'attractions', 'locationID'],
                include: [
                    {
                        model: db.TypeOfProject,
                        as: 'TypeOfProjects',
                        required: true,
                        attributes: [], // Assuming you want to exclude TypeOfProject attributes from the result
                        include: {
                            model: db.Type,
                            as: 'Type',
                            attributes: [], // Assuming you want to exclude Type attributes from the result
                            where: {
                                name: {
                                    [Op.in]: type ? type : ['Villa', 'Hotel']
                                }
                            }
                        },
                    },
                    {
                        model: db.Location,
                        attributes: [],
                        where: locationDB ? {
                            name: { [Op.substring]: locationDB },
                        } : {}
                    }
                ],
                group: ['TypeOfProjects.projectID', 'Project.name', 'Project.locationID', 'Project.thumbnailPathUrl', 'Project.id'],
                having: type ? (literal(`COUNT(TypeOfProjects.projectID) = ${type.length}`)) : literal((`COUNT(TypeOfProjects.projectID) > 0`)),
                subQuery: false,
            });
            if (response) {
                for (let i = 0; i < response.length; i++) {
                    const locationDB = await db.Location.findByPk(response[i].locationID);
                    response[i].location = locationDB.name;
                    if (response[i].features) {
                        response[i].features = response[i].features.split(',');
                    }
                    if (response[i].attractions) {
                        response[i].attractions = response[i].attractions.split(',');
                    }
                }
            }
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                mess: (response && response.length !== 0) ? `Search Projects Results` : "Can not find any Projects!",
                data: (response && response.length !== 0) ? response : null,
                count: response ? response.length : 0,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const searchNameAndLocationProject = (info, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response;
            const bestMatch = await db.Project.findAll({
                attributes: ['id', 'name', 'thumbnailPathUrl'],
                where: {
                    name: { [Op.substring]: info },
                },
                include: {
                    model: db.Location,
                    attributes: [],
                    where: {
                        name: { [Op.substring]: info }
                    }
                },
                limit,
            })
            const projectByNameResponse = await db.Project.findAll({
                attributes: ['id', 'name', 'thumbnailPathUrl'],
                where: {
                    name: { [Op.substring]: info }
                },
                limit,
            })
            const projectByLocationResponse = await db.Project.findAll({
                attributes: ['id', 'name', 'thumbnailPathUrl'],
                include: {
                    model: db.Location,
                    attributes: [],
                    where: {
                        name: { [Op.substring]: info }
                    }
                },
                limit,
            })
            if (bestMatch.length !== 0 && projectByNameResponse.length !== 0 && projectByLocationResponse.length !== 0) {
                response = {};
                response.bestMatch = bestMatch
                response.ProjectName = projectByNameResponse;
                response.ProjectLocation = projectByLocationResponse;
            }
            resolve({
                err: response ? 0 : 1,
                message: response ? 'Search Projects Results' : 'Can not find any Project!',
                data: response ? response : null,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getTop10 = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Project.findAll({
                raw: true,
                attributes: ['id', 'name', 'status', 'buildingStatus', 'reservationDate', 'thumbnailPathUrl', 'createdAt', 'reservationPrice', 'openDate', 'closeDate', 'features', 'attractions', 'locationID'],
                limit: 10,
                order: [['createdAt', 'DESC']],
            })
            if (response) {
                for (let i = 0; i < response.length; i++) {
                    const locationDB = await db.Location.findByPk(response[i].locationID);
                    response[i].location = locationDB.name;
                    if (response[i].features) {
                        response[i].features = response[i].features.split(',');
                    }
                    if (response[i].attractions) {
                        response[i].attractions = response[i].attractions.split(',');
                    }
                }
            }
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                mess: (response && response.length !== 0) ? "Get top 10 new projects results" : "Can not find any Projects!",
                data: (response && response.length !== 0) ? response : null,
                count: response ? response.length : 0,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getDetailsProject = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = {};
            const projectResponse = await db.Project.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'thumbnailPathName'] },
                nest: true,
                //raw: true,
                include: [
                    {
                        model: db.TypeOfProject,
                        attributes: ['id'],
                        include: {
                            model: db.TypeRoom,
                            attributes: ['id', 'name', 'bedrooms', 'bathrooms', 'persons', 'size', 'bedTypes', 'amenities'],
                            include: [
                                {
                                    model: db.TypeOfProject,
                                    attributes: [],
                                    where: {
                                        projectID: id,
                                    },
                                },
                                {
                                    model: db.Image,
                                    attributes: ['id', 'pathUrl'],
                                    limit: 1,
                                },
                            ],
                        },
                        order: [['id', 'ASC']],
                    },
                    {
                        nest: true,
                        model: db.Image,
                        attributes: ['id', 'pathUrl'],
                    },
                ],
            },
            );

            if (projectResponse) {
                const locationDB = await db.Location.findByPk(projectResponse.locationID);
                response.Project = {
                    id: projectResponse.id,
                    name: projectResponse.name,
                    description: projectResponse.description,
                    buildingStatus: projectResponse.buildingStatus,
                    location: locationDB.name,
                    features: projectResponse.features?.split(','),
                    attractions: projectResponse.attractions?.split(','),
                    saleStatus: projectResponse.saleStatus,
                    status: projectResponse.status,
                    reservationPrice: projectResponse.reservationPrice,
                    openDate: projectResponse.openDate,
                    thumbnailPathUrl: projectResponse.thumbnailPathUrl,
                    images: projectResponse.Images
                }

                response.TypeRoom = [];
                for (let i = 0; i < projectResponse.TypeOfProjects.length; i++) {
                    for (let j = 0; j < projectResponse.TypeOfProjects[i].TypeRooms.length; j++) {
                        response.TypeRoom.push({
                            id: projectResponse.TypeOfProjects[i].TypeRooms[j].id,
                            name: projectResponse.TypeOfProjects[i].TypeRooms[j].name,
                            bedrooms: projectResponse.TypeOfProjects[i].TypeRooms[j].bedrooms,
                            bathrooms: projectResponse.TypeOfProjects[i].TypeRooms[j].bathrooms,
                            persons: projectResponse.TypeOfProjects[i].TypeRooms[j].persons,
                            bedTypes: projectResponse.TypeOfProjects[i].TypeRooms[j].bedTypes.split(','),
                            amenities: projectResponse.TypeOfProjects[i].TypeRooms[j].amenities?.split(','),
                            size: projectResponse.TypeOfProjects[i].TypeRooms[j].size,
                            images: projectResponse.TypeOfProjects[i].TypeRooms[j].Images
                        })
                    }

                }


                // response.Project = {

                // }
                // response.TypeRoom = {

                // }
                // if (response.Project.features) {
                //     response.Project.features = response.Project.features.split(',')
                // }
                // if (response.Project.attractions) {
                //     response.Project.attractions = response.Project.attractions.split(',')
                // }
                // if (typeRoomResponse) {
                //     response.typeRooms = typeRoomResponse;
                //     for (let i = 0; i < response.typeRooms.length; i++) {
                //         if (response.typeRooms[i].bedTypes) {
                //             response.typeRooms[i].bedTypes = response.typeRooms[i].bedTypes.split(',');
                //         }
                //         if (response.typeRooms[i].amenities) {
                //             response.typeRooms[i].amenities = response.typeRooms[i].amenities.split(',');
                //         }

                //     }
                // }
            }
            resolve({
                err: response ? 0 : 1,
                message: response ? `Project ${id} found` : `Can not find Project with id: ${id}!`,
                data: response ? response : null,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const changeDate = ({
    openDate
}, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const errorMessage = [];
            const project = await db.Project.findOne({
                where: {
                    id
                }
            })
            let ExDate = new Date(project.openDate).getTime();
            let NewDate = new Date(convertDate(openDate)).getTime();

            if (ExDate > NewDate || ExDate == NewDate) {
                errorMessage.push("Can not change openDate because new date is less than old openDate")
            } else {
                const update = await db.Project.update({
                    openDate: convertDate(openDate)
                }, {
                    where: {
                        id
                    }
                })
                const user = await db.ReservationTicket.findAll({
                    where: {
                        projectID: id,
                        status: 1
                    }
                })
                errorMessage.push("Change openDate Success")
                for (let i = 0; i < user.length; i++) {
                    const user1 = await db.User.findByPk(user[i].userID)
                    let transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: process.env.GOOGE_APP_EMAIL,
                            pass: process.env.GOOGLE_APP_PASSWORD,
                        },
                    });
                    let mailOptions = {
                        from: "Tivas",
                        to: `${user1.email}`,
                        subject: "Confirm received email",
                        text: `Open date of ${project.name} is move to ${openDate} `
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("Email sent: " + info.response);
                        }
                    });

                }
            }
            resolve({
                err: project ? 1 : 0,
                mess: project ? errorMessage[0] : errorMessage[0]
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const openReservationTicket = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const message = [];
            const dateNow = new Date().toDateString()
            const check = await db.Project.findByPk(id)
            if (check) {
                // if(check.reservationDate !== dateNow){
                //     message.push("not in the time to buy")
                // }else{
                await db.Project.update({
                    status: 1,
                }, {
                    where: {
                        id
                    }
                })
                // Fetch records that need to be updated
                const timeSharesToUpdate = await db.TimeShare.findAll({
                    include: [
                        {
                            model: db.TypeRoom,
                            required: true,
                            include: {
                                model: db.TypeOfProject,
                                required: true,
                                as: 'TypeOfProject',
                                where: {
                                    projectID: id,
                                },
                            },
                        },
                    ],
                });

                // Perform updates in memory
                timeSharesToUpdate.forEach((timeShare) => {
                    timeShare.saleStatus = 1;
                });

                // Save changes back to the database
                await Promise.all(timeSharesToUpdate.map((timeShare) => timeShare.save()));
                message.push("You can buy reservation ticket now")
                // }
            } else {
                message.push("Can not buy reservation ticket now")

            }
            resolve({
                err: check ? 0 : 1,
                mess: check ? message[0] : message[0]
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const openBooking = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const message = [];
            const dateNow = new Date().toDateString()
            const check = await db.Project.findByPk(id)
            if (check && check.status == 1) {
                // if(check.openDate !== dateNow){
                //     message.push("not in the time to buy")
                // }else{
                await db.Project.update({
                    status: 2,
                }, {
                    where: {
                        id
                    }
                })
                // await db.ReservationTicket.destroy({
                //     where : {
                //         status : 0
                //     }
                // })
                message.push("This project is open now")
                // }
            } else {
                message.push("Project is not available")

            }
            resolve({
                err: check ? 0 : 1,
                mess: check ? message[0] : message[0]
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}