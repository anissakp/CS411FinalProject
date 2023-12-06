import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
    width: 1600,
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#AACBF1', // Green color
    color: 'white',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '18px',
  };
  
  const HomePage = () => {
    return (
      <div style={containerStyle}>
        <h1 style={{ fontWeight: 800, fontSize: '48px' }}>GeoGrooves</h1>
        <h3>Craft, Share, and Elevate Atmospheres with Our Crowd-Curated Music Site!</h3>
        <Link to="http://localhost:3000/spotify/login" style={buttonStyle}>Login with Spotify</Link>
      </div>
    );
  };

export default HomePage;