<<<<<<< HEAD
function initMap() {
    var uluru = {lat: 50.4506819, lng: 30.5230936};
    var map = new google.maps.Map(document.getElementById('map'), {
=======
navigator.geolocation.getCurrentPosition(updatePosition);

function updatePosition(pos) {
    // задание координат.
    var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    // параметры для карты.
    var options = {
>>>>>>> parent of e02e1a9... some fix
        zoom: 10,
        center: position, // позиция на карте
        mapTypeId: google.maps.MapTypeId.ROADMAP // тип карты - ROADMAP, SATELLITE, HYBRID and TERRAIN
    };

    // объект карты.
    var map = new google.maps.Map(document.getElementById("map"), options);
}