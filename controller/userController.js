var joi = require("joi");
const userService = require("../service/userService");

const getUserschema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(5).max(15).required(),
});

const createUserSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(5).max(15).required(),
});

module.exports = {
  getUser: async (req, res) => {
    try {
      const validate = await getUserschema.validateAsync(req.query);
      const user = await userService.creatUser(validate);

      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        message: "getting User data",
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      return res.send({
        message: "creating new User",
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const validate = await updateUserschema.validateAsync(req.body);
      return res.send({
        message: "Update data",
        data: validate,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await updateUserschema.validateAsync(req.query);
      return res.send({
        message: "delete User",
        data: req.query,
      });
    } catch (error) {
      res.send({
        message: error.message,
      });
    }
  },
};
