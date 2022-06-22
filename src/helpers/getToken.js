const config = require('../config/general');
const jwt = require('jsonwebtoken');

const getToken = async ({user}) => {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: config.auth.liveTimeAccessToken,
    });
    return {
        token,
    }
};

module.exports = getToken;
