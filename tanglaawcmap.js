// The following example creates five accessible and
// focusable markers.
function tanglaanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat:26.651136, lng:91.90726},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
  [{ lat:26.661325, lng:91.910255}, "Shiva Mandir Para,  School Building,  18617010701"],
[{ lat:26.662519, lng:91.913592}, "Pub Nalbari,  Rented ,  18617010702"],
[{ lat:26.658767, lng:91.907263}, "Pujakhola,  School Building,  18617010703"],
[{ lat:26.664868, lng:91.905055}, "Pani Tanki No. 2,  Community Hall,  18617010704"],
[{ lat:26.662372, lng:91.91159}, "PHE Colony,  Community Hall,  18617010705"],
[{ lat:26.664096, lng:91.910826}, "Bijuli Nagar,  Rented ,  18617010706"],
[{ lat:26.666242, lng:91.908762}, "NRL Area,  Rented ,  18617010707"],
[{ lat:26.66252, lng:91.907205}, "Jalukbari No. 2,  Rented ,  18617010708"],
[{ lat:26.658195, lng:91.912552}, "Bhutpara,  Community Hall,  18617010709"],
[{ lat:26.66391, lng:91.906838}, "Jalukbari Chowk,  Rented ,  18617010710"],
[{ lat:26.658676, lng:91.907969}, "Ram Janaki Mandir,  School Building,  18617010711"],
[{ lat:26.659691, lng:91.907176}, "Borob Factory,  School Building,  18617010712"],
[{ lat:26.653098, lng:91.899965}, "Hospital Road,  Rented ,  18617010713"],
[{ lat:26.651649, lng:91.901494}, "Silpata,  School Building,  18617010714"],
[{ lat:26.649449, lng:91.900941}, "Gandhi Nagar,  Rented ,  18617010715"],
[{ lat:26.655849, lng:91.906204}, "Subhash Pally,  Rented ,  18617010716"],
[{ lat:26.652778, lng:91. 902349}, "Natun Basti,  Rented ,  18617010717"],
[{ lat:26.654578, lng:91.904039}, "Kalibari Road,  Rented ,  18617010718"],
[{ lat:26.65546, lng:91.898549}, "Amtala Tiniali,  School Building,  18617010719"],
[{ lat:26.654733, lng:91.909856}, "Babupara,  Community Hall,  18617010720"],
[{ lat:26.651136, lng:91.90726}, "Khani Mandir,  Rented ,  18617010721"],
[{ lat:26.654778, lng:91.899511}, "N.C. Das Road,  Rented ,  18617010722"],
[{ lat:26.653966, lng:91.906837}, "Ram Krishna Mandir,  Rented ,  18617010723"],
[{ lat:26.654991, lng:91.903368}, "Lakhi Mill,  Rented ,  18617010724"],
[{ lat:26.652364, lng:91.913533}, "Chitra Nagar,  Community Hall,  18617010725"],
[{ lat:26.657052, lng:91.912922}, "Bozar Khola,  Rented ,  18617010726"],
[{ lat:26.654551, lng:91.914307}, "Shankar Dev Mandir,  School Building,  18617010727"],
[{ lat:26.650664, lng:91.913004}, "Forest Office,  Rented ,  18617010728"],
[{ lat:26.647721, lng:91.914141}, "Barjalah,  Rented ,  18617010729"],
[{ lat:26.652325, lng:91.916216}, "Chitra Nagar Pani Tanki,  Rented ,  18617010730"],
[{ lat:26.651049, lng:91.916633}, "B.T. College Colony,  Rented ,  18617010731"],
[{ lat:26.648299, lng:91.911958}, "Zurpukhuri,  Rented ,  18617010732"],
[{ lat:26.649216, lng:91.910722}, "Fire Brigade,  Rented ,  18617010733"],
[{ lat:26.650367, lng:91.917625}, "Irrigation Colony,  Rented ,  18617010734"],
[{ lat:26.655421, lng:91.917192}, "Milonpur,  Rented ,  18617010735"],
[{ lat:26.649815, lng:91.913199}, "SDPO Office Colony,  Rented ,  18617010736"],
[{ lat:26.665232, lng:91.908884}, "Near H.R. House,  Rented ,  18617010737"],
[{ lat:26.657557, lng:91.913055}, "Near Shiva Mandir,  Rented ,  18617010738"],


    
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
