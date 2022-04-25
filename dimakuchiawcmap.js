// The following example creates five accessible and
// focusable markers.
function dimakuchianganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:26.737017, lng:918222},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat:26.688787, lng:91.818121}, "Darogachuba - B,  Own Building,  18617010301"],
[{ lat:26.683824, lng:91.821756}, "Paschimpatala - A,  School Building,  18617010302"],
[{ lat:26.718026, lng:91.800804}, "Paschimpatala - B,  Own Building,  18617010303"],
[{ lat:26.735428, lng:91.798636}, "Batabari A,  Batabari LP School,  18617010304"],
[{ lat:26.738706, lng:91.819404}, "Batabari B,  Dwimagwswm LP school,  18617010305"],
[{ lat:26.703725, lng:91.833113}, "Nizpatla,  Gwjwnphuri LP School,  18617010306"],
[{ lat:26.717038, lng:91.793423}, "Kolbari ,  Own Building,  18617010307"],
[{ lat:26.715389, lng:91.808929}, "Barengabari,  Own Building,  18617010308"],
[{ lat:26.69375, lng:91.814486}, "Baligaon,  Own Building,  18617010309"],
[{ lat:26.732977, lng:91.802254}, "No. 1 Sonajuli A,  Own Building,  18617010310"],
[{ lat:26.737017, lng:91.8222}, "No. 1 Sonajuli B,  Own Building,  18617010311"],
[{ lat:26.751699, lng:91.82443}, "No. 1 Uttar Dimakuchi -A,  School Building,  18617010312"],
[{ lat:26.738706, lng:91.819404}, "No. 1 Uttar Dimakuchi -B,  LP Shool,  18617010313"],
[{ lat:26.751699, lng:91.82443}, "No. 1 Uttar Dimakuchi -C,  Religious,  18617010314"],
[{ lat:26.751699, lng:91.82443}, "No. 2 Uttar Dimakuchi,  Own Building,  18617010315"],
[{ lat:26.751699, lng:91.82443}, "No. 3 Uttar Dimakuchi - A,  Own Building,  18617010316"],
[{ lat:26.765113, lng:91.837411}, "No. 3 Uttar Dimakuchi - B,  LP Shool,  18617010317"],
[{ lat:26.73783, lng:91.804889}, "Barangajuli T.E - A.,  AWCMC,  18617010318"],
[{ lat:26.742671, lng:91.809067}, "Barangajuli T.E. _ B,  Own Building,  18617010319"],
[{ lat:26.745362, lng:91.815721}, "Barangajuli Santipur,  Own Building,  18617010320"],
[{ lat:26.790947, lng:91.811192}, "Budlaparagaon,  AWCMC,  18617010321"],
[{ lat:26.745504, lng:91.836925}, "Bengali Chuba,  Own Building,  18617010322"],
[{ lat:26.740133, lng:91.824451}, "No. 2 Tengagara,  Club,  18617010323"],
[{ lat:26.745504, lng:91.836925}, "Hatimara Chuba,  AWCMC,  18617010324"],
[{ lat:26.739612, lng:91.804855}, "Munda Line ( Borongajuli TE),  Religious,  18617010325"],
[{ lat:26.737, lng:91.799387}, "Borangajuli Khuti,  Own Building,  18617010326"],
[{ lat:26.73861, lng:91.766252}, "No. 1 Suklai Khuti,  LP Shool,  18617010327"],
[{ lat:26.741672, lng:91.778517}, "No. 2 Suklai Khuti,  AWW House,  18617010328"],
[{ lat:26.75629054, lng:91.77472215}, "Girlingdara,  Own Building,  18617010329"],
[{ lat:26.745128, lng:91.767726}, "Haliapar Chuba  ,  Own Building,  18617010330"],
[{ lat:26.76278, lng:91.751619}, "Dharamjuli Jangale - B,  LP Shool,  18617010331"],
[{ lat:26.790947, lng:91.811192}, "No. 1 Borangajuli,  Own Building,  18617010332"],
[{ lat:26.769878, lng:91.778758}, "No. 2 Borangajuli B,  Religious,  18617010333"],
[{ lat:26.767002, lng:91.746487}, "Garo Line,  LP Shool,  18617010334"],
[{ lat:26.756697, lng:91.738035}, "No. 2 Rajagarh,  Own Building,  18617010335"],
[{ lat:26.764489, lng:91.718169}, "Athrikat Khairagrant,  LP Shool,  18617010336"],
[{ lat:26.788856, lng:91.708287}, "Dharamjuli Khairagrant - B,  AWCMC,  18617010337"],
[{ lat:26.735428, lng:91.798636}, "Balabari (M),  Own Building,  18617010338"],
[{ lat:  26.705147, lng:  91.850644}, "Fasla (B) (M),  Own Building,  18617010339"],
[{ lat:  26.75295, lng:  91.804366}, "No. 13 Line,  AWCMC,  18617010340"],
[{ lat:  26.749398, lng:  91.758083}, "Katowal Chuba (M),  LP Shool,  18617010341"],
[{ lat:  26.751585, lng:  91.7792066666665}, "Horizan Basti ,  AWCMC,  18617010342"],
[{ lat:  26.771404, lng:  91.748282}, "Tengabosti (M),  LP Shool,  18617010343"],
[{ lat:26.688787, lng:91.818121}, "Darogachuba - B,  Own Building,  18617010301"],
[{ lat:26.683824, lng:91.821756}, "Paschimpatala - A,  School Building,  18617010302"],
[{ lat:26.718026, lng:91.800804}, "Paschimpatala - B,  Own Building,  18617010303"],
[{ lat:26.735428, lng:91.798636}, "Batabari A,  Batabari LP School,  18617010304"],
[{ lat:26.738706, lng:91.819404}, "Batabari B,  Dwimagwswm LP school,  18617010305"],
[{ lat:26.703725, lng:91.833113}, "Nizpatla,  Gwjwnphuri LP School,  18617010306"],
[{ lat:26.717038, lng:91.793423}, "Kolbari ,  Own Building,  18617010307"],
[{ lat:26.715389, lng:91.808929}, "Barengabari,  Own Building,  18617010308"],
[{ lat:26.69375, lng:91.814486}, "Baligaon,  Own Building,  18617010309"],
[{ lat:26.732977, lng:91.802254}, "No. 1 Sonajuli A,  Own Building,  18617010310"],
[{ lat:26.737017, lng:91.8222}, "No. 1 Sonajuli B,  Own Building,  18617010311"],
[{ lat:26.751699, lng:91.82443}, "No. 1 Uttar Dimakuchi -A,  School Building,  18617010312"],
[{ lat:26.738706, lng:91.819404}, "No. 1 Uttar Dimakuchi -B,  LP Shool,  18617010313"],
[{ lat:26.751699, lng:91.82443}, "No. 1 Uttar Dimakuchi -C,  Religious,  18617010314"],
[{ lat:26.751699, lng:91.82443}, "No. 2 Uttar Dimakuchi,  Own Building,  18617010315"],
[{ lat:26.751699, lng:91.82443}, "No. 3 Uttar Dimakuchi - A,  Own Building,  18617010316"],
[{ lat:26.765113, lng:91.837411}, "No. 3 Uttar Dimakuchi - B,  LP Shool,  18617010317"],
[{ lat:26.73783, lng:91.804889}, "Barangajuli T.E - A.,  AWCMC,  18617010318"],
[{ lat:26.742671, lng:91.809067}, "Barangajuli T.E. _ B,  Own Building,  18617010319"],
[{ lat:26.745362, lng:91.815721}, "Barangajuli Santipur,  Own Building,  18617010320"],
[{ lat:26.790947, lng:91.811192}, "Budlaparagaon,  AWCMC,  18617010321"],
[{ lat:26.745504, lng:91.836925}, "Bengali Chuba,  Own Building,  18617010322"],
[{ lat:26.740133, lng:91.824451}, "No. 2 Tengagara,  Club,  18617010323"],
[{ lat:26.745504, lng:91.836925}, "Hatimara Chuba,  AWCMC,  18617010324"],
[{ lat:26.739612, lng:91.804855}, "Munda Line ( Borongajuli TE),  Religious,  18617010325"],
[{ lat:26.737, lng:91.799387}, "Borangajuli Khuti,  Own Building,  18617010326"],
[{ lat:26.73861, lng:91.766252}, "No. 1 Suklai Khuti,  LP Shool,  18617010327"],
[{ lat:26.741672, lng:91.778517}, "No. 2 Suklai Khuti,  AWW House,  18617010328"],
[{ lat:26.75629054, lng:91.77472215}, "Girlingdara,  Own Building,  18617010329"],
[{ lat:26.745128, lng:91.767726}, "Haliapar Chuba  ,  Own Building,  18617010330"],
[{ lat:26.76278, lng:91.751619}, "Dharamjuli Jangale - B,  LP Shool,  18617010331"],
[{ lat:26.790947, lng:91.811192}, "No. 1 Borangajuli,  Own Building,  18617010332"],
[{ lat:26.769878, lng:91.778758}, "No. 2 Borangajuli B,  Religious,  18617010333"],
[{ lat:26.767002, lng:91.746487}, "Garo Line,  LP Shool,  18617010334"],
[{ lat:26.756697, lng:91.738035}, "No. 2 Rajagarh,  Own Building,  18617010335"],
[{ lat:26.764489, lng:91.718169}, "Athrikat Khairagrant,  LP Shool,  18617010336"],
[{ lat:26.788856, lng:91.708287}, "Dharamjuli Khairagrant - B,  AWCMC,  18617010337"],
[{ lat:26.735428, lng:91.798636}, "Balabari (M),  Own Building,  18617010338"],
[{ lat:  26.705147, lng:  91.850644}, "Fasla (B) (M),  Own Building,  18617010339"],
[{ lat:  26.75295, lng:  91.804366}, "No. 13 Line,  AWCMC,  18617010340"],
[{ lat:  26.749398, lng:  91.758083}, "Katowal Chuba (M),  LP Shool,  18617010341"],
[{ lat:  26.751585, lng:  91.7792066666665}, "Horizan Basti ,  AWCMC,  18617010342"],
[{ lat:  26.771404, lng:  91.748282}, "Tengabosti (M),  LP Shool,  18617010343"],


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
