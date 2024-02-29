import db, { Sequelize } from "../models";
const cloudinary = require('cloudinary').v2;
import "dotenv/config";
import { Model, Op, fn, col, literal } from "sequelize";
import { pagination } from "../middlewares/pagination";

export const createNewReservation = ({
    userID,
    timeShareID,
    code,
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timeShareDuplicatedArray = [];
            const reservationArray = [];
            const timeShareIDDB = timeShareID.split(',');
            const userResponse = await db.User.findByPk(userID);
            const timeShareResponse = await db.TimeShare.findByPk(timeShareID);

            if (userResponse && timeShareResponse) {
                for (let i = 0; i < timeShareIDDB.length; i++) {
                    const reservationDuplicated = await db.Reservation.findOne({
                        userID,
                        timeShareID: timeShareIDDB[i],
                    })
                    if (reservationDuplicated) {
                        timeShareDuplicatedArray.push(timeShareIDDB[i])
                    }
                    else {
                        reservationArray.push({
                            userID,
                            timeShareID: timeShareIDDB[i],
                            code,
                        })
                    }
                }
                await db.Reservation.bulkCreate(reservationArray);
            }
            resolve({
                err: !(userResponse && timeShareResponse) ? 0 : 1,
                message: !userResponse ?
                    `Can not find User (${userID})!` :
                    !timeShareResponse ?
                    `Can not find TimeShare (${timeShareID})`
                    : reservationArray.length === 0 ?
                    `Create Failed`
                    : "Create successfully.",
                messageDuplicated: timeShareDuplicatedArray.length !== 0 ?
                    `User (${userID}) have already had reservation with TimeShare (${timeShareDuplicatedArray.join(',')})!`
                    : null
            })


        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}