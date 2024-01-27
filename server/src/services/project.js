import db from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Op } from "sequelize";

export const createNewProject = ({
    name,
    description,
    buildingStatus,
    destination
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [project, created] = await db.Project.findOrCreate({
                where: { name },
                defaults: {
                    name,
                    description,
                    buildingStatus,
                    destination,
                    images: fileData?.path,
                },
            })
            resolve({
                err: created ? 0 : 1,
                mess: created ? "Create Project Successfully." : "Project Name has been used!",
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

export const getAllProject = ({page, limit, orderType, orderBy}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const queries = {raw: true, nest: true};
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

export const searchProject = ({ type, content, page, limit, orderType, orderBy }) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Conditionally set the where clause based on the presence of type
            const whereClause = type
                ? { [type]: { [Op.substring]: content } }
                : { name: { [Op.substring]: content } };
            //Pagination
            //Page = 1 => Get position 0 (From 0)
            //Page = 2 => Get position 1 (From 1*limit)
            const queries = { raw: true, nest: true };
            const offset = (!page || +page <= 1) ? 0 : (+page - 1);
            const fLimit = (!limit || limit < 1) ? +process.env.LIMIT_PROJECT : limit;
            queries.offset = offset * fLimit;
            queries.limit = +fLimit;

            //Order
            const fOrderType = (orderType === 'DESC') ? 'DESC' : 'ASC';
            const fOrderBy = (orderBy) ? orderBy : 'id';
            queries.order = [[fOrderBy, fOrderType]];

            const response = await db.Project.findAndCountAll({
                where: {...whereClause},
                ...queries,
            })
            resolve({
                err: response ? 0 : 1,
                mess: (response && response.length !== 0) ? `Search Projects Results in: page (${offset + 1}), type (${type ? type : 'name'}), content (${content}), limit (${fLimit}), orderType (${fOrderType}), orderBy (${fOrderBy})` : "Can not find any Projects!",
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
    return new Promise( async(resolve, reject) => {
        try {
            const response = await db.Project.findAndCountAll({
                limit: 10,
                order: [['createdAt','DESC']],
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

export const getDetailsProject = ({id}) => {
    return new Promise( async(resolve, reject) => {
        try {
            const response = await db.Project.findByPk(id);
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