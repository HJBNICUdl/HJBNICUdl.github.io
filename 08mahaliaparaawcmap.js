// The following example creates five accessible and
// focusable markers.
function 08mahaliaparaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.479196, lng:91.914526},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
 [{ lat:26.514617, lng:91.888298}, "Mahaliapara,  Own building,  18283020801"],
[{ lat:26.512341, lng:91.878395}, "Bairagipara,  Own Building,  18283020802"],
[{ lat:26.502062, lng:91.87742}, "Uttar Banaikuchi,  Own Building,  18283020803"],
[{ lat:26.498666, lng:91.881373}, "Banaikuchi,  Own building,  18283020804"],
[{ lat:26.500972, lng:91.888266}, "Ramgaon,  Running in Community Hall,  18283020805"],
[{ lat:26.45989, lng:91.896812}, "Athkuriapara,  Own Building,  18283020806"],
[{ lat:26.452066, lng:91.879717}, "Hirapara,  Own Building,  18283020807"],
[{ lat:26.481225, lng:91.894086}, "Ghilakuri,  Own Building,  18283020808"],
[{ lat:26.476184, lng:91.8848}, "Paschim Ghilakuri,  Own Building,  18283020809"],
[{ lat:26.460495, lng:91.876374}, "Potapukhuri,  Own Building,  18283020810"],
[{ lat:26.496658, lng:91.933332}, "kumarpara,  Own Building,  18283020811"],
[{ lat:26.494639, lng:91.925667}, "Borigaon,  Own Building,  18283020812"],
[{ lat:26.475777, lng:91.928477}, "Lozora,  Own Building,  18283020813"],
[{ lat:26.461674, lng:91.921107}, "Kaikora,  Own Building,  18283020814"],
[{ lat:26.479196, lng:91.914526}, "Patidarrang,  Own Building,  18283020815"],
[{ lat:26.485407, lng:91.917821}, "Pub- Patidarrang,  Own Building,  18283020816"],
[{ lat:26.491142, lng:91.904402}, "Bareri,  Own Building,  18283020817"],
[{ lat:26.525915, lng:91.862351}, " Chakiapara,  Own Building,  18283020818"],
[{ lat:26.534692, lng:91.8435}, "Paschim Niz-Sarabari,  Own building,  18283020819"],
[{ lat:26.530619, lng:91.855372}, "Niz -Sarabari,  Own building,  18283020820"],
[{ lat:26.517654, lng:91.868878}, "Chamatiapara,  Own building,  18283020821"],
[{ lat:26.514693, lng:91.869794}, "Pub-Nogaon,  Own building,  18283020822"],
[{ lat:26.569384, lng:91.891241}, "Sarabarai Barampur,  Own Building,  18283020823"],
[{ lat:26.481548, lng:91.882819}, "Niz-Barampur,  Own Building,  18283020824"],
[{ lat:26.497444, lng:91.854737}, "Naptapara,  Own Building,  18283020825"],
[{ lat:26.494652, lng:91.940378}, " Dakhin Kumarpara,  Running in Community Hall,  18283020826"],
[{ lat:26.485234, lng:91.939857}, " Dakhin Borigaon,  Running in School Building,  18283020827"],
[{ lat:26.479855, lng:91.895048}, " Pub Dakhin Potapukhuri,  Running in Community Hall,  18283020828"],
[{ lat:26.481428, lng:91.87681}, " Dakhin Sarabari Barampur,  Running in School Building,  18283020829"],
[{ lat:26.500784, lng:91.836313}, "Paschim Katahi,  Running in Community Hall,  18283020830"],
[{ lat:26.50793, lng:91.83319}, " Madhya Santipukhuri,  Running in Community Hall,  18283020831"],





    
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
