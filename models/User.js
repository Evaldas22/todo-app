const mongoose = require('mongoose');

// schema defines how documents should look
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
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
module.exports = User = mongoose.model('user', UserSchema);