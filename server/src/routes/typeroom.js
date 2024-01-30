import express from "express";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

router.post(
    "/create",
    uploadCloud.single('images'),
    controllers.createNewProperty
  );

export default router;
