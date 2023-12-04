// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 42.349933,lng: -71.102930};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at CDS
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "CDS",
  });
}

initMap();