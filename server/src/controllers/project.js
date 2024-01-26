import { INTEGER } from "sequelize";
import { badRequest, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
const cloudinary = require('cloudinary').v2;

//Create New Project
export const createNewProject = async (req, res) => {
  console.log(req.body)
  const { name, description, buildingStatus, destination } = req.body;
  if (!name || !description || !buildingStatus || !destination) {
    if (req.file) {
      cloudinary.uploader.destroy(req.file.filename);
    }
    return missValue("Missing value!", res);
  }
  if (!/^\d+$/.test(buildingStatus)){
    if (req.file) {
      cloudinary.uploader.destroy(req.file.filename);
    }
    return badRequest("Building Status is require an INTEGER!", res)
  }
  const response = await services.createNewProject(req.body, req.file);
  return res.status(200).json(response);
};


