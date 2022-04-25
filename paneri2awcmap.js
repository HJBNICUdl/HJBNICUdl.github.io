// The following example creates five accessible and
// focusable markers.
function paneri2anganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.798151, lng:91.881997},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.816886, lng:91.862923}, "NO. 2 Oranagajuli ,  Community ,  18326052001"],
[{ lat:26.816054, lng:91.866945}, "No.2 Oranagajuli part (ii),  School Building,  18326052002"],
[{ lat:26.816166, lng:91.862094}, "20 No Oranagajuli,  Club,  18326052003"],
[{ lat:26.814699, lng:91.855154}, "6 No Oranagajuli,  Club,  18326052004"],
[{ lat:26.819378, lng:91.866977}, "Oranagajuli TE,  Community,  18326052005"],
[{ lat:26.817684, lng:91.831675}, "Bamunjuli D/K,  Community Hall,  18326052006"],
[{ lat:26.809255, lng:91.820711}, "Bamunjuli M/K,  Community,  18326052007"],
[{ lat:26.847347, lng:91.872058}, "Nonai Para U/K,  Community,  18326052008"],
[{ lat:26.839122, lng:91.87417}, "Nonai Para D/K,  Own Building,  18326052009"],
[{ lat:26.846002, lng:91.873529}, "Nonai Para B/K,  Community,  18326052010"],
[{ lat:26.797101, lng:91.890586}, "Bhutiachang TE,  Community,  18326052011"],
[{ lat:26.797101, lng:91.890586}, "Bhutiachang Bahbari,  Own Building,  18326052012"],
[{ lat:26.795902, lng:91.904142}, "13 No Bhutiachang,  Community Hall,  18326052013"],
[{ lat:26.789224, lng:91.906583}, "13 No Bhutiachang D/K,  Community,  18326052014"],
[{ lat:26.80027, lng:91.908879}, "Sautal Para,  Own Building,  18326052015"],
[{ lat:26.798151, lng:91.881997}, "2 No Chagalighar P/K,  Own Building,  18326052016"],
[{ lat:26.826949, lng:91.875285}, "Hainaguri Basugaon,  Community,  18326052017"],
[{ lat:26.762847, lng:91.910852}, "1 No. Bhutiachang,  Community Hall,  18326052018"],
[{ lat:26.773005, lng:91.907603}, "5 No. Bhutiachang,  Own Building,  18326052019"],
[{ lat:26.759873, lng:91.907365}, "Baghekhuwa Bangali Basti,  Community,  18326052020"],
[{ lat:26.755541, lng:91.918096}, "Sahadev Basti ,  AWW,  18326052021"],
[{ lat:26.796174, lng:91.89102}, "4 No.Bhutiachang,  Community,  18326052022"],
[{ lat:26.791565, lng:91.888571}, "Bhutiachang Market line,  Community,  18326052023"],



    
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
