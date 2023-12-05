import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const HomePage = () => {
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Adjust the height as needed
      };

    return (
    <div style={containerStyle} >
      <h1>Connect to Spotify</h1>
      <Link to="http://localhost:3000/spotify/login">Log In</Link>
    </div>
  );
};

export default HomePage;