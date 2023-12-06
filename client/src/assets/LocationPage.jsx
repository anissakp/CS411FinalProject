import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { playlistId } = useParams();

  // Fetch additional details based on playlistId and display them

  return (
    <div>
      <h2>Location Details</h2>
      <p>Playlist ID: {playlistId}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default LocationPage;

<<<<<<< HEAD
=======
const locationPage = () => {
    //get the location id
    //get the playlist from spotify(getPlaylist)
    const playlistInfo = axios.get("http://localhost:3000/spotify/search-track")
>>>>>>> 0cbf291823ed6fab181d6b5f43c96db92c29c79d

// const SearchSongBox = () => {
//     const [searchInput, setSearchInput] = useState('');

//     const handleChange = (event) => {
//         setInputValue(event.target.value);
//       };

//       return (
//         <div>
//           <label htmlFor="userInput">Enter something:</label>
//           <input
//             type="text"
//             id="userInput"
//             value={inputValue}
//             onChange={handleChange}
//             placeholder="Type here..."
//           />
//           <p>You typed: {inputValue}</p>
//         </div>
//       );
//     };

// export default SearchSongBox

// const locationPage = () => {
//     //get the location id
//     //get the playlist from spotify(getPlaylist)
//     const playlistInfo = axios.get("http://localhost:3000/spotify/search-track", {
//         body: {
//             track: "userInput" //this will be the user input
//         }
//     })

//     //search button to search for a song
//     //get the data and display it well

//     //add song to track using the spotify(addTrack)
// }
