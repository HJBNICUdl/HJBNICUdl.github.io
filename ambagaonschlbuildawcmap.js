// The following example creates five accessible and
// focusable markers.
function ambagaonschbuildanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.683312, lng:92.001924},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.740479, lng:92.007578}, "Dalagaon,18326051001,  "],
[{ lat:26.738263, lng:92.002225}, "Nij-Ambagan,  18326051002,  "],
[{ lat:26.683312, lng:92.001924}, "Silputa Botabari,  18326051005,  "],
[{ lat:26.738972, lng:92.007379}, "Mowamari,  18326051013,  "],
[{ lat:26.716715, lng:92.021656}, "Balipara Botabari,  18326051022,  "],



    
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
