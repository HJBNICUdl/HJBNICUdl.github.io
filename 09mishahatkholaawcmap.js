// The following example creates five accessible and
// focusable markers.
function 09mishahatkholaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.569668, lng:91.776603},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
 [{ lat:26.550531, lng:91.811743}, "Nihira,  Under construction,  18617020901"],
[{ lat:26.564961, lng:91.818259}, "Pub-Nizchinakona,  Running in School Building,  18617020902"],
[{ lat:26.570813, lng:91.819196}, "Khouratal,  Own Building,  18617020903"],
[{ lat:26.576015, lng:91.816032}, "South Simalubari,  Community Hall,  18617020904"],
[{ lat:26.570505, lng:91.806652}, "North Hagramari,  Community Hall,  18617020905"],
[{ lat:26.595087, lng:91.83089}, "Jamuguri,  LP School,  18617010906"],
[{ lat:26.604774, lng:91.846636}, "Singimari,  Community Hall,  18617020907"],
[{ lat:26.591852, lng:91.79901}, "Paschim Barbalisitha,  AWW's House,  18617020908"],
[{ lat:26.583394, lng:91.799996}, "Majarchuba,  LP. School,  18617020909"],
[{ lat:26.59073, lng:91.789912}, "Ulubari,  LP. School,  18617020910"],
[{ lat:26.569668, lng:91.776603}, "Uttar Umananda,  Own Building,  18617020911"],
[{ lat:26.564673, lng:91.785089}, "Paschim Jalukbari,  Community Hall,  18617020912"],
[{ lat:26.547574, lng:91.780933}, "Dakhin Jalukbari,  LP. School,  18617020913"],
[{ lat:26.562276, lng:91.809134}, "Uttar Bagaribari,  LP. School,  18617020914"],
[{ lat:26.560832, lng:91.806697}, "Bagaribari,  Own Building,  18617020915"],
[{ lat:26.545777, lng:91.803172}, "Dewanpukhuri,  Community Hall,  18617020916"],
[{ lat:26.536616, lng:91.805982}, "South Hagramari,  LP. School,  18617020917"],
[{ lat:26.532797, lng:91.808829}, "Koroibari,  Community Hall,  18617020918"],
[{ lat:26.531395, lng:91.795367}, "Sowanipara,  LP. School,  18617020919"],
[{ lat:26.524106, lng:91.793712}, "Ghagapara,  LP. School Anjali Boro(AWH),  "],
[{ lat:26.530416, lng:91.793611}, "Barnadijhar,  LP. School Padma Rajbongshi(AWH),  "],
[{ lat:26.518162, lng:91.801556}, "No-1 Pub Bainara,  Own Building,  18617020922"],
[{ lat:26.521158, lng:91.812287}, "Baripara,  LP. School,  18617020923"],
[{ lat:26.534443, lng:91.824367}, "Uttar Bahmolla,  Community Hall,  18617020924"],
[{ lat:26.475265, lng:91.919813}, "Paschim Kaikara,  LP. School,  18617020925"],






    
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
