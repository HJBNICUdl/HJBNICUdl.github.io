// The following example creates five accessible and
// focusable markers.
function udalgurianganwadiMapto1() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.750767, lng:92.091786},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat: 26.744061, lng:92.095137}, "Weekly Market..ward no -05,  Club,  18326050501"],
[{ lat:26.73952, lng:92.099006}, "Purani Garibari..w.no-6,  AWW HOUSE,  18326050502"],
[{ lat:26.743381, lng:92.100644}, "Jyotinagar w.no-4,  AWW HOUSE,  18326050503"],
[{ lat:26.739037, lng:92.095063}, "Mission Road w.no-6,  AWW HOUSE,  8326050504"],
[{ lat:26.750767, lng:92.091786}, "Maidanguri -1,  Church,  8326050506"],
[{ lat:26.745201, lng:92.09538}, "Rupnagar w.no-3,  Club,  8326050507"],
[{ lat:26.751566, lng:92.091012}, "Khankalabari..B,  Own Building,  8326050515"],
[{ lat:26.757847, lng:92.095489}, "Golmagaon..A,  AWW HOUSE,  8326050516"],
[{ lat:26.75824, lng:92.103455}, "Rangamakha,  Club,  8326050520"],
[{ lat:26.763298, lng:92.104933}, "Niz udalguri,  Own Building,  8326050521"],

    
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
