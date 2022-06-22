const Users = require('../models/users');

const updateOne = async ({userId, updatingUser}) => {
    const user = await Users.update(updatingUser, {
        where: {
            id: userId
        }
    });

    return user[0] === 1;
};

module.exports = updateOne;