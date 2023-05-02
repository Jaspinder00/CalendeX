const express = require('express');
const eventModel = require('../models/eventModel');
const fs = require('fs');
const eventSection = JSON.parse(fs.readFileSync('./pages/eventList.json', 'utf-8'));
const allEventsPage = JSON.parse(fs.readFileSync('./pages/allevents.json', 'utf-8'));

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send(allEventsPage)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.get('/events', async (req, res) => {
    try {
        let eventData;
        const searchDate = req.query.date;
        if (searchDate) {
            eventData = await eventModel.find({ date: searchDate });
        } else {
            eventData = await eventModel.find({});
        }
        
        let eventContent = [];
        for (let key in eventData)
        {
            eventContent.push({
                datetimePrimaryLine: eventData[key].date,
                datetimeSecondaryLine: eventData[key].startTime,
                title: eventData[key].title,
                description: eventData[key].eventLink,
                dividerColor: '#FF0000'
            });
        }
        eventSection.regionContent[0].items = eventContent;
        res.json(eventSection);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;