// Initialize and add the map
let map;


async function initMap() {
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at the first location
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 42.349933, lng: -71.102930 },
    mapId: "DEMO_MAP_ID",
  });

// Fetch locations from the server
const response = await fetch('/map/locations');
const locationsData = await response.json();

console.log(locationsData);  // Log the fetched data
// Add markers for each location
locationsData.forEach(location => {
  // Parse latitude and longitude as numbers
  const lat = parseFloat(location.latitude);
  const lng = parseFloat(location.longitude);

  // Check if the values are valid numbers
  if (!isNaN(lat) && !isNaN(lng)) {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat, lng },
      title: location.name,
    });
    // Check if playlistID exists in the location object
    if ('playlistID' in location) {
      // Add playlistID to the marker
      marker.playlistID = location.playlistID;

      // Add click event listener to the marker
      marker.addListener('click', () => {
        // Access the playlistID when the marker is clicked
        console.log('Clicked on marker:', marker.title, marker.playlistID);
        // You can now use marker.playlistID as needed
      });}

 

  } else {
    console.error(`Invalid latitude or longitude for location: ${location.name}`);
  }
  
});



}


initMap();
