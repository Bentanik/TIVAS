import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
      secretOrKey: process.env.JWT_ACCESS_KEY,
    },
    (payload, done) => {
      try {
        console.log("payload", payload);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
