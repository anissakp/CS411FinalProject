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

  // Add markers for each location
  locationsData.forEach(location => {
    const marker = new AdvancedMarkerElement({
      map: map,
      position: { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) },
      title: location.name,
    });
  });
}

initMap();
