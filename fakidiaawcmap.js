// The following example creates five accessible and
// focusable markers.
function fakidiaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.72907, lng:92.143081},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.702066, lng:92.16875}, "Fakidia,  School Building,  18617040401"],
[{ lat:26.695825, lng:92.156873}, "Fakidia Borongabari,  School Building,  18617040402"],
[{ lat:26.702322, lng:92.156738}, "Fakidia Bengali Chuba,  Own Building,  18617040403"],
[{ lat:26.693968, lng:92.154867}, "Fakidia Boro Chuba,  Own Building,  18617040404"],
[{ lat:26.688928, lng:92.152166}, "Kathalbari,  Own Building,  18617040405"],
[{ lat:26.708363, lng:92.159782}, "Kathalbari Dakhin Khanda,  RENTED,  18617040406"],
[{ lat:26.688928, lng:92.152166}, "Ekrabari Hindu Chuba,  Own Building,  18617040407"],
[{ lat:26.713494, lng:92.203761}, "Sonai Bhergaon,  School Building,  18617040408"],
[{ lat:26.713494, lng:92.203761}, "No- 1 Bhergaon,  RENTED,  18617040409"],
[{ lat:26.713494, lng:92.203761}, "Khwrwguri,  School Building,  18617040410"],
[{ lat:26.713494, lng:92.203761}, "Bhergaon Gopsar,  School Building,  18617040411"],
[{ lat:26.72907, lng:92.143081}, "Purani Hapagaon,  School Building,  18617040412"],
[{ lat:26.73717, lng:92.135338}, "Natun Hapagaon,  Own Building,  18617040413"],
[{ lat:26.747609, lng:92.125232}, "Saotalpara,  RENTED,  18617040414"],
[{ lat:26.735152, lng:92.142887}, "Kolbari Hatkhola,  RENTED,  18617040415"],
[{ lat:26.743467, lng:92.116048}, "Kathalguri                    ,  school Building,  18617040416"],
[{ lat:26.741784, lng:92.117939}, "Kathalguri Part -II,  Own Building,  18617040417"],
[{ lat:26.690028, lng:92.203077}, "No - 2 Batabari,  RENTED,  18617040418"],
[{ lat:26.713494, lng:92.20376}, "No-2 Batabari Dongra,  Own Building,  18617040419"],
[{ lat:26.737529, lng:92.148972}, "Ulubari,  Own Building,  18617040420"],
[{ lat:26.713494, lng:92.203761}, "Baligaon,  Own Building,  18617040421"],
[{ lat:26.713494, lng:92.203761}, "Garmarah,  Own Building,  18617040422"],
[{ lat:26.721963249, lng:92.1238836}, "Garmarah Adibasi Chuba,  RENTED,  18617040423"],
[{ lat:26.713494, lng:92.203761}, "No-2 Garmarah,  Own Building,  18617040424"],
[{ lat:26.712387, lng:92.108683}, "Santipur,  Own Building,  18617040425"],
[{ lat:26.72608, lng:92.116525}, "Singgaon,  Own Building,  18617040426"],


    
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
