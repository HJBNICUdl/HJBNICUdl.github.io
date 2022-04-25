// The following example creates five accessible and
// focusable markers.
function sibapuranganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.662957, lng:92.126922},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.651999, lng:92.083805}, "Sibapur,  Own Building,  18617040501"],
[{ lat:26.656448, lng:92.076132}, "Sibapur Pachim,  RENTED,  18617040502"],
[{ lat:26.656862, lng:92.087016}, "Sibapur Pub Chuba,  RENTED,  18617040503"],
[{ lat:26.660958, lng:92.092211}, "Lowdong,  Own Building,  18617040504"],
[{ lat:26.657097, lng:92.102382}, "Lowdong Part-II,  school Building,  18617040505"],
[{ lat:26.652517, lng:92.104336}, "Sapmari Muslim Chuba,  RENTED,  18617040506"],
[{ lat:26.645701, lng:92.110146}, "Bhutuniduba Pachim,  Own Building,  18617040507"],
[{ lat:26.644989, lng:92.111611}, "Bhutuniduba,  Own Building,  18617040508"],
[{ lat:26.645604, lng:92.16554}, "Bhutuniduba Pub Chuba,  RENTED,  18617040509"],
[{ lat:26.666421, lng:92.123016}, "Simuluguri Muslim Chuba,  RENTED,  18617040510"],
[{ lat:26.658623, lng:92.124037}, "Ranipukhuri,  Own Building,  18617040511"],
[{ lat:26.662957, lng:92.126922}, "Ranipukhuri Uttar,  Own Building,  18617040512"],
[{ lat:26.65971, lng:92.130683}, "Medhipara,  school Building,  18617040513"],
[{ lat:26.666436, lng:92.132566}, "Medhipara Pachim,  school Building,  18617040514"],
[{ lat:26.669032, lng:92.142616}, "Medhipara Pub Chuba,  school Building,  18617040515"],
[{ lat:26.684191, lng:92.46664}, "Hazaragaon Muslim Chuba,  school Building,  18617040516"],
[{ lat:26.677932, lng:92.147248}, "Hazaragaon Dakhin (Mini),  RENTED,  18617040517"],
[{ lat:26.665828, lng:92.149686}, "Padmapukhuri,  School Building,  18617040518"],
[{ lat:26.673755, lng:92.149522}, "Padmapukhuri Part-II,  School Building,  18617040519"],
[{ lat:26.671283, lng:92.15559}, "Padmapukhuri Pub(Mini),  School Building,  18617040520"],
[{ lat:26.675192, lng:92.16063}, "Dhipbichara,  Own Building,  18617040521"],
[{ lat:26.674753, lng:92.157943}, "Dhipbichara Part-II,  RENTED,  18617040522"],
[{ lat:26.681977, lng:92.180182}, "Ekrabari,  Own Building,  18617040523"],
[{ lat:26.670467, lng:92.186325}, "Panikhaiti,  RENTED,  18617040524"],
[{ lat:26.673599, lng:92.179238}, "Pachim Panikhaiti,  Own Building,  18617040525"],

    
  ];


  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
