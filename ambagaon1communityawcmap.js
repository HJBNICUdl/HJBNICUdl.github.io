// The following example creates five accessible and
// focusable markers.
function ambagaon1communityanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center:{ lat:26.839711, lng:92.939091} ,
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.810684, lng:92.035213}, "Bar Amjuli Sunday School Hall,Vill - Bar Amjuli,PO- Borigaon,PS- Harisinga ,Pin - 784510,18326051206,  "],
[{ lat:26.839711, lng:92.939091}, "Santipur Community Hall,Vill - No.1 Pub Khairabari,PO- Ajodhyapur,PS- Harisinga ,Pin - 784524,  18326051213,  "],
[{ lat:26.80761, lng:91.982247}, "No.1 Amjuli Colony Singri Basti,Vill - No.1 Amjuli Khairanibasti,PO- No.1 Amjuli,PS- Harisinga ,Pin - 784510,  18326051218,  "],






    
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
