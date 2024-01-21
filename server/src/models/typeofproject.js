'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeOfProject.belongsTo(models.Project)
      TypeOfProject.belongsTo(models.Type)
      // define association here
    }
  }
  TypeOfProject.init({
    projectID: DataTypes.INTEGER,
    typeID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TypeOfProject',
  });
  return TypeOfProject;
};