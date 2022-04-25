// The following example creates five accessible and
// focusable markers.
function gelabilanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.694209, lng:92.28206},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.697667, lng:92.283508}, "No 1 Gelabil ,  Own Building,  18617030501"],
[{ lat:26.696942, lng:92.30568}, "No 2 Gelabil ,  Own Building,  18617030502"],
[{ lat:26.690492, lng:92.28961}, "Hiramati ,  Community Hall,  18617030503"],
[{ lat:26.705466, lng:92.289744}, "Thelamara ,  Own Building,  18617030504"],
[{ lat:26.720858, lng:92.283816}, "Dofalapota ,  Own Building,  18617030505"],
[{ lat:26.73159, lng:92.282097}, "Aowanajuli ,  Own Building,  18617030506"],
[{ lat:26.738314, lng:92.283571}, "Mazgaon ,  School Building,  18617030507"],
[{ lat:26.726779, lng:92.292703}, "No 1 Mowamari ,  Own Building,  18617030508"],
[{ lat:26.721784, lng:92.317694}, "No 2 Mowamari ,  Community Hall,  18617030509"],
[{ lat:26.71148, lng:92.293435}, "Bheluguri ,  Community Hall,  18617030510"],
[{ lat:26.716308, lng:92.307853}, "No 2 Bheluguri ,  Own Building,  18617030511"],
[{ lat:26.701136, lng:92.304024}, "Korkabari ,  School Building,  18617030512"],
[{ lat:26.705409, lng:92.305686}, "Pakribari ,  Own Building,  18617030513"],
[{ lat:26.700308, lng:92.295712}, "Aowanajuli Borigaon ,  Own Building,  18617030514"],
[{ lat:26.694209, lng:92.28206}, "Thenglagoan ,  Community Hall,  18617030515"],
[{ lat:26.696963, lng:92.285917}, "No 1 Sonajuli ,  Own Building,  18617030516"],
[{ lat:26.714693, lng:92.277922}, "Kathpuri ,  Community Hall,  18617030517"],
[{ lat:26.698714, lng:92.278657}, "No 2 Sonajuli ,  Own Building,  18617030518"],
[{ lat:26.695472, lng:92.2595}, "No 1 Kalbari Habi ,  Own Building,  18617030519"],
[{ lat:26.696822, lng:92.260687}, "No 2 Kalbari Habi ,  Community Hall,  18617030520"],
[{ lat:26.679063, lng:92.264063}, "No 1 Jangle Block (A),  Own Building,  18617030521"],
[{ lat:26.684487, lng:92.262096}, "No 1 Jangle Block (B),  Others,  18617030522"],
[{ lat:26.661734, lng:92.278636}, "No 2 Jangle Block (A),  School Building,  18617030523"],
[{ lat:26.673696, lng:92.270405}, "No 2 Jangle Block (B),  Own Building,  18617030524"],
[{ lat:26.702061, lng:92.261962}, "Daidanguri ,  Community Hall,  18617030525"],
[{ lat:26.703877, lng:92.263501}, "Jamuguri Chuburi ,  Own Building,  18617030526"],
[{ lat:26.719143, lng:92.267058}, "Pub kuruabahi ,  Community Hall,  18617030527"],
[{ lat:26.727398, lng:92.264137}, "Dimapur ,  School Building,  18617030528"],
[{ lat:26.736342, lng:92.267077}, "Dakhin Dimapur ,  Own Building,  18617030529"],
[{ lat:26.732881, lng:92.276885}, "No 1 Fuhurabari ,  School Building,  18617030530"],
[{ lat:26.740712, lng:92.268719}, "No 2 Fuhurabari ,  Community Hall,  18617030531"],





    
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
