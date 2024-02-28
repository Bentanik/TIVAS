import nodemailer from "nodemailer";
import ejs from "ejs";
import db from "../models";

const fs = require("fs");

export const sendMail = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GOOGE_APP_EMAIL,
          pass: process.env.GOOGLE_APP_PASSWORD,
        },
      });

      const emailTemplatePath = "src/template/EmailRegister/index.ejs";
      const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

      const compiledTemplate = ejs.compile(emailTemplate);

      const data = {
        subject: "Test Email",
        title: "Hello World",
        content: "This is a test email using Nodemailer and EJS.",
      };

      // Tạo nội dung email từ template
      const html = compiledTemplate(data);

      let mailOptions = {
        from: "Tivas",
        to: `vynmvse170255@fpt.edu.vn`,
        subject: "Confirm received email",
        html: html,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      resolve({
        err: 0,
        mess: "Okk",
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const getUser = ({ username }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.findOne({
        where: { username },
        attributes: {
          exclude: [
            "password",
            "banStatus",
            "roleID",
            "refreshToken",
            "refundHistoryID",
          ],
        },
        raw: true,
      });
      resolve({
        err: res ? 0 : 1,
        mess: res ? "Successully" : "No user data",
        data: res ? res : null,
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
