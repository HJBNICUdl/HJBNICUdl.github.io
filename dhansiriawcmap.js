// The following example creates five accessible and
// focusable markers.
function dhansirianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.743446, lng:92.185273},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.718632, lng:92.192978}, "Adarsha Chuba,  Own Building,  18617040201"],
[{ lat:26.721738, lng:92.190967}, "No1 Phuhurabari,  Own Building,  18617040202"],
[{ lat:26.721738, lng:92.190967}, "Phuhurabari Pub,  Community,  18617040203"],
[{ lat:26.721738, lng:92.190967}, "Phuhurabari Dakhin,  Own Building,  18617040204"],
[{ lat:26.726281, lng:92.179728}, "Kochpara,  Community,  18617040205"],
[{ lat:26.72155, lng:92.194381}, "Bajrajhar West,  Own Building,  18617040206"],
[{ lat:26.72924, lng:92.189521}, "Bhellapara Uttar,  AWW House,  18617040207"],
[{ lat:26.733308, lng:92.193938}, "Maradhansri ,  Own Building,  18617040208"],
[{ lat:26.730967, lng:92.196436}, "Maradhansri Dakhin,  RENTED,  18617040209"],
[{ lat:26.741574, lng:92.191827}, "Maradhansri Bania Para,  Own Building,  18617040210"],
[{ lat:26.736955, lng:92.188515}, "Tarabari ,  Own Building,  18617040211"],
[{ lat:26.731707, lng:92.170496}, "Khwinuguri,  School Building,  18617040212"],
[{ lat:26.743446, lng:92.185273}, "No2 Dhansri,  Own Building,  18617040213"],
[{ lat:26.746936, lng:92.175381}, "Dhalapara,  RENTED,  18617040214"],
[{ lat:26.737684, lng:92.185829}, "No.4 Dhansri,  Own Building,  18617040215"],
[{ lat:26.733096, lng:92.186877}, "Bathoupara,  Own Building,  18617040216"],
[{ lat:263743841, lng:92.19685}, "No.5 Dhansri,  Own Building,  18617040217"],
[{ lat:26.737684, lng:92.185829}, "No.5 Dhansri Uttar,  School Building,  18617040218"],
[{ lat:26.752243, lng:92.188577}, "No.3 Dhansri ,  School Building,  18617040219"],
[{ lat:26.740827, lng:92.207049}, "No.6 Dhansri,  Own Building,  18617040220"],
[{ lat:26.728931, lng:92.22137}, "No.8 Dhansri,  Own Building,  18617040221"],
[{ lat:26.730635, lng:92.218035}, "No.8 Dhansri Uttar,  Own Building,  18617040222"],
[{ lat:26.723829, lng:92.217874}, "No.8 Dhansri Dakhin,  Own Building,  18617040223"],
[{ lat:26.734242, lng:92.213389}, "Rowta Station,  Own Building,  18617040224"],
[{ lat:26.724324, lng:92.212295}, "Bajrajhar Uttar,  School Building,  18617040225"],

    
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
