// The following example creates five accessible and
// focusable markers.
function bahipukhuriclubanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.833716, lng:92.264255},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.837696, lng:92.252379}, " LAMABARI T.E,  18617030201,  "],
[{ lat:26.836127, lng:92.260457}, " LAMABARI T.E,  18617030203,  "],
[{ lat:26.833716, lng:92.264255}, " LAMABARI T.E,  18617030204,  "],
[{ lat:26.817595, lng:92.308063}, "N0 1 Khamatobari,  18617030215,  "],
[{ lat:26.828009, lng:92.305728}, "NO2 Bettybari T.E,  18617030217,  "],






    
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
