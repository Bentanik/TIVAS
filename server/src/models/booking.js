'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.Reservation ,{
        foreignKey: 'reservationID',
      });
      Booking.hasOne(models.Contract ,{
        foreignKey: 'bookingID',
        ondelete: 'cascade', hooks: true
      });
      // define association here
    }
  }
  Booking.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: DataTypes.INTEGER,
    priceBooking: DataTypes.DOUBLE,
    reservationID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};