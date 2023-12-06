import React, { useState } from 'react';
import MapComponent from './mapComponent'; // Adjust the path accordingly
import './mapStyle.css';

const MapPage = () => {
  const [locationName, setLocationName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/newLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: locationName,
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          location: address,
        }),
      });

      if (response.ok) {
        console.log('Location added successfully!');
        // Optionally, you can reset the form or provide feedback to the user
        setLocationName('');
        setLatitude('');
        setLongitude('');
        setAddress('');
      } else {
        console.error('Failed to add location');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#AACBF1', // Green color
    color: 'white',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <div className="mapPage">
      <div className="header" style={{ textAlign: 'center' }}>
        <h1>Welcome to the Explorer Map!</h1>
      </div>

      <div className="upper">
        <div className="textBox">
          <h2>Guidelines</h2>
          <p>Select a pre-existing location by clicking on it on the map.</p>
          <p>Create a new location by entering its information.</p>
        </div>
      </div>

      <div className="mapContainer" >
        <MapComponent
          containerElement={<div style={{ height: '80%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>

      <div className="NewLocation">
        {/* <div className="textBox2">
          <h2>can't find it..?</h2>
        </div>
        */}

        <div className="input">
        <h2 style={{ textAlign: 'center' }}>Create a Location!</h2>
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <label>
              Location Name: 
              <input type="text" value={locationName} onChange={handleLocationNameChange} />
            </label>
            <br />
            <label>
              Address: 
              <input type="text" value={address} onChange={handleAddressChange} />
            </label>
            <br />
            <label>
              Latitude: 
              <input type="text" value={latitude} onChange={handleLatitudeChange} />
            </label>
            <br />
            <label>
              Longitude: 
              <input type="text" value={longitude} onChange={handleLongitudeChange} />
            </label>
            <br />
            <div style={{ textAlign: 'center', paddingTop: '30px' }}>
              <button style={{ backgroundColor: '#AACBF1', color: 'white', fontSize: '18px', borderRadius: '20px'}} type="submit">Add Location</button>
            </div>          
            </form>
        </div>
      </div>
    </div>
  );
};

export default MapPage;




