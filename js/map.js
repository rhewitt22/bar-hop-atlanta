---
---
$(function() {
  var map,
      data = {{ site.data.bars | jsonify }},
      bars;

  map = createMap();
  bars = addLayers(map, data);

  $('.toggle-nearest').on('click', getLocation(map, bars));
});

function createMap() {
  return map = L.map('map-page', {
    attributionControl: false,
    zoomControl: false,
    center: [33.779548, -84.386671],
    zoom: 12
  });
}

function addLayers(map, data) {
  L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20
  }).addTo(map);

  var bars = L.geoJson(data).addTo(map);
  map.fitBounds(bars.getBounds());
  

  return bars;
}

function getLocation(map, bars) {
  map.locate();
  map.on('locationfound', function(e) {
    console.log(leafletKnn(bars).nearest(e.latlng, 5));
    toggleNearest();
  });  
}

function toggleNearest() {
  $('#site-wrapper').removeClass('show-filter show-wheel');
  if ($('#site-wrapper').hasClass('show-nearest')) {
      // Do things on Nav Close
      $('#site-wrapper').removeClass('show-nearest');
  } else {
      // Do things on Nav Open
      $('#site-wrapper').addClass('show-nearest');
  }

  //$('#site-wrapper').toggleClass('show-nav');
}