---
---
$(function() {
  var map,
      data = {{ site.data.bars | jsonify }},
      bars,
      source = $('#template').html(),
      template = Handlebars.compile(source);

  map = createMap();
  bars = addLayers(map, data);

  $('.toggle-nearest').on('click', getLocation(map, bars, template));
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

function getLocation(map, bars, template) {
  map.locate();
  map.on('locationfound', function(e) {
    var nearest = leafletKnn(bars).nearest(e.latlng, 5);
    $('#nearest-results').append(template(nearest));
    console.log(nearest);
    toggleNearest();
  });  
}

function toggleNearest() {
  $('#site-wrapper').removeClass('show-filter show-wheel');
  $('#site-wrapper').toggleClass('show-nearest');
}