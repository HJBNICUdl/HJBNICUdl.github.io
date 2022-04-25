// The following example creates five accessible and
// focusable markers.
function hatigarhanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.781047, lng:91.932287},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.822412°, lng:91.936017°}, "Majuli Grant ,  Community ,  18326052112"],
[{ lat:26.837115°, lng:91.93102°}, "Pachim Majuli ,  School Bulding,  18326052113"],
[{ lat:26.833616°, lng:91.927177°}, "2 No Bangurum,  Club,  18326052114"],
[{ lat:26.838092°, lng:91.930398°}, "D/ Bangurum,  School Bulding,  18326052115"],
[{ lat:26.840666°, lng:91.913476°}, "Barbari Pather,  School Bulding,  18326052116"],
[{ lat:26.830988°, lng:91.915576°}, "2 No. Chagalijar ,  School Bulding,  18326052117"],
[{ lat:26.799372°, lng:91.900918°}, "Jurapukhuri,  School Bulding,  18326052118"],
[{ lat:26.857927°, lng:91.951822°}, "Khairabari Nepali Basti,  Club,  18326052125"],
[{ lat:26.778063, lng:91.944323}, "Hattigarh vellakhuti,  School building,  18326052105"],
[{ lat:26.776838, lng:91.941953}, "Hattigarh vellakhuti 2no,  religious place,  18326052106"],
[{ lat:26.777395, lng:91.932491}, "2no hattigarh,  School building,  18326052107"],
[{ lat:26.781047, lng:91.932287}, "madhyam khoirabari,  club,  18326052108"],
[{ lat:26.781075, lng:91.930371}, "khoirabari lal tanky,  club,  18326052109"],
[{ lat:26.78338, lng:91.927769}, "khoirabari m/k pt-2,  Own Building,  18326052110"],
[{ lat:26.810398, lng:91.922485}, "1no satgharia,  School building,  18326052119"],
[{ lat:26.796198, lng:91.921603}, "2no satgharia,  School building,  18326052120"],
[{ lat:26.76402◦, lng:91.92849◦}, "Uttar Khairajangal,  Own Building,  18326052101"],
[{ lat:26.779875◦, lng:91.92747◦}, "Paschim Khairabari,  School Building,  18326052102"],
[{ lat:26.777873◦, lng:91.928972◦}, "Hattigorh T. E. ,  Comminuty Hall,  18326052103"],
[{ lat:26.773934°, lng:91.934984°}, "No. 10 Hattigorh,  Comminuty Hall,  18326052104"],
[{ lat:26.786153◦, lng:91.924477◦}, "Bangshipur,  Others,  18326052111"],
[{ lat:26.773647◦, lng:91.919101◦}, "Khairajangal,  Own Building,  18326052121"],
[{ lat:26.76396◦, lng:91.928513◦}, "Teliapara,  Comminuty Hall,  18326052122"],
[{ lat:26.764892◦, lng:91.92194◦}, "Khairajangal D/K Gourbasti,  Comminuty Hall,  18326052123"],
[{ lat:26.764065◦, lng:91.928394◦}, "Teliapara P/K,  AWH House,  18326052125"],



    
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
