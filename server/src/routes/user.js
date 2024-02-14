import express from "express";
import passport from "passport";
import passportConfig from "../middlewares/passport";
import * as controllers from "../controllers";

const router = express.Router();

// User is logged in
// router.use(passport.authenticate("jwt", { session: false }));

router.get("/getAllUsers", controllers.getAll);
router.get("/sendmail", controllers.sendMail);

export default router;
