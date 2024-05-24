const { models } = require("./index");

module.exports = {
  creatUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      body.password = hash(body, password, 10);
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getUser: async (userId, userName) => {
    try {
      const user = await models.users.findOne({
        ...(userId
          ? { where: { userId: userId } }
          : { where: { userName: userName } }),
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
