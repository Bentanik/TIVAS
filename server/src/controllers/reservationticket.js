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

// export const checkTicket = async (req, res) => {
//     const { code } = req.body;
//     if(!code){
//         return missValue("Missing Value!", res);
//     }
//     const response = await services.checkTicket(req.body);
//     return res.status(200).json(response);
// }

export const createReservation = async(req, res) => {
    const { code, timeShareID, userID } = req.body;
    if(!code || !/^\d+$/.test(timeShareID) || !/^\d+$/.test(userID)){
        return missValue("Missing Value!", res);
    }
    const response = await services.createReservation(req.body);
    return res.status(200).json(response);
}

export const checkPriority = async (req,res) => {
    const {id} = req.params
    const response = await services.checkPriority(id)
    return res.status(200).json(response)
}

export const getTimeSharePriority = async (req, res) => {
    const {userID} = req.params;
    const response = await services.getTimeSharePriority(userID);
    return res.status(200).json(response);
}