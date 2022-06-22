const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    const secret = process.env.JWT_SECRET;
    const token = req.headers.authorization;

    if(!token) {
        return next();
    }

    try {
        const user = jwt.verify(token, secret);

        if (user) {
            req.user = user;
        }

        return next();
    } catch (err) {
        return next(err);
    }
};

module.exports = jwtMiddleware;