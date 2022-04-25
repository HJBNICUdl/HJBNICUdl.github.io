// The following example creates five accessible and
// focusable markers.
function ambagaonanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat:26.727154, lng:92.018412},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.740479, lng:92.007578}, "Dalagaon,  School Building,  18326051001"],
[{ lat:26.738263, lng:92.002225}, "Nij-Ambagaon,  School Building,  18326051002"],
[{ lat:26.732689, lng:92.020207}, "Kochpara,  Community Hall,  18326051003"],
[{ lat:26.698925, lng:92.012293}, "Sastrapara,  Own Building,  18326051004"],
[{ lat:26.683312, lng:92.001924}, "Silputa Botabari,  School Building,  18326051005"],
[{ lat:26.716801, lng:92.030898}, "Uttar Bhurachuburi,  Own Building,  18326051006"],
[{ lat:26.755987, lng:92.017527}, "Kumuramakha,  Club,  18326051007"],
[{ lat:26.755222, lng:92.092057}, "Khas Rawnagarh,  Own Building,  18326051008"],
[{ lat:26.682793, lng:92.020336}, "Boscobari,  Own Building,  18326051009"],
[{ lat:26.721192, lng:91.991364}, "Bicharchuburi,  Own Building,  18326051010"],
[{ lat:26.44194, lng:92.020201}, "Jhokora,  Own Building,  18326051011"],
[{ lat:26.741146, lng:92.012474}, "Ambagaon,  Own Building,  18326051012"],
[{ lat:26.738972, lng:92.007379}, "Mowamari,  School Building,  18326051013"],
[{ lat:26.727154, lng:92.018412}, "Ujan Balisitha,  Own Building,  18326051014"],
[{ lat:26.733124, lng:92.006966}, "Murabari,  AWW House,  18326051015"],
[{ lat:26.720393, lng:92.020345}, "1 No Balisitha,  Club,  18326051016"],
[{ lat:26.686674, lng:92.002456}, "Dakhin Silputa,  Religious Place,  18326051017"],
[{ lat:26.68668, lng:92.003188}, "Pachim Silputa,  AWW's House,  18326051018"],
[{ lat:26.739779, lng:92.014906}, "AmbagaonTengabari,  AWW's House,  18326051019"],
[{ lat:26.746351, lng:92.03482}, "2 No Ulubari,  AWW's House,  18326051020"],
[{ lat:26.703886, lng:92.027992}, "Bhurachuburi,  Own Building,  18326051021"],
[{ lat:26.716715, lng:92.021656}, "Balipara Botabari,  School Building,  18326051022"],


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