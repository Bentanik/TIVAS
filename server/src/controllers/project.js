import { INTEGER } from "sequelize";
import { badRequest, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
import { response } from "express";
const cloudinary = require("cloudinary").v2;

//Create New Project
export const createNewProject = async (req, res) => {
  const { name, description, buildingStatus } = req.body;
  console.log(`Buidling Status: ${buildingStatus}`);
  console.log(`Type of Building Status: ${typeof parseInt(buildingStatus)}`);
  if (!name || !description || !buildingStatus) {
    if (req.file) {
      cloudinary.uploader.destroy(req.file.filename);
    }
    return missValue("Missing value!", res);
  }
  if (!/^\d+$/.test(buildingStatus)) {
    if (req.file) {
      cloudinary.uploader.destroy(req.file.filename);
    }
    return badRequest("Building Status is require an INTEGER!", res);
  }
  const response = await services.createNewProject(req.body, req.file);
  return res.status(200).json(response);
};

export const deleteProjects = async (req, res) => {
  const { id } = req.params;
  const response = await services.deleteProject(id);
  return res.status(200).json(response);
};

export const updateProjects = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const response = await services.updateProject(req.body, id);
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

