'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ReservationTicket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            ReservationTicket.belongsTo(models.User, {
                foreignKey: 'userID',
            });
            ReservationTicket.belongsTo(models.Project, {
                foreignKey: 'projectID',
            });
            // define association here
        }
    }
    ReservationTicket.init({
        code: DataTypes.STRING,
        status: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
        projectID: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ReservationTicket',
    });
    return ReservationTicket;
};