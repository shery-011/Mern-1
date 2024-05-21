const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnectin");

class users extends Model {}

users.init(
  {
    userid: {
      primaryKey: true,
      type: DataTypes.STRING(34),
    },
    userName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(34),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "users",
    sequelize,
  }
);

module.exports = users;
