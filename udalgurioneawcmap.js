// The following example creates five accessible and
// focusable markers.
function udalgurioneanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.650367, lng:91.917625},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.74486, lng:92.110081}, "Kathalguri,  Own Building,  18326050601"],
[{ lat:26.747482, lng:92.1096649}, "Nalbari,  Community Hall,  18326050602"],
[{ lat:26.731909, lng:92.094688}, "Bwigriguri,  Own Building,  18326050603"],
[{ lat:26.732876', lng:92.097231}, "Sudempuri,  AWW. House,  18326050604"],
[{ lat:26.734099, lng:92.106656}, "Purani Goraibari,  School Building,  18326050605"],
[{ lat:26.733043, lng:92.121499}, "Dangdupur,  School Building,  18326050606"],
[{ lat:26.709047, lng:92.143336}, "Dahalapara,  Own Building,  18326050607"],
[{ lat:26.727965, lng:92.109624}, "Purani Goraibari7b,  Community Hall,  18326050608"],
[{ lat:26.675287, lng:92.161464}, "1no Ekrabari,  Own Building,  18326050609"],
[{ lat:26.679847, lng:92.155371}, "2no Ekrabari,  School Building,  18326050610"],
[{ lat:26.713844, lng:92.156496}, "2noBatabari,  School Building,  18326050611"],
[{ lat:26.726001, lng:92.156798}, "Dwifang Pakribari,  Own Building,  18326050612"],
[{ lat:26.743392, lng:92.164576}, "Dwifang Kahibari,  Own Building,  18326050613"],
[{ lat:26.750726, lng:92.14889}, "Ashikhandari,  School Building,  18326050614"],
[{ lat:26.765562, lng:92.143363}, "Hatkata Club,  Own Building,  18326050615"],
[{ lat:26.754759, lng:92.136528}, "Dhulachuburi,  Community Hall,  18326050616"],
[{ lat:36.781294, lng:92.136724}, "Gelagaon Bogoribari,  Own Building,  18326050617"],
[{ lat:26.742231, lng:92.136085}, "Bahinigaon,  Own Building,  18326050618"],
[{ lat:26.743042, lng:92.145325}, "2no Madhya Goraibari,  Own Building,  18326050619"],
[{ lat:26.734934, lng:92.16022}, "1no Bhergaon,  School Building,  18326050620"],
[{ lat:26.749551, lng:92.14303}, "2no Goraibari B. B. ,  Community Hall,  18326050621"],
[{ lat:26.781926, lng:92.134762}, "1no Gelagaon Vetorbari,  Own Building,  18326050622"],
[{ lat:26.726057, lng:92.147677}, "1no Bhergaon Gobsar,  AWW House,  18326050623"],




    
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
