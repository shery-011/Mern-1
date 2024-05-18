
module.exports = {
    creatUser: (body) => {
        try {
            body.password = hash(body, password, 10);
            return {
                response: body,
            };
        } catch (error) {
            return {
                error: error,
            };
        }
    },
}
