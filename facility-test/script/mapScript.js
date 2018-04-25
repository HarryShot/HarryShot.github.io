function initMap() {
    var uluru = {lat: 50.4506819, lng: 30.5230936};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}