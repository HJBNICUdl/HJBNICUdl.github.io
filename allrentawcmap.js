// The following example creates five accessible and
// focusable markers.
function allrentedanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.652325, lng:91.916216},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.657909, lng:91.90394}, "Tangla Town, ward/no-1,18617010137,  "],
[{ lat:26.662519, lng:91.913592}, "Tangla w/no 2,  18617010702,  "],
[{ lat:26.664096, lng:91.910826}, "Tangla w/no2,  18617010706,  "],
[{ lat:26.666242, lng:91.908762}, "Tangla,w/no2,  18617010707,  "],
[{ lat:26.66252, lng:91.907205}, "Tangla w/no 2,  18617010708,  "],
[{ lat:26.66391, lng:91.906838}, "Tangla,w/no2,  18617010710,  "],
[{ lat:26.653098, lng:91.899965}, "Tangla w/no3,  18617010713,  "],
[{ lat:26.649449, lng:91.900941}, "Tangla w/no 3,  18617010715,  "],
[{ lat:26.655849, lng:91.906204}, "Tangla w/no 3,  18617010716,  "],
[{ lat:26.652778, lng:91. 902349}, "Tangla w no 3,  18617010717,  "],
[{ lat:26.654578, lng:91.904039}, "Tangla w no 3,  18617010718,  "],
[{ lat:26.651136, lng:91.90726}, "Tangla w no 3,  18617010721,  "],
[{ lat:26.654778, lng:91.899511}, "Tangla w no 3,  18617010722,  "],
[{ lat:26.653966, lng:91.906837}, "Tangla w no 3,  18617010723,  "],
[{ lat:26.654991, lng:91.903368}, "Tangla w no 3,  18617010724,  "],
[{ lat:26.657052, lng:91.912922}, "Tangla w no 4,  18617010726,  "],
[{ lat:26.650664, lng:91.913004}, "Tangla w no 4,  18617010728,  "],
[{ lat:26.647721, lng:91.914141}, "Tangla w no 4,  18617010729,  "],
[{ lat:26.652325, lng:91.916216}, "Tangla w no 4,  18617010730,  "],
[{ lat:26.651049, lng:91.916633}, "Tangla w no 4,  18617010731,  "],
[{ lat:26.648299, lng:91.911958}, "Tangla w no 4,  18617010732,  "],
[{ lat:26.649216, lng:91.910722}, "Tangla w no 4,  18617010733,  "],
[{ lat:26.650367, lng:91.917625}, "Tangla w no 4,  18617010734,  "],
[{ lat:26.655421, lng:91.917192}, "Tangla w no 4,  18617010735,  "],
[{ lat:26.649815, lng:91.913199}, "Tangla w no 4,  18617010736,  "],
[{ lat:26.665232, lng:91.908884}, "Tangla w no 2,  18617010737,  "],
[{ lat:26.657557, lng:91.913055}, "Tangla w no 2,  18617010738,  "],
[{ lat:26.704675, lng:92.235804}, "DHANSIRI KHUTI,  18617040104,  "],
[{ lat:26.696659, lng:92.257461}, "DHANSIRI KHUTI,  18617040105,  "],
[{ lat:26.695365°, lng:92.225152°}, "ROWTA PATHAR,  18617040114,  "],
[{ lat:26.686998°, lng:92.235798°}, "BALISIHA JANGHAL,  18617040116,  "],
[{ lat:26.695687°, lng:92.2456°}, "ROWTA PATHAR,  18617040119,  "],
[{ lat:26.708483°, lng:92.21128°}, "HATIGARH,  18617040124,  "],
[{ lat:26.730967, lng:92.196436}, "Maradhansiri,  18617040209,  "],
[{ lat:26.746936°, lng:92.175381°}, "No.4 Dhansiri,  18617040214,  "],
[{ lat:26.71027, lng:92.212854}, "Fakidia,  18617040303,  "],
[{ lat:26.714181, lng:92.209394}, "Kathalbari,  18617040304,  "],
[{ lat:26.688745, lng:92.19827}, "Purani Hapagaon,  18617040311,  "],
[{ lat:26.673496, lng:92.192591}, "Kathalguri,  18617040315,  "],
[{ lat:26.698702, lng:92.187152}, "Kathalguri,  18617040316,  "],
[{ lat:26.685612, lng:92.184248}, "Garmara,  18617040322,  "],
[{ lat:26.682515, lng:92.179794}, "Singgaon,  18617040324,  "],
[{ lat:26.708363, lng:92.159782}, "Sidhakhowa,  18617040406,  "],
[{ lat:26.713494, lng:92.203761}, "Rowta Bagan,  18617040409,  "],
[{ lat:26.747609, lng:92.125232}, "No-2 Jhargaon,  18617040414,  "],
[{ lat:26.735152, lng:92.142887}, "No-2 Jhargaon,  18617040415,  "],
[{ lat:26.690028, lng:92.203077}, "Satbasaria,  18617040418,  "],
[{ lat:26.721963249, lng:92.1238836}, "Aminpara,  18617040423,  "],
[{ lat:26.656448, lng:92.076132}, "Lowdong,  18617040502,  "],
[{ lat:26.656862, lng:92.087016}, "Lowdong,  18617040503,  "],
[{ lat:26.652517, lng:92.104336}, "Bhutuniduba,  18617040506,  "],
[{ lat:26.645604, lng:92.16554}, "Ranipukhuri,  18617040509,  "],
[{ lat:26.666421, lng:92.123016}, "Ranipukhuri,  18617040510,  "],
[{ lat:26.677932, lng:92.147248}, "Padmapukhuri,  18617040517,  "],
[{ lat:26.674753, lng:92.157943}, "Panikhaiti,  18617040522,  "],
[{ lat:26.670467, lng:92.186325}, "Purani Goraibari + Sudempuri,  18617040524,  "],
[{ lat:26.73411, lng:92.095931}, "Golandi Habi,  18617040601,  "],
[{ lat:26.731561, lng:92.088023}, "Golandi Habi,  18617040603,  "],
[{ lat:26.693932, lng:92.13546}, "K. Borigaon,  18617040617,  "],
[{ lat:26.607253, lng:91.815919}, "Chelaimari,18617021105,  "],
[{ lat:26.607164, lng:91.818158}, "Gurihati,  18617021216,  "],






    
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
