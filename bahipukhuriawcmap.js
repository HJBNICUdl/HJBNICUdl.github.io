// The following example creates five accessible and
// focusable markers.
function bahipukhurianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.813802, lng:92.296003},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.837696, lng:92.252379}, " No.3 Lamabari T.E,  Club,  18617030201"],
[{ lat:26.835884, lng:92.252801}, "No.4Lamabari T.E,  Own Building,  18617030202"],
[{ lat:26.836127, lng:92.260457}, "No.1 Lamabari T.E,  Club,  18617030203"],
[{ lat:26.833716, lng:92.264255}, " No 2 Lamabari TE,  Club,  18617030204"],
[{ lat:26.852688, lng:92264061}, "UTtar Bahadur Adrash,  Own Building,  18617030205"],
[{ lat:26.850546, lng:92.27229}, " Bahadur Adrash,  Own Building,  18617030206"],
[{ lat:26.804852, lng:92.285135}, " N02  Naharbari,  Own Building,  18617030207"],
[{ lat:26.820696, lng:92.286965}, "No 1 Bahipukhuri T.E,  Own Building,  18617030208"],
[{ lat:26.822996, lng:92.285299}, "No 4 Bahipukhuri T.E,  Own Building,  18617030209"],
[{ lat:26.808783, lng:92.280967}, " No 3 Bahipukhuri T .E,  Own Building,  18617030210"],
[{ lat:26.834514, lng:92.280927}, "N02 Bahipukhuri T.E,  Own Building,  18617030211"],
[{ lat:26.834456, lng:92.288385}, "N05   Bahipukhuri T.E,  School Building,  18617030212"],
[{ lat:26.831977, lng:92.287902}, " BELAPUR,  Own Building,  18617030213"],
[{ lat:26.813802, lng:92.296003}, "N01 Khu surabari,  School Building,  18617030214"],
[{ lat:26.817595, lng:92.308063}, "N01 Khamatobari,  Club,  18617030215"],
[{ lat:26.82191, lng:92.305397}, " N04 bettybari T.E,  Others,  18617030216"],
[{ lat:26.828009, lng:92.305728}, "No.2 Bettybari T.E,  Club,  18617030217"],
[{ lat:26.83171, lng:92.302342}, " No.1 Bettybari TE,  Own Building,  18617030218"],
[{ lat:26.829243, lng:92.294351}, " No.1 Bettybari (Ramgarha),  Own Building,  18617030219"],
[{ lat:26.850562, lng:92.321393}, " No.2 BETTYBARI(Nagbil),  School Building,  18617030220"],
[{ lat:26.849192, lng:92.294993}, " N01 Kadabil,  School Building,  1861703021"],
[{ lat:26.857601, lng:92.296525}, " N02 Kadabil,  School Building,  18617030222"],
[{ lat:26.855625, lng:92.309732}, "N01 HATTIPUTA,  School Building,  18617030223"],
[{ lat:26.860474, lng:92.321392}, "N02 HATTIPUTA,  School Building,  18617030224"],
[{ lat:26.855474, lng:92.331787}, " Dewsani,  School Building,  18617030225"],
[{ lat:26.83804, lng:92.320776}, " Jaygapur,  Own Building,  18617030226"],
[{ lat:26.827715, lng:92.31512}, "Lukampur,  Own Building,  18617030227"],
[{ lat:26.821481, lng:92.324065}, " N01Chaparabari,  Own Building,  18617030228"],
[{ lat:26.797848, lng:92.331766}, " N02Chaparabari,  Community Hall,  18617030229"],
[{ lat:26.821146, lng:92.335111}, " N0 2Chaparabari (simluguri),  School Building,  18617030230"],



    
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
