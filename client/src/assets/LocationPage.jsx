import React, { useEffect, useState } from 'react';
import axios from 'axios';

const locationPage = () => {
    const [playlistData, setPlaylistData] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [searchInfo, setSearchInfo] = useState('');

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
   
    const handleChange = async (event) => {
        setSearchInput(event.target.value);
        try {
            const searchInfoResponse = await axios.get(`http://localhost:3000/spotify/search-playlist?playlistId=${searchInput}`)
            setSearchInfo(searchInfoResponse);
        } catch (error) {
            console.error('Error fetching playlist:', error);
        }
    };

    return (
        <div>
          <label htmlFor="userInput">Enter something:</label>
          <input
            type="text"
            id="userInput"
            value={searchInput}
            onChange={handleChange}
            placeholder="Type here..."
          />
          <p>You typed: {searchInput}</p>

        {playlistData ? (
            <div>
            <h1>{playlistData.name}</h1>
            <p>{playlistData.description}</p>
            {/* Additional rendering for tracks, images, etc. */}
            </div>
            ) : (
            <p>Loading...</p>
            )}
            
        {searchInfo ? (
            <div>
                <h1>{searchInfo.name}</h1>
                <p>{searchInfo.description}</p>
                {/* Additional rendering for tracks, images, etc. */}
            </div>
            ) : (
            <p>Loading...</p>
            )}
        </div>
    );
}

export default locationPage;