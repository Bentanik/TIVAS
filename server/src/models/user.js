"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.RoleCode, {
        foreignKey: 'roleID',
      });
      User.belongsToMany(models.TimeShare, {through: models.Reservation}, {
        foreignKey: 'userID',
      });
      User.hasOne(models.RefundHistory, {
        foreignKey: 'userID',
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      banStatus: DataTypes.BOOLEAN,
      roleID: DataTypes.INTEGER,
      refreshToken: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
