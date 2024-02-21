import express from "express";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

router.post(
  "/create",
  uploadCloud.fields([
    {
      name: 'thumbnail', maxCount: 1
    },
    {
      name: 'images'
    },
  ]),
  controllers.createNewProject
)
router.get("/getAll",controllers.getAllProject)
router.delete("/delete/:id",controllers.deleteProjects)
router.put(
  "/update/:id",
  uploadCloud.fields([
    {
      name: 'thumbnail', maxCount: 1
    },
    {
      name: 'images',
    },
  ]),
  controllers.updateProjects
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
