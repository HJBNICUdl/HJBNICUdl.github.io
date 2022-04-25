// The following example creates five accessible and
// focusable markers.
function nagachubaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.685412, lng:91.827458},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
   [{ lat:26.701278, lng:91.862564}, "Dingdangpara B,  Own Building,  18617010401"],
[{ lat:26.688788, lng:91.860701}, "No. 1 Singrimari,  Own Building,  18617010402"],
[{ lat:26.655686, lng:91.842395}, "Baborikhat,  Own Building,  18617010403"],
[{ lat:26.65109, lng:91.841246}, "Parbahachuba B,  Own Building,  18617010404"],
[{ lat:26.683712, lng:91.828275}, "Burapujahali,  School Building,  18617010405"],
[{ lat:26.700484, lng:91.775334}, "No. 2 Singribari,  School Building,  18617010406"],
[{ lat:26.692215, lng:91.782234}, "Khachiachuba,  School Building,  18617010407"],
[{ lat:26.701388, lng:91.80358}, "Patlahabi A,  Own Building,  18617010408"],
[{ lat:26.701285, lng:91.794805}, "Patlahabi B,  School Building,  18617010409"],
[{ lat:26.69308, lng:91.84942}, "Nagachuba B,  Community Hall,  18617010410"],
[{ lat:26.688113, lng:91.847665}, "Gala Chuba - A,  Community Hall,  18617010411"],
[{ lat:26.682203, lng:91.846998}, "Gala Chuba - B,  School Building,  18617010412"],
[{ lat:26.705223, lng:91.845142}, "Niz Sekhar,  School Building,  18617010413"],
[{ lat:26.72773, lng:91.838432}, "Hanchara B,  School Building,  18617010414"],
[{ lat:26.726278, lng:91.855912}, "Bhutiachang,  School Building,  18617010415"],
[{ lat:26.751199, lng:91.85833}, "No. 1 Dimakuchi,  School Building,  18617010416"],
[{ lat:26.718438, lng:91.862468}, "Amguri B,  Religious place,  18617010417"],
[{ lat:26.746058, lng:91.83794}, "Dimakuchigaon - A,  School Building,  18617010418"],
[{ lat:26.73662, lng:91.851855}, "Dimakuchigaon - B,  Community Hall,  18617010419"],
[{ lat:26.753254, lng:91.844048}, "Dimakuchi T.E. A,  Community Hall,  18617010420"],
[{ lat:26.744868, lng:91.842205}, "Dimakuchi T.E. B,  Community Hall,  18617010421"],
[{ lat:26.668263, lng:91.844538}, "Thasobari,  School Building,  18617010422"],
[{ lat:26.665513, lng:91.83216}, "Mandalmakha,  School Building,  18617010423"],
[{ lat:26.682612, lng:91.77583}, "Rangjali Gathwn  ,  School Building,  18617010424"],
[{ lat:26.685412, lng:91.827458}, "Thaigirbari,  Own Building,  18617010425"],
[{ lat:26.691784, lng:91.778305}, "Natun Center,  Community Hall,  18617010426"],
[{ lat:26.753105, lng:91.841215}, "Line No. 24 Dimakuchi T.E.,  Community Hall,  18617010427"],
[{ lat:26.742065, lng:91.847745}, "Line No. 11 (Dimakuchi T.E.),  Community Hall,  18617010428"],
[{ lat:26.71248, lng:91.763577}, "Line No. 3 Swala T.E.,  Community Hall,  18617010429"],
[{ lat:26.65732, lng:91.840772}, "Sawachuba,  Community Hall,  18617010430"],
[{ lat:26.677534, lng:91.863277}, "Kherkhamakha  (M),  Community Hall,  18617010431"],
[{ lat:26.684944, lng:91.857908}, "Dokhin Singrimari (M),  School Building,  18617010432"],
[{ lat:26.683316, lng:91.836497}, "Burapujahali (M),  Community Hall,  18617010433"],
[{ lat:26.68235, lng:91.791295}, "Gharashali Daokabaha (M),  Community Hall,  18617010434"],
[{ lat:26.71346, lng:91.771398}, "Uttar Singribari  (M),  School Building,  18617010435"],
[{ lat:26.696764, lng:91.848659}, "Dangkhapara  (M),  School Building,  18617010436"],
[{ lat:26.737748, lng:91.830382}, "Tengagara (M),  AWW House,  18617010437"],
[{ lat:26.7197, lng:91.838374}, "Kalbari (Kahibari) (M),  School Building,  18617010438"],
[{ lat:  26.689117, lng:  91.852886}, "No. 1 Singrimari (M),  School Building,  18617010439"],
[{ lat:  26.675832, lng:  91.846655}, "Khwlamakha  (M),  Community Hall,  18617010440"],
[{ lat:  26.648677, lng:  91.852268}, "Barbag (M),  School Building,  18617010441"],
[{ lat:  26.686575, lng:  91.836063}, "Lakra Basti (M),  AWH House,  18617010442"],



    
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
