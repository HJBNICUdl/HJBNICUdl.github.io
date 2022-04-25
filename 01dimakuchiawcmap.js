// The following example creates five accessible and
// focusable markers.
function 01dimakuchianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.728599, lng:91.847826},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.740908, lng:91.822225}, "1 No. Uttar Dimakuchi,  Own Building,  18617020101"],
[{ lat:26.754157, lng:91.817902}, "2 No. Dimakuchi,  Own Building,  18617020102"],
[{ lat:26.747112, lng:91.844425}, "Dimakuchi T.E.,  Creche House,  18617020103"],
[{ lat:26.732903, lng:91.807124}, "1 No. Sonajuli,  Own Building,  18617020104"],
[{ lat:26.843574, lng:91.883955}, "Nonaikhuti,  Own Building,  18617020105"],
[{ lat:26.805686, lng:91.876139}, "1No. Garuajhar,  Own Building,  18617020106"],
[{ lat:26.794178, lng:91.8762}, "2No. Garuajhar,  School Building,  18617020107"],
[{ lat:26.780875, lng:91.873059}, "Dakhin Garuajhar,  School Building,  18617020108"],
[{ lat:26.712179, lng:91.868268}, "Amguri,  Own Building,  18617020109"],
[{ lat:26.728599, lng:91.847826}, "Hachara,  AWC own building under construction,  18617020110"],
[{ lat:26.697321, lng:91.849659}, "Dingdongpara,  Own Building,  18617020111"],
[{ lat:26.678327, lng:91.85243}, "Nagrachar,  Own Building,  18617020112"],
[{ lat:26.78179, lng:91.866438}, "Uttar Kalikhola,  Running in School Building,  18617020113"],
[{ lat:26.796863, lng:91.83885}, "Kalikhola,  Running in School Building,  18617020114"],
[{ lat:26.863123, lng:91.8534}, "Sagunbahi,  Community Hall,  18617020115"],
[{ lat:26.853526, lng:92.837006}, "Samrang,  own building  damaged,  18617020116"],
[{ lat:26.845579, lng:91.831968}, "Nanaikhas,  own building damaged,  18617020117"],
[{ lat:26.814944, lng:91.836253}, "Bamunjuli,  own building ,  18617020118"],
[{ lat:26.779748, lng:91.817291}, "Badlapara T.E.,  Cress House,  18617020119"],
[{ lat:26.807687, lng:91.814532}, "2NO. Bholatar,  own building Under construction,  18617020120"],
[{ lat:26.829405, lng:91.796665}, "Thalungjhar,  Both AWW & AWH Vaccant,  18617020121"],
[{ lat:26.592006, lng:91.818273}, "Tamreswar,  own building,  18617020122"],
[{ lat:26.5291, lng:91.822027}, "Dakhin Bahmolla,  Running in AWW house,  18617020123"],
[{ lat:26.608539, lng:91.853783}, "Sabukdhara Kaptijhar,  own building,  18617020124"],
[{ lat:26.587441, lng:91.864908}, "Bhulaguri,  Running in Community Hall,  18617020125"],
  
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
