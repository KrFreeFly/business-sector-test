const express = require('express');
const dotenv = require('dotenv');
const {HttpError} = require('./src/errors/httpError');
const jwtMiddleware = require('./src/helpers/jwtMiddleware');

dotenv.config();

const usersRouter = require('./src/routes/users');
const profilesRouter = require('./src/routes/profiles');
const allProfilesRouter = require('./src/routes/allProfiles');

const app = express();
app.use(express.static('public'));
app.use(jwtMiddleware);

app.use('/user', usersRouter);
app.use('/profile', profilesRouter);
app.use('/profiles', allProfilesRouter);

app.use((req, res) => {
    return res.status(404).json({
        description: 'Page not found',
    });
});

app.use((err, req, res, next) => {
    if (err instanceof HttpError) {
        return res.status(err.status).json({...err, message: err.message});
    }
    console.log('Internal server error', err);

    return res.status(500).json({
        message: 'Internal server error',
        error: err,
    });
});

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server opened on port ${port}`);
})

module.exports = app;
