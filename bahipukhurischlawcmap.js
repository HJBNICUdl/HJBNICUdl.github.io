// The following example creates five accessible and
// focusable markers.
function bahipukhurischlanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.857601, lng:92.296525},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.834456, lng:92.288385}, " N02bahapukhuri Te ,  18617030212,  "],
[{ lat:26.813802, lng:92.296003}, " N01 Khusurabari,  18617030214,  "],
[{ lat:26.850562, lng:92.321393}, "No2 Bettybari T.E,  18617030220,  "],
[{ lat:26.849192, lng:92.294993}, " N01 Kadabil,  1861703021,  "],
[{ lat:26.857601, lng:92.296525}, " N02 Kadabil,  18617030222,  "],
[{ lat:26.855625, lng:92.309732}, "N01 HATTIPUTA,  18617030223,  "],
[{ lat:26.860474, lng:92.321392}, "N02 HATTIPUTA,  18617030224,  "],
[{ lat:26.855474, lng:92.331787}, " Dewsani,  18617030225,  "],
[{ lat:26.821146, lng:92.335111}, "Chaparabari,  18617030230,  "],





    
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
