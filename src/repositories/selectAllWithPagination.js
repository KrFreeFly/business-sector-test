const Users = require('../models/users');

const selectAllWithPagination = async ({limit, offset}) => {
    const users = await Users.findAll({
        limit,
        offset,
        order: [
            ['createdAt', 'ASC']
        ],
        attributes: {
            exclude: ['id', 'email', 'passwordHash']
        }
    });
    return users;
};

module.exports = selectAllWithPagination;