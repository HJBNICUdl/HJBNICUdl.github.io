// The following example creates five accessible and
// focusable markers.
function ambagaon1anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.812042, lng:92.008478},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.762534, lng:92.033843}, "Dowamokha Nepalibasti,  School Building,  18326051201"],
[{ lat:26.762426, lng:92.018732}, "Adolagaon,  School Building,  18326051202"],
[{ lat:26.773317, lng:92.02839}, "Dowamokha,  Own Building,  18326051203"],
[{ lat:26.78322, lng:92.021433}, "Borigaon Hathkola,  School Building,  18326051204"],
[{ lat:26.795987, lng:92.032999}, "Geruagaon,  Own Building,  18326051205"],
[{ lat:26.810684, lng:92.035213}, "Bar Amjuli,  Community Hall,  18326051206"],
[{ lat:26.833117, lng:92.010494}, "Rampur Pather,  School Building,  18326051207"],
[{ lat:26.80997, lng:92.02204}, "Manja Nalbari,  Own Building,  18326051208"],
[{ lat:26.79983, lng:92.011648}, "Uttar Nalbari,  School Building,  18326051209"],
[{ lat:26.812042, lng:92.008478}, "4 No. Amjuli Borompur,  School Building,  18326051210"],
[{ lat:26.828546, lng:92.001153}, "Kunderbil,  School Building,  18326051211"],
[{ lat:26.840475, lng:92.974361}, "No.3 Kunderbil,  School Building,  18326051212"],
[{ lat:26.839711, lng:92.939091}, "No.1 Pub Khairabari,  Community Hall,  18326051213"],
[{ lat:26.845372, lng:92.952685}, "Santipur Batabari,  School Building,  18326051214"],
[{ lat:26.831878, lng:92.989003}, "Loxmipur,  School Building,  18326051215"],
[{ lat:26.823566, lng:92.000453}, "Gerukhuti,  School Building,  18326051216"],
[{ lat:26.816324, lng:92.981031}, "1 No. Colony Amjuli,  School Building,  18326051217"],
[{ lat:26.80761, lng:91.982247}, "1 No.Amjuli Khairani Basti,  Community Hall,  18326051218"],
[{ lat:26.791563, lng:92.009031}, "Daimujuli,  School Building,  18326051219"],
[{ lat:26.795313, lng:92.008802}, "No.2 Panimudhi,  School Building,  18326051220"],
[{ lat:26.777024, lng:91.99577}, "Odala Kahibari,  Own Building,  18326051221"],
[{ lat:26.777539, lng:91.996403}, "No.1 Panimudhi,  Own Building,  18326051222"],
[{ lat:26.829227, lng:91.960375}, "Nepaligaon,  Own Building,  18326051223"],
[{ lat:26.831491, lng:91.967658}, "Borangabari,  School Building,  18326051224"],
[{ lat:26.836064, lng:92.019539}, "Adorsh  Amsiguri,  Own Building,  18326051225"],





    
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
