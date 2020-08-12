const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.student.get);

router.get('/:id', controllers.student.getById);

router.post('/create', auth(), controllers.student.post);

router.put('/edit/:id', auth(), controllers.student.put);

router.delete('/delete/:id', auth(), controllers.student.delete);

module.exports = router;