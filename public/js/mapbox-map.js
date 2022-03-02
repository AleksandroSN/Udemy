mapboxgl.accessToken = mapToken;
const campgroundGeoData = JSON.parse(campground);
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: campgroundGeoData.geometry.coordinates,
  zoom: 10,
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
  .setLngLat(campgroundGeoData.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25, className: "text-black" }).setHTML(
      `<h3>${campgroundGeoData.title}</h3>`,
    ),
  )
  .addTo(map);
