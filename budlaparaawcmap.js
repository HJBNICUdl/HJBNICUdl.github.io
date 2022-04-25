// The following example creates five accessible and
// focusable markers.
function budlaparaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.783159, lng:91.846678},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
  [{ lat:26.722737, lng:91.75851}, "Naobandha B,  Community Hall,  18617010501"],
[{ lat:26.700103, lng:91.746008}, "Bornodihabi,  Community Hall,  18617010502"],
[{ lat:26.713968, lng:91.75145}, "No. 2 Naobandha,  Community Hall,  18617010503"],
[{ lat:26.737383, lng:91.729863}, "Uttar Naobandha A,  School Building,  18617010504"],
[{ lat:26.739218, lng:91.734941}, "Uttar Naobandha B,  School Building,  18617010505"],
[{ lat:26.719937, lng:91.750039}, "Atterikhat T.E. A,  School Building,  18617010506"],
[{ lat:26.7396, lng:91.738217}, "Attehrikhat T.E. B,  Community Hall,  18617010507"],
[{ lat:26.730802, lng:91.752343}, "Kathalbari T.E.,  Community Hall,  18617010508"],
[{ lat:26.736103, lng:91.752343}, "Dharamjuli T.E.,  Community Hall,  18617010509"],
[{ lat:26.746731, lng:91.73849}, "Khoirajhar,  Own Building,  18617010510"],
[{ lat:26.81953, lng:91.782438}, "No. 1 Tenkibosti ,  School Building,  18617010511"],
[{ lat:26.82215, lng:91.798845}, "No. 2 Tenkibosti ,  School Building,  18617010512"],
[{ lat:26.833633, lng:91.77695}, "No. 3 Tenkibosti ,  Own Building,  18617010513"],
[{ lat:26.791711, lng:91.794674}, "Badlapara T.E. A,  Community Hall,  18617010514"],
[{ lat:26.791047, lng:91.785355}, "Badlapara T.E. B,  Community Hall,  18617010515"],
[{ lat:26.780277, lng:91.817692}, "Badlapara T.E. C,  Community Hall,  18617010516"],
[{ lat:26.796331, lng:91.8362}, "No. 2 Bamunjuli A,  Community Hall,  18617010517"],
[{ lat:26.806423, lng:91.82775}, "No. 2 Bamunjuli B,  School Building,  18617010518"],
[{ lat:26.791007, lng:91.82265}, "Sonajuli A,  School Building,  18617010519"],
[{ lat:26.773845, lng:91.837158}, "No. 2 Sonajuli B,  Own Building,  18617010520"],
[{ lat:26.765868, lng:91.855788}, "Dui Nodir Mukh  A,  School Building,  18617010521"],
[{ lat:26.767652, lng:91.856863}, "Dui Nodir Mukh  B,  School Building,  18617010522"],
[{ lat:26.773052, lng:91.864026}, "Dakkhin Kalikhala,  School Building,  18617010523"],
[{ lat:26.775512, lng:91.864026}, "Uttar Kalikhala,  Community Hall,  18617010524"],
[{ lat:26.783159, lng:91.846678}, "Kalikhala B,  School Building,  18617010525"],
[{ lat:26.728905, lng:91.746619}, "Kalbari Line,  School Building,  18617010526"],
[{ lat:26.792688, lng:91.787374}, "Gara Line A,  Community Hall,  18617010527"],
[{ lat:26.800394, lng:91.794039}, "No. 1 Munda Line ,  School Building,  18617010528"],
[{ lat:26.797729, lng:91.793549}, "No. 1 Munda Line A,  Community Hall,  18617010529"],
[{ lat:26.785896, lng:91.818042}, "No. 2 Munda Line(Firm Line),  Community Hall,  18617010530"],
[{ lat:26.79728, lng:91.79433}, "Munda Line A,  Community Hall,  18617010531"],
[{ lat:26.789887, lng:91.79178}, "Baro Line,  Community Hall,  18617010532"],
[{ lat:26.790685, lng:91.789132}, "Baro Line 2 A,  Community Hall,  18617010533"],
[{ lat:26.78017, lng:91.794665}, "Khuti Line,  Community Hall,  18617010534"],
[{ lat:26.730061, lng:91.765743}, "Khuti Line A,  Community Hall,  18617010535"],
[{ lat:26.827193, lng:91.838173}, "Baral Bosti ,  Own Building,  18617010536"],
[{ lat:26.806423, lng:91.82775}, "Kalita Chuba,  Community Hall,  18617010537"],
[{ lat:26.773052, lng:91.864026}, "Sarbosti ,  Community Hall,  18617010538"],
[{ lat:  26.710582, lng:  91.740446}, "Khoirajhar (Keriabosti)  (M),  School Building,  18617010539"],
[{ lat:  26.780795, lng:  91.820342}, "Christan Boasti (M),  School Building,  18617010540"],
[{ lat:  26.7869684, lng:  91.8362527}, "Samabai Chuba (M),  Community Hall,  18617010541"],
[{ lat:  26.809918, lng:  91.844095}, "Baro Bosti (M),  Community Hall,  18617010542"],
[{ lat:  26.720756, lng:  91.753297}, "Kanubosti  (M) ,  Own Building,  18617010543"],
[{ lat:  26.727969, lng:  91.74338}, "Kanubosti Chuba (M),  Community Hall,  18617010544"],
[{ lat:  26.788911, lng:  91.830886}, "Beldanga Bosti (M),  School Building,  18617010545"],
[{ lat:  26.786943, lng:  91.840168}, "Sawalkuchi Chuba  (M),  Community Hall,  18617010546"],
[{ lat:  26.785421, lng:  91.842044}, "Gaur Bosti (M) ,  Community Hall,  18617010547"],
[{ lat:  26.806423, lng:  91.82775}, "Phanindra Chuba (M),  Community Hall,  18617010548"],
[{ lat:  26.783579, lng:  91.844127}, "Nalbaria Chuba (M),  Community Hall,  18617010549"],
[{ lat:  26.798879, lng:  91.845962}, "Chawri Bosti (M),  Community Hall,  18617010550"],




    
  ];
const image = ["url: .//image1.png, size: new google.maps.Size(20, 32)","url: .//image2.png","url: .//image3.png","url: .//image4.png"];

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
