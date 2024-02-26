import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post(
    "/create/:typeRoomID/:userID",
    controllers.createNewTimeShare,
)

export default router;
