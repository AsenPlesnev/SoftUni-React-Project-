const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Student.find().populate('grades')
            .then((students) => res.send(students))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, code, phone } = req.body;

        if (!name || !code || !phone) {
            res.status(400).send("All fields are required!");
            return;
        }

        if (!(code.length === 10)) {
            res.status(400).send("Code must be exactly 10 symbols long");
            return;
        }

        if (!(phone.length === 10)) {
            res.status(400).send("Phone must be exactly 10 symbols long");
            return;
        }


        models.Student.create({ name, code, phone, grades: [] })
            .then((createdStudent) => {
                return res.send(createdStudent);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { name, code, phone } = req.body;

        models.Student.updateOne({ _id: id }, { name, code, phone })
            .then((updatedStudent) => res.send(updatedStudent))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;

        models.Student.deleteOne({ _id: id })
            .then((removedStudent) => res.send(removedStudent))
            .catch(next);
    }
}
