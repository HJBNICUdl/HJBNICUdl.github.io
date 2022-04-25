// The following example creates five accessible and
// focusable markers.
function 06barbalisithaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.594519, lng:91.817197},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.594519, lng:91.817197}, "Bar Balisitha,  own building,  186170200601"],
[{ lat:26.585134, lng:91.811747}, "No-1 Batabari,  own building,  186170200602"],
[{ lat:26.606662, lng:91.810345}, "Selaimari,  Own Building,  186170200603"],
[{ lat:26.601618, lng:91.818891}, "Khoirabari,  Running in Community hall,  186170200604"],
[{ lat:26.600345, lng:91.809423}, "Paschim selaimari,  Running in Community hall,  186170200605"],
[{ lat:26.60443, lng:91.829756}, "Kacharidag,  own building,  186170200606"],
[{ lat:26.608896, lng:91.836118}, "Dhulabari,  own building,  186170200607"],
[{ lat:26.62879, lng:91.839004}, "Mahiakhat,  own building,  186170200608"],
[{ lat:26.612367, lng:91.856446}, "Mahaliapara,  own building,  186170200609"],
[{ lat:26.598072, lng:91.839953}, "Rongajulikhat,  own building,  186170200610"],
[{ lat:26.603659, lng:91.857594}, "Chabukdhora,  Running in Shool Building,  186170200611"],
[{ lat:26.582583, lng:91.828973}, "Sub Mahaliapara,  Running in Shool Building,  186170200612"],
[{ lat:26.573316, lng:91.802608}, "Deuriapara,  own building,  186170200613"],
[{ lat:26.584163, lng:91.793466}, "Dingdongpara,  own building,  186170200614"],
[{ lat:26.56831, lng:91.788565}, "Jalukbari,  own building,  186170200615"],
[{ lat:26.569721, lng:91.778148}, "Pub Umananda,  own building,  186170200616"],
[{ lat:26.567117, lng:91.766336}, "Paschm Umananda,  own building,  186170200617"],
[{ lat:26.54639, lng:91.790583}, "Kawoimari,  own building,  186170200618"],
[{ lat:26.56268, lng:91.805062}, "Niz-Chinakona,  own building,  186170200619"],
[{ lat:26.564346, lng:91.79761}, "Sukliapara,  own building,  186170200620"],
[{ lat:26.559976, lng:91.81614}, "Khagra,  own building,  186170200621"],
[{ lat:26.581142, lng:91.83229}, "Kaljuri,  own building,  186170200622"],
[{ lat:26.573952, lng:91.846922}, "Dolkona,  own building,  186170200623"],
[{ lat:26.553564, lng:91.813259}, "Paschim Barangabari,  own building,  186170200624"],
[{ lat:26.573508, lng:91.830809}, "Paschim Kaljuri,  own building,  186170200625"],
    
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
