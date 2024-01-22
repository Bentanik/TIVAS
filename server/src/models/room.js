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
      Room.belongsTo(models.Property ,{
        foreignKey: 'propertyID',
      });
      Room.belongsTo(models.TypeOfProject ,{
        foreignKey: 'typeOfProjectID',
      });
      // define association here
    }
  }
  Room.init({
    desc: DataTypes.STRING,
    typeOfProjectID: DataTypes.INTEGER,
    propertyID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};