import express from "express";
import * as controllers from "../controllers";

const router = express.Router();

router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.post("/renewtoken", controllers.reNewToken);

export default router;
