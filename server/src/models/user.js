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
      User.hasMany(models.Reservation, {foreignKey: 'userID', ondelete: 'cascade', hooks: true});      
      // User.hasOne(models.RefundHistory, {
      //   foreignKey: 'userID',
      // });
      User.hasMany(models.TimeShare, {foreignKey: 'userID', ondelete: 'cascade', hooks: true});
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
      refundHistoryID: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
