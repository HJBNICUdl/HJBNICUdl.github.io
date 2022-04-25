function initMap() {
  const myLatLng = { lat: 26.7336, lng: 92.0918 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "DC Office, Udalguri",
  });
}
