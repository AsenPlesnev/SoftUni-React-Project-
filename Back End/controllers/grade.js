const models = require('../models');

module.exports = {
    post: async (req, res, next) => {
        const id = req.params.id;
        const { value, subject } = req.body;

        if (!value || !subject) {
            res.status(400).send('All fields are required');
            return;
        }

        if (value < 2 || value > 6) {
            res.status(400).send('Grade value must be between 2 and 6');
        }

        let subjectObj = await models.Subject.findOne({ name: subject });

        models.Grade.create({ value, subject: subjectObj._id, student: id })
            .then((createdGrade) => {
                return Promise.all([
                    models.Student.updateOne({ _id: id }, { $push: { grades: createdGrade } }),
                    models.Grade.findOne({ _id: createdGrade._id })
                ]);
            })
            .then(([modifiedObj, gradeObj]) => {
                res.send(gradeObj);
            })
            .catch(next);

    }
}