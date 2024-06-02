const { hash } = require("bcryptjs");
const userModel = require("../model/userModel");
const { v4: uuid } = require("uuid");

module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      delete body.confirmPassword;
      const isUser = await userModel.getUser(false, body.userName);
      if (isUser.error || isUser.response) {
        return {
          error: "user already exists",
        };
      }
      body.password = await hash(body.password, 10);
      body.userId = uuid();
      const user = await userModel.creatUser(body);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.dataValues.password;
      return {
        response: user.response.dataValues,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser: async (userId) => {
    try {
      const deleteUser = await userModel.deleteUser(userId);
      if (deleteUser.error || !deleteUser.response) {
        return {
          message: "unable to delete user!",
          error: deleteUser?.error || deleteUser.response,
        };
      }
      return {
        response: deleteUser.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateUser: async (body) => {
    try {
      const updateUser = await userModel.updateUser({ ...body });
      if (updateUser.error || !updateUser.response[0]) {
        return {
          message: "unable to update user",
          error: updateUser?.error || updateUser.response,
        };
      }
      return {
        message: "user updated Successfully",
        response: updateUser.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
