const { hash, hashSync } = require("bcryptjs");
const userModel = require("../model/userModel");

module.exports = {
    creatUser: async (body) => {
        try {
            body.password = await hash(body, password, 10);
            delete body.confirmPassword;

            const user = await userModel.creatUser(body);
            if (user.error) {
                return {
                    error: user.error,
                }
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
