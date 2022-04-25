// The following example creates five accessible and
// focusable markers.
function allcrecheanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.779748, lng:91.817291},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [


[{ lat:26.747112, lng:91.844425}, "Dimakuchi T.E.,  ,  18617020103"],
[{ lat:26.779748, lng:91.817291}, "Badlapara,  ,  18617020119"],
[{ lat:26.794595, lng:92.289173}, "Mazbat TE-1,  ,  18617030304"]


    
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
