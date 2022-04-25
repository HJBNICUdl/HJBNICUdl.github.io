// The following example creates five accessible and
// focusable markers.
function 11barbalisithaanganwadiMap(){
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat:26.614009, lng:91.877624},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
  [{ lat:26.58038, lng:91.862778}, "Niz-Jhargaon,  Running in school Building,  18617021101"],
[{ lat:26.565907, lng:91.851969}, "Pascim Jhargaon,  Running in AWH House,  18617021102"],
[{ lat:26.57151, lng:91.852098}, "Dakhin Saikiapara,  Running in Community,  18617021103"],
[{ lat:26.611565, lng:91.794327}, "Bholabari,  Running in AWW House,  18617021104"],
[{ lat:26.607253, lng:91.815919}, "Uttar Chelaimari,  Running in Rented Building,  18617021105"],
[{ lat:26.615097, lng:91.88786}, "Pub Dhoopguri,  Running in Community Hall,  18617021106"],
[{ lat:26.614009, lng:91.877624}, "Ghoramara,  Running in School Building,  18617021107"],
[{ lat:26.62348, lng:91.831284}, "Uttar Mahiakhat,  Running in Community Hall,  18617021108"],
[{ lat:26.614518, lng:91.832554}, "Uttar Singimari,  Running in Community Hall,  18617021109"],
[{ lat:26.614143, lng:91.858915}, "Paschim Attelia,  Running in Community Hall,  18617021110"],
[{ lat:26.59223, lng:91.824335}, "Barbalisitha Sukliapara,  Own Building,  18617021111"],
[{ lat:26.604534, lng:91.821387}, "Pub Gurihati Nadirpar,  Running In Community,  18617021112"],
[{ lat:26.615028, lng:91.827767}, "Uttar Kacharidag,  Running in school Building,  18617021113"],
[{ lat:26.599312, lng:91.832696}, "Uttar Jamuguri,  Community Hall,  18617021114"],
[{ lat:26.594361, lng:91.864303}, "Bholaguri Dhoomalpara,  Own Building,  18617021115"],
[{ lat:26.592742, lng:91.850625}, "Dakhin Chabukdhara,  Running in community Building,  18617021116"],




    
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
