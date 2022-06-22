const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = require('../helpers/multer.js');
const usersController = require('../controllers/index');
const isAuthorized = require('../helpers/isAuthorized');
const {updateUserValidator} = require('../validators/usersValidator');
const dotenv = require('dotenv');

dotenv.config();

const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
});

// GET

router.get('/:id', isAuthorized, async (req, res, next) => {
    try {
        const initiatorUser = req.user;
        const id = +req.params.id;
        const result = await usersController.getUserById({userId: id, initiatorUser});
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
});

// PUT

router.put('/:id', isAuthorized, upload.single('photo'), updateUserValidator, async (req, res, next) => {
    try {
        const initiatorUser = req.user;
        const id = +req.params.id;
        const updatingUser = req.body;
        if (req.file) {
            updatingUser.photo = (process.env.HOST + process.env.PORT + '/' + req.file.filename);
        }
        const result = await usersController.updateUser({userId: id, initiatorUser, updatingUser})
        res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
})

module.exports = router;