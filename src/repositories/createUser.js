const Users = require('../models/users');

const createUser = async ({name, email, passwordHash}) => {
    const user = await Users.create({name, email, passwordHash})
    return user?.get({plain: true});
};

module.exports = createUser;