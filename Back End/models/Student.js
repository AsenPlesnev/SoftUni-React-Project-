const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, ObjectId } = Schema.Types;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },

    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },

    grades: [
        {
            type: ObjectId,
            ref: 'Grade',
            require: false
        }
    ]
});

module.exports = new Model('Student', studentSchema);