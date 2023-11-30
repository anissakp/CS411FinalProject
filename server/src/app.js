const express = require('express');
const app = express();

//const guestRouter = require('./routes/guestRouter');
const usersRouter = require('./routes/usersRouter');
const spotifyRouter = require('./routes/spotify/spotifyRouter');
const locationModel = require('./models/locationsModel');

app.use(express.json());

/*
GET: http://localhost:3000
Get All location-profiles on the map immediately
*/
app.get('/', async (req, res) => {
    try {
        const locationData = await locationModel.find();
        res.status(200).json(locationData);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});

/*
http://localhost:3000/spotify
*/
app.use('/spotify', spotifyRouter);

/**
 * POST: http://localhost:3000/newLocation
 * example body json:
 * {
    "name": "CDS",
    "location": "665 Comm Ave"
    }
 */
app.post('/newLocation', async (req, res) => {
    const newLocation = new locationModel({
        name: req.body.name,
        location: req.body.location
    })

    try {
        const locationToSave = await newLocation.save();
        res.status(200).json(locationToSave);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});

//random person
//app.use('/', guestRouter);

//users
app.use('/users', usersRouter);

module.exports = app;