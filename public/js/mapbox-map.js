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
    new mapboxgl.Popup({
      offset: 25,
      focusAfterOpen: false,
      className: "text-gray-700 text-xl",
    }).setHTML(`<h3 class="font-bold mr-3">${campgroundGeoData.title}</h3>`),
  )
  .addTo(map);
