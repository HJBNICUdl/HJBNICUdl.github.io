// The following example creates five accessible and
// focusable markers.
function 10khoirabarianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.624847, lng:91.80331},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.601136, lng:91.811467}, "Kamakhyaguri,  Own Building,  18617021001"],
[{ lat:26.611413, lng:91.810198}, "Kutura,  Community Hall,  18617021002"],
[{ lat:26.617635, lng:91.824741}, "Pub Gurihati,  Community Hall,  18617021003"],
[{ lat:26.625024, lng:91.829243}, "Pub Dewaguri,  Community Hall,  18617021004"],
[{ lat:26.59223, lng:91.824335}, "Dehanpara,  Community Hall,  18617021005"],
[{ lat:26.490715, lng:91.899392}, "Pub Potapukhuri,  Own Building,  18617021006"],
[{ lat:26.465336, lng:91.889578}, "Pascim Athkuriapara,  Own Building,  18617021007"],
[{ lat:26.519972, lng:91.8502}, "Burhakhat Chakiapara,  Own Building,  18617021008"],
[{ lat:26.521533, lng:91.853935}, "Pub Gangapukhuri,  Own Building,  18617021009"],
[{ lat:26.528557, lng:91.880317}, "Senapatipara,  Own Building,  18617021010"],
[{ lat:26.616513, lng:91.807285}, "Pub Rongagaon,  Community Hall,  18617021011"],
[{ lat:26.624847, lng:91.80331}, "Uttar Rongagaon,  Community Hall,  18617021012"],
[{ lat:26.631034, lng:91.833225}, "Kanchipara,  Community Hall,  18617021013"],
[{ lat:26.590561, lng:91.842597}, "Dakhin Rongajulikhat,  Community Hall,  18617021014"],
[{ lat:26.607199, lng:91.863096}, "Simangpuri,  Community Hall,  18617021015"],
[{ lat:26.577273, lng:91.87498}, "Kounamara,  Community Hall,  18617021016"],
[{ lat:62.56295, lng:12.099865}, "Sunaipara,  Community Hall,  18617021017"],
[{ lat:26.573246, lng:91.874159}, "Jhargaon(Bhergaon),  Community Hall,  18617021018"],
[{ lat:26.53862, lng:91.843568}, "Pub-Athiabari,  Own Building,  18617021019"],
[{ lat:26.562406, lng:91.849523}, "Pub Baralakhat,  Own Building,  18617021020"],
[{ lat:26.5632297, lng:91.8531592}, "Paschim Jhargaon,  Community Hall,  18617021021"],
[{ lat:26.547671, lng:91.86064}, "Paschim Bezbhagawati,  Own Building,  18617021022"],
[{ lat:26.542232, lng:91.822233}, "Bahmolla Saloipara suba,  Community Hall,  18617021023"],
[{ lat:26.525266, lng:91.809909}, "Niz-Kuhiarkuchi,  Community Hall,  18617021024"],
[{ lat:26.517898, lng:91.826166}, "Dakhin Kotora,  Community Hall,  18617021025"],



    
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
