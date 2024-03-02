import db, { Sequelize } from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op, fn, col, literal } from "sequelize";
const nodemailer = require("nodemailer");


export const createTicket = ({
    userID,
    projectID
}, code) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    id: userID
                }
            })
            let Message =[];
                const check = await db.ReservationTicket.create({
                    code: code,
                    status: 0,
                    userID,
                    projectID,
                    timeshareID : null
                })
                Message.push("Create Success")
                let transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.GOOGE_APP_EMAIL,
                        pass: process.env.GOOGLE_APP_PASSWORD,
                    },
                });
                let mailOptions = {
                    from: "Tivas",
                    to: `${user.email}`,
                    subject: "Confirm received email",
                    text: `Your reservation ticket code is ${code}`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
                  });
            
            // const [ticket,created] = await db.ReservationTicket.findOrCreate({
            //     where : { code : 1 },
            //     default : {
            //         code : code,
            //         status : 0,
            //         userID,
            //         projectID
            //     }
            // })

            resolve({
                err: check ? 1 : 0,
                mess: check ? Message[0] : Message[0],
            })
            // resolve({
            //     err : ticket ? 0 : 1,
            //     mess : ticket ? "Success" : "Your reservation ticket create fail",
            // })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const activeTicket = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ticket = await db.ReservationTicket.findOne({
                where: {
                    id: id
                }
            })
            const [check, t] = await db.ReservationTicket.update({
                status: 1
            }, {
                where: {
                    id: id
                }, returning: true
            })
            if (t === 1) {
                const user = await db.User.findOne({
                    where: {
                        id: ticket.userID
                    }
                })
                let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.GOOGE_APP_EMAIL,
                  pass: process.env.GOOGLE_APP_PASSWORD,
                },
              });
            let mailOptions = {
                from: "Tivas",
                to: `${user.email}`,
                subject: "Confirm received email",
                text : `Your ticket ${ticket.code} is active now`  
              };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
            } 
           resolve({
            err: t ? 1 : 0,
            mess: t ?  "Your ticket active success" : "Your ticket active fail"
           })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

export const checkTicket = ({
    code,
    userID
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ticketResponse;
            let userTicketResponse;
            const userResponse = await db.User.findByPk(userID);
            if (userResponse) {
                ticketResponse = await db.ReservationTicket.findOne({
                    where: {
                        code,
                    }
                })
                console.log(ticketResponse);
                if (ticketResponse) {
                    if (ticketResponse.status === 1) {
                        userTicketResponse = await db.ReservationTicket.findOne({
                            where: {
                                code,
                                userID,
                            }
                        })
                    }
                }
            }
            resolve({
                err: userTicketResponse ? 0 : 1,
                message: !userResponse ?
                    `Can not find User (${userID})!` :
                    !ticketResponse ?
                        `Ticket (${code}) does not exist!`
                        : ticketResponse.status !== 1 ?
                            `Ticket (${code}) does not activate!`
                            : !userTicketResponse ?
                                `Ticket (${code}) does not belong to User (${userID})!` :
                                `Valid ticket.`,
                data: userTicketResponse ? code : null
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    });
}