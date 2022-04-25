// The following example creates five accessible and
// focusable markers.
function daifanganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.772321, lng:92.172684},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.755349, lng:92.127131}, "kahibari,  Own Building,  18326050401"],
[{ lat:26.744248, lng:92.151473}, "2 No. Goraibari,  Own Building,  18326050402"],
[{ lat:26.749919, lng:92.161271}, "Daifangkhuti,  Own Building,  18326050403"],
[{ lat:26.753127, lng:92.155271}, "Gangumakha,  School Building,  18326050404"],
[{ lat:26.749387, lng:92.168568}, "Daifang Pub Borigaon,  School Building,  18326050405"],
[{ lat:26.773854, lng:92.182568}, "Dhansirikhuti,  School Building,  18326050406"],
[{ lat:26.768116, lng:92.175688}, "Dangraborigaon,  School Building,  18326050407"],
[{ lat:26.762814, lng:92.166769}, "Nalbari,  Own Building,  18326050408"],
[{ lat:26.759916, lng:92.168513}, "No. 1 Purani Nalbari,  AWW House,  18326050409"],
[{ lat:26.762786, lng:92.16814}, "No. 1 Nalbari,  School Building,  18326050410"],
[{ lat:26.772321, lng:92.172684}, "Mazkhuti,  Own Building,  18326050411"],
[{ lat:26.795566, lng:92.188215}, "No. 3 Majuli,  School Building,  18326050412"],
[{ lat:26.81683, lng:92.16983}, "Uttor Badagaon,  AWW House,  18326050413"],
[{ lat:26.85862, lng:92.23243}, "Narzanpara,  School Building,  18326050414"],
[{ lat:26.768934, lng:92.18457}, "Torajuli,  School Building,  18326050415"],
[{ lat:26.77229, lng:92.142885}, "No. 1 Khamabari,  Community,  18326050416"],
[{ lat:26.759968, lng:92.168531}, "Hatkata,  Own Building,  18326050417"],
[{ lat:26.76521, lng:92.159716}, "No. 2 Barigaon,  School Building,  18326050418"],
[{ lat:26.772537, lng:92.137631}, "Gelagaon Vitorbari,  Community,  18326050419"],
[{ lat:26.769458, lng:92.131764}, "Gelagaon,  Own Building,  18326050420"],
[{ lat:26.7711, lng:92.12518}, "Dhupguri,  Own Building,  18326050421"],
[{ lat:26.753744, lng:92.16299}, "Daifanggaon,  School Building,  18326050422"],
[{ lat:26.7993, lng:92.185242}, "No. 1 Majuli,  Community,  18326050423"],



    
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
