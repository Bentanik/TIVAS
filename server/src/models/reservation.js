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
      Reservation.belongsTo(models.User);
      Reservation.belongsTo(models.TimeShare);
      Reservation.hasOne(models.Booking);
      // define association here
    }
  }
  Reservation.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    price: DataTypes.DOUBLE,
    numberOfYear: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    timeShareID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};