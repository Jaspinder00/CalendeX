const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    date: String,
    month: Number,
    year: Number,
    startTime: String,
    endTime: String,
    description: String,
    location: String,
    categories: Array
});

module.exports = mongoose.model('Events', eventSchema);