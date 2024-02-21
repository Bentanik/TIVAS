import { INTEGER } from "sequelize";
import { badRequest, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
import { response } from "express";
const cloudinary = require("cloudinary").v2;


const deleteProjectImage = (fileData) => {
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

//Create New Project
export const createNewProject = async (req, res) => {
  try {
      const { name, description, buildingStatus} = req.body;
      if (!name || !description || !buildingStatus) {
        if (req.files) {
          deleteProjectImage(req.files);
        }
        return missValue("Missing value!", res);
      }
      if (!/^\d+$/.test(buildingStatus)) {
        if (req.files) {
          deleteProjectImage(req.files);
        }
        return badRequest("Building Status is require an INTEGER!", res);
      }
      const response = await services.createNewProject(req.body, req.files);
      return res.status(200).json(response);
  } catch (error) {
    if(req.files){
      deleteProjectImage(req.files)
    }
    console.log(error);
  }
  
};
//Delete Project
export const deleteProjects = async (req, res) => {
  const { id } = req.params;
  const response = await services.deleteProject(id);
  return res.status(200).json(response);
};
//Update Project
export const updateProjects = async (req, res) => {
  const { id } = req.params;
  const { name, description, buildingStatus} = req.body;
  if (!name || !description || !buildingStatus) {
    if (req.files) {
      deleteProjectImage(req.files);
    }
    return missValue("Missing value!", res);
  }
  if (!/^\d+$/.test(buildingStatus)) {
    if (req.files) {
      deleteProjectImage(req.files);
    }
    return badRequest("Building Status is require an INTEGER!", res);
  }
  const response = await services.updateProject(req.body, id, req.files);
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
  const { id } = req.params;
  const response = await services.getDetailsProject(id);
  return res.status(200).json(response);
}

