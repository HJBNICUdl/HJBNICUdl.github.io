// The following example creates five accessible and
// focusable markers.
function bhergaonanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat:26.645495, lng:91.891467},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
   [{ lat:26.632704, lng:91.824355}, "Bhergaon Chowk (M),  Community Hall,  18617010101"],
[{ lat:26.629661, lng:91.820458}, "Ghogapara B (M),  Community Hall,  18617010102"],
[{ lat:26.647089, lng:91.825639}, "Bhergaon T.E.,  Community Hall,  18617010103"],
[{ lat:26.644779, lng:91.8227}, "Bhergaon T.E. Line No. 5,  School,  18617010104"],
[{ lat:26.630366, lng:91.836156}, "Dakhin Daulchuba (M),  Community Hall,  18617010105"],
[{ lat:26.646838, lng:91.839815}, "Daulchuba,  Own,  18617010106"],
[{ lat:26.633186, lng:91.851294}, "Bogpuri,  School,  18617010107"],
[{ lat:26.64093, lng:91.852715}, "Udmari,  Own,  18617010108"],
[{ lat:26.631095, lng:91.804316}, "Ghogapara,  Own,  18617010109"],
[{ lat:26.628423, lng:91.797253}, "Chewni,  Own,  18617010110"],
[{ lat:26.644076, lng:91.816239}, "Mahaliapara,  Own,  18617010111"],
[{ lat:26.637762, lng:91.812485}, "Bhergaon T.E. Line No. 15 (M),  Religious place,  18617010112"],
[{ lat:26.658667, lng:91.801821}, "No. 1 Purani Bhergaon,  Community Hall,  18617010113"],
[{ lat:26.665842, lng:91.802408}, "Jabangahabi,  Own,  18617010114"],
[{ lat:26.6768, lng:91.80817}, "Jabangapathar,  Own,  18617010115"],
[{ lat:26.682111, lng:91.801682}, "Mazgaon Borhola Charanpara,  School,  18617010116"],
[{ lat:26.648547, lng:91.852496}, "Borigaon   (M),  School Building,  18617010117"],
[{ lat:26.642195, lng:91.858147}, "Harchapara A,  Own Building,  18617010118"],
[{ lat:26.639284, lng:91.868987}, "Harchapara B,  Own Building,  18617010119"],
[{ lat:26.64537, lng:91.869029}, "Bortangla Sonbari,  Own Building,  18617010120"],
[{ lat:26.651244, lng:91.872813}, "Uttar Bortangla (M),  Own Building,  18617010121"],
[{ lat:26.628831, lng:91.867855}, "Darogakhat,  School,  18617010122"],
[{ lat:26.623686, lng:91.872606}, "Ahomkhat (M),  School Building,  18617010123"],
[{ lat:26.633444, lng:91.861864}, "Dakshin Paschim Chuba,  Community Hall,  18617010124"],
[{ lat:26.629848, lng:91.884936.}, "Hatibandha,  Own,  18617010125"],
[{ lat:26.615567, lng:91.883412}, "Paschim Charanpara (M),  Community Hall,  18617010126"],
[{ lat:26.66619, lng:91.878468}, "Habigaon Chuba,  School Building,  18617010127"],
[{ lat:26.673734, lng:91.879251}, "Bandarbasti (M),  Community Hall,  18617010128"],
[{ lat:26.676666, lng:91.875901}, "Duliapara,  Religious place,  18617010129"],
[{ lat:26.68027, lng:91.87478}, "Kuruabasti (M),  Community Hall,  18617010130"],
[{ lat:26.645495, lng:91.891467}, "No. 2 Pub Bortangla,  Community Hall,  18617010131"],
[{ lat:26.624441, lng:91.889298}, "Dakshin Pub Chuba (M),  Community Hall,  18617010132"],
[{ lat:26.623469, lng:91.895568}, "Charanpara - B,  Own Building,  18617010133"],
[{ lat:26.655741, lng:91.898562}, "G.P. Mill,  Community Hall,  18617010134"],
[{ lat:26.657049, lng:91.899215}, "Ureabasti,  Community Hall,  18617010135"],
[{ lat:26.657432, lng:91.901704}, "Boralpara,  Community Hall,  18617010136"],
[{ lat:26.657909, lng:91.90394}, "Stationpara,  Rented ,  18617010137"],
[{ lat:26.658072, lng:91.904945}, "Nabin Pally,  Community Hall,  18617010138"],
[{ lat:26.65679, lng:91.904948}, "Station Tiniali,  Community Hall,  18617010139"],
[{ lat:26.6572, lng:91.903971}, "Kalibari,  School Building,  18617010140"],
[{ lat:26.660276, lng:91.903805}, "Natun Patty,  Community Hall,  18617010141"],
[{ lat:26.662083, lng:91.902251}, "Ram Krishna Pally,  Community Hall,  18617010142"],
[{ lat:26.660462, lng:91.907939}, "Nonaipara,  AWW house,  18617010143"],
[{ lat:26.662383, lng:91.905877}, "Jalukbari,  AWW House,  18617010144"],
[{ lat:26.665083, lng:91.903874}, "Pani Tanki,  Community Hall,  18617010145"],

   
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
