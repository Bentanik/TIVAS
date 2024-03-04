import express from "express";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

router.put(
    "/rejectBooking",
    controllers.rejectBooking,
    )

router.put(
    "/payAdditionalBooking",
    controllers.payAddtionalBooking,
)
export default router;