const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    college: String,
    major: String,
    standing: String,
    events: Array
});

module.exports = mongoose.model('User', userSchema);