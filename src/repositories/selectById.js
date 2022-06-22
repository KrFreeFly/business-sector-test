const Users = require('../models/users');

const selectById = async ({userId}) => {
    const user = await Users.findOne({
        where: {
            id: userId,
        }
    });
    return user?.get();
}

module.exports = selectById;