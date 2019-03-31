const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Document = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        type: String, 
        required: true
    },
    document: {
        type: String,
        rquired: true
    }
});

module.exports = mongoose.model('Document', Document);