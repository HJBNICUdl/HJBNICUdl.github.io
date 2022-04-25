// The following example creates five accessible and
// focusable markers.
function allclubbuildinganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.75824, lng:92.103455},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [


[{ lat:26.740133, lng:91.824451}, "No. 1 Uttar Dimakuchi ,  ,  18617010323"],
[{ lat:26.729719, lng:92.32197}, "Orang T.E ,  ,  18617030413"],
[{ lat:26.837696, lng:92.252379}, " LAMABARI T.E,  ,  18617030201"],
[{ lat:26.836127, lng:92.260457}, " LAMABARI T.E,  ,  18617030203"],
[{ lat:26.833716, lng:92.264255}, " LAMABARI T.E,  ,  18617030204"],
[{ lat:26.817595, lng:92.308063}, "N0 1 Khamatobari,  ,  18617030215"],
[{ lat:26.828009, lng:92.305728}, "NO2 Bettybari T.E,  ,  18617030217"],
[{ lat:26.875716, lng:92.171889}, "Dhunseri TE,  ,  18617030106"],
[{ lat:26.864154, lng:92.197131}, "Dhunseri TE,  ,  18617030107"],
[{ lat:26.877723, lng:92.20183}, "Pahartuli,  ,  18617030110"],
[{ lat:26.791283, lng:92.28676}, "Mazbat TE-2,  ,  18617030307"],
[{ lat:26.842401, lng:92.009774}, "Vill - No 2 Kundarbil  Po - Borigaon Pin -  794510,  ,  18326050126"],
[{ lat:26.832088, lng:92.062262}, "Vill - No 2 Amjuli  Po - Borigaon Pin - 794510,  ,  18326050127"],
[{ lat:92.095137, lng:26.744061}, "Weekly Market..ward no -05,  ,  18326050501"],
[{ lat:26.745201, lng:92.09538}, "Rupnagar w.no-3,  ,  8326050507"],
[{ lat:26.746112, lng:92.099142}, "Daily market w no-3,  ,  8326050508"],
[{ lat:26.746278, lng:92.100452}, "Millon nagar ,  ,  8326050510"],
[{ lat:26.74738, lng:92.109977}, "Nalbari -3,  ,  8326050513"],
[{ lat:26.75824, lng:92.103455}, "Rangamakha,  ,  8326050520"],
[{ lat:26.697945, lng:92.05868}, "Bhalukmari ,  ,  18326050901"],
[{ lat:26.698516, lng:92.053085}, "Bogoribari Rabha chuba,  ,  18326050902"],
[{ lat:26.669473, lng:92.04344}, "No 2 Nalkhamara ,  ,  18326050908"],
[{ lat:26.755987, lng:92.017527}, "Kumuramakha,  ,  18326051007"],
[{ lat:26.720393, lng:92.020345}, "1 No Balisitha,  ,  18326051016"],
[{ lat:26.749419, lng:91.943684}, "Christanpara,  ,  18326051520"],
[{ lat:26.687617, lng:91.944928}, "Samaikuchi,  ,  18326051522"],
[{ lat:26.662592, lng:91.953811}, "Pachim Phutukibari,  ,  18326051608"],
[{ lat:26.655581, lng:91.928771}, "Dakhin Jangalpara,  ,  18326051615"],
[{ lat:26.740129, lng:91.880828}, "10 No. Paneri-A,  ,  18326051810"],
[{ lat:26.708912, lng:91.920153}, "Maganchuba,  ,  18326051811"],
[{ lat:26.816166, lng:91.862094}, "20 No Oranagajuli,Vill - Oranagajuli TE,PO- Paneri,PS- Paneri,Pin - 784523,  ,  18326052003"],
[{ lat:26.814699, lng:91.855154}, "6 No Oranagajuli,Vill - Oranagajuli TE,PO- Paneri,PS- Paneri,Pin - 784523,  ,  18326052004"],
[{ lat:26.833616, lng:91.927177}, "2 No Bangurum,Vill - 2 No Bangurum,PO-Ajyodhaypur,PS-Harishingha,Pin - 784524,  ,  18326052114"],
[{ lat:26.857927, lng:91.951822}, "Khairabari Nepali Basti,Vill - Santipur,PO- Ajodhyapur,PS- Harishinga ,Pin - 784524,  ,  18326052125"],
[{ lat:26.781047, lng:91.932287}, "Khwirabari,  ,  18326052108"],
[{ lat:26.781075, lng:91.930371}, "Khwirabari,  ,  18326052109"],

    
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
