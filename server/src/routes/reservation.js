import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post(
    "/create",
    controllers.createNewReservation
)
export default router;
