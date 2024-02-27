import db, { Sequelize } from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op, fn, col, literal } from "sequelize";
import { pagination } from "../middlewares/pagination";

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
            if (typeInDBError === 0) {
                [project, created] = await db.Project.findOrCreate({
                    where: { name },
                    defaults: {
                        name,
                        description,
                        location,
                        buildingStatus,
                        features,
                        attractions,
                        saleStatus: 0,
                        thumbnailPathUrl: fileData.thumbnail ? fileData.thumbnail[0].path : null,
                        thumbnailPathName: fileData.thumbnail ? fileData.thumbnail[0].filename : null,
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
            resolve({
                err: created ? 0 : 1,
                mess: typeInDBError > 0 ? `TypeOfProject: (${typeErrorMessage.join(',')}) not exist!` : created ? "Create Project Successfully." : "Project Name has been used!",
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
            const queries = pagination({ page, limit, orderType, orderBy });
            //queries.raw = true;
            const response = await db.Project.findAll({
                attributes: ['id', 'name', 'location', 'thumbnailPathUrl'],
                ...queries,
            })
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                message: (response && response.length !== 0) ? `Get all of projects results` : 'Can not find any projects!',
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
    saleStatus
}, id, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let imageErrorMessage = [];
            const imageProjectArray = [];
            //Check TypeRoom is existed in DB
            let projectResult = await db.Project.findByPk(id);
            if (projectResult) {
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
                    location,
                    buildingStatus,
                    features,
                    attractions,
                    saleStatus,
                    thumbnailPathUrl: fileData.thumbnail ? fileData.thumbnail[0].path : (parseInt(thumbnailDeleted) === 1) ? null : projectResult.thumbnailPathUrl,
                    thumbnailPathName: fileData.thumbnail ? fileData.thumbnail[0].filename : (parseInt(thumbnailDeleted) === 1) ? null : projectResult.thumbnailPathName,
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
            resolve({
                err: projectResult ? 0 : 1,
                message: projectResult ? 'Update Successfully.' : `Can not find Project with id: (${id})`,
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


export const searchProject = ({ page, limit, orderType, orderBy, type, ...query }) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type) {
                type = type.split(",");
            }
            //condition clause
            const whereClause = {};
            for (const [key, value] of Object.entries(query)) {
                whereClause[key] = { [Op.substring]: value };
            }

            //pagination and limit
            const queries = pagination({ page, limit, orderType, orderBy });
            queries.nest = true;
            //queries.raw = true;
            // queries.raw = true;
            const response = await db.Project.findAll({
                where: whereClause,
                attributes: ['id', 'name', 'location', 'thumbnailPathUrl'],
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
                ],
                group: ['TypeOfProjects.projectID', 'Project.name', 'Project.location', 'Project.thumbnailPathUrl', 'Project.id'],
                having: type ? (literal(`COUNT(TypeOfProjects.projectID) = ${type.length}`)) : literal((`COUNT(TypeOfProjects.projectID) > 0`)),
                ...queries,
                subQuery: false,
            });
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                mess: (response && response.length !== 0) ? `Search Projects Results` : "Can not find any Projects!",
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

export const getTop10 = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Project.findAll({
                attributes: ['id', 'name', 'location', 'thumbnailPathUrl', 'createdAt'],
                limit: 10,
                order: [['createdAt', 'DESC']],
            })
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                mess: (response && response.length !== 0) ? "Get top 10 new projects results" : "Can not find any Projects!",
                data: response,
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
            const response = await db.Project.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'thumbnailPathName'] },
                nest: true,
                //raw: true,
                include: {
                    model: db.Image,
                    attributes: ['id', 'pathUrl'],
                },
            });
            resolve({
                err: response ? 0 : 1,
                message: response ? `Project ${id} found` : `Can not find Project with id: ${id}`,
                data: response,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}