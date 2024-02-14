import db from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op } from "sequelize";

export const createProperty = ({
    name,
    description,
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const created = await db.Property.findOrCreate({
                where: { name },
                defaults: {
                    name,
                    description,
                    images: fileData?.path,
                    quantity : 0
                },
            }) 
            
            resolve({
                err: created ? 0 : 1,
                mess: created ? "Create Property Successfully." : "Property Name has been used!",
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