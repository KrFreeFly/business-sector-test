const Joi = require('joi');
const {HttpError} = require('../errors/httpError');

const validate = (reqField, schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[reqField], { abortEarly: false });
        let errors = [];
        if (error) {
            errors = error.details.map((detail) => {
                return {
                    type: detail.type,
                    value: detail.context.value,
                    path: detail.path,
                }
            })
            throw new HttpError(400, 'Validation error', errors);
        }

        return next();
    }
}

const validateBody = (schema) => {
    return validate('body', schema);
};

const validateQuery = (schema) => {
    return validate('query', schema);
};

const postUserValidator = validateBody(Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}));

const loginValidator = validateBody(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}));

const getAllValidator = validateQuery(Joi.object({
    page: Joi.number().integer().min(1).required(),
}));

const updateUserValidator = validateBody(Joi.object({
    name: Joi.string(),
    surname: Joi.string(),
    email: Joi.string().email(),
    gender: Joi.string().valid('Male', 'Female'),
    photo: Joi.string(),
}));

module.exports = {
    postUserValidator,
    loginValidator,
    getAllValidator,
    updateUserValidator,
};