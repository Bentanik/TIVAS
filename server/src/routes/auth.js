import express from "express";
import passport from "passport";
import passportConfig from "../middlewares/passport";
import * as controllers from "../controllers";

const router = express.Router();

// Local
router.post("/register", controllers.register);
router.post("/login", controllers.login);

// Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  controllers.loginGoogle
);

// Refresh token

export default router;
