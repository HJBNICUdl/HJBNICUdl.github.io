// The following example creates five accessible and
// focusable markers.
function udalgurianganwadiMapto1pt5() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.745587, lng:92.112655},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.740625, lng:92.091944}, "sundar diya patti w.no -5,  AWW HOUSE,  8326050505"],
[{ lat:26.750767, lng:92.091786}, "Maidanguri -1,  Church,  8326050506"],
[{ lat:26.746278, lng:92.100452}, "Millon nagar ,  Club,  8326050510"],0.5 km
[{ lat:26.745587, lng:92.112655}, "khatal guri w.no--4,  AWW HOUSE,  8326050511"],
[{ lat:26.751828, lng:92.100535}, "Nalbari -2,  AWW HOUSE,  8326050512"],
[{ lat:26.74738, lng:92.109977}, "Nalbari -3,  Club,  8326050513"],
[{ lat:26.755328, lng:92.102065}, "Nalbari progatipur,  L.P.School,  8326050514"],
[{ lat:26.751566, lng:92.091012}, "Khankalabari..B,  Own Building,  8326050515"],


    
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
