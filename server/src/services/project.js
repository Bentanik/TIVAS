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