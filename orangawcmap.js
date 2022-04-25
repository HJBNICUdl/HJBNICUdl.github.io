// The following example creates five accessible and
// focusable markers.
function oranganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.73487967, lng:92.32644649},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.771502, lng:92.299018}, "Mahilapara,  School Building,  18617030401"],
[{ lat:26.801237, lng:92.290503}, "Hatibil,  Own Building,  18617030402"],
[{ lat:26.76344, lng:92.3176}, "Kukura Khati,  Own Building,  18617030403"],
[{ lat:26.758322, lng:92.298472}, " Pachim Hatibil,  School Building,  18617030404"],
[{ lat:26.746394, lng:92.321084}, "Gohaibheti,  Own Building,  18617030405"],
[{ lat:26.742593, lng:92.317888}, "Habigaon,  Own Building,  18617030406"],
[{ lat:26.744909, lng:92.311679}, "Habigaon -2,  Community Hall,  18617030407"],
[{ lat:26.746237, lng:92.310418}, "Kapurpura,  Own Building,  18617030408"],
[{ lat:26.745251, lng:92.294082}, "Daherua,  Own Building,  18617030409"],
[{ lat:26.749477, lng:92.297832}, "Bangalgaon,  Own Building,  18617030410"],
[{ lat:26.734296, lng:92.322166}, "Orang T.E-3 ,  School Building,  18617030411"],
[{ lat:26.73211193, lng:92.32129681}, "Orang T.E-5 ,  Community Hall,  18617030412"],
[{ lat:26.729719, lng:92.32197}, "Orang T.E-4,  Club,  18617030413"],
[{ lat:26.725316, lng:92.317258}, "Orang T.E-1,  Community Hall,  18617030414"],
[{ lat:26.73487967, lng:92.32644649}, "Orang T.E-2,  Own Building,  18617030415"],
[{ lat:26.71244166, lng:92.3304316}, "Baligaon,  Own Building,  18617030416"],
[{ lat:26.711289, lng:92.329096}, "Nichilamari-3,  Own Building,  18617030417"],
[{ lat:26.701457, lng:92.322074}, "Nichilamari-1,  Own Building,  18617030418"],
[{ lat:26.706956, lng:92.317008}, "Nichilamari Habi-2,  Own Building,  18617030419"],
[{ lat:26.7033778, lng:92.3324387}, "No-1 Saikiasuburi-1,  Own Building,  18617030420"],
[{ lat:26.6977958, lng:92.3380646}, "No-1 Saikiasuburi-2,  Others,  18617030421"],
[{ lat:26.696405, lng:92.331076}, "Chamuagaon-3,  Own Building,  18617030422"],
[{ lat:26.699042, lng:92.330278}, "Chamuagaon-4,  Own Building,  18617030423"],
[{ lat:26.688158, lng:92.326991}, "Chamuagaon-1,  Own Building,  18617030424"],
[{ lat:26.6762399, lng:92.32969283}, "Bhogdal,  Own Building,  18617030425"],
[{ lat:26.670913, lng:92.327812}, "Dakhin Bhogdal,  Own Building,  18617030426"],
[{ lat:26.683428, lng:92.315895}, "Pachim Bhogdal,  School Building,  18617030427"],
[{ lat:26.68936493, lng:92.31627174}, "Chamuagaon-2,  School Building,  18617030428"],
[{ lat:26.693474, lng:92.31352}, "Khangkhilabari,  Own Building,  18617030429"],
[{ lat:26.40328836, lng:92.182987244}, "No-2 Saikiasuburi-1,  Own Building,  18617030430"],
[{ lat:26.681295, lng:92.303863}, "No-2 Saikiasuburi-2,  Community Hall,  18617030431"],



    
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
