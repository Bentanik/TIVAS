'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservation.belongsTo(models.User ,{
        foreignKey: 'userID',
      });
      Reservation.belongsTo(models.TimeShare ,{
        foreignKey: 'timeShareID',
      });
      Reservation.hasOne(models.Booking ,{
        foreignKey: 'reservationID',
        ondelete: 'cascade', hooks: true
      });
      // define association here
    }
  }
  Reservation.init({
    code: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    timeShareID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};