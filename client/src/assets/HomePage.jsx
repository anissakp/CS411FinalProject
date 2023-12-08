import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "50px",
    minHeight: '100vh', 
    width: 1600,
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#AACBF1',
    color: 'white',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const rectangleStyle = {
      backgroundColor: 'rgba(219, 248, 218, 1)',
      height: '250px', 
      width: '100%', 
      borderRadius: '20px',
      marginTop: '20px',
      marginBottom: '20px',
  };

  const HomePage = () => {
    return (
      <div style={containerStyle}>

        <h1 style={{ fontWeight: 800, fontSize: '48px' }}>GeoGrooves</h1>
        <h3>Craft, Share, and Elevate Atmospheres with Our Crowd-Curated Music Site!</h3>
        <Link to="http://localhost:3000/spotify/login" style={buttonStyle}>Login with Spotify</Link>

        <div style={rectangleStyle}> </div>

        <h1 style={{ fontWeight: 800, fontSize: '36px', marginBottom: '15px' }}>What is GeoGrooves?</h1>
        <b>GeoGrooves is an application that allows users to enhance their surroundings with personalized music playlists.</b> 
        <b> When users select a specific location (such as a café, park, or gym), they can submit their preferred music choices for that ambiance. </b> 
        <b>This creates a crowd-curated ambiance, making the experience more personal and engaging for everyone present.</b>
      </div>
    );
  };

export default HomePage;