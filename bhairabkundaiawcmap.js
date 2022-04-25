// The following example creates five accessible and
// focusable markers.
function bhairabkundaianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.821264, lng:92.142923},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.810338, lng:92.127904}, "1 NO. GORAIBARI,  School Building,  18326050301"],
[{ lat:26.822458, lng:92.127694}, "DAIFHANGAON,  School Building,  18326050302"],
[{ lat:26.802365, lng:92.128285}, "Cherpangaon,  Own Building,  18326050303"],
[{ lat:26.806351, lng:92.129078}, "Gersong,  School Building,  18326050304"],
[{ lat:26.791763, lng:92.128532}, "BHITOR SONAI,  School Building,  18326050305"],
[{ lat:26.845861, lng:92.12656}, "SAPANGAON,  Own Building,  18326050306"],
[{ lat:26.852728, lng:92.133636}, "1 NO.MAZORGAON(M),  community,  18326050307"],
[{ lat:26.872276, lng:92.121188}, "BHAIRABPUR,  School Building,  18326050308"],
[{ lat:26.8367, lng:92.139955}, "PACHIM NEPALPARA,  School Building,  18326050309"],
[{ lat:26.806351, lng:92.129078}, "KASHIPUR,  School Building,  18326050310"],
[{ lat:26.799871, lng:92.144642}, "2 NO. BANDARGURI,  School Building,  18326050311"],
[{ lat:26.821264, lng:92.142923}, "1 NO. BANDARGURI,  School Building,  18326050312"],
[{ lat:26.82814, lng:92.153985}, "PUB NEPALPARA,  School Building,  18326050313"],
[{ lat:26.785987, lng:92.140143}, "SONAI KHAWRANG,  Own Building,  18326050314"],
[{ lat:26.789342, lng:92.148918}, "2 NO. KHUMABARI,  School Building,  18326050315"],
[{ lat:26.784608, lng:92.167444}, "ULUBARI HABIGAON,  School Building,  18326050316"],
[{ lat:26.807677, lng:92.166444}, "BADAGAON KISSANBASTI,  School Building,  18326050318"],
[{ lat:26.812633, lng:92.163084}, "DAKHIN NEPALPARA,  School Building,  18326050319"],
[{ lat:26.810157, lng:92.176706}, "2 NO.MAJULI,  Own Building,  18326050320"],
[{ lat:26.480727, lng:93.122238}, "KHEMENGAON,  School Building,  18326050321"],
[{ lat:26.836159, lng:92.160276}, "SESAPANI,  School Building,  18326050322"],
[{ lat:26.805475, lng:92.14305}, "MADHYA BANDARGURI,  School Building,  18326050323"],


    
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
