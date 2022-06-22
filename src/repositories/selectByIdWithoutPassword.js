const Users = require('../models/users');

const selectByIdWithoutPassword = async ({ userId }) => {
    const user = await Users.findOne({
        where: {
            id: userId,
        },
        attributes: {
            exclude: ['passwordHash']
        },
    });
    return user?.get();
}

module.exports = selectByIdWithoutPassword;