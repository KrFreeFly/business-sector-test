const express = require('express');
const router = express.Router();
const usersController = require('../controllers/index');
const isAuthorized = require('../helpers/isAuthorized');
const config = require('../config/general');
const {getAllValidator} = require('../validators/usersValidator');

// GET

router.get('/', isAuthorized, getAllValidator, async (req, res, next) => {
    try {
        const {page} = req.query;
        const limit = config.pagination.defaultLimit
        const offset = (page - 1) * limit;
        const users = await usersController.getAllWithPagination({limit, offset});
        res.status(200).json(users);
    } catch(err) {
        return next(err);
    }
});

module.exports = router;