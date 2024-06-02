const sequelize = require("../bin/dbConnectin");

const users = require("./tables/users");
const tasks = require("./tables/task");

const models = { users, tasks };

// Relations

users.hasMany(tasks, { foreignKey: "userid" });
tasks.belongsTo(users, { foreignKey: "userid" ,});

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
