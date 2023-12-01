const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, '../../../.env')});

const spotifyRouter = express.Router();

const scopes = [
    'playlist-modify-public',
    'playlist-modify-private',
    'user-read-email',
    'user-read-private'
]; 

const spotifyApi = new SpotifyWebApi({
    clientId: '93c1c69c66864a5d998f72bf60c49f72',
    clientSecret: 'eecd235b96114904a1f1e1c989fd7160',
    redirectUri: 'http://localhost:3000/spotify/callback',
});


/**
 * http://localhost:3000/spotify/login
 */
spotifyRouter.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes, null))
});
spotifyRouter.get('/callback', (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
        console.log('Callback Error', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    // Use the authorization code to request tokens
    spotifyApi.authorizationCodeGrant(code)
        .then(data => {
            const accessToken = data.body.access_token;
            const refreshToken = data.body.refresh_token;

            // Set the obtained access token for subsequent requests
            spotifyApi.setAccessToken(accessToken);
            spotifyApi.setRefreshToken(refreshToken);

            // Redirect or send a response as needed
            res.send('Authorization completed!');
        })
        .catch(error => {
            console.error('Error in authorizationCodeGrant:', error);
            res.status(500).json({ error: 'Internal server error during token exchange.' });
        });
});




/**
 * GET: Search method for an artist 
 * http://localhost:3000/spotify/search-artist
 */ 

spotifyRouter.get('/search-artist', (req, res) => {
    // Check if there is a valid access token
    const accessToken = spotifyApi.getAccessToken();
    if (!accessToken) {
        return res.status(401).json({ error: 'No valid access token provided.' });
    } 

    // Log the access token for debugging purposes
    console.log('Access Token:', accessToken);

    const query = req.query.artist;

    spotifyApi.searchArtists(query)
        .then(data => {
            // Check if there are artists in the response
            if (data.body.artists && data.body.artists.items.length > 0) {
                res.status(200).json(data.body.artists);
            } else {
                // If no artists found, send a custom error message
                res.status(404).json({ error: 'No artists found for the given query.' });
            }
        }) 
        .catch(error => {
            // Log the specific error for debugging purposes
            console.error('Error in /search-artist:', error);
            // Send an appropriate status code and error message
            res.status(500).json({ error: 'Internal server error.' });
        });
});

spotifyRouter.get('/search-track', async (req, res) => {
    try {
        // Check if there is a valid access token
        const accessToken = spotifyApi.getAccessToken();
        if (!accessToken) {
            return res.status(401).json({ error: 'No valid access token provided.' });
        }

        // Log the access token for debugging purposes
        console.log('Access Token:', accessToken);

        const query = req.query.track;

        // Use async/await for a cleaner error handling
        const data = await spotifyApi.searchTracks(query);

        // Check if there are tracks in the response
        if (data.body.tracks && data.body.tracks.items.length > 0) {
            res.status(200).json(data.body.tracks.items);
        } else {
            // If no tracks found, send a custom error message
            res.status(404).json({ error: 'No tracks found for the given query.' });
        }
    } catch (error) {
        // Log the specific error for debugging purposes
        console.error('Error in /search-track:', error);

        // Send an appropriate status code and error message
        res.status(500).json({ error: 'Internal server error.' });
    }
});

spotifyRouter.post('/make-playlist', (req, res) => {
    // Check if there is a valid access token
    const accessToken = spotifyApi.getAccessToken();
    if (!accessToken) {
        return res.status(401).json({ error: 'No valid access token provided.' });
    } 

    // Log the access token for debugging purposes
    console.log('Access Token:', accessToken);

    const playlistName = req.body.playlistName;
    const playlastDescription = req.body.description;

    spotifyApi.createPlaylist(playlistName, {'description': playlastDescription, 'public': true})
        .then(data => {
            console.log(data.body.id)
            res.status(200).json(data.body.id);   
        })
        .catch(error => {
            // Error in making playlist
            console.error('Error in /make-playlist:', error);
            // Send an appropriate status code and error message
            res.status(500).json({ error: 'Internal server error.' }); 
        });
});

/**
 * GET: Search a specific playlist using the playlist id 
 * http://localhost:3000/spotify/search-playlist
 */ 
spotifyRouter.get('/search-playlist', async (req, res) => {
    try {
        // Check if there is a valid access token
        const accessToken = spotifyApi.getAccessToken();
        if (!accessToken) {
            return res.status(401).json({ error: 'No valid access token provided.' });
        }

        // Log the access token for debugging purposes
        console.log('Access Token:', accessToken);

        const query = req.query.playlistId;
        console.log(query)
        const data = await spotifyApi.getPlaylist(query);
        res.status(200).json(data)
    } catch (error) {
        // Log the specific error for debugging purposes
        console.error('Error in /search-track:', error);

        // Send an appropriate status code and error message
        res.status(500).json({ error: 'Internal server error.' });
    }
})

/**
 * POST: Add track to a playlist
 * http://localhost:3000/spotify/add-track
 */ 
spotifyRouter.post('/add-track', async (req, res) => {
    try {
         // Check if there is a valid access token
        const accessToken = spotifyApi.getAccessToken();
        if (!accessToken) {
            return res.status(401).json({ error: 'No valid access token provided.' });
        } 

        // Log the access token for debugging purposes
        console.log('Access Token:', accessToken);

        const playlistId = req.body.playlistId;
        const trackId = `spotify:track:${req.body.trackId}`;

        try {
            const data = await spotifyApi.addTracksToPlaylist(playlistId, [trackId]);
            console.log('Track added to playlist:', data);
        } catch (error) {
            console.error('Error adding track to playlist:', error.message);
        }
        res.status(200).json(data.body)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = spotifyRouter;