// Daftar lokasi museum
var locations = [
    ['Museum Wayang Jakarta', -6.175439, 106.825576],
    ['Museum Wayang Banyumas', -7.48252, 109.23865],
    ['Museum Wayang Kulit Wonogiri', -7.838262, 111.042282],
    ['Museum Topeng dan Wayang Ubud', -8.503031, 115.264529],
    ['Museum Gubug Wayang Mojokerto', -7.470497, 112.433159],
    ['Galeri Wayang Purwakarta', -6.542849, 107.444451]
  ];
  
  // Batas peta
var bounds = [[5.15, 94], [-12, 120]];

// Dark mode tile layer
var darkMode = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

// Inisialisasi peta
var map = L.map('map', {
  layers: [darkMode],
  maxBounds: bounds
}).setView([-7, 111], 7);

// Batasi zoom
map.options.maxBoundsViscosity = 1.0;

// Base layers
var baseLayers = {
  "Dark Mode": darkMode,

  "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
};

// Tambahkan control layer
L.control.layers(baseLayers).addTo(map);

// Loop dan tambahkan marker
for(var i = 0; i < locations.length; i++) {

  // Get koordinat
  var lat = locations[i][1];
  var lng = locations[i][2];

  // Add marker
  var marker = L.marker([lat,lng]).addTo(map);  

  // Popup text
  var title = locations[i][0];
  marker.bindPopup(title);

}