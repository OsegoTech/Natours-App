const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3NlZ290ZWNoIiwiYSI6ImNsazdjOXFpYTA3dDgzaHA2Y3MwbnRpOW4ifQ.Bk1_986RzuX77dRHGX79FA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
