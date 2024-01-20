<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
=======
"use strict";
const { Model } = require("sequelize");
>>>>>>> master
module.exports = (sequelize, DataTypes) => {
  class RoleCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
<<<<<<< HEAD
  RoleCode.init({
    roleName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RoleCode',
  });
  return RoleCode;
};
=======
  RoleCode.init(
    {
      roleName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RoleCode",
    }
  );
  return RoleCode;
};
>>>>>>> master
