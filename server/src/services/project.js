import db from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op } from "sequelize";

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
                where: {projectID: id},
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
            const queries = { raw: true, nest: true };
            const offset = (!page || +page <= 1) ? 0 : (+page - 1);
            const fLimit = (!limit || limit < 1) ? +process.env.LIMIT_PROJECT : limit;
            queries.offset = offset * fLimit;
            queries.limit = +fLimit;

            const fOrderType = (orderType === 'DESC') ? 'DESC' : 'ASC';
            const fOrderBy = (orderBy) ? orderBy : 'id';
            queries.order = [[fOrderBy, fOrderType]];
            const response = await db.Project.findAll({
                ...queries,
            })

            resolve({
                err: response ? 0 : 1,
                message: (response && response.length !== 0) ? `All of project in: page (${offset + 1}), limit (${fLimit}), orderType (${fOrderType}), orderBy (${fOrderBy})` : 'Can not find any Projects!',
                data: response,
                count: response ? response.length : 0,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const deleteProject = (id) => {
    return new Promise(async (resolve,reject) => {
        try{
            const deleted = await db.Project.destroy({
                where :{
                    id: id
                }
            })
            resolve({
                err: deleted ? 0 : 1,
                mess: deleted ? "Delete Successfully" : "Delete Fail",
            })
        }catch (error) {
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
},id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const updated = await db.Project.update({
                    name,
                    description,
                    buildingStatus,
                    location},
                {where: { id : id }
            })
            console.log(updated);
            resolve({
                err: updated ? 0 : 1 ,
                mess: updated ? "Update Project Successfully."  : "Update Fail",
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}
export const searchProject = ({ page, limit, orderType, orderBy, ...query }) => {
    return new Promise(async (resolve, reject) => {
        try {

            //condition clause
            const whereClause = {};
            for (const [key, value] of Object.entries(query)) {
                whereClause[key] = { [Op.substring]: value };
            }

            //Page and limit
            const queries = { raw: true, nest: true };
            const offset = (!page || +page <= 1) ? 0 : (+page - 1);
            const fLimit = (!limit || limit < 1) ? +process.env.LIMIT_PROJECT : limit;
            queries.offset = offset * fLimit;
            queries.limit = +fLimit;
            console.log(query)

            //Order
            const fOrderType = (orderType === 'DESC') ? 'DESC' : 'ASC';
            const fOrderBy = (orderBy) ? orderBy : 'id';
            queries.order = [[fOrderBy, fOrderType]];


            const response = await db.Project.findAndCountAll({
                where: whereClause,
                ...queries,
            })
            resolve({
                err: response ? 0 : 1,
                mess: (response && response.length !== 0) ? `Search Projects Results in: page (${offset + 1}), limit (${fLimit}), orderType (${fOrderType}), orderBy (${fOrderBy})` : "Can not find any Projects!",
                data: response,
                count: response ? response.length : 0,
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
                limit: 10,
                order: [['createdAt', 'DESC']],
            })
            resolve({
                err: response ? 0 : 1,
                mess: response ? "Top 10 new Projects" : "Can not find any Projects!",
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
            const response = await db.Project.findAll( {
                nest: true,
                include: [{
                    model: db.TypeOfProject,
                }]
            });
            console.log(response)
            resolve({
                err: response ? 0 : 1,
                message: response ? 'Project found' : `Can not find Project with id: ${id}`,
                data: response,
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}