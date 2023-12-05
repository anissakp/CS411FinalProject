import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './mapStyle.css';
import Map from '../../../server/src/public/map'; // Adjust the path based on your project structure

const MapPage = () => {
  useEffect(() => {
    // Load additional scripts if needed
    // const additionalScript = document.createElement('script');
    // additionalScript.src = 'path/to/your/additional/script.js';
    // additionalScript.type = 'text/javascript';
    // additionalScript.async = true;
    // document.head.appendChild(additionalScript);

    // Cleanup if needed
    // return () => {
    //   document.head.removeChild(additionalScript);
    // };
  }, []);

  return (
    <body>
      <Helmet>
        <title>Add Map</title>
        <link rel="stylesheet" type="text/css" href="./style.css" />
        {/* Add other head elements like meta tags, links, etc. */}
      </Helmet>

      <div className="header">
        <h1>GeoGrooves</h1>
        <div className="links">
          <ul>
            <li>HOME</li>
            <li>MAP</li>
          </ul>
        </div>
      </div>

      <div className="upper">
        <div className="textBox">
          <h2>WELCOME TO THE MAP</h2>
          <p>Select an existing location by clicking on it in the map</p>
          <p>Or create a new location by clicking the Create button</p>
        </div>
      </div>
      <div className="mapContainer">
        <div id="map">
          {/* Embed your map component here */}
          <Map />
        </div>
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
