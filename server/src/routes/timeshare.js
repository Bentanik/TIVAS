import express from "express";
import * as controllers from "../controllers";
const router = express.Router();

router.post(
    "/create/:typeRoomID/:userID",
    controllers.createNewTimeShare,
)

router.get(
    "/getAll",
    controllers.getAllTimeShare,
)

router.get(
    "/getAll/:projectID",
    controllers.getAllTimeShareOfProject,
)

router.get(
    "/:id",
    controllers.getDetailsTimeShare,
)

export default router;
