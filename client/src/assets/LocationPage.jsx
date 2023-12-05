import React, { useState } from 'react';
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
    //get the location id
    //get the playlist from spotify(getPlaylist)
    const playlistInfo = axios.get("http://localhost:3000/spotify/search-track", {
        body: {
            track: "userInput" //this will be the user input
        }
    })

    //search button to search for a song
    //get the data and display it well

    //add song to track using the spotify(addTrack)
}
