// The following example creates five accessible and
// focusable markers.
function bhalukmarianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.68431, lng:92.22778},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.667537, lng:92.262008}, "Nalbari ,  Own Building,  18617040101"],
[{ lat:26.670046, lng:92.265078}, "Nalbari II,  School Building,  18617040102"],
[{ lat:26.700396, lng:92.236723}, "Dhansirikhuti,  Own Building,  18617040103"],
[{ lat:26.704675, lng:92.235804}, "Dhansirikhuti Pachim Khanda,  RENTED,  18617040104"],
[{ lat:26.696659, lng:92.257461}, "Dhansirikhuti Uttar Khanda,  RENTED,  18617040105"],
[{ lat:26.70034, lng:92.236776}, "Dhansirikhuti Dakhin Suba ,  School Building,  18617040106"],
[{ lat:26.695462, lng:92.251446}, "Balisiha Jangal,  Own Building,  18617040107"],
[{ lat:26.692336, lng:92.252698}, "Balisiha Jangal Orang Mauza,  Own Building,  18617040108"],
[{ lat:26.691566, lng:92.232903}, "Balisiha Jangal Pt-II,  School Building,  18617040109"],
[{ lat:26.677023, lng:92.248161}, "Oubari Jangal,  Own Building,  18617040110"],
[{ lat:26.687308, lng:92.233434}, "Bhalukmari Jangal,  Own Building,  18617040111"],
[{ lat:26.698413, lng:92.22659}, "Puthimari,  School Building,  18617040112"],
[{ lat:26.68431, lng:92.22778}, "Thinthlang Guri ,  Own Building,  18617040113"],
[{ lat:26.695365, lng:92.225152}, "Bengchimarl,  RENTED,  18617040114"],
[{ lat:26.696659, lng:92.257461}, "Bhalukmarigaon ,  Own Building,  18617040115"],
[{ lat:26.686998, lng:92.235798}, "Kochgaon,  RENTED,  18617040116"],
[{ lat:26.698807, lng:92.244173}, "Biharibasti,  School Building,  18617040117"],
[{ lat:26.675998, lng:92.236207}, "Thuribari,  School Building,  18617040118"],
[{ lat:26.695687, lng:92.2456}, "Kajiapara,  RENTED,  18617040119"],
[{ lat:26.690528, lng:92.214789}, "Rowta Pathar,  Own Building,  18617040120"],
[{ lat:26.682569, lng:92.212578}, "Bathabari,  Own Building,  18617040121"],
[{ lat:26.691436, lng:92.2194}, "Balisiha Puranabasti,  School Building,  18617040122"],
[{ lat:26.705018, lng:92.218618}, "Balisihagaon,  Own Building,  18617040123"],
[{ lat:26.708483, lng:92.21128}, "Balisiha Pachim Suba,  RENTED,  18617040124"],
[{ lat:26.706244, lng:92.205636}, "Nizwmpuri,  School Building,  18617040125"],


    
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
