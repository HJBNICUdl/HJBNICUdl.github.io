// The following example creates five accessible and
// focusable markers.
function 03paschimpatlaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.649869, lng:91.747304},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
 
[{ lat:26.634489, lng:91.828363}, "Doul Suba,  Own Building,  18617020301"],
[{ lat:26.638921, lng:91.817958}, "Bhergaon Mahaliapara,  Own Building,  18617020302"],
[{ lat:26.647946, lng:91.847206}, "Udmari,  Under Construction,  18617020303"],
[{ lat:26.6491, lng:91.83053}, "Parbahu Suba,  Own Building,  "],
[{ lat:26.617738, lng:91.851495}, "Bogpuri,  Under Construction,  18617020305"],
[{ lat:26.719112, lng:91.75738}, "Dahala Habi,  Community Hall,  18617020306"],
[{ lat:26.574809, lng:91.844398}, "Sub Mahaliapara,  Community Hall,  18617020307"],
[{ lat:26.723274, lng:91.818325}, "Batamari Balisitha,  Own Building,  18617020308"],
[{ lat:26.5969, lng:91.846824}, "Simalubari,  Community Hall,  18617020309"],
[{ lat:26.682878, lng:91.768944}, "khagrabari,  Own Building,  18617020310"],
[{ lat:26.693539, lng:91.805372}, "Daroga Chuba,  Own Building,  18617020311"],
[{ lat:26.703326, lng:91.834641}, "Niz-Patla,  Community Hall,  18617020312"],
[{ lat:26.649869, lng:91.747304}, "Patla,  Under Construction,  18617020313"],
[{ lat:26.690053, lng:91.796831}, "Khasiapathar,  Community Hall,  18617020314"],
[{ lat:26.683128, lng:91.763799}, "Dahala Suba,  Under Construction,  18617020315"],
[{ lat:26.666079, lng:91.81614}, "Parbahu Habi,  Own Building,  18617020316"],
[{ lat:26.672908, lng:91.790394}, "Budura Habi,  Under Construction,  18617020317"],
[{ lat:26.674595, lng:91.826272}, "Burhapujashali,  Own Building,  18617020318"],
[{ lat:26.655627, lng:91.802887}, "Purani Bhergaon,  Own Building,  18617020319"],
[{ lat:26.69329, lng:91.828716}, "Nagachuba,  own building,  18617020320"],
[{ lat:26.668934, lng:91.835988}, "No-2 Totlapara,  Own Building,  18617020321"],
[{ lat:26.718691, lng:91.795411}, "Simaluguri,  Own Building,  18617020322"],
[{ lat:26.561423, lng:91.870134}, "Jhargaon Gasbari,  Community Hall,  18617020323"],
[{ lat:26.67017, lng:91.818574}, "Jabanga Pathar,  Own Building,  18617020324"],
[{ lat:26.638876, lng:91.804215}, "Chewni,  Own Building,  18617020325"],




    
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
