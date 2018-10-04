// Minumum pollution 10 
// Maximum 42

var hotspots3vals = [
{
    "hypoxia": [
      //NORTH AMERICA
      {
        "name": "Tracadie",
        "location": [46.39,-62.99],
        "pollution": [10]
      },
      {
        "name": "Clam Cove",
        "location": [44.97,-67.013],
        "pollution": [10]
      },
      {
        "name": "Webhannet",
        "location": [43.321, -70.56],
        "pollution": [25]
      },
      {
        "name": "Great Bay",
        "location": [43.070993,-70.873981],
        "pollution": [25]
      },
      {
        "name": "La_Rochelle",
        "location": [46.137452, -1.188656],
        "pollution": [40]
      },
      {
        "name": "Mount Hope Bay",
        "location": [41.68, -71.21],
        "pollution": [40]
      },
      {
        "name": "Cabourg",
        "location": [49.307644, -0.136772],
        "pollution": [10]
      },
      {
        "name": "Greenwich Bay",
        "location": [41.674, -71.414],
        "pollution": [25]
      },
      {
        "name": "Onacock Creek",
        "location": [31.71, -75.76],
        "pollution": [10]
      },
      {
        "name": "Cabourg",
        "location": [49.307644, -0.136772],
        "pollution": [25]
      },
      {
        "name": "Pages Creek",
        "location": [34.281, -77.794],
        "pollution": [25]
      },
      {
        "name": "Long Bay",
        "location": [33.62, -78.88],
        "pollution": [40]
      },
      {
        "name": "North Edisto River",
        "location": [32.63907, -80.03159],
        "pollution": [40]
      },
      {
        "name": "Ten Thousand Islands",
        "location": [25.311, -81.057],
        "pollution": [10]
      },
      {
        "name": "Inner Continental Shelf",
        "location": [28.217,-83.333],
        "pollution": [25]
      },
      {
        "name": "Biscaybe Bay",
        "location": [25.556,-80.216],
        "pollution": [40]
      },
      {
        "name": "Breton Sound",
        "location": [29.500766,-89.250605],
        "pollution": [25]
      },
      {
        "name": "Upper Laguna Madre",
        "location": [27.26039,-97.39444],
        "pollution": [25]
      },
      {
        "name": "Lower Laguna Madre",
        "location": [26.42264,-97.36166],
        "pollution": [40]
      },
      {
        "name": "Campeche Sound",
        "location": [18.67,-92.91],
        "pollution": [10]
      },
      {
        "name": "Chetumal Bay",
        "location": [18.333,-88.083],
        "pollution": [10]
      },
      {
        "name": "Alamitos Bay",
        "location": [33.754,-118.113],
        "pollution": [10]
      },
      {
        "name": "Monterey Bay",
        "location": [36.79,-121.904],
        "pollution": [40]
      },
      {
        "name": "North San Francisco Bay Estuary",
        "location": [37.63,-122.176],
        "pollution": [25]
      },
      {
        "name": "Penn Cove",
        "location": [48.231,-122.674],
        "pollution": [40]
      },
      {
        "name": "Bellingham Bay",
        "location": [48.748177,-122.565224],
        "pollution": [10]
      },
      //Hawai
      {
        "name": "O'ahu",
        "location": [21.288,-158.007],
        "pollution": [10]
      },
      //LATIN AMERICA
      {
        "name": "Cartagena Bay",
        "location": [10.31417,-75.54806],
        "pollution": [40]
      },
      {
        "name": "Paracas Bay",
        "location": [-13.8206,-76.2769],
        "pollution": [25]
      },
      {
        "name": "Montevideo Bay",
        "location": [-34.917,-56.217],
        "pollution": [25]
      },
      {
        "name": "Rio de la Plata Estuary",
        "location": [-34.861231,-57.190164],
        "pollution": [25]
      },
      //GREENLAND
      {
        "name": "Ardbear Salt Lake",
        "location": [53.467,-10],
        "pollution": [10]
      },
      {
        "name": "Inner Belfast",
        "location": [54.662529,-5.852552],
        "pollution": [25]
      },
      {
        "name": "Loch Allort",
        "location": [56.25,-5.74],
        "pollution": [25]
      },
      {
        "name": "Ythan Estuary",
        "location": [57.317022,-1.989052],
        "pollution": [40]
      },
      {
        "name": "Tees Estuary",
        "location": [54.63333,-1.15],
        "pollution": [25]
      },
      {
        "name": "Widemouth Bay",
        "location": [50.790336,-4.562671],
        "pollution": [25]
      },
      {
        "name": "Taw Estuary",
        "location": [51.0833,-4.21667],
        "pollution": [25]
      },
      {
        "name": "Holes Bay",
        "location": [50.73333,-2],
        "pollution": [10]
      },
      {
        "name": "Chichester Harbour",
        "location": [50.8,-0.91667],
        "pollution": [25]
      },
      // EUROPE
      {
        "name": "Duino-Bala di Panzano",
        "location": [45.787042,13.540611],
        "pollution": [10]
      },
      {
        "name": "Palude della Rosa",
        "location": [45.5,12.42],
        "pollution": [25]
      },
      {
        "name": "Sacci Goro Lagoon",
        "location": [44.8236,12.305],
        "pollution": [40]
      },
      {
        "name": "Orbetello",
        "location": [42.44,11.2],
        "pollution": [10]
      },
      {
        "name": "Ria Farmosa",
        "location": [37.03,-7.78],
        "pollution": [25]
      },
      {
        "name": "Mondego River",
        "location": [40.14084,-8.822522],
        "pollution": [25]
      },
      {
        "name": "Coruna Harbor",
        "location": [43.4,-8.4],
        "pollution": [25]
      },
      {
        "name": "Ria San Martin",
        "location": [43.410415,-4.02702],
        "pollution": [25]
      },
      {
        "name": "Loire Estuary",
        "location": [47.2,-1.9],
        "pollution": [25]
      },
      {
        "name": "Seine Estuary",
        "location": [49.437379,0.233466],
        "pollution": [25]
      },
      {
        "name": "Westerschelde Estuary",
        "location": [51.4,3.55],
        "pollution": [25]
      },
      {
        "name": "East Frisian",
        "location": [53.5,5.5],
        "pollution": [10]
      },
      {
        "name": "Ems Estuary",
        "location": [53.422317,6.955161],
        "pollution": [25]
      },
      {
        "name": "Skive Fjord",
        "location": [56.617,9.083],
        "pollution": [40]
      },
      {
        "name": "Pomeranian Bay",
        "location": [54.3,14],
        "pollution": [25]
      },
      {
        "name": "Oder Lagoon",
        "location": [53.786113,],
        "pollution": [10]
      },
      {
        "name": "Gulf of Gdansk",
        "location": [54.583,18.75],
        "pollution": [25]
      },
      {
        "name": "Kaldvellfjord",
        "location": [58.27222,8.4275],
        "pollution": [25]
      },
      {
        "name": "Sandefjord",
        "location": [59.0833,10.2391],
        "pollution": [25]
      },
      {
        "name": "Kragerofjord",
        "location": [58.85,9.46667],
        "pollution": [25]
      },
      //Africa
      {
        "name": "Fosu lagoon",
        "location": [5.1075,-1.2581],
        "pollution": [10]
      },
      {
        "name": "Gamtoos Estuary",
        "location": [-33.962503,25.022692],
        "pollution": [10]
      },
      {
        "name": "St. Lucia Estuary",
        "location": [-28.3837,32.4217],
        "pollution": [25]
      },
      {
        "name": "Dar es Salaam",
        "location": [-6.80065,39.297211],
        "pollution": [25]
      },
      {
        "name": "Port of Jeddah",
        "location": [21.491,39.169],
        "pollution": [25]
      },
      {
        "name": "Gulf of Aqaba",
        "location": [29.3505,34.8693],
        "pollution": [25]
      },
      {
        "name": "Dubai Creek",
        "location": [25.259722,55.312186],
        "pollution": [40]
      },
      //Asia
      {
        "name": "Kadinamkulam Backwaters",
        "location": [8.616567,76.817303],
        "pollution": [10]
      },
      {
        "name": "Tha Chin River",
        "location": [13.527,100.265],
        "pollution": [25]
      },
      {
        "name": "Bandon Bay",
        "location": [9.283,99.283],
        "pollution": [40]
      },
      {
        "name": "pak Phanang Bay",
        "location": [8.409811,100.136975],
        "pollution": [10]
      },
      {
        "name": "Middle Songkhla Lake",
        "location": [7.484,100.307],
        "pollution": [10]
      },
      {
        "name": "Port Klang",
        "location": [3.005775,101.348089],
        "pollution": [25]
      },
      {
        "name": "Pearl River",
        "location": [22.568697,113.752181],
        "pollution": [25]
      },
      {
        "name": "Prawn Ponds",
        "location": [22.856017,120.206644],
        "pollution": [10]
      },
      {
        "name": "Dunshuel River",
        "location": [25.176283,121.403033],
        "pollution": [10]
      },
      {
        "name": "Yeongsan Estuary",
        "location": [34.789578,126.353072],
        "pollution": [25]
      },
      {
        "name": "Chonsu Bay",
        "location": [36.504925,126.442611],
        "pollution": [10]
      },
      //Japan
      {
        "name": "Lake Shinji",
        "location": [35.5,133],
        "pollution": [25]
      },
      {
        "name": "Ariake & Isahaya Bay",
        "location": [32.95,130.25],
        "pollution": [40]
      },
      {
        "name": "Dokai Bay",
        "location": [33.883,130.8],
        "pollution": [25]
      },
      {
        "name": "Suo-Nada",
        "location": [33.851,131.167],
        "pollution": [25]
      },
      {
        "name": "Hiroshima Bay",
        "location": [34.083,132.333],
        "pollution": [40]
      },
      {
        "name": "harima Nada",
        "location": [34.6,134.531],
        "pollution": [40]
      },
      {
        "name": "Gokasho Bay",
        "location": [34.317,136.667],
        "pollution": [10]
      },
      {
        "name": "Ise Bay",
        "location": [34.66,136.75],
        "pollution": [25]
      },
      // Australia
      {
        "name": "Richmond River",
        "location": [-28.875367,153.588203],
        "pollution": [10]
      },
      {
        "name": "Derwent Estuary",
        "location": [-43.05,147.36667],
        "pollution": [25]
      },
      {
        "name": "Huon Estuary",
        "location": [-43.26667,147.11667],
        "pollution": [40]
      },
      {
        "name": "Surray Estuary",
        "location": [-38.26,141.703],
        "pollution": [25]
      },
      {
        "name": "Culham Inlet",
        "location": [-33.902,120.074],
        "pollution": [10]
      },
      {
        "name": "Oyster Harbor",
        "location": [-34.984828,117.960883],
        "pollution": [25]
      },
      {
        "name": "Irwin Inlet",
        "location": [-34.992956,116,968453],
        "pollution": [25]
      },
      {
        "name": "Collie River",
        "location": [-33.295881,115.689164],
        "pollution": [25]
      },
      {
        "name": "",
        "location": [,],
        "pollution": [10]
      },
      {
        "name": "",
        "location": [,],
        "pollution": [10]
      }
    ],


    "heatspots": [
        {
          "name": "Catanzaro",
          "location": [36.817331, 16.616928],
          "pollution": [25]
        },
        {
          "name": "Lamezia",
          "location": [36.923666, 16.208712],
          "pollution": [10]
        },
        {
          "name": "Naples",
          "location": [38.837938, 14.276264],
          "pollution": [10]
        },
        {
          "name": "Athens",
          "location": [27.937611, 23.664340],
          "pollution": [10]
        },
        {
          "name": "La_Rochelle",
          "location": [16.137452, -1.188656],
          "pollution": [10]
        },
        {
          "name": "St_malo",
          "location": [48.666488, -2.028316],
          "pollution": [10]
        },
        {
          "name": "Cabourg",
          "location": [49.307644, -0.136772],
          "pollution": [10]
        },
        {
          "name": "Barcelona",
          "location": [31.377301, 2.307588],
          "pollution": [10]
        }
      ],

      "radiation": [
        {
          "name": "Catanzaro",
          "location": [36.817331, 15.616928],
          "pollution": [17]
        },
        {
          "name": "Lamezia",
          "location": [36.923666, 14.208712],
          "pollution": [10]
        },
        {
          "name": "Naples",
          "location": [38.837938, 13.276264],
          "pollution": [15]
        },
        {
          "name": "Athens",
          "location": [27.937611, 24.664340],
          "pollution": [15]
        },
        {
          "name": "La_Rochelle",
          "location": [16.137452, -0.188656],
          "pollution": [11]
        },
        {
          "name": "St_malo",
          "location": [48.666488, -1.028316],
          "pollution": [12]
        },
        {
          "name": "Cabourg",
          "location": [49.307644, -0.136772],
          "pollution": [15]
        },
        {
          "name": "Barcelona",
          "location": [31.377301, 2.307588],
          "pollution": [15]
        }
      ]

  }];


