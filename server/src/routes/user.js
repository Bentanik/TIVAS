import express from "express";
import passport from "passport";
import passportConfig from "../middlewares/passport";
import * as controllers from "../controllers";
import uploadCloud from "../middlewares/uploader";

const router = express.Router();

// User is logged in
// router.use(passport.authenticate("jwt", { session: false }));
router.get("/getuser/:username", controllers.getUser);
router.get("/getavtuser/:username", controllers.getAvatarUser);

router.put(
  "/edituser",
  uploadCloud.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  controllers.editUser
);

export default router;
