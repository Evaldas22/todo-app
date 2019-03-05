const mongoose = require('mongoose');

// schema defines how documents should look
const TODOSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// model acts as an interface, providing methods
// to edit data it DB
module.exports = TODO = mongoose.model('todo', TODOSchema);