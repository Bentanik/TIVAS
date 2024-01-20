import * as services from "../services";
import { missValue, notAuth } from "../middlewares/handle_errors";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  if (!username || !email || !password || !phoneNumber) {
    return missValue("Missing value!", res);
  }

  const reponses = await services.register(req.body);

  return res.status(200).json(reponses);
};

export const login = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username && !email) {
    return missValue("Missing value", res);
  }
  if (!password) {
    return missValue("Missing value", res);
  }

  const response = await services.login(req.body);
  const { accessToken, ...rest } = response;
  res.setHeader("Authorization", `Bearer ${accessToken}`);
  return res.status(200).json(rest);
};

export const reNewToken = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return notAuth("Unauthorization!");
  }
  const accessToken = authorization.split(" ")[1];
  jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
    if (err) {
      console.log(err);
      console.log(user);

      return notAuth("Access token may be invalid", res);
    }
    // const newToken = services.generateAccessToken(user);
    // res.setHeader("Authorization", `Bearer ${newToken}`);
    // return res.status(200).json({
    //   err: 0,
    //   mess: "Success",
    // });
  });
};
