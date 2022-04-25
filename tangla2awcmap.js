// The following example creates five accessible and
// focusable markers.
function tangla2anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.650367, lng:91.917625},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.648495, lng:91.909483}, "Dakhin Nalbari,  Own Building,  18326051701"],
[{ lat:26.435458, lng:92.036372}, "Gandhi Nagar,  Others,  18326051702"],
[{ lat:26.652846, lng:91.899087}, "Kukurakata Nonaipar,  School Building,  18326051703"],
[{ lat:26.65225, lng:91.888405}, "Natun Kochari basti,  AWW House,  18326051704"],
[{ lat:26.66245, lng:91.890528}, "Kukurakata,  Own Building,  18326051705"],
[{ lat:26.676739, lng:91.895552}, "Kukurakata Khairabari,  School Building,  18326051706"],
[{ lat:26.666728, lng:91.907634}, "Buragohai Than,  School Building,  18326051707"],
[{ lat:26.698892, lng:91.871098}, "1 No Nachansali,  School Building,  18326051708"],
[{ lat:26.687935, lng:91.879264}, "2 No Nachansali,  School Building,  18326051709"],
[{ lat:26.666089, lng:91.896603}, "2 No Pachim Nalbari,  Others,  18326051710"],
[{ lat:26.711927, lng:91.868776}, "Dhupguri,  School Building,  18326051711"],
[{ lat:26.670428, lng:91.910829}, "Banseria,  School Building,  18326051712"],
[{ lat:26.677917, lng:91.906957}, "1 No Sastrapara,  School Building,  18326051713"],
[{ lat:26.695993, lng:91.921317}, "Ratanpur,  Community Hall,  18326051714"],
[{ lat:26.695138, lng:91.94142}, "Chenipara,  School Building,  18326051715"],
[{ lat:26.702333, lng:91.943674}, "1 No Chenipara,  Religious place,  18326051716"],
[{ lat:26.676484, lng:91.93529}, "Hahinigaon,  School Building,  18326051717"],
[{ lat:26.679363, lng:91.940536}, "Hahini Batabari,  others,  18326051718"],
[{ lat:26.672568, lng:91.925979}, "Balipara Pukhuripar,  Own Building,  18326051719"],
[{ lat:26.663871, lng:91.921746}, "Chamuapara,  Own Building,  18326051720"],
[{ lat:26.659296, lng:91.920254}, "Medhipara Utter Pub Chuba,  Own Building,  18326051721"],
[{ lat:26.679629, lng:91.934203}, "Baghpara,  AWW house,  18326051722"],




    
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
