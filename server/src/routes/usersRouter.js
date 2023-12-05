const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});
const spotifyRouter = require('./spotify/spotifyRouter');


const usersRouter = express.Router();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.spotfiyClientId,
    clientSecret: process.env.spotfiyClientSecret,
    redirectUri:'http://localhost:3000/users'
});

usersRouter.get('/', (req, res) => {
    const error = req.query.error;
    const code =  req.query.code;
    const state = req.query.state;

    if (error) {
        console.log('Callback Error', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    // spotifyApi.authorizationCodeGrant(code).then(data => {
    //     spotifyApi.setAccessToken(data.body.access_token);
    //     spotifyApi.setRefreshToken(data.body.refresh_token);
    //     res.send('Authorization completed!');
    // })

    res.send("users");

});

usersRouter.get('/spotify', spotifyRouter);

module.exports = usersRouter;