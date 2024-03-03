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
            let Message = [];
            const check = await db.ReservationTicket.create({
                code: code,
                status: 0,
                userID,
                projectID,
                timeshareID: null
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
                    text: `Your ticket ${ticket.code} is active now`
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
                mess: t ? "Your ticket active success" : "Your ticket active fail"
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
                data: userTicketResponse ? `Your code: ${code}` : null
            })
        } catch (error) {
            console.log(error);
            reject(error)
        }
    });
}

//1 nguoi ap 1 code cho 1 TimeShare
export const createReservation = ({
    code,
    timeShareID,
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ticketDuplicated;
            let userUsedTicket;
            const ticketResponse = await db.ReservationTicket.findOne({
                where: {
                    code,
                }
            })
            const timeShareResponse = await db.TimeShare.findByPk(timeShareID);
            console.log(code);
            console.log(timeShareID);
            if (ticketResponse && timeShareResponse) {
                ticketDuplicated = await db.ReservationTicket.findOne({
                    where: {
                        code,
                        timeShareID,
                    }
                })
                if (!ticketDuplicated) {
                    userUsedTicket = await db.ReservationTicket.findOne({
                        where: {
                            userID: ticketResponse.userID,
                            timeShareID,
                        }
                    })
                    if (!userUsedTicket) {
                        await db.ReservationTicket.update({
                            timeShareID,
                        }, {
                            where: {
                                code,
                            }
                        })
                    }
                }
            }
            resolve({
                err: !ticketDuplicated ? 0 : 1,
                message: !ticketResponse ?
                    `Ticket (${code}) does not exist!`
                    : !timeShareResponse ?
                        `TimeShare (${timeShareID}) does not exist!`
                        : ticketDuplicated ?
                            `TimeShare (${timeShareID}) has already registerd with the ticket (${code})!`
                            : userUsedTicket ?
                                `Can not use two or more tickets to register one TimeShare! (User (${ticketResponse.userID}) has already use one ticket to register TimeShare(${timeShareID}))`
                                : 'Create successfully.',
            })
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

//1 nguoi ap 2 code cho 1 TimeShare
// export const createReservation = ({
//     code,
//     timeShareID,
// }) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let ticketDuplicated;
//             const ticketResponse = await db.ReservationTicket.findOne({
//                 where: {
//                     code,
//                 }
//             })
//             const timeShareResponse = await db.TimeShare.findByPk(timeShareID);
//             console.log(code);
//             console.log(timeShareID);
//             if (ticketResponse && timeShareResponse) {
//                 ticketDuplicated = await db.ReservationTicket.findOne({
//                     where: {
//                         code,
//                         timeShareID,
//                     }
//                 })
//                 if (!ticketDuplicated) {
//                     await db.ReservationTicket.update({
//                         timeShareID,
//                     }, {
//                         where: {
//                             code,
//                         }
//                     })
//                 }
//             }
//             resolve({
//                 err: !ticketDuplicated ? 0 : 1,
//                 message: !ticketResponse ?
//                     `Ticket (${code}) does not exist!`
//                     : !timeShareResponse ?
//                         `TimeShare (${timeShareID}) does not exist!`
//                         : ticketDuplicated ?
//                             `TimeShare (${timeShareID}) has already registerd with the ticket (${code})`
//                             : 'Create successfully.',
//             })
//         } catch (error) {
//             console.log(error);
//             reject(error);
//         }
//     })
// }

export const checkPriority = (projectID) => {
    return new Promise(async (resolve, reject) => {
        try {

        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}



