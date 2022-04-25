// The following example creates five accessible and
// focusable markers.
function rowtaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.690028, lng:92.203077},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.718669, lng:92.209617}, "Bajrajhar East,  Own Building,  18617040301"],
[{ lat:26.71326, lng:92.214428}, "Bajrajhar Orang Mouza,  Own Building,  18617040302"],
[{ lat:26.71027, lng:92.212854}, "Kalibari,  RENTED,  18617040303"],
[{ lat:26.714181, lng:92.209394}, "Mission Area,  RENTED,  18617040304"],
[{ lat:26.702638, lng:92.226972}, "Rowta Bagan,  Own Building,  18617040305"],
[{ lat:26.707716, lng:92.229222}, "Rowta Bagan Pub,  Own Building,  18617040306"],
[{ lat:26.715596, lng:92.226143}, "Rowta Bagan Khetriya Chuba,  Own Building,  18617040307"],
[{ lat:26.707551, lng:92.223605}, "Rowta Bagan Bengali Chuba,  Own Building,  18617040308"],
[{ lat:26.710273, lng:92.201385}, "Hatigarh West,  Own Building,  18617040309"],
[{ lat:26.700097, lng:92.205192}, "Hatigarh East,  Own Building,  18617040310"],
[{ lat:26.688745, lng:92.19827}, "No.1 Jhargaon,  RENTED,  18617040311"],
[{ lat:26.690028, lng:92.203077}, "No.1 Jhargaon Uttar,  Others,  18617040312"],
[{ lat:26.679934, lng:92.205664}, "No.2 Jhargaon,  Own Building,  18617040313"],
[{ lat:26.685128, lng:92.205023}, "No.2 Jhargaon Uttar,  Own Building,  18617040314"],
[{ lat:26.673496, lng:92.192591}, "Khowlapara,  RENTED,  18617040315"],
[{ lat:26.698702, lng:92.187152}, "Sidhakhowa,  RENTED,  18617040316"],
[{ lat:26.696302, lng:92.182401}, "Sidhakhowa Pachim,  Own Building,  18617040317"],
[{ lat:26.705293, lng:92.188666}, "Satbasaria,  Own Building,  18617040318"],
[{ lat:26.712798, lng:92.188915}, "Balisiha Habi,  Own Building,  18617040319"],
[{ lat:26.707339, lng:92.17567}, "Doigola ,  School Building,  18617040320"],
[{ lat:26.719485, lng:92.168583}, "No.2 Phuhurabari,  Own Building,  18617040321"],
[{ lat:26.685612, lng:92.184248}, "Aminpara A,  RENTED,  18617040322"],
[{ lat:26.679635, lng:92.183159}, "Aminpara B,  School Building,  18617040323"],
[{ lat:26.682515, lng:92.179794}, "Aminpara C,  RENTED,  18617040324"],

    
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
