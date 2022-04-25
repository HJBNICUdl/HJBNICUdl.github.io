// The following example creates five accessible and
// focusable markers.
function harisinga1anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.72243, lng:91.984224},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.6797, lng:91.983557}, "Haguma,  School Building,  18326051401"],
[{ lat:26.685652, lng:91.992643}, "Landachuburi,  Own Building,  18326051402"],
[{ lat:26.701607, lng:91.996258}, "Harisinga Kahibari,  Own Building,  18326051403"],
[{ lat:16.929676, lng:28.270047}, "Chamuapara,  Own Building,  18326051404"],
[{ lat:26.715793, lng:91.996677}, "Boniapara,  Own Building,  18326051405"],
[{ lat:26.718827, lng:91.994722}, "Harisinga 2 no patti,  AWW House,  18326051406"],
[{ lat:26.723176, lng:92.009704}, "1 no. Songlabasti,  School Building,  18326051407"],
[{ lat:26.720733, lng:91.997483}, "2 no. Honglabasti,  School Building,  18326051408"],
[{ lat:26.729566, lng:92.000163}, "Dhekiabari ,  Own Building,  18326051409"],
[{ lat:26.722626, lng:91.992055}, "Harisinga 1 no. patti,  Community Hall,  18326051410"],
[{ lat:26.722461, lng:91.98775}, "Niz Hariainga,  School Building,  18326051411"],
[{ lat:26.734006, lng:91.987791}, "Harisinga Deulguri,  AWW House,  18326051412"],
[{ lat:26.72243, lng:91.984224}, "Landachuburi B,  AWW House,  18326051413"],
[{ lat:26.725702, lng:91.98498}, "Harisinga Landangpara,  Community Hall,  18326051414"],
[{ lat:26.728251, lng:91.985862}, "Harisinga Bengaligaon,  School Building,  18326051415"],
[{ lat:26.747323, lng:91.970237}, "Mazmakha Sastrapara,  School Building,  18326051416"],
[{ lat:26.747316, lng:91.998628}, "2 no. Fasia,  School Building,  18326051417"],
[{ lat:26.747316, lng:91.993797}, "Fasia Dakhinsuba,  Religious place,  18326051418"],
[{ lat:26.747316, lng:91.993645}, "No. 1 Lissing,  Own Building,  18326051419"],
[{ lat:26.747316, lng:91.987852}, "3 no. lissing,  School Building,  18326051420"],
[{ lat:26.775662, lng:91.989294}, "Niz lissing,  Community Hall,  18326051421"],
[{ lat:26.747316, lng:91.999667}, "2 no. lissing balipara,  School Building,  18326051422"],
[{ lat:26.747316, lng:91.980806}, "Simoluguri,  AWW House,  18326051423"],
[{ lat:26.747316, lng:91.967507}, "Dokhin Botakuchi,  AWH House,  18326051424"],





    
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
