// The following example creates five accessible and
// focusable markers.
function paneri1anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.650367, lng:91.917625},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.752254, lng:91.870305}, "Gitibari,  Own Building,  18326051915"],
[{ lat:26.746085, lng:91.874311}, "Kachubil Gitibari,  Community Building,  18326051913"],
[{ lat:26.751173, lng:91.871014}, "Kachubil Nepali Gaon,  Community Building,  18326051914"],
[{ lat:26.751838, lng:91.908659}, "Gopipur,  School Building,  18326051910"],
[{ lat:26.737123, lng:91.900063}, "Pub Futukibari,  School Building,  18326051917"],
[{ lat:26.725236, lng:91.902501}, "4 No.Paneri Bhekulikanda,  School Building,  18326051918"],
[{ lat:26.71365, lng:91.899787}, "Pachim Paneri A,  School Building,  18326051919"],
[{ lat:26.725712, lng:91.909071}, "Pachim Paneri B,  School Building,  18326051920"],
[{ lat:26.714829, lng:91.918321}, "Pachim Anadhowapara,  Community Building,  18326051921"],
[{ lat:26.744781, lng:91.914407}, "3 No Paneri,  Community Hall,  18326051906"],
[{ lat:26.743433, lng:91.922458}, "3 No Paneri Kolbari,  School Building,  18326051907"],
[{ lat:26.745427, lng:91.915572}, "Sonapani,  Own Building,  18326051908"],
[{ lat:26.74625, lng:91.908533}, "Kachubil Hat,  AWW house,  18326051909"],
[{ lat:26.76243, lng:91.901352}, "2 No Kachubil Natun bosti,  Others,  18326051911"],
[{ lat:26.74674248, lng:91.89676063}, "Kalghare line,  Community hall,  18326051912"],
[{ lat:26.7451, lng:91.8920183333333}, "8 No Paneri,  Community Hall,  18326051916"],
[{ lat:26.743174, lng:91.909404}, "Kachubil,  AWW house,  18326051927"],
[{ lat:26.7595484, lng:91.9058023}, "Sonapani Gour bosti,  Religiouse place,  18326051928"],
[{ lat:26.697354, lng:91.928652}, "Uttar Paniputa (M),  Own Building,  18326051901"],
[{ lat:26.707075, lng:91.919848}, "Anadhowapara A,  Own Building,  18326051902"],
[{ lat:26.726032, lng:91.9221}, "Anadhowapara ,  Own Building,  18326051903"],
[{ lat:26.725566, lng:91.921903}, ""Nabajyati Chuba Switchgate,  Own Building,  18326051904"],
[{ lat:26.732065, lng:91.92867}, "Pub Paneri ,  Own Building,  18326051905"],
[{ lat:26.731486, lng:91.934945}, ""3 No. Paneri Budhbaria,  Community,  18326051906"],
[{ lat:26.728796, lng:91.91129}, "3 No. Paneri Dispur,  Community,  18326051907"],
[{ lat:26.719746, lng:91.933199}, "Pub Paneri Gourbasti,  Community,  18326051908"],
[{ lat:26.695223, lng:91.924662}, "Uttar Paniputa A,  Own Building,  18326051909"],



    
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
