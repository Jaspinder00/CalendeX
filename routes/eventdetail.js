const express = require('express');
const eventModel = require('../models/eventModel');
const fs = require('fs');
const eventSection = JSON.parse(fs.readFileSync('./pages/eventList.json', 'utf-8'));
const allEventsPage = JSON.parse(fs.readFileSync('./pages/allevents.json', 'utf-8'));
const eventDetailPage = JSON.parse(fs.readFileSync('./pages/eventdetail.json', 'utf-8'));

const router = express.Router();

router.get('/', async(req, res) => {
    const detailQuery = req.query.id;
    if (detailQuery) {
        eventModel.findById(req.query.id).then(eventModel => {
            if (!eventModel) {
                return res.status(404).send();
            }
            const eventDetails = {
                elementType: "detail",
                title: eventModel.title,
                byline: `${eventModel.date} ${eventModel.startTime}`,
                body: eventModel.description
            }
            //console.log(eventModel.title);
            res.status(200).send(eventDetails);
        }).catch((error) => {
            res.status(500).send(error);
        });
    } else {
        try {
            let result = await eventDetailPage;
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
});


module.exports = router;
