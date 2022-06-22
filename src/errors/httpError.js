class HttpError extends Error {
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.message = message;
        this.errors = errors;
    }
}

class ForbiddenHttpError extends HttpError {
    constructor(message = 'Forbidden') {
        super(403, message);
        this.status = 403;
        this.message = message;
    }
}

class UnauthorizedHttpError extends HttpError {
    constructor(message = 'Unauthorized') {
        super(401, message);
        this.status = 401;
        this.message = message;
    }
}

module.exports = {
    HttpError,
    ForbiddenHttpError,
    UnauthorizedHttpError,
};