const route = require("express").Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

route.get("/getUser", getUser);
route.post("/createUser", createUser);
route.put("/updateUser", updateUser);
route.delete("/deleteUser", deleteUser);

module.exports = route;
