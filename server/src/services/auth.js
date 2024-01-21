import db from "../models";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      roleID: user.roleID,
    },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: "20s" }
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username || null,
      roleID: user.roleID,
    },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "365d" }
  );
};

export const register = ({
  username,
  email,
  password,
  phoneNumber,
  roleID = 3,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [user, created] = await db.User.findOrCreate({
        where: {
          [Op.or]: [{ username }, { email }],
        },
        defaults: {
          username,
          email,
          password: hashPassword(password),
          phoneNumber,
          type: "Local",
        },
      });
      const accessToken = created ? generateAccessToken(user) : null;
      const refreshToken = created ? generateRefreshToken(user) : null;
      if (refreshToken) {
        await db.User.update(
          {
            refreshToken,
          },
          {
            where: { id: user.id },
          }
        );
      }
      resolve({
        err: accessToken ? 0 : 1,
        mess: accessToken
          ? "Register successfully"
          : "Username or email is already in use",
        accessToken: `Bearer ${accessToken}`,
        refreshToken: user.refreshToken,
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const login = ({ username, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const object = username ? { username: username } : { email: email };
      const user = await db.User.findOne({
        where: {
          ...object,
        },
        raw: true,
      });
      const isChecked =
        user !== null && bcrypt.compareSync(password, user.password);
      const accessToken = isChecked ? generateAccessToken(user) : null;
      const refreshToken = isChecked ? generateRefreshToken(user) : null;

      if (refreshToken) {
        await db.User.update(
          {
            refreshToken: refreshToken,
          },
          {
            where: { id: user.id },
          }
        );
      }

      resolve({
        err: accessToken ? 0 : 1,
        mess: accessToken
          ? "Login successfully"
          : "Account or password not invalid!",
        data: accessToken
          ? {
              id: user.id,
              username: user.username,
              roleID: user.roleID,
            }
          : null,
        accessToken: accessToken,
        refreshToken: user?.refreshToken,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const loginGoogle = ({ email, roleID = 3 }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [user, created] = await db.User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          email,
          type: "Google",
        },
      });

      const accessToken =
        user.type === "Google" ? generateAccessToken(user) : null;
      const refreshToken =
        user.type === "Google" ? generateRefreshToken(user) : null;

      if (refreshToken) {
        await db.User.update(
          {
            refreshToken,
          },
          {
            where: { id: user.id },
          }
        );
      }

      resolve({
        err: accessToken ? 0 : 1,
        mess: accessToken
          ? "Login successfully"
          : "Email was used in account of system",
        data: accessToken
          ? {
              id: user.id,
              username: user.username || null,
              roleID: user.roleID || roleID,
            }
          : null,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const refreshToken = ({ refreshToken }) => {
  return new Promise(async (resolve, reject) => {
    try {
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_KEY,
        async (err, user) => {
          if (err) {
            console.log(err);
          } else {
            const newAccessToken = generateAccessToken(user);
            const newRefreshToken = generateRefreshToken(user);
            await db.User.update(
              {
                refreshToken: newRefreshToken,
              },
              {
                where: { id: user.id },
              }
            );
            resolve({ newRefreshToken, newAccessToken });
          }
        }
      );
    } catch (err) {
      reject(err);
    }
  });
};
