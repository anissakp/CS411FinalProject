const express = require('express');
const app = express();

const profileTypeRouter = require('./routes/profileTypeRouter');
const spotifyRouter = require('./routes/spotify/spotifyRouter');
const locationModel = require('./models/locationsModel');

app.use(express.json());

/*
GET ALL
When you go to the base page, show all location-profiles on the map immediately
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
Login
*/
app.get('/login', spotifyRouter);

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

/*
Checks what type of user you are, person or location, then send you to that type of location
*/
app.use(profileTypeRouter)



module.exports = app;