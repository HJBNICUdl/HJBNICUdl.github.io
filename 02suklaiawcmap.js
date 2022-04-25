// The following example creates five accessible and
// focusable markers.
function 02suklaianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.798099, lng:91.772099},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.732788, lng:91.778179}, "4 No. Barongajuli,  Own Building,  18617020201"],
[{ lat:26.725505, lng:91.777354}, "Atherikhat jangalbasti,  Own Building,  18617020202"],
[{ lat:26.745388, lng:91.805783}, "Barangajuli T.E.,  Community Hall,  18617020203"],
[{ lat:26.726575, lng:91.750635}, "Atherikhat T.E.,  Community Hall,  18617020204"],
[{ lat:26.737066, lng:91.79798}, "Barangajuli Khuti,  Own Building,  18617020206"],
[{ lat:26.697046, lng:91.747196}, "Nowbandha Habi,  Community Hall,  18617020207"],
[{ lat:26.726728, lng:91.737593}, "Uttar Nowbandha,  Community Hall,  18617020208"],
[{ lat:26.775586, lng:91.774078}, "2 No. Barangajuli,  Community Hall,  18617020209"],
[{ lat:26.6144639, lng:91.07570849}, "Arrengpara Kahibari,  Own Building,  18617020210"],
[{ lat:26.759653, lng:91.754369}, "Dharamjuli Jangal,  Community Hall,  18617020211"],
[{ lat:26.798099, lng:91.772099}, "Upper Nalapara,  Community Hall,  18617020212"],
[{ lat:26.745653, lng:91.779834}, "2 No. Suklai,  Community Hall,  18617020213"],
[{ lat:26.748965, lng:91.768422}, "3 No. Suklai,  Community Hall,  18617020214"],
[{ lat:26.767023, lng:91.746521}, "Rajagarh Hatkhola,  Community Hall,  18617020215"],
[{ lat:26.71438, lng:91.75696}, "Nowbandha Gaon,  Community Hall,  18617020216"],
[{ lat:26.75591, lng:91.724866}, "Dharamjuli khoiragrant,  Own Building,  18617020217"],
[{ lat:26.712556, lng:91.763696}, "Suwala T.E.,  Community Hall,  18617020218"],
[{ lat:26.774655, lng:91.729354}, "1 No. Rajagarh,  Own Building,  "],
[{ lat:26.762639, lng:91.731294}, "2 No. Rajagarh ,  Community Hall,  18617020220"],
[{ lat:26.758258, lng:91.766889}, "4 No. Rajagarh  (Pub),  Community Hall,  18617020221"],
[{ lat:26.76009, lng:91.765208}, "4 No. Rajagarh  ,  Community Hall,  18617020222"],
[{ lat:26.576739, lng:91.788743}, "Chenialpara ,  Community Hall,  18617020223"],
[{ lat:26.570338, lng:91.790425}, "Pub Marangadal,  Community Hall,  18617020224"],
[{ lat:26.589509, lng:91.811214}, "Paschim Batabari,  Own Building,  18617020225"],




    
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
