import db, { Sequelize } from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op, fn, col, literal } from "sequelize";
import { pagination } from "../middlewares/pagination";

export const createNewProject = ({
    id,
    name,
    description,
    buildingStatus,
    location,
    type
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [project, created] = await db.Project.findOrCreate({
                where: { name },
                defaults: {
                    name,
                    description,
                    buildingStatus,
                    location,
                    images: fileData?.path,
                },
            })

            const [TypeOfProject, createdT] = await db.TypeOfProject.findOrCreate({
                where: { projectID: id },
                defaults: {
                    projectID: id,
                    typeID: type == "Villa" ? 1 : 2,
                }
            })
            resolve({
                err: (created && createdT) ? 0 : 1,
                mess: (created && createdT) ? "Create Project Successfully." : "Project Name has been used!",
            })

            if (fileData && !created) {
                cloudinary.uploader.destroy(fileData.filename)
            }
        } catch (error) {
            console.log(error);
            reject(error);
            if (fileData) {
                cloudinary.uploader.destroy(fileData.filename)
            }
        }
    })
}

export const getAllProject = ({ page, limit, orderType, orderBy }) => {
    return new Promise(async (resolve, reject) => {
        try {
            //pagination and limit
            const queries = pagination({ page, limit, orderType, orderBy });
            queries.nest = true;
            queries.raw = true;
            const response = await db.Project.findAll({
                attributes: ['id', 'name', 'location'],
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
            const deleted = await db.Project.destroy({
                where: {
                    id: id
                }
            })
            resolve({
                err: deleted ? 0 : 1,
                mess: deleted ? "Delete Successfully" : "Delete Fail",
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
    buildingStatus,
    location
}, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updated = await db.Project.update({
                name,
                description,
                buildingStatus,
                location
            },
                {
                    where: { id: id }
                })
            console.log(updated);
            resolve({
                err: updated ? 0 : 1,
                mess: updated ? "Update Project Successfully." : "Update Fail",
            })
        } catch (error) {
            console.log(error);
            reject(error);
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
            queries.raw = true;
            // queries.raw = true;
            const response = await db.Project.findAll({
                where: whereClause,
                attributes: ['id', 'name', 'location'],
                include: {
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
                group: ['TypeOfProjects.projectID', 'Project.name', 'Project.id', 'Project.location', 'Project.buildingStatus', 'Project.createdAt', 'Project.updatedAt'],
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
            const response = await db.Project.findAndCountAll({
                attributes: ['id', 'name', 'location'],
                limit: 10,
                order: [['createdAt', 'DESC']],
                raw: true,
            })
            resolve({
                err: (response && response.length !== 0) ? 0 : 1,
                mess: (response && response.length !== 0) ? "Get top 10 new projects results" : "Can not find any Projects!",
                data: response,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const getDetailsProject = ({ id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Project.findByPk(id, {
                attributes: {exclude: ['createdAt', 'updatedAt']},
                nest: true,
                raw: true,
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