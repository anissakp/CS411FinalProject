import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchSongBox = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
      };

      return (
        <div>
          <label htmlFor="userInput">Enter something:</label>
          <input
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type here..."
          />
          <p>You typed: {inputValue}</p>
        </div>
      );
    };

export default SearchSongBox





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
