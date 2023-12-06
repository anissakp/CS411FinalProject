import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
    width: 1350
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '18px',
  };
  
const HomePage = () => {
    return (
    <div style={containerStyle} >
      <h1>Welcome to GeoGrooves</h1>
      <h2>Connect to Spotify</h2>
      <Link to="http://localhost:3000/spotify/login" style={buttonStyle} >Log In</Link>
    </div>
  );
};

export default HomePage;