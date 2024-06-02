taskModel: async (req, res) => {
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
  }