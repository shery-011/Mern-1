const sequelize = require("../bin/dbConnectin");

const users = require("./definations/users");
const tasks = require("./definations/task");

const models = { users, tasks };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
