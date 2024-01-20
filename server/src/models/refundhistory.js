'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefundHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RefundHistory.hasOne(models.User);
      // define association here
    }
  }
  RefundHistory.init({
    date: DataTypes.DATE,
    paymentMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RefundHistory',
  });
  return RefundHistory;
};