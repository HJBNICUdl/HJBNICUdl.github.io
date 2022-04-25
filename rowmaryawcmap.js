// The following example creates five accessible and
// focusable markers.
function rowmaryanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.639755, lng:91.781358},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat:26.623399, lng:91.774591}, "Khusigaon A,  Own Building,  18617010201"],
[{ lat:26.617746, lng:91.822234}, "Khusigaon B,  School Building,  18617010202"],
[{ lat:26.617324, lng:91.767762}, "Barigaon,  Own Building,  18617010203"],
[{ lat:26.610966, lng:91.745516}, "Jaganathjhar,  Own Building,  18617010204"],
[{ lat:26.595229, lng:91.750319}, "No. 1 Rowmary,  Own,  18617010205"],
[{ lat:26.597508, lng:91.761336}, "No. 2 Rowmary,  School Building,  18617010206"],
[{ lat:26.597071, lng:91.761286}, "Garangpara,  Own Building,  18617010207"],
[{ lat:26.581908, lng:91.771672}, "Thakuriapara A,  School Building,  18617010208"],
[{ lat:26.582164, lng:91.78051}, "Thakuriapara B,  Own Building,  18617010209"],
[{ lat:26.607608, lng:91.793189}, "Dudhgarmakha - B,  Own Building,  18617010210"],
[{ lat:26.603509, lng:91.776059}, "Ambika T.E.,  School Building,  18617010211"],
[{ lat:26.600443, lng:91.770168}, "Krishna Susaibani T.E.,  School Building,  18617010212"],
[{ lat:26.605623, lng:91.784758}, "Nichilamari - B,  Own Building,  18617010213"],
[{ lat:26.613753, lng:91.776994}, "Shyamabari,  School Building,  18617010214"],
[{ lat:26.619152, lng:91.76878}, "Gopsachuba,  Own Building,  18617010215"],
[{ lat:26.631331, lng:91.743652}, "Malmura,  Own Building,  18617010216"],
[{ lat:26.63895, lng:91.746733}, "Patla,  Own Building,  18617010217"],
[{ lat:26.648999, lng:91.758257}, "Kathalbari,  Own Building,  18617010218"],
[{ lat:26.639755, lng:91.781358}, "Betagaon,  Own Building,  18617010219"],
[{ lat:26.652842, lng:91.785076}, "Kacharipara - B,  Own Building,  18617010220"],
[{ lat:26.660463, lng:91.784779}, " Dongpara - B,  Own Building,  18617010221"],
[{ lat:26.66741, lng:91.738825}, "Batabari,  School Building,  18617010222"],
[{ lat:26.683712, lng:91.761032}, "Nalbari A,  Community Hall,  18617010223"],
[{ lat:26.679036, lng:91.741904}, "Nalbari B,  School Building,  18617010224"],
[{ lat:26.694427, lng:91.758293}, "Dahalahabi - B,  School Building,  18617010225"],
[{ lat:26.684287, lng:91.774118}, "Dahalachuba,  School Building,  18617010226"],
[{ lat:26.664514, lng:91.764683}, "Khagrabari - B,  School Building,  18617010227"],
[{ lat:26.624529, lng:91.755023}, "Mazgaon,  Community Hall,  18617010228"],
[{ lat:26.666029, lng:91.76136}, "Subari,  Community Hall,  18617010229"],
[{ lat:26.725566, lng:91.741562}, "Harijanbasti ,  School Building,  18617010230"],
[{ lat:26.684287, lng:91.774118}, "Uttar Chuba,  Community Hall,  18617010231"],
[{ lat:26.586939, lng:91.781727}, "Uttar Thakuriapara (M),  Community Hall,  18617010232"],
[{ lat:26.613777, lng:91.776745}, "Pub Shyamabari (M),  Community Hall,  18617010233"],
[{ lat:26.63388, lng:91.778256}, "Barmanbasti(Betagaon ) (M),  Own Building,  18617010234"],
[{ lat:26.618448, lng:91.766205}, "Ghogapara Pakaribari (M),  School Building,  18617010235"],
[{ lat:26.608313, lng:91.755912}, "Rowmary Garangpara (M) ,  School Building,  18617010236"],
[{ lat:26.664514, lng:91.764683}, "Uttar Panisheli (M),  Community Hall,  18617010237"],
[{ lat:26.651304, lng:91.790252}, "No. 2 Thanapara (M),  Community Hall,  18617010238"],
[{ lat:  26.688752, lng:  91.770465}, "Muslim Chuba (M),  Community Hall,  18617010239"],
[{ lat:  26.685238, lng:  91.756772}, "Ladangpara (M),  Community Hall,  18617010240"],
[{ lat:  26.619376, lng:  91.776665}, "Barmanbasti  (Khusiagon )  (M),  School Building,  18617010241"],
[{ lat:  26.678276, lng:  91.783554}, "Buduragaon,  School Building,  18617010242"],
[{ lat:  26.660682, lng:  91.755077}, "Dhupguri,  Own Building,  18617010243"],


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
