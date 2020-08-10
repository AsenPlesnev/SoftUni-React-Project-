const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const gradeSchema = new Schema({

    value: {
        type: Number,
        required: true,
        min: [2, 'Grade must be between 2 and 6'],
        max: [6, 'Grade must be between 2 and 6']
    },

    subject: {
        type: ObjectId,
        ref: 'Subject'
    },

    student: {
        type: ObjectId,
        ref: 'Student'
    }
});

module.exports = new Model('Grade', gradeSchema);