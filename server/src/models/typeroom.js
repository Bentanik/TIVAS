'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeRoom.hasMany(models.Room, {foreignKey: 'typeRoomID', ondelete: 'cascade', hooks: true});
      TypeRoom.belongsTo(models.TypeOfProject, {foreignkey: 'typeOfProjectID'})
      TypeRoom.hasMany(models.Image, {foreignKey: 'typeRoomID', ondelete: 'cascade', hooks: true});
      // define association here
    }
  }
  TypeRoom.init({
    name: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    persons: DataTypes.INTEGER,
    kitchen: DataTypes.STRING,
    entertainment: DataTypes.STRING,
    features: DataTypes.STRING,
    policies: DataTypes.STRING,
    description: DataTypes.STRING,
    typeOfProjectID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TypeRoom',
  });
  return TypeRoom;
};