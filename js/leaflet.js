var mymap = L.map(document.querySelector('#contact .map')).setView([42.361145, -71.057083], 13);
var marker = L.marker([42.361145, -71.057083]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3VwZXJub3ZhLTk0IiwiYSI6ImNrdjllemwycDJ4dTYzMWxwYmd4azI5ZTQifQ.GmW5JMMOJ8lWSFYrB-nxzg'
}).addTo(mymap);
L.marker([42.361145, -71.057083]).addTo(mymap);
marker.bindPopup("<b>Looking for us?</b><br>We are here!! 🔥").openPopup();

