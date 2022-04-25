// The following example creates five accessible and
// focusable markers.
function 07namkholaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.540627, lng:91.830767},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.5411, lng:91.828103}, "Bahmolla,  Own Building,  18617020701"],
[{ lat:26.536429, lng:91.842266}, "Saloipara Paschim Suba,  Own Building,  18617020702"],
[{ lat:26.534443, lng:91.824367}, "Mahara,  Own Building,  18617020703"],
[{ lat:26.550729, lng:91.82122}, "Barangabari,  Own Building,  18617020704"],
[{ lat:26.519122, lng:91.833079}, "Katara Gangapukhuri,  Own Building,  18617020705"],
[{ lat:26.52896, lng:91.85984}, "Gomthapara,  Own Building,  18617020706"],
[{ lat:26.530712, lng:91.841993}, "Saloipara Pub,  Own Building,  18617020707"],
[{ lat:26.538406, lng:91.861021}, "Barara,  Own Building,  18617020708"],
[{ lat:26.552544, lng:91.875146}, "Bezbhagawati,  Own Building,  18617020709"],
[{ lat:26.516994, lng:91.785297}, "Bainara No-1,  Own Building,  18617020710"],
[{ lat:26.517424, lng:91.785028}, "No-2 Bainara,  Own Building,  NIL"],
[{ lat:26.508456, lng:91.815751}, "Sareng,  Own Building,  18617020712"],
[{ lat:26.501392, lng:91.814922}, "Sareng Paschim Suba,  Own Building,  18617020713"],
[{ lat:26.540627, lng:91.830767}, "No-1 Athiabari,  Own Building,  18617020714"],
[{ lat:26.5543831, lng:91.84157851}, "Athiabari,  Own Building,  18617020715"],
[{ lat:26.56651, lng:91.845873}, "Baralakhat,  Own Building,  18617020716"],
[{ lat:26.57722, lng:91.852105}, "Sub Mahaliapara Saikiapara,  Own Building,  18617020717"],
[{ lat:26.565329, lng:91.847273}, "Jhargaon,  Own Building,  18617020718"],
[{ lat:26.529494, lng:91.804868}, "Kuhiarkuchi,  Own Building,  18617020719"],
[{ lat:26.534871, lng:91.795118}, "Maldangpara,  Own Building,  18617020720"],
[{ lat:26.490665, lng:91.838129}, "Lathapara,  Own Building,  18617020721"],
[{ lat:26.502577, lng:91.841632}, "Katahi,  Own Building,  18617020722"],
[{ lat:26.501531, lng:91.832934}, "Dakhin Santipukhuri,  Own Building,  18617020723"],
[{ lat:26.5086, lng:91.832722}, "Paschim santipukhuri,  Own Building,  18617020724"],
[{ lat:26.512668, lng:91.833285}, "Santipukhuri,  Own Building,  18617020725"],
[{ lat:26.550728, lng:91.816866}, "Paschim Barongabari (A),  Community Hall,  18617020726"],
[{ lat:26.536429, lng:91.842266}, "Saloipara Oukhachuba,  Own Building,  18617020727"],
[{ lat:26.566219, lng:91.8448222}, "3 No.Baralakhat (B),  Community Hall,  18617020728"],
[{ lat:26.519225, lng:91.794086}, "Athiabari (B),  Community Hall,  18617020729"],




    
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
