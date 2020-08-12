const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.subject.get);

router.post('/create', auth(), controllers.subject.post);

router.put('/edit/:id', auth(), controllers.subject.put);

router.delete('/delete/:id', auth(), controllers.subject.delete);

module.exports = router;