// The following example creates five accessible and
// focusable markers.
function allothanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.619118, lng:92.290282},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.6977958, lng:92.3380646}, "No-1 Saikiasuburi,18617030421,  "],
[{ lat:26.690686666, lng:92.3028616666}, "Bagoribari,  18617030728,  "],
[{ lat:26.82191, lng:92.305397}, "NO2 Bettybari T.E,  18617030216,  "],
[{ lat:26.88106, lng:92.174507}, "Paharpur,  18617030103,  "],
[{ lat:26.865136, lng:92.199335}, "Dhunseri TE,  18617030108,  "],
[{ lat:26.858877, lng:92.196397}, "Dhunseri TE,  18617030109,  "],
[{ lat:26.791722, lng:92.287693}, "Mazbat TE-2,  18617030308,  "],
[{ lat:26.789767, lng:92.291153}, "Namati Kha,  18617030318,  "],
[{ lat:26.616186, lng:92.305336}, "Kachari Veti Top,  18617030716,  "],
[{ lat:26.620343, lng:92.32593}, "Devpukhuri,  18617030717,  "],
[{ lat:26.619608, lng:92.292374}, "No.1 Udalguri Jungle Gaon,  18617030718,  "],
[{ lat:26.619118, lng:92.290282}, "No.1 Udalguri Jungle Gaon,  18617030719,  "],
[{ lat:26.643619, lng:92.302779}, " Mazar Chuba,  18617030720,  "],
[{ lat:26.684487, lng:92.262096}, "No 1 Jangle Block (B),  18617030522,  "],
[{ lat:26.690028, lng:92.203077}, "Natun Hapagaon,  18617040312,  "],
[{ lat:26.435458, lng:92.036372}, "Dakhin Nalbari,  18326051702,  "],
[{ lat:26.666089, lng:91.896603}, "Pachim Nalbari,  18326051710,  "],
[{ lat:26.679363, lng:91.940536}, "Hahinigaon,  18326051718,  "],
[{ lat:26.76243, lng:91.901352}, "Kachubil,  18326051911,  "],
[{ lat:26.786153, lng:91.924477}, "Khairajangal,  18326052111,  "],
[{ lat:26.674594, lng:91.867496}, "Kakalbhangi,  18617020507,  "],
[{ lat:26.654756, lng:91.884468}, "Tanglagaon,  18617020509,  "],
[{ lat:26.642772, lng:91.869831}, "Hanchapara,  18617020510,  "],
[{ lat:26.647971, lng:91.877725}, "Bar Tangla,  18617020517,  "],
[{ lat:26.64476, lng:91.869794}, "Bar Tangla,  18617020518,  "],




    
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
