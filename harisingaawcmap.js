// The following example creates five accessible and
// focusable markers.
function harisingaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center:{ lat:26.810762, lng:91.963843} ,
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.747169, lng:91.986353}, "No. 1 Fasia,  Religious Place,  18326051301"],
[{ lat:26.766404, lng:91.982776}, "Edenbari,  Own Building,  18326051302"],
[{ lat:26.776574, lng:91.980048}, "No. 2 Ghagra,  School Building,  18326051303"],
[{ lat:26.779788, lng:91.978945}, "No. 2 Ghagra Limbubasti,  Community Hall,  18326051304"],
[{ lat:26.774483, lng:91.973756}, "No. 1 Ghagra,  Community Hall,  18326051305"],
[{ lat:26.792789, lng:91.969577}, "Nonke Ghagra,  School Building,  18326051306"],
[{ lat:26.79963, lng:91.967762}, "Niz Amlaiguri,  School Building,  18326051307"],
[{ lat:26.810762, lng:91.963843}, "No. 1 Amlaiguri,  School Building,  18326051308"],
[{ lat:26.813685, lng:91.972254}, "Ghoradak,  School Building,  18326051309"],
[{ lat:26.883347, lng:91.940303}, "Corramore T. E. ,  School Building,  18326051310"],
[{ lat:26.751566, lng:91.957751}, "Baithonia Ghagra,  School Building,  18326051311"],
[{ lat:26.762594, lng:91.956643}, "Ulubari,  Own Building,  18326051312"],
[{ lat:26.754487, lng:91.969651}, "Niz Ghagra,  Own Building,  18326051313"],
[{ lat:26.767333, lng:91.964678}, "Bengali Ghagra,  School Building,  18326051314"],
[{ lat:26.773376, lng:91.961897}, "Bengali Ghagra Bazar,  Community Hall,  18326051315"],
[{ lat:26.798662, lng:91.942907}, "Majuli 6/7 No. Line,  Own Building,  18326051316"],
[{ lat:26.803973, lng:91.943164}, "No. 2 Majuli T. E. ,  School Building,  18326051317"],
[{ lat:26.820835, lng:91.944705}, "Paschim Ghagra N. C. Majuli,  School Building,  18326051318"],
[{ lat:26.847676, lng:91.94116}, "N. C. Bangurum,  Own Building,  18326051319"],
[{ lat:26.861072, lng:91.952378}, "No. 3 Line Corramore,  School Building,  18326051320"],






    
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
