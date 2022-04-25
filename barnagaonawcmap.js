// The following example creates five accessible and
// focusable markers.
function barnagaonanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.69588, lng:92.062384},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.712117, lng:92.070573}, "Barnagaon,  Own Building,  18326050801"],
[{ lat:26.693012, lng:92.079835}, "Begapara,  Community ,  18326050802"],
[{ lat:26.67911, lng:92.075629}, "Dhalkata,  Own Building,  18326050803"],
[{ lat:26.695896, lng:92.070586}, "Habigao Jharnagaon,  School building,  18326050834"],
[{ lat:26.685951, lng:92.0641}, "Kathorbari,  School building,  18326050805"],
[{ lat:26.671592, lng:92.063659}, "Bhairaguri,  Own Building,  18326050806"],
[{ lat:26.660978, lng:92.063795}, "Kuptimari Kopalfula,  School building,  18326050807"],
[{ lat:26.660256, lng:92.053375}, "Dawaguri,  School building,  18326050808"],
[{ lat:26.69588, lng:92.062384}, "Pachim Bhairaguri,  Own Building,  18326050809"],
[{ lat:26.650597, lng:92.062949}, "Sonaripara,  Own Building,  18326050810"],
[{ lat:26.654894, lng:92.056261}, "2 No.Sonaripara,  School building,  18326050811"],
[{ lat:26.648625, lng:92.037673}, "Jakhaibhangi,  Community ,  18326050812"],
[{ lat:26.716928, lng:92.06528}, "Sarunagaon,  Own Building,  18326050813"],
[{ lat:26.722735, lng:92.057626}, "Golamakha,  School building,  18326050814"],
[{ lat:26.736848, lng:92.055644}, "Jarabari Paligurichuba,  School building,  18326050815"],
[{ lat:26.716766, lng:92.05509}, "Khagrabari,  Community ,  18326050816"],
[{ lat:26.715437, lng:92.049327}, "Gergemokha,  School building,  18326050817"],
[{ lat:26.698618, lng:92.041063}, "Baithonia Sastrapara,  School building,  18326050818"],
[{ lat:26.676939, lng:92.038371}, "Nalkhamara,  Own Building,  18326050819"],
[{ lat:26.67042, lng:92.033816}, "Thekerabari (Mini),  Religious place,  18326050820"],
[{ lat:26.666509, lng:92.033402}, "Baghchalchuburi,  School building,  18326050821"],
[{ lat:26.650873, lng:92.041398}, "Sonarichuburi,  School building,  18326050822"],






    
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
