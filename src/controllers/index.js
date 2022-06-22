const createUser = require('./createUser');
const getUserById = require('./getUserById');
const loginUser = require('./loginUser');
const updateUser = require('./updateUser');
const getAllWithPagination = require('./getAllWithPagination');

module.exports = {
    createUser,
    getUserById,
    loginUser,
    updateUser,
    getAllWithPagination
}