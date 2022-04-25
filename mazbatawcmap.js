// The following example creates five accessible and
// focusable markers.
function mazbatanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center:{ lat:26.773671, lng:92.288125} ,
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{ lat:26.802087, lng:92.28625}, "No.1 Naharbari            ,  Own Building,  18617030301"],
[{ lat:26.799863, lng:92.28983}, "Uttar Mazbat,  Own Building,  18617030302"],
[{ lat:26.793254, lng:92.291913}, "Namati Kha,  School Building,  18617030303"],
[{ lat:26.794595, lng:92.289173}, "Mazbat TE -2,  Creche House,  18617030304"],
[{ lat:26.795192, lng:92.288295}, "Mazbat TE -4,  Own Building,  18617030305"],
[{ lat:26.789573, lng:92.285347}, "Mazbat TE -3,  Religious Place,  18617030306"],
[{ lat:26.791283, lng:92.28676}, "Mazbat TE-1,  Club,  18617030307"],
[{ lat:26.791722, lng:92.287693}, "Mazbat TE-5,  Others,  18617030308"],
[{ lat:26.804029, lng:92.26453}, "No-1 Garogaon,  School Building,  18617030309"],
[{ lat:26.785076, lng:92.273349}, "No.2 Garogaon,  School Building,  18617030310"],
[{ lat:26.802219, lng:92.259636}, "No.2 Ajagarh,  Own Building,  18617030311"],
[{ lat:26.793488, lng:92.246326}, "No.1 Ajagarh,  Own Building,  18617030312"],
[{ lat:26.752675, lng:92.286682}, "Palash Basti,  Own Building,  18617030313"],
[{ lat:26.763995, lng:92.283423}, "Batabari,  Own Building,  18617030314"],
[{ lat:26.773671, lng:92.288125}, "N. C. Batabari,  Own Building,  18617030315"],
[{ lat:26.784714, lng:92.285453}, "Bapuji Nagar,  Own Building,  18617030316"],
[{ lat:26.78939, lng:92.289264}, "Bishnu Nagar,  School Building,  18617030317"],
[{ lat:26.789767, lng:92.291153}, "Dhaniapatti,  Others,  18617030318"],
[{ lat:26.788234, lng:92.293609}, "Namati Ka,  Own Building,  18617030319"],
[{ lat:26.779249, lng:92.337726}, "Darjee Basti,  School Building,  18617030320"],
[{ lat:26.779698, lng:92.324965}, "Bagulamari,  Own Building,  18617030321"],
[{ lat:26.784546, lng:92.30688}, "Phulaguri,  Own Building,  18617030322"],
[{ lat:26.788344, lng:92.31477}, "Bamunigaon,  Own Building,  18617030323"],
[{ lat:26.797991, lng:92.313239}, "Boigapara,  Own Building,  18617030324"],
[{ lat:26.793032, lng:92.327131}, "Dewalkhanda,  Own Building,  18617030325"],
[{ lat:26.799467, lng:92.322895}, "Panchnoi Khuti,  School Building,  18617030326"],
[{ lat:26.788081, lng:92.298346}, "No.2 Kharamakha,  School Building,  18617030327"],
[{ lat:26.79993, lng:92.299387}, "No. 1 Kharamakha,  Own Building,  18617030328"],
[{ lat:26.803246, lng:92.305264}, "N0.2 Khusurabari,  Religious Place,  18617030329"],
[{ lat:26.809173, lng:92.316788}, "No.2 Khamtobari,  Own Building,  18617030330"],






    
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
