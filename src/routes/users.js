const express = require('express');
const router = express.Router();
const multer = require('multer');
const usersController = require('../controllers/index');
const {postUserValidator, loginValidator} = require('../validators/usersValidator');

const upload = multer();

// POST

router.post('/register', upload.none(), postUserValidator, async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const result = await usersController.createUser({name, email, password});
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
});

router.post('/login', upload.none(), loginValidator, async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const result = await usersController.loginUser({email, password});
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
});

module.exports = router;
