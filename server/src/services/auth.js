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

export const register = ({ username, email, password, phoneNumber }) => {
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
        },
      });
      resolve({
        err: created ? 0 : 1,
        mess: created
          ? "Register successfully"
          : "Username or email is already in use",
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
      const isChecked = user && bcrypt.compareSync(password, user.password);

      const accessToken = isChecked ? generateAccessToken(user) : null;
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
        accessToken,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
