const express = require('express');
const profileTypeRouter = express.Router();

const personRouter = require('./userPerson/personRouter');
const locationRouter = require('./userLocation/locationRouter');

/**
 * If you are a person, use the person router and their methods
 */
profileTypeRouter.use('/userPerson', personRouter);

/**
 * If you are a location, use the person router and thier methods
 */
profileTypeRouter.use('/userLocation', locationRouter);

module.exports = profileTypeRouter;