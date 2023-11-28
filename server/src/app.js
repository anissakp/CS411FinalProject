const express = require('express');
const app = express();

const profileTypeRouter = require('./routes/profileTypeRouter');

app.use(express.json());

/*
When you go to the base page, show all location-profiles on the map immediately
*/
app.get('/*', httpGetAllLocations)


/*
Checks what type of user you are, person or location, then send you to that type of location
*/
app.use(profileController)

module.exports = app;