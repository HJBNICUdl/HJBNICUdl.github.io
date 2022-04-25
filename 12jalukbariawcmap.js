// The following example creates five accessible and
// focusable markers.
function 12jalukbarianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.527242, lng:91.810962},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.550396, lng:91.786454}, "Madhya Jalukbari,  Running in community Building,  18617021201"],
[{ lat:26.567888, lng:91.7729}, "Dakhin Umanada,  AWW House,  18617021202"],
[{ lat:26.593734, lng:91.798169}, "Uttar Sukliapara,  AWW House,  18617021203"],
[{ lat:26.554032, lng:91.792874}, "Dakhin Sukliapara Daifam Bazar,  Running in community hall,  18617021204"],
[{ lat:26.515401, lng:91.77635}, "Dakhin Barnadijhar,  Running in Community Hall,  18617021205"],
[{ lat:26.51874, lng:91.835818}, "Kotora Boro Chuba,  Running in School Building,  18617021206"],
[{ lat:26.524097, lng:91.824823}, "Kotora Kochpara Suba,  Running in AWH House,  18617021207"],
[{ lat:26.527242, lng:91.810962}, "Bahmolla Pascim Suba,  Running in AWH House,  18617021208"],
[{ lat:26.570506, lng:91.828748}, "Tarabari Habital,  Running in School building,  18617021209"],
[{ lat:26.532224, lng:91.808072}, "Hongkhapara,  Own Building,  18617021210"],
[{ lat:26.544168, lng:91.813094}, "Amrakona,  Running in School Building,  18617021211"],
[{ lat:26.524873, lng:91.79421}, "No-1 Bainara Uttar Suba,  Running in Community,  18617021212"],
[{ lat:26.603063, lng:91.837695}, "Uttar Rongajulikhat,  Running in Community,  18617021213"],
[{ lat:26.591496, lng:91.794542}, "Gwdanari,  Running in Community Hall,  18617021214"],
[{ lat:26.59495, lng:91.818578}, "Gwjwnpuri,  Running in AWW House,  18617021215"],
[{ lat:26.607164, lng:91.818158}, "Gurihati Master Colony,  Running in Rented house,  18617021216"],





    
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
