import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './LocationStyle.css';

const LocationPage = () => {
  const { playlistId } = useParams();
  const [songQuery, setSongQuery] = useState('');
  const [searchInfo, setSearchInfo] = useState(null);
  const [playlistInfo, setPlaylistInfo] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/spotify/search-track?track=${songQuery}`);
      setSearchInfo(response.data);
    } catch (error) {
      console.error('Error searching for track:', error);
    }
  };

  const handleAddTrackToPlaylist = async (trackId) => {
    try {
      const response = await axios.post('http://localhost:3000/spotify/add-track', {
        playlistId,
        trackId,
      });

      // Handle the response (success or error)
      console.log('Track added to playlist:', response.data);
    } catch (error) {
      console.error('Error adding track to playlist:', error);
    }
  };

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const playlistInfo = await axios.get(`http://localhost:3000/spotify/search-playlist?playlistId=${playlistId}`);
        setPlaylistInfo(playlistInfo.data.body);
      } catch (error) {
        console.error('Error getting track from backend into frontend:', error);
      }
    };

    getPlaylist();
  }, []);

  console.error(playlistInfo)

  return (
    <div className="LocationPage">
    <div className= "Upper">
          <h1>GeoGrooves</h1>
    </div>
    <div className="textBox">
    <h2>Welcome to your location's page</h2>
    <h4>Playlist ID: {playlistId}</h4>
    </div>
    <p>Search for a song and add it to your selected Location's Playlist!</p>
 

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
              padding: '8px 30px',
              marginLeft:'20px',
              borderRadius: '15px',
              color: '#fff',
              cursor: 'pointer',
    
            }}
          >
            Search
          </button>
        </div>

        {searchInfo && searchInfo.map((track) => (
          <div key={track.id}>
            <h3>{track.name}</h3>
            <p>Artist: {track.artists[0].name}</p>
            <p>Album: {track.album.name}</p>
            <p>Spotify ID: {track.id}</p>

            <button onClick={() => handleAddTrackToPlaylist(track.id)}
            style={{
              backgroundColor: 'rgba(170, 203, 239, 1)',
              padding: '8px 30px',
              marginLeft:'20px',
              border: '2px solid black',
              borderRadius: '15px',
              color: 'white',
              cursor: 'pointer',

    
            }}>
              Add to Playlist
            </button>
          </div>
        ))}
      </div>
  );
};


export default LocationPage;
