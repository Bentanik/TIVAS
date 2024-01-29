import express from "express";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

router.post(
  "/create",
  uploadCloud.single('image'),
  controllers.createNewProject
);
router.get("/getAll",controllers.getAllProject)
router.delete("/delete/:id",controllers.deleteProjects)
router.put("/update/:id",uploadCloud.single('image'),controllers.updateProjects)

export default router;
