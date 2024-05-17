const route = require("express").Router();
const {
  getUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../controller/authController");

route.get("/getUser", getUser);
route.post("/postUser", postUser);
route.put("/updateUser", updateUser);
route.delete("/deleteUser", deleteUser);

module.exports = route;
