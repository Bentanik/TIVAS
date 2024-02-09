import db from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op } from "sequelize";

const deleteTypeRoomImage = (fileData) => {
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
                    quantity: 0
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

export const createTypeRoom = ({
    name,
    bedrooms,
    persons,
    kitchen,
    entertainment,
    features,
    policies,
    description,
    projectID,
    type,
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let typeResponse;
            let projectResponse;
            let typeOfProjectResponse;
            let typeRoomResponse;
            let imageResponse;
            const imageTypeRoomArray = [];

            //Find type is existed in DB
            if (type) {
                typeResponse = await db.Type.findOne({
                    where: {
                        name: type,
                    }
                });
            }

            //Find project is existed in DB
            if (projectID) {
                projectResponse = await db.Project.findByPk(projectID);
            }
            //Find project has type
            if (typeResponse && projectResponse) {
                typeOfProjectResponse = await db.TypeOfProject.findOne({
                    where: {
                        projectID: projectResponse.id,
                        typeID: typeResponse.id
                    }
                })
                if (typeOfProjectResponse) {
                    typeRoomResponse = await db.TypeRoom.create({
                        name,
                        bedrooms,
                        persons,
                        kitchen,
                        entertainment,
                        features,
                        policies,
                        description,
                        typeOfProjectID: typeOfProjectResponse.id,
                        thumbnailPathUrl: fileData.thumbnail ? fileData.thumbnail[0].path : null,
                        thumbnailPathName: fileData.thumbnail ? fileData.thumbnail[0].filename : null,
                    })

                    //Import images to imageTable
                    if (typeRoomResponse && fileData.images) {
                        for (let i = 0; i < fileData.images.length; i++) {
                            const image = {
                                pathUrl: fileData.images[i].path,
                                pathName: fileData.images[i].filename,
                                typeRoomID: typeRoomResponse.id
                            }
                            imageTypeRoomArray.push(image);
                        }
                        await db.Image.bulkCreate(imageTypeRoomArray);
                    }
                }
            }
            resolve({
                err: typeOfProjectResponse ? 0 : 1,
                message: !projectResponse
                    ? `Project with id: (${projectID}) does not exist!`
                    : !typeResponse
                        ? `TypeOfProject: (${type}) does not exist!`
                        : !typeOfProjectResponse
                            ? `Project with id: (${projectID}) does not have (${type})!`
                            : "Create successfully."
            })

            if (!typeOfProjectResponse && fileData) {
                deleteTypeRoomImage(fileData);
            }

        } catch (error) {
            console.log(error);
            reject(error);
            if (fileData) {
                deleteTypeRoomImage(fileData);
            }
        }
    });
}

export const updateTypeRoom = (id, {
    name,
    bedrooms,
    persons,
    kitchen,
    entertainment,
    features,
    policies,
    description,
    thumbnailDeleted,
    imagesDeleted,
}, fileData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let imageErrorMessage = [];
            const imageTypeRoomArray = [];
            //Check TypeRoom is existed in DB
            let typeRoomResult = await db.TypeRoom.findByPk(id);
            if (typeRoomResult) {
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
                    cloudinary.uploader.destroy(typeRoomResult.thumbnailPathName);
                }

                //Update
                await db.TypeRoom.update({
                    name,
                    bedrooms,
                    persons,
                    kitchen,
                    entertainment,
                    features,
                    policies,
                    description,
                    thumbnailPathUrl: fileData.thumbnail ? fileData.thumbnail[0].path : (parseInt(thumbnailDeleted) === 1) ? null : typeRoomResult.thumbnailPathUrl,
                    thumbnailPathName: fileData.thumbnail ? fileData.thumbnail[0].filename : (parseInt(thumbnailDeleted) === 1) ? null : typeRoomResult.thumbnailPathName,
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
                            typeRoomID: id
                        }
                        imageTypeRoomArray.push(image);
                    }
                    await db.Image.bulkCreate(imageTypeRoomArray);
                }

                if (!typeRoomResult && fileData) {
                    deleteTypeRoomImage(fileData);
                }
            }
            resolve({
                err: typeRoomResult ? 0 : 1,
                message: typeRoomResult ? 'Update Successfully.' : `Can not find TypeRoom with id: (${id})`,
                messageImage: imageErrorMessage.length !== 0 ? `Can not find Image: ${imageErrorMessage.join(',')}` : null,
            });
        } catch (error) {
            reject(error);
            console.log(error);
            if (fileData) {
                deleteTypeRoomImage(fileData);
            }
        }
    })
}

export const deleteTypeRoom = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const typeRoomResponse = await db.TypeRoom.findByPk(id);
            if (typeRoomResponse) {
                cloudinary.uploader.destroy(typeRoomResponse.thumbnailPathName);
                const imageTypeRoom = await db.Image.findAll({
                    where: {
                        typeRoomID: id,
                    }
                })
                if (imageTypeRoom) {
                    Promise.all(imageTypeRoom.map((image) => {
                        cloudinary.uploader.destroy(image.pathName);
                    }));
                }
                await typeRoomResponse.destroy();
            }
            resolve({
                err: typeRoomResponse ? 0 : 1,
                message: typeRoomResponse ? 'Deleted Successfully.' : `Can not find TypeRoom with id: ${id}`
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}
