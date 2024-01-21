import * as services from "../services";
import { missValue, notAuth } from "../middlewares/handle_errors";

export const register = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  if (!username || !email || !password || !phoneNumber) {
    return missValue("Missing value!", res);
  }

  const reponses = await services.register(req.body);
  const { refreshToken, ...rest } = reponses;
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  return res.status(200).json(rest);
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
  const { refreshToken, ...rest } = response;
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  return res.status(200).json(rest);
};

// Login google
export const loginGoogle = async (req, res) => {
  const email = req.user.emails[0].value;

  const response = await services.loginGoogle({ email });
  const { refreshToken, ...rest } = response;
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  return res.status(200).json(rest);
};

// Refresh token
export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return notAuth("Access token may be expired or invalid", res);
  const response = await services.refreshToken({ refreshToken });
  const { newRefreshToken, ...rest } = response;
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  return res.status(200).json(rest);
};
