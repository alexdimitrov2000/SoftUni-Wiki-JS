const mongoose = require('mongoose');
const Model = mongoose.model;
const Schema = mongoose.Schema;
const { String, ObjectId, Number, Boolean } = Schema.Types;

const articleSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Article title is required!'],
        unique: [true, 'This article title already exists.'],
        minlength: [5, 'Article title must be at least 5 symbols long.']
    },
    description: {
        type: String,
        required: [true, 'Article description is required!'],
        minlength: [20, 'Article description must be at least 20 symbols long.']
    },
    author: { type: ObjectId, ref: 'User' },
    creationDate: {
        type: Schema.Types.Date,
        default: Date.now
    }
});

module.exports = new Model('Article', articleSchema);