const express = require('express');
const guestRouter = express.Router();

const spotifyRouter= require('./spotify/spotifyRouter');
const locationModel = require('../models/locationsModel');

/**
 * What can you do if you are not logged in: 
 * 1- Get all Locations on the map
 * 2- Get information of a specific location
 * 3- Get the songs of the location
 * 4- Search songs up from spotify
 * 5- Reccomend a song to a specific location
 * 
 * Maybe #3 needs to be folded into #2 as you would want the songs of the location in the information
 */

/**
 * When you load in, get all lcoation profiles and display them
 * URL = http:://www.geogrooves.com/
 */
guestRouter.get('/guestGetAll', async (req, res) => {
    try {
        const locationData = await locationModel.find();
        res.status(200).json(locationData);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});


/**
 * Get a specific Location
 * URL = http://localhost:3000/:id
 * Sends the playlist of the specific locationa as well
 */
// guestRouter.get('/:id', async (req, res) => {
//     try {
//         const locationDataById = await locationModel.findById(req.params.id);
//         res.status(200).json(locationDataById);
//     } catch (e) {
//         res.status(400).json({message: e.message});
//     }
// });

/** 
 * When you look for a song, it redirects to spotify router
 * URL = http://localhost:3000/spotify/search
 * Not sure if this should have the location id in this as well??
 **/
//guestRouter.use('/spotify', spotifyRouter);

/**
 * When you are at a location, post a new song
 * URL = http:://www.geogrooves.com/userPerson/id
 */
//personRouter.post('/:id', reccomendToLocation);


module.exports = guestRouter;