import { INTEGER } from "sequelize";
import { badRequest, internalServerError, missValue } from "../middlewares/handle_errors";
import * as services from "../services";
import { response } from "express";

export const createNewReservation = async (req, res) => {
    try {
        const response = await services.createNewReservation(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return internalServerError("Error at Server Side!", res);
    }
}