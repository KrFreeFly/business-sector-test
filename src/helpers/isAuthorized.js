const {UnauthorizedHttpError} = require('../errors/httpError');

const isAuthorized = (req, res, next) => {
    const user = req.user;

    if (!user) {
        throw new UnauthorizedHttpError;
    }

    return next();
};

module.exports = isAuthorized;