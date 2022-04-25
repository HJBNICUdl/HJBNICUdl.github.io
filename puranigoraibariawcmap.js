// The following example creates five accessible and
// focusable markers.
function puranigoraibarianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.659851, lng:92.109613},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.73411, lng:92.095931}, "Sudempuri,  RENTED,  18617040601"],
[{ lat:26.735574, lng:92.093845}, "Sankar Nagar,  School Building,  18617040602"],
[{ lat:26.731561, lng:92.088023}, "Madya K. Habi,  RENTED,  18617040603"],
[{ lat:26.734547, lng:92.085893}, "Golandi Habi,  Own Building,  18617040604"],
[{ lat:26.706766, lng:92.094187}, "No.1 Batabari,  Own Building,  18617040605"],
[{ lat:26.701074, lng:92.090082}, "Thuribari,  Own Building,  18617040606"],
[{ lat:26.691152, lng:92.092648}, "No.2 Moudubi,  Own Building,  18617040607"],
[{ lat:26.687712, lng:92.088836}, "No.1 Moudubi,  Own Building,  18617040608"],
[{ lat:26.683724, lng:92.099662}, "Gomsali,  School Building,  18617040609"],
[{ lat:26.676461, lng:92.079824}, "Pub Begapara,  Own Building,  18617040610"],
[{ lat:26.674301, lng:92.092879}, "Mohanpur Gobsar,  Own Building,  18617040611"],
[{ lat:26.659851, lng:92.109613}, "Sapmari,  Own Building,  18617040612"],
[{ lat:26.672988, lng:92.125614}, "No.1 Simaluguri,  Own Building,  18617040613"],
[{ lat:26.683744, lng:92.136606}, "Hazaragaon,  School Building,  18617040614"],
[{ lat:26.671566, lng:92.104609}, "Rangagarah,  Own Building,  18617040615"],
[{ lat:26.667534, lng:92.114321}, "Paleng Chuburi,  Own Building,  18617040616"],
[{ lat:26.693932, lng:92.13546}, "Borigaon Daipampara,  RENTED,  18617040617"],
[{ lat:26.696936, lng:92.135854}, "K. Borigaon,  Own Building,  18617040618"],
[{ lat:26.692284, lng:92.131675}, "Thuraibari,  School Building,  18617040619"],
[{ lat:26.690387, lng:92.121791}, "Kajiamati ,  Own Building,  18617040620"],
[{ lat:26.682557, lng:92.109776}, "No.1 Jorpukhuri,  Own Building,  18617040621"],
[{ lat:26.699258, lng:92.108362}, "Handanguri,  School Building,  18617040622"],
[{ lat:26.708609, lng:92..111512}, "Rangpur Uttar,  Own Building,  18617040623"],
[{ lat:26.740662, lng:92.097772}, "Purani Goraibari,  School Building,  18617040624"],
[{ lat:26.733124, lng:92.108975}, "Mission Area,  Own Building,  18617040625"],

    
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
