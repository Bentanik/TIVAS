import express from "express";
import passport from "passport";
import passportConfig from "../middlewares/passport";
import * as controllers from "../controllers";

const router = express.Router();

router.post(
  "/getAllUsers",
  // passport.authenticate("jwt", { session: false }),
  controllers.getAll
);


export default router;
