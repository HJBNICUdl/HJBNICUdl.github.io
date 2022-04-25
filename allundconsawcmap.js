// The following example creates five accessible and
// focusable markers.
function allundconsanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.683128, lng:91.763799},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.728599, lng:91.847826}, "Hasara,  ,  18617020110"],
[{ lat:26.807687, lng:91.814532}, "2 No. Bholatar,  ,  18617020120"],
[{ lat:26.647946, lng:91.847206}, "Udmari,  ,  18617020303"],
[{ lat:26.617738, lng:91.851495}, "Bogpuri,  ,  18617020305"],
[{ lat:26.649869, lng:91.747304}, "Patla,  ,  18617020313"],
[{ lat:26.683128, lng:91.763799}, "Dahala Chuba,  ,  18617020315"],
[{ lat:26.672908, lng:91.790394}, "Budura gaon,  ,  18617020317"],
[{ lat:26.634469, lng:91.749773}, "Malmura,  ,  18617020411"],
[{ lat:26.608774, lng:91.804359}, " Rongagaon,  ,  18617020418"],
[{ lat:26.654902, lng:91.896939}, "Bar Tangla,  ,  18617020519"],
[{ lat:26.550531, lng:91.811743}, "Dewanpukhuri,  ,  18617020901"],



    
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
