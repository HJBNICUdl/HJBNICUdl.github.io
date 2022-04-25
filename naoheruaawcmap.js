// The following example creates five accessible and
// focusable markers.
function naoheruaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.852327, lng:92.221865},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26'881955, lng:92.159014}, "NC Sikaridanga,  Own Building,  18617030101"],
[{ lat:26'882249, lng:92.166493}, "No-1 Sikaridanga,  Own Building,  18617030102"],
[{ lat:26.88106, lng:92.174507}, "Paharpur,  Others,  18617030103"],
[{ lat:26.880185, lng:92.166278}, "Dalanigaon,  Own Building,  18617030104"],
[{ lat:26.860475, lng:92.185547}, "No 2 Dhunserigaon,  Own Building,  18617030105"],
[{ lat:26.875716, lng:92.171889}, "Dhansiri TE-1,  Club,  18617030106"],
[{ lat:26.864154, lng:92.197131}, "Dhansiri TE-2,  Club,  18617030107"],
[{ lat:26.865136, lng:92.199335}, "Dhansiri TE-3,  Others,  18617030108"],
[{ lat:26.858877, lng:92.196397}, "Dhansiri TE-4,  Others,  18617030109"],
[{ lat:26.877723, lng:92.20183}, "Pahartuli,  Club,  18617030110"],
[{ lat:26.887796, lng:92.206113}, "Dimachang,  Own Building,  18617030111"],
[{ lat:26.846189, lng:92.203393}, "No1Monai,  Own Building,  18617030112"],
[{ lat:26.87084, lng:92.2172}, "Dhansiri TE-5,  Own Building,  18617030113"],
[{ lat:26.877578, lng:92.214133}, "Bidangshri,  Own Building,  18617030114"],
[{ lat:26.852327, lng:92.221865}, "Kalamanipara,  Own Building,  18617030116"],
[{ lat:26.846344, lng:92.221242}, "Nagaon,  Own Building,  18617030117"],
[{ lat:26.844385, lng:92.221844}, "Getchimani,  Own Building,  18617030118"],
[{ lat:26.83898, lng:92.219225}, "Naoherua,  Own Building,  18617030119"],
[{ lat:26.824868, lng:92.221057}, "Dakhin Naoherua,  Own Building,  18617030120"],
[{ lat:26.818512, lng:92.224862}, "Kukurbhuka,  Own Building,  18617030121"],
[{ lat:26.802484, lng:92.21636}, "Niz Rangapani,  Own Building,  18617030122"],
[{ lat:26.785482, lng:92.213635}, "No 4 Rangapani,  Own Building,  18617030123"],
[{ lat:26.863983, lng:92.226802}, "Rowta Majuli,  Own Building,  18617030124"],
[{ lat:26.850768, lng:92.23654}, "Tikritola,  Own Building,  18617030125"],
[{ lat:26.835977, lng:92.242643}, "Prembasti,  Own Building,  18617030126"],
[{ lat:26.82892, lng:92.241905}, "Lamabari,  Own Building,  18617030127"],
[{ lat:26.823437, lng:92.238768}, "Pathakpur no-1,  Own Building,  18617030128"],
[{ lat:26.818436, lng:92.26998}, "Pathakpur No-2,  School Building,  18617030129"],
[{ lat:26.820866, lng:92.261096}, "NC Bahipukhuri,  Own Building,  18617030130"],
[{ lat:26.816923, lng:92.286176}, "Kishanpur,  Own Building,  18617030131"],



    
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
