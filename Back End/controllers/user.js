const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const registerCode = '9c834817-343a-4061-9ca3-fcc1384b4b5f';


module.exports = {
    post: {
        register: (req, res, next) => {
            const { email, username, password, confirmPassword, code } = req.body;

            //TODO VALIDATIONS

            if (!email || !username || !password || !confirmPassword || !code) {
                res.status(400).send("All fields are required!");
                return;
            }

            if (!(password === confirmPassword)) {
                res.status(400).send("Passwords don't match");
                return;
            }

            if (!(code === registerCode)) {
                res.status(400).send('Invalid register code');
                return;
            }

            models.User.create({ username, email, password })
                .then((createdUser) => {
                    console.log(createdUser);
                    return res.send(createdUser);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        login: (req, res, next) => {
            const { email, password } = req.body;
            models.User.findOne({ email })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send(user);
                })
                .catch(next);
        },
        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    }
}