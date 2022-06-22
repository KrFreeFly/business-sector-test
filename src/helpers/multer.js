const multer = require('multer');
const {HttpError} = require('../errors/httpError');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = file.originalname.split('.').pop();

        if (extension !== ('jpg' || 'png')) {
            return cb('Incorrect file type. Only .jpg and .png accepted');
        }

        cb(null, uniqueSuffix + '.' + extension);
    }
})

module.exports = storage;