import { INTEGER } from "sequelize";
import { badRequest, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
import { response } from "express";
const cloudinary = require("cloudinary").v2;


export const createNewProperty = async (req, res) => {
    const { name, description} = req.body;
    if (!name || !description) {
      if (req.file) {
        cloudinary.uploader.destroy(req.file.filename);
      }
      return missValue("Missing value!", res);
    }
    const response = await services.createProperty(req.body, req.file);
    return res.status(200).json(response);
  };