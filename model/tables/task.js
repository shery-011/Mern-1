const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnectin");

class task extends Model {}

task.init(
  {
    taskid: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },

    password: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "task",
    sequelize,
  }
);
module.exports = task;
