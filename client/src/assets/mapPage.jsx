import React from 'react';
import MapComponent from './mapComponent'; // Adjust the path accordingly
import './mapStyle.css';

const MapPage = () => {
  return (
    <body>
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
        {/* Include the MapComponent here */}
        <MapComponent />
      </div>

      <div className="NewLocation">
        <div className="textBox2">
          <h2>can't find it?</h2>
          <p>Create it!</p>
        </div>
      </div>

      <div className="footer">@2023 GeoGrooves All Rights Reserved</div>
    </body>
  );
};

export default MapPage;
