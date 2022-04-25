// The following example creates five accessible and
// focusable markers.
function garuajharanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.815046, lng:91.870291},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
 
[{ lat:26.821465, lng:91.816981}, "No. 1 Bholatar,  Own Building,  18617010601"],
[{ lat:26.808724, lng:91.819533}, "No. 2 Bholatar B,  School Building,  18617010602"],
[{ lat:26.831405, lng:91.82076}, "No. 3 Bholatar,  School Building,  18617010603"],
[{ lat:26.853933, lng:91.838082}, "No. 1 Samrang,  Community Hall,  18617010604"],
[{ lat:26.846295, lng:91.831071}, "No. 1 Sagunbari B,  Community Hall,  18617010605"],
[{ lat:26.85379, lng:91.854764}, "No. 2 Sagunbari A,  Community Hall,  18617010606"],
[{ lat:26.799035, lng:91.838529}, "N. C. Orangajuli,  School Building,  18617010607"],
[{ lat:26.847221, lng:91.873054}, "Nonaipara T.E. A,  Mandir,  18617010608"],
[{ lat:26.842991, lng:91.872411}, "Nonaipara T.E. B,  Community Hall,  18617010609"],
[{ lat:26.842398, lng:91.875301}, "Nonaipara T.E. C,  Community Hall,  18617010610"],
[{ lat:26.842635, lng:91.873152}, "Nonaipara T.E. D,  Community Hall,  18617010611"],
[{ lat:26.826458, lng:91.850347}, "Orangajuligaon,  School Building,  18617010612"],
[{ lat:26.823947, lng:91.865992}, "Orangajuli T.E. A,  Own Building,  18617010613"],
[{ lat:26.81938, lng:91.863083}, "Orangajuli T.E. B,  Community Hall,  18617010614"],
[{ lat:26.8142073, lng:91.8646083}, "Orangajuli T.E. C,  Community Hall,  18617010615"],
[{ lat:26.827548, lng:91.878285}, "Uttar Garuajhar,  Own Building,  18617010616"],
[{ lat:26.815046, lng:91.870291}, "No. 1 Garuajhar A,  School Building,  18617010617"],
[{ lat:26.810016, lng:91.873002}, "No. 1 Guruajhar B,  Community Hall,  18617010618"],
[{ lat:26.800295, lng:91.869582}, "No. 1 Niz Garuajhar B,  School Building,  18617010619"],
[{ lat:26.787724, lng:91.880181}, "No. 2 Niz Garuajhar A,  School Building,  18617010620"],
[{ lat:26.771681, lng:91.870247}, "Dakhin Garuajhar B,  Own Building,  18617010621"],
[{ lat:26.813599, lng:91.85485}, "Piya Line Gaon,  Community Hall,  18617010622"],
[{ lat:26.821262, lng:91.867502}, "Phokar Line,  Community Hall,  18617010623"],
[{ lat:26.844006, lng:91.875104}, "No. 30 Line (Nonaipara TE) ,  Community Hall,  18617010624"],
[{ lat:26.821733, lng:91.817017}, "Sherpagaon (M),  Community Hall,  18617010625"],
[{ lat:26.77812, lng:91.817639}, "Boro Chuba (No.2 Bholatar) (M),  Church (Varanda),  18617010626"],
[{ lat:26.860824, lng:91.861368}, "Boro Chuba (Sagunbari) (M),  AWW House,  18617010627"],
[{ lat:26.844588, lng:91.874514}, "Mandir Line (M),  Community Hall,  18617010628"],
[{ lat:26.840627, lng:91.870709}, "Ranchi Line (M),  Community Hall,  18617010629"],
[{ lat:29.835016, lng:91.88194}, "No. 13 Line (Nonaipara TE)     (M),  School Building,  18617010630"],
[{ lat:26.785255, lng:91.882912}, "Maulabi Chuba (M),  Community Hall,  18617010631"],
[{ lat:26.805301, lng:91.870099}, "Huliapara (M),  School Building,  18617010632"],
[{ lat:26.816572, lng:91.87163}, "Jarabosti (M),  Community Hall,  18617010633"],
[{ lat:26.826748, lng:91.817914}, "Matwaligaon (M),  Community Hall,  18617010634"],
[{ lat:26.841612, lng:91.840662}, "Nepali Chuba (M),  Community Hall,  18617010635"],
[{ lat:26.806693, lng:91.82766}, "Adibasi Chuba (M) ,  School Building,  18617010636"],
[{ lat:26.843707, lng:91.873622}, "Sawra Line (M),  Community Hall,  18617010637"],
[{ lat:26.840702, lng:91.873086}, "School Line (M),  Community Hall,  18617010638"],




    
  ];
const image = ["url: .//image1.png, size: new google.maps.Size(20, 32)","url: .//image2.png","url: .//image3.png","url: .//image4.png"];

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      icon: image[i],
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
