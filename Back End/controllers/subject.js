const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Subject.find()
            .then((subjects) => res.send(subjects))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name } = req.body;

        if (!name) {
            res.status(400).send("Name is required");
            return;
        }

        models.Subject.create({ name })
            .then((createdSubject) => {
                return res.send(createdSubject);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { name } = req.body;



        models.Subject.updateOne({ _id: id }, { name })
            .then((updatedSubject) => res.send(updatedSubject))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Subject.deleteOne({ _id: id })
            .then((removedSubject) => res.send(removedSubject))
            .catch(next);
    }
}