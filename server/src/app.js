const express = require('express');
const app = express();
const path = require('path');  // Import the 'path' module


//const guestRouter = require('./routes/guestRouter');
const usersRouter = require('./routes/usersRouter');
const spotifyRouter = require('./routes/spotify/spotifyRouter');
const locationModel = require('./models/locationsModel');
const mapRouter = require('./routes/map/mapRouter');

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


//users
app.use('/users', usersRouter);

// Serve static files from the 'public' folder (map.html)
//http://localhost:3000/map
app.use(express.static(path.join(__dirname, 'public')));
// Use the mapRouter for the '/map' route
app.use('/map', mapRouter);

module.exports = app;