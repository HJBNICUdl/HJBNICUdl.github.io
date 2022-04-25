// The following example creates five accessible and
// focusable markers.
function kajiamatianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.705917, lng:92.086166},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.743568, lng:92.100086}, "Pub Nagar,  AWW House,  18326050701"],
[{ lat:26.741727, lng:92.099775}, "Sankar Nagar,  School Building,  18326050702"],
[{ lat:26.65944, lng:92.119339}, "Ranipukhuri,  Own Building,  18326050703"],
[{ lat:26.674617, lng:92.139458}, "Medhipara,  Own Building,  18326050704"],
[{ lat:26.648141, lng:92.1283}, "Medhipara Pochim,  AWW House,  18326050705"],
[{ lat:26.718286, lng:92.085917}, "Simuluguri,  Own Building,  18326050706"],
[{ lat:26.68847, lng:92.118208}, "Balapa Ryngpara,  Religious Place,  18326050707"],
[{ lat:26.672288, lng:92.112263}, "Palengchuburi Udalbil,  Community Hall,  18326050708"],
[{ lat:26.699206, lng:92.106122}, "1no Jorpukhuri,  Religious Place,  18326050709"],
[{ lat:26.72035, lng:92.105941}, "Shantipur,  Own Building,  18326050710"],
[{ lat:26.705917, lng:92.086166}, "Ballagaon ,  Own Building,  18326050711"],
[{ lat:26.699153, lng:92.090219}, "Pathakata ,  Own Building,  18326050712"],
[{ lat:26.67823, lng:92.091648}, "Mohanpur,  School Building ,  18326050713"],
[{ lat:26.671584, lng:92.079746}, "Nimaipur ,  Own Building,  18326050714"],
[{ lat:26.668105, lng:92.07348}, "Hakradawa,  School building ,  18326050715"],
[{ lat:26.724503, lng:92.083538}, "Bellowchuburi ,  Own Building,  18326050716"],
[{ lat:26.713449, lng:92.111915}, "Singaon ,  School building ,  18326050717"],
[{ lat:26.700901, lng:92.117081}, "Rongpur,  School building ,  18326050718"],
[{ lat:26.690236, lng:92.121762}, "Kajiamati ,  Own Building,  18326050719"],
[{ lat:26.700559, lng:92.107231}, "Rajabasti ,  Public co-operation ,  18326050720"],
[{ lat:26.676545, lng:92.062933}, "Kabjabasti ,  School building ,  18326050721"],




    
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
