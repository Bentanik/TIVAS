import express from "express";
import * as controllers from "../controllers";
import verify_token from "../middlewares/verify_token";

const router = express.Router();

router.get("/getAllUsers", verify_token, controllers.getAll);

export default router;
