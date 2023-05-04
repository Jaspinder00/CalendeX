const express = require('express');
const eventModel = require('../models/eventModel');
const userModel = require('../models/userModel')
const fs = require('fs');
const addEventPage = JSON.parse(fs.readFileSync('./pages/addevent.json', 'utf-8'));

const router = express.Router();

router.get('/', async (req, res) => {
    try {
	    let result = await addEventPage;
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

/*
router.get('/events', async (req, res) => {
    try {
        let eventData;
        const searchDate = req.query.date;
        if (searchDate) {
            eventData = await eventModel.find({ date: searchDate }).sort({date: 1, startTime: 1, title: 1});
        } else {
            eventData = await eventModel.find({}).sort({date: 1, startTime: 1, title: 1});
        }
        
        let eventContent = [];
        for (let key in eventData)
        {
            let queryParam = `./eventdetail?id=${eventData[key]._id}`;
            //console.log(`Query param is: ${queryParam}\n`);
            eventContent.push({
		        //_id: eventData[key]._id,
                datetimePrimaryLine: eventData[key].date,
                datetimeSecondaryLine: eventData[key].startTime,
                title: eventData[key].title,
                description: eventData[key].location,
                dividerColor: '#FF0000',
                link: {
                    xmodule: {
                        id: "cx_profile",
			relativePath: queryParam
                    }
                }
            });
        }
        eventSection.regionContent[0].items = eventContent;
        res.json(eventSection);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
*/

module.exports = router;