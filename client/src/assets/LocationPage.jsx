import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { playlistId } = useParams();
  /* songQuery is the input that the user gives */
  const [songQuery, setSongQuery] = useState('');
  const [searchInfo, setSearchInfo] = useState(null);

  const handleSearch = async () => {
    try {
      console.log('Song Query:', songQuery);
      const response = await axios.get(`http://localhost:3000/spotify/search-track?track=${songQuery}`);
      setSearchInfo(response.data);
    } catch (error) {
      console.error('Error searching for track:', error);
    }
  };

  console.log('Search Info:', searchInfo);

  // Fetch additional details based on playlistId and display them

  /* make it so it shows playlist info */


  return (
    <div>
      <div style={{ paddingTop: '50px' }}>
        <h1>Your Selected Location's Profile</h1>  
        <div className="upper">
        <div className="textBox">
          <h2>Playlist ID: {playlistId}</h2>
          <p>Search for a song and add it to your selected location's playlist.</p>
        </div>
      </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter a song name"
            value={songQuery}
            onChange={(e) => setSongQuery(e.target.value)}
          />
          
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: 'rgba(170, 203, 239, 1)',
              padding: '8px 12px',
              borderRadius: '15px',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </div>
        {/* Display Search Results */}
      </div>
    </div>
  );
};

export default LocationPage;

