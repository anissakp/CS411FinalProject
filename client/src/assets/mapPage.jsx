import React, {useState, useEffect} from 'react';
import MapComponent from './mapComponent'; // Adjust the path accordingly
import './mapStyle.css';

const MapPage = () => {
  return (
    <div className = "mapPage">
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
          containerElement={<div style={{height:"80%"}} />}
          mapElement={<div style = {{height: "100%"}}/>}
        />  
      </div>
      <div className="NewLocation">
        <div className="textBox2">
          <h2>can't find it..?</h2>
        </div>
        <div className="input">
          <h2>Create One!</h2>
        </div>
      </div>

      <div className="footer">@2023 GeoGrooves All Rights Reserved</div>
    </div>
  );
};

export default MapPage;
