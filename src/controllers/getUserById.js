const UserRepository = require('../repositories/index');
const {HttpError, ForbiddenHttpError} = require('../errors/httpError');

const getUserById = async ({userId, initiatorUser}) => {
    if (userId !== initiatorUser.id) {
        throw new ForbiddenHttpError();
    }
    const user = await UserRepository.selectByIdWithoutPassword({userId});

    if (!user) {
        throw new HttpError(404, 'User not found');
    }

    return user;
};

module.exports = getUserById;