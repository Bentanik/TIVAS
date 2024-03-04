import db, { Sequelize } from "../models";
const cloudinary = require("cloudinary").v2;
import "dotenv/config";
import { Model, Op, fn, col, literal, where } from "sequelize";
const nodemailer = require("nodemailer");

export const paymentReservation = (username) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.findOne({
        where: { username },
        raw: true,
      });
      resolve({
        err: res ? 0 : 1,
        mess: res ? "Successfully" : "Faile",
        data: res ? res : null,
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const createTicket = ({ userID, projectID }, code) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Message = [];
      let check;
      const projectResponse = await db.Project.findByPk(projectID);
      if (projectResponse) {
        const user = await db.User.findOne({
          where: {
            id: userID,
          },
        });
        check = await db.ReservationTicket.create({
          code: code,
          status: 0,
          userID,
          projectID,
          timeshareID: null,
        });
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
          text: `Your reservation ticket code is ${code}`,
        };
        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        Message.push("Create Success");
      } else {
        Message.push(
          `Project (${projectID}) is not open for buying Reservation Ticket!`
        );
      }

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
        err: check ? 0 : 1,
        mess: check ? Message[0] : Message[0],
      });
      // resolve({
      //     err : ticket ? 0 : 1,
      //     mess : ticket ? "Success" : "Your reservation ticket create fail",
      // })
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const activeTicket = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ticket = await db.ReservationTicket.findOne({
        where: {
          id: id,
        },
      });
      const [check, t] = await db.ReservationTicket.update(
        {
          status: 1,
        },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      );
      if (t === 1) {
        const user = await db.User.findOne({
          where: {
            id: ticket.userID,
          },
        });
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
          text: `Your ticket ${ticket.code} is active now`,
        };
        await transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
      resolve({
        err: t ? 0 : 1,
        mess: t ? "Your ticket active success" : "Your ticket active fail",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

// export const checkTicket = ({
//     code,
//     userID
// }) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let ticketResponse;
//             let userTicketResponse;
//             const userResponse = await db.User.findByPk(userID);
//             if (userResponse) {
//                 ticketResponse = await db.ReservationTicket.findOne({
//                     where: {
//                         code,
//                     }
//                 })
//                 console.log(ticketResponse);
//                 if (ticketResponse) {
//                     if (ticketResponse.status === 1) {
//                         userTicketResponse = await db.ReservationTicket.findOne({
//                             where: {
//                                 code,
//                                 userID,
//                             }
//                         })
//                     }
//                 }
//             }
//             resolve({
//                 err: userTicketResponse ? 0 : 1,
//                 message: !userResponse ?
//                     `Can not find User (${userID})!` :
//                     !ticketResponse ?
//                         `Ticket (${code}) does not exist!`
//                         : ticketResponse.status !== 1 ?
//                             `Ticket (${code}) does not activate!`
//                             : !userTicketResponse ?
//                                 `Ticket (${code}) does not belong to User (${userID})!` :
//                                 `Valid ticket.`,
//                 data: userTicketResponse ? `Your code: ${code}` : null
//             })
//         } catch (error) {
//             console.log(error);
//             reject(error)
//         }
//     });
// }

//1 nguoi ap 1 code cho 1 TimeShare
export const createReservation = ({ code, timeShareID, userID }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userTicketResponse;
      let ticketDuplicated;
      let userUsedTicket;
      let reservationResponse;
      let timeShareBelongsToProject;
      let projectResponse;
      const userResponse = await db.User.findByPk(userID);
      const ticketResponse = await db.ReservationTicket.findOne({
        where: {
          code,
        },
      });
      const timeShareResponse = await db.TimeShare.findByPk(timeShareID);
      if (userResponse && ticketResponse && timeShareResponse) {
        projectResponse = await db.Project.findOne({
          include: {
            model: db.TypeOfProject,
            required: true,
            include: {
              model: db.TypeRoom,
              required: true,
              include: {
                model: db.TimeShare,
                required: true,
                where: {
                  id: timeShareID,
                },
              },
            },
          },
        });
        if (projectResponse.status === 2) {
          timeShareBelongsToProject =
            projectResponse.id === ticketResponse.projectID;
          if (timeShareBelongsToProject === true) {
            if (ticketResponse.status === 1) {
              userTicketResponse = await db.ReservationTicket.findOne({
                where: {
                  code,
                  userID,
                },
              });
              if (userTicketResponse) {
                ticketDuplicated = await db.ReservationTicket.findOne({
                  where: {
                    code,
                    timeShareID,
                  },
                });
                if (!ticketDuplicated) {
                  userUsedTicket = await db.ReservationTicket.findOne({
                    where: {
                      userID: ticketResponse.userID,
                      timeShareID,
                    },
                  });
                  if (!userUsedTicket) {
                    reservationResponse = await db.ReservationTicket.update(
                      {
                        timeShareID,
                      },
                      {
                        where: {
                          code,
                        },
                      }
                    );
                  }
                }
              }
            }
          }
        }
      }

      resolve({
        err: reservationResponse ? 0 : 1,
        message: !userResponse
          ? `Can not find User (${userID})!`
          : !timeShareResponse
          ? `TimeShare (${timeShareID}) does not exist!`
          : !ticketResponse
          ? `Ticket (${code}) does not exist!`
          : projectResponse.status !== 2
          ? `Project (${projectResponse.id}) is not open for reservation!`
          : !timeShareBelongsToProject
          ? `TimeShare (${timeShareID}) does not belong to Project which is registerd in Ticket (${code})`
          : ticketResponse.status !== 1
          ? `Ticket (${code}) does not activate!`
          : !userTicketResponse
          ? `Ticket (${code}) does not belong to User (${userID})!`
          : ticketDuplicated
          ? `TimeShare (${timeShareID}) has already registerd with the ticket (${code})!`
          : userUsedTicket
          ? `Can not use two or more tickets to register one TimeShare! (User (${ticketResponse.userID}) has already use one ticket to register TimeShare(${timeShareID}))`
          : "Create successfully.",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

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

export const checkPriority = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const project = await db.Project.update(
        {
          status: 3,
        },
        {
          where: {
            id,
          },
        }
      );

      // Fetch records that need to be updated
      const timeSharesToUpdate = await db.TimeShare.findAll({
        include: [
          {
            model: db.TypeRoom,
            required: true,
            include: {
              model: db.TypeOfProject,
              required: true,
              as: "TypeOfProject",
              where: {
                projectID: id,
              },
            },
          },
        ],
      });

      // Perform updates in memory
      timeSharesToUpdate.forEach((timeShare) => {
        timeShare.saleStatus = 0;
      });

      // Save changes back to the database
      await Promise.all(
        timeSharesToUpdate.map((timeShare) => timeShare.save())
      );

      const ticketResponse = await db.ReservationTicket.findAll({
        where: {
          projectID: id,
          timeShareID: {
            [Op.ne]: null,
          },
          status: 1,
        },
      });
      const result = Object.groupBy(
        ticketResponse,
        ({ timeShareID }) => timeShareID
      );
      let count1 = 0;
      for (let properties in result) {
        count1 = count1 + 1;
      }
      for (let i = 0; i < count1; i++) {
        const quantityTimeshare = await db.TimeShare.findByPk(
          Object.getOwnPropertyNames(result)[i]
        );
        for (let x = 0; x < quantityTimeshare.quantity; x++) {
          const timeshare = result[Object.getOwnPropertyNames(result)[i]][x];
          if (timeshare) {
            await db.ReservationTicket.update(
              {
                status: 2,
              },
              {
                where: {
                  id: result[Object.getOwnPropertyNames(result)[i]][x]
                    .dataValues.id,
                },
              }
            );
            await db.TimeShare.decrement(
              {
                quantity: 1,
              },
              {
                where: {
                  id: result[Object.getOwnPropertyNames(result)[i]][x]
                    .dataValues.timeShareID,
                },
              }
            );
            const user = await db.User.findByPk(timeshare.userID);
            const ticket = await db.ReservationTicket.findByPk(
              result[Object.getOwnPropertyNames(result)[i]][x].dataValues.id
            );
            const endDateDB = ticket.updatedAt;
            endDateDB.setDate(endDateDB.getDate() + 7);
            console.log(endDateDB);
            await db.Booking.create({
              startDate: ticket.updatedAt,
              endDate: endDateDB,
              status: 0,
              priceBooking: 30,
              reservationTicketID: ticket.id,
            });
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
              text: `Trung timeshare co timeshare Id: ${ticket.timeShareID}`,
            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
          }
        }
      }
      // const {count , rows} = await db.ReservationTicket.findAndCountAll({
      //     where : {
      //         status : 2
      //     }
      // })

      resolve({
        err: ticketResponse && ticketResponse.length !== 0 ? 0 : 1,
        mess:
          ticketResponse && ticketResponse.length !== 0
            ? "Success"
            : "Fail (No ReservationTickets to check in DB)",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const getTimeSharePriority = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userResponse = await db.User.findByPk(userID);
      let timeSharePriority = [];
      let reservationTicketResponse;
      if (userResponse) {
        reservationTicketResponse = await db.ReservationTicket.findAll({
          where: {
            userID,
            status: 2,
          },
        });
        console.log(reservationTicketResponse);
        if (
          reservationTicketResponse &&
          reservationTicketResponse.length !== 0
        ) {
          for (let i = 0; i < reservationTicketResponse.length; i++) {
            console.log(reservationTicketResponse[i]);
            const timeShareResponse = await db.TimeShare.findByPk(
              reservationTicketResponse[i].timeShareID,
              {
                attributes: [
                  "id",
                  "price",
                  "startDate",
                  "endDate",
                  "saleStatus",
                  "createdAt",
                ],
                include: {
                  model: db.TypeRoom,
                  attributes: ["name", "persons"],
                  include: {
                    model: db.TypeOfProject,
                    attributes: ["id"],
                    include: {
                      model: db.Project,
                      attributes: ["name", "location", "thumbnailPathUrl"],
                    },
                  },
                },
              }
            );
            timeSharePriority.push(timeShareResponse);
          }
        }
      }
      resolve({
        err: timeSharePriority.length !== 0 ? 0 : 1,
        message: !userResponse
          ? `User (${userID}) does not exist!`
          : !reservationTicketResponse || reservationTicketResponse.length === 0
          ? `User (${userID}) does not have any TimeShare Priority after checking priority in the DB!`
          : timeSharePriority.length === 0
          ? "Can not find any TimeShares"
          : `TimeShares Priority of User (${userID}) found`,
        data: timeSharePriority.length !== 0 ? timeSharePriority : null,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
