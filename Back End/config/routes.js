const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/subject', router.subject);

    app.use('/api/student', router.student);

    app.use('/api/grade', router.grade)

    //app.use('/api/subject', router.subject);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};