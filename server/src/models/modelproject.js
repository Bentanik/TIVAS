'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModelProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModelProject.belongsTo(models.Project);
      ModelProject.hasMany(models.Room);
      // define association here
    }
  }
  ModelProject.init({
    name: DataTypes.STRING,
    projectID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModelProject',
  });
  return ModelProject;
};