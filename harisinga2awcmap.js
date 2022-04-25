// The following example creates five accessible and
// focusable markers.
function harisinga2anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.751014, lng:91.935573},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.725502, lng:91.971817}, "Harisinga Mantikiri,  School building,  18326051501"],
[{ lat:26.737009, lng:91.971078}, "bengbari Hatidipu,  own building,  18326051502"],
[{ lat:26.733506, lng:91.959365}, "Batiamari,  own building,  18326051503"],
[{ lat:26.704068, lng:91.974909}, "Bhollakash,  own building,  18326051504"],
[{ lat:26.706814, lng:91.965043}, "Merbangsuba,  School building,  18326051505"],
[{ lat:26.691403, lng:91.971928}, "Baniapars Kathalguri,  School building,  18326051506"],
[{ lat:26.693237, lng:91.954435}, "Dokhin Merbangsuba,  Aww home,  18326051507"],
[{ lat:26.725404, lng:91.925956}, "Tarabari,  Own Building,  18326051508"],
[{ lat:26.720686, lng:91.941324}, "2Bhergao,  Own Building,  18326051509"],
[{ lat:26.74793, lng:91.951754}, "Batiamari Bhubanbasti,  Own Building,  18326051510"],
[{ lat:26.751014, lng:91.935573}, "Utter Christianpara,  Community,  18326051511"],
[{ lat:26.734527, lng:91.939764}, "Christianpara,  School building,  18326051512"],
[{ lat:26.717568, lng:91.949458}, "Niz Jhaprabari,  Own Building,  18326051513"],
[{ lat:26.699468, lng:91.960798}, "Botakuchi,  School building,  18326051514"],
[{ lat:26.687488, lng:91.968261}, "ticklowchuba,  Own Building,  18326051515"],
[{ lat:26.685345, lng:91.960662}, "Pochim Ticklowchuba,  community,  18326051516"],
[{ lat:26.689362, lng:91.949572}, "Purandia,  School building,  18326051517"],
[{ lat:26.676516, lng:91.958209}, "Dakua Purandia,  School building,  18326051518"],
[{ lat:26.731377, lng:91.973887}, "New Jamfrabari,  School building,  18326051519"],
[{ lat:26.749419, lng:91.943684}, "Christianpara Nodikah,  club,  18326051520"],
[{ lat:26.732355, lng:91.929315}, "1no Bhergao,  AWH home,  18326051521"],
[{ lat:26.687617, lng:91.944928}, "Samaikuchi,  club,  18326051522"],






    
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
