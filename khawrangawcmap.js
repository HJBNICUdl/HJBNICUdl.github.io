// The following example creates five accessible and
// focusable markers.
function khawranganganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.833795, lng:92.072015},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.760048, lng:92.094572}, "No 2 Khangkhlabari,  Own Building,  18326050101"],
[{ lat:26.463506, lng:92.09579}, "Monpur ,  Own Building,  18326050102"],
[{ lat:26.78395, lng:92.068315}, "Bokapuri ,  Own Building,  18326050103"],
[{ lat:26.781718, lng:92.049283}, "Pakribari ,  Own Building,  18326050104"],
[{ lat:26.79238, lng:92.05986}, "No 3 Borigaon ,  Own Building,  18326050105"],
[{ lat:26.832088, lng:92.062262}, "Daodigaon ,  Own Building,  18326050106"],
[{ lat:26.824174, lng:92.042557}, "No 3 Amjuli ,  Own Building,  18326050107"],
[{ lat:26.826935, lng:92.048983}, "Amjuli Khoirani gourbasti ( mini) ,  Own Building,  18326050108"],
[{ lat:26.83145, lng:92.02708}, "No 2 Amjuli ,  Own Building,  18326050109"],
[{ lat:26.812805, lng:92.057933}, "No 4 Borigaon ,  Own Building,  18326050110"],
[{ lat:26.834601, lng:92.053996}, "Garobasti ,  Own Building,  18326050111"],
[{ lat:26.842535, lng:92.0623845}, "Jordia ,  Own Building,  18326050112"],
[{ lat:26.833795, lng:92.072015}, "Khoyerbari Kachutal ,  Own Building,  18326050113"],
[{ lat:26.832088, lng:92.062262}, "Sindrijara paharpur B,  Own Building,  18326050114"],
[{ lat:26.79882, lng:92.070871}, "No 2 Borigaon (mini) ,  Own Building,  18326050115"],
[{ lat:26.807581, lng:92.076856}, "Pub Borigaon No 3,  Own Building,  18326050116"],
[{ lat:26.801494, lng:92.080789}, "No 3 Borigaon Darjibasti ( mini) ,  School building ,  18326050117"],
[{ lat:26.832088, lng:92.062262}, "Paharpur ,  Own Building,  18326050118"],
[{ lat:26.7978, lng:92.089395}, "Bokendara ( mini) ,  School building ,  18326050119"],
[{ lat:26.786548, lng:92.093887}, "Jangal Borigaon ,  Own Building,  18326050120"],
[{ lat:26.824286, lng:92.095212}, "Paharpurgaon,  School building ,  18326050121"],
[{ lat:26.786078, lng:92.077798}, "Pachim Borigaon Jangal ,  School building ,  18326050122"],
[{ lat:26.789529, lng:92.071601}, "Ranendrapur,  School building ,  18326050123"],
[{ lat:26.832088, lng:92.062262}, "Pub Borigaon Jangal ,  Private House ,  18326050124"],
[{ lat:26.832088, lng:92.062262}, "Nama Garobasti ,  Own Building,  18326050125;"],
[{ lat:26.842401, lng:92.009774}, "Amjuli Khoirani gourbasti,  Club building ,  18326050126"],
[{ lat:26.832088, lng:92.062262}, "No 2 Amjuli Adarshgaon ,  Club building ,  18326050127"],



    
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
