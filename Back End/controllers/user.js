const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const registerCode = 'b88c4d60-1e85-44a3-b377-39745f826a97';


module.exports = {
    post: {
        register: (req, res, next) => {
            const { email, password, confirmPassword, code } = req.body;

            //TODO VALIDATIONS

            if (!email || !password || !confirmPassword || !code) {
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

            models.User.create({ email, password })
                .then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.header("Authorization", token).send(createdUser);
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        login: (req, res, next) => {
            const { email, password } = req.body;

            if (!email || !password) {
                res.status(400).send("All fields are required!");
                return;
            }

            models.User.findOne({ email })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header("Authorization", token).send(user);
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