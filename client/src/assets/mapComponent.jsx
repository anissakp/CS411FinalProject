import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
  height: '80vh',
  overflow: 'hidden',
  position: 'relative',
  zIndex: '0',
};
const center = {
  lat: 42.349933, // default latitude
  lng: -71.102930, // default longitude
};

const Map = () => {
  const [markersInfo, setMarkersInfo] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD8SpqHTnJPLsFRhb7AYPj8_31boPv2MuM',
    libraries,
  });

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/map/locations");
        const markers = response.data;

        const newMarkersInfo = markers.map(marker => ({
          lat: parseFloat(marker.latitude),
          lng: parseFloat(marker.longitude),
          playlistId: marker.playlistID
        }));

        //console.log(newMarkersInfo);

        setMarkersInfo(newMarkersInfo);

      } catch (error) {
        console.error("Error fetching markers:", error);
      }
    };

    fetchMarkers();
  }, []);

  console.log(markersInfo);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  // const onLoad = (map) => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   markersInfo.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
  //   map.fitBounds(bounds);
  // };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        // onLoad={onLoad}
      >
        {markersInfo.map(({ lat, lng }) => (
          <Marker key={`${lat}-${lng}`} position={{ lat, lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
