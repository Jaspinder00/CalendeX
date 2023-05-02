const express = require('express');
const eventModel = require('../models/eventModel');

const router = express.Router();

router.get('/', async (req, res) => {
    const date = req.query.date;
    //console.log(date);
    if (date) {
        const eventData = await eventModel.find({date: date});
        res.send(eventData);
    } else {
        //console.log("Connected to events route\n");
        const eventData = await eventModel.find({});
        // res.status(200).json(usersData);
        res.send(eventData);
    }
});

module.exports = router;