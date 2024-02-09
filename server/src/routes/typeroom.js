import express from "express";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();

// router.post(
//     "/create",
//     uploadCloud.single('images'),
//     controllers.createNewProperty
//   );

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
  controllers.createNewTypeRoom
)

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
  controllers.updateTypeRoom
)

router.delete(
  "/delete/:id",
  controllers.deleteTypeRoom
)

export default router;
