import { INTEGER } from "sequelize";
import { badRequest, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
import { response } from "express";
const cloudinary = require("cloudinary").v2;
var randomstring = require("randomstring");

export const createTicket = async (req,res) => {
    const code = randomstring.generate(6);
    const response = await services.createTicket(req.body,code);
    return res.status(200).json(response);
}

export const activeTicket = async (req,res) => {
    const {id} = req.params
    const response = await services.activeTicket(id)
    return res.status(200).json(response)
}