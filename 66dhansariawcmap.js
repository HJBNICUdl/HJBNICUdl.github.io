// The following example creates five accessible and
// focusable markers.
function 66dhansarianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat:26.625029, lng:92.32376},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [

[{ lat:26.663817, lng:92.295574}, "Suburasuburi pottar-1,  Own Building,  18617030726"],
[{ lat:26.697604, lng:92.313719}, "Jamuguri,  School Building,  18617030727"],
[{ lat:26.690686, lng:92.302861}, "Bagribari,  Others,  18617030728"],
[{ lat:26.680365, lng:92.278262}, "Bagenabari jangle-2,  Own Building,  18617030729"],
[{ lat:26.862563, lng:92.287701}, "Bagenabari -1,  Own Building,  18617030730"],
[{ lat:26.659895, lng:92319543}, " ROWMARI,  Own Building,  18617030701"],
[{ lat:26.65841, lng:92.320645}, " Alisinga,  Own Building,  18617030702"],
[{ lat:26.653496, lng:92.305372}, " DHUPGURI,  Own Building,  18617030703"],
[{ lat:26.650821, lng:92.309966}, " Dakhin  Dhupguri,  Community Hall,  18617030704"],
[{ lat:26.659353, lng:92.30299}, " Ulubari,  Community Hall,  18617030705"],
[{ lat:26.631393, lng:92.296543}, "Dakhin Chuba,  School Building,  18617030711"],
[{ lat:26.64139, lng:92.294393}, "Dakhin Chuba North,  School Building,  18617030712"],
[{ lat:26.629776, lng:92.295433}, "Udalguri Maimansinghgaon,  Community Hall,  18617030713"],
[{ lat:26.625029, lng:92.32376}, "Udalguri jungle no-1,  Own Building,  18617030714"],
[{ lat:26.61329, lng:92.311101}, "Kachari Vetitop no-1,  School Building,  18617030715"],
[{ lat:26.616186⁰, lng:92.305336⁰}, "Dakhin Kochari Veti Top,  Others,  18617030716"],
[{ lat:26.620343⁰, lng:92.32593⁰}, "Devpukhuri,  Others,  18617030717"],
[{ lat:26.619608⁰, lng:92.292374⁰}, " Udalguri Jungle Gaon- 2,  Others,  18617030718"],
[{ lat:26.619118⁰, lng:92.290282⁰}, "Pub Udalguri Jungla Gaon,  Others,  18617030719"],
[{ lat:26.643619⁰, lng:92.302779⁰}, "Dakhin Mazar Chuba,  Others,  18617030720"],
[{ lat:26.647663, lng:92.301676}, "Pachim pauripota ,  Own Building,  18617030721"],
[{ lat:26.647638, lng:92.292399}, "Mazor Chuba ,  Own Building,  18617030722"],
[{ lat:26.657229, lng:92.287817}, "Uttor Chuba ,  Community Hall,  18617030723"],
[{ lat:26.667521, lng:92.292979}, "Subura Suburi Pathar 2,  Own Building,  18617030724"],
[{ lat:26.675373, lng:92.293164}, "Begenabari Muslim Chuba ,  Community Hall,  18617030725"],


    
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
