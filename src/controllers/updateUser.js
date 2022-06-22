const UserRepository = require('../repositories/index');
const {ForbiddenHttpError} = require('../errors/httpError');

const updateUser = async ({userId, initiatorUser, updatingUser}) => {

    if (userId !== initiatorUser.id) {
        throw new ForbiddenHttpError();
    }

    const result = await UserRepository.updateUser({userId, updatingUser});

    if (result) {
        return await UserRepository.selectByIdWithoutPassword({userId})
    }

}

module.exports = updateUser;
