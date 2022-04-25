// The following example creates five accessible and
// focusable markers.
function merabilanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.749398, lng:92.252404},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.705772, lng:92.260736}, "Jamuguri,  Own Building,  18617030601"],
[{ lat:26.717117, lng:92.253559}, "kuruabahi-1,  Own Building,  18617030602"],
[{ lat:26.720956, lng:92.253452}, "kuruabahi-2,  Community Hall,  18617030603"],
[{ lat:26.727787, lng:92.244728}, "Goraimari,  Own Building,  18617030604"],
[{ lat:26.73293, lng:92.237614}, "Rowtamukh,  Own Building,  18617030605"],
[{ lat:26.73374, lng:92.248501}, "Pub Goraimari,  School Building,  18617030606"],
[{ lat:26.749398, lng:92.252404}, "Nepalpara,  Own Building,  18617030607"],
[{ lat:26.75957, lng:92.257039}, "Chutiabasti,  Own Building,  18617030608"],
[{ lat:26.728336, lng:92.244758}, "Potabil,  School Building,  18617030609"],
[{ lat:26.744007, lng:92.235912}, "Merabil-1,  Own Building,  18617030610"],
[{ lat:26.7446, lng:92.226959}, "Merabil-2,  School Building,  18617030611"],
[{ lat:26.755412, lng:92.234895}, "Godhabil,  School Building,  18617030612"],
[{ lat:26.75739, lng:92.225607}, "Shillongkhuti,  Own Building,  18617030613"],
[{ lat:26.76797, lng:92.227266}, "Gourbasti,  School Building,  18617030614"],
[{ lat:26.768054, lng:92.236018}, "Pub Gourbasti,  Own Building,  18617030615"],
[{ lat:26.774727, lng:92.221388}, "Khagrabil,  School Building,  18617030616"],
[{ lat:26.780234, lng:92.21981}, "Nagaon,  Own Building,  18617030617"],
[{ lat:26.802453, lng:92.232994}, "Hatimara - 1,  Own Building,  18617030618"],
[{ lat:26.801256, lng:92.245568}, "Rowtagaon- 1,  Own Building,  18617030619"],
[{ lat:26.791389, lng:92.223206}, "Hatimara -2,  School Building,  18617030620"],
[{ lat:26.809683, lng:92.2308}, "Rowtagaon -2,  School Building,  18617030621"],
[{ lat:26.784267, lng:92.236971}, "Solmari,  Own Building,  18617030622"],
[{ lat:26.756147, lng:92.212815}, "2no Rangapani,  School Building,  18617030623"],
[{ lat:26.776248, lng:92.207541}, "3no Rangapani,  Own Building,  18617030624"],
[{ lat:26.758704, lng:92.274385}, "N.C.Tekelibil,  School Building,  18617030625"],
[{ lat:26.753075, lng:92.267234}, "Tekelibil,  Own Building,  18617030626"],
[{ lat:26.77265, lng:92.277543}, "Gerubari,  School Building,  18617030627"],
[{ lat:26.776284, lng:92.25368}, "1no Beteli T E,  School Building,  18617030628"],
[{ lat:26.774657, lng:92.257346}, "2no Beteli T.E,  School Building,  18617030629"],
[{ lat:26.783295, lng:92.258451}, "3no Beteli T.E,  Own Building,  18617030630"],
[{ lat:26.675787, lng:92.308433}, "2no Saikiachuburi,  School Building,  18617030706"],
[{ lat:26.64709752, lng:92.319244}, "Pauriputa,  Own Building,  18617030707"],
[{ lat:26.646685, lng:92.32903}, "Chutiapara,  School Building,  18617030708"],
[{ lat:26.64062116, lng:92.31219619}, "Dakhin Pauriputa,  Community Hall,  18617030709"],
[{ lat:26.639501, lng:92.305372}, "Udalguri Nepali,  School Building,  18617030710"],






    
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
