import React, { useEffect, useState } from 'react';
import axios from 'axios';

const locationPage = () => {
    const [playlistData, setPlaylistData] = useState(null);

    //how do i get the playlistId
    const playlistId = "12123";

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const playlistInfo = axios.get(`http://localhost:3000/spotify/search-playlist?playlistId=${playlistId}`)
                setPlaylistData(playlistInfo.data);
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        }
        fetchPlaylist();
    }, [playlistId]);
   

    //search button to search for a song
    //get the data and display it well

    //add song to track using the spotify(addTrack)
}
