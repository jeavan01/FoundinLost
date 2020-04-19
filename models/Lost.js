const mongoose = require('mongoose');

const USerSchema1 = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    Colour: {
        type: String,
        required: true
    },
    Text: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});


const Lost = mongoose.model('Lost', USerSchema1);

module.exports = Lost