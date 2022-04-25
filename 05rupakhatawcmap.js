// The following example creates five accessible and
// focusable markers.
function 05rupakhatanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.6024, lng:91.881885},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.653085, lng:91.908862}, "Rupakhat,  Own Building,  18617020501"],
[{ lat:26.635908, lng:91.901917}, "Kacharipara Nonaikhuti,  Running in School Building,  18617020502"],
[{ lat:26.639105, lng:91.885604}, "Gharanikhat,  Own building,  18617020503"],
[{ lat:26.630747, lng:91.897219}, "Barakhat,  Running in LP School,  18617020504"],
[{ lat:26.619848, lng:91.88755}, "Charanpara,  Runnin in School Building,  18617020505"],
[{ lat:26.662604, lng:91.858986}, "Babarikhat,  Own Building,  18617020506"],
[{ lat:26.674594, lng:91.867496}, "kakalbhangi,  ,  18617020507"],
[{ lat:26.664134, lng:91.881081}, "Purani Tangla,  Running in Community Hall,  18617020508"],
[{ lat:26.654756, lng:91.884468}, "Tangla Gaon,  ,  18617020509"],
[{ lat:26.642772, lng:91.869831}, "Hanchapara,  ,  18617020510"],
[{ lat:26.611315, lng:91.885254}, "Gararpar,  Running in School Building,  18617020511"],
[{ lat:26.6024, lng:91.881885}, "Dhopguri,  Own Building,  18617020512"],
[{ lat:26.596972, lng:91.880085}, "No-2. Batabari,  Running in LP School,  18617020513"],
[{ lat:26.591188, lng:91.880505}, "Pub Bandergaon,  Running in Community Hall,  18617020514"],
[{ lat:26.594132, lng:91.881117}, "Banderigaon,  Running in School Building,  18617020515"],
[{ lat:26.588955, lng:91.87222}, "Paschim Banderigaon,  Running in Community Hall,  18617020516"],
[{ lat:26.647971, lng:91.877725}, "Pascim BarTangla,  ,  18617020517"],
[{ lat:26.64476, lng:91.869794}, "Madhya BarTangla,  ,  18617020518"],
[{ lat:26.654902, lng:91.896939}, "Pub BarTangla,  AWC Own building umder construction,  18617020519"],
[{ lat:26.625196, lng:91.83401}, "Hatibandha Latakhat,  Running in school Building,  18617020520"],
[{ lat:26.604024, lng:91.857899}, "Atelia,  Own Building,  18617020521"],
[{ lat:26.609206, lng:91.86343}, "Atelia Mazuguri Chuba,  Running  in community Hall,  18617020522"],
[{ lat:26.604437, lng:91.875192}, "Pub Atelia,  Running  in community Hall,  18617020523"],
[{ lat:26.628384, lng:91.859829}, "Darogakhat,  Own Building,  18617020524"],
[{ lat:26.62828, lng:91.858767}, "Dakhin Darogakhat,  Own Building,  18617020525"],

    
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
