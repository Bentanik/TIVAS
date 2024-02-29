import db from "../models";
import "dotenv/config";
import { Model, Op } from "sequelize";

const convertDate = (dateString) => {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    return date;
}

export const createNewTimeShare = (
    typeRoomID,
    userID,
    {
        price,
        startDate,
        endDate
    },
) => {
    return new Promise(async (resolve, reject) => {
        try {
            const startDateDB = convertDate(startDate);
            const endDateDB = convertDate(endDate);
            
            //Find TypeRoom in DB
            const typeRoomResponse = await db.TypeRoom.findByPk(typeRoomID);
            
            //Find User in DB
            const userResponse = await db.User.findByPk(userID);

            if(typeRoomResponse && userResponse){
                const {count, rows } = await db.Room.findAndCountAll({
                    where: {
                        typeRoomID,
                    }
                })
                const timeShareArray = [];
                for(let i = 0; i < count; i++){
                    timeShareArray.push({
                        price,
                        startDate: startDateDB,
                        endDate: endDateDB,
                        saleStatus: 0,
                        roomID: rows[i].id,
                        userID: userID,
                    })
                }
                await db.TimeShare.bulkCreate(timeShareArray);
            }

            resolve({
                err: (typeRoomResponse && userResponse) ? 0 : 1,
                message: !typeRoomResponse ?
                `Can not find TypeRoom (${typeRoomID})!`
                : !userResponse ?
                `Can not find User (${userID})!`
                : "Create successfully."
            })

        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}