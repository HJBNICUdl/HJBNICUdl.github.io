// The following example creates five accessible and
// focusable markers.
function allreligiousplaceanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.68847, lng:92.118208},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [


[{ lat:26.637762, lng:91.812485}, "Mahaliapara,  ,  18617010112"],
[{ lat:26.676666, lng:91.875901}, "Duliapara,  ,  18617010129"],
[{ lat:26.751699, lng:91.82443}, "No. 1 Uttar Dimakuchi ,  ,  18617010314"],
[{ lat:26.739612, lng:91.804855}, "Barangajuli T.E ,  ,  18617010325"],
[{ lat:26.769878, lng:91.778758}, "No. 2 Borangajuli,  ,  18617010333"],
[{ lat:26.718438, lng:91.862468}, "Amguri No.3,  ,  18617010417"],
[{ lat:26.847221, lng:91.873054}, "Nonaipara TG,  ,  18617010608"],
[{ lat:26.77812, lng:91.817639}, "No2 Bholatar,  ,  18617010626"],
[{ lat:26.789573, lng:92.285347}, "Mazbat TE-2,  ,  18617030306"],
[{ lat:26.803246, lng:92.305264}, "Khusurabari,  ,  18617030329"],
[{ lat:26.750767, lng:92.091786}, "Maidanguri -1,  ,  8326050506"],
[{ lat:26.68847, lng:92.118208}, "Balapa Ryngpara,  ,  18326050707"],
[{ lat:26.699206, lng:92.106122}, "1no Jorpukhuri,  ,  18326050709"],
[{ lat:26.67042, lng:92.033816}, "Nalkhamara,  ,  18326050820"],
[{ lat:26.671516, lng:92.38119}, "Athaguri ,  ,  18326050909"],
[{ lat:26.66553, lng:92.022113}, "Borbengra (Hagramari),  ,  18326050915"],
[{ lat:26.678183, lng:92.021973}, "Borbhegiapara,  ,  18326050917"],
[{ lat:26.697863, lng:92.036701}, "Maijlipara ,  ,  18326050923"],
[{ lat:26.686674, lng:92.002456}, "Silputa Botabari,  ,  18326051017"],
[{ lat:26.747169, lng:91.986353}, "No. 1 Fasia,  ,  18326051301"],
[{ lat:26.747316, lng:91.993797}, "Vill-2 no. fasia,p.o-Harisinga,pin-784510,  ,  18326051418"],
[{ lat:26.702333, lng:91.943674}, "Chenipara,  ,  18326051716"],
[{ lat:26.707503, lng:91.918962}, "Botabari,  ,  18326051824"],
[{ lat:26.7595484, lng:91.9058023}, "Sonapani,  ,  18326051928"],
[{ lat:26.776838, lng:91.941953}, "Hattigor vellakhuti,  ,  18326052106"],


    
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
