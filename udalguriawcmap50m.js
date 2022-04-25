// The following example creates five accessible and
// focusable markers.
function udalgurianganwadiMapto50() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.740625, lng:92.091944},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.73952, lng:92.099006}, "Purani Garibari..w.no-6,  AWW HOUSE,  18326050502"],
[{ lat:26.743381, lng:92.100644}, "Jyotinagar w.no-4,  AWW HOUSE,  18326050503"],
[{ lat:26.739037, lng:92.095063}, "Mission Road w.no-6,  AWW HOUSE,  8326050504"]
[{ lat:26.740625, lng:92.091944}, "sundar diya patti w.no -5,  AWW HOUSE,  8326050505"],
[{ lat:26.745201, lng:92.09538}, "Rupnagar w.no-3,  Club,  8326050507"],
[{ lat:26.746112, lng:92.099142}, "Daily market w no-3,  Club,  8326050508"],
[{ lat:26.74638, lng:92.095403}, "Nizararpara w no-3,  L.P.School,  8326050509"],
[{ lat:26.746278, lng:92.100452}, "Millon nagar ,  Club,  8326050510"],

    
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
