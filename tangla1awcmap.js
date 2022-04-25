// The following example creates five accessible and
// focusable markers.
function tangla1anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.650367, lng:91.917625},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.655878, lng:91.955855}, "Letpetkhat,  Own Building,  18326051601"],
[{ lat:26.673078, lng:91.948152}, "Bangaon,  Own Building,  18326051602"],
[{ lat:26.668782, lng:91.95751}, "Gerua,  Own Building,  18326051603"],
[{ lat:26.656703, lng:91.962166}, "Chaibari,  School Building,  18326051604"],
[{ lat:26.650434, lng:91.96843}, "Pub Phutukibari,  Community,  18326051605"],
[{ lat:26.674714, lng:91.969609}, "Garkash,  Own Building,  18326051606"],
[{ lat:26.659736, lng:91.975617}, "2 No. Alikash,  Community,  18326051607"],
[{ lat:26.662592, lng:91.953811}, "Pachim Phutukibari,  Club,  18326051608"],
[{ lat:26.650649, lng:91.916666}, "Barjalah,  School Building,  18326051609"],
[{ lat:26.651374, lng:91.919873}, "Milanpur Barjalah,  Community,  18326051610"],
[{ lat:26.647634, lng:91.914712}, "Jorpukhuri Barjalah,  Community,  18326051611"],
[{ lat:26.658855, lng:91.917352}, "Pub Nalbari,  Community,  18326051612"],
[{ lat:26.649666, lng:91.951423}, "Jalah Khutichuba,  Community,  18326051613"],
[{ lat:26.650069, lng:91.938204}, "Jalah Nabhanga,  School Building,  18326051614"],
[{ lat:26.655581, lng:91.928771}, "Jangalpara,  Club,  18326051615"],
[{ lat:26.64716, lng:91.953152}, "Botabari,  Own Building,  18326051616"],
[{ lat:26.65506, lng:91.939398}, "Palahgarh,  School Building,  18326051617"],
[{ lat:26.655511, lng:91.920153}, "Uttar Mazgaon (M),  School Building,  18326051618"],





    
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
