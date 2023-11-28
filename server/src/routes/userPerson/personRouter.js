const express = require('express');

const personRouter = express.Router();
const { userGetAllLocations } = require('./personController');

const spotifyRouter= require('../spotify/spotifyRouter');

//Show the user all the locations
//Show all the songs at a locatoin
//The user can click on a location then search for a reccomendation
//The user can click to add a sond reccomendation

/**
 * When you load in, get all lcoation profiles and display them
 * URL = http:://www.geogrooves.com/userPerson/id
 */
personRouter.get('/', userGetAllLocations);

/**
 * For your location get all the playlist for that location
 * URL = http:://www.geogrooves.com/userPerson/id
 */
personRouter.get('/:id', userGetLocationSongs);

/** 
 * When you look for a song, it redirects to spotify router
 * URL = http:://www.geogrooves.com/userPerson/search 
 * Not sure if this should have the location id in this as well??
 **/
personRouter.use('/search', spotifyRouter);

/**
 * When you add a song song reccomendation, call the controller (or you can make the function here)
 * The front end will have to send the id
 * URL = http:://www.geogrooves.com/userPerson/id
 */
personRouter.post('/:id', userAddNewRecomendation);


module.exports = personRouter;