import { INTEGER } from "sequelize";
import { badRequest, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
const cloudinary = require('cloudinary').v2;

//Create New Project
export const createNewProject = async (req, res) => {
  console.log(req.body)
  const { name, description, buildingStatus, destination } = req.body;
  console.log(req.body)
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

//Get All Project
export const getAllProject = async (req, res) => {
  const response = await services.getAllProject(req.query);
  return res.status(200).json(response)
}

//Search Project
export const searchProject = async (req, res) => {
  const response = await services.searchProject(req.query);
  return res.status(200).json(response);
}

//Get Top 10 New Projects
export const getTop10 = async (req, res) => {
  const response = await services.getTop10();
  return res.status(200).json(response);
}

//Get Project Details
export const getDetailsProject = async (req, res) => {
  const response = await services.getDetailsProject(req.params);
  return res.status(200).json(response);
}

