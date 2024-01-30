'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.TimeShare ,{
        foreignKey: 'roomID',
      });
      Room.belongsTo(models.TypeRoom ,{
        foreignKey: 'typeRoomID',
      });
      Room.belongsTo(models.TypeOfProject ,{
        foreignKey: 'typeOfProjectID',
      });
      // define association here
    }
  }
  Room.init({
    typeOfProjectID: DataTypes.INTEGER,
    typeRoomID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};