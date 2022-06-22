const Users = require('../models/users');

const selectByEmail = async ({ email }) => {
    const user = await Users.findOne({
        where: {
            email,
        }
    });
    return user?.get();
}

module.exports = selectByEmail;