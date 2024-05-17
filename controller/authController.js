var joi = require("joi");

const getUserschema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(15).required(),
});

const postUserSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(15).required(),
});
const updateUserschema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(15).required(),
});
const deleteUserschema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().min(8).max(15).required(),
});
// const getUser

const obj = {
  getUser: async (req, res) => {
    try {
      const validate = await getUserschema.validateAsync(req.query);
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
  postUser: async (req, res) => {
    try {
      const validate = await postUserSchema.validateAsync(req.body);
      return res.send({
        message: "creating new User",
        data: req.body,
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

module.exports = obj;
