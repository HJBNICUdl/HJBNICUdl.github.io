// The following example creates five accessible and
// focusable markers.
function allAWWanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.757847, lng:92.95489},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.755541, lng:91.91896}, "Sahadev Basti, Vill - Khaira Jangal,PO- Hatighar,PS- Paneri,Pin - 784524,  ,  18326052021"],
[{ lat:26.693237, lng:91.954435}, "Merbangsuba,  ,  18326051507"],
[{ lat:26.66462, lng:91.97939}, "Tangla Town, ward/no-1,  ,  18617010143"],
[{ lat:26.662383, lng:91.95877}, "Tangla Town, ward/no-1,  ,  18617010144"],
[{ lat:26.741672, lng:91.778517}, "No. 2 Suklai Khuti,  ,  18617010328"],
[{ lat:26.737748, lng:91.83382}, "No 1 uttar Dimakuchi,  ,  18617010437"],
[{ lat:26.86824, lng:91.861368}, "No1 Sagunbari,  ,  18617010627"],
[{ lat:26.567888, lng:91.7729}, "Umananda,  ,  18617021202"],
[{ lat:26.593734, lng:91.798169}, "Sukliapara,  ,  18617021203"],
[{ lat:26.72924, lng:92.189521}, "Maradhansiri,  ,  18617040207"],
[{ lat:26.859589, lng:92.12389}, "No1 Majorgaon,  ,  18326050226"],
[{ lat:26.759916, lng:92.168513}, "No. 1 Purani Nalbari,  ,  18326050409"],
[{ lat:26.81683, lng:92.16983}, "Badagaon,  ,  18326050413"],
[{ lat:26.73952, lng:92.996}, "Purani Garibari..w.no-6,  ,  18326050502"],
[{ lat:26.743381, lng:92.1644}, "Jyotinagar w.no-4,  ,  18326050503"],
[{ lat:26.73937, lng:92.9563}, "Mission Road w.no-6,  ,  8326050504"],
[{ lat:26.74625, lng:92.91944}, "sundar diya patti w.no -5,  ,  8326050505"],
[{ lat:26.745587, lng:92.112655}, "khatal guri w.no--4,  ,  8326050511"],
[{ lat:26.751828, lng:92.1535}, "Nalbari -2,  ,  8326050512"],
[{ lat:26.757847, lng:92.95489}, "Golmagaon..A,  ,  8326050516"],
[{ lat:26.75176, lng:92.9111}, "Maidanguri,  ,  8326050522"],
[{ lat:26.72657, lng:92.147677}, "1no Bhergaon Gob. ,  ,  18326050623"],
[{ lat:26.743568', lng:92.186}, "Pub Nagar,  ,  18326050701"],
[{ lat:26.648141, lng:92.1283}, "Medhipara pochim,  ,  18326050705"],
[{ lat:26.733124, lng:92.6966}, "Murabari,  ,  18326051015"],
[{ lat:26.758356, lng:92.94436}, "Bamunbosti,  ,  18326051121"],
[{ lat:26.773974, lng:92.85146}, "1No Chandana,  ,  18326051122"],
[{ lat:26.718827, lng:91.994722}, "Vill-Niz Harisinga,p.o-Harisinga,pin784510,  ,  18326051406"],
[{ lat:26.7346, lng:91.987791}, "Vill-Harisinga Deulguri,p.o Hariinga,pin-784510,  ,  18326051412"],
[{ lat:26.72243, lng:91.984224}, "Vill-Kathalguri(Thulungapuri),p.o-Harisinga,pin-784510,  ,  18326051413"],
[{ lat:26.747316, lng:91.9886}, "Vill  -Simoluguri,p.o-Harisinga,pin -784510,  ,  18326051423"],
[{ lat:26.65225, lng:91.88845}, "Kukurakata,  ,  18326051704"],
[{ lat:26.679629, lng:91.93423}, "Hahinigaon,  ,  18326051722"],
[{ lat:26.74625, lng:91.98533}, "Kachubil,  ,  18326051909"],
[{ lat:26.743174, lng:91.9944}, "Kachubil,  ,  18326051927"],
[{ lat:26.68668, lng:92.003188}, "Silputa Botabari,  ,  18326051018"],
[{ lat:26.732876', lng:92.097231}, "Sudempuri,  ,  18326050604"],
[{ lat:26.591852, lng:91.79901}, "Bar Balisitha,  ,  18617020908"],
[{ lat:26.739779, lng:92.014906}, "Nij-Ambagan,  ,  18326051019"],
[{ lat:26.746351, lng:92.03482}, "2No Ulubari,  ,  18326051020"],






    
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
