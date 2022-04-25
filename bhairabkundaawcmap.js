// The following example creates five accessible and
// focusable markers.
function bhairabkundaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.828301, lng:92.10921},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.793032, lng:92.085622}, "N.C Phuhurabari,  School building,  18326050201"],
[{ lat:26.80711, lng:92.06765}, "Mahendrapur,  Community Hall,  18326050202"],
[{ lat:26.830354, lng:92.080324}, "Kanpur,  Community Hall,  18326050203"],
[{ lat:26.849338, lng:92.075307}, "Fulbari,  School building,  18326050204"],
[{ lat:26.851924, lng:92.0954431}, "Kalajhar,  School Building,  18326050205"],
[{ lat:26.88233, lng:92.111686}, "Angrajuli,  Own Building,  18326050206"],
[{ lat:26.863105, lng:92.10578}, "Gerency club,  Own Building,  18326050207"],
[{ lat:26.865844, lng:92.118158}, "Gumgaon,  Own Building,  18326050208"],
[{ lat:26.848008, lng:92.121285}, "Jamuguri,  Community Hall,  18326050209"],
[{ lat:26.837225, lng:92.111037}, "Sonapur Gerency,  School Building,  18326050210"],
[{ lat:26.839716, lng:92.119442}, "No1 Batabari,  School Building,  18326050211"],
[{ lat:26.825179, lng:92.121378}, "Alubasti,  Community Hall,  18326050212"],
[{ lat:26.821261, lng:92.11105}, "No1 Phuhurabari,  School Building,  18326050213"],
[{ lat:26.828301, lng:92.10921}, "Sonapur,  AWH house,  18326050214"],
[{ lat:26.851904, lng:92.095336}, "Gerency gaon,  School building,  18326050215"],
[{ lat:26.851904, lng:92.095336}, "Khusurabari,  School Building,  18326050216"],
[{ lat:26.804538, lng:92.112008}, "Batabari,  Own Building,  18326050217"],
[{ lat:26.811945, lng:92.113391}, "Bajrapur,  School Building,  18326050218"],
[{ lat:26.804284, lng:92.152658}, "Durgachuburi,  School Building,  18326050219"],
[{ lat:26.794901, lng:92.124515}, "Sonaigaon,  Own Building,  18326050220"],
[{ lat:26.772014, lng:92.119831}, "Angragaon,  Own Building,  18326050221"],
[{ lat:26.756225, lng:92.115771}, "Mawriagaon,  Community Hall,  18326050222"],
[{ lat:26.764027, lng:92.114822}, "Puroni Thana,  Community Hall,  18326050223"],
[{ lat:26.78097, lng:92.084754}, "Uttar Angragaon,  Own Building,  18326050224"],
[{ lat:26.890996, lng:92.11432}, "Bhairabkunda gaon,  Community Hall,  18326050225"],
[{ lat:26.859589, lng:92.12389}, "No1 Majorgaon,  AWW House,  18326050226"],


    
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
