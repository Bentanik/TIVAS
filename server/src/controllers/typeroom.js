import { INTEGER } from "sequelize";
import { badRequest, internalServerError, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
import { response } from "express";
const cloudinary = require("cloudinary").v2;

const deleteTypeRoomImage = (fileData) => {
  if (fileData) {
    for (let i = 0; i < fileData.length; i++) {
      cloudinary.uploader.destroy(fileData[i].filename);
    }
  }
}

// export const createNewProperty = async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     if (req.file) {
//       cloudinary.uploader.destroy(req.file.filename);
//     }
//     return missValue("Missing value!", res);
//   }
//   const response = await services.createProperty(req.body, req.file);
//   return res.status(200).json(response);
// };

export const createNewTypeRoom = async (req, res) => {
  try {
    const { name, bedrooms, persons, kitchen, entertainment, features, policies, description, projectID, type } = req.body;
    if (!name || !bedrooms || !persons || !description || !projectID || !type) {
      if (req.files) {
        deleteTypeRoomImage(req.files);
      }
      return missValue("Missing value!", res);
    }
    if ((!/^\d+$/.test(bedrooms)) || (!/^\d+$/.test(persons)) || (!/^\d+$/.test(projectID))) {
      if (req.files) {
        deleteTypeRoomImage(req.files);
      }
      return badRequest("bedrooms, persons, projectID are required an INTEGER!", res);
    }

    const response = await services.createTypeRoom(req.body, req.files);
    return res.status(200).json(response);
  } catch (error) {
    if (req.files) {
      deleteTypeRoomImage(req.files);
    }
    console.log(error)
    return internalServerError("Error at Server Side!", res);
  }
  // const { name, description } = req.body;
  // if (!name || !description) {
  //   if (req.file) {
  //     cloudinary.uploader.destroy(req.file.filename);
  //   }
  //   return missValue("Missing value!", res);
  // }
  // const response = await services.createProperty(req.body, req.file);
  // return res.status(200).json(response);
};

export const updateTypeRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bedrooms, persons, kitchen, entertainment, features, policies, description, imagesDeleted } = req.body;
    if (!name || !bedrooms || !persons || !description || !id) {
      if (req.files) {
        deleteTypeRoomImage(req.files);
      }
      return missValue("Missing value!", res);
    }
    if ((!/^\d+$/.test(bedrooms)) || (!/^\d+$/.test(persons)) || (!/^\d+$/.test(id))) {
      if (req.files) {
        deleteTypeRoomImage(req.files);
      }
      return badRequest("bedrooms, persons, typeRoomID are required an INTEGER!", res);
    }
    if (imagesDeleted) {
      let imagesDeletedArray = imagesDeleted.split(',');
      Promise.all(imagesDeletedArray.map((image) => {
        if ((!/^\d+$/.test(image))) {
          if (req.files) {
            deleteTypeRoomImage(req.files);
          }
          return badRequest("imagesDeleted is required a string contains of an array of INTEGER!", res);
        }
      }))
    }
    const response = await services.updateTypeRoom(id, req.body, req.files);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error)
    return internalServerError("Error at Server Side!", res);
  }
  // const { name, description } = req.body;
  // if (!name || !description) {
  //   if (req.file) {
  //     cloudinary.uploader.destroy(req.file.filename);
  //   }
  //   return missValue("Missing value!", res);
  // }
  // const response = await services.createProperty(req.body, req.file);
  // return res.status(200).json(response);
};

export const deleteTypeRoom = async(req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteTypeRoom(id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return internalServerError("Error at Server Side!", res);
  }
}