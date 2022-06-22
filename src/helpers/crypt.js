const { createHmac, createCipheriv, createDecipheriv } =require('crypto');

const encryptPassword = (password) => {
    return createHmac('sha1', process.env.PASSWORD_HASH_SECRET).update(password).digest('hex');
};

const checkPassword = (password, passwordHash) => {
    return password && encryptPassword(password) === passwordHash;
}

module.exports = {
    encryptPassword,
    checkPassword,
}