const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, '../../../.env')});

const spotifyRouter = express.Router();

const scopes = [
    'playlist-modify-public',
    'user-read-email',
    'user-read-private'
]; 

// const spotifyApi = new SpotifyWebApi({
//     clientId: process.env.spotifyClientId,
//     clientSecret: process.env.spotifyClientSecret,
//     redirectUri: 'http://localhost:3000/users'
// });

const spotifyApi = new SpotifyWebApi({
    clientId: '93c1c69c66864a5d998f72bf60c49f72',
    clientSecret: 'eecd235b96114904a1f1e1c989fd7160',
    redirectUri: 'http://localhost:3000/spotify/callback',
});

spotifyRouter.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes, null))
});

spotifyRouter.get('/callback', (req, res) => {
    const error = req.query.error;
    const code =  req.query.code;
    const state = req.query.state;

    if (error) {
        console.log('Callback Error', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    spotifyApi.authorizationCodeGrant(code).then(data => {
        spotifyApi.setAccessToken(data.body.access_token);
        spotifyApi.setRefreshToken(data.body.refresh_token);
        res.send('Authorization completed!');
    })
}); 

/**
 * GET: Search method for an artist 
 */ 
spotifyRouter.get('/search-artist', (req, res) => {
    const query = req.query.artist;

    spotifyApi.searchArtists(query)
        .then(data => {
            res.status(200).json(data.body);
        })
        .catch(error =>{
            res.status(500).json({error: error.message});
        })
});

module.exports = spotifyRouter;