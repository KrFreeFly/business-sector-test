const UserRepository = require('../repositories/index');
const {HttpError} = require('../errors/httpError');
const getToken = require('../helpers/getToken');
const {checkPassword} = require('../helpers/crypt');

const loginUser = async ({email, password}) => {
    const user = await UserRepository.selectByEmail({email});

    if (!user || !checkPassword(password, user.passwordHash)) {
        throw new HttpError(401, 'Email or password incorrect');
    }

    return getToken({user});
}

module.exports = loginUser;