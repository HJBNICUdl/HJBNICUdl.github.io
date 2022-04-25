// The following example creates five accessible and
// focusable markers.
function allanganwadiMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {lat:26.710273,lng:92.201385},
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
[{lat:26.88106,lng:92.174507},"Paharpur,18617030104,Others,42"],
[{lat:26.880185,lng:92.166278},"Dalanigaon,18617030105,Own Building,68"],
[{lat:26.860475,lng:92.185547},"No 2 Dhunserigaon,18617030110,Own Building,46"],
[{lat:26.877723,lng:92.20183},"Pahartuli,18617030111,Club,72"],
[{lat:26.887796,lng:92.206113},"Dimachang,18617030112,Own Building,28"],
[{lat:26.846189,lng:92.203393},"No1Monai,18617030114,Own Building,96"],
[{lat:26.877578,lng:92.214133},"Bidangshri,18617030120,Own Building,43"],
[{lat:26.824868,lng:92.221057},"Dakhin Naoherua,18617030122,Own Building,39"],
[{lat:26.802484,lng:92.21636},"Niz Rangapani,18617030124,Own Building,45"],
[{lat:26.863983,lng:92.226802},"Rowta Majuli,18617030129,Own Building,61"],
[{lat:26.818436,lng:92.26998},"Pathakpur No-2,18617030301,School Building,50"],
[{lat:26.802087,lng:92.28625},"No.1 Naharbari            ,18617030309,Own Building,64"],
[{lat:26.804029,lng:92.26453},"No-1 Garogaon,18617030310,School Building,105"],
[{lat:26.785076,lng:92.273349},"No.2 Garogaon,18617030312,School Building,84"],
[{lat:26.793488,lng:92.246326},"No.1 Ajagarh,18617030326,Own Building,63"],
[{lat:26.799467,lng:92.322895},"Panchnoi Khuti,18617030403,School Building,50"],
[{lat:26.76344,lng:92.3176},"Kukura Khati,18617030404,Own Building,73"],
[{lat:26.758322,lng:92.298472}," Pachim Hatibil,18617030405,School Building,32"],
[{lat:26.746394,lng:92.321084},"Gohaibheti,18617030406,Own Building,45"],
[{lat:26.742593,lng:92.317888},"Habigaon,18617030411,Own Building,49"],
[{lat:26.734296,lng:92.322166},"Orang T.E-3 ,18617030415,School Building,79"],
[{lat:26.73487967,lng:92.32644649},"Orang T.E-2,18617030417,Own Building,47"],
[{lat:26.711289,lng:92.329096},"Nichilamari-3,18617030421,Own Building,74"],
[{lat:26.6977958,lng:92.3380646},"No-1 Saikiasuburi-2,18617030423,Others,43"],
[{lat:26.699042,lng:92.330278},"Chamuagaon-4,18617030426,Own Building,46"],
[{lat:26.670913,lng:92.327812},"Dakhin Bhogdal,18617030431,Own Building,49"],
[{lat:26.681295,lng:92.303863},"No-2 Saikiasuburi-2,18617030509,Community Hall,52"],
[{lat:26.721784,lng:92.317694},"No 2 Mowamari ,18617030512,Community Hall,32"],
[{lat:26.701136,lng:92.304024},"Korkabari ,18617030514,School Building,35"],
[{lat:26.700308,lng:92.295712},"Aowanajuli Borigaon ,18617030517,Own Building,31"],
[{lat:26.714693,lng:92.277922},"Kathpuri ,18617030520,Community Hall,91"],
[{lat:26.696822,lng:92.260687},"No 2 Kalbari Habi ,18617030522,Community Hall,37"],
[{lat:26.684487,lng:92.262096},"No 1 Jangle Block (B),18617030523,Others,44"],
[{lat:26.661734,lng:92.278636},"No 2 Jangle Block (A),18617030525,School Building,42"],
[{lat:26.702061,lng:92.261962},"Daidanguri ,18617030526,Community Hall,55"],
[{lat:26.703877,lng:92.263501},"Jamuguri Chuburi ,18617030529,Own Building,30"],
[{lat:26.736342,lng:92.267077},"Dakhin Dimapur ,18617030530,Own Building,41"],
[{lat:26.732881,lng:92.276885},"No 1 Fuhurabari ,18617030603,School Building,58"],
[{lat:26.720956,lng:92.253452},"kuruabahi-2,18617030606,Community Hall,45"],
[{lat:26.73374,lng:92.248501},"Pub Goraimari,18617030609,School Building,48"],
[{lat:26.728336,lng:92.244758},"Potabil,18617030611,School Building,36"],
[{lat:26.7446,lng:92.226959},"Merabil-2,18617030612,School Building,53"],
[{lat:26.755412,lng:92.234895},"Godhabil,18617030614,School Building,63"],
[{lat:26.76797,lng:92.227266},"Gourbasti,18617030616,School Building,42"],
[{lat:26.774727,lng:92.221388},"Khagrabil,18617030620,School Building,38"],
[{lat:26.791389,lng:92.223206},"Hatimara -2,18617030621,School Building,48"],
[{lat:26.809683,lng:92.2308},"Rowtagaon -2,18617030623,School Building,56"],
[{lat:26.756147,lng:92.212815},"2no Rangapani,18617030624,School Building,13"],
[{lat:26.776248,lng:92.207541},"3no Rangapani,18617030625,Own Building,59"],
[{lat:26.758704,lng:92.274385},"N.C.Tekelibil,18617030627,School Building,42"],
[{lat:26.77265,lng:92.277543},"Gerubari,18617030628,School Building,88"],
[{lat:26.776284,lng:92.25368},"1no Beteli T E,18617030629,School Building,103"],
[{lat:26.774657,lng:92.257346},"2no Beteli T.E,18617030702,School Building,83"],
[{lat:26.65841,lng:92.320645}," Alisinga,18617030706,Own Building,49"],
[{lat:26.675787,lng:92.308433},"2no Saikiachuburi,18617030708,School Building,37"],
[{lat:26.646685,lng:92.32903},"Chutiapara,18617030709,School Building,45"],
[{lat:26.64062116,lng:92.31219619},"Dakhin Pauriputa,18617030710,Community Hall,44"],
[{lat:26.639501,lng:92.305372},"Udalguri Nepali,18617030718,School Building,146"],
[{lat:26.619608,lng:92.292374}," Udalguri Jungle Gaon- 2,18617030721,Others,87"],
[{lat:26.647663,lng:92.301676},"Pachim pauripota ,18617030722,Own Building,92"],
[{lat:26.647638,lng:92.292399},"Mazor Chuba ,18617030723,Own Building,59"],
[{lat:26.657229,lng:92.287817},"Uttor Chuba ,18617030727,Community Hall,73"],
[{lat:26.697604,lng:92.313719},"Jamuguri,18617030728,School Building,27"],
[{lat:26.690686,lng:92.302861},"Bagribari,18617040102,Others,39"],
[{lat:26.670046,lng:92.265078},"Nalbari II,18617040103,School Building,73"],
[{lat:26.700396,lng:92.236723},"Dhansirikhuti,18617040106,Own Building,20"],
[{lat:26.70034,lng:92.236776},"Dhansirikhuti Dakhin Suba ,18617040109,School Building,94"],
[{lat:26.691566,lng:92.232903},"Balisiha Jangal Pt-II,18617040112,School Building,17"],
[{lat:26.698413,lng:92.22659},"Puthimari,18617040113,School Building,45"],
[{lat:26.68431,lng:92.22778},"Thinthlang Guri ,18617040114,Own Building,14"],
[{lat:26.695365,lng:92.225152},"Bengchimarl,18617040116,RENTED,25"],
[{lat:26.686998,lng:92.235798},"Kochgaon,18617040117,RENTED,30"],
[{lat:26.698807,lng:92.244173},"Biharibasti,18617040118,School Building,15"],
[{lat:26.675998,lng:92.236207},"Thuribari,18617040122,School Building,17"],
[{lat:26.691436,lng:92.2194},"Balisiha Puranabasti,18617040125,School Building,57"],
[{lat:26.706244,lng:92.205636},"Nizwmpuri,18617040212,School Building,23"],
[{lat:26.731707,lng:92.170496},"Khwinuguri,18617040217,School Building,33"],
[{lat:263743841,lng:92.19685},"No.5 Dhansri,18617040218,Own Building,16"],
[{lat:26.737684,lng:92.185829},"No.5 Dhansri Uttar,18617040219,School Building,48"],
[{lat:26.752243,lng:92.188577},"No.3 Dhansri ,18617040220,School Building,26"],
[{lat:26.740827,lng:92.207049},"No.6 Dhansri,18617040224,Own Building,51"],
[{lat:26.734242,lng:92.213389},"Rowta Station,18617040225,Own Building,90"],
[{lat:26.724324,lng:92.212295},"Bajrajhar Uttar,18617040305,School Building,72"],
[{lat:26.702638,lng:92.226972},"Rowta Bagan,18617040306,Own Building,19"],
[{lat:26.707716,lng:92.229222},"Rowta Bagan Pub,18617040307,Own Building,20"],
[{lat:26.715596,lng:92.226143},"Rowta Bagan Khetriya Chuba,18617040308,Own Building,11"],
[{lat:26.707551,lng:92.223605},"Rowta Bagan Bengali Chuba,18617040309,Own Building,33"],
[{lat:26.710273,lng:92.201385},"Hatigarh West,18617040310,Own Building,24"],
[{lat:26.700097,lng:92.205192},"Hatigarh East,18617040311,Own Building,24"],
[{lat:26.688745,lng:92.19827},"No.1 Jhargaon,18617040312,RENTED,87"],
[{lat:26.690028,lng:92.203077},"No.1 Jhargaon Uttar,18617040313,Others,21"],
[{lat:26.679934,lng:92.205664},"No.2 Jhargaon,18617040314,Own Building,36"],
[{lat:26.685128,lng:92.205023},"No.2 Jhargaon Uttar,18617040318,Own Building,46"],
[{lat:26.705293,lng:92.188666},"Satbasaria,18617040320,Own Building,61"],
[{lat:26.707339,lng:92.17567},"Doigola ,18617040323,School Building,57"],
[{lat:26.679635,lng:92.183159},"Aminpara B,18617040401,School Building,286"],
[{lat:26.702066,lng:92.16875},"Fakidia,18617040402,School Building,142"],
[{lat:26.695825,lng:92.156873},"Fakidia Borongabari,18617040405,School Building,110"],
[{lat:26.688928,lng:92.152166},"Kathalbari,18617040407,Own Building,85"],
[{lat:26.688928,lng:92.152166},"Ekrabari Hindu Chuba,18617040408,Own Building,87"],
[{lat:26.713494,lng:92.203761},"Sonai Bhergaon,18617040409,School Building,21"],
[{lat:26.713494,lng:92.203761},"No- 1 Bhergaon,18617040411,RENTED,43"],
[{lat:26.713494,lng:92.203761},"Bhergaon Gopsar,18617040412,School Building,34"],
[{lat:26.72907,lng:92.143081},"Purani Hapagaon,18617040416,School Building,37"],
[{lat:26.743467,lng:92.116048},"Kathalguri                    ,18617040421,school Building,45"],
[{lat:26.713494,lng:92.203761},"Baligaon,18617040422,Own Building,15"],
[{lat:26.713494,lng:92.203761},"Garmarah,18617040424,Own Building,30"],
[{lat:26.713494,lng:92.203761},"No-2 Garmarah,18617040425,Own Building,35"],
[{lat:26.712387,lng:92.108683},"Santipur,18617040501,Own Building,38"],
[{lat:26.651999,lng:92.083805},"Sibapur,18617040502,Own Building,33"],
[{lat:26.656448,lng:92.076132},"Sibapur Pachim,18617040503,RENTED,28"],
[{lat:26.656862,lng:92.087016},"Sibapur Pub Chuba,18617040507,RENTED,148"],
[{lat:26.645701,lng:92.110146},"Bhutuniduba Pachim,18617040509,Own Building,28"],
[{lat:26.645604,lng:92.16554},"Bhutuniduba Pub Chuba,18617040510,RENTED,149"],
[{lat:26.666421,lng:92.123016},"Simuluguri Muslim Chuba,18617040514,RENTED,118"],
[{lat:26.666436,lng:92.132566},"Medhipara Pachim,18617040515,school Building,108"],
[{lat:26.669032,lng:92.142616},"Medhipara Pub Chuba,18617040516,school Building,92"],
[{lat:26.684191,lng:92.46664},"Hazaragaon Muslim Chuba,18617040518,school Building,124"],
[{lat:26.665828,lng:92.149686},"Padmapukhuri,18617040519,School Building,32"],
[{lat:26.673755,lng:92.149522},"Padmapukhuri Part-II,18617040522,School Building,146"],
[{lat:26.674753,lng:92.157943},"Dhipbichara Part-II,18617040523,RENTED,122"],
[{lat:26.681977,lng:92.180182},"Ekrabari,18617040601,Own Building,173"],
[{lat:26.73411,lng:92.095931},"Sudempuri,18617040602,RENTED,22"],
[{lat:26.735574,lng:92.093845},"Sankar Nagar,18617040603,School Building,20"],
[{lat:26.731561,lng:92.088023},"Madya K. Habi,18617040606,RENTED,30"],
[{lat:26.701074,lng:92.090082},"Thuribari,18617040609,Own Building,30"],
[{lat:26.683724,lng:92.099662},"Gomsali,18617040610,School Building,31"],
[{lat:26.676461,lng:92.079824},"Pub Begapara,18617040611,Own Building,30"],
[{lat:26.674301,lng:92.092879},"Mohanpur Gobsar,18617040612,Own Building,26"],
[{lat:26.659851,lng:92.109613},"Sapmari,18617040613,Own Building,24"],
[{lat:26.672988,lng:92.125614},"No.1 Simaluguri,18617040614,Own Building,19"],
[{lat:26.683744,lng:92.136606},"Hazaragaon,18617040615,School Building,38"],
[{lat:26.671566,lng:92.104609},"Rangagarah,18617040616,Own Building,35"],
[{lat:26.667534,lng:92.114321},"Paleng Chuburi,18617040617,Own Building,48"],
[{lat:26.693932,lng:92.13546},"Borigaon Daipampara,18617040618,RENTED,20"],
[{lat:26.696936,lng:92.135854},"K. Borigaon,18617040619,Own Building,15"],
[{lat:26.692284,lng:92.131675},"Thuraibari,18617040620,School Building,38"],
[{lat:26.690387,lng:92.121791},"Kajiamati ,18617040621,Own Building,19"],
[{lat:26.682557,lng:92.109776},"No.1 Jorpukhuri,18617040622,Own Building,80"],
[{lat:26.699258,lng:92.108362},"Handanguri,18617040624,School Building,26"],
[{lat:26.740662,lng:92.097772},"Purani Goraibari,18617040625,School Building,58"],
[{lat:26.733124,lng:92.108975},"Mission Area,,Own Building,40"],









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