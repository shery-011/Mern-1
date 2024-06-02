const { response } = require("../app");
const { models } = require("./index");
const { update } = require("./tables/users");

module.exports = {
  creatUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      body.password = hash(body, password, 10);
      return {
        message: "user created!",
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
  deleteUser: async (userId) => {
    try {
      const deleteUser = await models.users.destroy({
        where: { userId: userId },
      });
      return {
        response: deleteUser,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateUser: async ({ userId, ...body }) => {
    try {
      const updateUser = await models.users.update(
        { ...body },
        {
          where: { userId: userId },
        }
      );
      return {
        response: updateUser
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
