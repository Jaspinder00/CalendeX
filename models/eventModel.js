const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    startTime: String,
    endTime: String,
    eventLink: String
});

module.exports = mongoose.model('Events', eventSchema);