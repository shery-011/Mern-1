const sequelize = require("../bin/dbConnectin");

const users = require("./tables/users");
const tasks = require("./tables/task");

const models = { users, tasks };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
