// The following example creates five accessible and
// focusable markers.
function bahipukhuriownbldganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.808783, lng:92.280967},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.835884, lng:92.252801}, " LAMABARI T.E,  18617030202,  "],
[{ lat:26.852688, lng:92264061}, " UTTAR Bhadur Adrash,  18617030205,  "],
[{ lat:26.850546, lng:92.27229}, " Bahadur  adrash,  18617030206,  "],
[{ lat:26.804852, lng:92.285135}, " N02 Naharbari,  18617030207,  "],
[{ lat:26.820696, lng:92.286965}, "No 1 Bahipukuri,  18617030208,  "],
[{ lat:26.822996, lng:92.285299}, "No 2 Bahipukuri,  18617030209,  "],
[{ lat:26.808783, lng:92.280967}, " No 1 bahipukhuri Te,  18617030210,  "],
[{ lat:26.834514, lng:92.280927}, " N02 bahapukhuri Te,  18617030211,  "],
[{ lat:26.831977, lng:92.287902}, " N0  2bahapukhuri Te(belapur),  18617030213,  "],
[{ lat:26.83171, lng:92.302342}, "No 1 Bettybari T.E,  18617030218,  "],
[{ lat:26.829243, lng:92.294351}, "No 1 Bettybari T.E,  18617030219,  "],
[{ lat:26.83804, lng:92.320776}, " jaygapur,  18617030226,  "],
[{ lat:26.827715, lng:92.31512}, "Lukampur,  18617030227,  "],
[{ lat:26.821481, lng:92.324065}, "Chaparabari,  18617030228,  "],







    
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
