const { hash } = require("bcryptjs");
const userModel = require("../model/userModel");

module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      delete body.confirmPassword;

      const user = await userModel.getUser(false, body.userName);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.password;
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
