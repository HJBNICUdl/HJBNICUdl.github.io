// The following example creates five accessible and
// focusable markers.
function ambagaon1schlbldganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.840475, lng:92.974361},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.762534, lng:92.033843}, " Dowamokha,18326051201,  "],
[{ lat:26.762426, lng:92.018732}, "Adolagaon,  18326051202,  "],
[{ lat:26.78322, lng:92.021433}, "Borigaon L.P.School,Vill - Dowamokha,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051204,  "],
[{ lat:26.833117, lng:92.010494}, "Kunderbil Pather L.P.School,Vill - Kunderbil Pather,PO- No.1 Amjuli (Colony),PS- Harisinga ,Pin - 784510,  18326051207,  "],
[{ lat:26.79983, lng:92.011648}, "Uttar Nalbari L.P.School,Vill - Uttar Nalbari,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051209,  "],
[{ lat:26.812042, lng:92.008478}, "4 No. Amjuli Borompur L.P.School,Vill - 4 No. Amjuli,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051210,  "],
[{ lat:26.828546, lng:92.001153}, "1 No. Kunderbil L.P.School,Vill - Kunderbil,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051211,  "],
[{ lat:26.840475, lng:92.974361}, "No. 2 Kunderbil L.P.School,Vill - No.3 Kunderbil,PO- No.1 Amjuli,PS- Harisinga ,Pin - 784510,  18326051212,  "],
[{ lat:26.845372, lng:92.952685}, "Santipur Batabari L.P.School,Vill - Santipur,PO- Ajodhyapur,PS- Harisinga ,Pin - 784524,  18326051214,  "],
[{ lat:26.831878, lng:92.989003}, "Loxmipur L.P.School,Vill - Loxmipur,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051215,  "],
[{ lat:26.823566, lng:92.000453}, "Nondonpur L.P.School,Vill - Gerukhuti,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051216,  "],
[{ lat:26.816324, lng:92.981031}, "No.1 Amjuli Colony L.P.School,Vill - No.1 Amjuli,PO- No.1 Amjuli,PS- Harisinga ,Pin - 784510,  18326051217,  "],
[{ lat:26.791563, lng:92.009031}, "No.3 Panimudhi  L.P.School,Vill - Daimujuli,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051219,  "],
[{ lat:26.795313, lng:92.008802}, "No.2 Panimudhi  L.P.School,Vill - 2 No. Panimudhi,PO- Borigaon,PS- Harisinga ,Pin - 784510,  18326051220,  "],
[{ lat:26.831491, lng:91.967658}, "Borangbari L.P.School,Vill - Borangabari,PO- Ajodhyapur,PS- Harisinga ,Pin - 784524,  18326051224,  "],







    
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
