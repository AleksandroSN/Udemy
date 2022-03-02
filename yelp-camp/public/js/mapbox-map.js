mapboxgl.accessToken = mapToken;
const geoData = JSON.parse(geometry);
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: geoData.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

new mapboxgl.Marker().setLngLat(geoData.coordinates).addTo(map);
