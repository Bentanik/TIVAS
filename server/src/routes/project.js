import express from "express";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

router.post(
  "/create",
  uploadCloud.single('image'),
  controllers.createNewProject
);

router.get(
  "/getAll",
  controllers.getAllProject
)

router.get(
  "/search",
  controllers.searchProject
)

router.get(
  "/top10",
  controllers.getTop10
)

router.get(
  "/:id",
  controllers.getDetailsProject
)

export default router;
