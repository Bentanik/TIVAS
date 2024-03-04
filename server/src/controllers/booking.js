import * as services from "../services";
import { missValue, notAuth } from "../middlewares/handle_errors";

export const rejectBooking = async(req, res) => {
    const response = await services.rejectBooking(req.body);
    return res.status(200).json(response);
}

export const payAddtionalBooking = async (req, res) => {
    const response = await services.payAdditionalBooking(req.body);
    return res.status(200).json(response);
}