// The following example creates five accessible and
// focusable markers.
function 04panishelianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.588061, lng:91.77789},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.65944, lng:91.767662}, "Panishali,  Own building,  18617020401"],
[{ lat:26.648383, lng:91.768708}, "Kathalbari,  Own building,  18617020402"],
[{ lat:26.65673, lng:91.776221}, "Kacharipara,  Own building,  18617020403"],
[{ lat:26.673246, lng:91.751562}, "Nalbari,  Own building,  18617020404"],
[{ lat:26.663083, lng:91.784408}, "Dongpara,  Own building,  18617020405"],
[{ lat:26.641594, lng:91.795711}, "Thanapara,  Own Building,  18617020406"],
[{ lat:26.633805, lng:91.768322}, "Gopchasuba,  Own Building,  18617020407"],
[{ lat:26.63035, lng:91.7825}, "Betagaon,  Own Building,  18617020408"],
[{ lat:26.611041, lng:91.766714}, "Tamulbari,  Own Building,  18617020409"],
[{ lat:26.60725, lng:91.742496}, "Jagannathjhar,  Own Building,  18617020410"],
[{ lat:26.634469, lng:91.749773}, "Malmura,  Own Building Under Construction,  18617020411"],
[{ lat:26.586568, lng:91.77757}, "Thakuriapara,  Own building,  18617020412"],
[{ lat:26.582384, lng:91.764238}, "No.2 Rowmari,  Own building,  18617020413"],
[{ lat:26.588061, lng:91.77789}, "Garangpara,  Own building,  18617020414"],
[{ lat:26.599311, lng:91.786924}, "Dudgarhmukha,  Own building,  18617020415"],
[{ lat:26.61126, lng:91.788005}, "Nichilamari,  Own building,  18617020416"],
[{ lat:26.634279, lng:91.796646}, "Rongagaon,  Own building,  18617020417"],
[{ lat:26.608774, lng:91.804359}, "Paschim Rongagaon,  Under construction,  18617020418"],
[{ lat:26.606805, lng:91.802166}, "Arrengpara ,  Own building,  18617020419"],
[{ lat:26.609687, lng:91.789338}, "Uttar  Majarsuba,  Community Hall,  18617020420"],
[{ lat:26.25681, lng:91.57871}, "Gurihati,  Own Building,  18617020421"],
[{ lat:26.596514, lng:91.81816}, "Dakhin Gurihati,  Community Hall,  18617020422"],
[{ lat:26.622806, lng:91.820862}, "Dewaguri,  Own building,  18617020423"],
[{ lat:26.618392, lng:91.824781}, "Dakhin Dewaguri,  AWH's House,  18617020424"],
[{ lat:26.578518, lng:91.821949}, "Simalubari,  LP School,  18617020425"],

    
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
