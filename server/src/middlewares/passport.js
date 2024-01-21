import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt, Strategy } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// Passport JWT
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
      secretOrKey: process.env.JWT_ACCESS_KEY,
    },
    (payload, done) => {
      try {
        done(null, payload);
      } catch (error) {
        console.log("Error" + error);
        done(error, false);
      }
    }
  )
);

// Passport login Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        done(null, profile);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
