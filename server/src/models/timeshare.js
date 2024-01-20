'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeShare extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TimeShare.belongsToMany(models.User, {through: models.Reservation});
      TimeShare.belongsTo(models.Room);
      // define association here
    }
  }
  TimeShare.init({
    price: DataTypes.DOUBLE,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    saleStatus: DataTypes.INTEGER,
    roomID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TimeShare',
  });
  return TimeShare;
};