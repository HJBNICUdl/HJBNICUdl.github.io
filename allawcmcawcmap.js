// The following example creates five accessible and
// focusable markers.
function allAWCMCanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.745504, lng:91.836925},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.73783, lng:91.804889}, "Barangajuli T.E ,  ,  18617010318"],
[{ lat:26.790947, lng:91.811192}, "Budlaparagaon,  ,  18617010321"],
[{ lat:26.745504, lng:91.836925}, "No. 3 Uttar Dimakuchi ,  ,  18617010324"],
[{ lat:26.788856, lng:91.708287}, "Dharamjuli Khairagrant - B,  ,  18617010337"],
[{ lat:26.75295, lng:91.804366}, "Barangajuli T.E ,  ,  18617010340"],
[{ lat:26.751585, lng:91.779206}, "No. 3 Suklai Khuti,  ,  18617010342"],




    
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
