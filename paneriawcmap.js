// The following example creates five accessible and
// focusable markers.
function panerianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.70614, lng:91.897191},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.7438878, lng:91.8929823}, "Porjabasti,  Community Hall,  18326051801"],
[{ lat:26.741069, lng:91.875551}, "10 No. Paneri-B,  Community Hall,  18326051802"],
[{ lat:26.727866, lng:91.883113}, "Uttar Gejerkuchi Gourbasti (M),  School Building,  18326051803"],
[{ lat:26.73747, lng:91.872361}, "Supaibasti,  Own Building,  18326051804"],
[{ lat:26.720504, lng:91.882291}, "Dakhin Gejerkuchi,  School Building,  18326051805"],
[{ lat:26.729131, lng:91.884309}, "Uttar Gejerkuchi,  Own Building,  18326051806"],
[{ lat:26.737627, lng:91.890635}, "Fulkuchi,  School Building,  18326051807"],
[{ lat:26.724065, lng:91.890873}, "Simuluguri,  Own Building,  18326051808"],
[{ lat:26.701018, lng:91.905575}, "Belguri,  School Building,  18326051809"],
[{ lat:26.740129, lng:91.880828}, "10 No. Paneri-A,  Club,  18326051810"],
[{ lat:26.708912, lng:91.920153}, "Maganchuba,  Club,  18326051811"],
[{ lat:26.70614, lng:91.897191}, "Uttar Murmela,  Community Hall,  18326051812"],
[{ lat:26.706246, lng:91.897293}, "Murmela,  School Building,  18326051813"],
[{ lat:26.693035, lng:91.89802}, "Gheunala,  School Building,  18326051814"],
[{ lat:26.683859, lng:91.912038}, "Borigaon,  Own Building,  18326051815"],
[{ lat:26.681282, lng:91.91644}, "1 No. Alikakh,  School Building,  18326051816"],
[{ lat:26.69183, lng:91.930823}, "Paniputa,  School Building,  18326051817"],
[{ lat:26.699082, lng:91.931109}, "Khatwalpara,  School Building,  18326051818"],
[{ lat:26.688821, lng:91.901474}, "Sastrapara,  School Building,  18326051819"],
[{ lat:26.668616, lng:91.903529}, "Pachim Nalbari,  Community Hall,  18326051820"],
[{ lat:26.686398, lng:91.92637}, "Pachim Hahini,  School Building,  18326051821"],
[{ lat:26.688518, lng:91.909921}, "Rambori,  Community Hall,  18326051822"],
[{ lat:26.707503, lng:91.918962}, "Botabari,  Religious Place,  18326051824"],
[{ lat:26.708455, lng:91.91211}, "Maganchuba-B,  Community Hall,  18326051827"],



    
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
