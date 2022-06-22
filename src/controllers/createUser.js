const UserRepository = require('../repositories/index');
const {HttpError} = require('../errors/httpError');
const {encryptPassword} = require('../helpers/crypt');

const createUser = async ({name, email, password}) => {
    const user = await UserRepository.selectByEmail({email});

    if (user) {
        throw new HttpError(422, 'User already exists');
    }

    const passwordHash = password && encryptPassword(password);
    const createdUser = await UserRepository.createUser({name, email, passwordHash});

    delete createdUser.passwordHash;
    return createdUser;
}

module.exports = createUser;