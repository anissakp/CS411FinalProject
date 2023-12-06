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

  return (
    <div className="mapPage">
      <div className="header">
        <h1>GeoGrooves</h1>
      </div>

      <div className="upper">
        <div className="textBox">
          <h2>WELCOME TO THE MAP</h2>
          <p>Select an existing location by clicking on it in the map</p>
          <p>Or create a new location by clicking the Create button</p>
        </div>
      </div>

      <div className="mapContainer">
        <MapComponent
          containerElement={<div style={{ height: '80%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>

      <div className="NewLocation">
        <div className="textBox2">
          <h2>can't find it..?</h2>
        </div>
        <div className="input">
          <h2>Create One!</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Location Name:
              <input type="text" value={locationName} onChange={handleLocationNameChange} />
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
            <label>
              Address:
              <input type="text" value={address} onChange={handleAddressChange} />
            </label>
            <br />
            <button type="submit">Add Location</button>
          </form>
        </div>
      </div>

      <div className="footer">@2023 GeoGrooves All Rights Reserved</div>
    </div>
  );
};

export default MapPage;
