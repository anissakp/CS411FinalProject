import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

  const FormatPlaylistInfo = ( {playlistData}) => {
    if (!playlistData) {
      return <div>Loading...</div>;
    }

    const { name, owner, tracks } = playlistData;

    return (
      <div>
        <h1>{name}</h1>
        <p>Owner: {owner.display_name}</p>
        <h2>Tracks:</h2>
        <ul>
          {tracks.items.map((trackItem) => {
            const { track } = trackItem;
            return (
              <li key={track.id}>
                <p>Title: {track.name}</p>
                <p>Artist: {track.artists.map((artist) => artist.name).join(', ')}</p>
                <p>Track ID: {track.id}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );

  }

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

        <div>
          <FormatPlaylistInfo playlistData = {playlistInfo} />
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
        {searchInfo && searchInfo.map((track) => (
          <div key={track.id}>
            <h3>{track.name}</h3>
            <p>Artist: {track.artists[0].name}</p>
            <p>Album: {track.album.name}</p>
<<<<<<< HEAD
            <p>Spotify ID: {track.id}</p>  {/* WRITE track.id TO GET THE SONG ID*/}
            {/* Add more details as needed */}
=======
            <p>Spotify ID: {track.id}</p>

            {/* Add track to playlist button */}
            <button onClick={() => handleAddTrackToPlaylist(track.id)}>
              Add to Playlist
            </button>
>>>>>>> 9a69b40dba1f22f8e304eb14d2818c42e67c291d
          </div>
        ))}
      </div>
    </div>
  ); 
};

<<<<<<< HEAD
export default LocationPage;
=======
export default LocationPage;
>>>>>>> 9a69b40dba1f22f8e304eb14d2818c42e67c291d
