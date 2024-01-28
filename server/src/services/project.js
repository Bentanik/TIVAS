import db from "../models";
const cloudinary = require('cloudinary').v2;

export const createNewProject = ({
    name,
    description,
    buildingStatus
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [project, created] = await db.Project.findOrCreate({
                where: { name },
                defaults: {
                    name,
                    description,
                    buildingStatus,
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

export const getAllProject = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.Project.findAll({})
            resolve({
                err: data ? data : "[]",
                mess: data ? "List Projects" : "Not have Projects to view",
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
                err: deleted ? 1 : 0,
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
    buildingStatus
},id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const [project, updated] = await db.Project.update({
                    name,
                    description,
                    buildingStatus},
                {where: { id : id }
            })
            resolve({
                err: updated ? updated : 0,
                mess: updated ? "Update Project Successfully." : "Update Fail",
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}