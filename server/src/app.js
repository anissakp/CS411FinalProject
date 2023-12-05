const express = require('express');
const app = express();
const path = require('path');  // Import the 'path' module
const axios = require('axios'); // to call spotify router and shit

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
    "location": "665 Comm Ave",
    "latitude":"9.2874",
    "longitude":"-71.293"
    }
 */
app.post('/newLocation', async (req, res) => {

    //const makePlaylistResponse = app.post('/spotify/make-playlist');
    //console.log(makePlaylistResponse);
    //const playlistId = makePlaylistResponse.body.id;
    playlistId = null;
    userName = null;

    try {
        const makePlaylistResponse = await axios.post('http://localhost:3000/spotify/make-playlist', {
            playlistName: req.body.name,
            description: "Your playlist"
        })
        const getUser = await axios.get('http://localhost:3000/spotify/user')

        playlistId = makePlaylistResponse.data;
        userName = getUser.data;
    } catch (error) {
        console.error('Error in /make-playlist:', error);
        res.status(500).json({ error: 'Can not make playlist'}); 
    }

    console.log(playlistId);

    const newLocation = new locationModel({
        name: req.body.name,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude, 
        userID: userName,
        playlistID: playlistId
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

// Serve static files from the 'public' folder (map.html)
//http://localhost:3000/map
app.use(express.static(path.join(__dirname, 'public')));
// Use the mapRouter for the '/map' route
app.use('/map', mapRouter);

module.exports = app;