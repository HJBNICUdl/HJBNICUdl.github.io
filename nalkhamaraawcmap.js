// The following example creates five accessible and
// focusable markers.
function nalkhamaraanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.686157, lng:92.037995},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.697945, lng:92.05868}, "Bhalukmari ,  Club ,  18326050901"],
[{ lat:26.698516, lng:92.053085}, "Bogoribari Rabha chuba,  Club-Mahila Sammittee,  18326050902"],
[{ lat:26.690737, lng:92.040055}, "2 No Jerusalem ,  Own Building,  18326050903"],
[{ lat:26.687275, lng:92.037278}, "Jerusalem ,  Own Building,  18326050904"],
[{ lat:26.686157, lng:92.037995}, "Baligaon ,  Own Building,  18326050905"],
[{ lat:26.680632, lng:92.043135}, "Landangpara ,  Public co- operation ,  18326050906"],
[{ lat:26.677534, lng:92.048269}, "Darrangipara ,  Community hall,  18326050907"],
[{ lat:26.669473, lng:92.04344}, "2 No Nalkhamara ,  Club ,  18326050908"],
[{ lat:26.671516, lng:92.38119}, "Athaguri (M),  Religious place ,  18326050909"],
[{ lat:26.653243, lng:92.026568}, "Sarubengara ,  Own Building,  18326050910"],
[{ lat:26.647123, lng:92.022537}, "3 No Borbengra ,  School building ,  18326050911"],
[{ lat:26.652196, lng:92.020652}, "Borbengra ,  Own Building,  18326050912"],
[{ lat:26.64947, lng:92.016037}, "2 No Borbengra ,  School building ,  18326050913"],
[{ lat:26.66178, lng:92.013113}, "Botabari ,  School building ,  18326050914"],
[{ lat:26.66553, lng:92.022113}, "Borbengra Uttarchuba ,  Religious place ,  18326050915"],
[{ lat:26.673174, lng:92.021547}, "Kolbari ,  School building ,  18326050916"],
[{ lat:26.678183, lng:92.021973}, "Uttar Borbhagiapara,  Religious place ,  18326050917"],
[{ lat:26.693068, lng:92.02319}, "Belguri ,  Own Building,  18326050918"],
[{ lat:26.712676, lng:92.019308}, "Hagramari ,  Own Building,  18326050919"],
[{ lat:26.718322, lng:92.020542}, "Balisita,  Own Building,  18326050920"],
[{ lat:26.696914, lng:92.026868}, "Samtabari ,  Own Building,  18326050921"],
[{ lat:26.704176, lng:92.050077}, "Bogoribari ,  Own Building,  18326050922"],
[{ lat:26.697863, lng:92.036701}, "Maijlipara ,  Religious place ,  18326050923"],





    
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
