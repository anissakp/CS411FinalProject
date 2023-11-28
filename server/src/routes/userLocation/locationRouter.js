const express = require('express');

const locationRouter = express.Router();

const spotifyRouter = require('../spotify/spotifyRouter');
//update this so spotify router is used properly for everything


/**
 * Get current playlist from spotify
 * id = your location id
 * URL = http:://www.geogrooves.com/userLocation
 */
locationRouter.get('/', spotifyRouter);


/**
 * Add Songs
 */

locationRouter.post('/addSong', spotifyRouter);

/**
 * Delete Songs
 */
locationRouter.delete('/deleteSong', spotifyRouter);

module.exports = locationRouter;