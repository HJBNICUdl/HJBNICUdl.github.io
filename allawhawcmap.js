// The following example creates five accessible and
// focusable markers.
function allAWHanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.746331, lng:92.089489},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.686575, lng:91.836063}, "Burapujashali,  ,  18617010442"],
[{ lat:26.618392, lng:91.824781}, "Dewaguri,  ,  18617020424"],
[{ lat:26.828301, lng:92.10921}, "No1 Phuhurabari,  18326050214"],
[{ lat:26.746331, lng:92.089489}, "No 1 Sapkhaithi,  ,  18326051103"],
[{ lat:26.747565, lng:92.035223}, "No 2 Ulubari,  ,  18326051113"],
[{ lat:26.747316, lng:91.967507}, "Vill  -Botakuchi, p.o- Botakuchi,pin-784510,  ,  18326051424"],
[{ lat:26.732355, lng:91.929315}, " Bhergao,  ,  18326051521"],
[{ lat:26.764065, lng:91.928394}, "Teliapara,  ,  18326052125"],





    
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
