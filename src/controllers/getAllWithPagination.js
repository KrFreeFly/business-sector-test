const UserRepository = require('../repositories/index');
const {HttpError} = require('../errors/httpError');

const getAllWithPagination = async ({limit, offset}) => {
    const users = await UserRepository.selectAllWithPagination({limit, offset});
    return users;
}

module.exports = getAllWithPagination;