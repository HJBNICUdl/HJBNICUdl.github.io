// The following example creates five accessible and
// focusable markers.
function uttarrawangarhanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.746336, lng:92.061464},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.748721, lng:92.087243}, "No 1 Sapkhaithi Signalguri,  School Building,  18326051101"],
[{ lat:26.750442, lng:92.09323}, "No 1 Sapkhaithi Manipuribosti,  School Building,  18326051102"],
[{ lat:26.746331, lng:92.089489}, "Ramkrishnapally,  AWH House,  18326051103"],
[{ lat:26.741011, lng:92.089373}, "Saotal mission area,  School Building,  18326051104"],
[{ lat:26.743552, lng:92.082908}, "No 1 Sapkhaithi,  Own Building,  18326051105"],
[{ lat:26.727039, lng:92.068653}, "Bagantola Adivasigaon,  School Building,  18326051106"],
[{ lat:26.743577, lng:92.070681}, "Bagantola Bodochuba,  School Building,  18326051107"],
[{ lat:26.727556, lng:92.045915}, "Dagarmakha,  Own Building,  18326051108"],
[{ lat:26.740449, lng:92.039798}, "Botabari,  Public Cooperation,  18326051109"],
[{ lat:26.740615, lng:92.029267}, "Bengali Bosti Pachim,  Own Building,  18326051110"],
[{ lat:26.73473, lng:92.030082}, "Uttar Rawanagarh,  Own Building,  18326051111"],
[{ lat:26.755346, lng:92.036158}, "2No Jhokoragaon,  Own Building,  18326051112"],
[{ lat:26.747565, lng:92.035223}, "Ulubari,  AWH House,  18326051113"],
[{ lat:26.742329, lng:92.043938}, "Ulubari Habigaon,  Own Building,  18326051114"],
[{ lat:26.746258, lng:92.059148}, "Tamulbari,  School Building,  18326051115"],
[{ lat:26.746336, lng:92.061464}, "Kapurpura,  School Building,  18326051116"],
[{ lat:26.764788, lng:92.047917}, "Habigaon,  Own Building,  18326051117"],
[{ lat:26.750827, lng:92.07777}, "Chandana T E,  School Building,  18326051118"],
[{ lat:26.759616, lng:92.083318}, "Horpur,  Own Building,  18326051119"],
[{ lat:26.778853, lng:92.080158}, "Chandana Borigaon,  Own Building,  18326051120"],
[{ lat:26.758356, lng:92.094436}, "Bamunbosti,  AWW House,  18326051121"],
[{ lat:26.773974, lng:92.085146}, "1No Chandana,  AWW House,  18326051122"],
[{ lat:26.73772, lng:92.081542}, "2No Sapkhaithi Bodochuba,  School Building,  18326051123"],





    
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
