// The following example creates five accessible and
// focusable markers.
function ambagaonawwwhanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.739779, lng:92.014906},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.733124, lng:92.006966}, "Murabari,18326051015,  "],
[{ lat:26.68668, lng:92.003188}, "Silputa Botabari,  18326051018,  "],
[{ lat:26.739779, lng:92.014906}, "Nij-Ambagan,  18326051019,  "],
[{ lat:26.746351, lng:92.03482}, "2No Ulubari,  18326051020,  "],


    
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
