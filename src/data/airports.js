const airports = [
  {
    city: "Utirik Island",
    iata: "UTK",
    name: "Utirik Airport",
    country: "MH"
  },
  {
    city: "Key Largo",
    iata: "OCA",
    name: "Ocean Reef Club Airport",
    country: "United States"
  },
  {
    city: "Crested Butte",
    iata: "CSE",
    name: "Crested Butte Airpark",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "CUS",
    name: "Columbus Airport",
    country: "United States"
  },
  {
    city: "Stonewall",
    iata: "JCY",
    name: "LBJ Ranch Airport",
    country: "United States"
  },
  {
    city: "Loring",
    iata: "WLR",
    name: "Loring Seaplane Base",
    country: "United States"
  },
  {
    city: "Nunapitchuk",
    iata: "NUP",
    name: "Nunapitchuk Airport",
    country: "United States"
  },
  {
    city: "Port Alice",
    iata: "PTC",
    name: "Port Alice Seaplane Base",
    country: "United States"
  },
  {
    city: "Icy Bay",
    iata: "ICY",
    name: "Icy Bay Airport",
    country: "United States"
  },
  {
    city: "Port Protection",
    iata: "PPV",
    name: "Port Protection Seaplane Base",
    country: "United States"
  },
  {
    city: "Kalakaket Creek",
    iata: "KKK",
    name: "Kalakaket Creek AS Airport",
    country: "United States"
  },
  {
    city: "Dunsmuir",
    iata: "MHS",
    name: "Dunsmuir Muni-Mott Airport",
    country: "United States"
  },
  {
    city: "Beeville",
    iata: "NIR",
    name: "Chase Field Industrial Airport",
    country: "United States"
  },
  {
    city: "Littlefield",
    iata: "GCT",
    name: "Grand Canyon Bar Ten Airstrip",
    country: "United States"
  },
  {
    city: "Ellamar",
    iata: "ELW",
    name: "Ellamar Seaplane Base",
    country: "United States"
  },
  {
    city: "Lime Village",
    iata: "LVD",
    name: "Lime Village Airport",
    country: "United States"
  },
  {
    city: "Hogatza",
    iata: "HGZ",
    name: "Hog River Airport",
    country: "United States"
  },
  {
    city: "Oaktown",
    iata: "OTN",
    name: "Ed-Air Airport",
    country: "United States"
  },
  {
    city: "Telida",
    iata: "TLF",
    name: "Telida Airport",
    country: "United States"
  },
  {
    city: "Brazoria",
    iata: "BZT",
    name: "Eagle Air Park",
    country: "United States"
  },
  {
    city: "Entrance Island",
    iata: "HBH",
    name: "Entrance Island Seaplane Base",
    country: "United States"
  },
  {
    city: "False Island",
    iata: "FAK",
    name: "False Island Seaplane Base",
    country: "United States"
  },
  {
    city: "Blakely Island",
    iata: "BYW",
    name: "Blakely Island Airport",
    country: "United States"
  },
  {
    city: "Kenai",
    iata: "DRF",
    name: "Drift River Airport",
    country: "United States"
  },
  {
    city: "Bradford",
    iata: "BDF",
    name: "Rinkenberger Restricted Landing Area",
    country: "United States"
  },
  {
    city: "Tetlin",
    iata: "TEH",
    name: "Tetlin Airport",
    country: "United States"
  },
  {
    city: "Versailles",
    iata: "VRS",
    name: "Roy Otten Memorial Airfield",
    country: "United States"
  },
  {
    city: "Golden Horn Lodge",
    iata: "GDH",
    name: "Golden Horn Lodge Seaplane Base",
    country: "United States"
  },
  {
    city: "Atmautluak",
    iata: "ATT",
    name: "Atmautluak Airport",
    country: "United States"
  },
  {
    city: "Livengood",
    iata: "LIV",
    name: "Livengood Camp Airport",
    country: "United States"
  },
  {
    city: "Pedro Bay",
    iata: "PDB",
    name: "Pedro Bay Airport",
    country: "United States"
  },
  {
    city: "Ouzinkie",
    iata: "KOZ",
    name: "Ouzinkie Airport",
    country: "United States"
  },
  {
    city: "Tununak",
    iata: "TNK",
    name: "Tununak Airport",
    country: "United States"
  },
  {
    city: "Hyder",
    iata: "WHD",
    name: "Hyder Seaplane Base",
    country: "United States"
  },
  {
    city: "Minto",
    iata: "MNT",
    name: "Minto Al Wright Airport",
    country: "United States"
  },
  {
    city: "Tokeen",
    iata: "TKI",
    name: "Tokeen Seaplane Base",
    country: "United States"
  },
  {
    city: "Aleknagik",
    iata: "WKK",
    name: "Aleknagik / New Airport",
    country: "United States"
  },
  {
    city: "Ketchikan",
    iata: "WFB",
    name: "Ketchikan Harbor Seaplane Base",
    country: "United States"
  },
  {
    city: "Rolling Fork",
    iata: "RFK",
    name: "Rollang Field",
    country: "United States"
  },
  {
    city: "Naknek",
    iata: "NNK",
    name: "Naknek Airport",
    country: "United States"
  },
  {
    city: "Katmai National Park",
    iata: "BKF",
    name: "Lake Brooks Seaplane Base",
    country: "United States"
  },
  {
    city: "Belle Chasse",
    iata: "BCS",
    name: "Southern Seaplane Airport",
    country: "United States"
  },
  {
    city: "Stow",
    iata: "MMN",
    name: "Minute Man Air Field",
    country: "United States"
  },
  {
    city: "San Pedro",
    iata: "SPQ",
    name: "Catalina Air-Sea Terminal Heliport",
    country: "United States"
  },
  {
    city: "New York",
    iata: "TSS",
    name: "East 34th Street Heliport",
    country: "United States"
  },
  {
    city: "New York",
    iata: "NYS",
    name: "New York Skyports Inc Seaplane Base",
    country: "United States"
  },
  {
    city: "Blackwell",
    iata: "BWL",
    name: "Earl Henry Airport",
    country: "United States"
  },
  {
    city: "Yes Bay",
    iata: "WYB",
    name: "Yes Bay Lodge Seaplane Base",
    country: "United States"
  },
  {
    city: "Center Island",
    iata: "CWS",
    name: "Center Island Airport",
    country: "United States"
  },
  {
    city: "Tatitlek",
    iata: "TEK",
    name: "Tatitlek Airport",
    country: "United States"
  },
  {
    city: "Corolla",
    iata: "DUF",
    name: "Pine Island Airport",
    country: "United States"
  },
  {
    city: "Friday Harbor",
    iata: "SSW",
    name: "Stuart Island Airpark",
    country: "United States"
  },
  {
    city: "Fort Bragg",
    iata: "FOB",
    name: "Fort Bragg Airport",
    country: "United States"
  },
  {
    city: "Poulsbo",
    iata: "PUL",
    name: "Port of Poulsbo Marina Moorage Seaplane Base",
    country: "United States"
  },
  {
    city: "Los Angeles",
    iata: "CCD",
    name: "Century City Heliport",
    country: "United States"
  },
  {
    city: "Meyers Chuck",
    iata: "WMK",
    name: "Meyers Chuck Seaplane Base",
    country: "United States"
  },
  {
    city: "Alexandria Bay",
    iata: "AXB",
    name: "Maxson Airfield",
    country: "United States"
  },
  {
    city: "Lubbock",
    iata: "REE",
    name: "Reese Airpark",
    country: "United States"
  },
  {
    city: "Eastsound",
    iata: "WDN",
    name: "Waldron Airstrip",
    country: "United States"
  },
  {
    city: "Whale Pass",
    iata: "WWP",
    name: "Whale Pass Seaplane Float Harbor Facility",
    country: "United States"
  },
  {
    city: "Chuathbaluk",
    iata: "CHU",
    name: "Chuathbaluk Airport",
    country: "United States"
  },
  {
    city: "Ugashik",
    iata: "UGS",
    name: "Ugashik Airport",
    country: "United States"
  },
  {
    city: "City of Industry",
    iata: "JID",
    name: "Recreation and Conference Center Heliport",
    country: "United States"
  },
  {
    city: "Essington",
    iata: "PSQ",
    name: "Philadelphia Seaplane Base",
    country: "United States"
  },
  {
    city: "Levelock",
    iata: "KLL",
    name: "Levelock Airport",
    country: "United States"
  },
  {
    city: "Saginaw Bay",
    iata: "SGW",
    name: "Saginaw Seaplane Base",
    country: "United States"
  },
  {
    city: "Tuntutuliak",
    iata: "WTL",
    name: "Tuntutuliak Airport",
    country: "United States"
  },
  {
    city: "Twin Hills",
    iata: "TWA",
    name: "Twin Hills Airport",
    country: "United States"
  },
  {
    city: "Chignik Lake",
    iata: "KCQ",
    name: "Chignik Lake Airport",
    country: "United States"
  },
  {
    city: "Adado",
    iata: "AAD",
    name: "Adado Airport",
    country: "SO"
  },
  {
    city: "Atkamba Mission",
    iata: "ABP",
    name: "Atkamba Airport",
    country: "PG"
  },
  {
    city: "Arica",
    iata: "ACM",
    name: "Arica Airport",
    country: "Colombia"
  },
  {
    city: "El Daein",
    iata: "ADV",
    name: "El Daein Airport",
    country: "SD"
  },
  {
    city: "nan",
    iata: "DST",
    name: "Dubai Seaplane Terminal",
    country: "United Arab Emirates"
  },
  {
    city: "Adar",
    iata: "AEE",
    name: "Adareil Airport",
    country: "SS"
  },
  {
    city: "Chifeng",
    iata: "AEQ",
    name: "Ar Horqin Airport",
    country: "China"
  },
  {
    city: "Ampara",
    iata: "AFK",
    name: "Kondavattavana Tank Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Codrington",
    iata: "BBQ",
    name: "Burton-Nibbs International Airport",
    country: "AG"
  },
  {
    city: "Bila",
    iata: "AFT",
    name: "Afutara Aerodrome",
    country: "SB"
  },
  {
    city: "Arona",
    iata: "RNA",
    name: "Ulawa Airport",
    country: "SB"
  },
  {
    city: "Atoifi",
    iata: "ATD",
    name: "Uru Harbour Airport",
    country: "SB"
  },
  {
    city: "Barakoma",
    iata: "VEV",
    name: "Barakoma Airport",
    country: "SB"
  },
  {
    city: "Batuna Mission Station",
    iata: "BPF",
    name: "Batuna Aerodrome",
    country: "SB"
  },
  {
    city: "Liangia",
    iata: "GEF",
    name: "Geva Airport",
    country: "SB"
  },
  {
    city: "Angoram",
    iata: "AGG",
    name: "Angoram Airport",
    country: "PG"
  },
  {
    city: "Auki",
    iata: "AKS",
    name: "Gwaunaru'u Airport",
    country: "SB"
  },
  {
    city: "Anua",
    iata: "BNY",
    name: "Bellona/Anua Airport",
    country: "SB"
  },
  {
    city: "Choiseul Bay",
    iata: "CHY",
    name: "Choiseul Bay Airport",
    country: "SB"
  },
  {
    city: "Ballalae",
    iata: "BAS",
    name: "Ballalae Airport",
    country: "SB"
  },
  {
    city: "Fera Island",
    iata: "FRE",
    name: "Fera/Maringe Airport",
    country: "SB"
  },
  {
    city: "Honiara",
    iata: "HIR",
    name: "Honiara International Airport",
    country: "SB"
  },
  {
    city: "Mbambanakira",
    iata: "MBU",
    name: "Babanakira Airport",
    country: "SB"
  },
  {
    city: "Avu Avu",
    iata: "AVU",
    name: "Avu Avu Airport",
    country: "SB"
  },
  {
    city: "Kirakira",
    iata: "IRA",
    name: "Ngorangora Airport",
    country: "SB"
  },
  {
    city: "Santa Cruz/Graciosa Bay/Luova",
    iata: "SCZ",
    name: "Santa Cruz/Graciosa Bay/Luova Airport",
    country: "SB"
  },
  {
    city: "Munda",
    iata: "MUA",
    name: "Munda Airport",
    country: "SB"
  },
  {
    city: "Gizo",
    iata: "GZO",
    name: "Nusatupe Airport",
    country: "SB"
  },
  {
    city: "Stirling Island",
    iata: "MNY",
    name: "Mono Airport",
    country: "SB"
  },
  {
    city: "Parasi",
    iata: "PRS",
    name: "Parasi Airport",
    country: "SB"
  },
  {
    city: "Rennell Island",
    iata: "RNL",
    name: "Rennell/Tingoa Airport",
    country: "SB"
  },
  {
    city: "Sege",
    iata: "EGM",
    name: "Sege Airport",
    country: "SB"
  },
  {
    city: "Santa Ana Island",
    iata: "NNB",
    name: "Santa Ana Airport",
    country: "SB"
  },
  {
    city: "Marau",
    iata: "RUS",
    name: "Marau Airport",
    country: "SB"
  },
  {
    city: "Suavanao",
    iata: "VAO",
    name: "Suavanao Airport",
    country: "SB"
  },
  {
    city: "Yandina",
    iata: "XYA",
    name: "Yandina Airport",
    country: "SB"
  },
  {
    city: "Kagua",
    iata: "AGK",
    name: "Kagua Airport",
    country: "PG"
  },
  {
    city: "Kagau Island",
    iata: "KGE",
    name: "Kaghau Airport",
    country: "SB"
  },
  {
    city: "Kolombangara Island",
    iata: "KUE",
    name: "Kukudu Airport",
    country: "SB"
  },
  {
    city: "Kwailabesi",
    iata: "KWS",
    name: "Kwailabesi Airport",
    country: "SB"
  },
  {
    city: "Lomlom",
    iata: "LLM",
    name: "Lomlom Airport",
    country: "SB"
  },
  {
    city: "Star Harbor",
    iata: "NAZ",
    name: "Nana Airport",
    country: "SB"
  },
  {
    city: "Manaoba",
    iata: "MHM",
    name: "Manaoba Airport",
    country: "SB"
  },
  {
    city: "Gatokae",
    iata: "GTA",
    name: "Gatokae Aerodrome",
    country: "SB"
  },
  {
    city: "Ringi Cove",
    iata: "RIN",
    name: "Ringi Cove Airport",
    country: "SB"
  },
  {
    city: "Ramata",
    iata: "RBV",
    name: "Ramata Airport",
    country: "SB"
  },
  {
    city: "Tulaghi Island",
    iata: "TLG",
    name: "Tulaghi Heliport",
    country: "SB"
  },
  {
    city: "Ambatolahy",
    iata: "AHY",
    name: "Ambatolhy Airport",
    country: "MG"
  },
  {
    city: "Bigatyelang Island",
    iata: "AIC",
    name: "Ailinglaplap Airok Airport",
    country: "MH"
  },
  {
    city: "Chena Hot Springs",
    iata: "CEX",
    name: "Chena Hot Springs Airport",
    country: "United States"
  },
  {
    city: "Solomon",
    iata: "SOL",
    name: "Solomon State Field",
    country: "United States"
  },
  {
    city: "Herendeen Bay",
    iata: "HED",
    name: "Herendeen Bay Airport",
    country: "United States"
  },
  {
    city: "Taylor",
    iata: "TWE",
    name: "Taylor Airport",
    country: "United States"
  },
  {
    city: "Tikchik",
    iata: "KTH",
    name: "Tikchik Lodge Seaplane Base",
    country: "United States"
  },
  {
    city: "Tuxekan Island",
    iata: "NKI",
    name: "Naukati Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Candle",
    iata: "CDL",
    name: "Candle 2 Airport",
    country: "United States"
  },
  {
    city: "Amook Bay",
    iata: "AOS",
    name: "Amook Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Boswell Bay",
    iata: "BSW",
    name: "Boswell Bay Airport",
    country: "United States"
  },
  {
    city: "ZaKouma",
    iata: "AKM",
    name: "Zakuoma Airport",
    country: "TD"
  },
  {
    city: "Lazy Bay",
    iata: "ALZ",
    name: "Alitak Seaplane Base",
    country: "United States"
  },
  {
    city: "Kapan",
    iata: "YUK",
    name: "Syunik Airport",
    country: "AM"
  },
  {
    city: "Alto Molocue",
    iata: "AME",
    name: "Alto Molocue Airport",
    country: "MZ"
  },
  {
    city: "nan",
    iata: "AMY",
    name: "Ambatomainty Airport",
    country: "MG"
  },
  {
    city: "Yaren",
    iata: "INU",
    name: "Nauru International Airport",
    country: "NR"
  },
  {
    city: "Angus Downs Station",
    iata: "ANZ",
    name: "Angus Downs Airport",
    country: "Australia"
  },
  {
    city: "Saurimo",
    iata: "CTV",
    name: "Catoca Airport",
    country: "AO"
  },
  {
    city: "Andulo",
    iata: "ANL",
    name: "Andulo Airport",
    country: "AO"
  },
  {
    city: "Cangamba",
    iata: "CNZ",
    name: "Cangamba Airport",
    country: "AO"
  },
  {
    city: "Dirico",
    iata: "DRC",
    name: "Dirico Airport",
    country: "AO"
  },
  {
    city: "N'dalatando",
    iata: "NDF",
    name: "N'dalatando Airport",
    country: "AO"
  },
  {
    city: "nan",
    iata: "AOB",
    name: "Annanberg Airport",
    country: "PG"
  },
  {
    city: "Abou-Deïa",
    iata: "AOD",
    name: "Abou-Deïa Airport",
    country: "TD"
  },
  {
    city: "nan",
    iata: "APP",
    name: "Asapa Airport",
    country: "PG"
  },
  {
    city: "Girdwood",
    iata: "AQY",
    name: "Girdwood-Alyeska Airport",
    country: "United States"
  },
  {
    city: "Bragado",
    iata: "QRF",
    name: "Bragado Airport",
    country: "Argentina"
  },
  {
    city: "Caleta Olivia",
    iata: "CVI",
    name: "Caleta Olivia Airport",
    country: "Argentina"
  },
  {
    city: "Charata",
    iata: "CNT",
    name: "Charata Airport",
    country: "Argentina"
  },
  {
    city: "General Villegas",
    iata: "VGS",
    name: "General Villegas Airport",
    country: "Argentina"
  },
  {
    city: "Los Menucos",
    iata: "LMD",
    name: "Los Menucos Airport",
    country: "Argentina"
  },
  {
    city: "Valcheta",
    iata: "VCF",
    name: "Valcheta Airport",
    country: "Argentina"
  },
  {
    city: "Carmen de Patagones",
    iata: "CPG",
    name: "Carmen de Patagones Airport",
    country: "Argentina"
  },
  {
    city: "nan",
    iata: "ARP",
    name: "Aragip Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "ASZ",
    name: "Asirim Airport",
    country: "PG"
  },
  {
    city: "Queen Maud Island",
    iata: "WFR",
    name: "(Duplicate)Wolf's Fang Runway",
    country: "AQ"
  },
  {
    city: "Lady Elliot Island",
    iata: "LYT",
    name: "Lady Elliot Island Airstrip",
    country: "Australia"
  },
  {
    city: "Cosmo Newbery",
    iata: "GYZ",
    name: "Gruyere Airport",
    country: "Australia"
  },
  {
    city: "Agnew",
    iata: "AGW",
    name: "Agnew Airport",
    country: "Australia"
  },
  {
    city: "Alroy Downs",
    iata: "AYD",
    name: "Alroy Downs Airport",
    country: "Australia"
  },
  {
    city: "Baniyala",
    iata: "BYX",
    name: "Baniyala Airport",
    country: "Australia"
  },
  {
    city: "Coolibah",
    iata: "COB",
    name: "Coolibah Airport",
    country: "Australia"
  },
  {
    city: "Coorabie",
    iata: "CRJ",
    name: "Coorabie Airport",
    country: "Australia"
  },
  {
    city: "Carlton Hill",
    iata: "CRY",
    name: "Carlton Hill Airport",
    country: "Australia"
  },
  {
    city: "Cresswell Downs",
    iata: "CSD",
    name: "Cresswell Downs Airport",
    country: "Australia"
  },
  {
    city: "Diamantina Lakes",
    iata: "DYM",
    name: "Diamantina Lakes Airport",
    country: "Australia"
  },
  {
    city: "Hayman Island",
    iata: "HIS",
    name: "Hayman Island Resort Seaplane Base",
    country: "Australia"
  },
  {
    city: "Helenvale",
    iata: "HLV",
    name: "Helenvale Airport",
    country: "Australia"
  },
  {
    city: "Kimberley Downs",
    iata: "KBD",
    name: "Kimberley Downs Airport",
    country: "Australia"
  },
  {
    city: "Ghan",
    iata: "KGR",
    name: "Kulgera Airport",
    country: "Australia"
  },
  {
    city: "Peppimenarti",
    iata: "PEP",
    name: "Peppimenarti Airport",
    country: "Australia"
  },
  {
    city: "Rockhampton Downs",
    iata: "RDA",
    name: "Rockhampton Downs Airport",
    country: "Australia"
  },
  {
    city: "Sturt Creek",
    iata: "SSK",
    name: "Sturt Creek Airport",
    country: "Australia"
  },
  {
    city: "Shaw River",
    iata: "SWB",
    name: "Shaw River Airport",
    country: "Australia"
  },
  {
    city: "Torwood",
    iata: "TWP",
    name: "Torwood Airport",
    country: "Australia"
  },
  {
    city: "Springvale",
    iata: "ZVG",
    name: "Springvale Airport",
    country: "Australia"
  },
  {
    city: "Awar",
    iata: "AWR",
    name: "Awar Airport (unusable)",
    country: "PG"
  },
  {
    city: "Bayanhot",
    iata: "AXF",
    name: "Alxa Left Banner Bayanhot Airport",
    country: "China"
  },
  {
    city: "Kabir",
    iata: "AXO",
    name: "Pantar Kabir Airport",
    country: "Indonesia"
  },
  {
    city: "nan",
    iata: "AMF",
    name: "Ama Airport",
    country: "PG"
  },
  {
    city: "Aue",
    iata: "UAE",
    name: "Mount Aue Airport",
    country: "PG"
  },
  {
    city: "Afore",
    iata: "AFR",
    name: "Afore Airstrip",
    country: "PG"
  },
  {
    city: "Agaun",
    iata: "AUP",
    name: "Agaun Airport",
    country: "PG"
  },
  {
    city: "Aitape",
    iata: "ATP",
    name: "Aitape Airport",
    country: "PG"
  },
  {
    city: "Aiambak",
    iata: "AIH",
    name: "Aiambak Airport",
    country: "PG"
  },
  {
    city: "Amanab",
    iata: "AMU",
    name: "Amanab Airport",
    country: "PG"
  },
  {
    city: "Andekombe",
    iata: "ADC",
    name: "Andakombe Airport",
    country: "PG"
  },
  {
    city: "Aiome",
    iata: "AIE",
    name: "Aiome Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "KPM",
    name: "Kompiam Airport",
    country: "PG"
  },
  {
    city: "Ambunti",
    iata: "AUJ",
    name: "Ambunti Airport",
    country: "PG"
  },
  {
    city: "Awaba",
    iata: "AWB",
    name: "Awaba Airport",
    country: "PG"
  },
  {
    city: "Aseki",
    iata: "AEK",
    name: "Aseki Airport",
    country: "PG"
  },
  {
    city: "Aiyura Valley",
    iata: "AYU",
    name: "Aiyura Airport",
    country: "PG"
  },
  {
    city: "Baimuru",
    iata: "VMU",
    name: "Baimuru Airport",
    country: "PG"
  },
  {
    city: "Bambu",
    iata: "BCP",
    name: "Bambu Airport",
    country: "PG"
  },
  {
    city: "Bodinumu",
    iata: "BNM",
    name: "Bodinumu Airport",
    country: "PG"
  },
  {
    city: "Bamu",
    iata: "BMZ",
    name: "Bamu Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "BDZ",
    name: "Baindoung Airport",
    country: "PG"
  },
  {
    city: "Bensbach",
    iata: "BSP",
    name: "Bensbach Airport",
    country: "PG"
  },
  {
    city: "Bewani",
    iata: "BWP",
    name: "Bewani Airport",
    country: "PG"
  },
  {
    city: "Buka Island",
    iata: "BUA",
    name: "Buka Airport",
    country: "PG"
  },
  {
    city: "Bialla, Matalilu, Ewase",
    iata: "BAA",
    name: "Bialla Airport",
    country: "PG"
  },
  {
    city: "Balimo",
    iata: "OPU",
    name: "Balimo Airport",
    country: "PG"
  },
  {
    city: "Bomai",
    iata: "BMH",
    name: "Bomai Airport",
    country: "PG"
  },
  {
    city: "Bapi",
    iata: "BPD",
    name: "Bapi Airstrip",
    country: "PG"
  },
  {
    city: "Biangabip",
    iata: "BPK",
    name: "Biangabip Airport",
    country: "PG"
  },
  {
    city: "Biaru",
    iata: "BRP",
    name: "Biaru Airport",
    country: "PG"
  },
  {
    city: "Bulolo",
    iata: "BUL",
    name: "Bulolo Airport",
    country: "PG"
  },
  {
    city: "Biniguni",
    iata: "XBN",
    name: "Biniguni Airport",
    country: "PG"
  },
  {
    city: "Chungribu",
    iata: "CVB",
    name: "Chungribu Airport",
    country: "PG"
  },
  {
    city: "Cape Gloucester",
    iata: "CGC",
    name: "Cape Gloucester Airport",
    country: "PG"
  },
  {
    city: "Kundiawa",
    iata: "CMU",
    name: "Chimbu Airport",
    country: "PG"
  },
  {
    city: "Samarai Island",
    iata: "SQT",
    name: "China Strait Airstrip",
    country: "PG"
  },
  {
    city: "Debepare",
    iata: "DBP",
    name: "Debepare Airport",
    country: "PG"
  },
  {
    city: "Derim",
    iata: "DER",
    name: "Derim Airport",
    country: "PG"
  },
  {
    city: "Bundi",
    iata: "BNT",
    name: "Bundi Airport",
    country: "PG"
  },
  {
    city: "Munduku",
    iata: "MDM",
    name: "Munduku Airport",
    country: "PG"
  },
  {
    city: "Kondobol",
    iata: "KPF",
    name: "Kondobol Airport",
    country: "PG"
  },
  {
    city: "Dinangat",
    iata: "DNU",
    name: "Dinangat Airport",
    country: "PG"
  },
  {
    city: "Castori Islets",
    iata: "DOI",
    name: "Doini Airport",
    country: "PG"
  },
  {
    city: "Dorobisoro",
    iata: "DOO",
    name: "Dorobisoro Airport",
    country: "PG"
  },
  {
    city: "Daru",
    iata: "DAU",
    name: "Daru Airport",
    country: "PG"
  },
  {
    city: "Gunim",
    iata: "KRU",
    name: "Kerau Airport",
    country: "PG"
  },
  {
    city: "Embessa",
    iata: "EMS",
    name: "Embessa Airport",
    country: "PG"
  },
  {
    city: "Yellow River Mission",
    iata: "XYR",
    name: "Edwaki Airport",
    country: "PG"
  },
  {
    city: "Emirau Island",
    iata: "EMI",
    name: "Emirau Airport",
    country: "PG"
  },
  {
    city: "Efogi",
    iata: "EFG",
    name: "Efogi Airport",
    country: "PG"
  },
  {
    city: "Morehead",
    iata: "MHY",
    name: "Morehead Airport",
    country: "PG"
  },
  {
    city: "Eliptamin",
    iata: "EPT",
    name: "Eliptamin Airport",
    country: "PG"
  },
  {
    city: "Engati",
    iata: "EGA",
    name: "Engati Airstrip",
    country: "PG"
  },
  {
    city: "Emo Mission",
    iata: "EMO",
    name: "Emo River Airstrip",
    country: "PG"
  },
  {
    city: "Erume",
    iata: "ERU",
    name: "Erume Airport",
    country: "PG"
  },
  {
    city: "Demgulu",
    iata: "MFZ",
    name: "Meselia Airport",
    country: "PG"
  },
  {
    city: "Bosset",
    iata: "BOT",
    name: "Bosset Airport",
    country: "PG"
  },
  {
    city: "Erave",
    iata: "ERE",
    name: "Erave Airport",
    country: "PG"
  },
  {
    city: "Siwea",
    iata: "SWE",
    name: "Siwea Airport",
    country: "PG"
  },
  {
    city: "Fane Mission",
    iata: "FNE",
    name: "Fane Airport",
    country: "PG"
  },
  {
    city: "Feramin",
    iata: "FRQ",
    name: "Feramin Airport",
    country: "PG"
  },
  {
    city: "Buki",
    iata: "FIN",
    name: "Finschhafen Airport",
    country: "PG"
  },
  {
    city: "Frieda River",
    iata: "FAQ",
    name: "Frieda River Airport",
    country: "PG"
  },
  {
    city: "Fuma",
    iata: "FUM",
    name: "Fuma Airport",
    country: "PG"
  },
  {
    city: "Goronka",
    iata: "GKA",
    name: "Goroka Airport",
    country: "PG"
  },
  {
    city: "Gewoia",
    iata: "GEW",
    name: "Gewoia Airport",
    country: "PG"
  },
  {
    city: "Guari",
    iata: "GUG",
    name: "Guari Airport",
    country: "PG"
  },
  {
    city: "Au",
    iata: "GRL",
    name: "Garasa Airport",
    country: "PG"
  },
  {
    city: "Garaina",
    iata: "GAR",
    name: "Garaina Airport",
    country: "PG"
  },
  {
    city: "Woodlark (Muyua) Island",
    iata: "GAZ",
    name: "Guasopa Airport",
    country: "PG"
  },
  {
    city: "Gonaili",
    iata: "GOE",
    name: "Gonaili Airport",
    country: "PG"
  },
  {
    city: "Gurney",
    iata: "GUR",
    name: "Gurney Airport",
    country: "PG"
  },
  {
    city: "Gusap",
    iata: "GAP",
    name: "Gusap Airport",
    country: "PG"
  },
  {
    city: "Popondetta",
    iata: "PNP",
    name: "Girua Airport",
    country: "PG"
  },
  {
    city: "Gasuke",
    iata: "GBC",
    name: "Gasuke Airport",
    country: "PG"
  },
  {
    city: "Gasmata Island",
    iata: "GMI",
    name: "Gasmata Island Airport",
    country: "PG"
  },
  {
    city: "Anguganak",
    iata: "AKG",
    name: "Anguganak Airport",
    country: "PG"
  },
  {
    city: "Green River",
    iata: "GVI",
    name: "Green River Airport",
    country: "PG"
  },
  {
    city: "Gora",
    iata: "GOC",
    name: "Gora Airstrip",
    country: "PG"
  },
  {
    city: "Habi",
    iata: "HBD",
    name: "Habi Airport",
    country: "PG"
  },
  {
    city: "Heiweni",
    iata: "HNI",
    name: "Heiweni Airport",
    country: "PG"
  },
  {
    city: "Bainyik",
    iata: "HYF",
    name: "Hayfields Airport",
    country: "PG"
  },
  {
    city: "Honinabi",
    iata: "HNN",
    name: "Honinabi Airport",
    country: "PG"
  },
  {
    city: "Kimbe",
    iata: "HKN",
    name: "Hoskins Airport",
    country: "PG"
  },
  {
    city: "Haivaro",
    iata: "HIT",
    name: "Haivaro Airport",
    country: "PG"
  },
  {
    city: "Hawabango",
    iata: "HWA",
    name: "Hawabango Airport",
    country: "PG"
  },
  {
    city: "Nissan Island",
    iata: "IIS",
    name: "Nissan Island Airport",
    country: "PG"
  },
  {
    city: "Indagen",
    iata: "IDN",
    name: "Indagen Airport",
    country: "PG"
  },
  {
    city: "Imane",
    iata: "IMN",
    name: "Imane Airport",
    country: "PG"
  },
  {
    city: "Kungim",
    iata: "KGM",
    name: "Kungim Airport",
    country: "PG"
  },
  {
    city: "Imonda",
    iata: "IMD",
    name: "Imonda Airport",
    country: "PG"
  },
  {
    city: "Kieta",
    iata: "KIE",
    name: "Aropa Airport",
    country: "PG"
  },
  {
    city: "Ialibu",
    iata: "IAL",
    name: "Ialibu Airport",
    country: "PG"
  },
  {
    city: "Wasua",
    iata: "WSA",
    name: "Wasua Airport",
    country: "PG"
  },
  {
    city: "Garove Island",
    iata: "WIU",
    name: "Witu Airport",
    country: "PG"
  },
  {
    city: "Miyanmin",
    iata: "MPX",
    name: "Miyanmin Airport",
    country: "PG"
  },
  {
    city: "Yongai",
    iata: "KGH",
    name: "Yongai Airport",
    country: "PG"
  },
  {
    city: "Josephstaal",
    iata: "JOP",
    name: "Josephstaal Airport",
    country: "PG"
  },
  {
    city: "Losuia",
    iata: "LSA",
    name: "Losuia Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "KBM",
    name: "Kabwum",
    country: "PG"
  },
  {
    city: "Kandrian",
    iata: "KDR",
    name: "Kandrian Airport",
    country: "PG"
  },
  {
    city: "Hoieti",
    iata: "KMF",
    name: "Kamina Airport",
    country: "PG"
  },
  {
    city: "Kopiago",
    iata: "KPA",
    name: "Kopiago Airport",
    country: "PG"
  },
  {
    city: "Kamulai Mission",
    iata: "KAQ",
    name: "Kamulai Airport",
    country: "PG"
  },
  {
    city: "Kiunga",
    iata: "UNG",
    name: "Kiunga Airport",
    country: "PG"
  },
  {
    city: "Kanainj",
    iata: "KNE",
    name: "Kanainj Airport",
    country: "PG"
  },
  {
    city: "Kikori",
    iata: "KRI",
    name: "Kikori Airport",
    country: "PG"
  },
  {
    city: "Kerema",
    iata: "KMA",
    name: "Kerema Airport",
    country: "PG"
  },
  {
    city: "Kokoda",
    iata: "KKD",
    name: "Kokoda Airport",
    country: "PG"
  },
  {
    city: "Kagi",
    iata: "KGW",
    name: "Kagi Airport",
    country: "PG"
  },
  {
    city: "Kar Kar Island",
    iata: "KRX",
    name: "Kar Kar Airport",
    country: "PG"
  },
  {
    city: "Kaintiba",
    iata: "KZF",
    name: "Kaintiba Airport",
    country: "PG"
  },
  {
    city: "Kuri",
    iata: "KUQ",
    name: "Kuri Airport",
    country: "PG"
  },
  {
    city: "Kavieng",
    iata: "KVG",
    name: "Kavieng Airport",
    country: "PG"
  },
  {
    city: "Kawito",
    iata: "KWO",
    name: "Kawito Airport",
    country: "PG"
  },
  {
    city: "Londolovit",
    iata: "LNV",
    name: "Londolovit Airport",
    country: "PG"
  },
  {
    city: "Lab Lab Mission",
    iata: "LAB",
    name: "Lab Lab Airport",
    country: "PG"
  },
  {
    city: "Denglagu Mission",
    iata: "KEG",
    name: "Keglsugl Airport",
    country: "PG"
  },
  {
    city: "Kibuli",
    iata: "KII",
    name: "Kibuli Airstrip",
    country: "PG"
  },
  {
    city: "Linga Linga",
    iata: "LGN",
    name: "Linga Linga Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "LNM",
    name: "Langimar Airport",
    country: "PG"
  },
  {
    city: "Lowai",
    iata: "LWI",
    name: "Lowai Airport",
    country: "PG"
  },
  {
    city: "Leron Plains",
    iata: "LPN",
    name: "Leron Plains Airport",
    country: "PG"
  },
  {
    city: "Lese",
    iata: "LNG",
    name: "Lese Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "LNC",
    name: "Lengbati Airport",
    country: "PG"
  },
  {
    city: "Lumi",
    iata: "LMI",
    name: "Lumi Airport",
    country: "PG"
  },
  {
    city: "Long Island",
    iata: "LSJ",
    name: "Long Island Airport",
    country: "PG"
  },
  {
    city: "Abu Dhabi",
    iata: "AYM",
    name: "Yas Island Seaplane Base",
    country: "United Arab Emirates"
  },
  {
    city: "Manari",
    iata: "MRM",
    name: "Manari Airport",
    country: "PG"
  },
  {
    city: "Morobe",
    iata: "OBM",
    name: "Morobe Airport",
    country: "PG"
  },
  {
    city: "Menyamya",
    iata: "MYX",
    name: "Menyamya Airport",
    country: "PG"
  },
  {
    city: "Madang",
    iata: "MAG",
    name: "Madang Airport",
    country: "PG"
  },
  {
    city: "Mount Hagen",
    iata: "HGU",
    name: "Mount Hagen Kagamuga Airport",
    country: "PG"
  },
  {
    city: "Mindik",
    iata: "MXK",
    name: "Mindik Airport",
    country: "PG"
  },
  {
    city: "Makini",
    iata: "MPG",
    name: "Makini Airport",
    country: "PG"
  },
  {
    city: "Mougulu",
    iata: "GUV",
    name: "Mougulu Airport",
    country: "PG"
  },
  {
    city: "Mendi",
    iata: "MDU",
    name: "Mendi Airport",
    country: "PG"
  },
  {
    city: "Manus Island",
    iata: "MAS",
    name: "Momote Airport",
    country: "PG"
  },
  {
    city: "Malalaua",
    iata: "MLQ",
    name: "Malalaua Airport",
    country: "PG"
  },
  {
    city: "Malam",
    iata: "MQO",
    name: "Malam Airport",
    country: "PG"
  },
  {
    city: "Moro",
    iata: "MXH",
    name: "Moro Airport",
    country: "PG"
  },
  {
    city: "Misima Island",
    iata: "MIS",
    name: "Misima Island Airport",
    country: "PG"
  },
  {
    city: "Babase Island",
    iata: "MKN",
    name: "Malekolon Airport",
    country: "PG"
  },
  {
    city: "Marawaka",
    iata: "MWG",
    name: "Marawaka Airport",
    country: "PG"
  },
  {
    city: "Tatau Island",
    iata: "MPU",
    name: "Mapua(Mabua) Airport",
    country: "PG"
  },
  {
    city: "Gwarawon",
    iata: "NKN",
    name: "Nankina Airport",
    country: "PG"
  },
  {
    city: "Kanabea",
    iata: "KEX",
    name: "Kanabea Airport",
    country: "PG"
  },
  {
    city: "Nadunumu",
    iata: "NDN",
    name: "Nadunumu Airport",
    country: "PG"
  },
  {
    city: "Aua Island",
    iata: "AUI",
    name: "Aua Island Airport",
    country: "PG"
  },
  {
    city: "Negarbo",
    iata: "GBF",
    name: "Negarbo(Negabo) Airport",
    country: "PG"
  },
  {
    city: "Manguna",
    iata: "MFO",
    name: "Manguna Airport",
    country: "PG"
  },
  {
    city: "Nuguria Island",
    iata: "NUG",
    name: "Nuguria Airstrip",
    country: "PG"
  },
  {
    city: "Namudi",
    iata: "NDI",
    name: "Namudi Airport",
    country: "PG"
  },
  {
    city: "Kasonombe",
    iata: "KSB",
    name: "Kasonombe Airport",
    country: "PG"
  },
  {
    city: "Kandep",
    iata: "KDP",
    name: "Kandep Airport",
    country: "PG"
  },
  {
    city: "Namane",
    iata: "NMN",
    name: "Nomane Airport",
    country: "PG"
  },
  {
    city: "Bunsil - Umboi Island",
    iata: "BXZ",
    name: "Bunsil Airport",
    country: "PG"
  },
  {
    city: "Nuku",
    iata: "UKU",
    name: "Nuku Airport",
    country: "PG"
  },
  {
    city: "Namatanai",
    iata: "ATN",
    name: "Namatanai Airport",
    country: "PG"
  },
  {
    city: "Nambaiyufa",
    iata: "NBA",
    name: "Nambaiyufa Airport",
    country: "PG"
  },
  {
    city: "Lae",
    iata: "LAE",
    name: "Nadzab Tomodachi International Airport",
    country: "PG"
  },
  {
    city: "Obo",
    iata: "OBX",
    name: "Obo Airport",
    country: "PG"
  },
  {
    city: "Konge",
    iata: "KGB",
    name: "Konge Airport",
    country: "PG"
  },
  {
    city: "Okao",
    iata: "OKV",
    name: "Okao Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "OGE",
    name: "Ogeranang Airport",
    country: "PG"
  },
  {
    city: "Oksapmin",
    iata: "OKP",
    name: "Oksapmin Airport",
    country: "PG"
  },
  {
    city: "Komako",
    iata: "HOC",
    name: "Komako Airport",
    country: "PG"
  },
  {
    city: "Kol",
    iata: "KQL",
    name: "Kol Airport",
    country: "PG"
  },
  {
    city: "Omora",
    iata: "OSE",
    name: "Omora Airport",
    country: "PG"
  },
  {
    city: "Komo",
    iata: "KOM",
    name: "Komo-Manda Airport",
    country: "PG"
  },
  {
    city: "Kosipe Mission",
    iata: "KSP",
    name: "Kosipe Airport",
    country: "PG"
  },
  {
    city: "Komaio",
    iata: "KCJ",
    name: "Komaio Airport",
    country: "PG"
  },
  {
    city: "Olsobip",
    iata: "OLQ",
    name: "Olsobip Airport",
    country: "PG"
  },
  {
    city: "Koroba",
    iata: "KDE",
    name: "Koroba Airport",
    country: "PG"
  },
  {
    city: "Maitanakunai",
    iata: "OPB",
    name: "Open Bay Airport",
    country: "PG"
  },
  {
    city: "Paiela",
    iata: "PLE",
    name: "Paiela Airport",
    country: "PG"
  },
  {
    city: "Pangoa",
    iata: "PGB",
    name: "Pangoa Airport",
    country: "PG"
  },
  {
    city: "Pindiu",
    iata: "PDI",
    name: "Pindiu Airport",
    country: "PG"
  },
  {
    city: "April River",
    iata: "APR",
    name: "April River Airport",
    country: "PG"
  },
  {
    city: "Pangia",
    iata: "PGN",
    name: "Pangia Airport",
    country: "PG"
  },
  {
    city: "Pimaga",
    iata: "PMP",
    name: "Pimaga Airport",
    country: "PG"
  },
  {
    city: "Mapoda",
    iata: "MPF",
    name: "Mapoda Airport",
    country: "PG"
  },
  {
    city: "Pumani",
    iata: "PMN",
    name: "Pumani Airport",
    country: "PG"
  },
  {
    city: "Puri",
    iata: "WLU",
    name: "Walluanda Airport",
    country: "PG"
  },
  {
    city: "Port Moresby",
    iata: "POM",
    name: "Port Moresby Jacksons International Airport",
    country: "PG"
  },
  {
    city: "Amboin",
    iata: "KRJ",
    name: "Karawari Airstrip",
    country: "PG"
  },
  {
    city: "Tumolbil",
    iata: "TLP",
    name: "Tumolbil Airport",
    country: "PG"
  },
  {
    city: "Sopu",
    iata: "SPH",
    name: "Sopu Airport",
    country: "PG"
  },
  {
    city: "Onange Mission",
    iata: "ONB",
    name: "Ononge Airport",
    country: "PG"
  },
  {
    city: "Sialum",
    iata: "SXA",
    name: "Sialum Airport",
    country: "PG"
  },
  {
    city: "Kira",
    iata: "KIQ",
    name: "Kira Airport",
    country: "PG"
  },
  {
    city: "Rabaraba",
    iata: "RBP",
    name: "Raba Raba Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "RMN",
    name: "Rumginae Airport",
    country: "PG"
  },
  {
    city: "Karimui",
    iata: "KMR",
    name: "Karimui Airport",
    country: "PG"
  },
  {
    city: "Yule Island",
    iata: "RKU",
    name: "Kairuku Airport",
    country: "PG"
  },
  {
    city: "Maramuni",
    iata: "MWI",
    name: "Maramuni Airport",
    country: "PG"
  },
  {
    city: "Kakoro",
    iata: "KOR",
    name: "Kakoro(Koroko) Airstrip",
    country: "PG"
  },
  {
    city: "May River",
    iata: "MRH",
    name: "May River Airstrip",
    country: "PG"
  },
  {
    city: "nan",
    iata: "SBE",
    name: "Suabi Airport",
    country: "PG"
  },
  {
    city: "Saidor",
    iata: "SDI",
    name: "Saidor Airport",
    country: "PG"
  },
  {
    city: "Simberi Island",
    iata: "NIS",
    name: "Simberi Airport",
    country: "PG"
  },
  {
    city: "Safia",
    iata: "SFU",
    name: "Safia Airport",
    country: "PG"
  },
  {
    city: "Sila Mission",
    iata: "SIL",
    name: "Sila Airport",
    country: "PG"
  },
  {
    city: "Sabah",
    iata: "SBV",
    name: "Sabah Airport",
    country: "PG"
  },
  {
    city: "Simbai",
    iata: "SIM",
    name: "Simbai Airport",
    country: "PG"
  },
  {
    city: "Sengapi",
    iata: "SGK",
    name: "Sengapi Airstrip",
    country: "PG"
  },
  {
    city: "Sehulea",
    iata: "SXH",
    name: "Sehulea Airport",
    country: "PG"
  },
  {
    city: "Selbang",
    iata: "SBC",
    name: "Selbang Airport",
    country: "PG"
  },
  {
    city: "Sapmanga",
    iata: "SMH",
    name: "Sapmanga Airport",
    country: "PG"
  },
  {
    city: "Sepik Plains",
    iata: "SPV",
    name: "Sepik Plains Airport",
    country: "PG"
  },
  {
    city: "Sasereme",
    iata: "TDS",
    name: "Sasereme Airport",
    country: "PG"
  },
  {
    city: "Suki",
    iata: "SKC",
    name: "Suki Airport",
    country: "PG"
  },
  {
    city: "Sauren",
    iata: "SXW",
    name: "Sauren Airport",
    country: "PG"
  },
  {
    city: "Satwag",
    iata: "SWG",
    name: "Satwag Airport",
    country: "PG"
  },
  {
    city: "Masa",
    iata: "MBV",
    name: "Masa Airport",
    country: "PG"
  },
  {
    city: "Tari",
    iata: "TIZ",
    name: "Tari Airport",
    country: "PG"
  },
  {
    city: "Tabubil",
    iata: "TBG",
    name: "Tabubil Airport",
    country: "PG"
  },
  {
    city: "Telefomin",
    iata: "TFM",
    name: "Telefomin Airport",
    country: "PG"
  },
  {
    city: "Tetebedi",
    iata: "TDB",
    name: "Tetebedi Airport",
    country: "PG"
  },
  {
    city: "Sudest Island",
    iata: "TGL",
    name: "Tagula Airport",
    country: "PG"
  },
  {
    city: "Tifalmin",
    iata: "TFB",
    name: "Tifalmin Airport",
    country: "PG"
  },
  {
    city: "Tapini",
    iata: "TPI",
    name: "Tapini Airport",
    country: "PG"
  },
  {
    city: "Kokopo",
    iata: "RAB",
    name: "Tokua Airport",
    country: "PG"
  },
  {
    city: "Tekin",
    iata: "TKW",
    name: "Tekin Airport",
    country: "PG"
  },
  {
    city: "Kamberatoro Mission",
    iata: "KDQ",
    name: "Kamberatoro Airport",
    country: "PG"
  },
  {
    city: "Teptep",
    iata: "TEP",
    name: "Tep Tep Airport",
    country: "PG"
  },
  {
    city: "Tarabo",
    iata: "TBQ",
    name: "Tarabo Airport",
    country: "PG"
  },
  {
    city: "Tsewi",
    iata: "TSW",
    name: "Tsewi Airport",
    country: "PG"
  },
  {
    city: "Tarakbits",
    iata: "TRJ",
    name: "Tarakbits Airport",
    country: "PG"
  },
  {
    city: "Tufi",
    iata: "TFI",
    name: "Tufi Airport",
    country: "PG"
  },
  {
    city: "Timbunke",
    iata: "TBE",
    name: "Timbunke Airport",
    country: "PG"
  },
  {
    city: "Tawa",
    iata: "TWY",
    name: "Tawa Airport",
    country: "PG"
  },
  {
    city: "Terapo Mission",
    iata: "TEO",
    name: "Terapo Airport",
    country: "PG"
  },
  {
    city: "Tekadu",
    iata: "TKB",
    name: "Tekadu Airport",
    country: "PG"
  },
  {
    city: "Umba",
    iata: "UMC",
    name: "Umba Airport",
    country: "PG"
  },
  {
    city: "Uroubi",
    iata: "URU",
    name: "Uroubi Airport",
    country: "PG"
  },
  {
    city: "Buin",
    iata: "UBI",
    name: "Buin Airport",
    country: "PG"
  },
  {
    city: "Aumo",
    iata: "AUV",
    name: "Aumo Airport",
    country: "PG"
  },
  {
    city: "Gulgubip",
    iata: "GLP",
    name: "Gulgubip Airport",
    country: "PG"
  },
  {
    city: "Upiara",
    iata: "UPR",
    name: "Upiara Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "KUX",
    name: "Kuyol Airport",
    country: "PG"
  },
  {
    city: "Uvol",
    iata: "UVO",
    name: "Uvol Airport",
    country: "PG"
  },
  {
    city: "Talasea",
    iata: "TLW",
    name: "Talasea Airport",
    country: "PG"
  },
  {
    city: "Torembi",
    iata: "TCJ",
    name: "Torembi Airport",
    country: "PG"
  },
  {
    city: "Vanimo",
    iata: "VAI",
    name: "Vanimo Airport",
    country: "PG"
  },
  {
    city: "Tonu",
    iata: "TON",
    name: "Tonu Airport",
    country: "PG"
  },
  {
    city: "Wuvulu Island",
    iata: "WUV",
    name: "Wuvulu Island Airport",
    country: "PG"
  },
  {
    city: "Wabo",
    iata: "WAO",
    name: "Wabo Airport",
    country: "PG"
  },
  {
    city: "Wantoat",
    iata: "WTT",
    name: "Wantoat Airport",
    country: "PG"
  },
  {
    city: "Wapenamanda",
    iata: "WBM",
    name: "Wapenamanda Airport",
    country: "PG"
  },
  {
    city: "Wavoi Falls",
    iata: "WAJ",
    name: "Wawoi Falls Airport",
    country: "PG"
  },
  {
    city: "Wanigela",
    iata: "AGL",
    name: "Wanigela Airport",
    country: "PG"
  },
  {
    city: "Wanuma",
    iata: "WNU",
    name: "Wanuma Airport",
    country: "PG"
  },
  {
    city: "Wapolu",
    iata: "WBC",
    name: "Wapolu Airport",
    country: "PG"
  },
  {
    city: "Wewak",
    iata: "WWK",
    name: "Wewak International Airport",
    country: "PG"
  },
  {
    city: "Wonenara",
    iata: "WOA",
    name: "Wonenara Airport",
    country: "PG"
  },
  {
    city: "Wakunai",
    iata: "WKN",
    name: "Wakunai Airport",
    country: "PG"
  },
  {
    city: "Wasu",
    iata: "WSU",
    name: "Wasu Airport",
    country: "PG"
  },
  {
    city: "Fatima Mission",
    iata: "WTP",
    name: "Woitape Airport",
    country: "PG"
  },
  {
    city: "Wau",
    iata: "WUG",
    name: "Wau Airport",
    country: "PG"
  },
  {
    city: "Yeva",
    iata: "YVD",
    name: "Yeva Airport",
    country: "PG"
  },
  {
    city: "Sim",
    iata: "SMJ",
    name: "Sim Airport",
    country: "PG"
  },
  {
    city: "Tol",
    iata: "TLO",
    name: "Tol Airport",
    country: "PG"
  },
  {
    city: "Wipim",
    iata: "WPM",
    name: "Wipim Airport",
    country: "PG"
  },
  {
    city: "Weam",
    iata: "WEP",
    name: "Weam Airport",
    country: "PG"
  },
  {
    city: "Pottuvil",
    iata: "AYY",
    name: "Arugam Bay SPB",
    country: "Sri Lanka"
  },
  {
    city: "Yalumet",
    iata: "KYX",
    name: "Yalumet Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "YEQ",
    name: "Yenkis(Yankisa) Airport",
    country: "PG"
  },
  {
    city: "Tinboli",
    iata: "TCK",
    name: "Tinboli Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "LNF",
    name: "Munbil Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "RAX",
    name: "Oram Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "KPE",
    name: "Yapsiei Airport",
    country: "PG"
  },
  {
    city: "Yasuru",
    iata: "KSX",
    name: "Yasuru Airport",
    country: "PG"
  },
  {
    city: "Zenag",
    iata: "ZEN",
    name: "Zenag Airport",
    country: "PG"
  },
  {
    city: "Silur Mission",
    iata: "SWR",
    name: "Silur Airport",
    country: "PG"
  },
  {
    city: "Wasum",
    iata: "WUM",
    name: "Wasum Airport",
    country: "PG"
  },
  {
    city: "Sissano",
    iata: "SIZ",
    name: "Sissano Airport",
    country: "PG"
  },
  {
    city: "Ossima",
    iata: "OSG",
    name: "Ossima Airport",
    country: "PG"
  },
  {
    city: "Zabrat",
    iata: "ZXT",
    name: "Zabrat Airport",
    country: "AZ"
  },
  {
    city: "Supai Village",
    iata: "HAE",
    name: "Lava Falls Heliport",
    country: "United States"
  },
  {
    city: "nan",
    iata: "AZB",
    name: "Amazon Bay Airport",
    country: "PG"
  },
  {
    city: "Unea Island",
    iata: "BAJ",
    name: "Bali Airport",
    country: "PG"
  },
  {
    city: "Benguera Island",
    iata: "BCW",
    name: "Benguera Island Airport",
    country: "MZ"
  },
  {
    city: "Bickerton Island",
    iata: "BCZ",
    name: "Milyakburra Airport",
    country: "Australia"
  },
  {
    city: "Bezmer",
    iata: "JAM",
    name: "Bezmer Air Base",
    country: "BG"
  },
  {
    city: "Aasiaat",
    iata: "JEG",
    name: "Aasiaat Airport",
    country: "GL"
  },
  {
    city: "Aappilattoq",
    iata: "AOQ",
    name: "Aappilattoq Heliport",
    country: "GL"
  },
  {
    city: "Tasiilaq",
    iata: "AGM",
    name: "Tasiilaq Heliport",
    country: "GL"
  },
  {
    city: "Alluitsup Paa",
    iata: "LLU",
    name: "Alluitsup Paa Heliport",
    country: "GL"
  },
  {
    city: "Aappilattoq",
    iata: "QUV",
    name: "Aappilattoq Heliport",
    country: "GL"
  },
  {
    city: "Arsuk",
    iata: "JRK",
    name: "Arsuk Heliport",
    country: "GL"
  },
  {
    city: "Ammassivik",
    iata: "QUW",
    name: "Ammassivik Heliport",
    country: "GL"
  },
  {
    city: "Attu",
    iata: "QGQ",
    name: "Attu Heliport",
    country: "GL"
  },
  {
    city: "Narsarsuaq",
    iata: "UAK",
    name: "Narsarsuaq Airport",
    country: "GL"
  },
  {
    city: "Qasigiannguit",
    iata: "JCH",
    name: "Qasigiannguit Heliport",
    country: "GL"
  },
  {
    city: "Neerlerit Inaat",
    iata: "CNP",
    name: "Neerlerit Inaat Airport",
    country: "GL"
  },
  {
    city: "Eqalugaarsuit",
    iata: "QFG",
    name: "Eqalugaarsuit Heliport",
    country: "GL"
  },
  {
    city: "Narsarmijit",
    iata: "QFN",
    name: "Narsarmijit Heliport",
    country: "GL"
  },
  {
    city: "Kangilinnguit",
    iata: "JGR",
    name: "Kangilinnguit Heliport",
    country: "GL"
  },
  {
    city: "Nuuk",
    iata: "GOH",
    name: "Nuuk International Airport",
    country: "GL"
  },
  {
    city: "Qeqertarsuaq",
    iata: "JGO",
    name: "Qeqertarsuaq Heliport",
    country: "GL"
  },
  {
    city: "Ikerasak",
    iata: "IKE",
    name: "Ikerasak Heliport",
    country: "GL"
  },
  {
    city: "Iginniarfik",
    iata: "QFI",
    name: "Iginniarfik Heliport",
    country: "GL"
  },
  {
    city: "Ikerassaarsuk",
    iata: "QRY",
    name: "Ikerassaarsuk Heliport",
    country: "GL"
  },
  {
    city: "Ilimanaq",
    iata: "XIQ",
    name: "Ilimanaq Heliport",
    country: "GL"
  },
  {
    city: "Innarsuit",
    iata: "IUI",
    name: "Innarsuit Heliport",
    country: "GL"
  },
  {
    city: "Isortoq",
    iata: "IOQ",
    name: "Isortoq Heliport",
    country: "GL"
  },
  {
    city: "Ikamiut",
    iata: "QJI",
    name: "Ikamiut Heliport",
    country: "GL"
  },
  {
    city: "Qaqortoq",
    iata: "JJU",
    name: "Qaqortoq Heliport",
    country: "GL"
  },
  {
    city: "Ilulissat",
    iata: "JAV",
    name: "Ilulissat Airport",
    country: "GL"
  },
  {
    city: "Kangaatsiaq",
    iata: "QPW",
    name: "Kangaatsiaq Heliport",
    country: "GL"
  },
  {
    city: "Kulusuk",
    iata: "KUS",
    name: "Kulusuk Airport",
    country: "GL"
  },
  {
    city: "Kuummiut",
    iata: "KUZ",
    name: "Kuummiut Heliport",
    country: "GL"
  },
  {
    city: "Kullorsuaq",
    iata: "KHQ",
    name: "Kullorsuaq Heliport",
    country: "GL"
  },
  {
    city: "Kangersuatsiaq",
    iata: "KGQ",
    name: "Kangersuatsiaq Heliport",
    country: "GL"
  },
  {
    city: "Kitsissuarsuit",
    iata: "QJE",
    name: "Kitsissuarsuit Heliport",
    country: "GL"
  },
  {
    city: "Illorsuit",
    iata: "IOT",
    name: "Illorsuit Heliport",
    country: "GL"
  },
  {
    city: "Maniitsoq",
    iata: "JSU",
    name: "Maniitsoq Airport",
    country: "GL"
  },
  {
    city: "Nanortalik",
    iata: "JNN",
    name: "Nanortalik Heliport",
    country: "GL"
  },
  {
    city: "Nuugaatsiaq",
    iata: "JUU",
    name: "Nuugaatsiaq Heliport",
    country: "GL"
  },
  {
    city: "Narsaq",
    iata: "JNS",
    name: "Narsaq Heliport",
    country: "GL"
  },
  {
    city: "Niaqornat",
    iata: "NIQ",
    name: "Niaqornat Heliport",
    country: "GL"
  },
  {
    city: "Nuussuaq",
    iata: "NSQ",
    name: "Nuussuaq Heliport",
    country: "GL"
  },
  {
    city: "Paamiut",
    iata: "JFR",
    name: "Paamiut Airport",
    country: "GL"
  },
  {
    city: "Qeqertaq",
    iata: "PQT",
    name: "Qeqertaq Heliport",
    country: "GL"
  },
  {
    city: "Qaanaaq",
    iata: "NAQ",
    name: "Qaanaaq Airport",
    country: "GL"
  },
  {
    city: "Qassimiut",
    iata: "QJH",
    name: "Qassimiut Heliport",
    country: "GL"
  },
  {
    city: "Ittoqqortoormiit",
    iata: "OBY",
    name: "Ittoqqortoormiit Heliport",
    country: "GL"
  },
  {
    city: "Kangerlussuaq",
    iata: "SFJ",
    name: "Kangerlussuaq International Airport",
    country: "GL"
  },
  {
    city: "Sermiligaaq",
    iata: "SGG",
    name: "Sermiligaaq Heliport",
    country: "GL"
  },
  {
    city: "Siorapaluk",
    iata: "SRK",
    name: "Siorapaluk Heliport",
    country: "GL"
  },
  {
    city: "Saarloq",
    iata: "QOQ",
    name: "Saarloq Heliport",
    country: "GL"
  },
  {
    city: "Sisimiut",
    iata: "JHS",
    name: "Sisimiut Airport",
    country: "GL"
  },
  {
    city: "Saattut",
    iata: "SAE",
    name: "Saattut Heliport",
    country: "GL"
  },
  {
    city: "Savissivik",
    iata: "SVR",
    name: "Savissivik Heliport",
    country: "GL"
  },
  {
    city: "Tasiusaq",
    iata: "TQA",
    name: "Tasiusaq Heliport",
    country: "GL"
  },
  {
    city: "Pituffik",
    iata: "THU",
    name: "Pituffik Space Base",
    country: "GL"
  },
  {
    city: "Tiniteqilaaq",
    iata: "TQI",
    name: "Tiniteqilaaq Heliport",
    country: "GL"
  },
  {
    city: "Tasiusak",
    iata: "XEQ",
    name: "Tasiusaq Heliport",
    country: "GL"
  },
  {
    city: "Upernavik",
    iata: "JUV",
    name: "Upernavik Airport",
    country: "GL"
  },
  {
    city: "Uummannaq",
    iata: "UMD",
    name: "Uummannaq Heliport",
    country: "GL"
  },
  {
    city: "Uummannaq",
    iata: "JQA",
    name: "Qaarsut Airport",
    country: "GL"
  },
  {
    city: "Ukkusissat",
    iata: "JUK",
    name: "Ukkusissat Heliport",
    country: "GL"
  },
  {
    city: "Ensenada",
    iata: "BHL",
    name: "Bahía de los Ángeles Airport",
    country: "Mexico"
  },
  {
    city: "Brighton Downs",
    iata: "BHT",
    name: "Brighton Downs Airport",
    country: "Australia"
  },
  {
    city: "Akureyri",
    iata: "AEY",
    name: "Akureyri International Airport",
    country: "IS"
  },
  {
    city: "Bildudalur",
    iata: "BIU",
    name: "Bildudalur Airport",
    country: "IS"
  },
  {
    city: "Borgarfjörður eystri",
    iata: "BGJ",
    name: "Borgarfjörður eystri Airport",
    country: "IS"
  },
  {
    city: "Blönduós",
    iata: "BLO",
    name: "Blönduós Airport",
    country: "IS"
  },
  {
    city: "Breiðdalsvík",
    iata: "BXV",
    name: "Breiðdalsvík Airport",
    country: "IS"
  },
  {
    city: "Djúpivogur",
    iata: "DJU",
    name: "Djúpivogur Airport",
    country: "IS"
  },
  {
    city: "Egilsstaðir",
    iata: "EGS",
    name: "Egilsstaðir Airport",
    country: "IS"
  },
  {
    city: "Fagurhólsmýri",
    iata: "FAG",
    name: "Fagurhólsmýri Airport",
    country: "IS"
  },
  {
    city: "Grundarfjörður",
    iata: "GUU",
    name: "Grundarfjörður Airport",
    country: "IS"
  },
  {
    city: "Gjögur",
    iata: "GJR",
    name: "Gjögur Airport",
    country: "IS"
  },
  {
    city: "Grímsey/Sandvík",
    iata: "GRY",
    name: "Grímsey Airport",
    country: "IS"
  },
  {
    city: "Hólmavík",
    iata: "HVK",
    name: "Hólmavík Airport",
    country: "IS"
  },
  {
    city: "Höfn",
    iata: "HFN",
    name: "Hornafjörður Airport",
    country: "IS"
  },
  {
    city: "Húsavík",
    iata: "HZK",
    name: "Húsavík Airport",
    country: "IS"
  },
  {
    city: "Ísafjörður",
    iata: "IFJ",
    name: "Ísafjörður Airport",
    country: "IS"
  },
  {
    city: "Reykjavík",
    iata: "KEF",
    name: "Keflavik International Airport",
    country: "IS"
  },
  {
    city: "Kópasker",
    iata: "OPA",
    name: "Kópasker Airport",
    country: "IS"
  },
  {
    city: "Sauðárkrókur",
    iata: "SAK",
    name: "Sauðárkrókur Airport",
    country: "IS"
  },
  {
    city: "Norðfjörður",
    iata: "NOR",
    name: "Norðfjörður Airport",
    country: "IS"
  },
  {
    city: "Reykhólar",
    iata: "RHA",
    name: "Reykhólar Airport",
    country: "IS"
  },
  {
    city: "Rif",
    iata: "OLI",
    name: "Rif Airport",
    country: "IS"
  },
  {
    city: "Raufarhöfn",
    iata: "RFN",
    name: "Raufarhöfn Airport",
    country: "IS"
  },
  {
    city: "Reykjavík",
    iata: "RKV",
    name: "Reykjavík Domestic Airport",
    country: "IS"
  },
  {
    city: "Myvatn",
    iata: "MVA",
    name: "Mývatn Airport",
    country: "IS"
  },
  {
    city: "Siglufjörður",
    iata: "SIJ",
    name: "Siglufjörður Airport",
    country: "IS"
  },
  {
    city: "Stykkishólmur",
    iata: "SYK",
    name: "Stykkishólmur Airport",
    country: "IS"
  },
  {
    city: "Þingeyri",
    iata: "TEY",
    name: "Þingeyri Airport",
    country: "IS"
  },
  {
    city: "Þórshöfn",
    iata: "THO",
    name: "Þórshöfn Airport",
    country: "IS"
  },
  {
    city: "Vestmannaeyjar",
    iata: "VEY",
    name: "Vestmannaeyjar Airport",
    country: "IS"
  },
  {
    city: "Vopnafjörður",
    iata: "VPN",
    name: "Vopnafjörður Airport",
    country: "IS"
  },
  {
    city: "Baleela Base Camp",
    iata: "BJE",
    name: "Baleela Airport",
    country: "SD"
  },
  {
    city: "Bahja",
    iata: "BJQ",
    name: "Bahja Airport",
    country: "OM"
  },
  {
    city: "Bentota",
    iata: "BJT",
    name: "Bentota River Waterdrome",
    country: "Sri Lanka"
  },
  {
    city: "Prishtina",
    iata: "PRN",
    name: "Priština Adem Jashari International Airport",
    country: "XK"
  },
  {
    city: "Bamburi",
    iata: "BMQ",
    name: "Bamburi Airport",
    country: "Kenya"
  },
  {
    city: "Baranof",
    iata: "BNF",
    name: "Baranof Warm Springs Float and Seaplane Base",
    country: "United States"
  },
  {
    city: "Boana",
    iata: "BNV",
    name: "Boana Airport",
    country: "PG"
  },
  {
    city: "Baures",
    iata: "BVL",
    name: "Baures Airport",
    country: "BO"
  },
  {
    city: "Boang Island",
    iata: "BOV",
    name: "Boang Airport",
    country: "PG"
  },
  {
    city: "Gustavus",
    iata: "BQV",
    name: "Bartlett Cove Seaplane Base",
    country: "United States"
  },
  {
    city: "Cajazeiras",
    iata: "CJZ",
    name: "Pedro Vieira Moreira Airport",
    country: "Brazil"
  },
  {
    city: "Vitória da Conquista",
    iata: "VDC",
    name: "Glauber de Andrade Rocha Airport",
    country: "Brazil"
  },
  {
    city: "Santana do Araguaia",
    iata: "CMP",
    name: "Santana do Araguaia Airport",
    country: "Brazil"
  },
  {
    city: "Arraias",
    iata: "AAI",
    name: "Arraias Airport",
    country: "Brazil"
  },
  {
    city: "Itabuna",
    iata: "ITN",
    name: "Tertuliano Guedes de Pinho Airport",
    country: "Brazil"
  },
  {
    city: "Leopoldina",
    iata: "LEP",
    name: "Leopoldina Airport",
    country: "Brazil"
  },
  {
    city: "Cururupu",
    iata: "CPU",
    name: "Cururupu Airport",
    country: "Brazil"
  },
  {
    city: "Santa Vitória do Palmar",
    iata: "CTQ",
    name: "Santa Vitória do Palmar Airport",
    country: "Brazil"
  },
  {
    city: "Alto Parnaíba",
    iata: "APY",
    name: "Alto Parnaíba Airport",
    country: "Brazil"
  },
  {
    city: "Juruena",
    iata: "JRN",
    name: "Juruena Airport",
    country: "Brazil"
  },
  {
    city: "Santa Terezinha",
    iata: "STZ",
    name: "Santa Terezinha Airport",
    country: "Brazil"
  },
  {
    city: "Vila Bela Da Santíssima Trindade",
    iata: "MTG",
    name: "Vila Bela da Santíssima Trindade Airport",
    country: "Brazil"
  },
  {
    city: "Alenquer",
    iata: "ALT",
    name: "Alenquer Municipal Airport",
    country: "Brazil"
  },
  {
    city: "Bimini",
    iata: "NSB",
    name: "Bimini North Seaplane Base",
    country: "BS"
  },
  {
    city: "Besakoa",
    iata: "BSV",
    name: "Besakoa Airport",
    country: "MG"
  },
  {
    city: "Betong",
    iata: "BTZ",
    name: "Betong International Airport",
    country: "Thailand"
  },
  {
    city: "Hukuntsi",
    iata: "HUK",
    name: "Hukuntsi Airport",
    country: "BW"
  },
  {
    city: "nan",
    iata: "BWJ",
    name: "Bawan Airport",
    country: "PG"
  },
  {
    city: "Nanuya Lailai Island",
    iata: "BXL",
    name: "Blue Lagoon Seaplane Base",
    country: "FJ"
  },
  {
    city: "Orsha",
    iata: "TXC",
    name: "Orsha Airport - Balbasovo Air Base",
    country: "BY"
  },
  {
    city: "Boundary",
    iata: "BYA",
    name: "Boundary Airport",
    country: "United States"
  },
  {
    city: "Beliyela",
    iata: "BYL",
    name: "Bella Yella Airport",
    country: "LR"
  },
  {
    city: "Colombo",
    iata: "BYV",
    name: "Beira Lake Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Belmopan",
    iata: "BCV",
    name: "Hector Silva Airstrip",
    country: "BZ"
  },
  {
    city: "Big Creek",
    iata: "BGK",
    name: "Big Creek Airport",
    country: "BZ"
  },
  {
    city: "Caye Caulker",
    iata: "CUK",
    name: "Caye Caulker Airport",
    country: "BZ"
  },
  {
    city: "Caye Chapel",
    iata: "CYC",
    name: "Caye Chapel Airport",
    country: "BZ"
  },
  {
    city: "Corozal",
    iata: "CZH",
    name: "Corozal Airport",
    country: "BZ"
  },
  {
    city: "Dangriga",
    iata: "DGA",
    name: "Dangriga Airport",
    country: "BZ"
  },
  {
    city: "Independence",
    iata: "INB",
    name: "Independence Airport",
    country: "BZ"
  },
  {
    city: "Melinda",
    iata: "MDB",
    name: "Melinda Airport",
    country: "BZ"
  },
  {
    city: "Orange Walk",
    iata: "ORZ",
    name: "H.E Alfredo Martinez (Tower Hill) Airstrip",
    country: "BZ"
  },
  {
    city: "Punta Gorda",
    iata: "PND",
    name: "Punta Gorda Airport",
    country: "BZ"
  },
  {
    city: "Sartaneja",
    iata: "SJX",
    name: "Sartaneja Airport",
    country: "BZ"
  },
  {
    city: "San Pedro",
    iata: "SPR",
    name: "John Greif II Airport",
    country: "BZ"
  },
  {
    city: "Spanish Lookout",
    iata: "SQS",
    name: "Matthew Spain Airport",
    country: "BZ"
  },
  {
    city: "Santa Cruz",
    iata: "STU",
    name: "Santa Cruz Airport",
    country: "BZ"
  },
  {
    city: "Silver Creek",
    iata: "SVK",
    name: "Silver Creek Airport",
    country: "BZ"
  },
  {
    city: "Belize City",
    iata: "TZA",
    name: "Sir Barry Bowen Municipal Airport",
    country: "BZ"
  },
  {
    city: "Bazaruto Island",
    iata: "BZB",
    name: "Bazaruto Island Airport",
    country: "MZ"
  },
  {
    city: "Bemolanga",
    iata: "BZM",
    name: "Bemolanga Airport",
    country: "MG"
  },
  {
    city: "Primrose",
    iata: "PFM",
    name: "Primrose Airport",
    country: "Canada"
  },
  {
    city: "Saglek",
    iata: "YSV",
    name: "Saglek Airport",
    country: "Canada"
  },
  {
    city: "Big Bay",
    iata: "YRR",
    name: "Stuart Island Airstrip",
    country: "Canada"
  },
  {
    city: "Mary River",
    iata: "YMV",
    name: "Mary River Aerodrome",
    country: "Canada"
  },
  {
    city: "Hecate Island",
    iata: "YHC",
    name: "Hakai Passage Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Galiano Island",
    iata: "YMF",
    name: "Montague Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Paradise",
    iata: "PYS",
    name: "Paradise Skypark Airport",
    country: "United States"
  },
  {
    city: "Bedwell Harbour",
    iata: "YBW",
    name: "Bedwell Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Tofino",
    iata: "YTP",
    name: "Tofino Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "West Kelowna",
    iata: "CBA",
    name: "Alpine Heliport",
    country: "Canada"
  },
  {
    city: "Nanaimo",
    iata: "ZNA",
    name: "Nanaimo Harbour Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Trail",
    iata: "YZZ",
    name: "Trail Regional Airport",
    country: "Canada"
  },
  {
    city: "Merritt",
    iata: "YMB",
    name: "Merritt Airport",
    country: "Canada"
  },
  {
    city: "Campbell River",
    iata: "YHH",
    name: "Campbell River Seaplane Base",
    country: "Canada"
  },
  {
    city: "Whistler",
    iata: "YWS",
    name: "Whistler/Green Lake Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Bamfield",
    iata: "YBF",
    name: "Bamfield Seaplane Base",
    country: "Canada"
  },
  {
    city: "Stuart Island",
    iata: "YIG",
    name: "Big Bay Seaplane Base",
    country: "Canada"
  },
  {
    city: "Chilko Lake",
    iata: "CJH",
    name: "Chilko Lake (Tsylos Park Lodge) Airport",
    country: "Canada"
  },
  {
    city: "Sunshine Coast",
    iata: "YPT",
    name: "Pender Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Ocean Falls",
    iata: "ZOF",
    name: "Ocean Falls Seaplane Base",
    country: "Canada"
  },
  {
    city: "Courtenay",
    iata: "YCA",
    name: "Courtenay Airpark",
    country: "Canada"
  },
  {
    city: "Creston",
    iata: "CFQ",
    name: "Creston Valley Regional Airport - Art Sutcliffe Field",
    country: "Canada"
  },
  {
    city: "Anahim Lake",
    iata: "YAA",
    name: "Anahim Lake Airport",
    country: "Canada"
  },
  {
    city: "Douglas Lake",
    iata: "DGF",
    name: "Douglas Lake Airport",
    country: "Canada"
  },
  {
    city: "Albian Village",
    iata: "JHL",
    name: "Fort MacKay/Albian Aerodrome",
    country: "Canada"
  },
  {
    city: "Tahsis",
    iata: "ZTS",
    name: "Tahsis Seaplane Base",
    country: "Canada"
  },
  {
    city: "Duncan",
    iata: "DUQ",
    name: "Duncan Airport",
    country: "Canada"
  },
  {
    city: "Sechelt",
    iata: "YHS",
    name: "Sechelt-Gibsons Airport",
    country: "Canada"
  },
  {
    city: "Kitkatla",
    iata: "YKK",
    name: "Kitkatla Seaplane Base",
    country: "Canada"
  },
  {
    city: "Queen Charlotte",
    iata: "ZQS",
    name: "Queen Charlotte City Seaplane Base",
    country: "Canada"
  },
  {
    city: "Powell River",
    iata: "WPL",
    name: "Powell Lake Seaplane Base",
    country: "Canada"
  },
  {
    city: "Qualicum Beach",
    iata: "XQU",
    name: "Qualicum Beach Airport",
    country: "Canada"
  },
  {
    city: "Port McNeill",
    iata: "YMP",
    name: "Port McNeill Airport",
    country: "Canada"
  },
  {
    city: "Rivers Inlet",
    iata: "YRN",
    name: "Rivers Inlet Seaplane Base",
    country: "Canada"
  },
  {
    city: "Sullivan Bay",
    iata: "YTG",
    name: "Sullivan Bay Seaplane Base",
    country: "Canada"
  },
  {
    city: "Mansons Landing",
    iata: "YMU",
    name: "Mansons Landing Seaplane Base",
    country: "Canada"
  },
  {
    city: "Miners Bay",
    iata: "YAV",
    name: "Mayne Island Seaplane Base",
    country: "Canada"
  },
  {
    city: "Bella Bella",
    iata: "YSX",
    name: "Bella Bella/Shearwater Seaplane Base",
    country: "Canada"
  },
  {
    city: "Salt Spring Island",
    iata: "YGG",
    name: "Ganges Seaplane Base",
    country: "Canada"
  },
  {
    city: "Hartley Bay",
    iata: "YTB",
    name: "Hartley Bay Seaplane Base",
    country: "Canada"
  },
  {
    city: "Cache Creek",
    iata: "YZA",
    name: "Cache Creek-Ashcroft Regional Airport",
    country: "Canada"
  },
  {
    city: "Bella Bella",
    iata: "ZEL",
    name: "Bella Bella (Campbell Island) Airport",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "CBC",
    name: "Cherrabun Airport",
    country: "Australia"
  },
  {
    city: "Port Alberni",
    iata: "YPB",
    name: "Alberni Valley Regional Airport",
    country: "Canada"
  },
  {
    city: "Bob Quinn Lake",
    iata: "YBO",
    name: "Bob Quinn Lake Airport",
    country: "Canada"
  },
  {
    city: "Tungsten",
    iata: "TNS",
    name: "Tungsten (Cantung) Airport",
    country: "Canada"
  },
  {
    city: "Tumbler Ridge",
    iata: "TUX",
    name: "Tumbler Ridge Airport",
    country: "Canada"
  },
  {
    city: "Williams Harbour",
    iata: "YWM",
    name: "Williams Harbour Airport",
    country: "Canada"
  },
  {
    city: "Postville",
    iata: "YSO",
    name: "Postville Airport",
    country: "Canada"
  },
  {
    city: "Black Tickle",
    iata: "YBI",
    name: "Black Tickle Airport",
    country: "Canada"
  },
  {
    city: "Charlottetown",
    iata: "YHG",
    name: "Charlottetown Airport",
    country: "Canada"
  },
  {
    city: "St. Lewis",
    iata: "YFX",
    name: "St. Lewis (Fox Harbour) Airport",
    country: "Canada"
  },
  {
    city: "Port Hope Simpson",
    iata: "YHA",
    name: "Port Hope Simpson Airport",
    country: "Canada"
  },
  {
    city: "Rigolet",
    iata: "YRG",
    name: "Rigolet Airport",
    country: "Canada"
  },
  {
    city: "Kasongo-Lunda",
    iata: "KGN",
    name: "Kasongo-Lunda Airport",
    country: "CD"
  },
  {
    city: "Diavik",
    iata: "DVK",
    name: "Diavik Airport",
    country: "Canada"
  },
  {
    city: "Hope Bay",
    iata: "JOJ",
    name: "Doris Lake",
    country: "Canada"
  },
  {
    city: "Fairview",
    iata: "ZFW",
    name: "Fairview Airport",
    country: "Canada"
  },
  {
    city: "Hinton",
    iata: "YJP",
    name: "Jasper-Hinton Airport",
    country: "Canada"
  },
  {
    city: "Whatì",
    iata: "YLE",
    name: "Whatì Airport",
    country: "Canada"
  },
  {
    city: "Drayton Valley",
    iata: "YDC",
    name: "Drayton Valley Industrial Airport",
    country: "Canada"
  },
  {
    city: "Fort McMurray",
    iata: "NML",
    name: "Fort McMurray / Mildred Lake Airport",
    country: "Canada"
  },
  {
    city: "Conklin",
    iata: "CFM",
    name: "Conklin (Leismer) Airport",
    country: "Canada"
  },
  {
    city: "Kavadja",
    iata: "KWD",
    name: "Kavadja Airport",
    country: "CF"
  },
  {
    city: "Taltheilei Narrows",
    iata: "GSL",
    name: "Taltheilei Narrows Airport",
    country: "Canada"
  },
  {
    city: "Macmillan Pass",
    iata: "XMP",
    name: "Macmillan Pass Airport",
    country: "Canada"
  },
  {
    city: "Great Bear Lake",
    iata: "DAS",
    name: "Great Bear Lake Airport",
    country: "Canada"
  },
  {
    city: "Suncor Energy Site",
    iata: "YFI",
    name: "Fort Mackay / Firebag",
    country: "Canada"
  },
  {
    city: "Donnelly",
    iata: "YOE",
    name: "Donnelly Airport",
    country: "Canada"
  },
  {
    city: "Cheadle",
    iata: "TIL",
    name: "Cheadle Airport",
    country: "Canada"
  },
  {
    city: "Okoyo",
    iata: "OKG",
    name: "Okoyo Airport",
    country: "CG"
  },
  {
    city: "Craig",
    iata: "CGA",
    name: "Craig Seaplane Base",
    country: "United States"
  },
  {
    city: "Casiguran",
    iata: "CGG",
    name: "Casiguran Airport",
    country: "Philippines"
  },
  {
    city: "Kennedy Lake",
    iata: "GHK",
    name: "Gahcho Kue",
    country: "Canada"
  },
  {
    city: "Circle Hot Springs",
    iata: "CHP",
    name: "Circle Hot Springs Airport",
    country: "United States"
  },
  {
    city: "Laurie River",
    iata: "LRQ",
    name: "Laurie River Airport",
    country: "Canada"
  },
  {
    city: "Hatchet Lake",
    iata: "YDJ",
    name: "Hatchet Lake Airport",
    country: "Canada"
  },
  {
    city: "Kasba Lake",
    iata: "YDU",
    name: "Kasba Lake Airport",
    country: "Canada"
  },
  {
    city: "Fort Reliance",
    iata: "YFL",
    name: "Fort Reliance Seaplane Base",
    country: "Canada"
  },
  {
    city: "Cluff Lake",
    iata: "XCL",
    name: "Cluff Lake Airport",
    country: "Canada"
  },
  {
    city: "Knee Lake",
    iata: "YKE",
    name: "Knee Lake Airport",
    country: "Canada"
  },
  {
    city: "Summer Beaver",
    iata: "SUR",
    name: "Summer Beaver Airport",
    country: "Canada"
  },
  {
    city: "Crooked Creek",
    iata: "CKD",
    name: "Crooked Creek Airport",
    country: "United States"
  },
  {
    city: "Tisdale",
    iata: "YTT",
    name: "Tisdale Airport",
    country: "Canada"
  },
  {
    city: "Angling Lake",
    iata: "YAX",
    name: "Wapekeka Airport",
    country: "Canada"
  },
  {
    city: "Wunnumin Lake",
    iata: "WNN",
    name: "Wunnumin Lake Airport",
    country: "Canada"
  },
  {
    city: "Opapimiskan Lake",
    iata: "YBS",
    name: "Opapimiskan Lake Airport",
    country: "Canada"
  },
  {
    city: "North Spirit Lake",
    iata: "YNO",
    name: "North Spirit Lake Airport",
    country: "Canada"
  },
  {
    city: "Crane Island",
    iata: "CKR",
    name: "Crane Island Airstrip",
    country: "United States"
  },
  {
    city: "Cordova",
    iata: "CKU",
    name: "Cordova Municipal Airport",
    country: "United States"
  },
  {
    city: "Obre Lake",
    iata: "YDW",
    name: "North of Sixty Airport",
    country: "Canada"
  },
  {
    city: "Chicken",
    iata: "CKX",
    name: "Chicken Airport",
    country: "United States"
  },
  {
    city: "Cametá",
    iata: "CMT",
    name: "New Cametá Airport",
    country: "Brazil"
  },
  {
    city: "Caia",
    iata: "CMZ",
    name: "Caia Airport",
    country: "MZ"
  },
  {
    city: "Zigong (Gongjing)",
    iata: "ZKL",
    name: "Zigong Fengming Airport",
    country: "China"
  },
  {
    city: "Bazhong",
    iata: "BZX",
    name: "Bazhong Enyang Airport",
    country: "China"
  },
  {
    city: "Shangluo (Danfeng)",
    iata: "DFA",
    name: "Shangluo Airport",
    country: "China"
  },
  {
    city: "Shaoguan",
    iata: "HSC",
    name: "Shaoguan Danxia Airport",
    country: "China"
  },
  {
    city: "Ji'an",
    iata: "JGS",
    name: "Jinggangshan Airport",
    country: "China"
  },
  {
    city: "Xiuzhou, Hangzhou",
    iata: "JNH",
    name: "Jiaxing Nanhu Airport",
    country: "China"
  },
  {
    city: "Hulunbuir",
    iata: "DWS",
    name: "Morin Dawa Banner Airport",
    country: "China"
  },
  {
    city: "Shijiazhuang",
    iata: "LCT",
    name: "Shijiazhuang Luancheng Airport",
    country: "China"
  },
  {
    city: "Wuhan (Hannan)",
    iata: "WHN",
    name: "Wuhan Hannan Municipal Airport",
    country: "China"
  },
  {
    city: "Harbin",
    iata: "PFA",
    name: "Harbin Pingfang Airport",
    country: "China"
  },
  {
    city: "Yantai",
    iata: "PNJ",
    name: "Penglai Shahekou Airport",
    country: "China"
  },
  {
    city: "Binzhou",
    iata: "CBZ",
    name: "Binzhou Dagao General Aviation Airport",
    country: "China"
  },
  {
    city: "Xigazê (Dingri)",
    iata: "DDR",
    name: "Rikaze Dingri Airport",
    country: "China"
  },
  {
    city: "Tashikuergan",
    iata: "HQL",
    name: "Tashikuergan Hongqilafu Airport",
    country: "China"
  },
  {
    city: "Jinhua (Dongyang)",
    iata: "HEW",
    name: "Dongyang Hengdian General Airport",
    country: "China"
  },
  {
    city: "Hangzhou",
    iata: "JDE",
    name: "Jiande Qiandaohu General Airport",
    country: "China"
  },
  {
    city: "Suihua",
    iata: "HLJ",
    name: "Zhaodong Beidahuang General Airport",
    country: "China"
  },
  {
    city: "Taiyuan",
    iata: "TYC",
    name: "Taiyuan Yaocheng Airport",
    country: "China"
  },
  {
    city: "Orku",
    iata: "WRH",
    name: "Wuerhe Airport",
    country: "China"
  },
  {
    city: "Ganzhou",
    iata: "JRJ",
    name: "Ganzhou Ruijin Airport",
    country: "China"
  },
  {
    city: "Burang Town",
    iata: "APJ",
    name: "Ali Pulan Airport",
    country: "China"
  },
  {
    city: "Zhaosu",
    iata: "ZFL",
    name: "Zhaosu Tianma Airport",
    country: "China"
  },
  {
    city: "Yinchuan",
    iata: "YEH",
    name: "Yinchuan Yueyahu Airport",
    country: "China"
  },
  {
    city: "Dehong (Longchuan)",
    iata: "LCS",
    name: "Longchuan Guangsong Airport",
    country: "China"
  },
  {
    city: "Lanping Bai",
    iata: "LFH",
    name: "Lanping Fenghua General Airport",
    country: "China"
  },
  {
    city: "Zhongshan",
    iata: "ZGN",
    name: "Zhongshan Ferry Port",
    country: "China"
  },
  {
    city: "Bozhou",
    iata: "BZJ",
    name: "Bozhou Airport (under construction)",
    country: "China"
  },
  {
    city: "Bailingmiao",
    iata: "BKV",
    name: "Bailing Airport",
    country: "China"
  },
  {
    city: "Hejing",
    iata: "HJB",
    name: "Hejing Bayinbuluke Airport",
    country: "China"
  },
  {
    city: "Otog Front Banner",
    iata: "OTQ",
    name: "Otog Front Banner Oljoq Airport",
    country: "China"
  },
  {
    city: "Qitai",
    iata: "JBK",
    name: "Qitai Jiangbulake Airport",
    country: "China"
  },
  {
    city: "Zhaotong",
    iata: "ZAT",
    name: "Zhaotong Zhaoyang Airport （Not fully opened)",
    country: "China"
  },
  {
    city: "Lishui (Liandu)",
    iata: "LIJ",
    name: "Lishui Airport",
    country: "China"
  },
  {
    city: "Nanchang",
    iata: "YHJ",
    name: "Nanchang Yaohu Airport",
    country: "China"
  },
  {
    city: "Wulan",
    iata: "OTO",
    name: "Otog Banner Wulan Airport",
    country: "China"
  },
  {
    city: "Beijing",
    iata: "NAY",
    name: "Beijing Nanyuan Airport",
    country: "China"
  },
  {
    city: "Bengbu",
    iata: "BFY",
    name: "Bengbu Tenghu Airport",
    country: "China"
  },
  {
    city: "Bearskin Lake",
    iata: "XBE",
    name: "Bearskin Lake Airport",
    country: "Canada"
  },
  {
    city: "Natuashish",
    iata: "YNP",
    name: "Natuashish Airport",
    country: "Canada"
  },
  {
    city: "White River",
    iata: "YWR",
    name: "White River Seaplane Base",
    country: "Canada"
  },
  {
    city: "Parry Sound",
    iata: "YPD",
    name: "Parry Sound Area Municipal Airport",
    country: "Canada"
  },
  {
    city: "Brockville",
    iata: "XBR",
    name: "Brockville - Thousand Islands Regional Tackaberry Airport",
    country: "Canada"
  },
  {
    city: "Kingfisher Lake",
    iata: "KIF",
    name: "Kingfisher Lake Airport",
    country: "Canada"
  },
  {
    city: "La Chorrera",
    iata: "LCR",
    name: "Virgilio Barco Vargas (La Chorrera) Airport",
    country: "Colombia"
  },
  {
    city: "Echo Bay",
    iata: "YEB",
    name: "Bar River Airport",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "CPI",
    name: "Cape Orford Airport",
    country: "PG"
  },
  {
    city: "Frying Pan Island",
    iata: "YSI",
    name: "Parry Sound/Frying Pan Island-Sans Souci Seaplane Base",
    country: "Canada"
  },
  {
    city: "Keewaywin",
    iata: "KEW",
    name: "Keewaywin Airport",
    country: "Canada"
  },
  {
    city: "Cóbano",
    iata: "ACO",
    name: "Cóbano Airport",
    country: "CR"
  },
  {
    city: "Kirby Lake",
    iata: "KFM",
    name: "Kirby Lake Airport",
    country: "Canada"
  },
  {
    city: "Sable Island",
    iata: "YSA",
    name: "Sable Island Airport.",
    country: "Canada"
  },
  {
    city: "Lebel-sur-Quévillon",
    iata: "YLS",
    name: "Lebel-sur-Quevillon Airport",
    country: "Canada"
  },
  {
    city: "Snap Lake Mine",
    iata: "YNX",
    name: "Snap Lake Airport",
    country: "Canada"
  },
  {
    city: "La Sarre",
    iata: "SSQ",
    name: "La Sarre Airport",
    country: "Canada"
  },
  {
    city: "Chisasibi",
    iata: "YKU",
    name: "Chisasibi Airport",
    country: "Canada"
  },
  {
    city: "Tête-à-la-Baleine",
    iata: "ZTB",
    name: "Tête-à-la-Baleine Airport",
    country: "Canada"
  },
  {
    city: "Côte-Nord-du-Golfe-du-Saint-Laurent",
    iata: "ZKG",
    name: "Kégashka Airport",
    country: "Canada"
  },
  {
    city: "Chutes-des-Passes",
    iata: "YWQ",
    name: "Chute-Des-Passes/Lac Margane Seaplane Base",
    country: "Canada"
  },
  {
    city: "Carutapera",
    iata: "CTP",
    name: "Carutapera Airport",
    country: "Brazil"
  },
  {
    city: "Kattiniq",
    iata: "YAU",
    name: "Donaldson Airport",
    country: "Canada"
  },
  {
    city: "Le Golfe-du-Saint-Laurent",
    iata: "ZGS",
    name: "La Romaine Airport",
    country: "Canada"
  },
  {
    city: "Fontanges",
    iata: "YFG",
    name: "Fontanges Airport",
    country: "Canada"
  },
  {
    city: "La Tabatière",
    iata: "ZLT",
    name: "La Tabatière Airport",
    country: "Canada"
  },
  {
    city: "Culion",
    iata: "CUJ",
    name: "Culion Airport",
    country: "Philippines"
  },
  {
    city: "nan",
    iata: "CVL",
    name: "Cape Vogel Airport",
    country: "PG"
  },
  {
    city: "Chitina",
    iata: "CXC",
    name: "Chitina Airport",
    country: "United States"
  },
  {
    city: "Arctic Bay",
    iata: "YAB",
    name: "Arctic Bay Airport",
    country: "Canada"
  },
  {
    city: "Cat Lake",
    iata: "YAC",
    name: "Cat Lake Airport",
    country: "Canada"
  },
  {
    city: "La Grande-3",
    iata: "YAR",
    name: "La Grande-3 Airport",
    country: "Canada"
  },
  {
    city: "Fort Frances",
    iata: "YAG",
    name: "Fort Frances Municipal Airport",
    country: "Canada"
  },
  {
    city: "La Grande-4",
    iata: "YAH",
    name: "La Grande-4 Airport",
    country: "Canada"
  },
  {
    city: "Alert Bay",
    iata: "YAL",
    name: "Alert Bay Airport",
    country: "Canada"
  },
  {
    city: "Sault Ste Marie",
    iata: "YAM",
    name: "Sault Ste Marie Airport",
    country: "Canada"
  },
  {
    city: "Kasabonika",
    iata: "XKS",
    name: "Kasabonika Airport",
    country: "Canada"
  },
  {
    city: "Kangirsuk",
    iata: "YKG",
    name: "Kangirsuk Airport",
    country: "Canada"
  },
  {
    city: "Attawapiskat",
    iata: "YAT",
    name: "Attawapiskat Airport",
    country: "Canada"
  },
  {
    city: "St. Anthony",
    iata: "YAY",
    name: "St. Anthony Airport",
    country: "Canada"
  },
  {
    city: "Tofino",
    iata: "YAZ",
    name: "Tofino / Long Beach Airport",
    country: "Canada"
  },
  {
    city: "Banff",
    iata: "YBA",
    name: "Banff Airport",
    country: "Canada"
  },
  {
    city: "Kugaaruk",
    iata: "YBB",
    name: "Kugaaruk Airport",
    country: "Canada"
  },
  {
    city: "Baie-Comeau",
    iata: "YBC",
    name: "Baie-Comeau Airport",
    country: "Canada"
  },
  {
    city: "Bella Coola",
    iata: "QBC",
    name: "Bella Coola Airport",
    country: "Canada"
  },
  {
    city: "Uranium City",
    iata: "YBE",
    name: "Uranium City Airport",
    country: "Canada"
  },
  {
    city: "Bonnyville",
    iata: "YBY",
    name: "Bonnyville Airport",
    country: "Canada"
  },
  {
    city: "Saguenay",
    iata: "YBG",
    name: "Saguenay-Bagotville Airport",
    country: "Canada"
  },
  {
    city: "Baker Lake",
    iata: "YBK",
    name: "Baker Lake Airport",
    country: "Canada"
  },
  {
    city: "Campbell River",
    iata: "YBL",
    name: "Campbell River Airport",
    country: "Canada"
  },
  {
    city: "Tadoule Lake",
    iata: "XTL",
    name: "Tadoule Lake Airport",
    country: "Canada"
  },
  {
    city: "Brandon",
    iata: "YBR",
    name: "Brandon Municipal Airport",
    country: "Canada"
  },
  {
    city: "Brochet",
    iata: "YBT",
    name: "Brochet Airport",
    country: "Canada"
  },
  {
    city: "Berens River",
    iata: "YBV",
    name: "Berens River Airport",
    country: "Canada"
  },
  {
    city: "Blanc-Sablon",
    iata: "YBX",
    name: "Lourdes-de-Blanc-Sablon Airport",
    country: "Canada"
  },
  {
    city: "Cartwright",
    iata: "YRF",
    name: "Cartwright Airport",
    country: "Canada"
  },
  {
    city: "Cambridge Bay",
    iata: "YCB",
    name: "Cambridge Bay Airport",
    country: "Canada"
  },
  {
    city: "Cornwall",
    iata: "YCC",
    name: "Cornwall Regional Airport",
    country: "Canada"
  },
  {
    city: "Nanaimo",
    iata: "YCD",
    name: "Nanaimo Airport",
    country: "Canada"
  },
  {
    city: "Huron Park",
    iata: "YCE",
    name: "Centralia / James T. Field Memorial Aerodrome",
    country: "Canada"
  },
  {
    city: "Castlegar",
    iata: "YCG",
    name: "Castlegar/West Kootenay Regional Airport",
    country: "Canada"
  },
  {
    city: "Miramichi",
    iata: "YCH",
    name: "Miramichi Airport",
    country: "Canada"
  },
  {
    city: "Chatham-Kent",
    iata: "XCM",
    name: "Chatham Kent Airport",
    country: "Canada"
  },
  {
    city: "Charlo",
    iata: "YCL",
    name: "Charlo Airport",
    country: "Canada"
  },
  {
    city: "Cochrane",
    iata: "YCN",
    name: "Cochrane Airport",
    country: "Canada"
  },
  {
    city: "Kugluktuk",
    iata: "YCO",
    name: "Kugluktuk Airport",
    country: "Canada"
  },
  {
    city: "Chetwynd",
    iata: "YCQ",
    name: "Chetwynd Airport",
    country: "Canada"
  },
  {
    city: "Cross Lake",
    iata: "YCR",
    name: "Cross Lake (Charlie Sinclair Memorial) Airport",
    country: "Canada"
  },
  {
    city: "Chesterfield Inlet",
    iata: "YCS",
    name: "Chesterfield Inlet Airport",
    country: "Canada"
  },
  {
    city: "Coronation",
    iata: "YCT",
    name: "Coronation Airport",
    country: "Canada"
  },
  {
    city: "Chilliwack",
    iata: "YCW",
    name: "Chilliwack Airport",
    country: "Canada"
  },
  {
    city: "Clyde River",
    iata: "YCY",
    name: "Clyde River Airport",
    country: "Canada"
  },
  {
    city: "Fairmont Hot Springs",
    iata: "YCZ",
    name: "Fairmont Hot Springs Airport",
    country: "Canada"
  },
  {
    city: "Dawson City",
    iata: "YDA",
    name: "Dawson City Airport",
    country: "Canada"
  },
  {
    city: "Burwash Landing",
    iata: "YDB",
    name: "Burwash Airport",
    country: "Canada"
  },
  {
    city: "Deer Lake",
    iata: "YDF",
    name: "Deer Lake Airport",
    country: "Canada"
  },
  {
    city: "Dease Lake",
    iata: "YDL",
    name: "Dease Lake Airport",
    country: "Canada"
  },
  {
    city: "Ross River",
    iata: "XRR",
    name: "Ross River Airport",
    country: "Canada"
  },
  {
    city: "Dauphin",
    iata: "YDN",
    name: "Dauphin Barker Airport",
    country: "Canada"
  },
  {
    city: "Dolbeau-Saint-Felicien",
    iata: "YDO",
    name: "Dolbeau-Saint-Felicien Airport",
    country: "Canada"
  },
  {
    city: "Nain",
    iata: "YDP",
    name: "Nain Airport",
    country: "Canada"
  },
  {
    city: "Dawson Creek",
    iata: "YDQ",
    name: "Dawson Creek Airport",
    country: "Canada"
  },
  {
    city: "Edmonton",
    iata: "YEG",
    name: "Edmonton International Airport",
    country: "Canada"
  },
  {
    city: "Arviat",
    iata: "YEK",
    name: "Arviat Airport",
    country: "Canada"
  },
  {
    city: "Elliot Lake",
    iata: "YEL",
    name: "Elliot Lake Municipal Airport",
    country: "Canada"
  },
  {
    city: "Sheguiandah",
    iata: "YEM",
    name: "Manitoulin East Municipal Airport",
    country: "Canada"
  },
  {
    city: "Estevan",
    iata: "YEN",
    name: "Estevan Airport",
    country: "Canada"
  },
  {
    city: "Fort Severn",
    iata: "YER",
    name: "Fort Severn Airport",
    country: "Canada"
  },
  {
    city: "Edson",
    iata: "YET",
    name: "Edson Airport",
    country: "Canada"
  },
  {
    city: "Eureka",
    iata: "YEU",
    name: "Eureka Airport",
    country: "Canada"
  },
  {
    city: "Inuvik",
    iata: "YEV",
    name: "Inuvik Mike Zubko Airport",
    country: "Canada"
  },
  {
    city: "Amos",
    iata: "YEY",
    name: "Amos/Magny Airport",
    country: "Canada"
  },
  {
    city: "Fort Albany",
    iata: "YFA",
    name: "Fort Albany Airport",
    country: "Canada"
  },
  {
    city: "Iqaluit",
    iata: "YFB",
    name: "Iqaluit Airport",
    country: "Canada"
  },
  {
    city: "Fredericton",
    iata: "YFC",
    name: "Fredericton International Airport",
    country: "Canada"
  },
  {
    city: "Forestville",
    iata: "YFE",
    name: "Forestville Airport",
    country: "Canada"
  },
  {
    city: "Fort Hope",
    iata: "YFH",
    name: "Fort Hope Airport",
    country: "Canada"
  },
  {
    city: "La Macaza",
    iata: "YTM",
    name: "Mont-Tremblant International Airport",
    country: "Canada"
  },
  {
    city: "Flin Flon",
    iata: "YFO",
    name: "Flin Flon Airport",
    country: "Canada"
  },
  {
    city: "Fort Resolution",
    iata: "YFR",
    name: "Fort Resolution Airport",
    country: "Canada"
  },
  {
    city: "Fort Simpson",
    iata: "YFS",
    name: "Fort Simpson Airport",
    country: "Canada"
  },
  {
    city: "Makkovik",
    iata: "YMN",
    name: "Makkovik Airport",
    country: "Canada"
  },
  {
    city: "Texada",
    iata: "YGB",
    name: "Texada Gillies Bay Airport",
    country: "Canada"
  },
  {
    city: "Fort Good Hope",
    iata: "YGH",
    name: "Fort Good Hope Airport",
    country: "Canada"
  },
  {
    city: "Kingston",
    iata: "YGK",
    name: "Kingston Norman Rogers Airport",
    country: "Canada"
  },
  {
    city: "La Grande Rivière",
    iata: "YGL",
    name: "La Grande Rivière Airport",
    country: "Canada"
  },
  {
    city: "Gimli",
    iata: "YGM",
    name: "Gimli Industrial Park Airport",
    country: "Canada"
  },
  {
    city: "Gods Lake Narrows",
    iata: "YGO",
    name: "Gods Lake Narrows Airport",
    country: "Canada"
  },
  {
    city: "Gaspé",
    iata: "YGP",
    name: "Michel-Pouliot Gaspé Airport",
    country: "Canada"
  },
  {
    city: "Geraldton",
    iata: "YGQ",
    name: "Geraldton Greenstone Regional Airport",
    country: "Canada"
  },
  {
    city: "Les Îles-de-la-Madeleine",
    iata: "YGR",
    name: "Îles-de-la-Madeleine Airport",
    country: "Canada"
  },
  {
    city: "Igloolik",
    iata: "YGT",
    name: "Igloolik Airport",
    country: "Canada"
  },
  {
    city: "Havre-Saint-Pierre",
    iata: "YGV",
    name: "Havre-Saint-Pierre Airport",
    country: "Canada"
  },
  {
    city: "Kuujjuarapik",
    iata: "YGW",
    name: "Kuujjuarapik Airport",
    country: "Canada"
  },
  {
    city: "Gillam",
    iata: "YGX",
    name: "Gillam Airport",
    country: "Canada"
  },
  {
    city: "Grise Fiord",
    iata: "YGZ",
    name: "Grise Fiord Airport",
    country: "Canada"
  },
  {
    city: "Quaqtaq",
    iata: "YQC",
    name: "Quaqtaq Airport",
    country: "Canada"
  },
  {
    city: "Hudson Bay",
    iata: "YHB",
    name: "Hudson Bay Airport",
    country: "Canada"
  },
  {
    city: "Vancouver",
    iata: "CXH",
    name: "Vancouver Harbour Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Dryden",
    iata: "YHD",
    name: "Dryden Regional Airport",
    country: "Canada"
  },
  {
    city: "Hope",
    iata: "YHE",
    name: "Hope Airport / FVRD Regional Airpark",
    country: "Canada"
  },
  {
    city: "Hearst",
    iata: "YHF",
    name: "Hearst René Fontaine Municipal Airport",
    country: "Canada"
  },
  {
    city: "Nemiscau",
    iata: "YNS",
    name: "Nemiscau Airport",
    country: "Canada"
  },
  {
    city: "Ulukhaktok",
    iata: "YHI",
    name: "Ulukhaktok Holman Airport",
    country: "Canada"
  },
  {
    city: "Gjoa Haven",
    iata: "YHK",
    name: "Gjoa Haven Airport",
    country: "Canada"
  },
  {
    city: "Hamilton",
    iata: "YHM",
    name: "John C. Munro Hamilton International Airport",
    country: "Canada"
  },
  {
    city: "Hornepayne",
    iata: "YHN",
    name: "Hornepayne Municipal Airport",
    country: "Canada"
  },
  {
    city: "Hopedale",
    iata: "YHO",
    name: "Hopedale Airport",
    country: "Canada"
  },
  {
    city: "Poplar Hill",
    iata: "YHP",
    name: "Poplar Hill Airport",
    country: "Canada"
  },
  {
    city: "Chevery",
    iata: "YHR",
    name: "Chevery Airport",
    country: "Canada"
  },
  {
    city: "Haines Junction",
    iata: "YHT",
    name: "Haines Junction Airport",
    country: "Canada"
  },
  {
    city: "Montréal",
    iata: "YHU",
    name: "Montréal / Saint-Hubert Metropolitan Airport",
    country: "Canada"
  },
  {
    city: "Hay River",
    iata: "YHY",
    name: "Hay River / Merlyn Carter Airport",
    country: "Canada"
  },
  {
    city: "Halifax",
    iata: "YHZ",
    name: "Halifax / Stanfield International Airport",
    country: "Canada"
  },
  {
    city: "Atikokan",
    iata: "YIB",
    name: "Atikokan Municipal Airport",
    country: "Canada"
  },
  {
    city: "Digby",
    iata: "YDG",
    name: "Digby / Annapolis Regional Airport",
    country: "Canada"
  },
  {
    city: "St-Augustin",
    iata: "YIF",
    name: "St Augustin Airport",
    country: "Canada"
  },
  {
    city: "Ivujivik",
    iata: "YIK",
    name: "Ivujivik Airport",
    country: "Canada"
  },
  {
    city: "Pond Inlet",
    iata: "YIO",
    name: "Pond Inlet Airport",
    country: "Canada"
  },
  {
    city: "Island Lake",
    iata: "YIV",
    name: "Island Lake Airport",
    country: "Canada"
  },
  {
    city: "Jasper",
    iata: "YJA",
    name: "Jasper Airport",
    country: "Canada"
  },
  {
    city: "Fort Liard",
    iata: "YJF",
    name: "Fort Liard Airport",
    country: "Canada"
  },
  {
    city: "St Jean",
    iata: "YJN",
    name: "St Jean Airport",
    country: "Canada"
  },
  {
    city: "Stephenville",
    iata: "YJT",
    name: "Stephenville Dymond International Airport",
    country: "Canada"
  },
  {
    city: "Kamloops",
    iata: "YKA",
    name: "Kamloops John Moose Fulton Field Regional Airport",
    country: "Canada"
  },
  {
    city: "Collins Bay",
    iata: "YKC",
    name: "Collins Bay Airport",
    country: "Canada"
  },
  {
    city: "Aklavik",
    iata: "LAK",
    name: "Aklavik/Freddie Carmichael Airport",
    country: "Canada"
  },
  {
    city: "Breslau",
    iata: "YKF",
    name: "Region of Waterloo International Airport",
    country: "Canada"
  },
  {
    city: "Kangiqsujuaq",
    iata: "YWB",
    name: "Kangiqsujuaq (Wakeham Bay) Airport",
    country: "Canada"
  },
  {
    city: "Key Lake",
    iata: "YKJ",
    name: "Key Lake Airport",
    country: "Canada"
  },
  {
    city: "Schefferville",
    iata: "YKL",
    name: "Schefferville Airport",
    country: "Canada"
  },
  {
    city: "Kincardine",
    iata: "YKD",
    name: "Kincardine Municipal Airport",
    country: "Canada"
  },
  {
    city: "Akulivik",
    iata: "AKV",
    name: "Akulivik Airport",
    country: "Canada"
  },
  {
    city: "Ogoki Post",
    iata: "YOG",
    name: "Ogoki Post Airport",
    country: "Canada"
  },
  {
    city: "Waskaganish",
    iata: "YKQ",
    name: "Waskaganish Airport",
    country: "Canada"
  },
  {
    city: "Kirkland Lake",
    iata: "YKX",
    name: "Kirkland Lake Airport",
    country: "Canada"
  },
  {
    city: "Kindersley",
    iata: "YKY",
    name: "Kindersley Airport",
    country: "Canada"
  },
  {
    city: "Aupaluk",
    iata: "YPJ",
    name: "Aupaluk Airport",
    country: "Canada"
  },
  {
    city: "Lac La Biche",
    iata: "YLB",
    name: "Lac La Biche Airport",
    country: "Canada"
  },
  {
    city: "Kimmirut",
    iata: "YLC",
    name: "Kimmirut Airport",
    country: "Canada"
  },
  {
    city: "Chapleau",
    iata: "YLD",
    name: "Chapleau Airport",
    country: "Canada"
  },
  {
    city: "Lansdowne House",
    iata: "YLH",
    name: "Lansdowne House Airport",
    country: "Canada"
  },
  {
    city: "Meadow Lake",
    iata: "YLJ",
    name: "Meadow Lake Airport",
    country: "Canada"
  },
  {
    city: "Lutselk'e",
    iata: "YSG",
    name: "Lutselk'e Airport",
    country: "Canada"
  },
  {
    city: "Lloydminster",
    iata: "YLL",
    name: "Lloydminster Airport",
    country: "Canada"
  },
  {
    city: "La Tuque",
    iata: "YLQ",
    name: "La Tuque Airport",
    country: "Canada"
  },
  {
    city: "Leaf Rapids",
    iata: "YLR",
    name: "Leaf Rapids Airport",
    country: "Canada"
  },
  {
    city: "Barrie",
    iata: "YLK",
    name: "Barrie-Lake Simcoe Regional Airport",
    country: "Canada"
  },
  {
    city: "Alert",
    iata: "YLT",
    name: "Alert Airport",
    country: "Canada"
  },
  {
    city: "Kangiqsualujjuaq",
    iata: "XGR",
    name: "Kangiqsualujjuaq (Georges River) Airport",
    country: "Canada"
  },
  {
    city: "Kelowna",
    iata: "YLW",
    name: "Kelowna International Airport",
    country: "Canada"
  },
  {
    city: "Chatham",
    iata: "CYM",
    name: "Chatham Seaplane Base",
    country: "United States"
  },
  {
    city: "Mayo",
    iata: "YMA",
    name: "Mayo Airport",
    country: "Canada"
  },
  {
    city: "Matane",
    iata: "YME",
    name: "Matane Airport",
    country: "Canada"
  },
  {
    city: "Manitouwadge",
    iata: "YMG",
    name: "Manitouwadge Airport",
    country: "Canada"
  },
  {
    city: "Mary's Harbour",
    iata: "YMH",
    name: "Mary's Harbour Airport",
    country: "Canada"
  },
  {
    city: "Moose Jaw",
    iata: "YMJ",
    name: "Moose Jaw Air Vice Marshal C. M. McEwen Airport",
    country: "Canada"
  },
  {
    city: "Charlevoix",
    iata: "YML",
    name: "Charlevoix Airport",
    country: "Canada"
  },
  {
    city: "Fort McMurray",
    iata: "YMM",
    name: "Fort McMurray International Airport",
    country: "Canada"
  },
  {
    city: "Moosonee",
    iata: "YMO",
    name: "Moosonee Airport",
    country: "Canada"
  },
  {
    city: "Chibougamau",
    iata: "YMT",
    name: "Chapais Airport",
    country: "Canada"
  },
  {
    city: "Umiujaq",
    iata: "YUD",
    name: "Umiujaq Airport",
    country: "Canada"
  },
  {
    city: "Messines",
    iata: "YMW",
    name: "Maniwaki Airport",
    country: "Canada"
  },
  {
    city: "Montréal",
    iata: "YMX",
    name: "Montreal Mirabel International Airport",
    country: "Canada"
  },
  {
    city: "Natashquan",
    iata: "YNA",
    name: "Natashquan Airport",
    country: "Canada"
  },
  {
    city: "Wemindji",
    iata: "YNC",
    name: "Wemindji Airport",
    country: "Canada"
  },
  {
    city: "Gatineau",
    iata: "YND",
    name: "Ottawa / Gatineau Airport",
    country: "Canada"
  },
  {
    city: "Norway House",
    iata: "YNE",
    name: "Norway House Airport",
    country: "Canada"
  },
  {
    city: "Hudson's Hope",
    iata: "YNH",
    name: "Hudson's Hope Airport",
    country: "Canada"
  },
  {
    city: "Langley",
    iata: "YLY",
    name: "Langley Airport",
    country: "Canada"
  },
  {
    city: "Points North Landing",
    iata: "YNL",
    name: "Points North Landing Airport",
    country: "Canada"
  },
  {
    city: "Matagami",
    iata: "YNM",
    name: "Matagami Airport",
    country: "Canada"
  },
  {
    city: "Fort Mackay",
    iata: "HZP",
    name: "Fort Mackay / Horizon Airport",
    country: "Canada"
  },
  {
    city: "Ekati",
    iata: "YOA",
    name: "Ekati Airport",
    country: "Canada"
  },
  {
    city: "Old Crow",
    iata: "YOC",
    name: "Old Crow Airport",
    country: "Canada"
  },
  {
    city: "Cold Lake",
    iata: "YOD",
    name: "CFB Cold Lake",
    country: "Canada"
  },
  {
    city: "Oxford House",
    iata: "YOH",
    name: "Oxford House Airport",
    country: "Canada"
  },
  {
    city: "High Level",
    iata: "YOJ",
    name: "High Level Airport",
    country: "Canada"
  },
  {
    city: "Oshawa",
    iata: "YOO",
    name: "Oshawa Executive Airport",
    country: "Canada"
  },
  {
    city: "Rainbow Lake",
    iata: "YOP",
    name: "Rainbow Lake Airport",
    country: "Canada"
  },
  {
    city: "Owen Sound",
    iata: "YOS",
    name: "Owen Sound / Billy Bishop Regional Airport",
    country: "Canada"
  },
  {
    city: "Ottawa",
    iata: "YOW",
    name: "Ottawa Macdonald-Cartier International Airport",
    country: "Canada"
  },
  {
    city: "Prince Albert",
    iata: "YPA",
    name: "Prince Albert Glass Field",
    country: "Canada"
  },
  {
    city: "Paulatuk",
    iata: "YPC",
    name: "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
    country: "Canada"
  },
  {
    city: "Port Hawkesbury",
    iata: "YPS",
    name: "Port Hawkesbury Airport",
    country: "Canada"
  },
  {
    city: "Peace River",
    iata: "YPE",
    name: "Peace River Airport",
    country: "Canada"
  },
  {
    city: "Portage la Prairie",
    iata: "YPG",
    name: "Portage-la-Prairie / Southport Airport",
    country: "Canada"
  },
  {
    city: "Inukjuak",
    iata: "YPH",
    name: "Inukjuak Airport",
    country: "Canada"
  },
  {
    city: "Pickle Lake",
    iata: "YPL",
    name: "Pickle Lake Airport",
    country: "Canada"
  },
  {
    city: "Pikangikum",
    iata: "YPM",
    name: "Pikangikum Airport",
    country: "Canada"
  },
  {
    city: "Port-Menier",
    iata: "YPN",
    name: "Port-Menier Airport",
    country: "Canada"
  },
  {
    city: "Peawanuck",
    iata: "YPO",
    name: "Peawanuck Airport",
    country: "Canada"
  },
  {
    city: "Peterborough",
    iata: "YPQ",
    name: "Peterborough Regional Airport",
    country: "Canada"
  },
  {
    city: "Prince Rupert",
    iata: "YPR",
    name: "Prince Rupert Airport",
    country: "Canada"
  },
  {
    city: "Powell River",
    iata: "YPW",
    name: "Powell River Airport",
    country: "Canada"
  },
  {
    city: "Puvirnituq",
    iata: "YPX",
    name: "Puvirnituq Airport",
    country: "Canada"
  },
  {
    city: "Fort Chipewyan",
    iata: "YPY",
    name: "Fort Chipewyan Airport",
    country: "Canada"
  },
  {
    city: "Burns Lake",
    iata: "YPZ",
    name: "Burns Lake Airport",
    country: "Canada"
  },
  {
    city: "Gravenhurst",
    iata: "YQA",
    name: "Muskoka Airport",
    country: "Canada"
  },
  {
    city: "Quebec",
    iata: "YQB",
    name: "Quebec Jean Lesage International Airport",
    country: "Canada"
  },
  {
    city: "The Pas",
    iata: "YQD",
    name: "The Pas Airport",
    country: "Canada"
  },
  {
    city: "Springbrook",
    iata: "YQF",
    name: "Red Deer Regional Airport",
    country: "Canada"
  },
  {
    city: "Windsor",
    iata: "YQG",
    name: "Windsor International Airport",
    country: "Canada"
  },
  {
    city: "Watson Lake",
    iata: "YQH",
    name: "Watson Lake Airport",
    country: "Canada"
  },
  {
    city: "Yarmouth",
    iata: "YQI",
    name: "Yarmouth Airport",
    country: "Canada"
  },
  {
    city: "Kenora",
    iata: "YQK",
    name: "Kenora Airport",
    country: "Canada"
  },
  {
    city: "Lethbridge",
    iata: "YQL",
    name: "Lethbridge County Airport",
    country: "Canada"
  },
  {
    city: "Moncton",
    iata: "YQM",
    name: "Greater Moncton Roméo LeBlanc International Airport",
    country: "Canada"
  },
  {
    city: "Nakina",
    iata: "YQN",
    name: "Nakina Airport",
    country: "Canada"
  },
  {
    city: "Comox",
    iata: "YQQ",
    name: "Comox Valley International Airport / CFB Comox",
    country: "Canada"
  },
  {
    city: "Regina",
    iata: "YQR",
    name: "Regina International Airport",
    country: "Canada"
  },
  {
    city: "St Thomas",
    iata: "YQS",
    name: "St Thomas Municipal Airport",
    country: "Canada"
  },
  {
    city: "Thunder Bay",
    iata: "YQT",
    name: "Thunder Bay International Airport",
    country: "Canada"
  },
  {
    city: "Grande Prairie",
    iata: "YQU",
    name: "Grande Prairie Airport",
    country: "Canada"
  },
  {
    city: "Yorkton",
    iata: "YQV",
    name: "Yorkton Municipal Airport",
    country: "Canada"
  },
  {
    city: "North Battleford",
    iata: "YQW",
    name: "North Battleford Airport",
    country: "Canada"
  },
  {
    city: "Gander",
    iata: "YQX",
    name: "Gander International Airport",
    country: "Canada"
  },
  {
    city: "Sydney",
    iata: "YQY",
    name: "Sydney / J.A. Douglas McCurdy Airport",
    country: "Canada"
  },
  {
    city: "Quesnel",
    iata: "YQZ",
    name: "Quesnel Airport",
    country: "Canada"
  },
  {
    city: "Gamètì",
    iata: "YRA",
    name: "Rae Lakes Airport",
    country: "Canada"
  },
  {
    city: "Resolute Bay",
    iata: "YRB",
    name: "Resolute Bay Airport",
    country: "Canada"
  },
  {
    city: "Rivière-du-Loup",
    iata: "YRI",
    name: "Rivière-du-Loup Airport",
    country: "Canada"
  },
  {
    city: "Roberval",
    iata: "YRJ",
    name: "Roberval Airport",
    country: "Canada"
  },
  {
    city: "Red Lake",
    iata: "YRL",
    name: "Red Lake Airport",
    country: "Canada"
  },
  {
    city: "Rocky Mountain House",
    iata: "YRM",
    name: "Rocky Mountain House Airport",
    country: "Canada"
  },
  {
    city: "Ottawa",
    iata: "YRO",
    name: "Ottawa / Rockcliffe Airport",
    country: "Canada"
  },
  {
    city: "Trois-Rivières",
    iata: "YRQ",
    name: "Trois-Rivières Airport",
    country: "Canada"
  },
  {
    city: "Red Sucker Lake",
    iata: "YRS",
    name: "Red Sucker Lake Airport",
    country: "Canada"
  },
  {
    city: "Rankin Inlet",
    iata: "YRT",
    name: "Rankin Inlet Airport",
    country: "Canada"
  },
  {
    city: "Revelstoke",
    iata: "YRV",
    name: "Revelstoke Airport",
    country: "Canada"
  },
  {
    city: "Sudbury",
    iata: "YSB",
    name: "Sudbury Airport",
    country: "Canada"
  },
  {
    city: "Sherbrooke",
    iata: "YSC",
    name: "Sherbrooke Airport",
    country: "Canada"
  },
  {
    city: "Ralston",
    iata: "YSD",
    name: "Canadian Forces Base Suffield Heliport",
    country: "Canada"
  },
  {
    city: "Squamish",
    iata: "YSE",
    name: "Squamish Airport",
    country: "Canada"
  },
  {
    city: "Stony Rapids",
    iata: "YSF",
    name: "Stony Rapids Airport",
    country: "Canada"
  },
  {
    city: "Smiths Falls",
    iata: "YSH",
    name: "Smiths Falls-Montague (Russ Beach) Airport",
    country: "Canada"
  },
  {
    city: "Saint John",
    iata: "YSJ",
    name: "Saint John Airport",
    country: "Canada"
  },
  {
    city: "Sanikiluaq",
    iata: "YSK",
    name: "Sanikiluaq Airport",
    country: "Canada"
  },
  {
    city: "Saint-Léonard",
    iata: "YSL",
    name: "Saint-Léonard Airport",
    country: "Canada"
  },
  {
    city: "Fort Smith",
    iata: "YSM",
    name: "Fort Smith Airport",
    country: "Canada"
  },
  {
    city: "Niagara-on-the-Lake",
    iata: "YCM",
    name: "Niagara District Airport",
    country: "Canada"
  },
  {
    city: "Marathon",
    iata: "YSP",
    name: "Marathon Airport",
    country: "Canada"
  },
  {
    city: "St. Theresa Point",
    iata: "YST",
    name: "St. Theresa Point Airport",
    country: "Canada"
  },
  {
    city: "Slemon Park",
    iata: "YSU",
    name: "Summerside Airport",
    country: "Canada"
  },
  {
    city: "Sachs Harbour",
    iata: "YSY",
    name: "Sachs Harbour (David Nasogaluak Jr. Saaryuaq) Airport",
    country: "Canada"
  },
  {
    city: "Pembroke",
    iata: "YTA",
    name: "Pembroke Airport",
    country: "Canada"
  },
  {
    city: "Kinngait",
    iata: "YTE",
    name: "Cape Dorset Airport",
    country: "Canada"
  },
  {
    city: "Alma",
    iata: "YTF",
    name: "Alma Airport",
    country: "Canada"
  },
  {
    city: "Thompson",
    iata: "YTH",
    name: "Thompson Airport",
    country: "Canada"
  },
  {
    city: "Big Trout Lake",
    iata: "YTL",
    name: "Big Trout Lake Airport",
    country: "Canada"
  },
  {
    city: "Tasiujaq",
    iata: "YTQ",
    name: "Tasiujaq Airport",
    country: "Canada"
  },
  {
    city: "Trenton",
    iata: "YTR",
    name: "CFB Trenton",
    country: "Canada"
  },
  {
    city: "Timmins",
    iata: "YTS",
    name: "Timmins/Victor M. Power",
    country: "Canada"
  },
  {
    city: "Toronto",
    iata: "YTZ",
    name: "Billy Bishop Toronto City Airport",
    country: "Canada"
  },
  {
    city: "Tuktoyaktuk",
    iata: "YUB",
    name: "Tuktoyaktuk / James Gruben Airport",
    country: "Canada"
  },
  {
    city: "Montréal",
    iata: "YUL",
    name: "Montreal / Pierre Elliott Trudeau International Airport",
    country: "Canada"
  },
  {
    city: "Repulse Bay",
    iata: "YUT",
    name: "Naujaat Airport",
    country: "Canada"
  },
  {
    city: "Sanirajak",
    iata: "YUX",
    name: "Hall Beach Airport",
    country: "Canada"
  },
  {
    city: "Rouyn-Noranda",
    iata: "YUY",
    name: "Rouyn Noranda Airport",
    country: "Canada"
  },
  {
    city: "Bonaventure",
    iata: "YVB",
    name: "Bonaventure Airport",
    country: "Canada"
  },
  {
    city: "La Ronge",
    iata: "YVC",
    name: "La Ronge Airport",
    country: "Canada"
  },
  {
    city: "Vermilion",
    iata: "YVG",
    name: "Vermilion Airport",
    country: "Canada"
  },
  {
    city: "Vernon",
    iata: "YVE",
    name: "Vernon Regional Airport",
    country: "Canada"
  },
  {
    city: "Colville Lake",
    iata: "YCK",
    name: "Tommy Kochon Airport",
    country: "Canada"
  },
  {
    city: "Qikiqtarjuaq",
    iata: "YVM",
    name: "Qikiqtarjuaq Airport",
    country: "Canada"
  },
  {
    city: "Val-d'Or",
    iata: "YVO",
    name: "Val-d'Or Airport",
    country: "Canada"
  },
  {
    city: "Kuujjuaq",
    iata: "YVP",
    name: "Kuujjuaq Airport",
    country: "Canada"
  },
  {
    city: "Norman Wells",
    iata: "YVQ",
    name: "Norman Wells Airport",
    country: "Canada"
  },
  {
    city: "Vancouver",
    iata: "YVR",
    name: "Vancouver International Airport",
    country: "Canada"
  },
  {
    city: "Buffalo Narrows",
    iata: "YVT",
    name: "Buffalo Narrows Airport",
    country: "Canada"
  },
  {
    city: "Wiarton",
    iata: "YVV",
    name: "Wiarton Airport",
    country: "Canada"
  },
  {
    city: "Deer Lake",
    iata: "YVZ",
    name: "Deer Lake Airport",
    country: "Canada"
  },
  {
    city: "Petawawa",
    iata: "YWA",
    name: "Petawawa Heliport",
    country: "Canada"
  },
  {
    city: "Wekweètì",
    iata: "YFJ",
    name: "Wekweètì Airport",
    country: "Canada"
  },
  {
    city: "Winnipeg",
    iata: "YWG",
    name: "Winnipeg / James Armstrong Richardson International Airport",
    country: "Canada"
  },
  {
    city: "Victoria",
    iata: "YWH",
    name: "Victoria Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Déline",
    iata: "YWJ",
    name: "Déline Airport",
    country: "Canada"
  },
  {
    city: "Wabush",
    iata: "YWK",
    name: "Wabush Airport",
    country: "Canada"
  },
  {
    city: "Williams Lake",
    iata: "YWL",
    name: "Williams Lake Airport",
    country: "Canada"
  },
  {
    city: "Webequie",
    iata: "YWP",
    name: "Webequie Airport",
    country: "Canada"
  },
  {
    city: "Wrigley",
    iata: "YWY",
    name: "Wrigley Airport",
    country: "Canada"
  },
  {
    city: "Cranbrook",
    iata: "YXC",
    name: "Cranbrook/Canadian Rockies International Airport",
    country: "Canada"
  },
  {
    city: "Saskatoon",
    iata: "YXE",
    name: "Saskatoon John G. Diefenbaker International Airport",
    country: "Canada"
  },
  {
    city: "Medicine Hat",
    iata: "YXH",
    name: "Medicine Hat Regional Airport",
    country: "Canada"
  },
  {
    city: "Fort Saint John",
    iata: "YXJ",
    name: "Fort St John / North Peace Regional Airport",
    country: "Canada"
  },
  {
    city: "Rimouski",
    iata: "YXK",
    name: "Rimouski Airport",
    country: "Canada"
  },
  {
    city: "Sioux Lookout",
    iata: "YXL",
    name: "Sioux Lookout Airport",
    country: "Canada"
  },
  {
    city: "Whale Cove",
    iata: "YXN",
    name: "Whale Cove Airport",
    country: "Canada"
  },
  {
    city: "Pangnirtung",
    iata: "YXP",
    name: "Pangnirtung Airport",
    country: "Canada"
  },
  {
    city: "Beaver Creek",
    iata: "YXQ",
    name: "Beaver Creek Airport",
    country: "Canada"
  },
  {
    city: "Earlton",
    iata: "YXR",
    name: "Earlton (Timiskaming Regional) Airport",
    country: "Canada"
  },
  {
    city: "Prince George",
    iata: "YXS",
    name: "Prince George (International) Airport",
    country: "Canada"
  },
  {
    city: "Terrace",
    iata: "YXT",
    name: "Northwest Regional Airport Terrace-Kitimat",
    country: "Canada"
  },
  {
    city: "London",
    iata: "YXU",
    name: "London International Airport",
    country: "Canada"
  },
  {
    city: "Abbotsford",
    iata: "YXX",
    name: "Abbotsford International Airport",
    country: "Canada"
  },
  {
    city: "Whitehorse",
    iata: "YXY",
    name: "Whitehorse / Erik Nielsen International Airport",
    country: "Canada"
  },
  {
    city: "Wawa",
    iata: "YXZ",
    name: "Wawa Airport",
    country: "Canada"
  },
  {
    city: "North Bay",
    iata: "YYB",
    name: "North Bay Jack Garland Airport",
    country: "Canada"
  },
  {
    city: "Calgary",
    iata: "YYC",
    name: "Calgary International Airport",
    country: "Canada"
  },
  {
    city: "Smithers",
    iata: "YYD",
    name: "Smithers Airport",
    country: "Canada"
  },
  {
    city: "Fort Nelson",
    iata: "YYE",
    name: "Fort Nelson Airport",
    country: "Canada"
  },
  {
    city: "Penticton",
    iata: "YYF",
    name: "Penticton Airport",
    country: "Canada"
  },
  {
    city: "Charlottetown",
    iata: "YYG",
    name: "Charlottetown Airport",
    country: "Canada"
  },
  {
    city: "Taloyoak",
    iata: "YYH",
    name: "Taloyoak Airport",
    country: "Canada"
  },
  {
    city: "Victoria",
    iata: "YYJ",
    name: "Victoria International Airport",
    country: "Canada"
  },
  {
    city: "Lynn Lake",
    iata: "YYL",
    name: "Lynn Lake Airport",
    country: "Canada"
  },
  {
    city: "Cowley",
    iata: "YYM",
    name: "Cowley Airport",
    country: "Canada"
  },
  {
    city: "Swift Current",
    iata: "YYN",
    name: "Swift Current Airport",
    country: "Canada"
  },
  {
    city: "Churchill",
    iata: "YYQ",
    name: "Churchill Airport",
    country: "Canada"
  },
  {
    city: "Goose Bay",
    iata: "YYR",
    name: "Goose Bay Airport",
    country: "Canada"
  },
  {
    city: "St. John's",
    iata: "YYT",
    name: "St. John's International Airport",
    country: "Canada"
  },
  {
    city: "Kapuskasing",
    iata: "YYU",
    name: "Kapuskasing Airport",
    country: "Canada"
  },
  {
    city: "Armstrong",
    iata: "YYW",
    name: "Armstrong Airport",
    country: "Canada"
  },
  {
    city: "Mont-Joli",
    iata: "YYY",
    name: "Mont Joli Airport",
    country: "Canada"
  },
  {
    city: "Toronto",
    iata: "YYZ",
    name: "Toronto Pearson International Airport",
    country: "Canada"
  },
  {
    city: "Gore Bay",
    iata: "YZE",
    name: "Gore Bay Manitoulin Airport",
    country: "Canada"
  },
  {
    city: "Yellowknife",
    iata: "YZF",
    name: "Yellowknife International Airport",
    country: "Canada"
  },
  {
    city: "Salluit",
    iata: "YZG",
    name: "Salluit Airport",
    country: "Canada"
  },
  {
    city: "Slave Lake",
    iata: "YZH",
    name: "Slave Lake Airport",
    country: "Canada"
  },
  {
    city: "Sandspit",
    iata: "YZP",
    name: "Sandspit Airport",
    country: "Canada"
  },
  {
    city: "Sarnia",
    iata: "YZR",
    name: "Chris Hadfield Airport",
    country: "Canada"
  },
  {
    city: "Coral Harbour",
    iata: "YZS",
    name: "Coral Harbour Airport",
    country: "Canada"
  },
  {
    city: "Port Hardy",
    iata: "YZT",
    name: "Port Hardy Airport",
    country: "Canada"
  },
  {
    city: "Whitecourt",
    iata: "YZU",
    name: "Whitecourt Airport",
    country: "Canada"
  },
  {
    city: "Sept-Îles",
    iata: "YZV",
    name: "Sept-Îles Airport",
    country: "Canada"
  },
  {
    city: "Teslin",
    iata: "YZW",
    name: "Teslin Airport",
    country: "Canada"
  },
  {
    city: "Greenwood",
    iata: "YZX",
    name: "CFB Greenwood",
    country: "Canada"
  },
  {
    city: "York Landing",
    iata: "ZAC",
    name: "York Landing Airport",
    country: "Canada"
  },
  {
    city: "Salmon Arm",
    iata: "YSN",
    name: "Shuswap Regional Airport",
    country: "Canada"
  },
  {
    city: "Delta",
    iata: "YDT",
    name: "Boundary Bay Airport",
    country: "Canada"
  },
  {
    city: "Ilford",
    iata: "ILF",
    name: "Ilford Airport",
    country: "Canada"
  },
  {
    city: "South Tetagouche",
    iata: "ZBF",
    name: "Bathurst Airport",
    country: "Canada"
  },
  {
    city: "Bromont",
    iata: "ZBM",
    name: "Bromont (Roland Désourdy) Airport",
    country: "Canada"
  },
  {
    city: "Kelsey",
    iata: "KES",
    name: "Kelsey Airport",
    country: "Canada"
  },
  {
    city: "Eastmain River",
    iata: "ZEM",
    name: "Eastmain River Airport",
    country: "Canada"
  },
  {
    city: "Faro",
    iata: "ZFA",
    name: "Faro Airport",
    country: "Canada"
  },
  {
    city: "Fond-du-Lac",
    iata: "ZFD",
    name: "Fond-du-Lac Airport",
    country: "Canada"
  },
  {
    city: "Pukatawagan",
    iata: "XPK",
    name: "Pukatawagan Airport",
    country: "Canada"
  },
  {
    city: "Fort Mcpherson",
    iata: "ZFM",
    name: "Fort Mcpherson Airport",
    country: "Canada"
  },
  {
    city: "Tulita",
    iata: "ZFN",
    name: "Tulita Airport",
    country: "Canada"
  },
  {
    city: "Grand Forks",
    iata: "ZGF",
    name: "Grand Forks Airport",
    country: "Canada"
  },
  {
    city: "Gods River",
    iata: "ZGI",
    name: "Gods River Airport",
    country: "Canada"
  },
  {
    city: "Little Grand Rapids",
    iata: "ZGR",
    name: "Little Grand Rapids Airport",
    country: "Canada"
  },
  {
    city: "High Prairie",
    iata: "ZHP",
    name: "High Prairie Airport",
    country: "Canada"
  },
  {
    city: "Tupile",
    iata: "CZJ",
    name: "Corazón de Jesús Airport",
    country: "PA"
  },
  {
    city: "Jenpeg",
    iata: "ZJG",
    name: "Jenpeg Airport",
    country: "Canada"
  },
  {
    city: "Swan River",
    iata: "ZJN",
    name: "Swan River Airport",
    country: "Canada"
  },
  {
    city: "Kashechewan",
    iata: "ZKE",
    name: "Kashechewan Airport",
    country: "Canada"
  },
  {
    city: "Thicket Portage",
    iata: "YTD",
    name: "Thicket Portage Airport",
    country: "Canada"
  },
  {
    city: "Muskrat Dam",
    iata: "MSA",
    name: "Muskrat Dam Airport",
    country: "Canada"
  },
  {
    city: "108 Mile",
    iata: "ZMH",
    name: "South Cariboo Region / 108 Mile Airport",
    country: "Canada"
  },
  {
    city: "Pikwitonei",
    iata: "PIW",
    name: "Pikwitonei Airport",
    country: "Canada"
  },
  {
    city: "Masset",
    iata: "ZMT",
    name: "Masset Airport",
    country: "Canada"
  },
  {
    city: "Chisana",
    iata: "CZN",
    name: "Chisana Airport",
    country: "United States"
  },
  {
    city: "Poplar River",
    iata: "XPP",
    name: "Poplar River Airport",
    country: "Canada"
  },
  {
    city: "Chistochina",
    iata: "CZO",
    name: "Chistochina Airport",
    country: "United States"
  },
  {
    city: "Sachigo Lake",
    iata: "ZPB",
    name: "Sachigo Lake Airport",
    country: "Canada"
  },
  {
    city: "Pincher Creek",
    iata: "WPC",
    name: "Pincher Creek Airport",
    country: "Canada"
  },
  {
    city: "Pinehouse Lake",
    iata: "ZPO",
    name: "Pinehouse Lake Airport",
    country: "Canada"
  },
  {
    city: "Round Lake",
    iata: "ZRJ",
    name: "Round Lake (Weagamow Lake) Airport",
    country: "Canada"
  },
  {
    city: "Sandy Lake",
    iata: "ZSJ",
    name: "Sandy Lake Airport",
    country: "Canada"
  },
  {
    city: "South Indian Lake",
    iata: "XSI",
    name: "South Indian Lake Airport",
    country: "Canada"
  },
  {
    city: "Stewart",
    iata: "ZST",
    name: "Stewart Airport",
    country: "Canada"
  },
  {
    city: "Prince Rupert",
    iata: "ZSW",
    name: "Prince Rupert/Seal Cove Seaplane Base",
    country: "Canada"
  },
  {
    city: "Bloodvein River",
    iata: "YDV",
    name: "Bloodvein River Airport",
    country: "Canada"
  },
  {
    city: "Shamattawa",
    iata: "ZTM",
    name: "Shamattawa Airport",
    country: "Canada"
  },
  {
    city: "Ignace",
    iata: "ZUC",
    name: "Ignace Municipal Airport",
    country: "Canada"
  },
  {
    city: "Churchill Falls",
    iata: "ZUM",
    name: "Churchill Falls Airport",
    country: "Canada"
  },
  {
    city: "Lac Brochet",
    iata: "XLB",
    name: "Lac Brochet Airport",
    country: "Canada"
  },
  {
    city: "Wollaston Lake",
    iata: "ZWL",
    name: "Wollaston Lake Airport",
    country: "Canada"
  },
  {
    city: "Ontario County IDA",
    iata: "IUA",
    name: "Canandaigua Airport",
    country: "United States"
  },
  {
    city: "Delta Junction",
    iata: "DJN",
    name: "Delta Junction Airport",
    country: "United States"
  },
  {
    city: "Sayada",
    iata: "MQV",
    name: "Mostaganem Airport",
    country: "DZ"
  },
  {
    city: "Ouled Sidi Brahim",
    iata: "BUJ",
    name: "Bou Saada Airport",
    country: "DZ"
  },
  {
    city: "Béjaïa",
    iata: "BJA",
    name: "Soummam–Abane Ramdane Airport",
    country: "DZ"
  },
  {
    city: "Algiers",
    iata: "ALG",
    name: "Houari Boumediene Airport",
    country: "DZ"
  },
  {
    city: "Djanet",
    iata: "DJG",
    name: "Tiska Djanet Airport",
    country: "DZ"
  },
  {
    city: "Illizi",
    iata: "VVZ",
    name: "Illizi Takhamalt Airport",
    country: "DZ"
  },
  {
    city: "Sétif",
    iata: "QSF",
    name: "Ain Arnat Airport",
    country: "DZ"
  },
  {
    city: "Tamanrasset",
    iata: "TMR",
    name: "Aguenar – Hadj Bey Akhamok Airport",
    country: "DZ"
  },
  {
    city: "Tahir",
    iata: "GJL",
    name: "Jijel Ferhat Abbas Airport",
    country: "DZ"
  },
  {
    city: "Mecheria",
    iata: "MZW",
    name: "Mecheria Airport",
    country: "DZ"
  },
  {
    city: "Annaba",
    iata: "AAE",
    name: "Annaba Rabah Bitat Airport",
    country: "DZ"
  },
  {
    city: "Constantine",
    iata: "CZL",
    name: "Mohamed Boudiaf International Airport",
    country: "DZ"
  },
  {
    city: "Tébessi",
    iata: "TEE",
    name: "Cheikh Larbi Tébessi Airport",
    country: "DZ"
  },
  {
    city: "Batna",
    iata: "BLJ",
    name: "Batna Mostefa Ben Boulaid Airport",
    country: "DZ"
  },
  {
    city: "nan",
    iata: "DAF",
    name: "Daup Airport",
    country: "PG"
  },
  {
    city: "Hassi R'Mel",
    iata: "HRM",
    name: "Hassi R'Mel Airport",
    country: "DZ"
  },
  {
    city: "Dathina",
    iata: "DAH",
    name: "Dathina Airport",
    country: "YE"
  },
  {
    city: "nan",
    iata: "DAO",
    name: "Dabo Airport",
    country: "PG"
  },
  {
    city: "Tiaret",
    iata: "TID",
    name: "Abdelhafid Boussouf Bou Chekif Airport",
    country: "DZ"
  },
  {
    city: "Tindouf",
    iata: "TIN",
    name: "Tindouf Airport",
    country: "DZ"
  },
  {
    city: "Chlef",
    iata: "CFK",
    name: "Chlef Aboubakr Belkaid International Airport",
    country: "DZ"
  },
  {
    city: "Tafraoui",
    iata: "TAF",
    name: "Oran Tafraoui Airport",
    country: "DZ"
  },
  {
    city: "Zenata",
    iata: "TLM",
    name: "Zenata – Messali El Hadj Airport",
    country: "DZ"
  },
  {
    city: "Es-Sénia",
    iata: "ORN",
    name: "Oran Es-Sénia (Ahmed Ben Bella) International Airport",
    country: "DZ"
  },
  {
    city: "Béchar",
    iata: "CBH",
    name: "Béchar Boudghene Ben Ali Lotfi Airport",
    country: "DZ"
  },
  {
    city: "Sidi Bel Abbès",
    iata: "BFW",
    name: "Sidi Bel Abbes Airport",
    country: "DZ"
  },
  {
    city: "Ghriss",
    iata: "MUW",
    name: "Ghriss Airport",
    country: "DZ"
  },
  {
    city: "El Bayadh",
    iata: "EBH",
    name: "El Bayadh Airport",
    country: "DZ"
  },
  {
    city: "In Guezzam",
    iata: "INF",
    name: "In Guezzam Airport",
    country: "DZ"
  },
  {
    city: "Bordj Badji Mokhtar",
    iata: "BMW",
    name: "Bordj Badji Mokhtar Airport",
    country: "DZ"
  },
  {
    city: "Adrar",
    iata: "AZR",
    name: "Touat-Cheikh Sidi Mohamed Belkebir Airport",
    country: "DZ"
  },
  {
    city: "Biskra",
    iata: "BSK",
    name: "Biskra - Mohamed Khider Airport",
    country: "DZ"
  },
  {
    city: "El Menia",
    iata: "ELG",
    name: "El Golea Airport",
    country: "DZ"
  },
  {
    city: "El Atteuf",
    iata: "GHA",
    name: "Noumérat - Moufdi Zakaria Airport",
    country: "DZ"
  },
  {
    city: "Hassi Messaoud",
    iata: "HME",
    name: "Hassi Messaoud-Oued Irara Krim Belkacem Airport",
    country: "DZ"
  },
  {
    city: "In Salah",
    iata: "INZ",
    name: "In Salah Airport",
    country: "DZ"
  },
  {
    city: "Touggourt",
    iata: "TGR",
    name: "Touggourt Sidi Madhi Airport",
    country: "DZ"
  },
  {
    city: "Laghouat",
    iata: "LOO",
    name: "Laghouat - Molay Ahmed Medeghri Airport",
    country: "DZ"
  },
  {
    city: "Guemar",
    iata: "ELU",
    name: "Guemar Airport - مطار قمار بالوادي",
    country: "DZ"
  },
  {
    city: "Timimoun",
    iata: "TMX",
    name: "Timimoun Airport",
    country: "DZ"
  },
  {
    city: "Ouargla",
    iata: "OGX",
    name: "Ain Beida Airport",
    country: "DZ"
  },
  {
    city: "In Aménas",
    iata: "IAM",
    name: "Zarzaitine - In Aménas Airport",
    country: "DZ"
  },
  {
    city: "Cotonou",
    iata: "COO",
    name: "Cotonou Cadjehoun International Airport",
    country: "BJ"
  },
  {
    city: "Djougou",
    iata: "DJA",
    name: "Djougou Airport",
    country: "BJ"
  },
  {
    city: "Kandi",
    iata: "KDC",
    name: "Kandi Airport",
    country: "BJ"
  },
  {
    city: "Natitingou",
    iata: "NAE",
    name: "Natitingou Airport",
    country: "BJ"
  },
  {
    city: "Parakou",
    iata: "PKO",
    name: "Parakou Airport",
    country: "BJ"
  },
  {
    city: "Savé",
    iata: "SVF",
    name: "Savé Airport",
    country: "BJ"
  },
  {
    city: "Kalpitiya Island",
    iata: "DBK",
    name: "Dutch Bay SPB",
    country: "Sri Lanka"
  },
  {
    city: "Dambulla",
    iata: "DBU",
    name: "Dambulu Oya Tank Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Dahl Creek",
    iata: "DCK",
    name: "Dahl Creek Airport",
    country: "United States"
  },
  {
    city: "nan",
    iata: "DDM",
    name: "Dodoima Airport",
    country: "PG"
  },
  {
    city: "Huzhou",
    iata: "DEQ",
    name: "Deqing Moganshan Airport",
    country: "China"
  },
  {
    city: "Dekai",
    iata: "DEX",
    name: "Nop Goliat Dekai Airport",
    country: "Indonesia"
  },
  {
    city: "Kaya",
    iata: "XKY",
    name: "Kaya Airport",
    country: "BF"
  },
  {
    city: "Ouahigouya",
    iata: "OUG",
    name: "Ouahigouya Airport",
    country: "BF"
  },
  {
    city: "Djibo",
    iata: "XDJ",
    name: "Djibo Airport",
    country: "BF"
  },
  {
    city: "Leo",
    iata: "XLU",
    name: "Leo Airport",
    country: "BF"
  },
  {
    city: "Po",
    iata: "PUP",
    name: "Po Airport",
    country: "BF"
  },
  {
    city: "Boulsa",
    iata: "XBO",
    name: "Boulsa Airport",
    country: "BF"
  },
  {
    city: "Bogande",
    iata: "XBG",
    name: "Bogande Airport",
    country: "BF"
  },
  {
    city: "Diapaga",
    iata: "DIP",
    name: "Diapaga Airport",
    country: "BF"
  },
  {
    city: "Dori",
    iata: "DOR",
    name: "Dori Airport",
    country: "BF"
  },
  {
    city: "Fada N'gourma",
    iata: "FNG",
    name: "Fada N'gourma Airport",
    country: "BF"
  },
  {
    city: "Gorom-Gorom",
    iata: "XGG",
    name: "Gorom-Gorom Airport",
    country: "BF"
  },
  {
    city: "Kantchari",
    iata: "XKA",
    name: "Kantchari Airport",
    country: "BF"
  },
  {
    city: "Tambao",
    iata: "TMQ",
    name: "Tambao Airport",
    country: "BF"
  },
  {
    city: "Pama",
    iata: "XPA",
    name: "Pama Airport",
    country: "BF"
  },
  {
    city: "Arly",
    iata: "ARL",
    name: "Arly Airport",
    country: "BF"
  },
  {
    city: "Sebba",
    iata: "XSE",
    name: "Sebba Airport",
    country: "BF"
  },
  {
    city: "Tenkodogo",
    iata: "TEG",
    name: "Tenkodogo Airport",
    country: "BF"
  },
  {
    city: "Zabré",
    iata: "XZA",
    name: "Zabré Airport",
    country: "BF"
  },
  {
    city: "Ouagadougou",
    iata: "OUA",
    name: "Ouagadougou Thomas Sankara International Airport",
    country: "BF"
  },
  {
    city: "Banfora",
    iata: "BNR",
    name: "Banfora Airport",
    country: "BF"
  },
  {
    city: "Dedougou",
    iata: "DGU",
    name: "Dedougou Airport",
    country: "BF"
  },
  {
    city: "Gaoua",
    iata: "XGA",
    name: "Gaoua Airport",
    country: "BF"
  },
  {
    city: "Nouna",
    iata: "XNU",
    name: "Nouna Airport",
    country: "BF"
  },
  {
    city: "Bobo Dioulasso",
    iata: "BOY",
    name: "Bobo Dioulasso Airport",
    country: "BF"
  },
  {
    city: "Tougan",
    iata: "TUQ",
    name: "Tougan Airport",
    country: "BF"
  },
  {
    city: "Diebougou",
    iata: "XDE",
    name: "Diebougou Airport",
    country: "BF"
  },
  {
    city: "Aribinda",
    iata: "XAR",
    name: "Aribinda Airport",
    country: "BF"
  },
  {
    city: "Accra",
    iata: "ACC",
    name: "Kotoka International Airport",
    country: "GH"
  },
  {
    city: "Tamale",
    iata: "TML",
    name: "Yakubu Tali International Airport",
    country: "GH"
  },
  {
    city: "Wa",
    iata: "WZA",
    name: "Wa Airport",
    country: "GH"
  },
  {
    city: "Colombo",
    iata: "DGM",
    name: "Dandugama Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Kumasi",
    iata: "KMS",
    name: "Prempeh I International Airport",
    country: "GH"
  },
  {
    city: "Sunyani",
    iata: "NYI",
    name: "Sunyani Airport",
    country: "GH"
  },
  {
    city: "Sekondi-Takoradi",
    iata: "TKD",
    name: "Takoradi Airport",
    country: "GH"
  },
  {
    city: "Deer Harbor",
    iata: "DHB",
    name: "Deer Harbor SPB",
    country: "United States"
  },
  {
    city: "Dalnegorsk",
    iata: "DHG",
    name: "Dalnegorsk Airport",
    country: "Russia"
  },
  {
    city: "Ad-Dali",
    iata: "DHL",
    name: "Ad-Dali Airport",
    country: "YE"
  },
  {
    city: "Aboisso",
    iata: "ABO",
    name: "Aboisso Airport",
    country: "CI"
  },
  {
    city: "Abidjan",
    iata: "ABJ",
    name: "Félix-Houphouët-Boigny International Airport",
    country: "CI"
  },
  {
    city: "Abengourou",
    iata: "OGO",
    name: "Abengourou Airport",
    country: "CI"
  },
  {
    city: "Boundiali",
    iata: "BXI",
    name: "Boundiali Airport",
    country: "CI"
  },
  {
    city: "Bouaké",
    iata: "BYK",
    name: "Bouaké Airport",
    country: "CI"
  },
  {
    city: "Bouna",
    iata: "BQO",
    name: "Bouna Airport",
    country: "CI"
  },
  {
    city: "Bondoukou",
    iata: "BDK",
    name: "Soko Airport",
    country: "CI"
  },
  {
    city: "Dimbokro",
    iata: "DIM",
    name: "Dimbokro Airport",
    country: "CI"
  },
  {
    city: "nan",
    iata: "DJO",
    name: "Daloa Airport",
    country: "CI"
  },
  {
    city: "Gagnoa",
    iata: "GGN",
    name: "Gagnoa Airport",
    country: "CI"
  },
  {
    city: "Guiglo",
    iata: "GGO",
    name: "Guiglo Airport",
    country: "CI"
  },
  {
    city: "Grand-Béréby",
    iata: "BBV",
    name: "Nero-Mer Airport",
    country: "CI"
  },
  {
    city: "Korhogo",
    iata: "HGO",
    name: "Korhogo Airport",
    country: "CI"
  },
  {
    city: "nan",
    iata: "MJC",
    name: "Man Airport",
    country: "CI"
  },
  {
    city: "Odienne",
    iata: "KEO",
    name: "Odienne Airport",
    country: "CI"
  },
  {
    city: "Ouango Fitini",
    iata: "OFI",
    name: "Ouango Fitini Airport",
    country: "CI"
  },
  {
    city: "Séguéla",
    iata: "SEO",
    name: "Séguéla Airport",
    country: "CI"
  },
  {
    city: "nan",
    iata: "SPY",
    name: "San Pedro Airport",
    country: "CI"
  },
  {
    city: "Sassandra",
    iata: "ZSS",
    name: "Sassandra Airport",
    country: "CI"
  },
  {
    city: "Tabou",
    iata: "TXU",
    name: "Tabou Airport",
    country: "CI"
  },
  {
    city: "Touba",
    iata: "TOZ",
    name: "Mahana Airport",
    country: "CI"
  },
  {
    city: "Dickwella",
    iata: "DIW",
    name: "Mawella Lagoon Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Yamoussoukro",
    iata: "ASK",
    name: "Yamoussoukro International Airport",
    country: "CI"
  },
  {
    city: "Dalnerechensk",
    iata: "DLR",
    name: "Dalnerechensk Airport",
    country: "Russia"
  },
  {
    city: "Diomede",
    iata: "DIO",
    name: "Diomede Heliport",
    country: "United States"
  },
  {
    city: "Katsina",
    iata: "DKA",
    name: "Umaru Musa Yar'adua Airport",
    country: "Nigeria"
  },
  {
    city: "Abuja",
    iata: "ABV",
    name: "Nnamdi Azikiwe International Airport",
    country: "Nigeria"
  },
  {
    city: "Uyo",
    iata: "QUO",
    name: "Akwa Ibom International Airport",
    country: "Nigeria"
  },
  {
    city: "Akure",
    iata: "AKR",
    name: "Akure Airport",
    country: "Nigeria"
  },
  {
    city: "Asaba",
    iata: "ABB",
    name: "Asaba International Airport",
    country: "Nigeria"
  },
  {
    city: "Bauchi",
    iata: "BCU",
    name: "Sir Abubakar Tafawa Balewa Bauchi State International Airport",
    country: "Nigeria"
  },
  {
    city: "Benin",
    iata: "BNI",
    name: "Benin Airport",
    country: "Nigeria"
  },
  {
    city: "Calabar",
    iata: "CBQ",
    name: "Margaret Ekpo International Airport",
    country: "Nigeria"
  },
  {
    city: "Enegu",
    iata: "ENU",
    name: "Akanu Ibiam International Airport",
    country: "Nigeria"
  },
  {
    city: "Gombe",
    iata: "GMO",
    name: "Gombe Lawanti International Airport",
    country: "Nigeria"
  },
  {
    city: "Ibadan",
    iata: "IBA",
    name: "Ibadan Airport",
    country: "Nigeria"
  },
  {
    city: "Ilorin/Ogbomosho",
    iata: "ILR",
    name: "General Tunde Idiagbon International Airport",
    country: "Nigeria"
  },
  {
    city: "Owerri",
    iata: "QOW",
    name: "Sam Mbakwe International Cargo Airport",
    country: "Nigeria"
  },
  {
    city: "Jos",
    iata: "JOS",
    name: "Yakubu Gowon Airport",
    country: "Nigeria"
  },
  {
    city: "Kaduna",
    iata: "KAD",
    name: "Kaduna International Airport",
    country: "Nigeria"
  },
  {
    city: "Kano",
    iata: "KAN",
    name: "Mallam Aminu Kano International Airport",
    country: "Nigeria"
  },
  {
    city: "Maiduguri",
    iata: "MIU",
    name: "Maiduguri International Airport",
    country: "Nigeria"
  },
  {
    city: "Makurdi",
    iata: "MDI",
    name: "Makurdi Airport",
    country: "Nigeria"
  },
  {
    city: "Lagos",
    iata: "LOS",
    name: "Murtala Muhammed International Airport",
    country: "Nigeria"
  },
  {
    city: "Minna",
    iata: "MXJ",
    name: "Minna Airport",
    country: "Nigeria"
  },
  {
    city: "Port Harcourt",
    iata: "PHC",
    name: "Port Harcourt International Airport",
    country: "Nigeria"
  },
  {
    city: "Sokoto",
    iata: "SKO",
    name: "Sadiq Abubakar III International Airport",
    country: "Nigeria"
  },
  {
    city: "Okpe",
    iata: "QRW",
    name: "Warri Airport",
    country: "Nigeria"
  },
  {
    city: "Yola",
    iata: "YOL",
    name: "Yola Airport",
    country: "Nigeria"
  },
  {
    city: "Zaria",
    iata: "ZAR",
    name: "Zaria Airport",
    country: "Nigeria"
  },
  {
    city: "Deputatskiy",
    iata: "DPT",
    name: "Deputatskiy Airport",
    country: "Russia"
  },
  {
    city: "Maradi",
    iata: "MFQ",
    name: "Maradi Airport",
    country: "NE"
  },
  {
    city: "Niamey",
    iata: "NIM",
    name: "Diori Hamani International Airport",
    country: "NE"
  },
  {
    city: "Tahoua",
    iata: "THZ",
    name: "Tahoua Airport",
    country: "NE"
  },
  {
    city: "Agadez",
    iata: "AJY",
    name: "Mano Dayak International Airport",
    country: "NE"
  },
  {
    city: "Arlit",
    iata: "RLT",
    name: "Arlit Airport",
    country: "NE"
  },
  {
    city: "Zinder",
    iata: "ZND",
    name: "Zinder Airport",
    country: "NE"
  },
  {
    city: "Dilasag",
    iata: "DSG",
    name: "Dilasag Airport",
    country: "Philippines"
  },
  {
    city: "Tabarka",
    iata: "TBJ",
    name: "Tabarka-Aïn Draham International Airport",
    country: "TN"
  },
  {
    city: "Monastir",
    iata: "MIR",
    name: "Monastir Habib Bourguiba International Airport",
    country: "TN"
  },
  {
    city: "Enfidha",
    iata: "NBE",
    name: "Enfidha - Hammamet International Airport",
    country: "TN"
  },
  {
    city: "Tunis",
    iata: "TUN",
    name: "Tunis Carthage International Airport",
    country: "TN"
  },
  {
    city: "Gafsa",
    iata: "GAF",
    name: "Gafsa Ksar International Airport",
    country: "TN"
  },
  {
    city: "Gabès",
    iata: "GAE",
    name: "Gabès Matmata International Airport",
    country: "TN"
  },
  {
    city: "Mellita",
    iata: "DJE",
    name: "Djerba Zarzis International Airport",
    country: "TN"
  },
  {
    city: "El Borma",
    iata: "EBM",
    name: "El Borma Airport",
    country: "TN"
  },
  {
    city: "Sfax",
    iata: "SFA",
    name: "Sfax Thyna International Airport",
    country: "TN"
  },
  {
    city: "Tozeur",
    iata: "TOE",
    name: "Tozeur Nefta International Airport",
    country: "TN"
  },
  {
    city: "Andavadoaka",
    iata: "DVD",
    name: "Andavadoaka Airport",
    country: "MG"
  },
  {
    city: "Sri Jayawardenepura Kotte",
    iata: "DWO",
    name: "Diyawanna Oya Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Niamtougou",
    iata: "LRL",
    name: "Niamtougou International Airport",
    country: "TG"
  },
  {
    city: "Lomé",
    iata: "LFW",
    name: "Lomé–Tokoin International Airport",
    country: "TG"
  },
  {
    city: "Mejato Island",
    iata: "EAL",
    name: "Elenak Airport",
    country: "MH"
  },
  {
    city: "Antwerp",
    iata: "ANR",
    name: "Antwerp International Airport (Deurne)",
    country: "Belgium"
  },
  {
    city: "Zaventem",
    iata: "BRU",
    name: "Brussels Airport",
    country: "Belgium"
  },
  {
    city: "Charleroi",
    iata: "CRL",
    name: "Brussels South Charleroi Airport",
    country: "Belgium"
  },
  {
    city: "Gent",
    iata: "GNE",
    name: "Ghent/Industry Zone Heliport",
    country: "Belgium"
  },
  {
    city: "Wevelgem",
    iata: "KJK",
    name: "Flanders International Airport Kortrijk-Wevelgem",
    country: "Belgium"
  },
  {
    city: "Grâce-Hollogne",
    iata: "LGG",
    name: "Liège Airport",
    country: "Belgium"
  },
  {
    city: "Ebon Atoll",
    iata: "EBO",
    name: "Ebon Airport",
    country: "MH"
  },
  {
    city: "Oostende",
    iata: "OST",
    name: "Ostend-Bruges International Airport",
    country: "Belgium"
  },
  {
    city: "Zoersel",
    iata: "OBL",
    name: "Oostmalle Airfield",
    country: "Belgium"
  },
  {
    city: "Santiago de Méndez",
    iata: "MZD",
    name: "Méndez Airport",
    country: "EC"
  },
  {
    city: "Edna Bay",
    iata: "EDA",
    name: "Edna Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Nobitz",
    iata: "AOC",
    name: "Leipzig–Altenburg Airport",
    country: "Germany"
  },
  {
    city: "Zirchow",
    iata: "HDF",
    name: "Heringsdorf Airport",
    country: "Germany"
  },
  {
    city: "Riesa",
    iata: "IES",
    name: "Riesa-Göhlis Airport",
    country: "Germany"
  },
  {
    city: "Lärz",
    iata: "REB",
    name: "Müritz Airpark",
    country: "Germany"
  },
  {
    city: "Hecklingen",
    iata: "CSO",
    name: "Cochstedt Airport",
    country: "Germany"
  },
  {
    city: "Barth",
    iata: "BBH",
    name: "Stralsund-Barth Airport",
    country: "Germany"
  },
  {
    city: "Trollenhagen",
    iata: "FNB",
    name: "Neubrandenburg Trollenhagen Airport",
    country: "Germany"
  },
  {
    city: "Dreschvitz",
    iata: "GTI",
    name: "Rügen Airport",
    country: "Germany"
  },
  {
    city: "Köthen (Anhalt)",
    iata: "KOQ",
    name: "Köthen Airport",
    country: "Germany"
  },
  {
    city: "Peenemünde",
    iata: "PEF",
    name: "Peenemünde Airport",
    country: "Germany"
  },
  {
    city: "Berlin",
    iata: "BER",
    name: "Berlin Brandenburg Airport",
    country: "Germany"
  },
  {
    city: "Dresden",
    iata: "DRS",
    name: "Dresden Airport",
    country: "Germany"
  },
  {
    city: "Erfurt",
    iata: "ERF",
    name: "Erfurt-Weimar Airport",
    country: "Germany"
  },
  {
    city: "Frankfurt am Main",
    iata: "FRA",
    name: "Frankfurt Main Airport",
    country: "Germany"
  },
  {
    city: "Greven",
    iata: "FMO",
    name: "Münster Osnabrück Airport",
    country: "Germany"
  },
  {
    city: "Hamburg",
    iata: "HAM",
    name: "Hamburg Helmut Schmidt Airport",
    country: "Germany"
  },
  {
    city: "Köln (Cologne)",
    iata: "CGN",
    name: "Cologne Bonn Airport",
    country: "Germany"
  },
  {
    city: "Düsseldorf",
    iata: "DUS",
    name: "Düsseldorf Airport",
    country: "Germany"
  },
  {
    city: "Munich",
    iata: "MUC",
    name: "Munich Airport",
    country: "Germany"
  },
  {
    city: "Nuremberg",
    iata: "NUE",
    name: "Nuremberg Airport",
    country: "Germany"
  },
  {
    city: "Schkeuditz",
    iata: "LEJ",
    name: "Leipzig/Halle Airport",
    country: "Germany"
  },
  {
    city: "Saarbrücken",
    iata: "SCN",
    name: "Saarbrücken Airport",
    country: "Germany"
  },
  {
    city: "Stuttgart",
    iata: "STR",
    name: "Stuttgart Airport",
    country: "Germany"
  },
  {
    city: "Hannover",
    iata: "HAJ",
    name: "Hannover Airport",
    country: "Germany"
  },
  {
    city: "Bremen",
    iata: "BRE",
    name: "Bremen Airport",
    country: "Germany"
  },
  {
    city: "Frankfurt am Main (Lautzenhausen)",
    iata: "HHN",
    name: "Frankfurt-Hahn Airport",
    country: "Germany"
  },
  {
    city: "Mannheim",
    iata: "MHG",
    name: "Mannheim-City Airport",
    country: "Germany"
  },
  {
    city: "Hörselberg-Hainich",
    iata: "EIB",
    name: "Eisenach-Kindel Airport",
    country: "Germany"
  },
  {
    city: "Ludwigshafen am Rhein",
    iata: "ZOE",
    name: "Ludwigshafen Accident Hospital Heliport",
    country: "Germany"
  },
  {
    city: "Burbach",
    iata: "SGE",
    name: "Siegerland Airport",
    country: "Germany"
  },
  {
    city: "Hohenlockstedt",
    iata: "IZE",
    name: "Itzehoe Hungriger Wolf Airfield",
    country: "Germany"
  },
  {
    city: "Hamburg",
    iata: "XFW",
    name: "Hamburg-Finkenwerder Airport",
    country: "Germany"
  },
  {
    city: "Kiel",
    iata: "KEL",
    name: "Kiel-Holtenau Airport",
    country: "Germany"
  },
  {
    city: "Lübeck",
    iata: "LBC",
    name: "Lübeck Blankensee Airport",
    country: "Germany"
  },
  {
    city: "Neumünster",
    iata: "EUM",
    name: "Neumünster Airport",
    country: "Germany"
  },
  {
    city: "Memmingen",
    iata: "FMM",
    name: "Memmingen Allgau Airport",
    country: "Germany"
  },
  {
    city: "Aachen",
    iata: "AAH",
    name: "Aachen-Merzbrück Airport",
    country: "Germany"
  },
  {
    city: "Essen",
    iata: "ESS",
    name: "Essen-Mülheim Airport",
    country: "Germany"
  },
  {
    city: "Bielefeld",
    iata: "BFE",
    name: "Bielefeld Airport",
    country: "Germany"
  },
  {
    city: "Mönchengladbach",
    iata: "MGL",
    name: "Mönchengladbach Airport",
    country: "Germany"
  },
  {
    city: "Büren",
    iata: "PAD",
    name: "Paderborn Lippstadt Airport",
    country: "Germany"
  },
  {
    city: "Weeze",
    iata: "NRN",
    name: "Weeze (Niederrhein) Airport",
    country: "Germany"
  },
  {
    city: "Dortmund",
    iata: "DTM",
    name: "Dortmund Airport",
    country: "Germany"
  },
  {
    city: "Augsburg",
    iata: "AGB",
    name: "Augsburg Airport",
    country: "Germany"
  },
  {
    city: "Landshut",
    iata: "QLG",
    name: "Landshut Airfield",
    country: "Germany"
  },
  {
    city: "Weßling",
    iata: "OBF",
    name: "Oberpfaffenhofen Airport",
    country: "Germany"
  },
  {
    city: "Atting",
    iata: "RBM",
    name: "Straubing Airport",
    country: "Germany"
  },
  {
    city: "Friedrichshafen",
    iata: "FDH",
    name: "Bodensee Airport Friedrichshafen",
    country: "Germany"
  },
  {
    city: "Bindlach",
    iata: "BYU",
    name: "Bayreuth Airport",
    country: "Germany"
  },
  {
    city: "Ebermannstadt",
    iata: "URD",
    name: "Burg Feuerstein Airport",
    country: "Germany"
  },
  {
    city: "Giebelstadt",
    iata: "GHF",
    name: "Giebelstadt Airport",
    country: "Germany"
  },
  {
    city: "Hof",
    iata: "HOQ",
    name: "Hof-Plauen Airport",
    country: "Germany"
  },
  {
    city: "Bitburg",
    iata: "BBJ",
    name: "Bitburg Airport",
    country: "Germany"
  },
  {
    city: "Zweibrücken",
    iata: "ZQW",
    name: "Zweibrücken Airport",
    country: "Germany"
  },
  {
    city: "Rheinmünster",
    iata: "FKB",
    name: "Karlsruhe Baden-Baden Airport",
    country: "Germany"
  },
  {
    city: "Lahr/Schwarzwald",
    iata: "LHA",
    name: "Lahr Airport",
    country: "Germany"
  },
  {
    city: "Braunschweig",
    iata: "BWE",
    name: "Braunschweig-Wolfsburg Airport",
    country: "Germany"
  },
  {
    city: "Calden",
    iata: "KSF",
    name: "Kassel Airport",
    country: "Germany"
  },
  {
    city: "Emden",
    iata: "EME",
    name: "Emden Airport",
    country: "Germany"
  },
  {
    city: "Wangerooge",
    iata: "AGE",
    name: "Wangerooge Airport",
    country: "Germany"
  },
  {
    city: "Wilhelmshaven",
    iata: "WVN",
    name: "JadeWeser Airport",
    country: "Germany"
  },
  {
    city: "Juist",
    iata: "JUI",
    name: "Juist Airport",
    country: "Germany"
  },
  {
    city: "Langeoog",
    iata: "LGO",
    name: "Langeoog Airport",
    country: "Germany"
  },
  {
    city: "Borkum",
    iata: "BMK",
    name: "Borkum Airport",
    country: "Germany"
  },
  {
    city: "Norddeich",
    iata: "NOD",
    name: "Norden-Norddeich Airport",
    country: "Germany"
  },
  {
    city: "Cloppenburg",
    iata: "VAC",
    name: "Varrelbusch Airfield",
    country: "Germany"
  },
  {
    city: "Norderney",
    iata: "NRD",
    name: "Norderney Airport",
    country: "Germany"
  },
  {
    city: "Baltrum",
    iata: "BMR",
    name: "Baltrum Airport",
    country: "Germany"
  },
  {
    city: "Oesterdeichstrich",
    iata: "HEI",
    name: "Heide-Büsum Airport",
    country: "Germany"
  },
  {
    city: "Flensburg",
    iata: "FLF",
    name: "Flensburg-Schäferhaus Airport",
    country: "Germany"
  },
  {
    city: "Helgoland",
    iata: "HGL",
    name: "Helgoland-Düne Airport",
    country: "Germany"
  },
  {
    city: "Husum",
    iata: "QHU",
    name: "Husum-Schwesing Airport",
    country: "Germany"
  },
  {
    city: "Sankt Peter-Ording",
    iata: "PSH",
    name: "Sankt Peter-Ording Airport",
    country: "Germany"
  },
  {
    city: "Sylt",
    iata: "GWT",
    name: "Westerland Sylt Airport",
    country: "Germany"
  },
  {
    city: "Wyk auf Föhr",
    iata: "OHR",
    name: "Wyk auf Föhr Airport",
    country: "Germany"
  },
  {
    city: "Tallinn",
    iata: "CHE",
    name: "Tallinn Linnahall Heliport",
    country: "EE"
  },
  {
    city: "Kärdla",
    iata: "KDL",
    name: "Kärdla Airport",
    country: "EE"
  },
  {
    city: "Kuressaare",
    iata: "URE",
    name: "Kuressaare Airport",
    country: "EE"
  },
  {
    city: "Pärnu",
    iata: "EPU",
    name: "Pärnu Airport",
    country: "EE"
  },
  {
    city: "Berenice Troglodytica",
    iata: "EES",
    name: "Berenice International Airport / Banas Cape Air Base",
    country: "Egypt"
  },
  {
    city: "Tallinn",
    iata: "TLL",
    name: "Lennart Meri Tallinn Airport",
    country: "EE"
  },
  {
    city: "Tartu",
    iata: "TAY",
    name: "Tartu Airport",
    country: "EE"
  },
  {
    city: "Enontekio",
    iata: "ENF",
    name: "Enontekio Airport",
    country: "Finland"
  },
  {
    city: "Jämsä",
    iata: "KEV",
    name: "Halli Airport",
    country: "Finland"
  },
  {
    city: "Helsinki",
    iata: "HEN",
    name: "Hernesaari Heliport",
    country: "Finland"
  },
  {
    city: "Helsinki (Vantaa)",
    iata: "HEL",
    name: "Helsinki Vantaa Airport",
    country: "Finland"
  },
  {
    city: "Hyvinkää",
    iata: "HYV",
    name: "Hyvinkää Airfield",
    country: "Finland"
  },
  {
    city: "Kitee",
    iata: "KTQ",
    name: "Kitee Airport",
    country: "Finland"
  },
  {
    city: "Ivalo",
    iata: "IVL",
    name: "Ivalo Airport",
    country: "Finland"
  },
  {
    city: "Joensuu",
    iata: "JOE",
    name: "Joensuu Airport",
    country: "Finland"
  },
  {
    city: "Jyväskylän Maalaiskunta",
    iata: "JYV",
    name: "Jyväskylä Airport",
    country: "Finland"
  },
  {
    city: "Kauhava",
    iata: "KAU",
    name: "Kauhava Airfield",
    country: "Finland"
  },
  {
    city: "Kemi / Tornio",
    iata: "KEM",
    name: "Kemi-Tornio Airport",
    country: "Finland"
  },
  {
    city: "Kajaani",
    iata: "KAJ",
    name: "Kajaani Airport",
    country: "Finland"
  },
  {
    city: "Kauhajoki",
    iata: "KHJ",
    name: "Kauhajoki Airfield",
    country: "Finland"
  },
  {
    city: "Kokkola / Kruunupyy",
    iata: "KOK",
    name: "Kokkola-Pietarsaari Airport",
    country: "Finland"
  },
  {
    city: "Kuusamo",
    iata: "KAO",
    name: "Kuusamo Airport",
    country: "Finland"
  },
  {
    city: "Kittilä",
    iata: "KTT",
    name: "Kittilä International Airport",
    country: "Finland"
  },
  {
    city: "Kuopio / Siilinjärvi",
    iata: "KUO",
    name: "Kuopio Airport",
    country: "Finland"
  },
  {
    city: "Lappeenranta",
    iata: "LPP",
    name: "Lappeenranta Airport",
    country: "Finland"
  },
  {
    city: "Mariehamn",
    iata: "MHQ",
    name: "Mariehamn Airport",
    country: "Finland"
  },
  {
    city: "Mikkeli",
    iata: "MIK",
    name: "Mikkeli Airport",
    country: "Finland"
  },
  {
    city: "Oulu / Oulunsalo",
    iata: "OUL",
    name: "Oulu Airport",
    country: "Finland"
  },
  {
    city: "Pori",
    iata: "POR",
    name: "Pori Airport",
    country: "Finland"
  },
  {
    city: "Rovaniemi",
    iata: "RVN",
    name: "Rovaniemi Airport",
    country: "Finland"
  },
  {
    city: "Savonlinna",
    iata: "SVL",
    name: "Savonlinna Airport",
    country: "Finland"
  },
  {
    city: "Seinäjoki / Ilmajoki",
    iata: "SJY",
    name: "Seinäjoki Airport",
    country: "Finland"
  },
  {
    city: "Sodankyla",
    iata: "SOT",
    name: "Sodankyla Airport",
    country: "Finland"
  },
  {
    city: "Tampere / Pirkkala",
    iata: "TMP",
    name: "Tampere-Pirkkala Airport",
    country: "Finland"
  },
  {
    city: "Turku",
    iata: "TKU",
    name: "Turku Airport",
    country: "Finland"
  },
  {
    city: "Utti / Valkeala",
    iata: "UTI",
    name: "Utti Air Base",
    country: "Finland"
  },
  {
    city: "Vaasa",
    iata: "VAA",
    name: "Vaasa Airport",
    country: "Finland"
  },
  {
    city: "Varkaus / Joroinen",
    iata: "VRK",
    name: "Varkaus Airport",
    country: "Finland"
  },
  {
    city: "Ylivieska",
    iata: "YLI",
    name: "Ylivieska Airfield",
    country: "Finland"
  },
  {
    city: "Ras Abu Rudeis",
    iata: "AUE",
    name: "Abu Rudeis Airport",
    country: "Egypt"
  },
  {
    city: "Belfast",
    iata: "BFS",
    name: "Belfast International Airport",
    country: "GB"
  },
  {
    city: "Enniskillen, Fermanagh and Omagh",
    iata: "ENK",
    name: "Enniskillen/St Angelo Airport",
    country: "GB"
  },
  {
    city: "Belfast",
    iata: "BHD",
    name: "George Best Belfast City Airport",
    country: "GB"
  },
  {
    city: "Derry, Derry and Strabane",
    iata: "LDY",
    name: "City of Derry Airport",
    country: "GB"
  },
  {
    city: "Birmingham, West Midlands",
    iata: "BHX",
    name: "Birmingham Airport",
    country: "GB"
  },
  {
    city: "Coventry, West Midlands",
    iata: "CVT",
    name: "Coventry Airport",
    country: "GB"
  },
  {
    city: "Staverton, Gloucestershire",
    iata: "GLO",
    name: "Gloucestershire Airport",
    country: "GB"
  },
  {
    city: "Northampton, Northamptonshire",
    iata: "ORM",
    name: "Sywell Aerodrome",
    country: "GB"
  },
  {
    city: "Nottingham, Nottinghamshire",
    iata: "NQT",
    name: "Nottingham City Airport",
    country: "GB"
  },
  {
    city: "Cirencester, Gloucestershire",
    iata: "GBA",
    name: "Cotswold Airport",
    country: "GB"
  },
  {
    city: "Manchester, Greater Manchester",
    iata: "MAN",
    name: "Manchester Airport",
    country: "GB"
  },
  {
    city: "Pewsey, Wiltshire",
    iata: "UPV",
    name: "Upavon Aerodrome",
    country: "GB"
  },
  {
    city: "Yeovil, Somerset",
    iata: "YEO",
    name: "RNAS Yeovilton",
    country: "GB"
  },
  {
    city: "Campbeltown",
    iata: "CAL",
    name: "Campbeltown Airport",
    country: "GB"
  },
  {
    city: "Eday",
    iata: "EOI",
    name: "Eday Airport",
    country: "GB"
  },
  {
    city: "Fair Isle",
    iata: "FIE",
    name: "Fair Isle Airport",
    country: "GB"
  },
  {
    city: "Whalsay, Shetlands",
    iata: "WHS",
    name: "Whalsay Airstrip",
    country: "GB"
  },
  {
    city: "Ashaig, Highland",
    iata: "SKL",
    name: "Broadford Airstrip",
    country: "GB"
  },
  {
    city: "Coll Island",
    iata: "COL",
    name: "Coll Airport",
    country: "GB"
  },
  {
    city: "North Ronaldsay",
    iata: "NRL",
    name: "North Ronaldsay Airport",
    country: "GB"
  },
  {
    city: "North Connel",
    iata: "OBN",
    name: "Oban Airport",
    country: "GB"
  },
  {
    city: "Papa Westray, Orkney Islands",
    iata: "PPW",
    name: "Papa Westray Airport",
    country: "GB"
  },
  {
    city: "Stronsay",
    iata: "SOY",
    name: "Stronsay Airport",
    country: "GB"
  },
  {
    city: "Sanday",
    iata: "NDY",
    name: "Sanday Airport",
    country: "GB"
  },
  {
    city: "Lerwick, Shetland Islands",
    iata: "LWK",
    name: "Lerwick / Tingwall Airport",
    country: "GB"
  },
  {
    city: "Westray, Orkney Islands",
    iata: "WRY",
    name: "Westray Airport",
    country: "GB"
  },
  {
    city: "Colonsay",
    iata: "CSA",
    name: "Colonsay Airstrip",
    country: "GB"
  },
  {
    city: "Haverfordwest",
    iata: "HAW",
    name: "Haverfordwest Airport",
    country: "GB"
  },
  {
    city: "Cardiff",
    iata: "CWL",
    name: "Cardiff International Airport",
    country: "GB"
  },
  {
    city: "Swansea",
    iata: "SWS",
    name: "Swansea Airport",
    country: "GB"
  },
  {
    city: "Bristol",
    iata: "BRS",
    name: "Bristol Airport",
    country: "GB"
  },
  {
    city: "Liverpool",
    iata: "LPL",
    name: "Liverpool John Lennon Airport",
    country: "GB"
  },
  {
    city: "Luton, Luton",
    iata: "LTN",
    name: "London Luton Airport",
    country: "GB"
  },
  {
    city: "Land's End, Cornwall",
    iata: "LEQ",
    name: "Land's End Airport",
    country: "GB"
  },
  {
    city: "St. Mary's, Isles of Scilly",
    iata: "ISC",
    name: "St. Mary's Airport",
    country: "GB"
  },
  {
    city: "Bournemouth",
    iata: "BOH",
    name: "Bournemouth Airport",
    country: "GB"
  },
  {
    city: "Southampton",
    iata: "SOU",
    name: "Southampton Airport",
    country: "GB"
  },
  {
    city: "Bembridge, Isle of Wight",
    iata: "BBP",
    name: "Bembridge Airport",
    country: "GB"
  },
  {
    city: "Newquay",
    iata: "NQY",
    name: "Cornwall Airport Newquay",
    country: "GB"
  },
  {
    city: "Chichester, West Sussex",
    iata: "QUG",
    name: "Goodwood Aerodrome",
    country: "GB"
  },
  {
    city: "Saint Anne",
    iata: "ACI",
    name: "Alderney Airport",
    country: "GG"
  },
  {
    city: "Saint Peter Port",
    iata: "GCI",
    name: "Guernsey Airport",
    country: "GG"
  },
  {
    city: "St. Peter",
    iata: "JER",
    name: "Jersey Airport",
    country: "JE"
  },
  {
    city: "Brighton, East Sussex",
    iata: "ESH",
    name: "Brighton City Airport",
    country: "GB"
  },
  {
    city: "London",
    iata: "BQH",
    name: "London Biggin Hill Airport",
    country: "GB"
  },
  {
    city: "London",
    iata: "LGW",
    name: "London Gatwick Airport",
    country: "GB"
  },
  {
    city: "London",
    iata: "LCY",
    name: "London City Airport",
    country: "GB"
  },
  {
    city: "Farnborough, Hampshire",
    iata: "FAB",
    name: "Farnborough Airport",
    country: "GB"
  },
  {
    city: "Camberley, Surrey",
    iata: "BBS",
    name: "Blackbushe Airport",
    country: "GB"
  },
  {
    city: "London",
    iata: "LHR",
    name: "London Heathrow Airport",
    country: "GB"
  },
  {
    city: "Southend-on-Sea, Essex",
    iata: "SEN",
    name: "London Southend Airport",
    country: "GB"
  },
  {
    city: "Romney Marsh, Kent",
    iata: "LYX",
    name: "Lydd London Ashford Airport",
    country: "GB"
  },
  {
    city: "Carlisle, Cumbria",
    iata: "CAX",
    name: "Carlisle Lake District Airport",
    country: "GB"
  },
  {
    city: "Blackpool",
    iata: "BLK",
    name: "Blackpool Airport",
    country: "GB"
  },
  {
    city: "Grimsby, Lincolnshire",
    iata: "HUY",
    name: "Humberside Airport",
    country: "GB"
  },
  {
    city: "Barrow-in-Furness",
    iata: "BWF",
    name: "Barrow Walney Island Airport",
    country: "GB"
  },
  {
    city: "Leeds, West Yorkshire",
    iata: "LBA",
    name: "Leeds Bradford Airport",
    country: "GB"
  },
  {
    city: "Warton",
    iata: "WRT",
    name: "Warton Aerodrome",
    country: "GB"
  },
  {
    city: "Broughton",
    iata: "CEG",
    name: "Hawarden Airport",
    country: "GB"
  },
  {
    city: "Castletown",
    iata: "IOM",
    name: "Isle of Man Airport",
    country: "IM"
  },
  {
    city: "Newcastle upon Tyne, Tyne and Wear",
    iata: "NCL",
    name: "Newcastle International Airport",
    country: "GB"
  },
  {
    city: "Darlington, Durham",
    iata: "MME",
    name: "Teesside International Airport",
    country: "GB"
  },
  {
    city: "Nottingham, Leicestershire",
    iata: "EMA",
    name: "East Midlands Airport",
    country: "GB"
  },
  {
    city: "Angelsey",
    iata: "VLY",
    name: "Anglesey Airport",
    country: "GB"
  },
  {
    city: "Kirkwall, Orkney Islands",
    iata: "KOI",
    name: "Kirkwall Airport",
    country: "GB"
  },
  {
    city: "Lerwick, Shetland",
    iata: "LSI",
    name: "Sumburgh Airport",
    country: "GB"
  },
  {
    city: "Wick",
    iata: "WIC",
    name: "Wick John O'Groats Airport",
    country: "GB"
  },
  {
    city: "Aberdeen",
    iata: "ABZ",
    name: "Aberdeen International Airport",
    country: "GB"
  },
  {
    city: "Inverness",
    iata: "INV",
    name: "Inverness Airport",
    country: "GB"
  },
  {
    city: "Glasgow",
    iata: "GLA",
    name: "Glasgow Airport",
    country: "GB"
  },
  {
    city: "Edinburgh",
    iata: "EDI",
    name: "Edinburgh Airport",
    country: "GB"
  },
  {
    city: "Isle of Islay, Argyll and Bute",
    iata: "ILY",
    name: "Islay Airport",
    country: "GB"
  },
  {
    city: "Prestwick, South Ayrshire",
    iata: "PIK",
    name: "Glasgow Prestwick Airport",
    country: "GB"
  },
  {
    city: "Balivanich",
    iata: "BEB",
    name: "Benbecula Airport",
    country: "GB"
  },
  {
    city: "Dundee",
    iata: "DND",
    name: "Dundee Airport",
    country: "GB"
  },
  {
    city: "Stornoway, Western Isles",
    iata: "SYY",
    name: "Stornoway Airport",
    country: "GB"
  },
  {
    city: "Eoligarry",
    iata: "BRR",
    name: "Barra Airport",
    country: "GB"
  },
  {
    city: "Perth, Perth and Kinross",
    iata: "PSL",
    name: "Perth/Scone Airport",
    country: "GB"
  },
  {
    city: "Balemartine, Argyll and Bute",
    iata: "TRE",
    name: "Tiree Airport",
    country: "GB"
  },
  {
    city: "Leuchars, Fife",
    iata: "ADX",
    name: "Leuchars Station Airfield",
    country: "GB"
  },
  {
    city: "Lossiemouth, Moray",
    iata: "LMO",
    name: "RAF Lossiemouth",
    country: "GB"
  },
  {
    city: "Cambridge, Cambridgeshire",
    iata: "CBG",
    name: "Cambridge City Airport",
    country: "GB"
  },
  {
    city: "Norwich, Norfolk",
    iata: "NWI",
    name: "Norwich Airport",
    country: "GB"
  },
  {
    city: "London, Essex",
    iata: "STN",
    name: "London Stansted Airport",
    country: "GB"
  },
  {
    city: "Marlow, Buckinghamshire",
    iata: "HYC",
    name: "Wycombe Air Park",
    country: "GB"
  },
  {
    city: "Exeter, Devon",
    iata: "EXT",
    name: "Exeter International Airport",
    country: "GB"
  },
  {
    city: "Kidlington, Oxfordshire",
    iata: "OXF",
    name: "London Oxford Airport",
    country: "GB"
  },
  {
    city: "Rochester, Kent",
    iata: "RCS",
    name: "Rochester Airport",
    country: "GB"
  },
  {
    city: "Wallingford, Oxfordshire",
    iata: "BEX",
    name: "RAF Benson",
    country: "GB"
  },
  {
    city: "Brandon, Suffolk",
    iata: "LKZ",
    name: "RAF Lakenheath",
    country: "GB"
  },
  {
    city: "Bury Saint Edmunds, Suffolk",
    iata: "MHZ",
    name: "RAF Mildenhall",
    country: "GB"
  },
  {
    city: "Fairford, Gloucestershire",
    iata: "FFD",
    name: "RAF Fairford",
    country: "GB"
  },
  {
    city: "Carterton, Oxfordshire",
    iata: "BZZ",
    name: "RAF Brize Norton",
    country: "GB"
  },
  {
    city: "Hook, Hampshire",
    iata: "ODH",
    name: "RAF Odiham",
    country: "GB"
  },
  {
    city: "Northolt, Greater London",
    iata: "NHT",
    name: "RAF Northolt",
    country: "GB"
  },
  {
    city: "Lincoln, Lincolnshire",
    iata: "QCY",
    name: "RAF Coningsby",
    country: "GB"
  },
  {
    city: "Bury Saint Edmunds, Suffolk",
    iata: "BEQ",
    name: "RAF Honington",
    country: "GB"
  },
  {
    city: "Lincoln, Lincolnshire",
    iata: "WTN",
    name: "RAF Waddington",
    country: "GB"
  },
  {
    city: "King's Lynn, Norfolk",
    iata: "KNF",
    name: "RAF Marham",
    country: "GB"
  },
  {
    city: "Mount Pleasant",
    iata: "MPN",
    name: "Mount Pleasant Airport / RAF Mount Pleasant",
    country: "FK"
  },
  {
    city: "Amsterdam",
    iata: "AMS",
    name: "Amsterdam Airport Schiphol",
    country: "Netherlands"
  },
  {
    city: "Maastricht",
    iata: "MST",
    name: "Maastricht Aachen Airport",
    country: "Netherlands"
  },
  {
    city: "Eindhoven",
    iata: "EIN",
    name: "Eindhoven Airport",
    country: "Netherlands"
  },
  {
    city: "Groningen",
    iata: "GRQ",
    name: "Groningen Airport Eelde",
    country: "Netherlands"
  },
  {
    city: "Rijen",
    iata: "GLZ",
    name: "Gilze Rijen Air Base",
    country: "Netherlands"
  },
  {
    city: "Den Helder",
    iata: "DHR",
    name: "De Kooy Airfield / Den Helder Naval Air Station",
    country: "Netherlands"
  },
  {
    city: "Lelystad",
    iata: "LEY",
    name: "Lelystad Airport",
    country: "Netherlands"
  },
  {
    city: "Leeuwarden",
    iata: "LWR",
    name: "Leeuwarden Air Base",
    country: "Netherlands"
  },
  {
    city: "Rotterdam",
    iata: "RTM",
    name: "Rotterdam The Hague Airport",
    country: "Netherlands"
  },
  {
    city: "Enschede",
    iata: "ENS",
    name: "Twente Airport",
    country: "Netherlands"
  },
  {
    city: "Uden",
    iata: "UDE",
    name: "Volkel Air Base",
    country: "Netherlands"
  },
  {
    city: "Hoogerheide",
    iata: "WOE",
    name: "Woensdrecht Air Base",
    country: "Netherlands"
  },
  {
    city: "Bantry",
    iata: "BYT",
    name: "Bantry Aerodrome",
    country: "IE"
  },
  {
    city: "Belmullet",
    iata: "BLY",
    name: "Belmullet Aerodrome",
    country: "IE"
  },
  {
    city: "Inverin",
    iata: "NNR",
    name: "Connemara Regional Airport",
    country: "IE"
  },
  {
    city: "Cork",
    iata: "ORK",
    name: "Cork International Airport",
    country: "IE"
  },
  {
    city: "Donegal",
    iata: "CFN",
    name: "Donegal Airport",
    country: "IE"
  },
  {
    city: "Dublin",
    iata: "DUB",
    name: "Dublin Airport",
    country: "IE"
  },
  {
    city: "Inis Mór",
    iata: "IOR",
    name: "Inishmore Aerodrome",
    country: "IE"
  },
  {
    city: "Inis Oírr",
    iata: "INQ",
    name: "Inisheer Aerodrome",
    country: "IE"
  },
  {
    city: "Kilkenny",
    iata: "KKY",
    name: "Kilkenny Airport",
    country: "IE"
  },
  {
    city: "Charlestown",
    iata: "NOC",
    name: "Ireland West Airport Knock",
    country: "IE"
  },
  {
    city: "Farranfore",
    iata: "KIR",
    name: "Kerry Airport",
    country: "IE"
  },
  {
    city: "Inis Meáin",
    iata: "IIA",
    name: "Inishmaan Aerodrome",
    country: "IE"
  },
  {
    city: "Shannon",
    iata: "SNN",
    name: "Shannon Airport",
    country: "IE"
  },
  {
    city: "Sligo",
    iata: "SXL",
    name: "Sligo Airport",
    country: "IE"
  },
  {
    city: "Waterford",
    iata: "WAT",
    name: "Waterford Airport",
    country: "IE"
  },
  {
    city: "Ejin Banner",
    iata: "EJN",
    name: "Ejin Banner Taolai Airport",
    country: "China"
  },
  {
    city: "Enejit Island",
    iata: "EJT",
    name: "Enejit Airport",
    country: "MH"
  },
  {
    city: "Aarhus",
    iata: "AAR",
    name: "Aarhus Airport",
    country: "Denmark"
  },
  {
    city: "Billund",
    iata: "BLL",
    name: "Billund Airport",
    country: "Denmark"
  },
  {
    city: "Copenhagen",
    iata: "CPH",
    name: "Copenhagen Kastrup Airport",
    country: "Denmark"
  },
  {
    city: "Esbjerg",
    iata: "EBJ",
    name: "Esbjerg Airport",
    country: "Denmark"
  },
  {
    city: "Karup",
    iata: "KRP",
    name: "Midtjyllands Airport / Air Base Karup",
    country: "Denmark"
  },
  {
    city: "Læsø",
    iata: "BYR",
    name: "Læsø Airport",
    country: "Denmark"
  },
  {
    city: "Rødby",
    iata: "MRW",
    name: "Lolland Falster Maribo Airport",
    country: "Denmark"
  },
  {
    city: "Odense",
    iata: "ODE",
    name: "Odense Hans Christian Andersen Airport",
    country: "Denmark"
  },
  {
    city: "Roskilde",
    iata: "RKE",
    name: "Copenhagen Roskilde Airport",
    country: "Denmark"
  },
  {
    city: "Rønne",
    iata: "RNN",
    name: "Bornholm Airport",
    country: "Denmark"
  },
  {
    city: "Sønderborg",
    iata: "SGD",
    name: "Sønderborg Airport",
    country: "Denmark"
  },
  {
    city: "Sindal",
    iata: "CNL",
    name: "Sindal Airport",
    country: "Denmark"
  },
  {
    city: "Vojens",
    iata: "SKS",
    name: "Skrydstrup Air Base",
    country: "Denmark"
  },
  {
    city: "Skive",
    iata: "SQW",
    name: "Skive Airport",
    country: "Denmark"
  },
  {
    city: "Thisted",
    iata: "TED",
    name: "Thisted Airport",
    country: "Denmark"
  },
  {
    city: "Vágar",
    iata: "FAE",
    name: "Vágar Airport",
    country: "FO"
  },
  {
    city: "Skjern",
    iata: "STA",
    name: "Stauning Vestjylland  Airport",
    country: "Denmark"
  },
  {
    city: "Aalborg",
    iata: "AAL",
    name: "Aalborg Airport",
    country: "Denmark"
  },
  {
    city: "Luxembourg",
    iata: "LUX",
    name: "Luxembourg-Findel International Airport",
    country: "LU"
  },
  {
    city: "El Mirador",
    iata: "EMR",
    name: "El Mirador Heliport",
    country: "GT"
  },
  {
    city: "Ålesund",
    iata: "AES",
    name: "Ålesund Airport",
    country: "Norway"
  },
  {
    city: "Andenes",
    iata: "ANX",
    name: "Andøya Airport, Andenes",
    country: "Norway"
  },
  {
    city: "Alta",
    iata: "ALF",
    name: "Alta Airport",
    country: "Norway"
  },
  {
    city: "Førde",
    iata: "FDE",
    name: "Førde Airport, Bringeland",
    country: "Norway"
  },
  {
    city: "Brønnøy",
    iata: "BNN",
    name: "Brønnøysund Airport, Brønnøy",
    country: "Norway"
  },
  {
    city: "Bodø",
    iata: "BOO",
    name: "Bodø Airport",
    country: "Norway"
  },
  {
    city: "Bergen",
    iata: "BGO",
    name: "Bergen Airport, Flesland",
    country: "Norway"
  },
  {
    city: "Båtsfjord",
    iata: "BJF",
    name: "Båtsfjord Airport",
    country: "Norway"
  },
  {
    city: "Berlevåg",
    iata: "BVG",
    name: "Berlevåg Airport",
    country: "Norway"
  },
  {
    city: "Kristiansand(Kjevik)",
    iata: "KRS",
    name: "Kristiansand Airport",
    country: "Norway"
  },
  {
    city: "Målselv",
    iata: "BDU",
    name: "Bardufoss Airport",
    country: "Norway"
  },
  {
    city: "Evenes",
    iata: "EVE",
    name: "Harstad/Narvik Airport",
    country: "Norway"
  },
  {
    city: "Florø",
    iata: "FRO",
    name: "Florø Airport",
    country: "Norway"
  },
  {
    city: "Oslo (Gardermoen)",
    iata: "OSL",
    name: "Oslo-Gardermoen International Airport",
    country: "Norway"
  },
  {
    city: "Hamar",
    iata: "HMR",
    name: "Hamar Lufthavn, Stavsberg",
    country: "Norway"
  },
  {
    city: "Karmøy",
    iata: "HAU",
    name: "Haugesund Airport, Karmøy",
    country: "Norway"
  },
  {
    city: "Hammerfest",
    iata: "HFT",
    name: "Hammerfest Airport",
    country: "Norway"
  },
  {
    city: "Hasvik",
    iata: "HAA",
    name: "Hasvik Airport",
    country: "Norway"
  },
  {
    city: "Honningsvåg",
    iata: "HVG",
    name: "Honningsvåg Airport, Valan",
    country: "Norway"
  },
  {
    city: "Kvernberget",
    iata: "KSU",
    name: "Kristiansund Airport, Kvernberget",
    country: "Norway"
  },
  {
    city: "Klanten flyplass",
    iata: "GLL",
    name: "Gol Airport",
    country: "Norway"
  },
  {
    city: "Kirkenes",
    iata: "KKN",
    name: "Kirkenes Airport, Høybuktmoen",
    country: "Norway"
  },
  {
    city: "Leknes",
    iata: "LKN",
    name: "Leknes Airport",
    country: "Norway"
  },
  {
    city: "Mehamn",
    iata: "MEH",
    name: "Mehamn Airport",
    country: "Norway"
  },
  {
    city: "Årø",
    iata: "MOL",
    name: "Molde Airport, Årø",
    country: "Norway"
  },
  {
    city: "Mosjøen",
    iata: "MJF",
    name: "Mosjøen Airport, Kjærstad",
    country: "Norway"
  },
  {
    city: "Lakselv",
    iata: "LKL",
    name: "Lakselv Airport, Banak",
    country: "Norway"
  },
  {
    city: "Namsos",
    iata: "OSY",
    name: "Namsos Airport",
    country: "Norway"
  },
  {
    city: "Notodden",
    iata: "NTB",
    name: "Notodden Airport",
    country: "Norway"
  },
  {
    city: "Ørland",
    iata: "OLA",
    name: "Ørland Airport",
    country: "Norway"
  },
  {
    city: "Ørsta",
    iata: "HOV",
    name: "Ørsta-Volda Airport, Hovden",
    country: "Norway"
  },
  {
    city: "Mo i Rana",
    iata: "MQN",
    name: "Mo i Rana Airport, Røssvoll",
    country: "Norway"
  },
  {
    city: "Rørvik",
    iata: "RVK",
    name: "Rørvik Airport, Ryum",
    country: "Norway"
  },
  {
    city: "Røros",
    iata: "RRS",
    name: "Røros Airport",
    country: "Norway"
  },
  {
    city: "Røst",
    iata: "RET",
    name: "Røst Airport",
    country: "Norway"
  },
  {
    city: "Longyearbyen",
    iata: "LYR",
    name: "Svalbard Airport, Longyear",
    country: "Norway"
  },
  {
    city: "Sandane",
    iata: "SDN",
    name: "Sandane Airport, Anda",
    country: "Norway"
  },
  {
    city: "Sogndal",
    iata: "SOG",
    name: "Sogndal Airport, Haukåsen",
    country: "Norway"
  },
  {
    city: "Svolvær",
    iata: "SVJ",
    name: "Svolvær Airport, Helle",
    country: "Norway"
  },
  {
    city: "Hadsel",
    iata: "SKN",
    name: "Stokmarknes Airport, Skagen",
    country: "Norway"
  },
  {
    city: "Leirvik",
    iata: "SRP",
    name: "Stord Airport, Sørstokken",
    country: "Norway"
  },
  {
    city: "Sørkjosen",
    iata: "SOJ",
    name: "Sørkjosen Airport",
    country: "Norway"
  },
  {
    city: "Vardø",
    iata: "VAW",
    name: "Vardø Airport, Svartnes",
    country: "Norway"
  },
  {
    city: "Alstahaug",
    iata: "SSJ",
    name: "Sandnessjøen Airport, Stokka",
    country: "Norway"
  },
  {
    city: "Tromsø",
    iata: "TOS",
    name: "Tromsø Airport",
    country: "Norway"
  },
  {
    city: "Sandefjord(Torp)",
    iata: "TRF",
    name: "Sandefjord Airport, Torp",
    country: "Norway"
  },
  {
    city: "Trondheim",
    iata: "TRD",
    name: "Trondheim Airport, Værnes",
    country: "Norway"
  },
  {
    city: "Vadsø",
    iata: "VDS",
    name: "Vadsø Airport",
    country: "Norway"
  },
  {
    city: "Værøy",
    iata: "VRY",
    name: "Værøy Heliport",
    country: "Norway"
  },
  {
    city: "Stavanger",
    iata: "SVG",
    name: "Stavanger Airport, Sola",
    country: "Norway"
  },
  {
    city: "Bydgoszcz",
    iata: "BZG",
    name: "Ignacy Jan Paderewski Bydgoszcz Airport",
    country: "Poland"
  },
  {
    city: "Gdańsk",
    iata: "GDN",
    name: "Gdańsk Lech Wałęsa Airport",
    country: "Poland"
  },
  {
    city: "Balice",
    iata: "KRK",
    name: "Kraków John Paul II International Airport",
    country: "Poland"
  },
  {
    city: "Katowice",
    iata: "KTW",
    name: "Katowice Wojciech Korfanty International Airport",
    country: "Poland"
  },
  {
    city: "Lublin",
    iata: "LUZ",
    name: "Lublin Airport",
    country: "Poland"
  },
  {
    city: "Łódź",
    iata: "LCJ",
    name: "Łódź Władysław Reymont Airport",
    country: "Poland"
  },
  {
    city: "Nowy Dwór Mazowiecki",
    iata: "WMI",
    name: "Warsaw Modlin Airport",
    country: "Poland"
  },
  {
    city: "Poznań",
    iata: "POZ",
    name: "Poznań-Ławica Airport",
    country: "Poland"
  },
  {
    city: "Radom",
    iata: "RDO",
    name: "Warsaw Radom Airport",
    country: "Poland"
  },
  {
    city: "Jasionka",
    iata: "RZE",
    name: "Rzeszów-Jasionka Airport",
    country: "Poland"
  },
  {
    city: "Szczecin(Glewice)",
    iata: "SZZ",
    name: "Solidarity Szczecin–Goleniów Airport",
    country: "Poland"
  },
  {
    city: "Szymany",
    iata: "SZY",
    name: "Olsztyn-Mazury Airport",
    country: "Poland"
  },
  {
    city: "Warsaw",
    iata: "WAW",
    name: "Warsaw Chopin Airport",
    country: "Poland"
  },
  {
    city: "Wrocław",
    iata: "WRO",
    name: "Copernicus Wrocław Airport",
    country: "Poland"
  },
  {
    city: "Nowe Kramsko",
    iata: "IEG",
    name: "Zielona Góra-Babimost Airport",
    country: "Poland"
  },
  {
    city: "Erdenet",
    iata: "ERT",
    name: "Erdenet Airport",
    country: "MN"
  },
  {
    city: "Ronneby",
    iata: "RNB",
    name: "Ronneby Airport",
    country: "Sweden"
  },
  {
    city: "Göteborg",
    iata: "GOT",
    name: "Göteborg Landvetter Airport",
    country: "Sweden"
  },
  {
    city: "Jönköping",
    iata: "JKG",
    name: "Jönköping Airport",
    country: "Sweden"
  },
  {
    city: "Lidköping",
    iata: "LDK",
    name: "Lidköping-Hovby Airport",
    country: "Sweden"
  },
  {
    city: "Göteborg",
    iata: "GSE",
    name: "Säve Airport",
    country: "Sweden"
  },
  {
    city: "Skövde",
    iata: "KVB",
    name: "Skövde Airport",
    country: "Sweden"
  },
  {
    city: "Trollhättan",
    iata: "THN",
    name: "Trollhättan-Vänersborg Airport",
    country: "Sweden"
  },
  {
    city: "Karlskoga",
    iata: "KSK",
    name: "Karlskoga Airport",
    country: "Sweden"
  },
  {
    city: "Mora",
    iata: "MXX",
    name: "Mora Airport",
    country: "Sweden"
  },
  {
    city: "Nyköping",
    iata: "NYO",
    name: "Stockholm Skavsta Airport",
    country: "Sweden"
  },
  {
    city: "Malung-Sälen",
    iata: "SCR",
    name: "Scandinavian Mountains Airport",
    country: "Sweden"
  },
  {
    city: "Kristianstad",
    iata: "KID",
    name: "Kristianstad Airport",
    country: "Sweden"
  },
  {
    city: "Oskarshamn",
    iata: "OSK",
    name: "Oskarshamn Airport",
    country: "Sweden"
  },
  {
    city: "Kalmar",
    iata: "KLR",
    name: "Kalmar Airport",
    country: "Sweden"
  },
  {
    city: "Malmö",
    iata: "MMX",
    name: "Malmö Sturup Airport",
    country: "Sweden"
  },
  {
    city: "Halmstad",
    iata: "HAD",
    name: "Halmstad Airport",
    country: "Sweden"
  },
  {
    city: "Växjö",
    iata: "VXO",
    name: "Växjö Kronoberg Airport",
    country: "Sweden"
  },
  {
    city: "Sveg",
    iata: "EVG",
    name: "Sveg Airport",
    country: "Sweden"
  },
  {
    city: "Gällivare",
    iata: "GEV",
    name: "Gällivare Airport",
    country: "Sweden"
  },
  {
    city: "Nyland",
    iata: "KRF",
    name: "Kramfors-Sollefteå Höga Kusten Airport",
    country: "Sweden"
  },
  {
    city: "Lycksele",
    iata: "LYC",
    name: "Lycksele Airport",
    country: "Sweden"
  },
  {
    city: "Sundsvall/ Härnösand",
    iata: "SDL",
    name: "Sundsvall-Härnösand Airport",
    country: "Sweden"
  },
  {
    city: "Örnsköldsvik",
    iata: "OER",
    name: "Örnsköldsvik Airport",
    country: "Sweden"
  },
  {
    city: "Kiruna",
    iata: "KRN",
    name: "Kiruna Airport",
    country: "Sweden"
  },
  {
    city: "Skellefteå",
    iata: "SFT",
    name: "Skellefteå Airport",
    country: "Sweden"
  },
  {
    city: "Umeå",
    iata: "UME",
    name: "Umeå Airport",
    country: "Sweden"
  },
  {
    city: "Vilhelmina",
    iata: "VHM",
    name: "Vilhelmina South Lapland Airport",
    country: "Sweden"
  },
  {
    city: "Arvidsjaur",
    iata: "AJR",
    name: "Arvidsjaur Airport",
    country: "Sweden"
  },
  {
    city: "Söderhamn",
    iata: "SOO",
    name: "Söderhamn Airport",
    country: "Sweden"
  },
  {
    city: "Östersund",
    iata: "OSD",
    name: "Åre Östersund Airport",
    country: "Sweden"
  },
  {
    city: "Örebro",
    iata: "ORB",
    name: "Örebro Airport",
    country: "Sweden"
  },
  {
    city: "Råda",
    iata: "HFS",
    name: "Hagfors Airport",
    country: "Sweden"
  },
  {
    city: "Karlstad",
    iata: "KSD",
    name: "Karlstad Airport",
    country: "Sweden"
  },
  {
    city: "Stockholm / Västerås",
    iata: "VST",
    name: "Stockholm Västerås Airport",
    country: "Sweden"
  },
  {
    city: "Luleå",
    iata: "LLA",
    name: "Luleå Airport",
    country: "Sweden"
  },
  {
    city: "Stockholm",
    iata: "ARN",
    name: "Stockholm-Arlanda Airport",
    country: "Sweden"
  },
  {
    city: "Stockholm",
    iata: "BMA",
    name: "Stockholm-Bromma Airport",
    country: "Sweden"
  },
  {
    city: "Borlange",
    iata: "BLE",
    name: "Dala Airport",
    country: "Sweden"
  },
  {
    city: "Hultsfred",
    iata: "HLF",
    name: "Hultsfred Airport",
    country: "Sweden"
  },
  {
    city: "Gävle / Sandviken",
    iata: "GVX",
    name: "Gävle Sandviken Airport",
    country: "Sweden"
  },
  {
    city: "Linköping",
    iata: "LPI",
    name: "Linköping City Airport",
    country: "Sweden"
  },
  {
    city: "Norrköping",
    iata: "NRK",
    name: "Norrköping Airport",
    country: "Sweden"
  },
  {
    city: "Torsby",
    iata: "TYF",
    name: "Torsby Airport",
    country: "Sweden"
  },
  {
    city: "Eskilstuna",
    iata: "EKT",
    name: "Eskilstuna Airport",
    country: "Sweden"
  },
  {
    city: "Visby",
    iata: "VBY",
    name: "Visby Airport",
    country: "Sweden"
  },
  {
    city: "Västervik",
    iata: "VVK",
    name: "Västervik Airport",
    country: "Sweden"
  },
  {
    city: "Ängelholm",
    iata: "AGH",
    name: "Ängelholm-Helsingborg Airport",
    country: "Sweden"
  },
  {
    city: "Storuman",
    iata: "SQO",
    name: "Storuman Airport",
    country: "Sweden"
  },
  {
    city: "Idre",
    iata: "IDB",
    name: "Idre Airport",
    country: "Sweden"
  },
  {
    city: "Pajala",
    iata: "PJA",
    name: "Pajala Airport",
    country: "Sweden"
  },
  {
    city: "Hemavan",
    iata: "HMV",
    name: "Hemavan Airport",
    country: "Sweden"
  },
  {
    city: "Geladi",
    iata: "GLC",
    name: "Geladi Airport",
    country: "ET"
  },
  {
    city: "Shire Inda Selassie",
    iata: "SHC",
    name: "Shire Inda Selassie Airport",
    country: "ET"
  },
  {
    city: "Trier",
    iata: "SPM",
    name: "Spangdahlem Air Base",
    country: "Germany"
  },
  {
    city: "Ramstein-Miesenbach",
    iata: "RMS",
    name: "Ramstein Air Base",
    country: "Germany"
  },
  {
    city: "Fritzlar",
    iata: "FRZ",
    name: "Fritzlar Army Airfield",
    country: "Germany"
  },
  {
    city: "Illesheim",
    iata: "ILH",
    name: "Illesheim Army Heliport",
    country: "Germany"
  },
  {
    city: "Kitzingen",
    iata: "KZG",
    name: "Kitzingen Airfield",
    country: "Germany"
  },
  {
    city: "Wurster Nordseeküste",
    iata: "FCN",
    name: "Sea-Airport Cuxhaven/Nordholz / Nordholz Naval Airbase",
    country: "Germany"
  },
  {
    city: "Geilenkirchen",
    iata: "GKE",
    name: "Geilenkirchen Air Base",
    country: "Germany"
  },
  {
    city: "Laage",
    iata: "RLG",
    name: "Rostock-Laage Airport",
    country: "Germany"
  },
  {
    city: "Jagel",
    iata: "WBG",
    name: "Schleswig Air Base",
    country: "Germany"
  },
  {
    city: "Wiesbaden",
    iata: "WIE",
    name: "Wiesbaden Army Airfield",
    country: "Germany"
  },
  {
    city: "Manching",
    iata: "IGS",
    name: "Ingolstadt Manching Airport",
    country: "Germany"
  },
  {
    city: "Liepāja",
    iata: "LPX",
    name: "Liepāja International Airport",
    country: "LV"
  },
  {
    city: "Riga",
    iata: "RIX",
    name: "Riga International Airport",
    country: "LV"
  },
  {
    city: "Ventspils",
    iata: "VNT",
    name: "Ventspils International Airport",
    country: "LV"
  },
  {
    city: "Excursion Inlet",
    iata: "EXI",
    name: "Excursion Inlet Seaplane Base",
    country: "United States"
  },
  {
    city: "Kaunas",
    iata: "KUN",
    name: "Kaunas International Airport",
    country: "LT"
  },
  {
    city: "Palanga",
    iata: "PLQ",
    name: "Palanga International Airport",
    country: "LT"
  },
  {
    city: "Panevėžys",
    iata: "PNV",
    name: "Panevėžys Air Base",
    country: "LT"
  },
  {
    city: "Šiauliai",
    iata: "SQQ",
    name: "Šiauliai International Airport",
    country: "LT"
  },
  {
    city: "Vilnius",
    iata: "VNO",
    name: "Vilnius International Airport",
    country: "LT"
  },
  {
    city: "Ranger",
    iata: "RGR",
    name: "Ranger Municipal Airport",
    country: "United States"
  },
  {
    city: "Alexander Bay",
    iata: "ALJ",
    name: "Alexander Bay Airport",
    country: "South Africa"
  },
  {
    city: "Aggeneys",
    iata: "AGZ",
    name: "Aggeneys Airport",
    country: "South Africa"
  },
  {
    city: "Alldays",
    iata: "ADY",
    name: "Alldays Airport",
    country: "South Africa"
  },
  {
    city: "Bisho",
    iata: "BIY",
    name: "Bisho Airport",
    country: "South Africa"
  },
  {
    city: "Bloemfontein",
    iata: "BFN",
    name: "Bram Fischer International Airport",
    country: "South Africa"
  },
  {
    city: "Bultfontein",
    iata: "UTE",
    name: "Bultfontein Airport",
    country: "South Africa"
  },
  {
    city: "Arathusa",
    iata: "ASS",
    name: "Arathusa Safari Lodge Airport",
    country: "South Africa"
  },
  {
    city: "Cradock",
    iata: "CDO",
    name: "Cradock Airport",
    country: "South Africa"
  },
  {
    city: "Cape Town",
    iata: "CPT",
    name: "Cape Town International Airport",
    country: "South Africa"
  },
  {
    city: "Mubatuba",
    iata: "DUK",
    name: "Mubatuba Airport",
    country: "South Africa"
  },
  {
    city: "Phinda",
    iata: "PZL",
    name: "Zulu Inyala Airport",
    country: "South Africa"
  },
  {
    city: "East London",
    iata: "ELS",
    name: "King Phalo Airport",
    country: "South Africa"
  },
  {
    city: "Empangeni",
    iata: "EMG",
    name: "Empangeni Airport",
    country: "South Africa"
  },
  {
    city: "Ellisras",
    iata: "ELL",
    name: "Ellisras Matimba Airport",
    country: "South Africa"
  },
  {
    city: "Ficksburg",
    iata: "FCB",
    name: "Ficksburg Sentraoes Airport",
    country: "South Africa"
  },
  {
    city: "Midrand",
    iata: "GCJ",
    name: "Grand Central Airport",
    country: "South Africa"
  },
  {
    city: "George",
    iata: "GRJ",
    name: "George Airport",
    country: "South Africa"
  },
  {
    city: "Giyani",
    iata: "GIY",
    name: "Giyani Airport",
    country: "South Africa"
  },
  {
    city: "Johannesburg",
    iata: "QRA",
    name: "Rand Airport",
    country: "South Africa"
  },
  {
    city: "Hluhluwe",
    iata: "HLW",
    name: "Hluhluwe Airport",
    country: "South Africa"
  },
  {
    city: "Harrismith",
    iata: "HRS",
    name: "Harrismith Airport",
    country: "South Africa"
  },
  {
    city: "Hoedspruit",
    iata: "HDS",
    name: "Eastgate Airport / Air Force Base Hoedspruit",
    country: "South Africa"
  },
  {
    city: "Klerksdorp",
    iata: "KXE",
    name: "P C Pelser Airport",
    country: "South Africa"
  },
  {
    city: "Kimberley",
    iata: "KIM",
    name: "Kimberley Airport",
    country: "South Africa"
  },
  {
    city: "Mbombela",
    iata: "MQP",
    name: "Kruger Mpumalanga International Airport",
    country: "South Africa"
  },
  {
    city: "Komatipoort",
    iata: "KOF",
    name: "Komatipoort Airport",
    country: "South Africa"
  },
  {
    city: "Kuruman",
    iata: "KMH",
    name: "Johan Pienaar Airport",
    country: "South Africa"
  },
  {
    city: "Kleinsee",
    iata: "KLZ",
    name: "Kleinsee Airport",
    country: "South Africa"
  },
  {
    city: "Johannesburg",
    iata: "HLA",
    name: "Lanseria International Airport",
    country: "South Africa"
  },
  {
    city: "Lime Acres",
    iata: "LMR",
    name: "Lime Acres Finsch Mine Airport",
    country: "South Africa"
  },
  {
    city: "Londolozi",
    iata: "LDZ",
    name: "Londolozi Airport",
    country: "South Africa"
  },
  {
    city: "Durban",
    iata: "DUR",
    name: "King Shaka International Airport",
    country: "South Africa"
  },
  {
    city: "Louis Trichardt",
    iata: "LCD",
    name: "Louis Trichardt Airport",
    country: "South Africa"
  },
  {
    city: "Langebaanweg",
    iata: "SDB",
    name: "Langebaanweg Airport",
    country: "South Africa"
  },
  {
    city: "Ladysmith",
    iata: "LAY",
    name: "Ladysmith Airport",
    country: "South Africa"
  },
  {
    city: "Malamala",
    iata: "AAM",
    name: "Malamala Airport",
    country: "South Africa"
  },
  {
    city: "Margate",
    iata: "MGH",
    name: "Margate Airport",
    country: "South Africa"
  },
  {
    city: "Musina",
    iata: "MEZ",
    name: "Musina(Messina) Airport",
    country: "South Africa"
  },
  {
    city: "Mafeking",
    iata: "MBD",
    name: "Mmabatho International Airport",
    country: "South Africa"
  },
  {
    city: "Malelane",
    iata: "LLE",
    name: "Malelane Airport",
    country: "South Africa"
  },
  {
    city: "Mossel Bay",
    iata: "MZY",
    name: "Mossel Bay Airport",
    country: "South Africa"
  },
  {
    city: "Mkuze",
    iata: "MZQ",
    name: "Mkuze Airport",
    country: "South Africa"
  },
  {
    city: "Newcastle",
    iata: "NCS",
    name: "Newcastle Airport",
    country: "South Africa"
  },
  {
    city: "Ngala",
    iata: "NGL",
    name: "Ngala Airport",
    country: "South Africa"
  },
  {
    city: "Nelspruit",
    iata: "NLP",
    name: "Nelspruit Airport",
    country: "South Africa"
  },
  {
    city: "Overberg",
    iata: "OVG",
    name: "Overberg Airport",
    country: "South Africa"
  },
  {
    city: "Oudtshoorn",
    iata: "OUH",
    name: "Oudtshoorn Airport",
    country: "South Africa"
  },
  {
    city: "Johannesburg",
    iata: "JNB",
    name: "O.R. Tambo International Airport",
    country: "South Africa"
  },
  {
    city: "Port Alfred",
    iata: "AFD",
    name: "Port Alfred Airport",
    country: "South Africa"
  },
  {
    city: "Gqeberha (Port Elizabeth)",
    iata: "PLZ",
    name: "Chief Dawid Stuurman International Airport",
    country: "South Africa"
  },
  {
    city: "Plettenberg Bay",
    iata: "PBZ",
    name: "Plettenberg Bay Airport",
    country: "South Africa"
  },
  {
    city: "Phalaborwa",
    iata: "PHW",
    name: "Hendrik Van Eck Airport",
    country: "South Africa"
  },
  {
    city: "Port St Johns",
    iata: "JOH",
    name: "Port St Johns Airport",
    country: "South Africa"
  },
  {
    city: "Prieska",
    iata: "PRK",
    name: "Prieska Airport",
    country: "South Africa"
  },
  {
    city: "Pietermaritzburg",
    iata: "PZB",
    name: "Pietermaritzburg Airport",
    country: "South Africa"
  },
  {
    city: "Pilanesberg",
    iata: "NTY",
    name: "Pilanesberg International Airport",
    country: "South Africa"
  },
  {
    city: "Polokwane",
    iata: "PTG",
    name: "Polokwane International Airport",
    country: "South Africa"
  },
  {
    city: "Potchefstroom",
    iata: "PCF",
    name: "Potchefstroom Airport",
    country: "South Africa"
  },
  {
    city: "Queenstown",
    iata: "UTW",
    name: "Queenstown Airport",
    country: "South Africa"
  },
  {
    city: "Richards Bay",
    iata: "RCB",
    name: "Richards Bay Airport",
    country: "South Africa"
  },
  {
    city: "Reivilo",
    iata: "RVO",
    name: "Reivilo Airport",
    country: "South Africa"
  },
  {
    city: "Robertson",
    iata: "ROD",
    name: "Robertson Airport",
    country: "South Africa"
  },
  {
    city: "Springbok",
    iata: "SBU",
    name: "Springbok Airport",
    country: "South Africa"
  },
  {
    city: "Secunda",
    iata: "ZEC",
    name: "Secunda Airport",
    country: "South Africa"
  },
  {
    city: "Belfast",
    iata: "GSS",
    name: "Sabi Sabi Airport",
    country: "South Africa"
  },
  {
    city: "Sishen",
    iata: "SIS",
    name: "Sishen Airport",
    country: "South Africa"
  },
  {
    city: "Skukuza",
    iata: "SZK",
    name: "Skukuza Airport",
    country: "South Africa"
  },
  {
    city: "Thohoyandou",
    iata: "THY",
    name: "Thohoyandou Airport",
    country: "South Africa"
  },
  {
    city: "Homeward",
    iata: "TCU",
    name: "Thaba Nchu Tar Airport",
    country: "South Africa"
  },
  {
    city: "Tzaneen",
    iata: "LTA",
    name: "Tzaneen Airport",
    country: "South Africa"
  },
  {
    city: "Ulundi",
    iata: "ULD",
    name: "Prince Mangosuthu Buthelezi Airport",
    country: "South Africa"
  },
  {
    city: "Upington",
    iata: "UTN",
    name: "Upington Airport",
    country: "South Africa"
  },
  {
    city: "Ulusaba",
    iata: "ULX",
    name: "Ulusaba Airport",
    country: "South Africa"
  },
  {
    city: "Mthatha",
    iata: "UTT",
    name: "K. D. Matanzima Airport",
    country: "South Africa"
  },
  {
    city: "Vyrburg",
    iata: "VRU",
    name: "Vryburg Airport",
    country: "South Africa"
  },
  {
    city: "Durban",
    iata: "VIR",
    name: "Virginia Airport",
    country: "South Africa"
  },
  {
    city: "Vredendal",
    iata: "VRE",
    name: "Vredendal Airport",
    country: "South Africa"
  },
  {
    city: "Vryheid",
    iata: "VYD",
    name: "Vryheid Airport",
    country: "South Africa"
  },
  {
    city: "Pretoria",
    iata: "PRY",
    name: "Wonderboom Airport",
    country: "South Africa"
  },
  {
    city: "Pretoria",
    iata: "WKF",
    name: "Waterkloof Air Force Base",
    country: "South Africa"
  },
  {
    city: "Welkom",
    iata: "WEL",
    name: "Welkom Airport",
    country: "South Africa"
  },
  {
    city: "Francistown",
    iata: "FRW",
    name: "Phillip Gaonwe Matante International Airport",
    country: "BW"
  },
  {
    city: "Ghanzi",
    iata: "GNZ",
    name: "Ghanzi Airport",
    country: "BW"
  },
  {
    city: "Jwaneng",
    iata: "JWA",
    name: "Jwaneng Airport",
    country: "BW"
  },
  {
    city: "Kasane",
    iata: "BBK",
    name: "Kasane International Airport",
    country: "BW"
  },
  {
    city: "Khwai River Lodge",
    iata: "KHW",
    name: "Khwai River Lodge Airport",
    country: "BW"
  },
  {
    city: "Lobatse",
    iata: "LOQ",
    name: "Lobatse Airport",
    country: "BW"
  },
  {
    city: "Maun",
    iata: "MUB",
    name: "Maun International Airport",
    country: "BW"
  },
  {
    city: "Orapa",
    iata: "ORP",
    name: "Orapa Airport",
    country: "BW"
  },
  {
    city: "Gaborone",
    iata: "GBE",
    name: "Sir Seretse Khama International Airport",
    country: "BW"
  },
  {
    city: "Sowa",
    iata: "SXN",
    name: "Sua Pan Airport",
    country: "BW"
  },
  {
    city: "Selebi Phikwe",
    iata: "PKW",
    name: "Selebi Phikwe Airport",
    country: "BW"
  },
  {
    city: "Savuti",
    iata: "SVT",
    name: "Savuti Airport",
    country: "BW"
  },
  {
    city: "Shakawe",
    iata: "SWX",
    name: "Shakawe Airport",
    country: "BW"
  },
  {
    city: "Tuli Lodge",
    iata: "TLD",
    name: "Tuli Lodge Airport",
    country: "BW"
  },
  {
    city: "Tshabong",
    iata: "TBY",
    name: "Tshabong Airport",
    country: "BW"
  },
  {
    city: "Brazzaville",
    iata: "BZV",
    name: "Maya-Maya International Airport",
    country: "CG"
  },
  {
    city: "Djambala",
    iata: "DJM",
    name: "Djambala Airport",
    country: "CG"
  },
  {
    city: "Kindamba",
    iata: "KNJ",
    name: "Kindamba Airport",
    country: "CG"
  },
  {
    city: "Lague",
    iata: "LCO",
    name: "Lague Airport",
    country: "CG"
  },
  {
    city: "Mouyondzi",
    iata: "MUY",
    name: "Mouyondzi Airport",
    country: "CG"
  },
  {
    city: "Sibiti",
    iata: "SIB",
    name: "Sibiti Airport",
    country: "CG"
  },
  {
    city: "Nkayi",
    iata: "NKY",
    name: "Yokangassi Airport",
    country: "CG"
  },
  {
    city: "Zanaga",
    iata: "ANJ",
    name: "Zanaga Airport",
    country: "CG"
  },
  {
    city: "Mossendjo",
    iata: "MSX",
    name: "Mossendjo Airport",
    country: "CG"
  },
  {
    city: "Boundji",
    iata: "BOE",
    name: "Boundji Airport",
    country: "CG"
  },
  {
    city: "Oyo",
    iata: "OLL",
    name: "Oyo Ollombo Airport",
    country: "CG"
  },
  {
    city: "Ewo",
    iata: "EWO",
    name: "Ewo Airport",
    country: "CG"
  },
  {
    city: "Gamboma",
    iata: "GMM",
    name: "Gamboma Airport",
    country: "CG"
  },
  {
    city: "Impfondo",
    iata: "ION",
    name: "Impfondo Airport",
    country: "CG"
  },
  {
    city: "Kelle",
    iata: "KEE",
    name: "Kelle Airport",
    country: "CG"
  },
  {
    city: "Makoua",
    iata: "MKJ",
    name: "Makoua Airport",
    country: "CG"
  },
  {
    city: "Owando",
    iata: "FTX",
    name: "Owando Airport",
    country: "CG"
  },
  {
    city: "Souanke",
    iata: "SOE",
    name: "Souanke Airport",
    country: "CG"
  },
  {
    city: "Betou",
    iata: "BTB",
    name: "Betou Airport",
    country: "CG"
  },
  {
    city: "nan",
    iata: "OUE",
    name: "Ouesso Airport",
    country: "CG"
  },
  {
    city: "Makabana",
    iata: "KMK",
    name: "Makabana Airport",
    country: "CG"
  },
  {
    city: "Dolisie",
    iata: "DIS",
    name: "Ngot Nzoungou Airport",
    country: "CG"
  },
  {
    city: "Pointe Noire",
    iata: "PNR",
    name: "Antonio Agostinho-Neto International Airport",
    country: "CG"
  },
  {
    city: "Manzini",
    iata: "MTS",
    name: "Matsapha International Airport",
    country: "SZ"
  },
  {
    city: "Mpaka",
    iata: "SHO",
    name: "King Mswati III International Airport",
    country: "SZ"
  },
  {
    city: "Carnot",
    iata: "CRF",
    name: "Carnot Airport",
    country: "CF"
  },
  {
    city: "Bangui",
    iata: "BGF",
    name: "Bangui M'Poko International Airport",
    country: "CF"
  },
  {
    city: "Bangassou",
    iata: "BGU",
    name: "Bangassou Airport",
    country: "CF"
  },
  {
    city: "Birao",
    iata: "IRO",
    name: "Birao Airport",
    country: "CF"
  },
  {
    city: "Bambari",
    iata: "BBY",
    name: "Bambari Airport",
    country: "CF"
  },
  {
    city: "N'Délé",
    iata: "NDL",
    name: "N'Délé Airport",
    country: "CF"
  },
  {
    city: "Bouar",
    iata: "BOP",
    name: "Bouar Airport",
    country: "CF"
  },
  {
    city: "Bria",
    iata: "BIV",
    name: "Bria Airport",
    country: "CF"
  },
  {
    city: "Bossangoa",
    iata: "BSN",
    name: "Bossangoa Airport",
    country: "CF"
  },
  {
    city: "Berbérati",
    iata: "BBT",
    name: "Berbérati Airport",
    country: "CF"
  },
  {
    city: "Ouadda",
    iata: "ODA",
    name: "Ouadda Airport",
    country: "CF"
  },
  {
    city: "Yalinga",
    iata: "AIG",
    name: "Yalinga Airport",
    country: "CF"
  },
  {
    city: "Zemio",
    iata: "IMO",
    name: "Zemio Airport",
    country: "CF"
  },
  {
    city: "Mboki",
    iata: "MKI",
    name: "M'Boki Airport",
    country: "CF"
  },
  {
    city: "Batangafo",
    iata: "BTG",
    name: "Batangafo Airport",
    country: "CF"
  },
  {
    city: "Melle",
    iata: "GDI",
    name: "Gordil Airport",
    country: "CF"
  },
  {
    city: "Bakouma",
    iata: "BMF",
    name: "Bakouma Airport",
    country: "CF"
  },
  {
    city: "Ouanda Djallé",
    iata: "ODJ",
    name: "Ouanda Djallé Airport",
    country: "CF"
  },
  {
    city: "Rafaï",
    iata: "RFA",
    name: "Rafaï Airport",
    country: "CF"
  },
  {
    city: "Bouca",
    iata: "BCF",
    name: "Bouca Airport",
    country: "CF"
  },
  {
    city: "Bozoum",
    iata: "BOZ",
    name: "Bozoum Airport",
    country: "CF"
  },
  {
    city: "San Antonio de Palé",
    iata: "NBN",
    name: "Annobón Airport",
    country: "GQ"
  },
  {
    city: "Bata",
    iata: "BSG",
    name: "Bata International Airport",
    country: "GQ"
  },
  {
    city: "Mengomeyén",
    iata: "GEM",
    name: "President Obiang Nguema International Airport",
    country: "GQ"
  },
  {
    city: "Malabo",
    iata: "SSG",
    name: "Malabo International Airport",
    country: "GQ"
  },
  {
    city: "Cat Hill",
    iata: "ASI",
    name: "RAF Ascension Island",
    country: "SH"
  },
  {
    city: "Jamestown",
    iata: "HLE",
    name: "Saint Helena International Airport",
    country: "SH"
  },
  {
    city: "Plaine Magnien",
    iata: "MRU",
    name: "Sir Seewoosagur Ramgoolam International Airport",
    country: "MU"
  },
  {
    city: "Port Mathurin",
    iata: "RRG",
    name: "Sir Charles Gaetan Duval Airport",
    country: "MU"
  },
  {
    city: "Korolevu",
    iata: "KVU",
    name: "Korolevu Seaplane Base",
    country: "FJ"
  },
  {
    city: "Diego Garcia",
    iata: "NKW",
    name: "Naval Support Facility Diego Garcia",
    country: "IO"
  },
  {
    city: "Kribi",
    iata: "KBI",
    name: "Kribi Airport",
    country: "CM"
  },
  {
    city: "Tiko",
    iata: "TKC",
    name: "Tiko Airport",
    country: "CM"
  },
  {
    city: "Douala",
    iata: "DLA",
    name: "Douala International Airport",
    country: "CM"
  },
  {
    city: "Mamfe",
    iata: "MMF",
    name: "Mamfe Airport",
    country: "CM"
  },
  {
    city: "Bali",
    iata: "BLC",
    name: "Bali Airport",
    country: "CM"
  },
  {
    city: "Kaélé",
    iata: "KLE",
    name: "Kaélé Airport",
    country: "CM"
  },
  {
    city: "Batouri",
    iata: "OUR",
    name: "Batouri Airport",
    country: "CM"
  },
  {
    city: "Yagoua",
    iata: "GXX",
    name: "Yagoua Airport",
    country: "CM"
  },
  {
    city: "Maroua",
    iata: "MVR",
    name: "Salak Airport",
    country: "CM"
  },
  {
    city: "Foumban",
    iata: "FOM",
    name: "Foumban Nkounja Airport",
    country: "CM"
  },
  {
    city: "N'Gaoundéré",
    iata: "NGE",
    name: "N'Gaoundéré Airport",
    country: "CM"
  },
  {
    city: "Bertoua",
    iata: "BTA",
    name: "Bertoua Airport",
    country: "CM"
  },
  {
    city: "Garoua",
    iata: "GOU",
    name: "Garoua International Airport",
    country: "CM"
  },
  {
    city: "Dschang",
    iata: "DSC",
    name: "Dschang Airport",
    country: "CM"
  },
  {
    city: "Bafoussam",
    iata: "BFX",
    name: "Bafoussam Airport",
    country: "CM"
  },
  {
    city: "Bamenda",
    iata: "BPC",
    name: "Bamenda Airport",
    country: "CM"
  },
  {
    city: "Ebolowa",
    iata: "EBW",
    name: "Ebolowa Airport",
    country: "CM"
  },
  {
    city: "Yaoundé",
    iata: "YAO",
    name: "Yaoundé Ville Airport",
    country: "CM"
  },
  {
    city: "Yaoundé",
    iata: "NSI",
    name: "Yaoundé Nsimalen International Airport",
    country: "CM"
  },
  {
    city: "Mbala",
    iata: "MMQ",
    name: "Mbala Airport",
    country: "ZM"
  },
  {
    city: "Chipata",
    iata: "CIP",
    name: "Chipata Airport",
    country: "ZM"
  },
  {
    city: "Chunga",
    iata: "CGX",
    name: "Chunga Airstrip",
    country: "ZM"
  },
  {
    city: "Jeki",
    iata: "JEK",
    name: "Jeki Airport",
    country: "ZM"
  },
  {
    city: "Chingola",
    iata: "CGJ",
    name: "Kasompe Airport",
    country: "ZM"
  },
  {
    city: "Kalabo",
    iata: "KLB",
    name: "Kalabo Airport",
    country: "ZM"
  },
  {
    city: "Kaoma",
    iata: "KMZ",
    name: "Kaoma Airport",
    country: "ZM"
  },
  {
    city: "Kasama",
    iata: "KAA",
    name: "Kasama Airport",
    country: "ZM"
  },
  {
    city: "Kasaba Bay",
    iata: "ZKB",
    name: "Kasaba Bay Airport",
    country: "ZM"
  },
  {
    city: "Livingstone",
    iata: "LVI",
    name: "Harry Mwanga Nkumbula International Airport",
    country: "ZM"
  },
  {
    city: "Lukulu",
    iata: "LXU",
    name: "Lukulu Airport",
    country: "ZM"
  },
  {
    city: "Lusaka",
    iata: "LUN",
    name: "Kenneth Kaunda International Airport",
    country: "ZM"
  },
  {
    city: "Mansa",
    iata: "MNS",
    name: "Mansa Airport",
    country: "ZM"
  },
  {
    city: "Mfuwe",
    iata: "MFU",
    name: "Mfuwe International Airport",
    country: "ZM"
  },
  {
    city: "Mongu",
    iata: "MNR",
    name: "Mongu Airport",
    country: "ZM"
  },
  {
    city: "Ngoma",
    iata: "ZGM",
    name: "Ngoma Airport",
    country: "ZM"
  },
  {
    city: "Lower Zambezi River",
    iata: "RYL",
    name: "Royal Zambezi Lodge Airstrip",
    country: "ZM"
  },
  {
    city: "Ndola",
    iata: "NLA",
    name: "Simon Mwansa Kapwepwe International Airport",
    country: "ZM"
  },
  {
    city: "Senanga",
    iata: "SXG",
    name: "Senanga Airport",
    country: "ZM"
  },
  {
    city: "Kitwe",
    iata: "KIW",
    name: "Southdowns Airport",
    country: "ZM"
  },
  {
    city: "Sesheke",
    iata: "SJQ",
    name: "Sesheke Airport",
    country: "ZM"
  },
  {
    city: "Solwesi",
    iata: "SLI",
    name: "Solwesi Airport",
    country: "ZM"
  },
  {
    city: "Flat",
    iata: "FLT",
    name: "Flat Airport",
    country: "United States"
  },
  {
    city: "Zambezi",
    iata: "BBZ",
    name: "Zambezi Airport",
    country: "ZM"
  },
  {
    city: "Falalop Island",
    iata: "ULI",
    name: "Ulithi Airport",
    country: "FM"
  },
  {
    city: "Moroni",
    iata: "HAH",
    name: "Prince Said Ibrahim International Airport",
    country: "KM"
  },
  {
    city: "Fomboni",
    iata: "NWA",
    name: "Mohéli Bandar Es Eslam Airport",
    country: "KM"
  },
  {
    city: "Ouani",
    iata: "AJN",
    name: "Ouani Airport",
    country: "KM"
  },
  {
    city: "Dzaoudzi",
    iata: "DZA",
    name: "Dzaoudzi Pamandzi International Airport",
    country: "YT"
  },
  {
    city: "Sainte-Marie",
    iata: "RUN",
    name: "Roland Garros Airport",
    country: "RE"
  },
  {
    city: "Saint-Pierre",
    iata: "ZSE",
    name: "Saint-Pierre Pierrefonds Airport",
    country: "RE"
  },
  {
    city: "Moramanga",
    iata: "OHB",
    name: "Ambohibary Airport",
    country: "MG"
  },
  {
    city: "Malaimbandy",
    iata: "WML",
    name: "Malaimbandy Airport",
    country: "MG"
  },
  {
    city: "Antsirabe",
    iata: "ATJ",
    name: "Antsirabe Airport",
    country: "MG"
  },
  {
    city: "Antsalova",
    iata: "WAQ",
    name: "Antsalova Airport",
    country: "MG"
  },
  {
    city: "Mahanoro",
    iata: "VVB",
    name: "Mahanoro Airport",
    country: "MG"
  },
  {
    city: "Antananarivo",
    iata: "TNR",
    name: "Ivato International Airport",
    country: "MG"
  },
  {
    city: "Ankavandra",
    iata: "JVA",
    name: "Ankavandra Airport",
    country: "MG"
  },
  {
    city: "Belo sur Tsiribihina",
    iata: "BMD",
    name: "Belo sur Tsiribihina Airport",
    country: "MG"
  },
  {
    city: "Miandrivazo",
    iata: "ZVA",
    name: "Miandrivazo Airport",
    country: "MG"
  },
  {
    city: "Maintirano",
    iata: "MXT",
    name: "Maintirano Airport",
    country: "MG"
  },
  {
    city: "Ilaka",
    iata: "ILK",
    name: "Atsinanana Airport",
    country: "MG"
  },
  {
    city: "Morafenobe",
    iata: "TVA",
    name: "Morafenobe Airport",
    country: "MG"
  },
  {
    city: "Vohilava",
    iata: "SMS",
    name: "Sainte Marie Airport",
    country: "MG"
  },
  {
    city: "Toamasina",
    iata: "TMM",
    name: "Toamasina Ambalamanasy Airport",
    country: "MG"
  },
  {
    city: "Tambohorano",
    iata: "WTA",
    name: "Tambohorano Airport",
    country: "MG"
  },
  {
    city: "Morondava",
    iata: "MOQ",
    name: "Morondava Airport",
    country: "MG"
  },
  {
    city: "Tsiroanomandidy",
    iata: "WTS",
    name: "Tsiroanomandidy Airport",
    country: "MG"
  },
  {
    city: "Vatomandry",
    iata: "VAT",
    name: "Vatomandry Airport",
    country: "MG"
  },
  {
    city: "Ambatondrazaka",
    iata: "WAM",
    name: "Ambatondrazaka Airport",
    country: "MG"
  },
  {
    city: "Antisiranana",
    iata: "DIE",
    name: "Arrachart Airport",
    country: "MG"
  },
  {
    city: "Bealanana",
    iata: "WBE",
    name: "Ankaizina Airport",
    country: "MG"
  },
  {
    city: "Mananara Nord",
    iata: "WMR",
    name: "Mananara Nord Airport",
    country: "MG"
  },
  {
    city: "nan",
    iata: "ZWA",
    name: "Andapa Airport",
    country: "MG"
  },
  {
    city: "nan",
    iata: "AMB",
    name: "Ambilobe Airport",
    country: "MG"
  },
  {
    city: "Befandriana",
    iata: "WBD",
    name: "Avaratra Airport",
    country: "MG"
  },
  {
    city: "Port Bergé",
    iata: "WPB",
    name: "Port Bergé Airport",
    country: "MG"
  },
  {
    city: "Antsirabe",
    iata: "ANM",
    name: "Antsirabe Airport",
    country: "MG"
  },
  {
    city: "Analalava",
    iata: "HVA",
    name: "Analalava Airport",
    country: "MG"
  },
  {
    city: "Mahajanga",
    iata: "MJN",
    name: "Amborovy Airport",
    country: "MG"
  },
  {
    city: "Nosy Be",
    iata: "NOS",
    name: "Nosy Be-Fascene International Airport",
    country: "MG"
  },
  {
    city: "Soalala",
    iata: "DWB",
    name: "Soalala Airport",
    country: "MG"
  },
  {
    city: "Mampikony",
    iata: "WMP",
    name: "Mampikony Airport",
    country: "MG"
  },
  {
    city: "Besalampy",
    iata: "BPY",
    name: "Besalampy Airport",
    country: "MG"
  },
  {
    city: "Maroantsetra",
    iata: "WMN",
    name: "Maroantsetra Airport",
    country: "MG"
  },
  {
    city: "Sambava",
    iata: "SVB",
    name: "Sambava Airport",
    country: "MG"
  },
  {
    city: "Tsaratanana",
    iata: "TTS",
    name: "Tsaratanana Airport",
    country: "MG"
  },
  {
    city: "Vohemar",
    iata: "VOH",
    name: "Vohemar Airport",
    country: "MG"
  },
  {
    city: "Antsohihy",
    iata: "WAI",
    name: "Ambalabe Airport",
    country: "MG"
  },
  {
    city: "Mandritsara",
    iata: "WMA",
    name: "Mandritsara Airport",
    country: "MG"
  },
  {
    city: "nan",
    iata: "IVA",
    name: "Ampampamena Airport",
    country: "MG"
  },
  {
    city: "Beroroha",
    iata: "WBO",
    name: "Antsoa Airport",
    country: "MG"
  },
  {
    city: "Mandabe",
    iata: "WMD",
    name: "Mandabe Airport",
    country: "MG"
  },
  {
    city: "Tôlanaro",
    iata: "FTU",
    name: "Tôlanaro Airport",
    country: "MG"
  },
  {
    city: "Fianarantsoa",
    iata: "WFI",
    name: "Fianarantsoa Airport",
    country: "MG"
  },
  {
    city: "Farafangana",
    iata: "RVA",
    name: "Farafangana Airport",
    country: "MG"
  },
  {
    city: "Ihosy",
    iata: "IHO",
    name: "Ihosy Airport",
    country: "MG"
  },
  {
    city: "Manja",
    iata: "MJA",
    name: "Manja Airport",
    country: "MG"
  },
  {
    city: "Manakara",
    iata: "WVK",
    name: "Manakara Airport",
    country: "MG"
  },
  {
    city: "Bekily",
    iata: "OVA",
    name: "Bekily Airport",
    country: "MG"
  },
  {
    city: "Mananjary",
    iata: "MNJ",
    name: "Mananjary Airport",
    country: "MG"
  },
  {
    city: "Tanandava",
    iata: "TDV",
    name: "Samangoky Airport",
    country: "MG"
  },
  {
    city: "Morombe",
    iata: "MXM",
    name: "Morombe Airport",
    country: "MG"
  },
  {
    city: "Toliara",
    iata: "TLE",
    name: "Toliara Airport",
    country: "MG"
  },
  {
    city: "Vangaindrano",
    iata: "VND",
    name: "Vangaindrano Airport",
    country: "MG"
  },
  {
    city: "Betioky",
    iata: "BKU",
    name: "Betioky Airport",
    country: "MG"
  },
  {
    city: "Ampanihy",
    iata: "AMP",
    name: "Ampanihy Airport",
    country: "MG"
  },
  {
    city: "Ankazoabo",
    iata: "WAK",
    name: "Ankazoabo Airport",
    country: "MG"
  },
  {
    city: "Ambriz",
    iata: "AZZ",
    name: "Ambriz Airport",
    country: "AO"
  },
  {
    city: "Mbanza Congo",
    iata: "SSY",
    name: "Mbanza Congo Airport",
    country: "AO"
  },
  {
    city: "Benguela",
    iata: "BUG",
    name: "Benguela Airport",
    country: "AO"
  },
  {
    city: "Luanda (Ícolo e Bengo)",
    iata: "NBJ",
    name: "Dr. Antonio Agostinho Neto International Airport",
    country: "AO"
  },
  {
    city: "Lumbala N'guimbo",
    iata: "GGC",
    name: "Lumbala Airport",
    country: "AO"
  },
  {
    city: "Cabinda",
    iata: "CAB",
    name: "Cabinda Airport",
    country: "AO"
  },
  {
    city: "Cafunfo",
    iata: "CFF",
    name: "Cafunfo Airport",
    country: "AO"
  },
  {
    city: "Chitato",
    iata: "PGI",
    name: "Chitato Airport",
    country: "AO"
  },
  {
    city: "Capanda",
    iata: "KNP",
    name: "Kapanda Airport",
    country: "AO"
  },
  {
    city: "Catumbela",
    iata: "CBT",
    name: "Catumbela Airport",
    country: "AO"
  },
  {
    city: "Cuito Cuanavale",
    iata: "CTI",
    name: "Cuito Cuanavale Airport",
    country: "AO"
  },
  {
    city: "Camaxilo",
    iata: "CXM",
    name: "Camaxilo Airport",
    country: "AO"
  },
  {
    city: "Cazombo",
    iata: "CAV",
    name: "Cazombo Airport",
    country: "AO"
  },
  {
    city: "Funadhoo",
    iata: "FND",
    name: "Funadhoo Airport",
    country: "MV"
  },
  {
    city: "Chitato",
    iata: "DUE",
    name: "Dundo Airport",
    country: "AO"
  },
  {
    city: "Ngiva",
    iata: "VPE",
    name: "Ngjiva Pereira Airport",
    country: "AO"
  },
  {
    city: "Huambo",
    iata: "NOV",
    name: "Albano Machado Airport",
    country: "AO"
  },
  {
    city: "Kuito",
    iata: "SVP",
    name: "Kuito Airport",
    country: "AO"
  },
  {
    city: "Lobito",
    iata: "LLT",
    name: "Lobito Airport",
    country: "AO"
  },
  {
    city: "Lucapa",
    iata: "LBZ",
    name: "Lucapa Airport",
    country: "AO"
  },
  {
    city: "Luanda",
    iata: "LAD",
    name: "Quatro de Fevereiro International Airport",
    country: "AO"
  },
  {
    city: "Luzamba",
    iata: "LZM",
    name: "Luzamba Airport",
    country: "AO"
  },
  {
    city: "Malanje",
    iata: "MEG",
    name: "Malanje Airport",
    country: "AO"
  },
  {
    city: "Menongue",
    iata: "SPP",
    name: "Menongue Airport",
    country: "AO"
  },
  {
    city: "Moçâmedes",
    iata: "MSZ",
    name: "Welwitschia Mirabilis International Airport",
    country: "AO"
  },
  {
    city: "Negage",
    iata: "GXG",
    name: "Negage Airport",
    country: "AO"
  },
  {
    city: "Port Amboim",
    iata: "PBN",
    name: "Porto Amboim Airport",
    country: "AO"
  },
  {
    city: "Saurimo",
    iata: "VHC",
    name: "Saurimo Airport",
    country: "AO"
  },
  {
    city: "Soyo",
    iata: "SZA",
    name: "Soyo Airport",
    country: "AO"
  },
  {
    city: "Sumbe",
    iata: "NDD",
    name: "Sumbe Airport",
    country: "AO"
  },
  {
    city: "Luau",
    iata: "UAL",
    name: "Luau Airport",
    country: "AO"
  },
  {
    city: "Lubango",
    iata: "SDD",
    name: "Lubango Mukanka International Airport",
    country: "AO"
  },
  {
    city: "Luena",
    iata: "LUO",
    name: "Luena Airport",
    country: "AO"
  },
  {
    city: "Uige",
    iata: "UGO",
    name: "Uige Airport",
    country: "AO"
  },
  {
    city: "Waco Kungo",
    iata: "CEO",
    name: "Waco Kungo Airport",
    country: "AO"
  },
  {
    city: "Xangongo",
    iata: "XGN",
    name: "Xangongo Airport",
    country: "AO"
  },
  {
    city: "N'zeto",
    iata: "ARZ",
    name: "N'zeto Airport",
    country: "AO"
  },
  {
    city: "Nzagi",
    iata: "NZA",
    name: "Nzagi Airport",
    country: "AO"
  },
  {
    city: "Akieni",
    iata: "AKE",
    name: "Akieni Airport",
    country: "GA"
  },
  {
    city: "Booue",
    iata: "BGB",
    name: "Booue Airport",
    country: "GA"
  },
  {
    city: "Ndende",
    iata: "KDN",
    name: "Ndende Airport",
    country: "GA"
  },
  {
    city: "Fougamou",
    iata: "FOU",
    name: "Fougamou Airport",
    country: "GA"
  },
  {
    city: "M'Bigou",
    iata: "MBC",
    name: "M'Bigou Airport",
    country: "GA"
  },
  {
    city: "Moabi",
    iata: "MGX",
    name: "Moabi Airport",
    country: "GA"
  },
  {
    city: "N'Djolé",
    iata: "KDJ",
    name: "Ville Airport",
    country: "GA"
  },
  {
    city: "Koulamoutou",
    iata: "KOU",
    name: "Koulamoutou Mabimbi Airport",
    country: "GA"
  },
  {
    city: "Mouila",
    iata: "MJL",
    name: "Mouilla Ville Airport",
    country: "GA"
  },
  {
    city: "Oyem",
    iata: "OYE",
    name: "Oyem Airport",
    country: "GA"
  },
  {
    city: "Okondja",
    iata: "OKN",
    name: "Okondja Airport",
    country: "GA"
  },
  {
    city: "Lambarene",
    iata: "LBQ",
    name: "Lambarene Airport",
    country: "GA"
  },
  {
    city: "Minvoul",
    iata: "MVX",
    name: "Minvoul Airport",
    country: "GA"
  },
  {
    city: "Wonga Wongué Presidential Reserve",
    iata: "AWE",
    name: "Alowe Airport",
    country: "GA"
  },
  {
    city: "Bitam",
    iata: "BMM",
    name: "Bitam Airport",
    country: "GA"
  },
  {
    city: "Moanda",
    iata: "MFF",
    name: "Moanda Airport",
    country: "GA"
  },
  {
    city: "Mekambo",
    iata: "MKB",
    name: "Mekambo Airport",
    country: "GA"
  },
  {
    city: "Port Gentil",
    iata: "POG",
    name: "Port Gentil International Airport",
    country: "GA"
  },
  {
    city: "Omboue",
    iata: "OMB",
    name: "Omboue Hospital Airport",
    country: "GA"
  },
  {
    city: "Iguela",
    iata: "IGE",
    name: "Tchongorove Airport",
    country: "GA"
  },
  {
    city: "Makokou",
    iata: "MKU",
    name: "Makokou Airport",
    country: "GA"
  },
  {
    city: "Libreville",
    iata: "LBV",
    name: "Libreville Leon M'ba International Airport",
    country: "GA"
  },
  {
    city: "Mitzic",
    iata: "MZC",
    name: "Mitzic Airport",
    country: "GA"
  },
  {
    city: "Franceville",
    iata: "MVB",
    name: "M'Vengue El Hadj Omar Bongo Ondimba International Airport",
    country: "GA"
  },
  {
    city: "Lastourville",
    iata: "LTL",
    name: "Lastourville Airport",
    country: "GA"
  },
  {
    city: "Tchibanga",
    iata: "TCH",
    name: "Tchibanga Airport",
    country: "GA"
  },
  {
    city: "Mayumba",
    iata: "MYB",
    name: "Mayumba Airport",
    country: "GA"
  },
  {
    city: "Foya",
    iata: "FOY",
    name: "Foya Airport",
    country: "LR"
  },
  {
    city: "São Tomé & Príncipe",
    iata: "PCP",
    name: "Principe Airport",
    country: "ST"
  },
  {
    city: "São Tomé",
    iata: "TMS",
    name: "São Tomé International Airport",
    country: "ST"
  },
  {
    city: "Angoche",
    iata: "ANO",
    name: "Angoche Airport",
    country: "MZ"
  },
  {
    city: "Beira",
    iata: "BEW",
    name: "Beira International Airport",
    country: "MZ"
  },
  {
    city: "Cuamba",
    iata: "FXO",
    name: "Cuamba Airport",
    country: "MZ"
  },
  {
    city: "Chimoio",
    iata: "VPY",
    name: "Chimoio Airport",
    country: "MZ"
  },
  {
    city: "Inhaca",
    iata: "IHC",
    name: "Inhaca Airport",
    country: "MZ"
  },
  {
    city: "Ibo",
    iata: "IBO",
    name: "Ibo Airport",
    country: "MZ"
  },
  {
    city: "Inhambane",
    iata: "INH",
    name: "Inhambane Airport",
    country: "MZ"
  },
  {
    city: "Lichinga",
    iata: "VXC",
    name: "Lichinga Airport",
    country: "MZ"
  },
  {
    city: "Lumbo",
    iata: "LFB",
    name: "Lumbo Airport",
    country: "MZ"
  },
  {
    city: "Maputo",
    iata: "MPM",
    name: "Maputo Airport",
    country: "MZ"
  },
  {
    city: "Mueda",
    iata: "MUD",
    name: "Mueda Airport",
    country: "MZ"
  },
  {
    city: "Mocímboa da Praia",
    iata: "MZB",
    name: "Mocímboa da Praia Airport",
    country: "MZ"
  },
  {
    city: "Nacala",
    iata: "MNC",
    name: "Nacala International Airport",
    country: "MZ"
  },
  {
    city: "Nampula",
    iata: "APL",
    name: "Nampula Airport",
    country: "MZ"
  },
  {
    city: "Pemba",
    iata: "POL",
    name: "Pemba Airport",
    country: "MZ"
  },
  {
    city: "Ponta do Ouro",
    iata: "PDD",
    name: "Ponta do Ouro Airport",
    country: "MZ"
  },
  {
    city: "Quelimane",
    iata: "UEL",
    name: "Quelimane Airport",
    country: "MZ"
  },
  {
    city: "Tete",
    iata: "TET",
    name: "Tete Airport",
    country: "MZ"
  },
  {
    city: "Vilanculo",
    iata: "VNX",
    name: "Vilankulo Airport",
    country: "MZ"
  },
  {
    city: "Xai-Xai",
    iata: "VJB",
    name: "Xai-Xai Chongoene Airport",
    country: "MZ"
  },
  {
    city: "Aubagne",
    iata: "JAH",
    name: "Zi Les Paluds Heliport",
    country: "France"
  },
  {
    city: "Desroches Island",
    iata: "DES",
    name: "Desroches Airport",
    country: "SC"
  },
  {
    city: "Victoria",
    iata: "SEZ",
    name: "Seychelles International Airport",
    country: "SC"
  },
  {
    city: "Fossil Downs Station",
    iata: "FSL",
    name: "Fossil Downs Airport",
    country: "Australia"
  },
  {
    city: "Praslin Island",
    iata: "PRI",
    name: "Praslin Island Airport",
    country: "SC"
  },
  {
    city: "Bird Island",
    iata: "BDI",
    name: "Bird Island Airport",
    country: "SC"
  },
  {
    city: "Denis Island",
    iata: "DEI",
    name: "Denis Island Airport",
    country: "SC"
  },
  {
    city: "Frégate Island",
    iata: "FRK",
    name: "Frégate Island Airport (UNUSABLE)",
    country: "SC"
  },
  {
    city: "Sarh",
    iata: "SRH",
    name: "Sarh Airport",
    country: "TD"
  },
  {
    city: "Bongor",
    iata: "OGR",
    name: "Bongor Airport",
    country: "TD"
  },
  {
    city: "Abeche",
    iata: "AEH",
    name: "Abeche Airport",
    country: "TD"
  },
  {
    city: "Moundou",
    iata: "MQQ",
    name: "Moundou Airport",
    country: "TD"
  },
  {
    city: "Lai",
    iata: "LTC",
    name: "Lai Airport",
    country: "TD"
  },
  {
    city: "Ati",
    iata: "ATV",
    name: "Ati Airport",
    country: "TD"
  },
  {
    city: "N'Djamena",
    iata: "NDJ",
    name: "N'Djamena International Airport",
    country: "TD"
  },
  {
    city: "Bokoro",
    iata: "BKR",
    name: "Bokoro Airport",
    country: "TD"
  },
  {
    city: "Bol",
    iata: "OTC",
    name: "Bol-Berim Airport",
    country: "TD"
  },
  {
    city: "Mongo",
    iata: "MVO",
    name: "Mongo Airport",
    country: "TD"
  },
  {
    city: "Am Timan",
    iata: "AMC",
    name: "Am Timan Airport",
    country: "TD"
  },
  {
    city: "Pala",
    iata: "PLF",
    name: "Pala Airport",
    country: "TD"
  },
  {
    city: "Bousso",
    iata: "OUT",
    name: "Bousso Airport",
    country: "TD"
  },
  {
    city: "Mao",
    iata: "AMO",
    name: "Mao Airport",
    country: "TD"
  },
  {
    city: "Faya-Largeau",
    iata: "FYT",
    name: "Faya-Largeau Airport",
    country: "TD"
  },
  {
    city: "Fulleborn",
    iata: "FUB",
    name: "Fulleborn Airport",
    country: "PG"
  },
  {
    city: "Bumi",
    iata: "BZH",
    name: "Bumi Hills Airport",
    country: "ZW"
  },
  {
    city: "Bulawayo",
    iata: "BUQ",
    name: "Joshua Mqabuko Nkomo International Airport",
    country: "ZW"
  },
  {
    city: "Chipinge",
    iata: "CHJ",
    name: "Chipinge Airport",
    country: "ZW"
  },
  {
    city: "Chiredzi",
    iata: "BFO",
    name: "Buffalo Range Airport",
    country: "ZW"
  },
  {
    city: "Victoria Falls",
    iata: "VFA",
    name: "Victoria Falls International Airport",
    country: "ZW"
  },
  {
    city: "Harare",
    iata: "HRE",
    name: "Robert Gabriel Mugabe International Airport",
    country: "ZW"
  },
  {
    city: "Kariba",
    iata: "KAB",
    name: "Kariba Airport",
    country: "ZW"
  },
  {
    city: "Gonarezhou National Park",
    iata: "MJW",
    name: "Mahenye Airport",
    country: "ZW"
  },
  {
    city: "Mutare",
    iata: "UTA",
    name: "Mutare Airport",
    country: "ZW"
  },
  {
    city: "Masvingo",
    iata: "MVZ",
    name: "Masvingo International Airport",
    country: "ZW"
  },
  {
    city: "Gweru",
    iata: "GWE",
    name: "Josiah Tungamirai Air Force Base",
    country: "ZW"
  },
  {
    city: "Gwayi River Farms",
    iata: "HWN",
    name: "Hwange National Park Airport",
    country: "ZW"
  },
  {
    city: "Hwange",
    iata: "WKI",
    name: "Hwange (Town) Airport",
    country: "ZW"
  },
  {
    city: "nan",
    iata: "CEH",
    name: "Chelinda Malawi Airport",
    country: "MW"
  },
  {
    city: "Blantyre",
    iata: "BLZ",
    name: "Chileka International Airport",
    country: "MW"
  },
  {
    city: "Club Makokola",
    iata: "CMK",
    name: "Club Makokola Airport",
    country: "MW"
  },
  {
    city: "Dwangwa",
    iata: "DWA",
    name: "Dwangwa Airport",
    country: "MW"
  },
  {
    city: "Karonga",
    iata: "KGJ",
    name: "Karonga Airport",
    country: "MW"
  },
  {
    city: "Kasungu",
    iata: "KBQ",
    name: "Kasungu Airport",
    country: "MW"
  },
  {
    city: "Lumbadzi",
    iata: "LLW",
    name: "Kamuzu International Airport",
    country: "MW"
  },
  {
    city: "Likoma Island",
    iata: "LIX",
    name: "Likoma Island Airport",
    country: "MW"
  },
  {
    city: "Monkey Bay",
    iata: "MYZ",
    name: "Monkey Bay Airport",
    country: "MW"
  },
  {
    city: "Salima",
    iata: "LMB",
    name: "Salima Airport",
    country: "MW"
  },
  {
    city: "Mzuzu",
    iata: "ZZU",
    name: "Mzuzu Airport",
    country: "MW"
  },
  {
    city: "Lebakeng",
    iata: "LEF",
    name: "Lebakeng Airport",
    country: "LS"
  },
  {
    city: "Leribe",
    iata: "LRB",
    name: "Leribe Airport",
    country: "LS"
  },
  {
    city: "Lesobeng",
    iata: "LES",
    name: "Lesobeng Airport",
    country: "LS"
  },
  {
    city: "Matsaile",
    iata: "MSG",
    name: "Matsaile Airport",
    country: "LS"
  },
  {
    city: "Mafeteng",
    iata: "MFC",
    name: "Mafeteng Airport",
    country: "LS"
  },
  {
    city: "Mokhotlong",
    iata: "MKH",
    name: "Mokhotlong Airport",
    country: "LS"
  },
  {
    city: "Maseru(Mazenod)",
    iata: "MSU",
    name: "Moshoeshoe I International Airport",
    country: "LS"
  },
  {
    city: "Nkaus",
    iata: "NKU",
    name: "Nkaus Airport",
    country: "LS"
  },
  {
    city: "Pelaneng",
    iata: "PEL",
    name: "Pelaneng Airport",
    country: "LS"
  },
  {
    city: "Quthing",
    iata: "UTG",
    name: "Quthing Airport",
    country: "LS"
  },
  {
    city: "Qacha's Nek",
    iata: "UNE",
    name: "Qacha's Nek Airport",
    country: "LS"
  },
  {
    city: "Sehonghong",
    iata: "SHK",
    name: "Sehonghong Airport",
    country: "LS"
  },
  {
    city: "Sekakes",
    iata: "SKQ",
    name: "Sekakes Airport",
    country: "LS"
  },
  {
    city: "Semonkong",
    iata: "SOK",
    name: "Semonkong Airport",
    country: "LS"
  },
  {
    city: "Seshutes",
    iata: "SHZ",
    name: "Seshutes Airport",
    country: "LS"
  },
  {
    city: "Thaba-Tseka",
    iata: "THB",
    name: "Thaba-Tseka Airport",
    country: "LS"
  },
  {
    city: "Tlokoeng",
    iata: "TKO",
    name: "Tlokoeng Airport",
    country: "LS"
  },
  {
    city: "Ai-Ais",
    iata: "AIW",
    name: "Ai-Ais Airport",
    country: "nan"
  },
  {
    city: "Arandis",
    iata: "ADI",
    name: "Arandis Airport",
    country: "nan"
  },
  {
    city: "Gobabis",
    iata: "GOG",
    name: "Gobabis Airport",
    country: "nan"
  },
  {
    city: "Grootfontein",
    iata: "GFY",
    name: "Grootfontein Airport",
    country: "nan"
  },
  {
    city: "Halali",
    iata: "HAL",
    name: "Halali Airport",
    country: "nan"
  },
  {
    city: "Karasburg",
    iata: "KAS",
    name: "Karasburg Airport",
    country: "nan"
  },
  {
    city: "Mpacha",
    iata: "MPA",
    name: "Katima Mulilo Airport",
    country: "nan"
  },
  {
    city: "Keetmanshoop",
    iata: "KMP",
    name: "Keetmanshoop Airport",
    country: "nan"
  },
  {
    city: "Muneambuanas",
    iata: "LHU",
    name: "Lianshulu Lodge Airstrip",
    country: "nan"
  },
  {
    city: "Luderitz",
    iata: "LUD",
    name: "Luderitz Airport",
    country: "nan"
  },
  {
    city: "Mount Etjo Safari Lodge",
    iata: "MJO",
    name: "Mount Etjo Airport",
    country: "nan"
  },
  {
    city: "Midgard",
    iata: "MQG",
    name: "Midgard Airport",
    country: "nan"
  },
  {
    city: "Mokuti Lodge",
    iata: "OKU",
    name: "Mokuti Lodge Airport",
    country: "nan"
  },
  {
    city: "Namutoni",
    iata: "NNI",
    name: "Namutoni Airport",
    country: "nan"
  },
  {
    city: "Ombika",
    iata: "OGV",
    name: "Ongava Lodge Airstrip",
    country: "nan"
  },
  {
    city: "Ondangwa",
    iata: "OND",
    name: "Ondangwa Airport",
    country: "nan"
  },
  {
    city: "Omega",
    iata: "OMG",
    name: "Omega Airport",
    country: "nan"
  },
  {
    city: "Oranjemund",
    iata: "OMD",
    name: "Oranjemund Airport",
    country: "nan"
  },
  {
    city: "Okaukuejo",
    iata: "OKF",
    name: "Okaukuejo Airport",
    country: "nan"
  },
  {
    city: "Opuwa",
    iata: "OPW",
    name: "Opuwa Airport",
    country: "nan"
  },
  {
    city: "Oshakati",
    iata: "OHI",
    name: "Oshakati Airport",
    country: "nan"
  },
  {
    city: "Otjiwarongo",
    iata: "OTJ",
    name: "Otjiwarongo Airport",
    country: "nan"
  },
  {
    city: "Rundu",
    iata: "NDU",
    name: "Rundu Airport",
    country: "nan"
  },
  {
    city: "Rosh Pinah",
    iata: "RHN",
    name: "Skorpion Mine Airport",
    country: "nan"
  },
  {
    city: "Swakopmund",
    iata: "SWP",
    name: "Swakopmund Municipal Aerodrome",
    country: "nan"
  },
  {
    city: "Sesriem",
    iata: "SZM",
    name: "Sesriem Airport",
    country: "nan"
  },
  {
    city: "Terrace Bay",
    iata: "TCY",
    name: "Terrace Bay Airport",
    country: "nan"
  },
  {
    city: "Tsumeb",
    iata: "TSB",
    name: "Tsumeb Airport",
    country: "nan"
  },
  {
    city: "Walvis Bay(Rooikop)",
    iata: "WVB",
    name: "Walvis Bay International Airport",
    country: "nan"
  },
  {
    city: "Windhoek",
    iata: "ERS",
    name: "Eros Airport",
    country: "nan"
  },
  {
    city: "Windhoek",
    iata: "WDH",
    name: "Hosea Kutako International Airport",
    country: "nan"
  },
  {
    city: "Kinshasa",
    iata: "FIH",
    name: "Ndjili International Airport",
    country: "CD"
  },
  {
    city: "N'dolo",
    iata: "NLO",
    name: "Ndolo Airport",
    country: "CD"
  },
  {
    city: "Muanda",
    iata: "MNB",
    name: "Muanda Airport",
    country: "CD"
  },
  {
    city: "Boma",
    iata: "BOA",
    name: "Boma Airport",
    country: "CD"
  },
  {
    city: "Luozi",
    iata: "LZI",
    name: "Luozi Airport",
    country: "CD"
  },
  {
    city: "Matadi",
    iata: "MAT",
    name: "Tshimpi Airport",
    country: "CD"
  },
  {
    city: "N'Kolo-Fuma",
    iata: "NKL",
    name: "N'Kolo-Fuma Airport",
    country: "CD"
  },
  {
    city: "Inongo",
    iata: "INO",
    name: "Inongo Airport",
    country: "CD"
  },
  {
    city: "Nioki",
    iata: "NIO",
    name: "Nioki Airport",
    country: "CD"
  },
  {
    city: "Bandundu",
    iata: "FDU",
    name: "Bandundu Airport",
    country: "CD"
  },
  {
    city: "Kiri",
    iata: "KRZ",
    name: "Kiri Airport",
    country: "CD"
  },
  {
    city: "Kikwit",
    iata: "KKW",
    name: "Kikwit Airport",
    country: "CD"
  },
  {
    city: "Idiofa",
    iata: "IDF",
    name: "Idiofa Airport",
    country: "CD"
  },
  {
    city: "Masi Manimba",
    iata: "MSM",
    name: "Masi Manimba Airport",
    country: "CD"
  },
  {
    city: "Mbandaka",
    iata: "MDK",
    name: "Mbandaka Airport",
    country: "CD"
  },
  {
    city: "Basankusu",
    iata: "BSU",
    name: "Basankusu Airport",
    country: "CD"
  },
  {
    city: "Libenge",
    iata: "LIE",
    name: "Libenge Airport",
    country: "CD"
  },
  {
    city: "Gbadolite",
    iata: "BDT",
    name: "Gbadolite Airport",
    country: "CD"
  },
  {
    city: "Gemena",
    iata: "GMA",
    name: "Gemena Airport",
    country: "CD"
  },
  {
    city: "Kotakoli",
    iata: "KLI",
    name: "Kotakoli Airbase",
    country: "CD"
  },
  {
    city: "Bumba",
    iata: "BMB",
    name: "Bumba Airport",
    country: "CD"
  },
  {
    city: "Lisala",
    iata: "LIQ",
    name: "Lisala Airport",
    country: "CD"
  },
  {
    city: "Boende",
    iata: "BNB",
    name: "Boende Airport",
    country: "CD"
  },
  {
    city: "Ikela",
    iata: "IKL",
    name: "Ikela Airport",
    country: "CD"
  },
  {
    city: "Kisangani",
    iata: "FKI",
    name: "Bangoka International Airport",
    country: "CD"
  },
  {
    city: "Yangambi",
    iata: "YAN",
    name: "Yangambi Airport",
    country: "CD"
  },
  {
    city: "Isiro",
    iata: "IRP",
    name: "Matari Airport",
    country: "CD"
  },
  {
    city: "Bunia",
    iata: "BUX",
    name: "Bunia Airport",
    country: "CD"
  },
  {
    city: "Buta",
    iata: "BZU",
    name: "Buta Zega Airport",
    country: "CD"
  },
  {
    city: "Kamakombe",
    iata: "BKY",
    name: "Bukavu Kavumu Airport",
    country: "CD"
  },
  {
    city: "Butembo",
    iata: "RUE",
    name: "Rughenda Airfield",
    country: "CD"
  },
  {
    city: "Goma",
    iata: "GOM",
    name: "Goma International Airport",
    country: "CD"
  },
  {
    city: "Beni",
    iata: "BNC",
    name: "Beni Airport",
    country: "CD"
  },
  {
    city: "Kindu",
    iata: "KND",
    name: "Kindu Airport",
    country: "CD"
  },
  {
    city: "Kalima",
    iata: "KLY",
    name: "Kinkungwa Airport",
    country: "CD"
  },
  {
    city: "Punia",
    iata: "PUN",
    name: "Punia Airport",
    country: "CD"
  },
  {
    city: "Lubumbashi",
    iata: "FBM",
    name: "Lubumbashi International Airport",
    country: "CD"
  },
  {
    city: "Pweto",
    iata: "PWO",
    name: "Pweto Airport",
    country: "CD"
  },
  {
    city: "Kasenga",
    iata: "KEC",
    name: "Kasenga Airport",
    country: "CD"
  },
  {
    city: "Kolwezi",
    iata: "KWZ",
    name: "Kolwezi Airport",
    country: "CD"
  },
  {
    city: "Manono",
    iata: "MNO",
    name: "Manono Airport",
    country: "CD"
  },
  {
    city: "Moba",
    iata: "BDV",
    name: "Moba Airport",
    country: "CD"
  },
  {
    city: "Kalemie",
    iata: "FMI",
    name: "Kalemie Airport",
    country: "CD"
  },
  {
    city: "Kabalo",
    iata: "KBO",
    name: "Kabalo Airport",
    country: "CD"
  },
  {
    city: "Kongolo",
    iata: "KOO",
    name: "Kongolo Airport",
    country: "CD"
  },
  {
    city: "Kamina",
    iata: "KMN",
    name: "Kamina City Airport",
    country: "CD"
  },
  {
    city: "Kapanga",
    iata: "KAP",
    name: "Kapanga Airport",
    country: "CD"
  },
  {
    city: "Kaniama",
    iata: "KNM",
    name: "Kaniama Airport",
    country: "CD"
  },
  {
    city: "Kananga",
    iata: "KGA",
    name: "Kananga Airport",
    country: "CD"
  },
  {
    city: "Luiza",
    iata: "LZA",
    name: "Luiza Airport",
    country: "CD"
  },
  {
    city: "Tshikapa",
    iata: "TSH",
    name: "Tshikapa Airport",
    country: "CD"
  },
  {
    city: "Lodja",
    iata: "LJA",
    name: "Lodja Airport",
    country: "CD"
  },
  {
    city: "Lusambo",
    iata: "LBO",
    name: "Lusambo Airport",
    country: "CD"
  },
  {
    city: "Mweka",
    iata: "MEW",
    name: "Mweka Airport",
    country: "CD"
  },
  {
    city: "Basongo",
    iata: "BAN",
    name: "Basongo Airport",
    country: "CD"
  },
  {
    city: "Ilebo",
    iata: "PFR",
    name: "Ilebo Airport",
    country: "CD"
  },
  {
    city: "Mbuji Mayi",
    iata: "MJM",
    name: "Mbuji Mayi Airport",
    country: "CD"
  },
  {
    city: "Kabinda",
    iata: "KBN",
    name: "Tunta Airport",
    country: "CD"
  },
  {
    city: "Ntoum",
    iata: "NKA",
    name: "Nkan Airstrip",
    country: "GA"
  },
  {
    city: "Miele Mimbale",
    iata: "GIM",
    name: "Miele Mimbale Airport",
    country: "GA"
  },
  {
    city: "Gamba",
    iata: "GAX",
    name: "Gamba Airport",
    country: "GA"
  },
  {
    city: "Bamako",
    iata: "BKO",
    name: "Modibo Keita International Airport",
    country: "ML"
  },
  {
    city: "Goundam",
    iata: "GUD",
    name: "Goundam Airport",
    country: "ML"
  },
  {
    city: "Gao",
    iata: "GAQ",
    name: "Gao International Airport",
    country: "ML"
  },
  {
    city: "Kenieba",
    iata: "KNZ",
    name: "Kenieba Airport",
    country: "ML"
  },
  {
    city: "Koutiala",
    iata: "KTX",
    name: "Koutiala Airport",
    country: "ML"
  },
  {
    city: "Kayes",
    iata: "KYS",
    name: "Kayes Dag Dag Airport",
    country: "ML"
  },
  {
    city: "Sévaré",
    iata: "MZI",
    name: "Mopti Airport",
    country: "ML"
  },
  {
    city: "Nara",
    iata: "NRM",
    name: "Nara Airport",
    country: "ML"
  },
  {
    city: "Nioro du Sahel",
    iata: "NIX",
    name: "Nioro du Sahel Airport",
    country: "ML"
  },
  {
    city: "Sikasso",
    iata: "KSS",
    name: "Sikasso Airport",
    country: "ML"
  },
  {
    city: "Timbuktu",
    iata: "TOM",
    name: "Tombouktou Airport",
    country: "ML"
  },
  {
    city: "Yélimané",
    iata: "EYL",
    name: "Yélimané Airport",
    country: "ML"
  },
  {
    city: "St Ives, Cambridgeshire",
    iata: "QUY",
    name: "RAF Wyton",
    country: "GB"
  },
  {
    city: "Penzance, Cornwall",
    iata: "PZE",
    name: "Penzance Heliport",
    country: "GB"
  },
  {
    city: "Flotta Isle",
    iata: "FLH",
    name: "Flotta Isle Airstrip",
    country: "GB"
  },
  {
    city: "Foula",
    iata: "FOA",
    name: "Foula Airfield",
    country: "GB"
  },
  {
    city: "Garbaharey",
    iata: "GBM",
    name: "Garbaharey Airport",
    country: "SO"
  },
  {
    city: "Yundum",
    iata: "BJL",
    name: "Banjul International Airport",
    country: "GM"
  },
  {
    city: "El Matorral",
    iata: "FUE",
    name: "Fuerteventura Airport",
    country: "Spain"
  },
  {
    city: "Alajero, La Gomera Island",
    iata: "GMZ",
    name: "La Gomera Airport",
    country: "Spain"
  },
  {
    city: "El Hierro Island",
    iata: "VDE",
    name: "El Hierro Airport",
    country: "Spain"
  },
  {
    city: "Sta Cruz de la Palma, La Palma Island",
    iata: "SPC",
    name: "La Palma Airport",
    country: "Spain"
  },
  {
    city: "Gran Canaria Island",
    iata: "LPA",
    name: "Gran Canaria Airport",
    country: "Spain"
  },
  {
    city: "San Bartolomé",
    iata: "ACE",
    name: "César Manrique-Lanzarote Airport",
    country: "Spain"
  },
  {
    city: "Tenerife",
    iata: "TFS",
    name: "Tenerife Sur Airport",
    country: "Spain"
  },
  {
    city: "Gravatai",
    iata: "GCV",
    name: "Gravatai Airport",
    country: "Brazil"
  },
  {
    city: "Tenerife",
    iata: "TFN",
    name: "Tenerife Norte-Ciudad de La Laguna Airport",
    country: "Spain"
  },
  {
    city: "Ceuta",
    iata: "JCU",
    name: "Ceuta Heliport",
    country: "Spain"
  },
  {
    city: "Melilla",
    iata: "MLN",
    name: "Melilla Airport",
    country: "Spain"
  },
  {
    city: "Camopi",
    iata: "OYC",
    name: "Camopi Airport",
    country: "GF"
  },
  {
    city: "Bo",
    iata: "KBS",
    name: "Bo Airport",
    country: "SL"
  },
  {
    city: "Gbangbatok",
    iata: "GBK",
    name: "Gbangbatok Airport",
    country: "SL"
  },
  {
    city: "Freetown",
    iata: "HGS",
    name: "Hastings Airport",
    country: "SL"
  },
  {
    city: "Kabala",
    iata: "KBA",
    name: "Kabala Airport",
    country: "SL"
  },
  {
    city: "Kenema",
    iata: "KEN",
    name: "Kenema Airport",
    country: "SL"
  },
  {
    city: "Freetown (Lungi-Town)",
    iata: "FNA",
    name: "Lungi International Airport",
    country: "SL"
  },
  {
    city: "Yengema",
    iata: "WYE",
    name: "Yengema Airport",
    country: "SL"
  },
  {
    city: "Bubaque",
    iata: "BQE",
    name: "Bubaque Airport",
    country: "GW"
  },
  {
    city: "Bissau",
    iata: "OXB",
    name: "Osvaldo Vieira International Airport",
    country: "GW"
  },
  {
    city: "Garachiné",
    iata: "GHE",
    name: "Garachiné Airport",
    country: "PA"
  },
  {
    city: "Akunnaaq",
    iata: "QCU",
    name: "Akunnaaq Heliport",
    country: "GL"
  },
  {
    city: "Buchanan",
    iata: "UCN",
    name: "Buchanan Airport",
    country: "LR"
  },
  {
    city: "Harper",
    iata: "CPA",
    name: "Cape Palmas Airport",
    country: "LR"
  },
  {
    city: "Greenville",
    iata: "SNI",
    name: "Greenville/Sinoe Airport",
    country: "LR"
  },
  {
    city: "Monrovia",
    iata: "MLW",
    name: "Spriggs Payne Airport",
    country: "LR"
  },
  {
    city: "Nimba",
    iata: "NIA",
    name: "Nimba Airport",
    country: "LR"
  },
  {
    city: "Monrovia",
    iata: "ROB",
    name: "Roberts International Airport",
    country: "LR"
  },
  {
    city: "Sasstown",
    iata: "SAZ",
    name: "Sasstown Airport",
    country: "LR"
  },
  {
    city: "Zwedru",
    iata: "THC",
    name: "Tchien Airport",
    country: "LR"
  },
  {
    city: "Voinjama",
    iata: "VOI",
    name: "Voinjama Airport",
    country: "LR"
  },
  {
    city: "Agadir (Temsia)",
    iata: "AGA",
    name: "Al Massira Airport",
    country: "MA"
  },
  {
    city: "Tan Tan",
    iata: "TTA",
    name: "Tan Tan Airport",
    country: "MA"
  },
  {
    city: "Zagora",
    iata: "OZG",
    name: "Zagora Airport",
    country: "MA"
  },
  {
    city: "Bouarfa",
    iata: "UAR",
    name: "Bouarfa Airport",
    country: "MA"
  },
  {
    city: "Saïss",
    iata: "FEZ",
    name: "Fes Saïss International Airport",
    country: "MA"
  },
  {
    city: "Errachidia",
    iata: "ERH",
    name: "Moulay Ali Cherif Airport",
    country: "MA"
  },
  {
    city: "Meknes",
    iata: "MEK",
    name: "Bassatine Airport",
    country: "MA"
  },
  {
    city: "Ahl Angad",
    iata: "OUD",
    name: "Oujda Angads Airport",
    country: "MA"
  },
  {
    city: "Smara",
    iata: "SMW",
    name: "Smara Airport",
    country: "EH"
  },
  {
    city: "Ben Slimane",
    iata: "GMD",
    name: "Ben Slimane Airport",
    country: "MA"
  },
  {
    city: "Oulad Yaich",
    iata: "BEM",
    name: "Beni Mellal Airport",
    country: "MA"
  },
  {
    city: "Rabat",
    iata: "RBA",
    name: "Rabat-Salé Airport",
    country: "MA"
  },
  {
    city: "Dakhla",
    iata: "VIL",
    name: "Dakhla Airport",
    country: "EH"
  },
  {
    city: "Essaouira",
    iata: "ESU",
    name: "Essaouira-Mogador Airport",
    country: "MA"
  },
  {
    city: "El Aaiún",
    iata: "EUN",
    name: "Laayoune Hassan I International Airport",
    country: "EH"
  },
  {
    city: "Casablanca",
    iata: "CMN",
    name: "Mohammed V International Airport",
    country: "MA"
  },
  {
    city: "Al Aaroui",
    iata: "NDR",
    name: "Nador Al Aaroui International Airport",
    country: "MA"
  },
  {
    city: "Marrakesh",
    iata: "RAK",
    name: "Marrakesh Menara Airport",
    country: "MA"
  },
  {
    city: "Kenitra",
    iata: "NNA",
    name: "Kenitra Air Base",
    country: "MA"
  },
  {
    city: "Ouarzazate",
    iata: "OZZ",
    name: "Ouarzazate International Airport",
    country: "MA"
  },
  {
    city: "Al Hoceima",
    iata: "AHU",
    name: "Cherif Al Idrissi Airport",
    country: "MA"
  },
  {
    city: "Tétouan",
    iata: "TTU",
    name: "Sania Ramel Airport",
    country: "MA"
  },
  {
    city: "Tangier",
    iata: "TNG",
    name: "Tangier Ibn Battuta Airport",
    country: "MA"
  },
  {
    city: "Goodnews",
    iata: "GNU",
    name: "Goodnews Airport",
    country: "United States"
  },
  {
    city: "Dakar",
    iata: "DSS",
    name: "Blaise Diagne International Airport",
    country: "SN"
  },
  {
    city: "Kolda",
    iata: "KDA",
    name: "Kolda Airport",
    country: "SN"
  },
  {
    city: "Ziguinchor",
    iata: "ZIG",
    name: "Ziguinchor Airport",
    country: "SN"
  },
  {
    city: "Cap Skirring",
    iata: "CSK",
    name: "Cap Skirring Airport",
    country: "SN"
  },
  {
    city: "Kaolack",
    iata: "KLC",
    name: "Kaolack Airport",
    country: "SN"
  },
  {
    city: "Dakar",
    iata: "DKR",
    name: "Léopold Sédar Senghor International Airport",
    country: "SN"
  },
  {
    city: "Ouro Sogui",
    iata: "MAX",
    name: "Ouro Sogui Airport",
    country: "SN"
  },
  {
    city: "Podor",
    iata: "POD",
    name: "Podor Airport",
    country: "SN"
  },
  {
    city: "Richard Toll",
    iata: "RDT",
    name: "Richard Toll Airport",
    country: "SN"
  },
  {
    city: "Saint Louis",
    iata: "XLS",
    name: "Saint Louis Airport",
    country: "SN"
  },
  {
    city: "Bakel",
    iata: "BXE",
    name: "Bakel Airport",
    country: "SN"
  },
  {
    city: "Kédougou",
    iata: "KGG",
    name: "Kédougou Airport",
    country: "SN"
  },
  {
    city: "Simenti",
    iata: "SMY",
    name: "Simenti Airport",
    country: "SN"
  },
  {
    city: "Tambacounda",
    iata: "TUD",
    name: "Tambacounda Airport",
    country: "SN"
  },
  {
    city: "Aioun El Atrouss",
    iata: "AEO",
    name: "Aioun el Atrouss Airport",
    country: "MR"
  },
  {
    city: "Boutilimit",
    iata: "OTL",
    name: "Boutilimit Airport",
    country: "MR"
  },
  {
    city: "Tichitt",
    iata: "THI",
    name: "Tichitt Airport",
    country: "MR"
  },
  {
    city: "Tidjikja",
    iata: "TIY",
    name: "Tidjikja Airport",
    country: "MR"
  },
  {
    city: "Boghe",
    iata: "BGH",
    name: "Abbaye Airport",
    country: "MR"
  },
  {
    city: "Kiffa",
    iata: "KFA",
    name: "Kiffa Airport",
    country: "MR"
  },
  {
    city: "Timbedra",
    iata: "TMD",
    name: "Timbedra Airport",
    country: "MR"
  },
  {
    city: "Néma",
    iata: "EMN",
    name: "Néma Airport",
    country: "MR"
  },
  {
    city: "Akjoujt",
    iata: "AJJ",
    name: "Akjoujt Airport",
    country: "MR"
  },
  {
    city: "Kaédi",
    iata: "KED",
    name: "Kaédi Airport",
    country: "MR"
  },
  {
    city: "Moudjeria",
    iata: "MOM",
    name: "Letfotar Airport",
    country: "MR"
  },
  {
    city: "Nouakchott",
    iata: "NKC",
    name: "Nouakchott–Oumtounsy International Airport",
    country: "MR"
  },
  {
    city: "Sélibaby",
    iata: "SEY",
    name: "Sélibaby Airport",
    country: "MR"
  },
  {
    city: "Tamchakett",
    iata: "THT",
    name: "Tamchakett Airport",
    country: "MR"
  },
  {
    city: "Atar",
    iata: "ATR",
    name: "Atar International Airport",
    country: "MR"
  },
  {
    city: "Fderik",
    iata: "FGD",
    name: "Fderik Airport",
    country: "MR"
  },
  {
    city: "Nouadhibou",
    iata: "NDB",
    name: "Nouadhibou International Airport",
    country: "MR"
  },
  {
    city: "Zouérate",
    iata: "OUZ",
    name: "Tazadit Airport",
    country: "MR"
  },
  {
    city: "Grand Cess",
    iata: "GRC",
    name: "Grand Cess Airport",
    country: "LR"
  },
  {
    city: "Chiquimula",
    iata: "CIQ",
    name: "Chiquimula Airport",
    country: "GT"
  },
  {
    city: "Dos Lagunas",
    iata: "DON",
    name: "Dos Lagunas Airport",
    country: "GT"
  },
  {
    city: "El Naranjo",
    iata: "ENJ",
    name: "El Naranjo Airport",
    country: "GT"
  },
  {
    city: "Paso Caballos",
    iata: "PCG",
    name: "Paso Caballos Airport",
    country: "GT"
  },
  {
    city: "Uaxactun",
    iata: "UAX",
    name: "Uaxactun Airport",
    country: "GT"
  },
  {
    city: "Conakry",
    iata: "CKY",
    name: "Ahmed Sékou Touré International Airport",
    country: "GN"
  },
  {
    city: "Guriaso",
    iata: "GUE",
    name: "Guriaso (Keraso) Airport",
    country: "PG"
  },
  {
    city: "Fria",
    iata: "FIG",
    name: "Fria Airport",
    country: "GN"
  },
  {
    city: "Faranah",
    iata: "FAA",
    name: "Faranah Airport",
    country: "GN"
  },
  {
    city: "Kissidougou",
    iata: "KSI",
    name: "Kissidougou Airport",
    country: "GN"
  },
  {
    city: "Labé",
    iata: "LEK",
    name: "Tata Airport",
    country: "GN"
  },
  {
    city: "Macenta",
    iata: "MCA",
    name: "Macenta Airport",
    country: "GN"
  },
  {
    city: "Nzérékoré",
    iata: "NZE",
    name: "Nzérékoré Airport",
    country: "GN"
  },
  {
    city: "Boké",
    iata: "BKJ",
    name: "Boké Baralande Airport",
    country: "GN"
  },
  {
    city: "Koundara",
    iata: "SBI",
    name: "Sambailo Airport",
    country: "GN"
  },
  {
    city: "Siguiri",
    iata: "GII",
    name: "Siguiri Airport",
    country: "GN"
  },
  {
    city: "Espargos",
    iata: "SID",
    name: "Amílcar Cabral International Airport",
    country: "CV"
  },
  {
    city: "Ponta do Sol",
    iata: "NTO",
    name: "Agostinho Neto Airport",
    country: "CV"
  },
  {
    city: "Rabil",
    iata: "BVC",
    name: "Aristides Pereira International Airport",
    country: "CV"
  },
  {
    city: "Vila do Maio",
    iata: "MMO",
    name: "Maio Airport",
    country: "CV"
  },
  {
    city: "Vila do Mosteiros",
    iata: "MTI",
    name: "Mosteiros Airport",
    country: "CV"
  },
  {
    city: "Praia",
    iata: "RAI",
    name: "Nelson Mandela International Airport",
    country: "CV"
  },
  {
    city: "São Filipe",
    iata: "SFL",
    name: "São Filipe Airport",
    country: "CV"
  },
  {
    city: "Preguiça",
    iata: "SNE",
    name: "Preguiça Airport",
    country: "CV"
  },
  {
    city: "São Pedro",
    iata: "VXE",
    name: "Cesaria Evora International Airport",
    country: "CV"
  },
  {
    city: "Kankan",
    iata: "KNN",
    name: "Kankan Airport",
    country: "GN"
  },
  {
    city: "Kumaka",
    iata: "BCG",
    name: "Bemichi Airport",
    country: "GY"
  },
  {
    city: "Botopasi",
    iata: "BTO",
    name: "Botopasi Airport",
    country: "SR"
  },
  {
    city: "Djumu-Djomoe",
    iata: "DOE",
    name: "Djumu-Djomoe Airport",
    country: "SR"
  },
  {
    city: "Addis Ababa",
    iata: "ADD",
    name: "Addis Ababa Bole International Airport",
    country: "ET"
  },
  {
    city: "Arba Minch",
    iata: "AMH",
    name: "Arba Minch Airport",
    country: "ET"
  },
  {
    city: "Axum",
    iata: "AXU",
    name: "Axum Airport",
    country: "ET"
  },
  {
    city: "Bahir Dar",
    iata: "BJR",
    name: "Bahir Dar Airport",
    country: "ET"
  },
  {
    city: "Beica",
    iata: "BEI",
    name: "Beica Airport",
    country: "ET"
  },
  {
    city: "Dessie",
    iata: "DSE",
    name: "Kombolcha Airport",
    country: "ET"
  },
  {
    city: "Dembidollo",
    iata: "DEM",
    name: "Dembidollo Airport",
    country: "ET"
  },
  {
    city: "Debre Markos",
    iata: "DBM",
    name: "Debre Markos Airport",
    country: "ET"
  },
  {
    city: "Dire Dawa",
    iata: "DIR",
    name: "Aba Tenna Dejazmach Yilma International Airport",
    country: "ET"
  },
  {
    city: "Debre Tabor",
    iata: "DBT",
    name: "Debre Tabor Airport",
    country: "ET"
  },
  {
    city: "Fincha",
    iata: "FNH",
    name: "Fincha Airport",
    country: "ET"
  },
  {
    city: "Goba",
    iata: "GOB",
    name: "Robe Airport",
    country: "ET"
  },
  {
    city: "Ghinnir",
    iata: "GNN",
    name: "Ghinnir Airport",
    country: "ET"
  },
  {
    city: "Gambela",
    iata: "GMB",
    name: "Gambela Airport",
    country: "ET"
  },
  {
    city: "Azezo",
    iata: "GDQ",
    name: "Gondar Airport",
    country: "ET"
  },
  {
    city: "Gode",
    iata: "GDE",
    name: "Gode Airport",
    country: "ET"
  },
  {
    city: "Gore",
    iata: "GOR",
    name: "Gore Airport",
    country: "ET"
  },
  {
    city: "Debre Zeyit",
    iata: "QHR",
    name: "Harar Meda Airport",
    country: "ET"
  },
  {
    city: "Akwi",
    iata: "HUE",
    name: "Humera Airport",
    country: "ET"
  },
  {
    city: "Jijiga",
    iata: "JIJ",
    name: "Gerad Wilwal International Airport",
    country: "ET"
  },
  {
    city: "Jinka",
    iata: "BCO",
    name: "Baco Airport",
    country: "ET"
  },
  {
    city: "Jimma",
    iata: "JIM",
    name: "Jimma Airport",
    country: "ET"
  },
  {
    city: "Kebri Dahar",
    iata: "ABK",
    name: "Kebri Dahar Airport",
    country: "ET"
  },
  {
    city: "Kelafo",
    iata: "LFO",
    name: "Kelafo East Airport",
    country: "ET"
  },
  {
    city: "Hawassa",
    iata: "AWA",
    name: "Hawassa International Airport",
    country: "ET"
  },
  {
    city: "Girany Amba",
    iata: "LLI",
    name: "Lalibela Airport",
    country: "ET"
  },
  {
    city: "Mekane Selam",
    iata: "MKS",
    name: "Mekane Selam Airport",
    country: "ET"
  },
  {
    city: "Mekele",
    iata: "MQX",
    name: "Alula Aba Nega Airport",
    country: "ET"
  },
  {
    city: "Metema",
    iata: "ETE",
    name: "Metema Airport",
    country: "ET"
  },
  {
    city: "Mendi",
    iata: "NDM",
    name: "Mendi Airport",
    country: "ET"
  },
  {
    city: "Omo National Park",
    iata: "MUJ",
    name: "Mui River Airport",
    country: "ET"
  },
  {
    city: "Mizan Teferi",
    iata: "MTF",
    name: "Mizan Teferi Airport",
    country: "ET"
  },
  {
    city: "Negele Borana",
    iata: "EGL",
    name: "Negele Airport",
    country: "ET"
  },
  {
    city: "Nejo",
    iata: "NEJ",
    name: "Nejjo Airport",
    country: "ET"
  },
  {
    city: "Nekemte",
    iata: "NEK",
    name: "Nekemte Airport",
    country: "ET"
  },
  {
    city: "Pawe",
    iata: "PWI",
    name: "Beles Airport",
    country: "ET"
  },
  {
    city: "Soddu",
    iata: "SXU",
    name: "Soddu Airport",
    country: "ET"
  },
  {
    city: "Shakiso",
    iata: "SKR",
    name: "Shakiso Airport",
    country: "ET"
  },
  {
    city: "Shilavo",
    iata: "HIL",
    name: "Shilavo Airport",
    country: "ET"
  },
  {
    city: "Semera",
    iata: "SZE",
    name: "Semera Airport",
    country: "ET"
  },
  {
    city: "Asosa",
    iata: "ASO",
    name: "Asosa Airport",
    country: "ET"
  },
  {
    city: "Tippi",
    iata: "TIE",
    name: "Tippi Airport",
    country: "ET"
  },
  {
    city: "Warder",
    iata: "WRA",
    name: "Warder Airport",
    country: "ET"
  },
  {
    city: "Hatzfeldhaven",
    iata: "HAZ",
    name: "Hatzfeldhaven Airport",
    country: "PG"
  },
  {
    city: "Bujumbura",
    iata: "BJM",
    name: "Bujumbura Melchior Ndadaye International Airport",
    country: "BI"
  },
  {
    city: "Gitega",
    iata: "GID",
    name: "Gitega Airport",
    country: "BI"
  },
  {
    city: "Kirundo",
    iata: "KRE",
    name: "Kirundo Airport",
    country: "BI"
  },
  {
    city: "Hambantota",
    iata: "HBT",
    name: "Hambantota Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Alula",
    iata: "ALU",
    name: "Alula Airport",
    country: "SO"
  },
  {
    city: "Baidoa",
    iata: "BIB",
    name: "Baidoa Airport",
    country: "SO"
  },
  {
    city: "Candala",
    iata: "CXN",
    name: "Candala Airport",
    country: "SO"
  },
  {
    city: "Baardheere",
    iata: "BSY",
    name: "Baardheere Airport",
    country: "SO"
  },
  {
    city: "Eyl",
    iata: "HCM",
    name: "Eil Airport",
    country: "SO"
  },
  {
    city: "Bosaso",
    iata: "BSA",
    name: "Bender Qassim International Airport",
    country: "SO"
  },
  {
    city: "Gardo",
    iata: "GSR",
    name: "Gardo Airport",
    country: "SO"
  },
  {
    city: "Hargeisa",
    iata: "HGA",
    name: "Egal International Airport",
    country: "SO"
  },
  {
    city: "Berbera",
    iata: "BBO",
    name: "Berbera Airport",
    country: "SO"
  },
  {
    city: "Luuq",
    iata: "LGX",
    name: "Lugh Ganane Airport",
    country: "SO"
  },
  {
    city: "Kismayo",
    iata: "KMU",
    name: "Kismayo Airport",
    country: "SO"
  },
  {
    city: "Mogadishu",
    iata: "MGQ",
    name: "Aden Adde International Airport",
    country: "SO"
  },
  {
    city: "Beledweyne",
    iata: "BLW",
    name: "Beledweyne Airport",
    country: "SO"
  },
  {
    city: "Hobyo",
    iata: "CMO",
    name: "Hobyo Airport",
    country: "SO"
  },
  {
    city: "Galcaio",
    iata: "GLK",
    name: "Galcaio Airport",
    country: "SO"
  },
  {
    city: "Iskushuban",
    iata: "CMS",
    name: "Iskushuban Airport",
    country: "SO"
  },
  {
    city: "Erigavo",
    iata: "ERA",
    name: "Erigavo Airport",
    country: "SO"
  },
  {
    city: "Burao",
    iata: "BUO",
    name: "Burao Airport",
    country: "SO"
  },
  {
    city: "Garowe",
    iata: "GGR",
    name: "Garowe Airport",
    country: "SO"
  },
  {
    city: "Djibouti City",
    iata: "JIB",
    name: "Djibouti-Ambouli Airport",
    country: "DJ"
  },
  {
    city: "Ali-Sabieh",
    iata: "AII",
    name: "Ali-Sabieh Airport",
    country: "DJ"
  },
  {
    city: "Moucha Island",
    iata: "MHI",
    name: "Moucha Airport",
    country: "DJ"
  },
  {
    city: "Obock",
    iata: "OBC",
    name: "Obock Airport",
    country: "DJ"
  },
  {
    city: "Tadjoura",
    iata: "TDJ",
    name: "Tadjoura Airport",
    country: "DJ"
  },
  {
    city: "El Minya",
    iata: "EMY",
    name: "El Minya Airport",
    country: "Egypt"
  },
  {
    city: "El Hassana",
    iata: "RDL",
    name: "Bardawil International Airport",
    country: "Egypt"
  },
  {
    city: "Sidi El Barrani",
    iata: "SQK",
    name: "Sidi EL Barrani Airport",
    country: "Egypt"
  },
  {
    city: "El Alamein",
    iata: "DBB",
    name: "El Alamein International Airport",
    country: "Egypt"
  },
  {
    city: "El Arish",
    iata: "AAC",
    name: "El Arish International Airport",
    country: "Egypt"
  },
  {
    city: "Asyut",
    iata: "ATZ",
    name: "Asyut International Airport",
    country: "Egypt"
  },
  {
    city: "Alexandria",
    iata: "HBE",
    name: "Alexandria International Airport",
    country: "Egypt"
  },
  {
    city: "Abu Simbel",
    iata: "ABS",
    name: "Abu Simbel Airport",
    country: "Egypt"
  },
  {
    city: "Cairo",
    iata: "CAI",
    name: "Cairo International Airport",
    country: "Egypt"
  },
  {
    city: "New Cairo",
    iata: "CCE",
    name: "Capital International Airport",
    country: "Egypt"
  },
  {
    city: "Dakhla Oases",
    iata: "DAK",
    name: "Ad Dakhla Airport",
    country: "Egypt"
  },
  {
    city: "Hurghada",
    iata: "HRG",
    name: "Hurghada International Airport",
    country: "Egypt"
  },
  {
    city: "El Jora",
    iata: "EGH",
    name: "El Jora Airport",
    country: "Egypt"
  },
  {
    city: "Kharja Oases",
    iata: "UVL",
    name: "El Kharja Airport",
    country: "Egypt"
  },
  {
    city: "Luxor",
    iata: "LXR",
    name: "Luxor International Airport",
    country: "Egypt"
  },
  {
    city: "Marsa Alam",
    iata: "RMF",
    name: "Marsa Alam International Airport",
    country: "Egypt"
  },
  {
    city: "Marsa Matruh",
    iata: "MUH",
    name: "Mersa Matruh International Airport",
    country: "Egypt"
  },
  {
    city: "Haelogo",
    iata: "HEO",
    name: "Haelogo Airport",
    country: "PG"
  },
  {
    city: "Sharq El Owainat",
    iata: "GSQ",
    name: "El Owainat East International Airport",
    country: "Egypt"
  },
  {
    city: "Port Said",
    iata: "PSD",
    name: "Port Said International Airport",
    country: "Egypt"
  },
  {
    city: "Saint Catherine",
    iata: "SKV",
    name: "Saint Catherine International Airport",
    country: "Egypt"
  },
  {
    city: "Suhaj",
    iata: "HMB",
    name: "Sohag International Airport",
    country: "Egypt"
  },
  {
    city: "Sharm El Sheikh",
    iata: "SSH",
    name: "Sharm El Sheikh International Airport",
    country: "Egypt"
  },
  {
    city: "Aswan",
    iata: "ASW",
    name: "Aswan International Airport",
    country: "Egypt"
  },
  {
    city: "Siwa Oasis",
    iata: "SEW",
    name: "Siwa Oasis North Airport",
    country: "Egypt"
  },
  {
    city: "Al Jiza",
    iata: "SPX",
    name: "Sphinx International Airport",
    country: "Egypt"
  },
  {
    city: "Taba",
    iata: "TCP",
    name: "Taba International Airport",
    country: "Egypt"
  },
  {
    city: "At Tur",
    iata: "ELT",
    name: "At Tur Airport",
    country: "Egypt"
  },
  {
    city: "Fort Rucker Ozark",
    iata: "HEY",
    name: "Hanchey Army (Fort Rucker) Heliport",
    country: "United States"
  },
  {
    city: "Jolon",
    iata: "HGT",
    name: "Tusi (Hunter Liggett) Army Heliport",
    country: "United States"
  },
  {
    city: "Asmara",
    iata: "ASM",
    name: "Asmara International Airport",
    country: "ER"
  },
  {
    city: "Massawa",
    iata: "MSW",
    name: "Massawa International Airport",
    country: "ER"
  },
  {
    city: "Assab",
    iata: "ASA",
    name: "Assab International Airport",
    country: "ER"
  },
  {
    city: "Tessenei",
    iata: "TES",
    name: "Tessenei Airport",
    country: "ER"
  },
  {
    city: "Hanalei",
    iata: "HPV",
    name: "Princeville Airport",
    country: "United States"
  },
  {
    city: "Waikoloa Village",
    iata: "WKL",
    name: "Waikoloa Heliport",
    country: "United States"
  },
  {
    city: "Juba",
    iata: "JUB",
    name: "Juba International Airport",
    country: "SS"
  },
  {
    city: "Amboseli National Park",
    iata: "ASV",
    name: "Amboseli Airport",
    country: "Kenya"
  },
  {
    city: "Healy Lake",
    iata: "HKB",
    name: "Healy Lake Airport",
    country: "United States"
  },
  {
    city: "Eldoret",
    iata: "EDL",
    name: "Eldoret International Airport",
    country: "Kenya"
  },
  {
    city: "Eliye Springs",
    iata: "EYS",
    name: "Eliye Springs Airport",
    country: "Kenya"
  },
  {
    city: "Kalokol",
    iata: "KLK",
    name: "Kalokol Airport",
    country: "Kenya"
  },
  {
    city: "Garissa",
    iata: "GAS",
    name: "Garissa Airport",
    country: "Kenya"
  },
  {
    city: "Hola",
    iata: "HOA",
    name: "Hola Airport",
    country: "Kenya"
  },
  {
    city: "Nairobi",
    iata: "NBO",
    name: "Jomo Kenyatta International Airport",
    country: "Kenya"
  },
  {
    city: "Keekorok",
    iata: "KEU",
    name: "Keekorok Airport",
    country: "Kenya"
  },
  {
    city: "Kakamega",
    iata: "GGM",
    name: "Kakamega Airport",
    country: "Kenya"
  },
  {
    city: "Kisumu",
    iata: "KIS",
    name: "Kisumu International Airport",
    country: "Kenya"
  },
  {
    city: "Kilaguni",
    iata: "ILU",
    name: "Kilaguni Airport",
    country: "Kenya"
  },
  {
    city: "Kericho",
    iata: "KEY",
    name: "Kericho Airport",
    country: "Kenya"
  },
  {
    city: "Kitale",
    iata: "KTL",
    name: "Kitale Airport",
    country: "Kenya"
  },
  {
    city: "Lokichogio",
    iata: "LKG",
    name: "Lokichogio Airport",
    country: "Kenya"
  },
  {
    city: "Lodwar",
    iata: "LOK",
    name: "Lodwar Airport",
    country: "Kenya"
  },
  {
    city: "Lamu",
    iata: "LAU",
    name: "Manda Airport",
    country: "Kenya"
  },
  {
    city: "Loyengalani",
    iata: "LOY",
    name: "Loyengalani Airport",
    country: "Kenya"
  },
  {
    city: "Mandera",
    iata: "NDE",
    name: "Mandera Airport",
    country: "Kenya"
  },
  {
    city: "Marsabit",
    iata: "RBT",
    name: "Marsabit Airport",
    country: "Kenya"
  },
  {
    city: "Meru-Kinna",
    iata: "JJM",
    name: "Mulika Lodge Airport",
    country: "Kenya"
  },
  {
    city: "Malindi",
    iata: "MYD",
    name: "Malindi International Airport",
    country: "Kenya"
  },
  {
    city: "Mombasa",
    iata: "MBA",
    name: "Moi International Airport",
    country: "Kenya"
  },
  {
    city: "Masai Mara",
    iata: "MRE",
    name: "Mara Serena Lodge Airstrip",
    country: "Kenya"
  },
  {
    city: "Moyale (Lower)",
    iata: "OYL",
    name: "Moyale Airport",
    country: "Kenya"
  },
  {
    city: "Nyeri",
    iata: "NYE",
    name: "Nyeri Airport",
    country: "Kenya"
  },
  {
    city: "Nakuru",
    iata: "NUU",
    name: "Lanet Military Airstrip",
    country: "Kenya"
  },
  {
    city: "Nanyuki",
    iata: "NYK",
    name: "Nanyuki Airport",
    country: "Kenya"
  },
  {
    city: "Nairobi",
    iata: "WIL",
    name: "Nairobi Wilson Airport",
    country: "Kenya"
  },
  {
    city: "Samburu",
    iata: "UAS",
    name: "Samburu Airport",
    country: "Kenya"
  },
  {
    city: "Ukunda",
    iata: "UKA",
    name: "Ukunda Airstrip",
    country: "Kenya"
  },
  {
    city: "Wajir",
    iata: "WJR",
    name: "Wajir Airport",
    country: "Kenya"
  },
  {
    city: "Sirt",
    iata: "SRX",
    name: "Sirt International Airport / Ghardabiya Airbase",
    country: "LY"
  },
  {
    city: "Ghat",
    iata: "GHT",
    name: "Ghat Airport",
    country: "LY"
  },
  {
    city: "Kufra",
    iata: "AKF",
    name: "Kufra Airport",
    country: "LY"
  },
  {
    city: "Benina",
    iata: "BEN",
    name: "Benina International Airport",
    country: "LY"
  },
  {
    city: "Tripoli",
    iata: "MJI",
    name: "Mitiga International Airport",
    country: "LY"
  },
  {
    city: "Al Albraq",
    iata: "LAQ",
    name: "Al Abraq International Airport",
    country: "LY"
  },
  {
    city: "Sabha",
    iata: "SEB",
    name: "Sabha Airport",
    country: "LY"
  },
  {
    city: "Marsa al Brega",
    iata: "LMQ",
    name: "Marsa al Brega Airport",
    country: "LY"
  },
  {
    city: "Misrata",
    iata: "MRA",
    name: "Misrata International Airport",
    country: "LY"
  },
  {
    city: "Nafurah 1",
    iata: "NFR",
    name: "Nafurah 1 Airport",
    country: "LY"
  },
  {
    city: "nan",
    iata: "HUQ",
    name: "Hon Airport",
    country: "LY"
  },
  {
    city: "Ghadames",
    iata: "LTD",
    name: "Ghadames Airport",
    country: "LY"
  },
  {
    city: "Adam",
    iata: "TOB",
    name: "Tobruk International Airport",
    country: "LY"
  },
  {
    city: "Ubari",
    iata: "QUB",
    name: "Ubari Airport",
    country: "LY"
  },
  {
    city: "Zintan",
    iata: "ZIS",
    name: "Alzintan Airport",
    country: "LY"
  },
  {
    city: "Zuwarah",
    iata: "WAX",
    name: "Zuwarah International Airport",
    country: "LY"
  },
  {
    city: "Erandique",
    iata: "EDQ",
    name: "Erandique Airport",
    country: "HN"
  },
  {
    city: "Đăk R'Lấp",
    iata: "HOO",
    name: "Nhon Co Airfield",
    country: "Vietnam"
  },
  {
    city: "Zhayrem",
    iata: "HRC",
    name: "Sary Su Airport",
    country: "KZ"
  },
  {
    city: "Gisenyi",
    iata: "GYI",
    name: "Gisenyi Airport",
    country: "RW"
  },
  {
    city: "Butare",
    iata: "BTQ",
    name: "Butare Airport",
    country: "RW"
  },
  {
    city: "Kigali",
    iata: "KGL",
    name: "Kigali International Airport",
    country: "RW"
  },
  {
    city: "Ruhengeri",
    iata: "RHG",
    name: "Ruhengeri Airport",
    country: "RW"
  },
  {
    city: "Kamembe",
    iata: "KME",
    name: "Kamembe Airport",
    country: "RW"
  },
  {
    city: "Atbara",
    iata: "ATB",
    name: "Atbara Airport",
    country: "SD"
  },
  {
    city: "Al Dabbah",
    iata: "EDB",
    name: "Al Dabbah Airport",
    country: "SD"
  },
  {
    city: "Dongola",
    iata: "DOG",
    name: "Dongola Airport",
    country: "SD"
  },
  {
    city: "Ad Damazin",
    iata: "RSS",
    name: "Damazin Airport",
    country: "SD"
  },
  {
    city: "El Fasher",
    iata: "ELF",
    name: "El Fasher Airport",
    country: "SD"
  },
  {
    city: "Dinder",
    iata: "DNX",
    name: "Galegu Airport",
    country: "SD"
  },
  {
    city: "Geneina",
    iata: "EGN",
    name: "Geneina Airport",
    country: "SD"
  },
  {
    city: "Heglig Oilfield",
    iata: "HEG",
    name: "Heglig Airport",
    country: "SD"
  },
  {
    city: "Zhengzhou",
    iata: "HSJ",
    name: "Zhengzhou Shangjie Airport",
    country: "China"
  },
  {
    city: "Kassala",
    iata: "KSL",
    name: "Kassala Airport",
    country: "SD"
  },
  {
    city: "Khashm El Girba",
    iata: "GBU",
    name: "Khashm El Girba Airport",
    country: "SD"
  },
  {
    city: "Kadugli",
    iata: "KDX",
    name: "Kadugli Airport",
    country: "SD"
  },
  {
    city: "Rumbek",
    iata: "RBX",
    name: "Rumbek Airport",
    country: "SS"
  },
  {
    city: "Merowe",
    iata: "MWE",
    name: "Merowe Airport",
    country: "SD"
  },
  {
    city: "En Nahud",
    iata: "NUD",
    name: "En Nahud Airport",
    country: "SD"
  },
  {
    city: "Nyala",
    iata: "UYL",
    name: "Nyala Airport",
    country: "SD"
  },
  {
    city: "New Halfa",
    iata: "NHF",
    name: "New Halfa Airport",
    country: "SD"
  },
  {
    city: "El-Obeid",
    iata: "EBD",
    name: "El-Obeid Airport",
    country: "SD"
  },
  {
    city: "Port Sudan",
    iata: "PZU",
    name: "Port Sudan New International Airport",
    country: "SD"
  },
  {
    city: "Khartoum",
    iata: "KRT",
    name: "Khartoum International Airport",
    country: "SD"
  },
  {
    city: "Malakal",
    iata: "MAK",
    name: "Malakal International Airport",
    country: "SS"
  },
  {
    city: "Wadi Halfa",
    iata: "WHF",
    name: "Wadi Halfa Airport",
    country: "SD"
  },
  {
    city: "Wau",
    iata: "WUU",
    name: "Wau Airport",
    country: "SS"
  },
  {
    city: "Zalingei",
    iata: "ZLX",
    name: "Zalingei Airport",
    country: "SD"
  },
  {
    city: "Arusha",
    iata: "ARK",
    name: "Arusha Airport",
    country: "TZ"
  },
  {
    city: "Bukoba",
    iata: "BKZ",
    name: "Bukoba Airport",
    country: "TZ"
  },
  {
    city: "Dar es Salaam",
    iata: "DAR",
    name: "Julius Nyerere International Airport",
    country: "TZ"
  },
  {
    city: "Dodoma",
    iata: "DOD",
    name: "Dodoma Airport",
    country: "TZ"
  },
  {
    city: "Chato District",
    iata: "GTC",
    name: "Chato/Geita Airport",
    country: "TZ"
  },
  {
    city: "Grumeti Game Reserve",
    iata: "GTZ",
    name: "Kirawira B Aerodrome",
    country: "TZ"
  },
  {
    city: "Mbeya",
    iata: "MBI",
    name: "Songwe Airport",
    country: "TZ"
  },
  {
    city: "Nduli",
    iata: "IRI",
    name: "Iringa Airport",
    country: "TZ"
  },
  {
    city: "Kigoma",
    iata: "TKQ",
    name: "Kigoma Airport",
    country: "TZ"
  },
  {
    city: "Kilwa Masoko",
    iata: "KIY",
    name: "Kilwa Airport",
    country: "TZ"
  },
  {
    city: "Arusha",
    iata: "JRO",
    name: "Kilimanjaro International Airport",
    country: "TZ"
  },
  {
    city: "Lindi",
    iata: "LDI",
    name: "Lindi Airport",
    country: "TZ"
  },
  {
    city: "Lake Manyara National Park",
    iata: "LKY",
    name: "Lake Manyara Airport",
    country: "TZ"
  },
  {
    city: "Kilindoni",
    iata: "MFA",
    name: "Mafia Airport",
    country: "TZ"
  },
  {
    city: "Mwadui",
    iata: "MWN",
    name: "Mwadui Airport",
    country: "TZ"
  },
  {
    city: "Masasi",
    iata: "XMI",
    name: "Masasi Airport",
    country: "TZ"
  },
  {
    city: "Mpanda",
    iata: "NPY",
    name: "Mpanda Airport",
    country: "TZ"
  },
  {
    city: "Moshi",
    iata: "QSI",
    name: "Moshi Airport",
    country: "TZ"
  },
  {
    city: "Mtwara",
    iata: "MYW",
    name: "Mtwara Airport",
    country: "TZ"
  },
  {
    city: "Musoma",
    iata: "MUZ",
    name: "Musoma Airport",
    country: "TZ"
  },
  {
    city: "Mwanza",
    iata: "MWZ",
    name: "Mwanza International Airport",
    country: "TZ"
  },
  {
    city: "Nachingwea",
    iata: "NCH",
    name: "Nachingwea Airport",
    country: "TZ"
  },
  {
    city: "Njombe",
    iata: "JOM",
    name: "Njombe Airport",
    country: "TZ"
  },
  {
    city: "Chake Chake",
    iata: "PMA",
    name: "Pemba Airport",
    country: "TZ"
  },
  {
    city: "Seronera",
    iata: "SEU",
    name: "Seronera Airport",
    country: "TZ"
  },
  {
    city: "Songea",
    iata: "SGX",
    name: "Songea Airport",
    country: "TZ"
  },
  {
    city: "Sumbawanga",
    iata: "SUT",
    name: "Sumbawanga Airport",
    country: "TZ"
  },
  {
    city: "Shinyanga",
    iata: "SHY",
    name: "Shinyanga Airport",
    country: "TZ"
  },
  {
    city: "Tabora",
    iata: "TBO",
    name: "Tabora Airport",
    country: "TZ"
  },
  {
    city: "Tanga",
    iata: "TGT",
    name: "Tanga Airport",
    country: "TZ"
  },
  {
    city: "Zanzibar",
    iata: "ZNZ",
    name: "Abeid Amani Karume International Airport",
    country: "TZ"
  },
  {
    city: "Arua",
    iata: "RUA",
    name: "Arua Airport",
    country: "UG"
  },
  {
    city: "Entebbe",
    iata: "EBB",
    name: "Entebbe International Airport",
    country: "UG"
  },
  {
    city: "Gulu",
    iata: "ULU",
    name: "Gulu Airport",
    country: "UG"
  },
  {
    city: "Jinja",
    iata: "JIN",
    name: "Jinja Airport",
    country: "UG"
  },
  {
    city: "Kampala",
    iata: "KJJ",
    name: "Kajjansi Airfield",
    country: "UG"
  },
  {
    city: "Kasese",
    iata: "KSE",
    name: "Kasese Airport",
    country: "UG"
  },
  {
    city: "Mbarara",
    iata: "MBQ",
    name: "Mbarara Airport",
    country: "UG"
  },
  {
    city: "Masindi",
    iata: "KCU",
    name: "Masindi Airport",
    country: "UG"
  },
  {
    city: "Pakuba",
    iata: "PAF",
    name: "Pakuba Airport",
    country: "UG"
  },
  {
    city: "Soroti",
    iata: "SRT",
    name: "Soroti Airport",
    country: "UG"
  },
  {
    city: "Tororo",
    iata: "TRY",
    name: "Tororo Airport",
    country: "UG"
  },
  {
    city: "Hawk Inlet",
    iata: "HWI",
    name: "Hawk Inlet Seaplane Base",
    country: "United States"
  },
  {
    city: "Hollis",
    iata: "HYL",
    name: "Hollis Clark Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Chengdu (Jintang)",
    iata: "HZU",
    name: "Chengdu Huaizhou Airport",
    country: "China"
  },
  {
    city: "Iboki",
    iata: "IBI",
    name: "Iboki Airport",
    country: "PG"
  },
  {
    city: "Bazaruto Island",
    iata: "IBL",
    name: "Indigo Bay Lodge Airport",
    country: "MZ"
  },
  {
    city: "Carles",
    iata: "ICO",
    name: "Sicogon Airstrip",
    country: "Philippines"
  },
  {
    city: "Jakarta",
    iata: "PPJ",
    name: "Pulau Panjang Airport",
    country: "Indonesia"
  },
  {
    city: "Kuala Kurun",
    iata: "GXM",
    name: "Kuala Kurun Airport",
    country: "Indonesia"
  },
  {
    city: "Singkil",
    iata: "FSH",
    name: "Syekh Hamzah Fansyuri Airport",
    country: "Indonesia"
  },
  {
    city: "Enggano",
    iata: "ENG",
    name: "Enggano Airport",
    country: "Indonesia"
  },
  {
    city: "Kabupaten Gayo Lues",
    iata: "GYO",
    name: "Blangkejeren Airport",
    country: "Indonesia"
  },
  {
    city: "Kediri",
    iata: "DHX",
    name: "Dhoho International Airport",
    country: "Indonesia"
  },
  {
    city: "Singkawang",
    iata: "SKJ",
    name: "Singkawang Airport",
    country: "Indonesia"
  },
  {
    city: "Amgotro",
    iata: "RUF",
    name: "Yuruf Airport [UNUSABLE]",
    country: "Indonesia"
  },
  {
    city: "Apalapsili",
    iata: "AAS",
    name: "Apalapsili Airport",
    country: "Indonesia"
  },
  {
    city: "Anggi-Papua Island",
    iata: "AGD",
    name: "Anggi Airport",
    country: "Indonesia"
  },
  {
    city: "Menggala",
    iata: "AKQ",
    name: "Astra Ksetra Airport",
    country: "Indonesia"
  },
  {
    city: "Elelim",
    iata: "ELR",
    name: "Elelim Airport",
    country: "Indonesia"
  },
  {
    city: "Agats",
    iata: "EWE",
    name: "Ewer Asmat Airport",
    country: "Indonesia"
  },
  {
    city: "Gag Island",
    iata: "GAV",
    name: "Gag Island Airport",
    country: "Indonesia"
  },
  {
    city: "Ilu",
    iata: "IUL",
    name: "Ilu Airport",
    country: "Indonesia"
  },
  {
    city: "Kotabangun-Borneo Island",
    iata: "KOD",
    name: "Kotabangun Airport",
    country: "Indonesia"
  },
  {
    city: "Sungai Penuh",
    iata: "KRC",
    name: "Departi Parbo Airport",
    country: "Indonesia"
  },
  {
    city: "Kelila",
    iata: "LLN",
    name: "Kelila Airport",
    country: "Indonesia"
  },
  {
    city: "Masalembo Island",
    iata: "MSI",
    name: "Masalembo Airport",
    country: "Indonesia"
  },
  {
    city: "Banaina-Borneo Island",
    iata: "NAF",
    name: "Banaina Airport",
    country: "Indonesia"
  },
  {
    city: "Obano",
    iata: "OBD",
    name: "Obano Airport",
    country: "Indonesia"
  },
  {
    city: "Sipura Island",
    iata: "RKI",
    name: "Mentawai Airport",
    country: "Indonesia"
  },
  {
    city: "Tiom-Papua Island",
    iata: "TMY",
    name: "Tiom Airport",
    country: "Indonesia"
  },
  {
    city: "Bilogai",
    iata: "UGU",
    name: "Bilorai Airport",
    country: "Indonesia"
  },
  {
    city: "Iamalele, Fergusson Island",
    iata: "IMA",
    name: "Iamalele Airport",
    country: "PG"
  },
  {
    city: "Inhaminga",
    iata: "IMG",
    name: "Inhaminga Airport",
    country: "MZ"
  },
  {
    city: "Pakyong",
    iata: "PYG",
    name: "Pakyong Airport",
    country: "India"
  },
  {
    city: "Faizabad",
    iata: "AYJ",
    name: "Maharshi Valmiki International Airport",
    country: "India"
  },
  {
    city: "Chipi",
    iata: "SDW",
    name: "Sindhudurg Airport",
    country: "India"
  },
  {
    city: "Navi Mumbai",
    iata: "NMI",
    name: "Navi Mumbai International Airport",
    country: "India"
  },
  {
    city: "Shimoga",
    iata: "RQY",
    name: "Rashtrakavi Kuvempu Airport",
    country: "India"
  },
  {
    city: "Hollongi",
    iata: "HGI",
    name: "Itanagar Donyi Polo Hollongi Airport",
    country: "India"
  },
  {
    city: "Bhawanipatna",
    iata: "UKE",
    name: "Utkela Airport",
    country: "India"
  },
  {
    city: "Gautam Buddha Nagar",
    iata: "DXN",
    name: "Noida International Airport",
    country: "India"
  },
  {
    city: "Ambikapur",
    iata: "AHA",
    name: "Maa Mahamaya Airport",
    country: "India"
  },
  {
    city: "Jagdalpur",
    iata: "JGB",
    name: "Jagdalpur Airport",
    country: "India"
  },
  {
    city: "Rajouri",
    iata: "RJI",
    name: "Rajouri Airport",
    country: "India"
  },
  {
    city: "Chinde",
    iata: "INE",
    name: "Chinde Airport",
    country: "MZ"
  },
  {
    city: "Iokea",
    iata: "IOK",
    name: "Iokea Airport",
    country: "PG"
  },
  {
    city: "Ioma",
    iata: "IOP",
    name: "Ioma Airport",
    country: "PG"
  },
  {
    city: "Iranamadu",
    iata: "IRU",
    name: "Iranamadu Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Tremiti Islands",
    iata: "TQR",
    name: "San Domino Island Heliport",
    country: "Italy"
  },
  {
    city: "Itokama",
    iata: "ITK",
    name: "Itokama Airport",
    country: "PG"
  },
  {
    city: "Isla Viveros",
    iata: "IVI",
    name: "Viveros Island Airport",
    country: "PA"
  },
  {
    city: "Tiakur",
    iata: "JIO",
    name: "Jos Orno Imsula Airport",
    country: "Indonesia"
  },
  {
    city: "Cooper Landing",
    iata: "JLA",
    name: "Quartz Creek Airport",
    country: "United States"
  },
  {
    city: "Jamba",
    iata: "JMB",
    name: "Jamba Airport",
    country: "AO"
  },
  {
    city: "Washington DC",
    iata: "JPN",
    name: "Pentagon Army Heliport",
    country: "United States"
  },
  {
    city: "New York",
    iata: "JRA",
    name: "West 30th Street Heliport",
    country: "United States"
  },
  {
    city: "New York",
    iata: "JRB",
    name: "Downtown Manhattan Heliport",
    country: "United States"
  },
  {
    city: "Chizhou",
    iata: "JUH",
    name: "Chizhou Jiuhuashan Airport",
    country: "China"
  },
  {
    city: "Durango",
    iata: "AMK",
    name: "Animas Air Park",
    country: "United States"
  },
  {
    city: "Broadus",
    iata: "BDX",
    name: "Broadus Airport",
    country: "United States"
  },
  {
    city: "Eureka",
    iata: "EUE",
    name: "Eureka Airport",
    country: "United States"
  },
  {
    city: "Jackpot",
    iata: "KPT",
    name: "Jackpot Airport/Hayden Field",
    country: "United States"
  },
  {
    city: "Rolla",
    iata: "RLA",
    name: "Rolla Downtown Airport",
    country: "United States"
  },
  {
    city: "Fishers Island",
    iata: "FID",
    name: "Elizabeth Field",
    country: "United States"
  },
  {
    city: "Humboldt",
    iata: "HUD",
    name: "Humboldt Municipal Airport",
    country: "United States"
  },
  {
    city: "Port Townsend",
    iata: "TWD",
    name: "Jefferson County International Airport",
    country: "United States"
  },
  {
    city: "Kayenta",
    iata: "MVM",
    name: "Kayenta Airport",
    country: "United States"
  },
  {
    city: "Hudson",
    iata: "HCC",
    name: "Columbia County Airport",
    country: "United States"
  },
  {
    city: "Ardmore",
    iata: "AHD",
    name: "Ardmore Downtown Executive Airport",
    country: "United States"
  },
  {
    city: "Peach Springs",
    iata: "GCW",
    name: "Grand Canyon West Airport",
    country: "United States"
  },
  {
    city: "Lakeport",
    iata: "CKE",
    name: "Lampson Field",
    country: "United States"
  },
  {
    city: "Montague",
    iata: "ROF",
    name: "Montague-Yreka Rohrer Field",
    country: "United States"
  },
  {
    city: "Penrose",
    iata: "CNE",
    name: "Fremont County Airport",
    country: "United States"
  },
  {
    city: "Rouses Point",
    iata: "RSX",
    name: "Rouses Point Seaplane Base",
    country: "United States"
  },
  {
    city: "Cooperstown",
    iata: "COP",
    name: "Cooperstown-Westville Airport",
    country: "United States"
  },
  {
    city: "Council",
    iata: "CIL",
    name: "Council Airport",
    country: "United States"
  },
  {
    city: "Newport",
    iata: "NWH",
    name: "Parlin Field",
    country: "United States"
  },
  {
    city: "Iraan",
    iata: "IRB",
    name: "Iraan Municipal Airport",
    country: "United States"
  },
  {
    city: "Accident",
    iata: "ODM",
    name: "Garrett County Airport",
    country: "United States"
  },
  {
    city: "Quincy",
    iata: "GNF",
    name: "Gansner Field",
    country: "United States"
  },
  {
    city: "Chiloquin",
    iata: "CHZ",
    name: "Chiloquin State Airport",
    country: "United States"
  },
  {
    city: "California",
    iata: "LTW",
    name: "St. Mary's County Regional Airport",
    country: "United States"
  },
  {
    city: "Union",
    iata: "USC",
    name: "Union County, Troy Shelton Field",
    country: "United States"
  },
  {
    city: "Arapahoe",
    iata: "AHF",
    name: "Arapahoe Municipal Airport",
    country: "United States"
  },
  {
    city: "Princeton/Rocky Hill",
    iata: "PCT",
    name: "Princeton Airport",
    country: "United States"
  },
  {
    city: "Calverton",
    iata: "CTO",
    name: "Calverton Executive Airpark",
    country: "United States"
  },
  {
    city: "Afton",
    iata: "NRI",
    name: "Grand Lake Regional Airport",
    country: "United States"
  },
  {
    city: "Grants Pass",
    iata: "GTP",
    name: "Grants Pass Airport",
    country: "United States"
  },
  {
    city: "Niles",
    iata: "NLE",
    name: "Jerry Tyler Memorial Airport",
    country: "United States"
  },
  {
    city: "Electric City",
    iata: "GCD",
    name: "Grand Coulee Dam Airport",
    country: "United States"
  },
  {
    city: "Grand Canyon",
    iata: "VLE",
    name: "Valle Airport",
    country: "United States"
  },
  {
    city: "Perry",
    iata: "FPY",
    name: "Perry-Foley Airport",
    country: "United States"
  },
  {
    city: "Manti",
    iata: "NTJ",
    name: "Manti-Ephraim Airport",
    country: "United States"
  },
  {
    city: "Salina",
    iata: "SBO",
    name: "Salina Gunnison Airport",
    country: "United States"
  },
  {
    city: "Manville",
    iata: "JVI",
    name: "Central Jersey Regional Airport",
    country: "United States"
  },
  {
    city: "Eunice",
    iata: "UCE",
    name: "Eunice Airport",
    country: "United States"
  },
  {
    city: "Gold Beach",
    iata: "GOL",
    name: "Gold Beach Municipal Airport",
    country: "United States"
  },
  {
    city: "Kentland",
    iata: "KKT",
    name: "Kentland Municipal Airport",
    country: "United States"
  },
  {
    city: "Prentice",
    iata: "PRW",
    name: "Prentice Airport",
    country: "United States"
  },
  {
    city: "Eagle Pass",
    iata: "EGP",
    name: "Maverick County Memorial International Airport",
    country: "United States"
  },
  {
    city: "Boulder City",
    iata: "BLD",
    name: "Boulder City Municipal Airport",
    country: "United States"
  },
  {
    city: "Mesquite",
    iata: "MFH",
    name: "Mesquite Airport",
    country: "United States"
  },
  {
    city: "East Tawas",
    iata: "ECA",
    name: "Iosco County Airport",
    country: "United States"
  },
  {
    city: "Florence",
    iata: "FMU",
    name: "Florence Municipal Airport",
    country: "United States"
  },
  {
    city: "Anacortes",
    iata: "OTS",
    name: "Anacortes Airport",
    country: "United States"
  },
  {
    city: "Roosevelt",
    iata: "ROL",
    name: "Roosevelt Municipal Airport",
    country: "United States"
  },
  {
    city: "Canton",
    iata: "CTK",
    name: "Canton Municipal Airport",
    country: "United States"
  },
  {
    city: "Paonia",
    iata: "WPO",
    name: "North Fork Valley Airport",
    country: "United States"
  },
  {
    city: "Antlers",
    iata: "ATE",
    name: "Antlers Municipal Airport",
    country: "United States"
  },
  {
    city: "Austin",
    iata: "ASQ",
    name: "Austin Airport",
    country: "United States"
  },
  {
    city: "Apalachicola",
    iata: "AAF",
    name: "Apalachicola Regional Airport",
    country: "United States"
  },
  {
    city: "Allentown/Bethlehem",
    iata: "ABE",
    name: "Lehigh Valley International Airport",
    country: "United States"
  },
  {
    city: "Abilene",
    iata: "ABI",
    name: "Abilene Regional Airport",
    country: "United States"
  },
  {
    city: "Albuquerque",
    iata: "ABQ",
    name: "Albuquerque International Sunport",
    country: "United States"
  },
  {
    city: "Aberdeen",
    iata: "ABR",
    name: "Aberdeen Regional Airport",
    country: "United States"
  },
  {
    city: "Albany",
    iata: "ABY",
    name: "Southwest Georgia Regional Airport",
    country: "United States"
  },
  {
    city: "Bellaire",
    iata: "ACB",
    name: "Antrim County Airport",
    country: "United States"
  },
  {
    city: "Nantucket",
    iata: "ACK",
    name: "Nantucket Memorial Airport",
    country: "United States"
  },
  {
    city: "Waco",
    iata: "ACT",
    name: "Waco Regional Airport",
    country: "United States"
  },
  {
    city: "Arcata/Eureka",
    iata: "ACV",
    name: "California Redwood Coast-Humboldt County Airport",
    country: "United States"
  },
  {
    city: "Atlantic City",
    iata: "ACY",
    name: "Atlantic City International Airport",
    country: "United States"
  },
  {
    city: "Adrian",
    iata: "ADG",
    name: "Lenawee County Airport",
    country: "United States"
  },
  {
    city: "Ada",
    iata: "ADT",
    name: "Ada Regional Airport",
    country: "United States"
  },
  {
    city: "Ardmore",
    iata: "ADM",
    name: "Ardmore Municipal Airport",
    country: "United States"
  },
  {
    city: "Dallas",
    iata: "ADS",
    name: "Addison Airport",
    country: "United States"
  },
  {
    city: "Camp Springs",
    iata: "ADW",
    name: "Joint Base Andrews",
    country: "United States"
  },
  {
    city: "Kake",
    iata: "KAE",
    name: "Kake Seaplane Base",
    country: "United States"
  },
  {
    city: "Albert Lea",
    iata: "AEL",
    name: "Albert Lea Municipal Airport",
    country: "United States"
  },
  {
    city: "Alexandria",
    iata: "AEX",
    name: "Alexandria International Airport",
    country: "United States"
  },
  {
    city: "Karato",
    iata: "KAF",
    name: "Karato Airport",
    country: "PG"
  },
  {
    city: "Colorado Springs",
    iata: "AFF",
    name: "USAF Academy Airfield",
    country: "United States"
  },
  {
    city: "Washington",
    iata: "WSG",
    name: "Washington County Airport",
    country: "United States"
  },
  {
    city: "Jaffrey",
    iata: "AFN",
    name: "Jaffrey Airfield Silver Ranch Airport",
    country: "United States"
  },
  {
    city: "Afton",
    iata: "AFO",
    name: "Afton Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Worth",
    iata: "AFW",
    name: "Perot Field/Fort Worth Alliance Airport",
    country: "United States"
  },
  {
    city: "Pittsburgh",
    iata: "AGC",
    name: "Allegheny County Airport",
    country: "United States"
  },
  {
    city: "Magnolia",
    iata: "AGO",
    name: "Magnolia Municipal Airport / Ralph C Weiser Field",
    country: "United States"
  },
  {
    city: "Augusta",
    iata: "AGS",
    name: "Augusta Regional At Bush Field",
    country: "United States"
  },
  {
    city: "Herlong",
    iata: "AHC",
    name: "Amedee Army Air Field",
    country: "United States"
  },
  {
    city: "Amery",
    iata: "AHH",
    name: "Amery Municipal Airport",
    country: "United States"
  },
  {
    city: "Athens",
    iata: "AHN",
    name: "Athens Ben Epps Airport",
    country: "United States"
  },
  {
    city: "Alliance",
    iata: "AIA",
    name: "Alliance Municipal Airport",
    country: "United States"
  },
  {
    city: "Anderson",
    iata: "AID",
    name: "Anderson Municipal Darlington Field",
    country: "United States"
  },
  {
    city: "Aiken",
    iata: "AIK",
    name: "Aiken Regional Airport",
    country: "United States"
  },
  {
    city: "Atlantic",
    iata: "AIO",
    name: "Atlantic Municipal Airport",
    country: "United States"
  },
  {
    city: "Aliceville",
    iata: "AIV",
    name: "George Downer Airport",
    country: "United States"
  },
  {
    city: "Kaiser Lake Ozark",
    iata: "AIZ",
    name: "Lee C Fine Memorial Airport",
    country: "United States"
  },
  {
    city: "Kar",
    iata: "KAK",
    name: "Kar Airport",
    country: "PG"
  },
  {
    city: "Akron",
    iata: "AKO",
    name: "Colorado Plains Regional Airport",
    country: "United States"
  },
  {
    city: "Akron",
    iata: "AKC",
    name: "Akron Fulton International Airport",
    country: "United States"
  },
  {
    city: "Albany",
    iata: "ALB",
    name: "Albany International Airport",
    country: "United States"
  },
  {
    city: "Alice",
    iata: "ALI",
    name: "Alice International Airport",
    country: "United States"
  },
  {
    city: "Alamogordo",
    iata: "ALM",
    name: "Alamogordo White Sands Regional Airport",
    country: "United States"
  },
  {
    city: "Alton/St Louis",
    iata: "ALN",
    name: "St Louis Regional Airport",
    country: "United States"
  },
  {
    city: "Waterloo",
    iata: "ALO",
    name: "Waterloo Regional Airport",
    country: "United States"
  },
  {
    city: "Alamosa",
    iata: "ALS",
    name: "San Luis Valley Regional Airport/Bergman Field",
    country: "United States"
  },
  {
    city: "Walla Walla",
    iata: "ALW",
    name: "Walla Walla Regional Airport",
    country: "United States"
  },
  {
    city: "Alexander City",
    iata: "ALX",
    name: "Thomas C Russell Field",
    country: "United States"
  },
  {
    city: "Amarillo",
    iata: "AMA",
    name: "Rick Husband Amarillo International Airport",
    country: "United States"
  },
  {
    city: "Alma",
    iata: "AMN",
    name: "Gratiot Community Airport",
    country: "United States"
  },
  {
    city: "Ames",
    iata: "AMW",
    name: "Ames Municipal Airport",
    country: "United States"
  },
  {
    city: "Anniston",
    iata: "ANB",
    name: "Anniston Regional Airport",
    country: "United States"
  },
  {
    city: "Anderson",
    iata: "AND",
    name: "Anderson Regional Airport",
    country: "United States"
  },
  {
    city: "Salida",
    iata: "SLT",
    name: "Salida Airport - Harriet Alexander Field",
    country: "United States"
  },
  {
    city: "Annapolis",
    iata: "ANP",
    name: "Lee Airport",
    country: "United States"
  },
  {
    city: "Angola",
    iata: "ANQ",
    name: "Tri State Steuben County Airport",
    country: "United States"
  },
  {
    city: "Ainsworth",
    iata: "ANW",
    name: "Ainsworth Regional Airport",
    country: "United States"
  },
  {
    city: "Anthony",
    iata: "ANY",
    name: "Anthony Municipal Airport",
    country: "United States"
  },
  {
    city: "Lima",
    iata: "AOH",
    name: "Lima Allen County Airport",
    country: "United States"
  },
  {
    city: "Altoona",
    iata: "AOO",
    name: "Altoona Blair County Airport",
    country: "United States"
  },
  {
    city: "Denver",
    iata: "APA",
    name: "Centennial Airport",
    country: "United States"
  },
  {
    city: "Napa",
    iata: "APC",
    name: "Napa County Airport",
    country: "United States"
  },
  {
    city: "Naples",
    iata: "APF",
    name: "Naples Municipal Airport",
    country: "United States"
  },
  {
    city: "Aberdeen",
    iata: "APG",
    name: "Phillips Army Air Field",
    country: "United States"
  },
  {
    city: "Bowling Green",
    iata: "APH",
    name: "Mary Walker LZ Airport",
    country: "United States"
  },
  {
    city: "Alpena",
    iata: "APN",
    name: "Alpena County Regional Airport",
    country: "United States"
  },
  {
    city: "Jasper",
    iata: "APT",
    name: "Marion County Airport - Brown Field",
    country: "United States"
  },
  {
    city: "Apple Valley",
    iata: "APV",
    name: "Apple Valley Airport",
    country: "United States"
  },
  {
    city: "New Iberia",
    iata: "ARA",
    name: "Acadiana Regional Airport",
    country: "United States"
  },
  {
    city: "Ann Arbor",
    iata: "ARB",
    name: "Ann Arbor Municipal Airport",
    country: "United States"
  },
  {
    city: "Walnut Ridge",
    iata: "ARG",
    name: "Walnut Ridge Regional Airport",
    country: "United States"
  },
  {
    city: "Wharton",
    iata: "WHT",
    name: "Wharton Regional Airport",
    country: "United States"
  },
  {
    city: "Chicago/Aurora",
    iata: "AUZ",
    name: "Aurora Municipal Airport",
    country: "United States"
  },
  {
    city: "Watertown",
    iata: "ART",
    name: "Watertown International Airport",
    country: "United States"
  },
  {
    city: "Woodruff",
    iata: "ARV",
    name: "Lakeland Airport Noble F Lee Memorial Field",
    country: "United States"
  },
  {
    city: "Beaufort",
    iata: "BFT",
    name: "Beaufort Executive Airport",
    country: "United States"
  },
  {
    city: "Aspen",
    iata: "ASE",
    name: "Aspen-Pitkin County Airport (Sardy Field)",
    country: "United States"
  },
  {
    city: "Springdale",
    iata: "SPZ",
    name: "Springdale Municipal Airport",
    country: "United States"
  },
  {
    city: "Nashua",
    iata: "ASH",
    name: "Nashua Airport / Boire Field",
    country: "United States"
  },
  {
    city: "Marshall",
    iata: "ASL",
    name: "Harrison County Airport",
    country: "United States"
  },
  {
    city: "Talladega",
    iata: "ASN",
    name: "Talladega Municipal Airport",
    country: "United States"
  },
  {
    city: "Astoria",
    iata: "AST",
    name: "Astoria Regional Airport",
    country: "United States"
  },
  {
    city: "Ashland",
    iata: "ASX",
    name: "John F Kennedy Memorial Airport",
    country: "United States"
  },
  {
    city: "Ashley",
    iata: "ASY",
    name: "Ashley Municipal Airport",
    country: "United States"
  },
  {
    city: "Atlanta",
    iata: "ATL",
    name: "Hartsfield Jackson Atlanta International Airport",
    country: "United States"
  },
  {
    city: "Artesia",
    iata: "ATS",
    name: "Artesia Municipal Airport",
    country: "United States"
  },
  {
    city: "Appleton",
    iata: "ATW",
    name: "Appleton International Airport",
    country: "United States"
  },
  {
    city: "Watertown",
    iata: "ATY",
    name: "Watertown Regional Airport",
    country: "United States"
  },
  {
    city: "Augusta",
    iata: "AUG",
    name: "Augusta State Airport",
    country: "United States"
  },
  {
    city: "Austin",
    iata: "AUM",
    name: "Austin Municipal Airport",
    country: "United States"
  },
  {
    city: "Auburn",
    iata: "AUN",
    name: "Auburn Municipal Airport",
    country: "United States"
  },
  {
    city: "Auburn",
    iata: "AUO",
    name: "Auburn University Regional Airport",
    country: "United States"
  },
  {
    city: "Austin",
    iata: "AUS",
    name: "Austin Bergstrom International Airport",
    country: "United States"
  },
  {
    city: "Wausau",
    iata: "AUW",
    name: "Wausau Downtown Airport",
    country: "United States"
  },
  {
    city: "Asheville",
    iata: "AVL",
    name: "Asheville Regional Airport",
    country: "United States"
  },
  {
    city: "Avon Park",
    iata: "AVO",
    name: "Avon Park Executive Airport",
    country: "United States"
  },
  {
    city: "Wilkes-Barre/Scranton",
    iata: "AVP",
    name: "Wilkes-Barre/Scranton International Airport",
    country: "United States"
  },
  {
    city: "Marana",
    iata: "AVW",
    name: "Marana Regional Airport",
    country: "United States"
  },
  {
    city: "Avalon",
    iata: "AVX",
    name: "Catalina Airport",
    country: "United States"
  },
  {
    city: "West Memphis",
    iata: "AWM",
    name: "West Memphis Municipal Airport",
    country: "United States"
  },
  {
    city: "Algona",
    iata: "AXG",
    name: "Algona Municipal Airport",
    country: "United States"
  },
  {
    city: "Alexandria",
    iata: "AXN",
    name: "Chandler Field",
    country: "United States"
  },
  {
    city: "Altus",
    iata: "AXS",
    name: "Altus Quartz Mountain Regional Airport",
    country: "United States"
  },
  {
    city: "Wapakoneta",
    iata: "AXV",
    name: "Neil Armstrong Airport",
    country: "United States"
  },
  {
    city: "Angel Fire",
    iata: "AXX",
    name: "Angel Fire Airport",
    country: "United States"
  },
  {
    city: "Waycross",
    iata: "AYS",
    name: "Waycross Ware County Airport",
    country: "United States"
  },
  {
    city: "Manchester",
    iata: "TUH",
    name: "Arnold Air Force Base",
    country: "United States"
  },
  {
    city: "Kalamazoo",
    iata: "AZO",
    name: "Kalamazoo/Battle Creek International Airport",
    country: "United States"
  },
  {
    city: "Beale Air Force Base",
    iata: "BAB",
    name: "Beale Air Force Base",
    country: "United States"
  },
  {
    city: "Bossier City",
    iata: "BAD",
    name: "Barksdale Air Force Base",
    country: "United States"
  },
  {
    city: "Westfield",
    iata: "BAF",
    name: "Westfield-Barnes Regional Airport",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "CLU",
    name: "Columbus Municipal Airport",
    country: "United States"
  },
  {
    city: "Battle Mountain",
    iata: "BAM",
    name: "Battle Mountain Airport",
    country: "United States"
  },
  {
    city: "Benson",
    iata: "BBB",
    name: "Benson Municipal Airport",
    country: "United States"
  },
  {
    city: "Brady",
    iata: "BBD",
    name: "Curtis Field",
    country: "United States"
  },
  {
    city: "Branson",
    iata: "BKG",
    name: "Branson Airport",
    country: "United States"
  },
  {
    city: "Bennettsville",
    iata: "BTN",
    name: "Marlboro County Jetport - H E Avent Field Airport",
    country: "United States"
  },
  {
    city: "Broken Bow",
    iata: "BBW",
    name: "Broken Bow Municipal Airport",
    country: "United States"
  },
  {
    city: "Blacksburg",
    iata: "BCB",
    name: "Virginia Tech Montgomery Executive Airport",
    country: "United States"
  },
  {
    city: "Bryce Canyon",
    iata: "BCE",
    name: "Bryce Canyon Airport",
    country: "United States"
  },
  {
    city: "Boca Raton",
    iata: "BCT",
    name: "Boca Raton Airport",
    country: "United States"
  },
  {
    city: "Baudette",
    iata: "BDE",
    name: "Baudette International Airport",
    country: "United States"
  },
  {
    city: "Blanding",
    iata: "BDG",
    name: "Blanding Municipal Airport",
    country: "United States"
  },
  {
    city: "Willmar",
    iata: "ILL",
    name: "Willmar Municipal Airport John L Rice Field (2006)",
    country: "United States"
  },
  {
    city: "Hartford",
    iata: "BDL",
    name: "Bradley International Airport",
    country: "United States"
  },
  {
    city: "Bridgeport",
    iata: "BDR",
    name: "Igor I Sikorsky Memorial Airport",
    country: "United States"
  },
  {
    city: "Boulder",
    iata: "WBU",
    name: "Boulder Municipal Airport",
    country: "United States"
  },
  {
    city: "Bell Island",
    iata: "KBE",
    name: "Bell Island Hot Springs Seaplane Base",
    country: "United States"
  },
  {
    city: "Wichita",
    iata: "BEC",
    name: "Beech Factory Airport",
    country: "United States"
  },
  {
    city: "Bedford",
    iata: "BED",
    name: "Laurence G Hanscom Field",
    country: "United States"
  },
  {
    city: "Benton Harbor",
    iata: "BEH",
    name: "Southwest Michigan Regional Airport",
    country: "United States"
  },
  {
    city: "Bradford",
    iata: "BFD",
    name: "Bradford Regional Airport",
    country: "United States"
  },
  {
    city: "Scottsbluff",
    iata: "BFF",
    name: "Western Neb. Rgnl/William B. Heilig Airport",
    country: "United States"
  },
  {
    city: "Seattle",
    iata: "BFI",
    name: "King County International Airport - Boeing Field",
    country: "United States"
  },
  {
    city: "Bakersfield",
    iata: "BFL",
    name: "Meadows Field",
    country: "United States"
  },
  {
    city: "Mobile",
    iata: "BFM",
    name: "Mobile Downtown Airport",
    country: "United States"
  },
  {
    city: "Bedford",
    iata: "BFR",
    name: "Virgil I Grissom Municipal Airport",
    country: "United States"
  },
  {
    city: "Borger",
    iata: "BGD",
    name: "Hutchinson County Airport",
    country: "United States"
  },
  {
    city: "Bainbridge",
    iata: "BGE",
    name: "Decatur County Industrial Air Park",
    country: "United States"
  },
  {
    city: "Binghamton",
    iata: "BGM",
    name: "Greater Binghamton/Edwin A Link field",
    country: "United States"
  },
  {
    city: "Bangor",
    iata: "BGR",
    name: "Bangor International Airport",
    country: "United States"
  },
  {
    city: "Kahama",
    iata: "KBH",
    name: "Kahama Airstrip",
    country: "TZ"
  },
  {
    city: "Bar Harbor",
    iata: "BHB",
    name: "Hancock County-Bar Harbor Airport",
    country: "United States"
  },
  {
    city: "Birmingham",
    iata: "BHM",
    name: "Birmingham-Shuttlesworth International Airport",
    country: "United States"
  },
  {
    city: "Block Island",
    iata: "BID",
    name: "Block Island State Airport",
    country: "United States"
  },
  {
    city: "Beatrice",
    iata: "BIE",
    name: "Beatrice Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Bliss/El Paso",
    iata: "BIF",
    name: "Biggs Army Air Field (Fort Bliss)",
    country: "United States"
  },
  {
    city: "Bishop",
    iata: "BIH",
    name: "Eastern Sierra Regional Airport",
    country: "United States"
  },
  {
    city: "Billings",
    iata: "BIL",
    name: "Billings Logan International Airport",
    country: "United States"
  },
  {
    city: "Bismarck",
    iata: "BIS",
    name: "Bismarck Municipal Airport",
    country: "United States"
  },
  {
    city: "Biloxi",
    iata: "BIX",
    name: "Keesler Air Force Base",
    country: "United States"
  },
  {
    city: "Denver",
    iata: "BJC",
    name: "Rocky Mountain Metropolitan Airport",
    country: "United States"
  },
  {
    city: "Bemidji",
    iata: "BJI",
    name: "Bemidji Regional Airport",
    country: "United States"
  },
  {
    city: "Wooster",
    iata: "BJJ",
    name: "Wayne County Airport",
    country: "United States"
  },
  {
    city: "Breckenridge",
    iata: "BKD",
    name: "Stephens County Airport",
    country: "United States"
  },
  {
    city: "Baker City",
    iata: "BKE",
    name: "Baker City Municipal Airport",
    country: "United States"
  },
  {
    city: "Aurora",
    iata: "BFK",
    name: "Buckley Space Force Base",
    country: "United States"
  },
  {
    city: "Cleveland",
    iata: "BKL",
    name: "Burke Lakefront Airport",
    country: "United States"
  },
  {
    city: "Blackstone",
    iata: "BKT",
    name: "Allen C Perkinson Blackstone Army Air Field",
    country: "United States"
  },
  {
    city: "Beaver",
    iata: "BKW",
    name: "Raleigh County Memorial Airport",
    country: "United States"
  },
  {
    city: "Brookings",
    iata: "BKX",
    name: "Brookings Regional Airport",
    country: "United States"
  },
  {
    city: "Bluefield",
    iata: "BLF",
    name: "Mercer County Airport",
    country: "United States"
  },
  {
    city: "Blythe",
    iata: "BLH",
    name: "Blythe Airport",
    country: "United States"
  },
  {
    city: "Bellingham",
    iata: "BLI",
    name: "Bellingham International Airport",
    country: "United States"
  },
  {
    city: "Belmar/Farmingdale",
    iata: "BLM",
    name: "Monmouth Executive Airport",
    country: "United States"
  },
  {
    city: "Emigrant Gap",
    iata: "BLU",
    name: "Blue Canyon Nyack Airport",
    country: "United States"
  },
  {
    city: "Belleville",
    iata: "BLV",
    name: "Scott AFB/Midamerica Airport",
    country: "United States"
  },
  {
    city: "Brigham City",
    iata: "BMC",
    name: "Brigham City Regional Airport",
    country: "United States"
  },
  {
    city: "Bloomington",
    iata: "BMG",
    name: "Monroe County Airport",
    country: "United States"
  },
  {
    city: "Bloomington/Normal",
    iata: "BMI",
    name: "Central Illinois Regional Airport at Bloomington-Normal",
    country: "United States"
  },
  {
    city: "Berlin",
    iata: "BML",
    name: "Berlin Regional Airport",
    country: "United States"
  },
  {
    city: "Beaumont",
    iata: "BMT",
    name: "Beaumont Municipal Airport",
    country: "United States"
  },
  {
    city: "Nashville",
    iata: "BNA",
    name: "Nashville International Airport",
    country: "United States"
  },
  {
    city: "Banning",
    iata: "BNG",
    name: "Banning Municipal Airport",
    country: "United States"
  },
  {
    city: "Barnwell",
    iata: "BNL",
    name: "Barnwell Regional Airport",
    country: "United States"
  },
  {
    city: "Burns",
    iata: "BNO",
    name: "Burns Municipal Airport",
    country: "United States"
  },
  {
    city: "Boone",
    iata: "BNW",
    name: "Boone Municipal Airport",
    country: "United States"
  },
  {
    city: "Boise",
    iata: "BOI",
    name: "Boise Air Terminal/Gowen Field",
    country: "United States"
  },
  {
    city: "Brookings",
    iata: "BOK",
    name: "Brookings Airport",
    country: "United States"
  },
  {
    city: "Boston",
    iata: "BOS",
    name: "Boston Logan International Airport",
    country: "United States"
  },
  {
    city: "Bartow",
    iata: "BOW",
    name: "Bartow Executive Airport",
    country: "United States"
  },
  {
    city: "Big Spring",
    iata: "HCA",
    name: "Big Spring Mc Mahon-Wrinkle Airport",
    country: "United States"
  },
  {
    city: "Big Piney",
    iata: "BPI",
    name: "Miley Memorial Field",
    country: "United States"
  },
  {
    city: "Mountain Home",
    iata: "WMH",
    name: "Ozark Regional Airport",
    country: "United States"
  },
  {
    city: "Beaumont/Port Arthur",
    iata: "BPT",
    name: "Jack Brooks Regional Airport",
    country: "United States"
  },
  {
    city: "Brunswick",
    iata: "BQK",
    name: "Brunswick Golden Isles Airport",
    country: "United States"
  },
  {
    city: "Brainerd",
    iata: "BRD",
    name: "Brainerd Lakes Regional Airport",
    country: "United States"
  },
  {
    city: "Burlington",
    iata: "BRL",
    name: "Southeast Iowa Regional Airport",
    country: "United States"
  },
  {
    city: "Brownsville",
    iata: "BRO",
    name: "Brownsville South Padre Island International Airport",
    country: "United States"
  },
  {
    city: "Bardstown",
    iata: "BRY",
    name: "Samuels Field",
    country: "United States"
  },
  {
    city: "Kaben",
    iata: "KBT",
    name: "Kaben Airport",
    country: "MH"
  },
  {
    city: "Bountiful",
    iata: "BTF",
    name: "Skypark Airport",
    country: "United States"
  },
  {
    city: "Battle Creek",
    iata: "BTL",
    name: "Battle Creek Executive Airport at Kellogg Field",
    country: "United States"
  },
  {
    city: "Butte",
    iata: "BTM",
    name: "Bert Mooney Airport",
    country: "United States"
  },
  {
    city: "Britton",
    iata: "TTO",
    name: "Britton Municipal Airport",
    country: "United States"
  },
  {
    city: "Butler",
    iata: "BTP",
    name: "Pittsburgh/Butler Regional Airport",
    country: "United States"
  },
  {
    city: "Baton Rouge",
    iata: "BTR",
    name: "Baton Rouge Metropolitan Airport",
    country: "United States"
  },
  {
    city: "Burlington",
    iata: "BTV",
    name: "Patrick Leahy Burlington International Airport",
    country: "United States"
  },
  {
    city: "Beatty",
    iata: "BTY",
    name: "Beatty Airport",
    country: "United States"
  },
  {
    city: "Burwell",
    iata: "BUB",
    name: "Cram Field",
    country: "United States"
  },
  {
    city: "Buffalo",
    iata: "BUF",
    name: "Buffalo Niagara International Airport",
    country: "United States"
  },
  {
    city: "Butler",
    iata: "BUM",
    name: "Butler Memorial Airport",
    country: "United States"
  },
  {
    city: "Burbank",
    iata: "BUR",
    name: "Hollywood Burbank Airport",
    country: "United States"
  },
  {
    city: "Beaver Falls",
    iata: "BFP",
    name: "Beaver County Airport",
    country: "United States"
  },
  {
    city: "Bartlesville",
    iata: "BVO",
    name: "Bartlesville Municipal Airport",
    country: "United States"
  },
  {
    city: "Burlington",
    iata: "MVW",
    name: "Skagit Regional Airport",
    country: "United States"
  },
  {
    city: "Batesville",
    iata: "BVX",
    name: "Batesville Regional Airport",
    country: "United States"
  },
  {
    city: "Beverly / Danvers",
    iata: "BVY",
    name: "Beverly Regional Airport",
    country: "United States"
  },
  {
    city: "Brawley",
    iata: "BWC",
    name: "Brawley Municipal Airport",
    country: "United States"
  },
  {
    city: "Brownwood",
    iata: "BWD",
    name: "Brownwood Regional Airport",
    country: "United States"
  },
  {
    city: "Bowling Green",
    iata: "BWG",
    name: "Bowling Green Warren County Regional Airport",
    country: "United States"
  },
  {
    city: "Baltimore",
    iata: "BWI",
    name: "Baltimore/Washington International Thurgood Marshall Airport",
    country: "United States"
  },
  {
    city: "Wahpeton",
    iata: "WAH",
    name: "Harry Stern Airport",
    country: "United States"
  },
  {
    city: "Bowman",
    iata: "BWM",
    name: "Bowman Regional Airport",
    country: "United States"
  },
  {
    city: "Bogalusa",
    iata: "BXA",
    name: "George R Carr Memorial Air Field",
    country: "United States"
  },
  {
    city: "Buckeye",
    iata: "BXK",
    name: "Buckeye Municipal Airport",
    country: "United States"
  },
  {
    city: "Brunswick",
    iata: "NHZ",
    name: "Brunswick Executive Airport",
    country: "United States"
  },
  {
    city: "Buffalo",
    iata: "BYG",
    name: "Johnson County Airport",
    country: "United States"
  },
  {
    city: "Blytheville",
    iata: "BYH",
    name: "Arkansas International Airport",
    country: "United States"
  },
  {
    city: "Burley",
    iata: "BYI",
    name: "Burley Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Irwin/Barstow",
    iata: "BYS",
    name: "Bicycle Lake Army Air Field",
    country: "United States"
  },
  {
    city: "Bay City",
    iata: "BBC",
    name: "Bay City Regional Airport",
    country: "United States"
  },
  {
    city: "Bozeman",
    iata: "BZN",
    name: "Bozeman Yellowstone International Airport",
    country: "United States"
  },
  {
    city: "Lake Geneva",
    iata: "XES",
    name: "Grand Geneva Resort Airport",
    country: "United States"
  },
  {
    city: "Plymouth",
    iata: "PLY",
    name: "Plymouth Municipal Airport",
    country: "United States"
  },
  {
    city: "Coalinga",
    iata: "CLG",
    name: "New Coalinga Municipal Airport",
    country: "United States"
  },
  {
    city: "Cadillac",
    iata: "CAD",
    name: "Wexford County Airport",
    country: "United States"
  },
  {
    city: "Columbia",
    iata: "CAE",
    name: "Columbia Metropolitan Airport",
    country: "United States"
  },
  {
    city: "Craig",
    iata: "CIG",
    name: "Craig Moffat Airport",
    country: "United States"
  },
  {
    city: "Akron",
    iata: "CAK",
    name: "Akron Canton Regional Airport",
    country: "United States"
  },
  {
    city: "Clayton",
    iata: "CAO",
    name: "Clayton Municipal Airpark",
    country: "United States"
  },
  {
    city: "Caribou",
    iata: "CAR",
    name: "Caribou Municipal Airport",
    country: "United States"
  },
  {
    city: "Wiley Ford",
    iata: "CBE",
    name: "Greater Cumberland Regional Airport",
    country: "United States"
  },
  {
    city: "Council Bluffs",
    iata: "CBF",
    name: "Council Bluffs Municipal Airport",
    country: "United States"
  },
  {
    city: "Colby",
    iata: "CBK",
    name: "Shalz Field",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "CBM",
    name: "Columbus Air Force Base",
    country: "United States"
  },
  {
    city: "Coffman Cove",
    iata: "KCC",
    name: "Coffman Cove Seaplane Base",
    country: "United States"
  },
  {
    city: "Upland",
    iata: "CCB",
    name: "Upland-Cable Airport",
    country: "United States"
  },
  {
    city: "Concord",
    iata: "CCR",
    name: "Buchanan Field",
    country: "United States"
  },
  {
    city: "Charles City",
    iata: "CCY",
    name: "Northeast Iowa Regional Airport",
    country: "United States"
  },
  {
    city: "Lyndonville",
    iata: "LLX",
    name: "Caledonia County Airport",
    country: "United States"
  },
  {
    city: "Cedar City",
    iata: "CDC",
    name: "Cedar City Regional Airport",
    country: "United States"
  },
  {
    city: "Camden",
    iata: "CDH",
    name: "Harrell Field",
    country: "United States"
  },
  {
    city: "Cedar Key",
    iata: "CDK",
    name: "George T Lewis Airport",
    country: "United States"
  },
  {
    city: "Camden",
    iata: "CDN",
    name: "Woodward Field",
    country: "United States"
  },
  {
    city: "Chadron",
    iata: "CDR",
    name: "Chadron Municipal Airport",
    country: "United States"
  },
  {
    city: "Childress",
    iata: "CDS",
    name: "Childress Municipal Airport",
    country: "United States"
  },
  {
    city: "Caldwell",
    iata: "CDW",
    name: "Essex County Airport",
    country: "United States"
  },
  {
    city: "Wichita",
    iata: "CEA",
    name: "Cessna Aircraft Field",
    country: "United States"
  },
  {
    city: "Crescent City",
    iata: "CEC",
    name: "Jack Mc Namara Field Airport",
    country: "United States"
  },
  {
    city: "Chicopee",
    iata: "CEF",
    name: "Westover Metropolitan Airport / Westover Air Reserve Base",
    country: "United States"
  },
  {
    city: "Clemson",
    iata: "CEU",
    name: "Oconee County Regional Airport",
    country: "United States"
  },
  {
    city: "Connersville",
    iata: "CEV",
    name: "Mettel Field",
    country: "United States"
  },
  {
    city: "Crestview",
    iata: "CEW",
    name: "Bob Sikes Airport",
    country: "United States"
  },
  {
    city: "Murray",
    iata: "CEY",
    name: "Murray-Calloway County Airport Kyle-Oakley Field",
    country: "United States"
  },
  {
    city: "Cortez",
    iata: "CEZ",
    name: "Cortez Municipal Airport",
    country: "United States"
  },
  {
    city: "Bryan",
    iata: "CFD",
    name: "Coulter Field",
    country: "United States"
  },
  {
    city: "Caro",
    iata: "TZC",
    name: "Tuscola Area Airport",
    country: "United States"
  },
  {
    city: "Clifton",
    iata: "CFT",
    name: "Greenlee County Airport",
    country: "United States"
  },
  {
    city: "Coffeyville",
    iata: "CFV",
    name: "Coffeyville Municipal Airport",
    country: "United States"
  },
  {
    city: "Cambridge",
    iata: "CGE",
    name: "Cambridge Dorchester Airport",
    country: "United States"
  },
  {
    city: "Cleveland",
    iata: "CGF",
    name: "Cuyahoga County Airport",
    country: "United States"
  },
  {
    city: "Cape Girardeau",
    iata: "CGI",
    name: "Cape Girardeau Regional Airport",
    country: "United States"
  },
  {
    city: "College Park",
    iata: "CGS",
    name: "College Park Airport",
    country: "United States"
  },
  {
    city: "Casa Grande",
    iata: "CGZ",
    name: "Casa Grande Municipal Airport",
    country: "United States"
  },
  {
    city: "Chattanooga",
    iata: "CHA",
    name: "Chattanooga Metropolitan Airport (Lovell Field)",
    country: "United States"
  },
  {
    city: "Chickasha",
    iata: "CHK",
    name: "Chickasha Municipal Airport",
    country: "United States"
  },
  {
    city: "Charlottesville",
    iata: "CHO",
    name: "Charlottesville Albemarle Airport",
    country: "United States"
  },
  {
    city: "Charleston",
    iata: "CHS",
    name: "Charleston International Airport",
    country: "United States"
  },
  {
    city: "Chico",
    iata: "CIC",
    name: "Chico Regional Airport",
    country: "United States"
  },
  {
    city: "Cedar Rapids",
    iata: "CID",
    name: "The Eastern Iowa Airport",
    country: "United States"
  },
  {
    city: "Carroll",
    iata: "CIN",
    name: "Arthur N Neu Airport",
    country: "United States"
  },
  {
    city: "Cairo",
    iata: "CIR",
    name: "Cairo Regional Airport",
    country: "United States"
  },
  {
    city: "Kincheloe",
    iata: "CIU",
    name: "Chippewa County International Airport",
    country: "United States"
  },
  {
    city: "Cherokee",
    iata: "CKA",
    name: "Kegelman AF Aux Field",
    country: "United States"
  },
  {
    city: "Bridgeport",
    iata: "CKB",
    name: "North Central West Virginia Airport",
    country: "United States"
  },
  {
    city: "Grand Marais",
    iata: "GRM",
    name: "Grand Marais Cook County Airport",
    country: "United States"
  },
  {
    city: "Clarksdale",
    iata: "CKM",
    name: "Fletcher Field",
    country: "United States"
  },
  {
    city: "Crookston",
    iata: "CKN",
    name: "Crookston Municipal Kirkwood Field",
    country: "United States"
  },
  {
    city: "Clarksville",
    iata: "CKV",
    name: "Clarksville–Montgomery County Regional Airport",
    country: "United States"
  },
  {
    city: "Chignik Flats",
    iata: "KCL",
    name: "Chignik Lagoon Airport",
    country: "United States"
  },
  {
    city: "Cleveland",
    iata: "CLE",
    name: "Cleveland Hopkins International Airport",
    country: "United States"
  },
  {
    city: "Clintonville",
    iata: "CLI",
    name: "Clintonville Municipal Airport",
    country: "United States"
  },
  {
    city: "Clinton",
    iata: "CLK",
    name: "Clinton Regional Airport",
    country: "United States"
  },
  {
    city: "College Station",
    iata: "CLL",
    name: "Easterwood Field",
    country: "United States"
  },
  {
    city: "Port Angeles",
    iata: "CLM",
    name: "William R Fairchild International Airport",
    country: "United States"
  },
  {
    city: "Calipatria",
    iata: "CLR",
    name: "Cliff Hatfield Memorial Airport",
    country: "United States"
  },
  {
    city: "Chehalis",
    iata: "CLS",
    name: "Chehalis Centralia Airport",
    country: "United States"
  },
  {
    city: "Charlotte",
    iata: "CLT",
    name: "Charlotte Douglas International Airport",
    country: "United States"
  },
  {
    city: "Clearwater",
    iata: "CLW",
    name: "Clearwater Air Park",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "CMH",
    name: "John Glenn Columbus International Airport",
    country: "United States"
  },
  {
    city: "Savoy",
    iata: "CMI",
    name: "University of Illinois Willard Airport",
    country: "United States"
  },
  {
    city: "Hancock",
    iata: "CMX",
    name: "Houghton County Memorial Airport",
    country: "United States"
  },
  {
    city: "Sparta",
    iata: "CMY",
    name: "Sparta Fort McCoy Airport",
    country: "United States"
  },
  {
    city: "Chernofski Harbor",
    iata: "KCN",
    name: "Chernofski Harbor Seaplane Base",
    country: "United States"
  },
  {
    city: "Claremont",
    iata: "CNH",
    name: "Claremont Municipal Airport",
    country: "United States"
  },
  {
    city: "Concordia",
    iata: "CNK",
    name: "Blosser Municipal Airport",
    country: "United States"
  },
  {
    city: "Carlsbad",
    iata: "CNM",
    name: "Cavern City Air Terminal",
    country: "United States"
  },
  {
    city: "Chino",
    iata: "CNO",
    name: "Chino Airport",
    country: "United States"
  },
  {
    city: "Chanute",
    iata: "CNU",
    name: "Chanute Martin Johnson Airport",
    country: "United States"
  },
  {
    city: "Waco",
    iata: "CNW",
    name: "TSTC Waco Airport",
    country: "United States"
  },
  {
    city: "Moab",
    iata: "CNY",
    name: "Canyonlands Regional Airport",
    country: "United States"
  },
  {
    city: "Cody",
    iata: "COD",
    name: "Yellowstone Regional Airport",
    country: "United States"
  },
  {
    city: "Coeur d'Alene",
    iata: "COE",
    name: "Coeur D'Alene Airport - Pappy Boyington Field",
    country: "United States"
  },
  {
    city: "Cocoa Beach",
    iata: "COF",
    name: "Patrick Space Force Base",
    country: "United States"
  },
  {
    city: "Merritt Island",
    iata: "COI",
    name: "Merritt Island Airport",
    country: "United States"
  },
  {
    city: "Coleman",
    iata: "COM",
    name: "Coleman Municipal Airport",
    country: "United States"
  },
  {
    city: "Concord",
    iata: "CON",
    name: "Concord Municipal Airport",
    country: "United States"
  },
  {
    city: "Colorado Springs",
    iata: "COS",
    name: "City of Colorado Springs Municipal Airport",
    country: "United States"
  },
  {
    city: "Cotulla",
    iata: "COT",
    name: "Cotulla-La Salle County Airport",
    country: "United States"
  },
  {
    city: "Columbia",
    iata: "COU",
    name: "Columbia Regional Airport",
    country: "United States"
  },
  {
    city: "Compton",
    iata: "CPM",
    name: "Compton Woodley Airport",
    country: "United States"
  },
  {
    city: "Casper",
    iata: "CPR",
    name: "Casper-Natrona County International Airport",
    country: "United States"
  },
  {
    city: "Cahokia/St Louis",
    iata: "CPS",
    name: "St Louis Downtown Airport",
    country: "United States"
  },
  {
    city: "Cheraw",
    iata: "HCW",
    name: "Cheraw Municipal Airport/Lynch Bellinger Field",
    country: "United States"
  },
  {
    city: "Colorado Creek",
    iata: "KCR",
    name: "Colorado Creek Airport",
    country: "United States"
  },
  {
    city: "North Myrtle Beach",
    iata: "CRE",
    name: "Grand Strand Airport",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "CRG",
    name: "Jacksonville Executive at Craig Airport",
    country: "United States"
  },
  {
    city: "Corpus Christi",
    iata: "CRP",
    name: "Corpus Christi International Airport",
    country: "United States"
  },
  {
    city: "Carlsbad",
    iata: "CLD",
    name: "McClellan-Palomar Airport",
    country: "United States"
  },
  {
    city: "Corsicana",
    iata: "CRS",
    name: "C David Campbell Field Corsicana Municipal Airport",
    country: "United States"
  },
  {
    city: "Crossett",
    iata: "CRT",
    name: "Z M Jack Stell Field",
    country: "United States"
  },
  {
    city: "Charleston",
    iata: "CRW",
    name: "Yeager Airport",
    country: "United States"
  },
  {
    city: "Corinth",
    iata: "CRX",
    name: "Roscoe Turner Airport",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "CSG",
    name: "Columbus Airport",
    country: "United States"
  },
  {
    city: "Clinton",
    iata: "CSM",
    name: "Clinton Sherman Airport",
    country: "United States"
  },
  {
    city: "Creston",
    iata: "CSQ",
    name: "Creston Municipal Airport",
    country: "United States"
  },
  {
    city: "Crossville",
    iata: "CSV",
    name: "Crossville Memorial Airport Whitson Field",
    country: "United States"
  },
  {
    city: "Cut Bank",
    iata: "CTB",
    name: "Cut Bank International Airport",
    country: "United States"
  },
  {
    city: "Cross City",
    iata: "CTY",
    name: "Cross City Airport",
    country: "United States"
  },
  {
    city: "Clinton",
    iata: "CTZ",
    name: "Sampson County Airport",
    country: "United States"
  },
  {
    city: "Columbia",
    iata: "CUB",
    name: "Jim Hamilton L.B. Owens Airport",
    country: "United States"
  },
  {
    city: "Cushing",
    iata: "CUH",
    name: "Cushing Municipal Airport",
    country: "United States"
  },
  {
    city: "Cincinnati / Covington",
    iata: "CVG",
    name: "Cincinnati Northern Kentucky International Airport",
    country: "United States"
  },
  {
    city: "Hollister",
    iata: "HLI",
    name: "Hollister Municipal Airport",
    country: "United States"
  },
  {
    city: "Ash Flat",
    iata: "CKK",
    name: "Sharp County Regional Airport",
    country: "United States"
  },
  {
    city: "Clovis",
    iata: "CVN",
    name: "Clovis Municipal Airport",
    country: "United States"
  },
  {
    city: "Corvallis",
    iata: "CVO",
    name: "Corvallis Municipal Airport",
    country: "United States"
  },
  {
    city: "Clovis",
    iata: "CVS",
    name: "Cannon Air Force Base",
    country: "United States"
  },
  {
    city: "Mosinee",
    iata: "CWA",
    name: "Central Wisconsin Airport",
    country: "United States"
  },
  {
    city: "Wichita Falls",
    iata: "KIP",
    name: "Kickapoo Downtown Airport",
    country: "United States"
  },
  {
    city: "Lake Charles",
    iata: "CWF",
    name: "Chennault International Airport",
    country: "United States"
  },
  {
    city: "Clinton",
    iata: "CWI",
    name: "Clinton Municipal Airport",
    country: "United States"
  },
  {
    city: "Calexico",
    iata: "CXL",
    name: "Calexico International Airport",
    country: "United States"
  },
  {
    city: "Houston",
    iata: "CXO",
    name: "Conroe-North Houston Regional Airport",
    country: "United States"
  },
  {
    city: "Carson City",
    iata: "CSN",
    name: "Carson Airport",
    country: "United States"
  },
  {
    city: "Harrisburg",
    iata: "HAR",
    name: "Capital City Airport",
    country: "United States"
  },
  {
    city: "Cheyenne",
    iata: "CYS",
    name: "Cheyenne Regional Jerry Olson Field",
    country: "United States"
  },
  {
    city: "Cascade Locks",
    iata: "CZK",
    name: "Cascade Locks State Airport",
    country: "United States"
  },
  {
    city: "Carrizo Springs",
    iata: "CZT",
    name: "Dimmit County Airport",
    country: "United States"
  },
  {
    city: "Tioga",
    iata: "VEX",
    name: "Tioga Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Belvoir",
    iata: "DAA",
    name: "Davison Army Air Field",
    country: "United States"
  },
  {
    city: "Daytona Beach",
    iata: "DAB",
    name: "Daytona Beach International Airport",
    country: "United States"
  },
  {
    city: "Daggett",
    iata: "DAG",
    name: "Barstow Daggett Airport",
    country: "United States"
  },
  {
    city: "Dallas",
    iata: "DAL",
    name: "Dallas Love Field",
    country: "United States"
  },
  {
    city: "Danville",
    iata: "DAN",
    name: "Danville Regional Airport",
    country: "United States"
  },
  {
    city: "Dayton",
    iata: "DAY",
    name: "James M. Cox Dayton International Airport",
    country: "United States"
  },
  {
    city: "Dublin",
    iata: "DBN",
    name: "W H 'Bud' Barron Airport",
    country: "United States"
  },
  {
    city: "Dubuque",
    iata: "DBQ",
    name: "Dubuque Regional Airport",
    country: "United States"
  },
  {
    city: "Washington",
    iata: "DCA",
    name: "Ronald Reagan Washington National Airport",
    country: "United States"
  },
  {
    city: "Decatur",
    iata: "DCU",
    name: "Pryor Field Regional Airport",
    country: "United States"
  },
  {
    city: "Dodge City",
    iata: "DDC",
    name: "Dodge City Regional Airport",
    country: "United States"
  },
  {
    city: "Decatur",
    iata: "DEC",
    name: "Decatur Airport",
    country: "United States"
  },
  {
    city: "Decorah",
    iata: "DEH",
    name: "Decorah Municipal Airport",
    country: "United States"
  },
  {
    city: "Denver",
    iata: "DEN",
    name: "Denver International Airport",
    country: "United States"
  },
  {
    city: "Detroit",
    iata: "DET",
    name: "Coleman A. Young Municipal Airport",
    country: "United States"
  },
  {
    city: "Defiance",
    iata: "DFI",
    name: "Defiance Memorial Airport",
    country: "United States"
  },
  {
    city: "Dallas-Fort Worth",
    iata: "DFW",
    name: "Dallas Fort Worth International Airport",
    country: "United States"
  },
  {
    city: "Douglas",
    iata: "DGL",
    name: "Douglas Municipal Airport",
    country: "United States"
  },
  {
    city: "Douglas",
    iata: "DGW",
    name: "Converse County Airport",
    country: "United States"
  },
  {
    city: "Dothan",
    iata: "DHN",
    name: "Dothan Regional Airport",
    country: "United States"
  },
  {
    city: "Dalhart",
    iata: "DHT",
    name: "Dalhart Municipal Airport",
    country: "United States"
  },
  {
    city: "Dickinson",
    iata: "DIK",
    name: "Dickinson Theodore Roosevelt Regional Airport",
    country: "United States"
  },
  {
    city: "Dunkirk",
    iata: "DKK",
    name: "Chautauqua County-Dunkirk Airport",
    country: "United States"
  },
  {
    city: "Dillon",
    iata: "DLL",
    name: "Dillon County Airport",
    country: "United States"
  },
  {
    city: "Del Rio",
    iata: "DLF",
    name: "Laughlin Air Force Base",
    country: "United States"
  },
  {
    city: "Duluth",
    iata: "DLH",
    name: "Duluth International Airport",
    country: "United States"
  },
  {
    city: "Dillon",
    iata: "DLN",
    name: "Dillon Airport",
    country: "United States"
  },
  {
    city: "Dallesport / The Dalles",
    iata: "DLS",
    name: "Columbia Gorge Regional Airport",
    country: "United States"
  },
  {
    city: "Tucson",
    iata: "DMA",
    name: "Davis Monthan Air Force Base",
    country: "United States"
  },
  {
    city: "Deming",
    iata: "DMN",
    name: "Deming Municipal Airport",
    country: "United States"
  },
  {
    city: "Sedalia",
    iata: "DMO",
    name: "Sedalia Memorial Airport",
    country: "United States"
  },
  {
    city: "Augusta",
    iata: "DNL",
    name: "Daniel Field",
    country: "United States"
  },
  {
    city: "Dalton",
    iata: "DNN",
    name: "Dalton Municipal Airport",
    country: "United States"
  },
  {
    city: "Denison",
    iata: "DNS",
    name: "Denison Municipal Airport",
    country: "United States"
  },
  {
    city: "Danville",
    iata: "DNV",
    name: "Vermilion Regional Airport",
    country: "United States"
  },
  {
    city: "Dover",
    iata: "DOV",
    name: "Dover Civil Air Terminal/Dover Air Force Base",
    country: "United States"
  },
  {
    city: "Chicago/West Chicago",
    iata: "DPA",
    name: "Dupage Airport",
    country: "United States"
  },
  {
    city: "Dugway Proving Ground",
    iata: "DPG",
    name: "Michael AAF (Dugway Proving Ground) Airport",
    country: "United States"
  },
  {
    city: "Mercury",
    iata: "DRA",
    name: "Desert Rock Airport",
    country: "United States"
  },
  {
    city: "DeRidder",
    iata: "DRI",
    name: "Beauregard Regional Airport",
    country: "United States"
  },
  {
    city: "Drummond Island",
    iata: "DRE",
    name: "Drummond Island Airport",
    country: "United States"
  },
  {
    city: "Durango",
    iata: "DRO",
    name: "Durango La Plata County Airport",
    country: "United States"
  },
  {
    city: "Del Rio",
    iata: "DRT",
    name: "Del Rio International Airport",
    country: "United States"
  },
  {
    city: "Kamaran Downs",
    iata: "KDS",
    name: "Kamaran Downs Airport",
    country: "Australia"
  },
  {
    city: "Des Moines",
    iata: "DSM",
    name: "Des Moines International Airport",
    country: "United States"
  },
  {
    city: "Dansville",
    iata: "DSV",
    name: "Dansville Municipal Airport",
    country: "United States"
  },
  {
    city: "Delta",
    iata: "DTA",
    name: "Delta Municipal Airport",
    country: "United States"
  },
  {
    city: "Detroit Lakes",
    iata: "DTL",
    name: "Detroit Lakes Airport",
    country: "United States"
  },
  {
    city: "Shreveport",
    iata: "DTN",
    name: "Shreveport Downtown Airport",
    country: "United States"
  },
  {
    city: "Destin",
    iata: "DSI",
    name: "Destin Executive Airport",
    country: "United States"
  },
  {
    city: "Detroit",
    iata: "DTW",
    name: "Detroit Metropolitan Wayne County Airport",
    country: "United States"
  },
  {
    city: "Durant",
    iata: "DUA",
    name: "Durant Regional Airport - Eaker Field",
    country: "United States"
  },
  {
    city: "Duncan",
    iata: "DUC",
    name: "Halliburton Field",
    country: "United States"
  },
  {
    city: "Douglas Bisbee",
    iata: "DUG",
    name: "Bisbee Douglas International Airport",
    country: "United States"
  },
  {
    city: "Dubois",
    iata: "DUJ",
    name: "DuBois Regional Airport",
    country: "United States"
  },
  {
    city: "Devils Lake",
    iata: "DVL",
    name: "Devils Lake Regional Airport",
    country: "United States"
  },
  {
    city: "Davenport",
    iata: "DVN",
    name: "Davenport Municipal Airport",
    country: "United States"
  },
  {
    city: "Novato",
    iata: "NOT",
    name: "Marin County Airport - Gnoss Field",
    country: "United States"
  },
  {
    city: "Slayton",
    iata: "NSL",
    name: "Slayton Municipal Airport",
    country: "United States"
  },
  {
    city: "Phoenix",
    iata: "DVT",
    name: "Phoenix Deer Valley Airport",
    country: "United States"
  },
  {
    city: "Kandy",
    iata: "KDW",
    name: "Victoria Reservoir Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Houston",
    iata: "DWH",
    name: "David Wayne Hooks Memorial Airport",
    country: "United States"
  },
  {
    city: "Danbury",
    iata: "DXR",
    name: "Danbury Municipal Airport",
    country: "United States"
  },
  {
    city: "Doylestown",
    iata: "DYL",
    name: "Doylestown Airport",
    country: "United States"
  },
  {
    city: "Abilene",
    iata: "DYS",
    name: "Dyess Air Force Base",
    country: "United States"
  },
  {
    city: "Kandy",
    iata: "KDZ",
    name: "Polgolla Reservoir Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Lake Baringo",
    iata: "LBN",
    name: "Lake Baringo (Kampi Ya Samaki) Airport",
    country: "Kenya"
  },
  {
    city: "Vipingo Estate",
    iata: "VPG",
    name: "Vipingo Estate Airport",
    country: "Kenya"
  },
  {
    city: "Kichwa Tembo",
    iata: "KTJ",
    name: "Kichwa Tembo Airport",
    country: "Kenya"
  },
  {
    city: "nan",
    iata: "OSJ",
    name: "Ol Seki Airstrip",
    country: "Kenya"
  },
  {
    city: "nan",
    iata: "OLG",
    name: "Olare Orok Airfield",
    country: "Kenya"
  },
  {
    city: "Mara",
    iata: "HKR",
    name: "Mara North Conservancy Airstrip",
    country: "Kenya"
  },
  {
    city: "Maasai Mara",
    iata: "ANA",
    name: "Angama Airport",
    country: "Kenya"
  },
  {
    city: "Musiara",
    iata: "MDR",
    name: "Musiara Airstrip",
    country: "Kenya"
  },
  {
    city: "Olkiombo",
    iata: "OLX",
    name: "Olkiombo Airport",
    country: "Kenya"
  },
  {
    city: "Kimwarer",
    iata: "KRV",
    name: "Kerio Valley Airport",
    country: "Kenya"
  },
  {
    city: "Kiunga",
    iata: "KIU",
    name: "Kiunga Airport",
    country: "Kenya"
  },
  {
    city: "Liboi",
    iata: "LBK",
    name: "Liboi Airport",
    country: "Kenya"
  },
  {
    city: "Kalokol",
    iata: "LKU",
    name: "Lake Rudolf Airport",
    country: "Kenya"
  },
  {
    city: "Monahans",
    iata: "MIF",
    name: "Roy Hurd Memorial Airport",
    country: "United States"
  },
  {
    city: "Crane",
    iata: "CCG",
    name: "Crane County Airport",
    country: "United States"
  },
  {
    city: "Espanola",
    iata: "ESO",
    name: "Ohkay Owingeh Airport",
    country: "United States"
  },
  {
    city: "Whiteriver",
    iata: "WTR",
    name: "Whiteriver Airport",
    country: "United States"
  },
  {
    city: "Alpine",
    iata: "ALE",
    name: "Alpine Casparis Municipal Airport",
    country: "United States"
  },
  {
    city: "Bagdad",
    iata: "BGT",
    name: "Bagdad Airport",
    country: "United States"
  },
  {
    city: "Wheatland",
    iata: "EAN",
    name: "Phifer Airfield",
    country: "United States"
  },
  {
    city: "Kearney",
    iata: "EAR",
    name: "Kearney Regional Airport",
    country: "United States"
  },
  {
    city: "Wenatchee",
    iata: "EAT",
    name: "Pangborn Memorial Airport",
    country: "United States"
  },
  {
    city: "Eau Claire",
    iata: "EAU",
    name: "Chippewa Valley Regional Airport",
    country: "United States"
  },
  {
    city: "Nanwalek",
    iata: "KEB",
    name: "Nanwalek Airport",
    country: "United States"
  },
  {
    city: "Webster City",
    iata: "EBS",
    name: "Webster City Municipal Airport",
    country: "United States"
  },
  {
    city: "Elizabeth City",
    iata: "ECG",
    name: "Elizabeth City Regional Airport & Coast Guard Air Station",
    country: "United States"
  },
  {
    city: "Panama City Beach",
    iata: "ECP",
    name: "Northwest Florida Beaches International Airport",
    country: "United States"
  },
  {
    city: "Newcastle",
    iata: "ECS",
    name: "Mondell Field",
    country: "United States"
  },
  {
    city: "Edenton",
    iata: "EDE",
    name: "Northeastern Regional Airport",
    country: "United States"
  },
  {
    city: "Enterprise",
    iata: "ETS",
    name: "Enterprise Municipal Airport",
    country: "United States"
  },
  {
    city: "Edwards",
    iata: "EDW",
    name: "Edwards Air Force Base",
    country: "United States"
  },
  {
    city: "Needles",
    iata: "EED",
    name: "Needles Airport",
    country: "United States"
  },
  {
    city: "Keene",
    iata: "EEN",
    name: "Dillant Hopkins Airport",
    country: "United States"
  },
  {
    city: "Houston",
    iata: "EFD",
    name: "Ellington Airport",
    country: "United States"
  },
  {
    city: "Newport",
    iata: "EFK",
    name: "Northeast Kingdom International Airport",
    country: "United States"
  },
  {
    city: "Jefferson",
    iata: "EFW",
    name: "Jefferson Municipal Airport",
    country: "United States"
  },
  {
    city: "Eagle",
    iata: "EGE",
    name: "Eagle County Regional Airport",
    country: "United States"
  },
  {
    city: "Crestview",
    iata: "EGI",
    name: "Duke Field",
    country: "United States"
  },
  {
    city: "Eagle River",
    iata: "EGV",
    name: "Eagle River Union Airport",
    country: "United States"
  },
  {
    city: "Ekwok",
    iata: "KEK",
    name: "Ekwok Airport",
    country: "United States"
  },
  {
    city: "Eureka",
    iata: "EKA",
    name: "Murray Field",
    country: "United States"
  },
  {
    city: "Elkhart",
    iata: "EKI",
    name: "Elkhart Municipal Airport",
    country: "United States"
  },
  {
    city: "Elkins",
    iata: "EKN",
    name: "Elkins-Randolph County Regional Airport",
    country: "United States"
  },
  {
    city: "Elko",
    iata: "EKO",
    name: "Elko Regional Airport",
    country: "United States"
  },
  {
    city: "Elizabethtown",
    iata: "EKX",
    name: "Addington Field / Elizabethtown Regional Airport",
    country: "United States"
  },
  {
    city: "Eagle Lake",
    iata: "ELA",
    name: "Eagle Lake Airport",
    country: "United States"
  },
  {
    city: "El Dorado",
    iata: "ELD",
    name: "South Arkansas Regional Airport at Goodwin Field",
    country: "United States"
  },
  {
    city: "Elk City",
    iata: "ELK",
    name: "Elk City Regional Business Airport",
    country: "United States"
  },
  {
    city: "Elmira/Corning",
    iata: "ELM",
    name: "Elmira Corning Regional Airport",
    country: "United States"
  },
  {
    city: "Ellensburg",
    iata: "ELN",
    name: "Bowers Field",
    country: "United States"
  },
  {
    city: "Ely",
    iata: "LYU",
    name: "Ely Municipal Airport",
    country: "United States"
  },
  {
    city: "El Paso",
    iata: "ELP",
    name: "El Paso International Airport",
    country: "United States"
  },
  {
    city: "Ely",
    iata: "ELY",
    name: "Ely Airport Yelland Field",
    country: "United States"
  },
  {
    city: "Wellsville",
    iata: "ELZ",
    name: "Wellsville Municipal Airport - Tarantine Field",
    country: "United States"
  },
  {
    city: "Kemmerer",
    iata: "EMM",
    name: "Kemmerer Municipal Airport",
    country: "United States"
  },
  {
    city: "Emporia",
    iata: "EMP",
    name: "Emporia Municipal Airport",
    country: "United States"
  },
  {
    city: "El Monte",
    iata: "EMT",
    name: "San Gabriel Valley Airport",
    country: "United States"
  },
  {
    city: "Enid",
    iata: "END",
    name: "Vance Air Force Base",
    country: "United States"
  },
  {
    city: "Centralia",
    iata: "ENL",
    name: "Centralia Municipal Airport",
    country: "United States"
  },
  {
    city: "Wendover",
    iata: "ENV",
    name: "Wendover Airport",
    country: "United States"
  },
  {
    city: "Kenosha",
    iata: "ENW",
    name: "Kenosha Regional Airport",
    country: "United States"
  },
  {
    city: "Keokuk",
    iata: "EOK",
    name: "Keokuk Municipal Airport",
    country: "United States"
  },
  {
    city: "Neosho",
    iata: "EOS",
    name: "Neosho Hugh Robinson Airport",
    country: "United States"
  },
  {
    city: "Ephrata",
    iata: "EPH",
    name: "Ephrata Municipal Airport",
    country: "United States"
  },
  {
    city: "El Dorado",
    iata: "EDK",
    name: "Captain Jack Thomas El Dorado Airport",
    country: "United States"
  },
  {
    city: "Erie",
    iata: "ERI",
    name: "Erie International Tom Ridge Field",
    country: "United States"
  },
  {
    city: "Errol",
    iata: "ERR",
    name: "Errol Airport",
    country: "United States"
  },
  {
    city: "Kerrville",
    iata: "ERV",
    name: "Kerrville / Kerr County Airport at Louis Schreiner Field",
    country: "United States"
  },
  {
    city: "Escanaba",
    iata: "ESC",
    name: "Delta County Airport",
    country: "United States"
  },
  {
    city: "Alexandria",
    iata: "ESF",
    name: "Esler Army Airfield / Esler Regional Airport",
    country: "United States"
  },
  {
    city: "Easton",
    iata: "ESN",
    name: "Easton Airport / Newnam Field",
    country: "United States"
  },
  {
    city: "Estherville",
    iata: "EST",
    name: "Estherville Municipal Airport",
    country: "United States"
  },
  {
    city: "Easton",
    iata: "ESW",
    name: "Easton State Airport",
    country: "United States"
  },
  {
    city: "West Bend",
    iata: "ETB",
    name: "West Bend Municipal Airport",
    country: "United States"
  },
  {
    city: "Eastland",
    iata: "ETN",
    name: "Eastland Municipal Airport",
    country: "United States"
  },
  {
    city: "Eufaula",
    iata: "EUF",
    name: "Weedon Field",
    country: "United States"
  },
  {
    city: "Eugene",
    iata: "EUG",
    name: "Eugene Airport",
    country: "United States"
  },
  {
    city: "Eveleth",
    iata: "EVM",
    name: "Eveleth–Virginia Municipal Airport",
    country: "United States"
  },
  {
    city: "Evansville",
    iata: "EVV",
    name: "Evansville Regional Airport",
    country: "United States"
  },
  {
    city: "Evanston",
    iata: "EVW",
    name: "Evanston-Uinta County Airport-Burns Field",
    country: "United States"
  },
  {
    city: "New Bedford",
    iata: "EWB",
    name: "New Bedford Regional Airport",
    country: "United States"
  },
  {
    city: "Newton",
    iata: "EWK",
    name: "Newton City-County Airport",
    country: "United States"
  },
  {
    city: "New Bern",
    iata: "EWN",
    name: "Coastal Carolina Regional Airport",
    country: "United States"
  },
  {
    city: "Newark",
    iata: "EWR",
    name: "Newark Liberty International Airport",
    country: "United States"
  },
  {
    city: "Key West",
    iata: "EYW",
    name: "Key West International Airport",
    country: "United States"
  },
  {
    city: "Colombo",
    iata: "KEZ",
    name: "Kelani-Peliyagoda Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Vernon",
    iata: "WIB",
    name: "Wilbarger County Airport",
    country: "United States"
  },
  {
    city: "Murrieta",
    iata: "RBK",
    name: "French Valley Airport",
    country: "United States"
  },
  {
    city: "Newport News (Fort Eustis)",
    iata: "FAF",
    name: "Felker Army Air Field",
    country: "United States"
  },
  {
    city: "Farmington",
    iata: "FAM",
    name: "Farmington Regional Airport",
    country: "United States"
  },
  {
    city: "Fargo",
    iata: "FAR",
    name: "Hector International Airport",
    country: "United States"
  },
  {
    city: "Fresno",
    iata: "FAT",
    name: "Fresno Yosemite International Airport",
    country: "United States"
  },
  {
    city: "Fayetteville",
    iata: "FAY",
    name: "Fayetteville Regional Airport - Grannis Field",
    country: "United States"
  },
  {
    city: "Fort Bragg",
    iata: "FBG",
    name: "Simmons Army Air Field",
    country: "United States"
  },
  {
    city: "Faribault",
    iata: "FBL",
    name: "Faribault Municipal Airport-Liz Wall Strohfus Field",
    country: "United States"
  },
  {
    city: "Fort Bridger",
    iata: "FBR",
    name: "Fort Bridger Airport",
    country: "United States"
  },
  {
    city: "Fairbury",
    iata: "FBY",
    name: "Fairbury Municipal Airport",
    country: "United States"
  },
  {
    city: "Fresno",
    iata: "FCH",
    name: "Fresno Chandler Executive Airport",
    country: "United States"
  },
  {
    city: "Minneapolis",
    iata: "FCM",
    name: "Flying Cloud Airport",
    country: "United States"
  },
  {
    city: "Fort Carson",
    iata: "FCS",
    name: "Butts AAF (Fort Carson) Air Field",
    country: "United States"
  },
  {
    city: "Forrest City",
    iata: "FCY",
    name: "Forrest City Municipal Airport",
    country: "United States"
  },
  {
    city: "Frederick",
    iata: "FDK",
    name: "Frederick Municipal Airport",
    country: "United States"
  },
  {
    city: "Frederick",
    iata: "FDR",
    name: "Frederick Regional Airport",
    country: "United States"
  },
  {
    city: "Findlay",
    iata: "FDY",
    name: "Findlay Airport",
    country: "United States"
  },
  {
    city: "Freeport",
    iata: "FEP",
    name: "Albertus Airport",
    country: "United States"
  },
  {
    city: "Fremont",
    iata: "FET",
    name: "Fremont Municipal Airport",
    country: "United States"
  },
  {
    city: "Kill Devil Hills",
    iata: "FFA",
    name: "First Flight Airport",
    country: "United States"
  },
  {
    city: "Fairfield",
    iata: "FFL",
    name: "Fairfield Municipal Airport",
    country: "United States"
  },
  {
    city: "Fergus Falls",
    iata: "FFM",
    name: "Fergus Falls Municipal Airport - Einar Mickelson Field",
    country: "United States"
  },
  {
    city: "Dayton",
    iata: "FFO",
    name: "Wright-Patterson Air Force Base",
    country: "United States"
  },
  {
    city: "Frankfort",
    iata: "FFT",
    name: "Capital City Airport",
    country: "United States"
  },
  {
    city: "Mesa",
    iata: "MSC",
    name: "Falcon Field",
    country: "United States"
  },
  {
    city: "Friday Harbor",
    iata: "FRD",
    name: "Friday Harbor Airport",
    country: "United States"
  },
  {
    city: "Fort Huachuca / Sierra Vista",
    iata: "FHU",
    name: "Sierra Vista Municipal Airport / Libby Army Air Field",
    country: "United States"
  },
  {
    city: "Franklin",
    iata: "FKL",
    name: "Venango Regional Airport",
    country: "United States"
  },
  {
    city: "Franklin",
    iata: "FKN",
    name: "Franklin Regional Airport",
    country: "United States"
  },
  {
    city: "Fond du Lac",
    iata: "FLD",
    name: "Fond du Lac County Airport",
    country: "United States"
  },
  {
    city: "Flagstaff",
    iata: "FLG",
    name: "Flagstaff Pulliam Airport",
    country: "United States"
  },
  {
    city: "Fort Lauderdale",
    iata: "FLL",
    name: "Fort Lauderdale Hollywood International Airport",
    country: "United States"
  },
  {
    city: "Florence",
    iata: "FLO",
    name: "Florence Regional Airport",
    country: "United States"
  },
  {
    city: "Flippin",
    iata: "FLP",
    name: "Marion County Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Leavenworth",
    iata: "FLV",
    name: "Sherman Army Air Field",
    country: "United States"
  },
  {
    city: "Fallon",
    iata: "FLX",
    name: "Fallon Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Meade(Odenton)",
    iata: "FME",
    name: "Fort Meade Executive Airport",
    country: "United States"
  },
  {
    city: "Falmouth",
    iata: "FMH",
    name: "Cape Cod Coast Guard Air Station",
    country: "United States"
  },
  {
    city: "Farmington",
    iata: "FMN",
    name: "Four Corners Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Myers",
    iata: "FMY",
    name: "Page Field",
    country: "United States"
  },
  {
    city: "Loveland",
    iata: "FNL",
    name: "Northern Colorado Regional Airport",
    country: "United States"
  },
  {
    city: "Flint",
    iata: "FNT",
    name: "Bishop International Airport",
    country: "United States"
  },
  {
    city: "Fort Dodge",
    iata: "FOD",
    name: "Fort Dodge Regional Airport",
    country: "United States"
  },
  {
    city: "Topeka",
    iata: "FOE",
    name: "Topeka Regional Airport",
    country: "United States"
  },
  {
    city: "Westhampton Beach",
    iata: "FOK",
    name: "Francis S Gabreski Airport",
    country: "United States"
  },
  {
    city: "Fillmore",
    iata: "FIL",
    name: "Fillmore Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Pierce",
    iata: "FPR",
    name: "Treasure Coast International Airport",
    country: "United States"
  },
  {
    city: "East Farmingdale",
    iata: "FRG",
    name: "Republic Airport",
    country: "United States"
  },
  {
    city: "French Lick",
    iata: "FRH",
    name: "French Lick Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Riley (Junction City)",
    iata: "FRI",
    name: "Marshall Army Air Field",
    country: "United States"
  },
  {
    city: "Fairmont",
    iata: "FRM",
    name: "Fairmont Municipal Airport",
    country: "United States"
  },
  {
    city: "Front Royal",
    iata: "FRR",
    name: "Front Royal Warren County Airport",
    country: "United States"
  },
  {
    city: "Sioux Falls",
    iata: "FSD",
    name: "Sioux Falls Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Sill",
    iata: "FSI",
    name: "Henry Post Army Air Field",
    country: "United States"
  },
  {
    city: "Fort Scott",
    iata: "FSK",
    name: "Fort Scott Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Smith",
    iata: "FSM",
    name: "Fort Smith Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Stockton",
    iata: "FST",
    name: "Fort Stockton Pecos County Airport",
    country: "United States"
  },
  {
    city: "Fort Sumner",
    iata: "FSU",
    name: "Fort Sumner Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Madison",
    iata: "FMS",
    name: "Fort Madison Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Knox",
    iata: "FTK",
    name: "Godman Army Air Field",
    country: "United States"
  },
  {
    city: "Fort Worth",
    iata: "FTW",
    name: "Fort Worth Meacham International Airport",
    country: "United States"
  },
  {
    city: "Atlanta",
    iata: "FTY",
    name: "Fulton County Airport Brown Field",
    country: "United States"
  },
  {
    city: "Fullerton",
    iata: "FUL",
    name: "Fullerton Municipal Airport",
    country: "United States"
  },
  {
    city: "Frenchville",
    iata: "WFK",
    name: "Northern Aroostook Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Wayne",
    iata: "FWA",
    name: "Fort Wayne International Airport",
    country: "United States"
  },
  {
    city: "Fort Lauderdale",
    iata: "FXE",
    name: "Fort Lauderdale Executive Airport",
    country: "United States"
  },
  {
    city: "Forest City",
    iata: "FXY",
    name: "Forest City Municipal Airport",
    country: "United States"
  },
  {
    city: "Fayetteville",
    iata: "FYM",
    name: "Fayetteville Municipal Airport",
    country: "United States"
  },
  {
    city: "Fayetteville",
    iata: "FYV",
    name: "Drake Field",
    country: "United States"
  },
  {
    city: "Gabbs",
    iata: "GAB",
    name: "Gabbs Airport",
    country: "United States"
  },
  {
    city: "Gadsden",
    iata: "GAD",
    name: "Northeast Alabama Regional Airport",
    country: "United States"
  },
  {
    city: "Gage",
    iata: "GAG",
    name: "Gage Heibeck Airport",
    country: "United States"
  },
  {
    city: "Gaithersburg",
    iata: "GAI",
    name: "Montgomery County Airpark",
    country: "United States"
  },
  {
    city: "Great Bend",
    iata: "GBD",
    name: "Great Bend Municipal Airport",
    country: "United States"
  },
  {
    city: "Galesburg",
    iata: "GBG",
    name: "Galesburg Municipal Airport",
    country: "United States"
  },
  {
    city: "Great Barrington",
    iata: "GBR",
    name: "Walter J. Koladza Airport",
    country: "United States"
  },
  {
    city: "Gillette",
    iata: "GCC",
    name: "Northeast Wyoming Regional Airport",
    country: "United States"
  },
  {
    city: "John Day",
    iata: "JDA",
    name: "Grant County Regional Airport / Ogilvie Field",
    country: "United States"
  },
  {
    city: "Garden City",
    iata: "GCK",
    name: "Garden City Regional Airport",
    country: "United States"
  },
  {
    city: "Grand Canyon - Tusayan",
    iata: "GCN",
    name: "Grand Canyon National Park Airport",
    country: "United States"
  },
  {
    city: "Greeneville",
    iata: "GCY",
    name: "Greeneville Municipal Airport",
    country: "United States"
  },
  {
    city: "Gardner",
    iata: "GDM",
    name: "Gardner Municipal Airport",
    country: "United States"
  },
  {
    city: "Glendive",
    iata: "GDV",
    name: "Dawson Community Airport",
    country: "United States"
  },
  {
    city: "Gladwin",
    iata: "GDW",
    name: "Gladwin Zettel Memorial Airport",
    country: "United States"
  },
  {
    city: "Georgetown",
    iata: "GED",
    name: "Delaware Coastal Airport",
    country: "United States"
  },
  {
    city: "Spokane",
    iata: "GEG",
    name: "Spokane International Airport",
    country: "United States"
  },
  {
    city: "Greybull",
    iata: "GEY",
    name: "South Big Horn County Airport",
    country: "United States"
  },
  {
    city: "Great Falls",
    iata: "GFA",
    name: "Malmstrom Air Force Base",
    country: "United States"
  },
  {
    city: "Greenfield",
    iata: "GFD",
    name: "Pope Field",
    country: "United States"
  },
  {
    city: "Grand Forks",
    iata: "GFK",
    name: "Grand Forks International Airport",
    country: "United States"
  },
  {
    city: "Glens Falls",
    iata: "GFL",
    name: "Floyd Bennett Memorial Airport",
    country: "United States"
  },
  {
    city: "Georgetown",
    iata: "GGE",
    name: "Georgetown County Airport",
    country: "United States"
  },
  {
    city: "Longview",
    iata: "GGG",
    name: "East Texas Regional Airport",
    country: "United States"
  },
  {
    city: "Glasgow",
    iata: "GGW",
    name: "Glasgow Valley County Airport Wokal Field",
    country: "United States"
  },
  {
    city: "Centerville",
    iata: "GHM",
    name: "Centerville Municipal Airport",
    country: "United States"
  },
  {
    city: "Grangeville",
    iata: "IDH",
    name: "Idaho County Airport",
    country: "United States"
  },
  {
    city: "Winter Haven",
    iata: "GIF",
    name: "Winter Haven Regional Airport - Gilbert Field",
    country: "United States"
  },
  {
    city: "Grand Junction",
    iata: "GJT",
    name: "Grand Junction Regional Airport",
    country: "United States"
  },
  {
    city: "Meadville",
    iata: "MEJ",
    name: "Port Meadville Airport",
    country: "United States"
  },
  {
    city: "Sevierville",
    iata: "GKT",
    name: "Gatlinburg-Pigeon Forge Airport",
    country: "United States"
  },
  {
    city: "Goodland",
    iata: "GLD",
    name: "Goodland Municipal Airport",
    country: "United States"
  },
  {
    city: "Gainesville",
    iata: "GLE",
    name: "Gainesville Municipal Airport",
    country: "United States"
  },
  {
    city: "Greenville",
    iata: "GLH",
    name: "Mid Delta Regional Airport",
    country: "United States"
  },
  {
    city: "Gaylord",
    iata: "GLR",
    name: "Gaylord Regional Airport",
    country: "United States"
  },
  {
    city: "Galveston",
    iata: "GLS",
    name: "Scholes International At Galveston Airport",
    country: "United States"
  },
  {
    city: "Glasgow",
    iata: "GLW",
    name: "Glasgow Municipal Airport",
    country: "United States"
  },
  {
    city: "Greenville",
    iata: "GMU",
    name: "Greenville Downtown Airport",
    country: "United States"
  },
  {
    city: "Gooding",
    iata: "GNG",
    name: "Gooding Municipal Airport",
    country: "United States"
  },
  {
    city: "Grants",
    iata: "GNT",
    name: "Grants-Milan Municipal Airport",
    country: "United States"
  },
  {
    city: "Gainesville",
    iata: "GNV",
    name: "Gainesville Regional Airport",
    country: "United States"
  },
  {
    city: "Guthrie",
    iata: "GOK",
    name: "Guthrie-Edmond Regional Airport",
    country: "United States"
  },
  {
    city: "Groton",
    iata: "GON",
    name: "Groton New London Airport",
    country: "United States"
  },
  {
    city: "Kalispell",
    iata: "FCA",
    name: "Glacier Park International Airport",
    country: "United States"
  },
  {
    city: "Gulfport",
    iata: "GPT",
    name: "Gulfport Biloxi International Airport",
    country: "United States"
  },
  {
    city: "Grand Rapids",
    iata: "GPZ",
    name: "Grand Rapids Itasca Co-Gordon Newstrom field",
    country: "United States"
  },
  {
    city: "Galion",
    iata: "GQQ",
    name: "Galion Municipal Airport",
    country: "United States"
  },
  {
    city: "Green Bay",
    iata: "GRB",
    name: "Austin Straubel International Airport",
    country: "United States"
  },
  {
    city: "Greenwood",
    iata: "GRD",
    name: "Greenwood County Airport",
    country: "United States"
  },
  {
    city: "Greenville",
    iata: "GRE",
    name: "Greenville Airport",
    country: "United States"
  },
  {
    city: "Fort Lewis/Tacoma",
    iata: "GRF",
    name: "Gray Army Air Field",
    country: "United States"
  },
  {
    city: "Grand Island",
    iata: "GRI",
    name: "Central Nebraska Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Cavazos",
    iata: "GRK",
    name: "Killeen Regional Airport / Robert Gray Army Airfield",
    country: "United States"
  },
  {
    city: "Gordon",
    iata: "GRN",
    name: "Gordon Municipal Airport",
    country: "United States"
  },
  {
    city: "Grand Rapids",
    iata: "GRR",
    name: "Gerald R. Ford International Airport",
    country: "United States"
  },
  {
    city: "Goldsboro",
    iata: "GSB",
    name: "Seymour Johnson Air Force Base",
    country: "United States"
  },
  {
    city: "Goshen",
    iata: "GSH",
    name: "Goshen Municipal Airport",
    country: "United States"
  },
  {
    city: "Greensboro",
    iata: "GSO",
    name: "Piedmont Triad International Airport",
    country: "United States"
  },
  {
    city: "Greenville/Greer/Spartanburg",
    iata: "GSP",
    name: "Greenville-Spartanburg International Airport",
    country: "United States"
  },
  {
    city: "Great Falls",
    iata: "GTF",
    name: "Great Falls International Airport",
    country: "United States"
  },
  {
    city: "Grantsburg",
    iata: "GTG",
    name: "Grantsburg Municipal Airport",
    country: "United States"
  },
  {
    city: "Columbus/W Point/Starkville",
    iata: "GTR",
    name: "Golden Triangle Regional Airport",
    country: "United States"
  },
  {
    city: "Gunnison",
    iata: "GUC",
    name: "Gunnison Crested Butte Regional Airport",
    country: "United States"
  },
  {
    city: "Gallup",
    iata: "GUP",
    name: "Gallup Municipal Airport",
    country: "United States"
  },
  {
    city: "Peru",
    iata: "GUS",
    name: "Grissom Air Reserve Base",
    country: "United States"
  },
  {
    city: "Guymon",
    iata: "GUY",
    name: "Guymon Municipal Airport",
    country: "United States"
  },
  {
    city: "Gordonsville",
    iata: "GVE",
    name: "Gordonsville Municipal Airport",
    country: "United States"
  },
  {
    city: "Gainesville",
    iata: "GVL",
    name: "Lee Gilmer Memorial Airport",
    country: "United States"
  },
  {
    city: "Greenville",
    iata: "GVT",
    name: "Majors Airport",
    country: "United States"
  },
  {
    city: "Greenwood",
    iata: "GWO",
    name: "Greenwood–Leflore Airport",
    country: "United States"
  },
  {
    city: "Glenwood Springs",
    iata: "GWS",
    name: "Glenwood Springs Municipal Airport",
    country: "United States"
  },
  {
    city: "Grayling",
    iata: "KGX",
    name: "Grayling Airport",
    country: "United States"
  },
  {
    city: "Greeley",
    iata: "GXY",
    name: "Greeley–Weld County Airport",
    country: "United States"
  },
  {
    city: "Greenville",
    iata: "GDC",
    name: "Donaldson Field Airport",
    country: "United States"
  },
  {
    city: "Denison",
    iata: "PNX",
    name: "North Texas Regional Airport Perrin Field",
    country: "United States"
  },
  {
    city: "Goodyear",
    iata: "GYR",
    name: "Phoenix Goodyear Airport",
    country: "United States"
  },
  {
    city: "Gary",
    iata: "GYY",
    name: "Gary/Chicago International Airport",
    country: "United States"
  },
  {
    city: "Glacier Creek",
    iata: "KGZ",
    name: "Glacier Creek Airport",
    country: "United States"
  },
  {
    city: "Ta Noun",
    iata: "DSY",
    name: "Dara Sakor International Airport",
    country: "KH"
  },
  {
    city: "Phnom Penh (Boeng Khyang)",
    iata: "KTI",
    name: "Techo International Airport",
    country: "KH"
  },
  {
    city: "Hamilton",
    iata: "HAB",
    name: "Marion County Rankin Fite Airport",
    country: "United States"
  },
  {
    city: "Half Moon Bay",
    iata: "HAF",
    name: "Half Moon Bay Airport",
    country: "United States"
  },
  {
    city: "Three Rivers",
    iata: "HAI",
    name: "Three Rivers Municipal Dr Haines Airport",
    country: "United States"
  },
  {
    city: "Hamilton",
    iata: "HAO",
    name: "Butler Co Regional Airport - Hogan Field",
    country: "United States"
  },
  {
    city: "Hattiesburg",
    iata: "HBG",
    name: "Hattiesburg Bobby L Chain Municipal Airport",
    country: "United States"
  },
  {
    city: "Hobart",
    iata: "HBR",
    name: "Hobart Regional Airport",
    country: "United States"
  },
  {
    city: "Holdrege",
    iata: "HDE",
    name: "Brewster Field",
    country: "United States"
  },
  {
    city: "Hayden",
    iata: "HDN",
    name: "Yampa Valley Airport",
    country: "United States"
  },
  {
    city: "West Helena",
    iata: "HEE",
    name: "Thompson-Robbins Airport",
    country: "United States"
  },
  {
    city: "Manassas",
    iata: "MNZ",
    name: "Manassas Regional Airport/Harry P. Davis Field",
    country: "United States"
  },
  {
    city: "Natchez",
    iata: "HEZ",
    name: "Natchez–Adams County Airport / Hardy-Anders Field",
    country: "United States"
  },
  {
    city: "Hartford",
    iata: "HFD",
    name: "Hartford Brainard Airport",
    country: "United States"
  },
  {
    city: "Hoffman",
    iata: "HFF",
    name: "Mackall Army Air Field",
    country: "United States"
  },
  {
    city: "Hagerstown",
    iata: "HGR",
    name: "Hagerstown Regional Richard A Henson Field",
    country: "United States"
  },
  {
    city: "Hawthorne",
    iata: "HHR",
    name: "Jack Northrop Field Hawthorne Municipal Airport",
    country: "United States"
  },
  {
    city: "Hugo",
    iata: "HUJ",
    name: "Stan Stamper Municipal Airport",
    country: "United States"
  },
  {
    city: "Hibbing",
    iata: "HIB",
    name: "Range Regional Airport",
    country: "United States"
  },
  {
    city: "Whitefield",
    iata: "HIE",
    name: "Mount Washington Regional Airport",
    country: "United States"
  },
  {
    city: "Ogden",
    iata: "HIF",
    name: "Hill Air Force Base",
    country: "United States"
  },
  {
    city: "Lake Havasu City",
    iata: "HII",
    name: "Lake Havasu City Airport",
    country: "United States"
  },
  {
    city: "Portland",
    iata: "HIO",
    name: "Portland Hillsboro Airport",
    country: "United States"
  },
  {
    city: "Blytheville",
    iata: "HKA",
    name: "Blytheville Municipal Airport",
    country: "United States"
  },
  {
    city: "Jackson",
    iata: "HKS",
    name: "Hawkins Field",
    country: "United States"
  },
  {
    city: "Hickory",
    iata: "HKY",
    name: "Hickory Regional Airport",
    country: "United States"
  },
  {
    city: "Batesville",
    iata: "HLB",
    name: "Batesville Airport",
    country: "United States"
  },
  {
    city: "Hill City",
    iata: "HLC",
    name: "Hill City Municipal Airport",
    country: "United States"
  },
  {
    city: "Wheeling",
    iata: "HLG",
    name: "Wheeling Ohio County Airport",
    country: "United States"
  },
  {
    city: "Helena",
    iata: "HLN",
    name: "Helena Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Cavazos (Killeen)",
    iata: "HLR",
    name: "Hood Army Air Field",
    country: "United States"
  },
  {
    city: "Alamogordo",
    iata: "HMN",
    name: "Holloman Air Force Base",
    country: "United States"
  },
  {
    city: "Hemet",
    iata: "HMT",
    name: "Hemet Ryan Airport",
    country: "United States"
  },
  {
    city: "Huntingburg",
    iata: "HNB",
    name: "Huntingburg Airport",
    country: "United States"
  },
  {
    city: "Las Vegas",
    iata: "HSH",
    name: "Henderson Executive Airport",
    country: "United States"
  },
  {
    city: "Hobbs",
    iata: "HOB",
    name: "Lea County Regional Airport",
    country: "United States"
  },
  {
    city: "Huron",
    iata: "HON",
    name: "Huron Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Campbell",
    iata: "HOP",
    name: "Campbell Army Airfield (Fort Campbell)",
    country: "United States"
  },
  {
    city: "Hot Springs",
    iata: "HOT",
    name: "Memorial Field Airport",
    country: "United States"
  },
  {
    city: "Houston",
    iata: "HOU",
    name: "William P. Hobby Airport",
    country: "United States"
  },
  {
    city: "White Plains",
    iata: "HPN",
    name: "Westchester County Airport",
    country: "United States"
  },
  {
    city: "Hampton",
    iata: "HPT",
    name: "Hampton Municipal Airport",
    country: "United States"
  },
  {
    city: "Baytown",
    iata: "HPY",
    name: "Baytown Airport",
    country: "United States"
  },
  {
    city: "Hoquiam",
    iata: "HQM",
    name: "Bowerman Airport",
    country: "United States"
  },
  {
    city: "Hermiston",
    iata: "HES",
    name: "Hermiston Municipal Airport",
    country: "United States"
  },
  {
    city: "Harlingen",
    iata: "HRL",
    name: "Valley International Airport",
    country: "United States"
  },
  {
    city: "Harrison",
    iata: "HRO",
    name: "Boone County Airport",
    country: "United States"
  },
  {
    city: "Harrisburg",
    iata: "HSB",
    name: "Harrisburg-Raleigh Airport",
    country: "United States"
  },
  {
    city: "Hatteras",
    iata: "HNC",
    name: "Billy Mitchell Airport",
    country: "United States"
  },
  {
    city: "Thermopolis",
    iata: "THP",
    name: "Hot Springs County Airport",
    country: "United States"
  },
  {
    city: "Hastings",
    iata: "HSI",
    name: "Hastings Municipal Airport",
    country: "United States"
  },
  {
    city: "Hot Springs",
    iata: "HSP",
    name: "Ingalls Field",
    country: "United States"
  },
  {
    city: "Homestead",
    iata: "HST",
    name: "Homestead Air Reserve Base",
    country: "United States"
  },
  {
    city: "Huntsville",
    iata: "HSV",
    name: "Huntsville International Airport",
    country: "United States"
  },
  {
    city: "Hawthorne",
    iata: "HTH",
    name: "Hawthorne Industrial Airport",
    country: "United States"
  },
  {
    city: "Houghton Lake",
    iata: "HTL",
    name: "Roscommon County - Blodgett Memorial Airport",
    country: "United States"
  },
  {
    city: "East Hampton",
    iata: "HTO",
    name: "Town of East Hampton Airport",
    country: "United States"
  },
  {
    city: "Huntington",
    iata: "HTS",
    name: "Tri-State Airport / Milton J. Ferguson Field",
    country: "United States"
  },
  {
    city: "South Point",
    iata: "HTW",
    name: "Lawrence County Airpark",
    country: "United States"
  },
  {
    city: "Redstone Arsnl Huntsville",
    iata: "HUA",
    name: "Redstone Army Air Field",
    country: "United States"
  },
  {
    city: "Terre Haute",
    iata: "HUF",
    name: "Terre Haute Regional Airport, Hulman Field",
    country: "United States"
  },
  {
    city: "Houlton",
    iata: "HUL",
    name: "Houlton International Airport",
    country: "United States"
  },
  {
    city: "Houma",
    iata: "HUM",
    name: "Houma Terrebonne Airport",
    country: "United States"
  },
  {
    city: "Hutchinson",
    iata: "HUT",
    name: "Hutchinson Municipal Airport",
    country: "United States"
  },
  {
    city: "Hanksville",
    iata: "HVE",
    name: "Hanksville Airport",
    country: "United States"
  },
  {
    city: "New Haven",
    iata: "HVN",
    name: "Tweed New Haven Airport",
    country: "United States"
  },
  {
    city: "Havre",
    iata: "HVR",
    name: "Havre City County Airport",
    country: "United States"
  },
  {
    city: "Hartsville",
    iata: "HVS",
    name: "Hartsville Regional Airport",
    country: "United States"
  },
  {
    city: "Hayward",
    iata: "HWD",
    name: "Hayward Executive Airport",
    country: "United States"
  },
  {
    city: "Hollywood",
    iata: "HWO",
    name: "North Perry Airport",
    country: "United States"
  },
  {
    city: "Shirley",
    iata: "WSH",
    name: "Brookhaven Calabro Airport",
    country: "United States"
  },
  {
    city: "Hilton Head Island",
    iata: "HHH",
    name: "Hilton Head Airport",
    country: "United States"
  },
  {
    city: "Hyannis",
    iata: "HYA",
    name: "Cape Cod Gateway Airport",
    country: "United States"
  },
  {
    city: "Hayward",
    iata: "HYR",
    name: "Sawyer County Airport",
    country: "United States"
  },
  {
    city: "Hays",
    iata: "HYS",
    name: "Hays Regional Airport",
    country: "United States"
  },
  {
    city: "Hazleton",
    iata: "HZL",
    name: "Hazleton Municipal Airport",
    country: "United States"
  },
  {
    city: "Ashtabula",
    iata: "JFN",
    name: "Northeast Ohio Regional Airport",
    country: "United States"
  },
  {
    city: "Wichita",
    iata: "IAB",
    name: "McConnell Air Force Base",
    country: "United States"
  },
  {
    city: "Dulles",
    iata: "IAD",
    name: "Washington Dulles International Airport",
    country: "United States"
  },
  {
    city: "Niagara Falls",
    iata: "IAG",
    name: "Niagara Falls International Airport",
    country: "United States"
  },
  {
    city: "Houston",
    iata: "IAH",
    name: "George Bush Intercontinental Airport",
    country: "United States"
  },
  {
    city: "Ivanof Bay",
    iata: "KIB",
    name: "Ivanof Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Clarinda",
    iata: "ICL",
    name: "Schenck Field",
    country: "United States"
  },
  {
    city: "Wichita",
    iata: "ICT",
    name: "Wichita Dwight D. Eisenhower National Airport",
    country: "United States"
  },
  {
    city: "Idaho Falls",
    iata: "IDA",
    name: "Idaho Falls Regional Airport",
    country: "United States"
  },
  {
    city: "Ida Grove",
    iata: "IDG",
    name: "Ida Grove Municipal Airport",
    country: "United States"
  },
  {
    city: "Indiana",
    iata: "IDI",
    name: "Indiana County–Jimmy Stewart Airport",
    country: "United States"
  },
  {
    city: "Independence",
    iata: "IDP",
    name: "Independence Municipal Airport",
    country: "United States"
  },
  {
    city: "Pine Ridge",
    iata: "XPR",
    name: "Pine Ridge Airport",
    country: "United States"
  },
  {
    city: "Iowa Falls",
    iata: "IFA",
    name: "Iowa Falls Municipal Airport",
    country: "United States"
  },
  {
    city: "Bullhead City",
    iata: "IFP",
    name: "Laughlin Bullhead International Airport",
    country: "United States"
  },
  {
    city: "Kingman",
    iata: "IGM",
    name: "Kingman Airport",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "IJX",
    name: "Jacksonville Municipal Airport",
    country: "United States"
  },
  {
    city: "Kankakee",
    iata: "IKK",
    name: "Greater Kankakee Airport",
    country: "United States"
  },
  {
    city: "Kilwa",
    iata: "KIL",
    name: "Kilwa Airport",
    country: "CD"
  },
  {
    city: "Killeen",
    iata: "ILE",
    name: "Skylark Field",
    country: "United States"
  },
  {
    city: "Wilmington",
    iata: "ILG",
    name: "Wilmington Airport",
    country: "United States"
  },
  {
    city: "Wilmington",
    iata: "ILM",
    name: "Wilmington International Airport",
    country: "United States"
  },
  {
    city: "Wilmington",
    iata: "ILN",
    name: "Wilmington Airpark",
    country: "United States"
  },
  {
    city: "Imperial",
    iata: "IML",
    name: "Imperial Municipal Airport",
    country: "United States"
  },
  {
    city: "Immokalee",
    iata: "IMM",
    name: "Immokalee Regional Airport",
    country: "United States"
  },
  {
    city: "Madison",
    iata: "MDN",
    name: "Madison Municipal Airport",
    country: "United States"
  },
  {
    city: "Kingsford",
    iata: "IMT",
    name: "Ford Airport",
    country: "United States"
  },
  {
    city: "Indianapolis",
    iata: "IND",
    name: "Indianapolis International Airport",
    country: "United States"
  },
  {
    city: "Wink",
    iata: "INK",
    name: "Winkler County Airport",
    country: "United States"
  },
  {
    city: "International Falls",
    iata: "INL",
    name: "Falls International Airport",
    country: "United States"
  },
  {
    city: "Indian Springs",
    iata: "INS",
    name: "Creech Air Force Base",
    country: "United States"
  },
  {
    city: "Winston Salem",
    iata: "INT",
    name: "Smith Reynolds Airport",
    country: "United States"
  },
  {
    city: "Winslow",
    iata: "INW",
    name: "Winslow Lindbergh Regional Airport",
    country: "United States"
  },
  {
    city: "Iowa City",
    iata: "IOW",
    name: "Iowa City Municipal Airport",
    country: "United States"
  },
  {
    city: "Imperial",
    iata: "IPL",
    name: "Imperial County Airport",
    country: "United States"
  },
  {
    city: "Williamsport",
    iata: "IPT",
    name: "Williamsport Regional Airport",
    country: "United States"
  },
  {
    city: "Kirksville",
    iata: "IRK",
    name: "Kirksville Regional Airport",
    country: "United States"
  },
  {
    city: "Sturgis",
    iata: "IRS",
    name: "Kirsch Municipal Airport",
    country: "United States"
  },
  {
    city: "Orlando",
    iata: "ISM",
    name: "Kissimmee Gateway Airport",
    country: "United States"
  },
  {
    city: "Kinston",
    iata: "ISO",
    name: "Kinston Regional Jetport At Stallings Field",
    country: "United States"
  },
  {
    city: "Islip",
    iata: "ISP",
    name: "Long Island MacArthur Airport",
    country: "United States"
  },
  {
    city: "Manistique",
    iata: "ISQ",
    name: "Schoolcraft County Airport",
    country: "United States"
  },
  {
    city: "Wisconsin Rapids",
    iata: "ISW",
    name: "Alexander Field South Wood County Airport",
    country: "United States"
  },
  {
    city: "Ithaca",
    iata: "ITH",
    name: "Ithaca Tompkins Regional Airport",
    country: "United States"
  },
  {
    city: "Mesa",
    iata: "AZA",
    name: "Mesa Gateway Airport",
    country: "United States"
  },
  {
    city: "Ironwood",
    iata: "IWD",
    name: "Gogebic Iron County Airport",
    country: "United States"
  },
  {
    city: "Wiscasset",
    iata: "ISS",
    name: "Wiscasset Airport",
    country: "United States"
  },
  {
    city: "Houston",
    iata: "IWS",
    name: "West Houston Airport",
    country: "United States"
  },
  {
    city: "New Century",
    iata: "JCI",
    name: "New Century AirCenter Airport",
    country: "United States"
  },
  {
    city: "Inyokern",
    iata: "IYK",
    name: "Inyokern Airport",
    country: "United States"
  },
  {
    city: "Santa Ynez",
    iata: "SQA",
    name: "Santa Ynez Airport",
    country: "United States"
  },
  {
    city: "Fryeburg",
    iata: "FRY",
    name: "Eastern Slopes Regional Airport",
    country: "United States"
  },
  {
    city: "Jackson",
    iata: "JAC",
    name: "Jackson Hole Airport",
    country: "United States"
  },
  {
    city: "Jackson",
    iata: "JAN",
    name: "Jackson-Medgar Wiley Evers International Airport",
    country: "United States"
  },
  {
    city: "Jasper",
    iata: "JAS",
    name: "Jasper County Airport Bell Field",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "JAX",
    name: "Jacksonville International Airport",
    country: "United States"
  },
  {
    city: "Jonesboro",
    iata: "JBR",
    name: "Jonesboro Municipal Airport",
    country: "United States"
  },
  {
    city: "Junction",
    iata: "JCT",
    name: "Kimble County Airport",
    country: "United States"
  },
  {
    city: "Jordan",
    iata: "JDN",
    name: "Jordan Airport",
    country: "United States"
  },
  {
    city: "Jefferson City",
    iata: "JEF",
    name: "Jefferson City Memorial Airport",
    country: "United States"
  },
  {
    city: "New York",
    iata: "JFK",
    name: "John F. Kennedy International Airport",
    country: "United States"
  },
  {
    city: "Jamestown",
    iata: "JHW",
    name: "Chautauqua County-Jamestown Airport",
    country: "United States"
  },
  {
    city: "Gulf Shores",
    iata: "GUF",
    name: "Jack Edwards National Airport",
    country: "United States"
  },
  {
    city: "Joplin",
    iata: "JLN",
    name: "Joplin Regional Airport",
    country: "United States"
  },
  {
    city: "Jamestown",
    iata: "JMS",
    name: "Jamestown Regional Airport",
    country: "United States"
  },
  {
    city: "Joliet",
    iata: "JOT",
    name: "Joliet Regional Airport",
    country: "United States"
  },
  {
    city: "Concord",
    iata: "USA",
    name: "Concord-Padgett Regional Airport",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "JKV",
    name: "Cherokee County Airport",
    country: "United States"
  },
  {
    city: "Johnstown",
    iata: "JST",
    name: "John Murtha Johnstown Cambria County Airport",
    country: "United States"
  },
  {
    city: "Janesville",
    iata: "JVL",
    name: "Southern Wisconsin Regional Airport",
    country: "United States"
  },
  {
    city: "Blangpidie",
    iata: "KJX",
    name: "Kuala Batu Airport",
    country: "Indonesia"
  },
  {
    city: "Jackson",
    iata: "JXN",
    name: "Jackson County Airport/Reynolds Field",
    country: "United States"
  },
  {
    city: "Osage Beach",
    iata: "OSB",
    name: "Grand Glaize Osage Beach Airport",
    country: "United States"
  },
  {
    city: "Kitoi Bay",
    iata: "KKB",
    name: "Kitoi Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "King City",
    iata: "KIC",
    name: "Mesa Del Rey Airport",
    country: "United States"
  },
  {
    city: "Karluk Lake",
    iata: "KKL",
    name: "Karluk Lake Seaplane Base",
    country: "United States"
  },
  {
    city: "Kelso",
    iata: "KLS",
    name: "Southwest Washington Regional Airport",
    country: "United States"
  },
  {
    city: "Kanab",
    iata: "KNB",
    name: "Kanab Municipal Airport",
    country: "United States"
  },
  {
    city: "Ekuk",
    iata: "KKU",
    name: "Ekuk Airport",
    country: "United States"
  },
  {
    city: "Death Valley",
    iata: "DTH",
    name: "Furnace Creek Airport",
    country: "United States"
  },
  {
    city: "Borrego Springs",
    iata: "BXS",
    name: "Borrego Valley Airport",
    country: "United States"
  },
  {
    city: "Big Bear",
    iata: "RBF",
    name: "Big Bear City Airport",
    country: "United States"
  },
  {
    city: "Marble Canyon",
    iata: "MYH",
    name: "Marble Canyon Airport",
    country: "United States"
  },
  {
    city: "Trona",
    iata: "TRH",
    name: "Trona Airport",
    country: "United States"
  },
  {
    city: "Lamar",
    iata: "LAA",
    name: "Southeast Colorado Regional Airport",
    country: "United States"
  },
  {
    city: "West Lafayette",
    iata: "LAF",
    name: "Purdue University Airport",
    country: "United States"
  },
  {
    city: "Lakeland",
    iata: "LAL",
    name: "Lakeland Linder International Airport",
    country: "United States"
  },
  {
    city: "Los Alamos",
    iata: "LAM",
    name: "Los Alamos Airport",
    country: "United States"
  },
  {
    city: "Lansing",
    iata: "LAN",
    name: "Capital Region International Airport",
    country: "United States"
  },
  {
    city: "Laramie",
    iata: "LAR",
    name: "Laramie Regional Airport",
    country: "United States"
  },
  {
    city: "Las Vegas",
    iata: "LAS",
    name: "Harry Reid International Airport",
    country: "United States"
  },
  {
    city: "Lawton",
    iata: "LAW",
    name: "Lawton Fort Sill Regional Airport",
    country: "United States"
  },
  {
    city: "Los Angeles",
    iata: "LAX",
    name: "Los Angeles International Airport",
    country: "United States"
  },
  {
    city: "Lubbock",
    iata: "LBB",
    name: "Lubbock Preston Smith International Airport",
    country: "United States"
  },
  {
    city: "Latrobe",
    iata: "LBE",
    name: "Arnold Palmer Regional Airport",
    country: "United States"
  },
  {
    city: "North Platte",
    iata: "LBF",
    name: "North Platte Regional Airport Lee Bird Field",
    country: "United States"
  },
  {
    city: "Liberal",
    iata: "LBL",
    name: "Liberal Mid-America Regional Airport",
    country: "United States"
  },
  {
    city: "Lumberton",
    iata: "LBT",
    name: "Lumberton Regional Airport",
    country: "United States"
  },
  {
    city: "Angleton",
    iata: "LJN",
    name: "Texas Gulf Coast Regional Airport",
    country: "United States"
  },
  {
    city: "Lake Charles",
    iata: "LCH",
    name: "Lake Charles Regional Airport",
    country: "United States"
  },
  {
    city: "Laconia / Gilford",
    iata: "LCI",
    name: "Laconia Municipal Airport",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "LCK",
    name: "Rickenbacker International Airport",
    country: "United States"
  },
  {
    city: "Lake City",
    iata: "LCQ",
    name: "Lake City Gateway Airport",
    country: "United States"
  },
  {
    city: "Linden",
    iata: "LDJ",
    name: "Linden Airport",
    country: "United States"
  },
  {
    city: "Ludington",
    iata: "LDM",
    name: "Mason County Airport",
    country: "United States"
  },
  {
    city: "Lebanon",
    iata: "LEB",
    name: "Lebanon Municipal Airport",
    country: "United States"
  },
  {
    city: "Leesburg",
    iata: "LEE",
    name: "Leesburg International Airport",
    country: "United States"
  },
  {
    city: "Lemmon",
    iata: "LEM",
    name: "Lemmon Municipal Airport",
    country: "United States"
  },
  {
    city: "Auburn/Lewiston",
    iata: "LEW",
    name: "Auburn Lewiston Municipal Airport",
    country: "United States"
  },
  {
    city: "Lexington",
    iata: "LEX",
    name: "Blue Grass Airport",
    country: "United States"
  },
  {
    city: "Hampton",
    iata: "LFI",
    name: "Langley Air Force Base",
    country: "United States"
  },
  {
    city: "Lufkin",
    iata: "LFK",
    name: "Angelina County Airport",
    country: "United States"
  },
  {
    city: "Lafayette",
    iata: "LFT",
    name: "Lafayette Regional Airport",
    country: "United States"
  },
  {
    city: "New York",
    iata: "LGA",
    name: "LaGuardia Airport",
    country: "United States"
  },
  {
    city: "Long Beach",
    iata: "LGB",
    name: "Long Beach International Airport",
    country: "United States"
  },
  {
    city: "LaGrange",
    iata: "LGC",
    name: "LaGrange Callaway Airport",
    country: "United States"
  },
  {
    city: "La Grande",
    iata: "LGD",
    name: "La Grande/Union County Airport",
    country: "United States"
  },
  {
    city: "Yuma Proving Ground(Yuma)",
    iata: "LGF",
    name: "Laguna Army Airfield",
    country: "United States"
  },
  {
    city: "Logan",
    iata: "LGU",
    name: "Logan-Cache Airport",
    country: "United States"
  },
  {
    city: "Lock Haven",
    iata: "LHV",
    name: "William T. Piper Memorial Airport",
    country: "United States"
  },
  {
    city: "Hinesville",
    iata: "LIY",
    name: "MidCoast Regional Airport at Wright Army Airfield",
    country: "United States"
  },
  {
    city: "Louisburg",
    iata: "LFN",
    name: "Triangle North Executive Airport",
    country: "United States"
  },
  {
    city: "Limon",
    iata: "LIC",
    name: "Limon Municipal Airport",
    country: "United States"
  },
  {
    city: "Little Rock",
    iata: "LIT",
    name: "Bill & Hillary Clinton National Airport/Adams Field",
    country: "United States"
  },
  {
    city: "Lake Placid",
    iata: "LKP",
    name: "Lake Placid Airport",
    country: "United States"
  },
  {
    city: "Louisa",
    iata: "LOW",
    name: "Louisa County Airport / Freeman Field",
    country: "United States"
  },
  {
    city: "Lakeview",
    iata: "LKV",
    name: "Lake County Airport",
    country: "United States"
  },
  {
    city: "Challis",
    iata: "CHL",
    name: "Challis Airport",
    country: "United States"
  },
  {
    city: "Louisville",
    iata: "LMS",
    name: "Louisville Winston County Airport",
    country: "United States"
  },
  {
    city: "Klamath Falls",
    iata: "LMT",
    name: "Crater Lake-Klamath Regional Airport",
    country: "United States"
  },
  {
    city: "West Palm Beach",
    iata: "LNA",
    name: "Palm Beach County Park Airport",
    country: "United States"
  },
  {
    city: "Lander",
    iata: "LND",
    name: "Hunt Field",
    country: "United States"
  },
  {
    city: "Lincoln",
    iata: "LNK",
    name: "Lincoln Airport",
    country: "United States"
  },
  {
    city: "Willoughby",
    iata: "LNN",
    name: "Lake County Executive Airport",
    country: "United States"
  },
  {
    city: "Wise",
    iata: "LNP",
    name: "Lonesome Pine Airport",
    country: "United States"
  },
  {
    city: "Spring Green",
    iata: "LNR",
    name: "Tri-County Regional Airport",
    country: "United States"
  },
  {
    city: "Lancaster",
    iata: "LNS",
    name: "Lancaster Airport",
    country: "United States"
  },
  {
    city: "Lovelock",
    iata: "LOL",
    name: "Derby Field",
    country: "United States"
  },
  {
    city: "Philadelphia",
    iata: "BBX",
    name: "Wings Field",
    country: "United States"
  },
  {
    city: "Chicago/Romeoville",
    iata: "LOT",
    name: "Lewis University Airport",
    country: "United States"
  },
  {
    city: "Louisville",
    iata: "LOU",
    name: "Bowman Field",
    country: "United States"
  },
  {
    city: "London",
    iata: "LOZ",
    name: "London-Corbin Airport/Magee Field",
    country: "United States"
  },
  {
    city: "Lompoc",
    iata: "LPC",
    name: "Lompoc Airport",
    country: "United States"
  },
  {
    city: "Pickens",
    iata: "LQK",
    name: "Pickens County Airport",
    country: "United States"
  },
  {
    city: "Laredo",
    iata: "LRD",
    name: "Laredo International Airport",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "LRF",
    name: "Little Rock Air Force Base",
    country: "United States"
  },
  {
    city: "Le Mars",
    iata: "LRJ",
    name: "Le Mars Municipal Airport",
    country: "United States"
  },
  {
    city: "Las Cruces",
    iata: "LRU",
    name: "Las Cruces International Airport",
    country: "United States"
  },
  {
    city: "Lordsburg",
    iata: "LSB",
    name: "Lordsburg Municipal Airport",
    country: "United States"
  },
  {
    city: "La Crosse",
    iata: "LSE",
    name: "La Crosse Regional Airport",
    country: "United States"
  },
  {
    city: "Fort Benning",
    iata: "LSF",
    name: "Lawson Army Air Field",
    country: "United States"
  },
  {
    city: "Lusk",
    iata: "LSK",
    name: "Lusk Municipal Airport",
    country: "United States"
  },
  {
    city: "Los Banos",
    iata: "LSN",
    name: "Los Banos Municipal Airport",
    country: "United States"
  },
  {
    city: "Las Vegas",
    iata: "LSV",
    name: "Nellis Air Force Base",
    country: "United States"
  },
  {
    city: "Altus",
    iata: "LTS",
    name: "Altus Air Force Base",
    country: "United States"
  },
  {
    city: "Glendale",
    iata: "LUF",
    name: "Luke Air Force Base",
    country: "United States"
  },
  {
    city: "Cincinnati",
    iata: "LUK",
    name: "Cincinnati Municipal Airport Lunken Field",
    country: "United States"
  },
  {
    city: "Laurel",
    iata: "LUL",
    name: "Hesler Noble Field",
    country: "United States"
  },
  {
    city: "Livermore",
    iata: "LVK",
    name: "Livermore Municipal Airport",
    country: "United States"
  },
  {
    city: "Lawrenceville",
    iata: "LVL",
    name: "Brunswick Municipal Airport",
    country: "United States"
  },
  {
    city: "Livingston",
    iata: "LVM",
    name: "Mission Field",
    country: "United States"
  },
  {
    city: "Las Vegas",
    iata: "LVS",
    name: "Las Vegas Municipal Airport",
    country: "United States"
  },
  {
    city: "Lewisburg",
    iata: "LWB",
    name: "Greenbrier Valley Airport",
    country: "United States"
  },
  {
    city: "Lawrence",
    iata: "LWC",
    name: "Lawrence Municipal Airport",
    country: "United States"
  },
  {
    city: "Wells",
    iata: "LWL",
    name: "Wells Municipal Airport/Harriet Field",
    country: "United States"
  },
  {
    city: "Lawrence",
    iata: "LWM",
    name: "Lawrence Municipal Airport",
    country: "United States"
  },
  {
    city: "Lewiston",
    iata: "LWS",
    name: "Lewiston Nez Perce County Airport",
    country: "United States"
  },
  {
    city: "Lewistown",
    iata: "LWT",
    name: "Lewistown Municipal Airport",
    country: "United States"
  },
  {
    city: "Lawrenceville",
    iata: "LWV",
    name: "Lawrenceville Vincennes International Airport",
    country: "United States"
  },
  {
    city: "Lexington",
    iata: "LXN",
    name: "Jim Kelly Field",
    country: "United States"
  },
  {
    city: "Leadville",
    iata: "LXV",
    name: "Lake County Airport",
    country: "United States"
  },
  {
    city: "Lynchburg",
    iata: "LYH",
    name: "Lynchburg Regional Airport - Preston Glenn Field",
    country: "United States"
  },
  {
    city: "Lyons",
    iata: "LYO",
    name: "Lyons-Rice County Municipal Airport",
    country: "United States"
  },
  {
    city: "Lawrenceville",
    iata: "LZU",
    name: "Gwinnett County Briscoe Field",
    country: "United States"
  },
  {
    city: "Poplarville",
    iata: "PCU",
    name: "Poplarville Pearl River County Airport",
    country: "United States"
  },
  {
    city: "Malta",
    iata: "MLK",
    name: "Malta Airport",
    country: "United States"
  },
  {
    city: "Macon",
    iata: "MAC",
    name: "Macon Downtown Airport",
    country: "United States"
  },
  {
    city: "Madera",
    iata: "MAE",
    name: "Madera Municipal Airport",
    country: "United States"
  },
  {
    city: "Midland",
    iata: "MAF",
    name: "Midland International Air and Space Port",
    country: "United States"
  },
  {
    city: "Malden",
    iata: "MAW",
    name: "Malden Regional Airport",
    country: "United States"
  },
  {
    city: "Konambe",
    iata: "KMB",
    name: "Koinambe Airport",
    country: "PG"
  },
  {
    city: "Mobridge",
    iata: "MBG",
    name: "Mobridge Municipal Airport",
    country: "United States"
  },
  {
    city: "Manistee",
    iata: "MBL",
    name: "Manistee County Blacker Airport",
    country: "United States"
  },
  {
    city: "Madison",
    iata: "DXE",
    name: "Bruce Campbell Field",
    country: "United States"
  },
  {
    city: "Freeland",
    iata: "MBS",
    name: "MBS International Airport",
    country: "United States"
  },
  {
    city: "Moberly",
    iata: "MBY",
    name: "Omar N Bradley Airport",
    country: "United States"
  },
  {
    city: "McComb",
    iata: "MCB",
    name: "McComb-Pike County Airport / John E Lewis Field",
    country: "United States"
  },
  {
    city: "Sacramento",
    iata: "MCC",
    name: "McClellan Airfield",
    country: "United States"
  },
  {
    city: "Mackinac Island",
    iata: "MCD",
    name: "Mackinac Island Airport",
    country: "United States"
  },
  {
    city: "Merced",
    iata: "MCE",
    name: "Merced Regional Macready Field",
    country: "United States"
  },
  {
    city: "Tampa",
    iata: "MCF",
    name: "MacDill Air Force Base",
    country: "United States"
  },
  {
    city: "Kansas City",
    iata: "MCI",
    name: "Kansas City International Airport",
    country: "United States"
  },
  {
    city: "McCook",
    iata: "MCK",
    name: "McCook Ben Nelson Regional Airport",
    country: "United States"
  },
  {
    city: "Macon",
    iata: "MCN",
    name: "Middle Georgia Regional Airport",
    country: "United States"
  },
  {
    city: "Orlando",
    iata: "MCO",
    name: "Orlando International Airport",
    country: "United States"
  },
  {
    city: "Mason City",
    iata: "MCW",
    name: "Mason City Municipal Airport",
    country: "United States"
  },
  {
    city: "San Antonio",
    iata: "MDA",
    name: "Martindale Army Heliport",
    country: "United States"
  },
  {
    city: "Midland",
    iata: "MDD",
    name: "Midland Airpark",
    country: "United States"
  },
  {
    city: "Murphysboro",
    iata: "MDH",
    name: "Southern Illinois Airport",
    country: "United States"
  },
  {
    city: "Madison",
    iata: "XMD",
    name: "Madison Municipal Airport",
    country: "United States"
  },
  {
    city: "Harrisburg",
    iata: "MDT",
    name: "Harrisburg International Airport",
    country: "United States"
  },
  {
    city: "Chicago",
    iata: "MDW",
    name: "Chicago Midway International Airport",
    country: "United States"
  },
  {
    city: "Medford",
    iata: "MDF",
    name: "Taylor County Airport",
    country: "United States"
  },
  {
    city: "Maxton",
    iata: "MXE",
    name: "Laurinburg Maxton Airport",
    country: "United States"
  },
  {
    city: "Meridian",
    iata: "MEI",
    name: "Key Field / Meridian Regional Airport",
    country: "United States"
  },
  {
    city: "Memphis",
    iata: "MEM",
    name: "Memphis International Airport",
    country: "United States"
  },
  {
    city: "Merced",
    iata: "MER",
    name: "Castle Airport",
    country: "United States"
  },
  {
    city: "Minden",
    iata: "MEV",
    name: "Minden-Tahoe Airport",
    country: "United States"
  },
  {
    city: "Mena",
    iata: "UMZ",
    name: "Mena Intermountain Municipal Airport",
    country: "United States"
  },
  {
    city: "Mansfield",
    iata: "MFD",
    name: "Mansfield Lahm Regional Airport",
    country: "United States"
  },
  {
    city: "McAllen",
    iata: "MFE",
    name: "McAllen Miller International Airport",
    country: "United States"
  },
  {
    city: "Marshfield",
    iata: "MFI",
    name: "Marshfield Municipal Airport",
    country: "United States"
  },
  {
    city: "Medford",
    iata: "MFR",
    name: "Rogue Valley International-Medford Airport",
    country: "United States"
  },
  {
    city: "Melfa",
    iata: "MFV",
    name: "Accomack County Airport",
    country: "United States"
  },
  {
    city: "Michigan City",
    iata: "MGC",
    name: "Michigan City Municipal Airport",
    country: "United States"
  },
  {
    city: "Marietta",
    iata: "MGE",
    name: "Dobbins Air Reserve Base",
    country: "United States"
  },
  {
    city: "Montgomery",
    iata: "MGJ",
    name: "Orange County Airport",
    country: "United States"
  },
  {
    city: "Montgomery",
    iata: "MGM",
    name: "Montgomery Regional (Dannelly Field) Airport",
    country: "United States"
  },
  {
    city: "Moultrie",
    iata: "MGR",
    name: "Moultrie Municipal Airport",
    country: "United States"
  },
  {
    city: "Morgantown",
    iata: "MGW",
    name: "Morgantown Municipal Airport Walter L. (Bill) Hart Field",
    country: "United States"
  },
  {
    city: "Dayton",
    iata: "MGY",
    name: "Dayton-Wright Brothers Airport",
    country: "United States"
  },
  {
    city: "Mitchell",
    iata: "MHE",
    name: "Mitchell Municipal Airport",
    country: "United States"
  },
  {
    city: "Manhattan",
    iata: "MHK",
    name: "Manhattan Regional Airport",
    country: "United States"
  },
  {
    city: "Marshall",
    iata: "MHL",
    name: "Marshall Memorial Municipal Airport",
    country: "United States"
  },
  {
    city: "Sacramento",
    iata: "MHR",
    name: "Sacramento Mather Airport",
    country: "United States"
  },
  {
    city: "Manchester",
    iata: "MHT",
    name: "Manchester-Boston Regional Airport",
    country: "United States"
  },
  {
    city: "Mojave",
    iata: "MHV",
    name: "Mojave Air &  Space Port",
    country: "United States"
  },
  {
    city: "Miami",
    iata: "MIA",
    name: "Miami International Airport",
    country: "United States"
  },
  {
    city: "Minot",
    iata: "MIB",
    name: "Minot Air Force Base",
    country: "United States"
  },
  {
    city: "Minneapolis",
    iata: "MIC",
    name: "Crystal Airport",
    country: "United States"
  },
  {
    city: "Muncie",
    iata: "MIE",
    name: "Delaware County Johnson Field",
    country: "United States"
  },
  {
    city: "Miami",
    iata: "MIO",
    name: "Miami Municipal Airport",
    country: "United States"
  },
  {
    city: "Shafter",
    iata: "MIT",
    name: "Shafter Airport - Minter Field",
    country: "United States"
  },
  {
    city: "Millville",
    iata: "MIV",
    name: "Millville Municipal Airport",
    country: "United States"
  },
  {
    city: "Marshalltown",
    iata: "MIW",
    name: "Marshalltown Municipal Airport",
    country: "United States"
  },
  {
    city: "Jackson",
    iata: "MJQ",
    name: "Jackson Municipal Airport",
    country: "United States"
  },
  {
    city: "Toms River",
    iata: "MJX",
    name: "Ocean County Airport",
    country: "United States"
  },
  {
    city: "Kansas City",
    iata: "MKC",
    name: "Charles B. Wheeler Downtown Airport",
    country: "United States"
  },
  {
    city: "Milwaukee",
    iata: "MKE",
    name: "General Mitchell International Airport",
    country: "United States"
  },
  {
    city: "Muskegon",
    iata: "MKG",
    name: "Muskegon County Airport",
    country: "United States"
  },
  {
    city: "Jackson",
    iata: "MKL",
    name: "McKellar-Sipes Regional Airport",
    country: "United States"
  },
  {
    city: "Muskogee",
    iata: "MKO",
    name: "Muskogee-Davis Regional Airport",
    country: "United States"
  },
  {
    city: "Mankato",
    iata: "MKT",
    name: "Mankato Regional Airport",
    country: "United States"
  },
  {
    city: "Marco Island",
    iata: "MRK",
    name: "Marco Island Executive Airport",
    country: "United States"
  },
  {
    city: "Melbourne",
    iata: "MLB",
    name: "Melbourne Orlando International Airport",
    country: "United States"
  },
  {
    city: "Mc Alester",
    iata: "MLC",
    name: "Mc Alester Regional Airport",
    country: "United States"
  },
  {
    city: "Malad City",
    iata: "MLD",
    name: "Malad City Airport",
    country: "United States"
  },
  {
    city: "Omaha",
    iata: "MIQ",
    name: "Millard Airport",
    country: "United States"
  },
  {
    city: "Milford",
    iata: "MLF",
    name: "Milford Municipal-Ben and Judy Briscoe Field",
    country: "United States"
  },
  {
    city: "Moline",
    iata: "MLI",
    name: "Quad City International Airport",
    country: "United States"
  },
  {
    city: "Milledgeville",
    iata: "MLJ",
    name: "Baldwin County Regional Airport",
    country: "United States"
  },
  {
    city: "Miles City",
    iata: "MLS",
    name: "Miles City Airport - Frank Wiley Field",
    country: "United States"
  },
  {
    city: "Millinocket",
    iata: "MLT",
    name: "Millinocket Municipal Airport",
    country: "United States"
  },
  {
    city: "Monroe",
    iata: "MLU",
    name: "Monroe Regional Airport",
    country: "United States"
  },
  {
    city: "Kimaam",
    iata: "KMM",
    name: "Kimaam Airport",
    country: "Indonesia"
  },
  {
    city: "Mammoth Lakes",
    iata: "MMH",
    name: "Mammoth Yosemite Airport",
    country: "United States"
  },
  {
    city: "Athens",
    iata: "MMI",
    name: "McMinn County Airport",
    country: "United States"
  },
  {
    city: "Marshall",
    iata: "MML",
    name: "Southwest Minnesota Regional Airport - Marshall/Ryan Field",
    country: "United States"
  },
  {
    city: "Marks",
    iata: "MMS",
    name: "Selfs Airport",
    country: "United States"
  },
  {
    city: "Eastover",
    iata: "MMT",
    name: "Mc Entire Joint National Guard Base",
    country: "United States"
  },
  {
    city: "Morristown",
    iata: "MMU",
    name: "Morristown Municipal Airport",
    country: "United States"
  },
  {
    city: "Menominee",
    iata: "MNM",
    name: "Menominee–Marinette Twin County Airport",
    country: "United States"
  },
  {
    city: "Marion",
    iata: "MNN",
    name: "Marion Municipal Airport",
    country: "United States"
  },
  {
    city: "Mobile",
    iata: "MOB",
    name: "Mobile Regional Airport",
    country: "United States"
  },
  {
    city: "Modesto",
    iata: "MOD",
    name: "Modesto City Co-Harry Sham Field",
    country: "United States"
  },
  {
    city: "Mount Pleasant",
    iata: "MOP",
    name: "Mount Pleasant Municipal Airport",
    country: "United States"
  },
  {
    city: "Morristown",
    iata: "MOR",
    name: "Morristown Regional Airport",
    country: "United States"
  },
  {
    city: "Minot",
    iata: "MOT",
    name: "Minot International Airport",
    country: "United States"
  },
  {
    city: "Morris",
    iata: "MOX",
    name: "Morris Municipal Airport Charlie Schmidt Field",
    country: "United States"
  },
  {
    city: "Mariposa",
    iata: "RMY",
    name: "Mariposa Yosemite Airport",
    country: "United States"
  },
  {
    city: "Morrilton",
    iata: "MPJ",
    name: "Petit Jean Park Airport",
    country: "United States"
  },
  {
    city: "Mount Pocono",
    iata: "MPO",
    name: "Pocono Mountains Municipal Airport",
    country: "United States"
  },
  {
    city: "Mc Pherson",
    iata: "MPR",
    name: "Mc Pherson Airport",
    country: "United States"
  },
  {
    city: "Barre/Montpelier",
    iata: "MPV",
    name: "Edward F Knapp State Airport",
    country: "United States"
  },
  {
    city: "Mount Pleasant",
    iata: "MPZ",
    name: "Mount Pleasant Municipal Airport",
    country: "United States"
  },
  {
    city: "Macomb",
    iata: "MQB",
    name: "Macomb Municipal Airport",
    country: "United States"
  },
  {
    city: "Manteo",
    iata: "MEO",
    name: "Dare County Regional Airport",
    country: "United States"
  },
  {
    city: "Coatesville",
    iata: "CTH",
    name: "Chester County G O Carlson Airport",
    country: "United States"
  },
  {
    city: "Mc Rae",
    iata: "MQW",
    name: "Telfair Wheeler Airport",
    country: "United States"
  },
  {
    city: "Smyrna",
    iata: "MQY",
    name: "Smyrna Airport",
    country: "United States"
  },
  {
    city: "Martinsburg",
    iata: "MRB",
    name: "Eastern WV Regional Airport/Shepherd Field",
    country: "United States"
  },
  {
    city: "Columbia/Mount Pleasant",
    iata: "MRC",
    name: "Maury County Airport",
    country: "United States"
  },
  {
    city: "Marfa",
    iata: "MRF",
    name: "Marfa Municipal Airport",
    country: "United States"
  },
  {
    city: "Morganton",
    iata: "MRN",
    name: "Foothills Regional Airport",
    country: "United States"
  },
  {
    city: "Monterey",
    iata: "MRY",
    name: "Monterey Regional Airport",
    country: "United States"
  },
  {
    city: "Muscle Shoals",
    iata: "MSL",
    name: "Northwest Alabama Regional Airport",
    country: "United States"
  },
  {
    city: "Madison",
    iata: "MSN",
    name: "Dane County Regional Truax Field",
    country: "United States"
  },
  {
    city: "Missoula",
    iata: "MSO",
    name: "Missoula Montana Airport",
    country: "United States"
  },
  {
    city: "Minneapolis",
    iata: "MSP",
    name: "Minneapolis–Saint Paul International Airport / Wold–Chamberlain Field",
    country: "United States"
  },
  {
    city: "Massena",
    iata: "MSS",
    name: "Massena International Airport Richards Field",
    country: "United States"
  },
  {
    city: "Monticello",
    iata: "MSV",
    name: "Sullivan County International Airport",
    country: "United States"
  },
  {
    city: "New Orleans",
    iata: "MSY",
    name: "Louis Armstrong New Orleans International Airport",
    country: "United States"
  },
  {
    city: "Mount Clemens",
    iata: "MTC",
    name: "Selfridge Air National Guard Base Airport",
    country: "United States"
  },
  {
    city: "Marathon",
    iata: "MTH",
    name: "Florida Keys Marathon International Airport",
    country: "United States"
  },
  {
    city: "Montrose",
    iata: "MTJ",
    name: "Montrose Regional Airport",
    country: "United States"
  },
  {
    city: "Baltimore",
    iata: "MTN",
    name: "Martin State Airport",
    country: "United States"
  },
  {
    city: "Mattoon",
    iata: "MTO",
    name: "Coles County Memorial Airport",
    country: "United States"
  },
  {
    city: "Montauk",
    iata: "MTP",
    name: "Montauk Airport",
    country: "United States"
  },
  {
    city: "Manitowoc",
    iata: "MTW",
    name: "Manitowoc County Airport",
    country: "United States"
  },
  {
    city: "Fort Indiantown Gap(Annville)",
    iata: "MUI",
    name: "Muir Army Air Field (Fort Indiantown Gap) Airport",
    country: "United States"
  },
  {
    city: "Moultrie",
    iata: "MUL",
    name: "Spence Airport",
    country: "United States"
  },
  {
    city: "Mountain Home",
    iata: "MUO",
    name: "Mountain Home Air Force Base",
    country: "United States"
  },
  {
    city: "Muscatine",
    iata: "MUT",
    name: "Muscatine Municipal Airport",
    country: "United States"
  },
  {
    city: "Monroeville",
    iata: "MVC",
    name: "Monroe County Aeroplex Airport",
    country: "United States"
  },
  {
    city: "Montevideo",
    iata: "MVE",
    name: "Montevideo Chippewa County Airport",
    country: "United States"
  },
  {
    city: "Morrisville",
    iata: "MVL",
    name: "Morrisville-Stowe State Airport",
    country: "United States"
  },
  {
    city: "Mount Vernon",
    iata: "MVN",
    name: "Mount Vernon Outland Airport",
    country: "United States"
  },
  {
    city: "Martha's Vineyard",
    iata: "MVY",
    name: "Martha's Vineyard Airport",
    country: "United States"
  },
  {
    city: "Marion",
    iata: "MWA",
    name: "Veterans Airport of Southern Illinois",
    country: "United States"
  },
  {
    city: "Milwaukee",
    iata: "MWC",
    name: "Lawrence J Timmerman Airport",
    country: "United States"
  },
  {
    city: "Moses Lake",
    iata: "MWH",
    name: "Grant County International Airport",
    country: "United States"
  },
  {
    city: "Mineral Wells",
    iata: "MWL",
    name: "Mineral Wells Regional Airport",
    country: "United States"
  },
  {
    city: "Windom",
    iata: "MWM",
    name: "Windom Municipal Airport",
    country: "United States"
  },
  {
    city: "Middletown",
    iata: "MWO",
    name: "Middletown Regional Airport",
    country: "United States"
  },
  {
    city: "Manila",
    iata: "MXA",
    name: "Manila Municipal Airport",
    country: "United States"
  },
  {
    city: "Montgomery",
    iata: "MXF",
    name: "Maxwell Air Force Base",
    country: "United States"
  },
  {
    city: "Monticello",
    iata: "MXO",
    name: "Monticello Regional Airport",
    country: "United States"
  },
  {
    city: "Moser Bay",
    iata: "KMY",
    name: "Moser Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "San Diego",
    iata: "MYF",
    name: "Montgomery-Gibbs Executive Airport",
    country: "United States"
  },
  {
    city: "McCall",
    iata: "MYL",
    name: "McCall Municipal Airport",
    country: "United States"
  },
  {
    city: "Myrtle Beach",
    iata: "MYR",
    name: "Myrtle Beach International Airport",
    country: "United States"
  },
  {
    city: "Marysville",
    iata: "MYV",
    name: "Yuba County Airport",
    country: "United States"
  },
  {
    city: "Marana",
    iata: "MZJ",
    name: "Pinal Airpark",
    country: "United States"
  },
  {
    city: "Marion",
    iata: "MZZ",
    name: "Marion Municipal Airport",
    country: "United States"
  },
  {
    city: "Cortland",
    iata: "CTX",
    name: "Cortland County Chase Field",
    country: "United States"
  },
  {
    city: "Sidney",
    iata: "SXY",
    name: "Sidney Municipal Airport",
    country: "United States"
  },
  {
    city: "Oneonta",
    iata: "ONH",
    name: "Albert S Nader Regional Airport",
    country: "United States"
  },
  {
    city: "New Orleans",
    iata: "NBG",
    name: "New Orleans NAS JRB/Alvin Callender Field",
    country: "United States"
  },
  {
    city: "Foley",
    iata: "NHX",
    name: "Naval Outlying Field Barin",
    country: "United States"
  },
  {
    city: "Dahlgren",
    iata: "DGN",
    name: "Dahlgren Naval Surface Warfare Center Airport",
    country: "United States"
  },
  {
    city: "Lakehurst",
    iata: "NEL",
    name: "Lakehurst Maxfield Field Airport",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "NEN",
    name: "Whitehouse Naval Outlying Field",
    country: "United States"
  },
  {
    city: "New Orleans",
    iata: "NEW",
    name: "Lakefront Airport",
    country: "United States"
  },
  {
    city: "Fallon",
    iata: "NFL",
    name: "Fallon Naval Air Station",
    country: "United States"
  },
  {
    city: "Fort Worth",
    iata: "FWH",
    name: "NAS Fort Worth JRB / Carswell Field",
    country: "United States"
  },
  {
    city: "Corpus Christi",
    iata: "NGP",
    name: "Naval Air Station Corpus Christi Truax Field",
    country: "United States"
  },
  {
    city: "Norfolk",
    iata: "NGU",
    name: "Norfolk Naval Station (Chambers Field)",
    country: "United States"
  },
  {
    city: "Corpus Christi",
    iata: "NGW",
    name: "Cabaniss Field Naval Outlying Landing Field",
    country: "United States"
  },
  {
    city: "Patuxent River",
    iata: "NHK",
    name: "Patuxent River Naval Air Station (Trapnell Field)",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "NIP",
    name: "Jacksonville Naval Air Station (Towers Field)",
    country: "United States"
  },
  {
    city: "El Centro",
    iata: "NJK",
    name: "El Centro NAF Airport (Vraciu Field)",
    country: "United States"
  },
  {
    city: "San Diego",
    iata: "NKX",
    name: "Miramar Marine Corps Air Station - Mitscher Field",
    country: "United States"
  },
  {
    city: "Lemoore",
    iata: "NLC",
    name: "Lemoore Naval Air Station (Reeves Field) Airport",
    country: "United States"
  },
  {
    city: "Pensacola",
    iata: "NPA",
    name: "Naval Air Station Pensacola Forrest Sherman Field",
    country: "United States"
  },
  {
    city: "Millington",
    iata: "NQA",
    name: "Millington-Memphis Airport",
    country: "United States"
  },
  {
    city: "Kingsville",
    iata: "NQI",
    name: "Kingsville Naval Air Station",
    country: "United States"
  },
  {
    city: "Key West",
    iata: "NQX",
    name: "Naval Air Station Key West/Boca Chica Field",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "NRB",
    name: "Naval Station Mayport / Admiral David L McDonald Field",
    country: "United States"
  },
  {
    city: "Imperial Beach",
    iata: "NRS",
    name: "Naval Outlying Field Imperial Beach (Ream Field)",
    country: "United States"
  },
  {
    city: "Milton",
    iata: "NSE",
    name: "Whiting Field Naval Air Station - North",
    country: "United States"
  },
  {
    city: "Point Mugu",
    iata: "NTD",
    name: "Point Mugu Naval Air Station (Naval Base Ventura Co)",
    country: "United States"
  },
  {
    city: "Virginia Beach",
    iata: "NTU",
    name: "Oceana Naval Air Station",
    country: "United States"
  },
  {
    city: "Mountain View",
    iata: "NUQ",
    name: "Moffett Federal Airfield",
    country: "United States"
  },
  {
    city: "Oak Harbor",
    iata: "NUW",
    name: "Whidbey Island Naval Air Station (Ault Field)",
    country: "United States"
  },
  {
    city: "Nevada",
    iata: "NVD",
    name: "Nevada Municipal Airport",
    country: "United States"
  },
  {
    city: "Quantico",
    iata: "NYG",
    name: "Quantico Marine Corps Airfield / Turner Field",
    country: "United States"
  },
  {
    city: "Yuma",
    iata: "YUM",
    name: "Yuma International Airport / Marine Corps Air Station Yuma",
    country: "United States"
  },
  {
    city: "San Diego",
    iata: "NZY",
    name: "North Island Naval Air Station-Halsey Field",
    country: "United States"
  },
  {
    city: "Beckwourth",
    iata: "NVN",
    name: "Nervino Airport",
    country: "United States"
  },
  {
    city: "Columbia",
    iata: "COA",
    name: "Columbia Airport",
    country: "United States"
  },
  {
    city: "Oakdale",
    iata: "ODC",
    name: "Oakdale Airport",
    country: "United States"
  },
  {
    city: "Yerington",
    iata: "EYR",
    name: "Yerington Municipal Airport",
    country: "United States"
  },
  {
    city: "Richlands",
    iata: "OAJ",
    name: "Albert J Ellis Airport",
    country: "United States"
  },
  {
    city: "Oakland",
    iata: "OAK",
    name: "San Francisco Bay Oakland International Airport",
    country: "United States"
  },
  {
    city: "Marina",
    iata: "OAR",
    name: "Marina Municipal Airport",
    country: "United States"
  },
  {
    city: "Okeechobee",
    iata: "OBE",
    name: "Okeechobee County Airport",
    country: "United States"
  },
  {
    city: "Ocala",
    iata: "OCF",
    name: "Ocala International Airport - Jim Taylor Field",
    country: "United States"
  },
  {
    city: "Nacogdoches",
    iata: "OCH",
    name: "A L Mangham Jr. Regional Airport",
    country: "United States"
  },
  {
    city: "Washington",
    iata: "OCW",
    name: "Warren Field",
    country: "United States"
  },
  {
    city: "Odessa",
    iata: "ODT",
    name: "Odessa Schlemeyer Field",
    country: "United States"
  },
  {
    city: "Lawrenceville",
    iata: "OEA",
    name: "O'Neal Airport",
    country: "United States"
  },
  {
    city: "Osceola",
    iata: "OEO",
    name: "L O Simenstad Municipal Airport",
    country: "United States"
  },
  {
    city: "Omaha",
    iata: "OFF",
    name: "Offutt Air Force Base",
    country: "United States"
  },
  {
    city: "Norfolk",
    iata: "OFK",
    name: "Karl Stefan Memorial Airport",
    country: "United States"
  },
  {
    city: "Ogallala",
    iata: "OGA",
    name: "Ogallala Municipal Airport Searle Field",
    country: "United States"
  },
  {
    city: "Orangeburg",
    iata: "OGB",
    name: "Orangeburg Municipal Airport",
    country: "United States"
  },
  {
    city: "Ogden",
    iata: "OGD",
    name: "Ogden Hinckley Airport",
    country: "United States"
  },
  {
    city: "Ogdensburg",
    iata: "OGS",
    name: "Ogdensburg International Airport",
    country: "United States"
  },
  {
    city: "Norwich",
    iata: "OIC",
    name: "Lt Warren Eaton Airport",
    country: "United States"
  },
  {
    city: "Olathe",
    iata: "OJC",
    name: "Johnson County Executive Airport",
    country: "United States"
  },
  {
    city: "Oceanside",
    iata: "OCN",
    name: "Oceanside Municipal Airport",
    country: "United States"
  },
  {
    city: "Oklahoma City",
    iata: "OKC",
    name: "OKC Will Rogers World Airport",
    country: "United States"
  },
  {
    city: "Oak Harbor",
    iata: "ODW",
    name: "AJ Eisenberg Airport",
    country: "United States"
  },
  {
    city: "Kokomo",
    iata: "OKK",
    name: "Kokomo Municipal Airport",
    country: "United States"
  },
  {
    city: "Okmulgee",
    iata: "OKM",
    name: "Okmulgee Regional Airport",
    country: "United States"
  },
  {
    city: "Oshkosh",
    iata: "OKS",
    name: "Garden County Airport/King Rhiley Field",
    country: "United States"
  },
  {
    city: "Winchester",
    iata: "WGO",
    name: "Winchester Regional Airport",
    country: "United States"
  },
  {
    city: "Old Town",
    iata: "OLD",
    name: "Dewitt Field - Old Town Municipal Airport",
    country: "United States"
  },
  {
    city: "Olean",
    iata: "OLE",
    name: "Cattaraugus County-Olean Airport",
    country: "United States"
  },
  {
    city: "Wolf Point",
    iata: "OLF",
    name: "L M Clayton Airport",
    country: "United States"
  },
  {
    city: "Olympia",
    iata: "OLM",
    name: "Olympia Regional Airport",
    country: "United States"
  },
  {
    city: "Nogales",
    iata: "OLS",
    name: "Nogales International Airport",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "OLU",
    name: "Columbus Municipal Airport",
    country: "United States"
  },
  {
    city: "Olive Branch",
    iata: "OLV",
    name: "Olive Branch Airport",
    country: "United States"
  },
  {
    city: "Olney-Noble",
    iata: "OLY",
    name: "Olney Noble Airport",
    country: "United States"
  },
  {
    city: "Omaha",
    iata: "OMA",
    name: "Eppley Airfield",
    country: "United States"
  },
  {
    city: "Omak",
    iata: "OMK",
    name: "Omak Airport",
    country: "United States"
  },
  {
    city: "Winona",
    iata: "ONA",
    name: "Winona Municipal Airport Max Conrad Field",
    country: "United States"
  },
  {
    city: "O'Neill",
    iata: "ONL",
    name: "O'Neill Municipal Airport–John L Baker Field",
    country: "United States"
  },
  {
    city: "Socorro",
    iata: "ONM",
    name: "Socorro Municipal Airport",
    country: "United States"
  },
  {
    city: "Oregon",
    iata: "ONO",
    name: "Ontario Municipal Airport",
    country: "United States"
  },
  {
    city: "Newport",
    iata: "ONP",
    name: "Newport Municipal Airport",
    country: "United States"
  },
  {
    city: "Ontario",
    iata: "ONT",
    name: "Ontario International Airport",
    country: "United States"
  },
  {
    city: "Olney",
    iata: "ONY",
    name: "Olney Municipal Airport",
    country: "United States"
  },
  {
    city: "Cedar",
    iata: "OOA",
    name: "Oskaloosa Municipal Airport",
    country: "United States"
  },
  {
    city: "Miami",
    iata: "OPF",
    name: "Miami-Opa Locka Executive Airport",
    country: "United States"
  },
  {
    city: "Opelousas",
    iata: "OPL",
    name: "St Landry Parish Ahart Field",
    country: "United States"
  },
  {
    city: "North Kingstown",
    iata: "NCO",
    name: "Quonset State Airport",
    country: "United States"
  },
  {
    city: "Chicago",
    iata: "ORD",
    name: "Chicago O'Hare International Airport",
    country: "United States"
  },
  {
    city: "Norfolk",
    iata: "ORF",
    name: "Norfolk International Airport",
    country: "United States"
  },
  {
    city: "Worcester",
    iata: "ORH",
    name: "Worcester Regional Airport",
    country: "United States"
  },
  {
    city: "Orlando",
    iata: "ORL",
    name: "Orlando Executive Airport",
    country: "United States"
  },
  {
    city: "Eastsound",
    iata: "ESD",
    name: "Orcas Island Airport",
    country: "United States"
  },
  {
    city: "Mount Pleasant",
    iata: "MPS",
    name: "Mount Pleasant Regional Airport",
    country: "United States"
  },
  {
    city: "Oscoda",
    iata: "OSC",
    name: "Oscoda Wurtsmith Airport",
    country: "United States"
  },
  {
    city: "Oshkosh",
    iata: "OSH",
    name: "Wittman Regional Airport",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "OSU",
    name: "The Ohio State University Airport - Don Scott Field",
    country: "United States"
  },
  {
    city: "Kosciusko",
    iata: "OSX",
    name: "Kosciusko Attala County Airport",
    country: "United States"
  },
  {
    city: "Worthington",
    iata: "OTG",
    name: "Worthington Municipal Airport",
    country: "United States"
  },
  {
    city: "North Bend",
    iata: "OTH",
    name: "Southwest Oregon Regional Airport",
    country: "United States"
  },
  {
    city: "Ottumwa",
    iata: "OTM",
    name: "Ottumwa Regional Airport",
    country: "United States"
  },
  {
    city: "Norman",
    iata: "OUN",
    name: "University of Oklahoma Westheimer Airport",
    country: "United States"
  },
  {
    city: "Oroville",
    iata: "OVE",
    name: "Oroville Municipal Airport",
    country: "United States"
  },
  {
    city: "Owatonna",
    iata: "OWA",
    name: "Owatonna Degner Regional Airport",
    country: "United States"
  },
  {
    city: "Owensboro",
    iata: "OWB",
    name: "Owensboro Daviess County Airport",
    country: "United States"
  },
  {
    city: "Norwood",
    iata: "OWD",
    name: "Norwood Memorial Airport",
    country: "United States"
  },
  {
    city: "Norridgewock",
    iata: "OWK",
    name: "Central Maine/Norridgewock Airport",
    country: "United States"
  },
  {
    city: "Ocean City",
    iata: "OCE",
    name: "Ocean City Municipal Airport",
    country: "United States"
  },
  {
    city: "Oxford",
    iata: "OXC",
    name: "Waterbury Oxford Airport",
    country: "United States"
  },
  {
    city: "Oxford",
    iata: "OXD",
    name: "Miami University Airport",
    country: "United States"
  },
  {
    city: "Oxnard",
    iata: "OXR",
    name: "Oxnard Airport",
    country: "United States"
  },
  {
    city: "Olga Bay",
    iata: "KOY",
    name: "Olga Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "St Marys",
    iata: "STQ",
    name: "St Marys Municipal Airport",
    country: "United States"
  },
  {
    city: "Ozona",
    iata: "OZA",
    name: "Ozona Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Rucker/Ozark",
    iata: "OZR",
    name: "Cairns AAF (Fort Rucker) Air Field",
    country: "United States"
  },
  {
    city: "Bisbee",
    iata: "BSQ",
    name: "Bisbee Municipal Airport",
    country: "United States"
  },
  {
    city: "Polacca",
    iata: "PXL",
    name: "Polacca Airport",
    country: "United States"
  },
  {
    city: "Globe",
    iata: "GLB",
    name: "San Carlos Apache Airport",
    country: "United States"
  },
  {
    city: "Holbrook",
    iata: "HBK",
    name: "Holbrook Municipal Airport",
    country: "United States"
  },
  {
    city: "Willcox",
    iata: "CWX",
    name: "Cochise County Airport",
    country: "United States"
  },
  {
    city: "Cottonwood",
    iata: "CTW",
    name: "Cottonwood Airport",
    country: "United States"
  },
  {
    city: "Everett",
    iata: "PAE",
    name: "Seattle Paine Field International Airport",
    country: "United States"
  },
  {
    city: "Paducah",
    iata: "PAH",
    name: "Barkley Regional Airport",
    country: "United States"
  },
  {
    city: "Panama City",
    iata: "PAM",
    name: "Tyndall Air Force Base",
    country: "United States"
  },
  {
    city: "Payson",
    iata: "PJB",
    name: "Payson Airport",
    country: "United States"
  },
  {
    city: "Palo Alto",
    iata: "PAO",
    name: "Palo Alto Airport",
    country: "United States"
  },
  {
    city: "Point Baker",
    iata: "KPB",
    name: "Point Baker Seaplane Base",
    country: "United States"
  },
  {
    city: "Pine Bluff",
    iata: "PBF",
    name: "Pine Bluff Regional Airport, Grider Field",
    country: "United States"
  },
  {
    city: "Plattsburgh",
    iata: "PBG",
    name: "Plattsburgh International Airport",
    country: "United States"
  },
  {
    city: "West Palm Beach",
    iata: "PBI",
    name: "Palm Beach International Airport",
    country: "United States"
  },
  {
    city: "Pikeville",
    iata: "PVL",
    name: "Pike County Airport Hatcher Field",
    country: "United States"
  },
  {
    city: "Prairie Du Chien",
    iata: "PCD",
    name: "Prairie Du Chien Municipal Airport",
    country: "United States"
  },
  {
    city: "Atlanta",
    iata: "PDK",
    name: "DeKalb Peachtree Airport",
    country: "United States"
  },
  {
    city: "Pendleton",
    iata: "PDT",
    name: "Eastern Oregon Regional Airport at Pendleton",
    country: "United States"
  },
  {
    city: "Portland",
    iata: "PDX",
    name: "Portland International Airport",
    country: "United States"
  },
  {
    city: "Pecos",
    iata: "PEQ",
    name: "Pecos Municipal Airport",
    country: "United States"
  },
  {
    city: "Pacific City",
    iata: "PFC",
    name: "Pacific City State Airport",
    country: "United States"
  },
  {
    city: "Page",
    iata: "PGA",
    name: "Page Municipal Airport",
    country: "United States"
  },
  {
    city: "Punta Gorda",
    iata: "PGD",
    name: "Punta Gorda Airport",
    country: "United States"
  },
  {
    city: "Paragould",
    iata: "PGR",
    name: "Kirk Field",
    country: "United States"
  },
  {
    city: "Greenville",
    iata: "PGV",
    name: "Pitt-Greenville Airport",
    country: "United States"
  },
  {
    city: "New Philadelphia",
    iata: "PHD",
    name: "Harry Clever Field",
    country: "United States"
  },
  {
    city: "Newport News",
    iata: "PHF",
    name: "Newport News Williamsburg International Airport",
    country: "United States"
  },
  {
    city: "Andrews",
    iata: "ADR",
    name: "Robert F Swinnie Airport",
    country: "United States"
  },
  {
    city: "Pahokee",
    iata: "PHK",
    name: "Palm Beach County Glades Airport",
    country: "United States"
  },
  {
    city: "Philadelphia",
    iata: "PHL",
    name: "Philadelphia International Airport",
    country: "United States"
  },
  {
    city: "Port Huron",
    iata: "PHN",
    name: "St Clair County International Airport",
    country: "United States"
  },
  {
    city: "Philip",
    iata: "PHP",
    name: "Philip Airport",
    country: "United States"
  },
  {
    city: "Paris",
    iata: "PHT",
    name: "Henry County Airport",
    country: "United States"
  },
  {
    city: "Phoenix",
    iata: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    country: "United States"
  },
  {
    city: "Peoria",
    iata: "PIA",
    name: "General Wayne A. Downing Peoria International Airport",
    country: "United States"
  },
  {
    city: "Moselle",
    iata: "PIB",
    name: "Hattiesburg Laurel Regional Airport",
    country: "United States"
  },
  {
    city: "Pinellas Park",
    iata: "PIE",
    name: "St. Petersburg Clearwater International Airport",
    country: "United States"
  },
  {
    city: "Pocatello",
    iata: "PIH",
    name: "Pocatello Regional Airport",
    country: "United States"
  },
  {
    city: "Pine Mountain",
    iata: "PIM",
    name: "Harris County Airport",
    country: "United States"
  },
  {
    city: "Pierre",
    iata: "PIR",
    name: "Pierre Regional Airport",
    country: "United States"
  },
  {
    city: "Pittsburgh",
    iata: "PIT",
    name: "Pittsburgh International Airport",
    country: "United States"
  },
  {
    city: "Parkersburg (Williamstown)",
    iata: "PKB",
    name: "Mid Ohio Valley Regional Airport",
    country: "United States"
  },
  {
    city: "Park Rapids",
    iata: "PKD",
    name: "Park Rapids Municipal Airport Konshok Field",
    country: "United States"
  },
  {
    city: "Park Falls",
    iata: "PKF",
    name: "Park Falls Municipal Airport",
    country: "United States"
  },
  {
    city: "Kapal",
    iata: "KPL",
    name: "Kapal Airport",
    country: "PG"
  },
  {
    city: "Branson / Hollister",
    iata: "PLK",
    name: "M. Graham Clark Downtown Airport",
    country: "United States"
  },
  {
    city: "Pellston",
    iata: "PLN",
    name: "Pellston Regional Airport of Emmet County Airport",
    country: "United States"
  },
  {
    city: "Pell City",
    iata: "PLR",
    name: "St Clair County Airport",
    country: "United States"
  },
  {
    city: "Pembina",
    iata: "PMB",
    name: "Pembina Municipal Airport",
    country: "United States"
  },
  {
    city: "Palmdale",
    iata: "PMD",
    name: "Palmdale Regional Airport / USAF Plant 42 Airport",
    country: "United States"
  },
  {
    city: "Portsmouth",
    iata: "PMH",
    name: "Greater Portsmouth Regional Airport",
    country: "United States"
  },
  {
    city: "Pompano Beach",
    iata: "PPM",
    name: "Pompano Beach Airpark",
    country: "United States"
  },
  {
    city: "Pinedale",
    iata: "PWY",
    name: "Ralph Wenz Field",
    country: "United States"
  },
  {
    city: "Ponca City",
    iata: "PNC",
    name: "Ponca City Regional Airport",
    country: "United States"
  },
  {
    city: "Philadelphia",
    iata: "PNE",
    name: "Northeast Philadelphia Airport",
    country: "United States"
  },
  {
    city: "Princeton",
    iata: "PNN",
    name: "Princeton Municipal Airport",
    country: "United States"
  },
  {
    city: "Pensacola",
    iata: "PNS",
    name: "Pensacola International Airport",
    country: "United States"
  },
  {
    city: "Fort Bragg",
    iata: "POB",
    name: "Pope Field",
    country: "United States"
  },
  {
    city: "La Verne",
    iata: "POC",
    name: "Brackett Field",
    country: "United States"
  },
  {
    city: "Fort Polk",
    iata: "POE",
    name: "Polk Army Air Field",
    country: "United States"
  },
  {
    city: "Poplar Bluff",
    iata: "POF",
    name: "Poplar Bluff Municipal Airport",
    country: "United States"
  },
  {
    city: "Pocahontas",
    iata: "POH",
    name: "Pocahontas Municipal Airport",
    country: "United States"
  },
  {
    city: "Poughkeepsie",
    iata: "POU",
    name: "Dutchess County Airport",
    country: "United States"
  },
  {
    city: "Powell",
    iata: "POY",
    name: "Powell Municipal Airport",
    country: "United States"
  },
  {
    city: "Pampa",
    iata: "PPA",
    name: "Perry Lefors Field",
    country: "United States"
  },
  {
    city: "Parsons",
    iata: "PPF",
    name: "Tri-City Airport",
    country: "United States"
  },
  {
    city: "La Porte",
    iata: "LPO",
    name: "La Porte Municipal Airport",
    country: "United States"
  },
  {
    city: "Presque Isle",
    iata: "PQI",
    name: "Presque Isle International Airport",
    country: "United States"
  },
  {
    city: "Pascagoula",
    iata: "PGL",
    name: "Trent Lott International Airport",
    country: "United States"
  },
  {
    city: "Port Williams",
    iata: "KPR",
    name: "Port Williams Seaplane Base",
    country: "United States"
  },
  {
    city: "Paso Robles",
    iata: "PRB",
    name: "Paso Robles Municipal Airport",
    country: "United States"
  },
  {
    city: "Prescott",
    iata: "PRC",
    name: "Prescott Regional Airport - Ernest A. Love Field",
    country: "United States"
  },
  {
    city: "Perry",
    iata: "PRO",
    name: "Perry Municipal Airport",
    country: "United States"
  },
  {
    city: "Paris",
    iata: "PRX",
    name: "Cox Field",
    country: "United States"
  },
  {
    city: "Philipsburg",
    iata: "PSB",
    name: "Mid-State Regional Airport",
    country: "United States"
  },
  {
    city: "Pasco",
    iata: "PSC",
    name: "Tri Cities Airport",
    country: "United States"
  },
  {
    city: "Pittsfield",
    iata: "PSF",
    name: "Pittsfield Municipal Airport",
    country: "United States"
  },
  {
    city: "Dublin",
    iata: "PSK",
    name: "New River Valley Airport",
    country: "United States"
  },
  {
    city: "Portsmouth",
    iata: "PSM",
    name: "Portsmouth International Airport at Pease",
    country: "United States"
  },
  {
    city: "Palestine",
    iata: "PSN",
    name: "Palestine Municipal Airport",
    country: "United States"
  },
  {
    city: "Pagosa Springs",
    iata: "PGO",
    name: "Stevens Field",
    country: "United States"
  },
  {
    city: "Palm Springs",
    iata: "PSP",
    name: "Palm Springs International Airport",
    country: "United States"
  },
  {
    city: "Palacios",
    iata: "PSX",
    name: "Palacios Municipal Airport",
    country: "United States"
  },
  {
    city: "Petersburg",
    iata: "PTB",
    name: "Dinwiddie County Airport",
    country: "United States"
  },
  {
    city: "Pontiac",
    iata: "PTK",
    name: "Oakland County International Airport",
    country: "United States"
  },
  {
    city: "Patterson",
    iata: "PTN",
    name: "Harry P Williams Memorial Airport",
    country: "United States"
  },
  {
    city: "Pittsburg",
    iata: "PTS",
    name: "Atkinson Municipal Airport",
    country: "United States"
  },
  {
    city: "Pratt",
    iata: "PTT",
    name: "Pratt Regional Airport",
    country: "United States"
  },
  {
    city: "Porterville",
    iata: "PTV",
    name: "Porterville Municipal Airport",
    country: "United States"
  },
  {
    city: "Pottstown",
    iata: "PTW",
    name: "Heritage Field",
    country: "United States"
  },
  {
    city: "Pueblo",
    iata: "PUB",
    name: "Pueblo Memorial Airport",
    country: "United States"
  },
  {
    city: "Price",
    iata: "PUC",
    name: "Carbon County Regional Airport / Buck Davis Field",
    country: "United States"
  },
  {
    city: "Pullman",
    iata: "PUW",
    name: "Pullman-Moscow Regional Airport",
    country: "United States"
  },
  {
    city: "Provincetown",
    iata: "PVC",
    name: "Provincetown Municipal Airport",
    country: "United States"
  },
  {
    city: "Providence/Warwick",
    iata: "PVD",
    name: "Rhode Island T. F. Green International Airport",
    country: "United States"
  },
  {
    city: "Placerville",
    iata: "PVF",
    name: "Placerville Airport",
    country: "United States"
  },
  {
    city: "Provo",
    iata: "PVU",
    name: "Provo Municipal Airport",
    country: "United States"
  },
  {
    city: "Plainview",
    iata: "PVW",
    name: "Hale County Airport",
    country: "United States"
  },
  {
    city: "Oklahoma City",
    iata: "PWA",
    name: "Wiley Post Airport",
    country: "United States"
  },
  {
    city: "Plentywood",
    iata: "PWD",
    name: "Sher-Wood Airport",
    country: "United States"
  },
  {
    city: "Chicago/Prospect Heights/Wheeling",
    iata: "PWK",
    name: "Chicago Executive Airport",
    country: "United States"
  },
  {
    city: "Portland",
    iata: "PWM",
    name: "Portland International Jetport",
    country: "United States"
  },
  {
    city: "Bremerton",
    iata: "PWT",
    name: "Bremerton National Airport",
    country: "United States"
  },
  {
    city: "Port Bailey",
    iata: "KPY",
    name: "Port Bailey Seaplane Base",
    country: "United States"
  },
  {
    city: "Plymouth",
    iata: "PYM",
    name: "Plymouth Municipal Airport",
    country: "United States"
  },
  {
    city: "Chuja, Hach’uja-do (Chujado Islands)",
    iata: "JCJ",
    name: "Chuja Port Heliport",
    country: "South Korea"
  },
  {
    city: "Racine",
    iata: "RAC",
    name: "John H Batten Airport",
    country: "United States"
  },
  {
    city: "Riverside",
    iata: "RAL",
    name: "Riverside Municipal Airport",
    country: "United States"
  },
  {
    city: "Rapid City",
    iata: "RAP",
    name: "Rapid City Regional Airport",
    country: "United States"
  },
  {
    city: "Dallas",
    iata: "RBD",
    name: "Dallas Executive Airport",
    country: "United States"
  },
  {
    city: "Roseburg",
    iata: "RBG",
    name: "Roseburg Regional Airport",
    country: "United States"
  },
  {
    city: "Red Bluff",
    iata: "RBL",
    name: "Red Bluff Municipal Airport",
    country: "United States"
  },
  {
    city: "Walterboro",
    iata: "RBW",
    name: "Lowcountry Regional Airport",
    country: "United States"
  },
  {
    city: "Rapid City",
    iata: "RCA",
    name: "Ellsworth Air Force Base",
    country: "United States"
  },
  {
    city: "Rockdale",
    iata: "RCK",
    name: "H H Coffield Regional Airport",
    country: "United States"
  },
  {
    city: "Rochester",
    iata: "RCR",
    name: "Fulton County Airport",
    country: "United States"
  },
  {
    city: "Redding",
    iata: "RDD",
    name: "Redding Municipal Airport",
    country: "United States"
  },
  {
    city: "Reading",
    iata: "RDG",
    name: "Reading Regional Airport (Carl A Spaatz Field)",
    country: "United States"
  },
  {
    city: "Redmond",
    iata: "RDM",
    name: "Roberts Field",
    country: "United States"
  },
  {
    city: "Grand Forks",
    iata: "RDR",
    name: "Grand Forks Air Force Base",
    country: "United States"
  },
  {
    city: "Raleigh/Durham",
    iata: "RDU",
    name: "Raleigh-Durham International Airport",
    country: "United States"
  },
  {
    city: "Rome",
    iata: "REO",
    name: "Rome State Airport",
    country: "United States"
  },
  {
    city: "Chicago/Rockford",
    iata: "RFD",
    name: "Chicago Rockford International Airport",
    country: "United States"
  },
  {
    city: "Refugio",
    iata: "RFG",
    name: "Rooke Field",
    country: "United States"
  },
  {
    city: "Rhinelander",
    iata: "RHI",
    name: "Rhinelander Oneida County Airport",
    country: "United States"
  },
  {
    city: "San Jose",
    iata: "RHV",
    name: "Reid-Hillview Airport of Santa Clara County",
    country: "United States"
  },
  {
    city: "Richmond",
    iata: "RIC",
    name: "Richmond International Airport",
    country: "United States"
  },
  {
    city: "Richmond",
    iata: "RID",
    name: "Richmond Municipal Airport",
    country: "United States"
  },
  {
    city: "Richfield",
    iata: "RIF",
    name: "Richfield Municipal Airport",
    country: "United States"
  },
  {
    city: "Rifle",
    iata: "RIL",
    name: "Garfield County Regional Airport",
    country: "United States"
  },
  {
    city: "Riverside",
    iata: "RIR",
    name: "Flabob Airport",
    country: "United States"
  },
  {
    city: "Riverside",
    iata: "RIV",
    name: "March Air Reserve Base",
    country: "United States"
  },
  {
    city: "Riverton",
    iata: "RIW",
    name: "Central Wyoming Regional Airport",
    country: "United States"
  },
  {
    city: "Rockland",
    iata: "RKD",
    name: "Knox County Regional Airport",
    country: "United States"
  },
  {
    city: "Rockport",
    iata: "RKP",
    name: "Aransas County Airport",
    country: "United States"
  },
  {
    city: "Poteau",
    iata: "RKR",
    name: "Robert S Kerr Airport",
    country: "United States"
  },
  {
    city: "Rock Springs",
    iata: "RKS",
    name: "Southwest Wyoming Regional Airport",
    country: "United States"
  },
  {
    city: "Rockwood",
    iata: "RKW",
    name: "Rockwood Municipal Airport",
    country: "United States"
  },
  {
    city: "Richland",
    iata: "RLD",
    name: "Richland Airport",
    country: "United States"
  },
  {
    city: "Rome",
    iata: "RME",
    name: "Griffiss International Airport",
    country: "United States"
  },
  {
    city: "Rome",
    iata: "RMG",
    name: "Richard B Russell Airport",
    country: "United States"
  },
  {
    city: "Mc Minnville",
    iata: "RNC",
    name: "Warren County Memorial Airport",
    country: "United States"
  },
  {
    city: "Universal City",
    iata: "RND",
    name: "Randolph Air Force Base",
    country: "United States"
  },
  {
    city: "New Richmond",
    iata: "RNH",
    name: "New Richmond Regional Airport",
    country: "United States"
  },
  {
    city: "Reno",
    iata: "RNO",
    name: "Reno Tahoe International Airport",
    country: "United States"
  },
  {
    city: "Renton",
    iata: "RNT",
    name: "Renton Municipal Airport",
    country: "United States"
  },
  {
    city: "Roanoke",
    iata: "ROA",
    name: "Roanoke–Blacksburg Regional Airport",
    country: "United States"
  },
  {
    city: "Rochester",
    iata: "ROC",
    name: "Frederick Douglass Greater Rochester International Airport",
    country: "United States"
  },
  {
    city: "Rogers",
    iata: "ROG",
    name: "Rogers Municipal Airport-Carter Field",
    country: "United States"
  },
  {
    city: "Roswell",
    iata: "ROW",
    name: "Roswell Air Center Airport",
    country: "United States"
  },
  {
    city: "Roseau",
    iata: "ROX",
    name: "Roseau Municipal Rudy Billberg Field",
    country: "United States"
  },
  {
    city: "Rice Lake",
    iata: "RIE",
    name: "Rice Lake Regional Airport - Carl's Field",
    country: "United States"
  },
  {
    city: "Roundup",
    iata: "RPX",
    name: "Roundup Airport",
    country: "United States"
  },
  {
    city: "Big Rapids",
    iata: "WBR",
    name: "Roben Hood Airport",
    country: "United States"
  },
  {
    city: "El Reno",
    iata: "RQO",
    name: "El Reno Regional Airport",
    country: "United States"
  },
  {
    city: "Merrill",
    iata: "RRL",
    name: "Merrill Municipal Airport",
    country: "United States"
  },
  {
    city: "Warroad",
    iata: "RRT",
    name: "Warroad International Memorial Airport",
    country: "United States"
  },
  {
    city: "Russell",
    iata: "RSL",
    name: "Russell Municipal Airport",
    country: "United States"
  },
  {
    city: "Ruston",
    iata: "RSN",
    name: "Ruston Regional Airport",
    country: "United States"
  },
  {
    city: "Rochester",
    iata: "RST",
    name: "Rochester International Airport",
    country: "United States"
  },
  {
    city: "Fort Myers",
    iata: "RSW",
    name: "Southwest Florida International Airport",
    country: "United States"
  },
  {
    city: "Raton",
    iata: "RTN",
    name: "Raton Municipal Airport / Crews Field",
    country: "United States"
  },
  {
    city: "Salisbury",
    iata: "SRW",
    name: "Mid-Carolina Regional Airport",
    country: "United States"
  },
  {
    city: "Rutland",
    iata: "RUT",
    name: "Rutland - Southern Vermont Regional Airport",
    country: "United States"
  },
  {
    city: "Reedsville",
    iata: "RED",
    name: "Mifflin County Airport",
    country: "United States"
  },
  {
    city: "Tulsa",
    iata: "RVS",
    name: "Tulsa Riverside Airport",
    country: "United States"
  },
  {
    city: "Redwood Falls",
    iata: "RWF",
    name: "Redwood Falls Municipal Airport",
    country: "United States"
  },
  {
    city: "Rocky Mount",
    iata: "RWI",
    name: "Rocky Mount Wilson Regional Airport",
    country: "United States"
  },
  {
    city: "Rawlins",
    iata: "RWL",
    name: "Rawlins Municipal Airport/Harvey Field",
    country: "United States"
  },
  {
    city: "Rexburg",
    iata: "RXE",
    name: "Rexburg Madison County Airport",
    country: "United States"
  },
  {
    city: "Rensselaer",
    iata: "RNZ",
    name: "Jasper County Airport",
    country: "United States"
  },
  {
    city: "Ashland",
    iata: "AHM",
    name: "Ashland Municipal Airport Sumner Parker Field",
    country: "United States"
  },
  {
    city: "Bandon",
    iata: "BDY",
    name: "Bandon State Airport",
    country: "United States"
  },
  {
    city: "Sunriver",
    iata: "SUO",
    name: "Sunriver Airport",
    country: "United States"
  },
  {
    city: "Madras",
    iata: "MDJ",
    name: "Madras Municipal Airport",
    country: "United States"
  },
  {
    city: "Prineville",
    iata: "PRZ",
    name: "Prineville Airport",
    country: "United States"
  },
  {
    city: "Saratoga",
    iata: "SAA",
    name: "Shively Field",
    country: "United States"
  },
  {
    city: "Sacramento",
    iata: "SAC",
    name: "Sacramento Executive Airport",
    country: "United States"
  },
  {
    city: "Safford",
    iata: "SAD",
    name: "Safford Regional Airport",
    country: "United States"
  },
  {
    city: "Santa Fe",
    iata: "SAF",
    name: "Santa Fe Municipal Airport",
    country: "United States"
  },
  {
    city: "San Diego",
    iata: "SAN",
    name: "San Diego International Airport",
    country: "United States"
  },
  {
    city: "Sparta",
    iata: "SAR",
    name: "Sparta Community Airport - Hunter Field",
    country: "United States"
  },
  {
    city: "Salton City",
    iata: "SAS",
    name: "Salton Sea Airport",
    country: "United States"
  },
  {
    city: "San Antonio",
    iata: "SAT",
    name: "San Antonio International Airport",
    country: "United States"
  },
  {
    city: "Savannah",
    iata: "SAV",
    name: "Savannah Hilton Head International Airport",
    country: "United States"
  },
  {
    city: "Gwinn",
    iata: "MQT",
    name: "Marquette/Sawyer International Airport",
    country: "United States"
  },
  {
    city: "Santa Barbara",
    iata: "SBA",
    name: "Santa Barbara Municipal Airport",
    country: "United States"
  },
  {
    city: "San Bernardino",
    iata: "SBD",
    name: "San Bernardino International Airport",
    country: "United States"
  },
  {
    city: "Sheboygan",
    iata: "SBM",
    name: "Sheboygan County Memorial Airport",
    country: "United States"
  },
  {
    city: "South Bend",
    iata: "SBN",
    name: "South Bend International Airport",
    country: "United States"
  },
  {
    city: "San Luis Obispo",
    iata: "SBP",
    name: "San Luis County Regional Airport",
    country: "United States"
  },
  {
    city: "Steamboat Springs",
    iata: "SBS",
    name: "Steamboat Springs Bob Adams Field",
    country: "United States"
  },
  {
    city: "Shelby",
    iata: "SBX",
    name: "Shelby Airport",
    country: "United States"
  },
  {
    city: "Salisbury",
    iata: "SBY",
    name: "Salisbury Ocean City Wicomico Regional Airport",
    country: "United States"
  },
  {
    city: "Scribner",
    iata: "SCB",
    name: "Scribner State Airport",
    country: "United States"
  },
  {
    city: "Schenectady",
    iata: "SCH",
    name: "Schenectady County Airport",
    country: "United States"
  },
  {
    city: "Stockton",
    iata: "SCK",
    name: "Stockton Metropolitan Airport",
    country: "United States"
  },
  {
    city: "Louisville",
    iata: "SDF",
    name: "Louisville Muhammad Ali International Airport",
    country: "United States"
  },
  {
    city: "Scottsdale",
    iata: "SCF",
    name: "Scottsdale Airport",
    country: "United States"
  },
  {
    city: "San Diego",
    iata: "SDM",
    name: "Brown Field Municipal Airport",
    country: "United States"
  },
  {
    city: "Sidney",
    iata: "SDY",
    name: "Sidney - Richland Regional Airport",
    country: "United States"
  },
  {
    city: "Seattle",
    iata: "SEA",
    name: "Seattle–Tacoma International Airport",
    country: "United States"
  },
  {
    city: "San Diego/El Cajon",
    iata: "SEE",
    name: "Gillespie Field",
    country: "United States"
  },
  {
    city: "Sebring",
    iata: "SEF",
    name: "Sebring Regional Airport",
    country: "United States"
  },
  {
    city: "Selinsgrove",
    iata: "SEG",
    name: "Penn Valley Airport",
    country: "United States"
  },
  {
    city: "Selma",
    iata: "SEM",
    name: "Craig Field",
    country: "United States"
  },
  {
    city: "Stephenville",
    iata: "SEP",
    name: "Stephenville Clark Regional Airport",
    country: "United States"
  },
  {
    city: "Seymour",
    iata: "SER",
    name: "Freeman Municipal Airport",
    country: "United States"
  },
  {
    city: "Sedona",
    iata: "SDX",
    name: "Sedona Airport",
    country: "United States"
  },
  {
    city: "Orlando",
    iata: "SFB",
    name: "Orlando Sanford International Airport",
    country: "United States"
  },
  {
    city: "Spokane",
    iata: "SFF",
    name: "Felts Field",
    country: "United States"
  },
  {
    city: "Sanford",
    iata: "SFM",
    name: "Sanford Seacoast Regional Airport",
    country: "United States"
  },
  {
    city: "San Francisco",
    iata: "SFO",
    name: "San Francisco International Airport",
    country: "United States"
  },
  {
    city: "Pawtucket",
    iata: "SFZ",
    name: "North Central State Airport",
    country: "United States"
  },
  {
    city: "Springfield",
    iata: "SGF",
    name: "Springfield Branson National Airport",
    country: "United States"
  },
  {
    city: "Springfield",
    iata: "SGH",
    name: "Springfield-Beckley Municipal Airport",
    country: "United States"
  },
  {
    city: "St Augustine",
    iata: "UST",
    name: "Northeast Florida Regional Airport",
    country: "United States"
  },
  {
    city: "Houston",
    iata: "SGR",
    name: "Sugar Land Regional Airport",
    country: "United States"
  },
  {
    city: "Stuttgart",
    iata: "SGT",
    name: "Stuttgart Municipal Airport / Carl Humphrey Field",
    country: "United States"
  },
  {
    city: "St George",
    iata: "SGU",
    name: "St George Regional Airport",
    country: "United States"
  },
  {
    city: "Weyers Cave",
    iata: "SHD",
    name: "Shenandoah Valley Regional Airport",
    country: "United States"
  },
  {
    city: "Shelton",
    iata: "SHN",
    name: "Sanderson Field",
    country: "United States"
  },
  {
    city: "Sheridan",
    iata: "SHR",
    name: "Sheridan County Airport",
    country: "United States"
  },
  {
    city: "Shreveport",
    iata: "SHV",
    name: "Shreveport Regional Airport",
    country: "United States"
  },
  {
    city: "Sikeston",
    iata: "SIK",
    name: "Sikeston Memorial Municipal Airport",
    country: "United States"
  },
  {
    city: "Sullivan",
    iata: "SIV",
    name: "Sullivan County Airport",
    country: "United States"
  },
  {
    city: "Montague",
    iata: "SIY",
    name: "Siskiyou County Airport",
    country: "United States"
  },
  {
    city: "San Jose",
    iata: "SJC",
    name: "Norman Y. Mineta San Jose International Airport",
    country: "United States"
  },
  {
    city: "St Johns",
    iata: "SJN",
    name: "St Johns Industrial Air Park",
    country: "United States"
  },
  {
    city: "San Angelo",
    iata: "SJT",
    name: "San Angelo Regional Mathis Field",
    country: "United States"
  },
  {
    city: "Spokane",
    iata: "SKA",
    name: "Fairchild Air Force Base",
    country: "United States"
  },
  {
    city: "San Antonio",
    iata: "SKF",
    name: "Lackland Air Force Base",
    country: "United States"
  },
  {
    city: "Taos",
    iata: "TSM",
    name: "Taos Regional Airport",
    country: "United States"
  },
  {
    city: "Storm Lake",
    iata: "SLB",
    name: "Storm Lake Municipal Airport",
    country: "United States"
  },
  {
    city: "Salt Lake City",
    iata: "SLC",
    name: "Salt Lake City International Airport",
    country: "United States"
  },
  {
    city: "Salem",
    iata: "SLE",
    name: "Salem-Willamette Valley Airport/McNary Field",
    country: "United States"
  },
  {
    city: "Siloam Springs",
    iata: "SLG",
    name: "Smith Field",
    country: "United States"
  },
  {
    city: "Saranac Lake",
    iata: "SLK",
    name: "Adirondack Regional Airport",
    country: "United States"
  },
  {
    city: "Salina",
    iata: "SLN",
    name: "Salina Municipal Airport",
    country: "United States"
  },
  {
    city: "Salem",
    iata: "SLO",
    name: "Salem–Leckrone Airport",
    country: "United States"
  },
  {
    city: "Sulphur Springs",
    iata: "SLR",
    name: "Sulphur Springs Municipal Airport",
    country: "United States"
  },
  {
    city: "Fort Wayne",
    iata: "SMD",
    name: "Smith Field",
    country: "United States"
  },
  {
    city: "Somerset",
    iata: "SME",
    name: "Lake Cumberland Regional Airport",
    country: "United States"
  },
  {
    city: "Sacramento",
    iata: "SMF",
    name: "Sacramento International Airport",
    country: "United States"
  },
  {
    city: "Salmon",
    iata: "SMN",
    name: "Lemhi County Airport",
    country: "United States"
  },
  {
    city: "Santa Monica",
    iata: "SMO",
    name: "Santa Monica Municipal Airport",
    country: "United States"
  },
  {
    city: "Sumter",
    iata: "SUM",
    name: "Sumter Airport",
    country: "United States"
  },
  {
    city: "Santa Maria",
    iata: "SMX",
    name: "Santa Maria Public Airport Captain G Allan Hancock Field",
    country: "United States"
  },
  {
    city: "Santa Ana",
    iata: "SNA",
    name: "John Wayne Orange County International Airport",
    country: "United States"
  },
  {
    city: "Snyder",
    iata: "SNK",
    name: "Winston Field",
    country: "United States"
  },
  {
    city: "Shawnee",
    iata: "SNL",
    name: "Shawnee Regional Airport",
    country: "United States"
  },
  {
    city: "Salinas",
    iata: "SNS",
    name: "Salinas Municipal Airport",
    country: "United States"
  },
  {
    city: "Sidney",
    iata: "SNY",
    name: "Sidney Municipal Airport Lloyd W Carr Field",
    country: "United States"
  },
  {
    city: "Carthage",
    iata: "SOP",
    name: "Moore County Airport",
    country: "United States"
  },
  {
    city: "Show Low",
    iata: "SOW",
    name: "Show Low Regional Airport",
    country: "United States"
  },
  {
    city: "Spartanburg",
    iata: "SPA",
    name: "Spartanburg Downtown Memorial Airport",
    country: "United States"
  },
  {
    city: "Spearfish",
    iata: "SPF",
    name: "Black Hills Airport-Clyde Ice Field",
    country: "United States"
  },
  {
    city: "St Petersburg",
    iata: "SPG",
    name: "Albert Whitted Airport",
    country: "United States"
  },
  {
    city: "Springfield",
    iata: "SPI",
    name: "Abraham Lincoln Capital Airport",
    country: "United States"
  },
  {
    city: "Wichita Falls",
    iata: "SPS",
    name: "Wichita Falls Municipal Airport / Sheppard Air Force Base",
    country: "United States"
  },
  {
    city: "Spencer",
    iata: "SPW",
    name: "Spencer Municipal Airport",
    country: "United States"
  },
  {
    city: "Rock Falls",
    iata: "SQI",
    name: "Whiteside County Airport - Joseph H Bittorf Field",
    country: "United States"
  },
  {
    city: "San Carlos",
    iata: "SQL",
    name: "San Carlos Airport",
    country: "United States"
  },
  {
    city: "Searcy",
    iata: "SRC",
    name: "Searcy Municipal Airport",
    country: "United States"
  },
  {
    city: "Sarasota/Bradenton",
    iata: "SRQ",
    name: "Sarasota Bradenton International Airport",
    country: "United States"
  },
  {
    city: "Alto",
    iata: "RUI",
    name: "Sierra Blanca Regional Airport",
    country: "United States"
  },
  {
    city: "Sumter",
    iata: "SSC",
    name: "Shaw Air Force Base",
    country: "United States"
  },
  {
    city: "San Antonio",
    iata: "SSF",
    name: "Stinson Municipal Airport",
    country: "United States"
  },
  {
    city: "St Simons Island",
    iata: "SSI",
    name: "St Simons Island Airport",
    country: "United States"
  },
  {
    city: "Saint Cloud",
    iata: "STC",
    name: "Saint Cloud Regional Airport",
    country: "United States"
  },
  {
    city: "Stevens Point",
    iata: "STE",
    name: "Stevens Point Municipal Airport",
    country: "United States"
  },
  {
    city: "St Joseph",
    iata: "STJ",
    name: "Rosecrans Memorial Airport",
    country: "United States"
  },
  {
    city: "Sterling",
    iata: "STK",
    name: "Sterling Municipal Airport",
    country: "United States"
  },
  {
    city: "St Louis",
    iata: "STL",
    name: "St. Louis Lambert International Airport",
    country: "United States"
  },
  {
    city: "Saint Paul",
    iata: "STP",
    name: "Saint Paul Downtown Holman Field",
    country: "United States"
  },
  {
    city: "Santa Rosa",
    iata: "STS",
    name: "Charles M. Schulz Sonoma County Airport",
    country: "United States"
  },
  {
    city: "Stuart",
    iata: "SUA",
    name: "Witham Field",
    country: "United States"
  },
  {
    city: "Stroud",
    iata: "SUD",
    name: "Stroud Municipal Airport",
    country: "United States"
  },
  {
    city: "Sturgeon Bay",
    iata: "SUE",
    name: "Door County Cherryland Airport",
    country: "United States"
  },
  {
    city: "Hailey",
    iata: "SUN",
    name: "Friedman Memorial Airport",
    country: "United States"
  },
  {
    city: "St Louis",
    iata: "SUS",
    name: "Spirit of St Louis Airport",
    country: "United States"
  },
  {
    city: "Fairfield",
    iata: "SUU",
    name: "Travis Air Force Base",
    country: "United States"
  },
  {
    city: "Superior",
    iata: "SUW",
    name: "Richard I Bong Memorial Airport",
    country: "United States"
  },
  {
    city: "Sioux City",
    iata: "SUX",
    name: "Sioux Gateway Airport / Brigadier General Bud Day Field",
    country: "United States"
  },
  {
    city: "Silver City",
    iata: "SVC",
    name: "Grant County Airport",
    country: "United States"
  },
  {
    city: "Susanville",
    iata: "SVE",
    name: "Susanville Municipal Airport",
    country: "United States"
  },
  {
    city: "Statesville",
    iata: "SVH",
    name: "Statesville Regional Airport",
    country: "United States"
  },
  {
    city: "Savannah",
    iata: "SVN",
    name: "Hunter Army Air Field",
    country: "United States"
  },
  {
    city: "Newburgh",
    iata: "SWF",
    name: "New York Stewart International Airport",
    country: "United States"
  },
  {
    city: "Stillwater",
    iata: "SWO",
    name: "Stillwater Regional Airport",
    country: "United States"
  },
  {
    city: "Sweetwater",
    iata: "SWW",
    name: "Avenger Field",
    country: "United States"
  },
  {
    city: "Shelbyville",
    iata: "SYI",
    name: "Bomar Field / Shelbyville Municipal Airport",
    country: "United States"
  },
  {
    city: "Dennison",
    iata: "SYN",
    name: "Stanton Airfield",
    country: "United States"
  },
  {
    city: "Syracuse",
    iata: "SYR",
    name: "Syracuse Hancock International Airport",
    country: "United States"
  },
  {
    city: "Sylvester",
    iata: "SYV",
    name: "Sylvester Airport",
    country: "United States"
  },
  {
    city: "Knob Noster",
    iata: "SZL",
    name: "Whiteman Air Force Base",
    country: "United States"
  },
  {
    city: "Santa Cruz Island",
    iata: "SZN",
    name: "Santa Cruz Island Airport",
    country: "United States"
  },
  {
    city: "Santa Paula",
    iata: "SZP",
    name: "Santa Paula Airport",
    country: "United States"
  },
  {
    city: "Tuba City",
    iata: "TBC",
    name: "Tuba City Airport",
    country: "United States"
  },
  {
    city: "Trinidad",
    iata: "TAD",
    name: "Perry Stokes Airport",
    country: "United States"
  },
  {
    city: "Thorne Bay",
    iata: "KTB",
    name: "Thorne Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Fort Leonard Wood",
    iata: "TBN",
    name: "Waynesville-St. Robert Regional Airport-Forney Field",
    country: "United States"
  },
  {
    city: "Statesboro",
    iata: "TBR",
    name: "Statesboro Bulloch County Airport",
    country: "United States"
  },
  {
    city: "Katiola",
    iata: "KTC",
    name: "Katiola Airport",
    country: "CI"
  },
  {
    city: "Tucumcari",
    iata: "TCC",
    name: "Tucumcari Municipal Airport",
    country: "United States"
  },
  {
    city: "Tuscaloosa",
    iata: "TCL",
    name: "Tuscaloosa National Airport",
    country: "United States"
  },
  {
    city: "Tacoma",
    iata: "TCM",
    name: "McChord Air Force Base",
    country: "United States"
  },
  {
    city: "Truth or Consequences",
    iata: "TCS",
    name: "Truth or Consequences Municipal Airport",
    country: "United States"
  },
  {
    city: "Toledo",
    iata: "TDO",
    name: "Ed Carlson Memorial Field South Lewis County Airport",
    country: "United States"
  },
  {
    city: "Amarillo",
    iata: "TDW",
    name: "Tradewind Airport",
    country: "United States"
  },
  {
    city: "Toledo",
    iata: "TDZ",
    name: "Toledo Executive Airport",
    country: "United States"
  },
  {
    city: "Teterboro",
    iata: "TEB",
    name: "Teterboro Airport",
    country: "United States"
  },
  {
    city: "Telluride",
    iata: "TEX",
    name: "Telluride Regional Airport",
    country: "United States"
  },
  {
    city: "Tullahoma",
    iata: "THA",
    name: "Tullahoma Regional Airport William Northern Field",
    country: "United States"
  },
  {
    city: "Thompson Falls",
    iata: "THM",
    name: "Thompson Falls Airport",
    country: "United States"
  },
  {
    city: "Thomasville",
    iata: "THV",
    name: "York Airport",
    country: "United States"
  },
  {
    city: "Oklahoma City",
    iata: "TIK",
    name: "Tinker Air Force Base",
    country: "United States"
  },
  {
    city: "Tacoma",
    iata: "TIW",
    name: "Tacoma Narrows Airport",
    country: "United States"
  },
  {
    city: "Titusville",
    iata: "TIX",
    name: "Space Coast Regional Airport",
    country: "United States"
  },
  {
    city: "Kennett",
    iata: "KNT",
    name: "Kennett Memorial Airport",
    country: "United States"
  },
  {
    city: "Tallahassee",
    iata: "TLH",
    name: "Tallahassee International Airport",
    country: "United States"
  },
  {
    city: "Tulare",
    iata: "TLR",
    name: "Mefford Field",
    country: "United States"
  },
  {
    city: "Tifton",
    iata: "TMA",
    name: "Henry Tift Myers Airport",
    country: "United States"
  },
  {
    city: "Miami",
    iata: "TMB",
    name: "Miami Executive Airport",
    country: "United States"
  },
  {
    city: "Tillamook",
    iata: "OTK",
    name: "Tillamook Airport",
    country: "United States"
  },
  {
    city: "Twentynine Palms",
    iata: "TNP",
    name: "Twentynine Palms Airport",
    country: "United States"
  },
  {
    city: "Miami",
    iata: "TNT",
    name: "Dade Collier Training and Transition Airport",
    country: "United States"
  },
  {
    city: "Newton",
    iata: "TNU",
    name: "Newton Municipal Airport",
    country: "United States"
  },
  {
    city: "Tonopah",
    iata: "XSD",
    name: "Tonopah Test Range Airport",
    country: "United States"
  },
  {
    city: "Torrance",
    iata: "TOA",
    name: "Zamperini Field",
    country: "United States"
  },
  {
    city: "Toccoa",
    iata: "TOC",
    name: "Toccoa Airport - R.G. Letourneau Field",
    country: "United States"
  },
  {
    city: "Troy",
    iata: "TOI",
    name: "Troy Municipal Airport at N Kenneth Campbell Field",
    country: "United States"
  },
  {
    city: "Toledo",
    iata: "TOL",
    name: "Eugene F. Kranz Toledo Express Airport",
    country: "United States"
  },
  {
    city: "Topeka",
    iata: "TOP",
    name: "Philip Billard Municipal Airport",
    country: "United States"
  },
  {
    city: "Torrington",
    iata: "TOR",
    name: "Torrington Municipal Airport",
    country: "United States"
  },
  {
    city: "Tampa",
    iata: "TPA",
    name: "Tampa International Airport",
    country: "United States"
  },
  {
    city: "Tampa",
    iata: "TPF",
    name: "Peter O Knight Airport",
    country: "United States"
  },
  {
    city: "Tonopah",
    iata: "TPH",
    name: "Tonopah Airport",
    country: "United States"
  },
  {
    city: "Temple",
    iata: "TPL",
    name: "Draughon Miller Central Texas Regional Airport",
    country: "United States"
  },
  {
    city: "Blountville",
    iata: "TRI",
    name: "Tri-Cities Regional TN/VA Airport",
    country: "United States"
  },
  {
    city: "Truckee",
    iata: "TKF",
    name: "Truckee Tahoe Airport",
    country: "United States"
  },
  {
    city: "Terrell",
    iata: "TRL",
    name: "Terrell Municipal Airport",
    country: "United States"
  },
  {
    city: "Palm Springs",
    iata: "TRM",
    name: "Jacqueline Cochran Regional Airport",
    country: "United States"
  },
  {
    city: "Trenton",
    iata: "TRX",
    name: "Trenton Municipal Airport",
    country: "United States"
  },
  {
    city: "Tehachapi",
    iata: "TSP",
    name: "Tehachapi Municipal Airport",
    country: "United States"
  },
  {
    city: "Portland",
    iata: "TTD",
    name: "Portland Troutdale Airport",
    country: "United States"
  },
  {
    city: "Ewing Township",
    iata: "TTN",
    name: "Trenton Mercer Airport",
    country: "United States"
  },
  {
    city: "Tulsa",
    iata: "TUL",
    name: "Tulsa International Airport",
    country: "United States"
  },
  {
    city: "Tupelo",
    iata: "TUP",
    name: "Tupelo Regional Airport",
    country: "United States"
  },
  {
    city: "Tucson",
    iata: "TUS",
    name: "Tucson International Airport",
    country: "United States"
  },
  {
    city: "Traverse City",
    iata: "TVC",
    name: "Cherry Capital Airport",
    country: "United States"
  },
  {
    city: "Thief River Falls",
    iata: "TVF",
    name: "Thief River Falls Regional Airport",
    country: "United States"
  },
  {
    city: "Thomasville",
    iata: "TVI",
    name: "Thomasville Regional Airport",
    country: "United States"
  },
  {
    city: "South Lake Tahoe",
    iata: "TVL",
    name: "Lake Tahoe Airport",
    country: "United States"
  },
  {
    city: "Twin Falls",
    iata: "TWF",
    name: "Joslin Field Magic Valley Regional Airport",
    country: "United States"
  },
  {
    city: "Texarkana",
    iata: "TXK",
    name: "Texarkana Regional Airport (Webb Field)",
    country: "United States"
  },
  {
    city: "Taylor",
    iata: "TYZ",
    name: "Taylor Airport",
    country: "United States"
  },
  {
    city: "Tyler",
    iata: "TYR",
    name: "Tyler Pounds Regional Airport",
    country: "United States"
  },
  {
    city: "Knoxville/Maryville",
    iata: "TYS",
    name: "McGhee Tyson Airport",
    country: "United States"
  },
  {
    city: "Bullfrog",
    iata: "BFG",
    name: "Bullfrog Basin Airport",
    country: "United States"
  },
  {
    city: "Nephi",
    iata: "NPH",
    name: "J. Randy McKnight Nephi Municipal Airport",
    country: "United States"
  },
  {
    city: "Green River",
    iata: "RVR",
    name: "Green River Municipal Airport",
    country: "United States"
  },
  {
    city: "Panguitch",
    iata: "PNU",
    name: "Panguitch Municipal Airport",
    country: "United States"
  },
  {
    city: "Cascade",
    iata: "ICS",
    name: "Cascade Airport",
    country: "United States"
  },
  {
    city: "Columbus",
    iata: "UBS",
    name: "Columbus Lowndes County Airport",
    country: "United States"
  },
  {
    city: "Union City",
    iata: "UCY",
    name: "Everett-Stewart Regional Airport",
    country: "United States"
  },
  {
    city: "Bermuda Dunes",
    iata: "UDD",
    name: "Bermuda Dunes Airport",
    country: "United States"
  },
  {
    city: "Waukesha",
    iata: "UES",
    name: "Waukesha County Airport",
    country: "United States"
  },
  {
    city: "Chicago/Waukegan",
    iata: "UGN",
    name: "Waukegan National Airport",
    country: "United States"
  },
  {
    city: "Quillayute",
    iata: "UIL",
    name: "Quillayute Airport",
    country: "United States"
  },
  {
    city: "Quincy",
    iata: "UIN",
    name: "Quincy Regional Airport Baldwin Field",
    country: "United States"
  },
  {
    city: "North Wilkesboro",
    iata: "IKB",
    name: "Wilkes County Airport",
    country: "United States"
  },
  {
    city: "Ukiah",
    iata: "UKI",
    name: "Ukiah Municipal Airport",
    country: "United States"
  },
  {
    city: "Quakertown",
    iata: "UKT",
    name: "Quakertown Airport",
    country: "United States"
  },
  {
    city: "New Ulm",
    iata: "ULM",
    name: "New Ulm Municipal Airport",
    country: "United States"
  },
  {
    city: "Albany",
    iata: "ATO",
    name: "Ohio University Airport",
    country: "United States"
  },
  {
    city: "Juneau",
    iata: "UNU",
    name: "Dodge County Airport",
    country: "United States"
  },
  {
    city: "State College",
    iata: "SCE",
    name: "State College Regional Airport",
    country: "United States"
  },
  {
    city: "Sewanee",
    iata: "UOS",
    name: "Franklin County Airport",
    country: "United States"
  },
  {
    city: "Oxford",
    iata: "UOX",
    name: "University Oxford Airport",
    country: "United States"
  },
  {
    city: "Kupiano",
    iata: "KUP",
    name: "Kupiano Airport",
    country: "PG"
  },
  {
    city: "Tunica",
    iata: "UTM",
    name: "Tunica Municipal Airport",
    country: "United States"
  },
  {
    city: "Huntsville",
    iata: "HTV",
    name: "Huntsville Regional Airport",
    country: "United States"
  },
  {
    city: "Newport",
    iata: "NPT",
    name: "Newport State Airport",
    country: "United States"
  },
  {
    city: "Uvalde",
    iata: "UVA",
    name: "Garner Field",
    country: "United States"
  },
  {
    city: "Rock Hill",
    iata: "RKH",
    name: "Rock Hill - York County Airport",
    country: "United States"
  },
  {
    city: "Valdosta",
    iata: "VAD",
    name: "Moody Air Force Base",
    country: "United States"
  },
  {
    city: "Lumberton",
    iata: "LLY",
    name: "South Jersey Regional Airport",
    country: "United States"
  },
  {
    city: "Lompoc",
    iata: "VBG",
    name: "Vandenberg Space Force Base",
    country: "United States"
  },
  {
    city: "Victoria",
    iata: "VCT",
    name: "Victoria Regional Airport",
    country: "United States"
  },
  {
    city: "Victorville",
    iata: "VCV",
    name: "Southern California Logistics Airport",
    country: "United States"
  },
  {
    city: "Vidalia",
    iata: "VDI",
    name: "Vidalia Regional Airport",
    country: "United States"
  },
  {
    city: "Kitava Island",
    iata: "KVE",
    name: "Kitava Airport",
    country: "PG"
  },
  {
    city: "Vernal",
    iata: "VEL",
    name: "Vernal Regional Airport",
    country: "United States"
  },
  {
    city: "Las Vegas",
    iata: "VGT",
    name: "North Las Vegas Airport",
    country: "United States"
  },
  {
    city: "Van Horn",
    iata: "VHN",
    name: "Culberson County Airport",
    country: "United States"
  },
  {
    city: "Vichy",
    iata: "VIH",
    name: "Rolla National Airport",
    country: "United States"
  },
  {
    city: "Visalia",
    iata: "VIS",
    name: "Visalia Municipal Airport",
    country: "United States"
  },
  {
    city: "Abingdon",
    iata: "VJI",
    name: "Virginia Highlands Airport",
    country: "United States"
  },
  {
    city: "Vicksburg",
    iata: "VKS",
    name: "Vicksburg Municipal Airport",
    country: "United States"
  },
  {
    city: "Vandalia",
    iata: "VLA",
    name: "Vandalia Municipal Airport",
    country: "United States"
  },
  {
    city: "Valdosta",
    iata: "VLD",
    name: "Valdosta Regional Airport",
    country: "United States"
  },
  {
    city: "Venice",
    iata: "VNC",
    name: "Venice Municipal Airport",
    country: "United States"
  },
  {
    city: "Van Nuys",
    iata: "VNY",
    name: "Van Nuys Airport",
    country: "United States"
  },
  {
    city: "Camp Douglas",
    iata: "VOK",
    name: "Volk Field",
    country: "United States"
  },
  {
    city: "Valparaiso",
    iata: "VPS",
    name: "Destin-Fort Walton Beach Airport",
    country: "United States"
  },
  {
    city: "Valparaiso",
    iata: "VPZ",
    name: "Porter County Municipal Airport",
    country: "United States"
  },
  {
    city: "Jacksonville",
    iata: "VQQ",
    name: "Cecil Airport",
    country: "United States"
  },
  {
    city: "Vero Beach",
    iata: "VRB",
    name: "Vero Beach Regional Airport",
    country: "United States"
  },
  {
    city: "North Springfield",
    iata: "VSF",
    name: "Hartness State Airport",
    country: "United States"
  },
  {
    city: "Valentine",
    iata: "VTN",
    name: "Miller Field",
    country: "United States"
  },
  {
    city: "Peru",
    iata: "VYS",
    name: "Illinois Valley Regional Airport Walter A Duncan Field",
    country: "United States"
  },
  {
    city: "Gettysburg",
    iata: "GTY",
    name: "Gettysburg Regional Airport",
    country: "United States"
  },
  {
    city: "Sequim",
    iata: "SQV",
    name: "Sequim Valley Airport",
    country: "United States"
  },
  {
    city: "Petersburg",
    iata: "PGC",
    name: "Grant County Airport",
    country: "United States"
  },
  {
    city: "Wallops Island",
    iata: "WAL",
    name: "Wallops Flight Facility Airport",
    country: "United States"
  },
  {
    city: "Waynesburg",
    iata: "WAY",
    name: "Greene County Airport",
    country: "United States"
  },
  {
    city: "Wilkes-Barre",
    iata: "WBW",
    name: "Wilkes Barre Wyoming Valley Airport",
    country: "United States"
  },
  {
    city: "Enid",
    iata: "WDG",
    name: "Enid Woodring Regional Airport",
    country: "United States"
  },
  {
    city: "Winder",
    iata: "WDR",
    name: "Barrow County Airport",
    country: "United States"
  },
  {
    city: "Weatherford",
    iata: "WEA",
    name: "Parker County Airport",
    country: "United States"
  },
  {
    city: "Waterfall",
    iata: "KWF",
    name: "Waterfall Seaplane Base",
    country: "United States"
  },
  {
    city: "Pacoima",
    iata: "WHP",
    name: "Whiteman Airport",
    country: "United States"
  },
  {
    city: "Lancaster",
    iata: "WJF",
    name: "General William J Fox Airfield",
    country: "United States"
  },
  {
    city: "Winfield / Arkansas City",
    iata: "WLD",
    name: "Strother Field",
    country: "United States"
  },
  {
    city: "Willows",
    iata: "WLW",
    name: "Willows Glenn County Airport",
    country: "United States"
  },
  {
    city: "Winnemucca",
    iata: "WMC",
    name: "Winnemucca Municipal Airport",
    country: "United States"
  },
  {
    city: "West Point",
    iata: "KWP",
    name: "West Point Village Seaplane Base",
    country: "United States"
  },
  {
    city: "Warner Robins",
    iata: "WRB",
    name: "Robins Air Force Base",
    country: "United States"
  },
  {
    city: "Wrightstown",
    iata: "WRI",
    name: "Mc Guire Air Force Base",
    country: "United States"
  },
  {
    city: "Worland",
    iata: "WRL",
    name: "Worland Municipal Airport",
    country: "United States"
  },
  {
    city: "Westerly",
    iata: "WST",
    name: "Westerly State Airport",
    country: "United States"
  },
  {
    city: "Watsonville",
    iata: "WVI",
    name: "Watsonville Municipal Airport",
    country: "United States"
  },
  {
    city: "Waterville",
    iata: "WVL",
    name: "Waterville Robert Lafleur Airport",
    country: "United States"
  },
  {
    city: "Wildwood",
    iata: "WWD",
    name: "Cape May County Airport",
    country: "United States"
  },
  {
    city: "Woodward",
    iata: "WWR",
    name: "West Woodward Airport",
    country: "United States"
  },
  {
    city: "Kiwayu",
    iata: "KWY",
    name: "Kiwayu Airport",
    country: "Kenya"
  },
  {
    city: "West Yellowstone",
    iata: "WYS",
    name: "Yellowstone Airport",
    country: "United States"
  },
  {
    city: "Tampa",
    iata: "KYO",
    name: "Tampa North Aero Park Airport",
    country: "United States"
  },
  {
    city: "Kasaan",
    iata: "KXA",
    name: "Kasaan Seaplane Base",
    country: "United States"
  },
  {
    city: "Fayetteville/Springdale/Rogers",
    iata: "XNA",
    name: "Northwest Arkansas National Airport",
    country: "United States"
  },
  {
    city: "Williston",
    iata: "XWA",
    name: "Williston Basin International Airport",
    country: "United States"
  },
  {
    city: "West Branch",
    iata: "WBK",
    name: "West Branch Community Airport",
    country: "United States"
  },
  {
    city: "Detroit",
    iata: "YIP",
    name: "Willow Run Airport",
    country: "United States"
  },
  {
    city: "Yakima",
    iata: "YKM",
    name: "Yakima Air Terminal McAllister Field",
    country: "United States"
  },
  {
    city: "Yankton",
    iata: "YKN",
    name: "Chan Gurney Municipal Airport",
    country: "United States"
  },
  {
    city: "Youngstown/Warren",
    iata: "YNG",
    name: "Youngstown Warren Regional Airport",
    country: "United States"
  },
  {
    city: "Atbasar",
    iata: "ATX",
    name: "Atbasar Airport",
    country: "KZ"
  },
  {
    city: "Zachar Bay",
    iata: "KZB",
    name: "Zachar Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Zephyrhills",
    iata: "ZPH",
    name: "Zephyrhills Municipal Airport",
    country: "United States"
  },
  {
    city: "Zanesville",
    iata: "ZZV",
    name: "Zanesville Municipal Airport",
    country: "United States"
  },
  {
    city: "Peach Springs",
    iata: "PGS",
    name: "Grand Canyon Caverns Airport",
    country: "United States"
  },
  {
    city: "Ton Phueng",
    iata: "BOR",
    name: "Bokeo International Airport",
    country: "LA"
  },
  {
    city: "Pulau Layang-Layang (Swallow Reef)",
    iata: "LAC",
    name: "Layang-Layang Airport",
    country: "Malaysia"
  },
  {
    city: "Kukës",
    iata: "KFZ",
    name: "Kukës International Airport",
    country: "AL"
  },
  {
    city: "Rinas",
    iata: "TIA",
    name: "Tirana International Airport Mother Teresa",
    country: "AL"
  },
  {
    city: "Burgas",
    iata: "BOJ",
    name: "Burgas Airport",
    country: "BG"
  },
  {
    city: "Gorna Oryahovitsa",
    iata: "GOZ",
    name: "Gorna Oryahovitsa Airport",
    country: "BG"
  },
  {
    city: "Sydney",
    iata: "LBH",
    name: "Palm Beach Seaplane Base",
    country: "Australia"
  },
  {
    city: "Luabo",
    iata: "LBM",
    name: "Luabo Airport",
    country: "MZ"
  },
  {
    city: "Plovdiv",
    iata: "PDV",
    name: "Plovdiv International Airport",
    country: "BG"
  },
  {
    city: "Shtraklevo",
    iata: "ROU",
    name: "Ruse Airport",
    country: "BG"
  },
  {
    city: "Sofia",
    iata: "SOF",
    name: "Sofia Airport",
    country: "BG"
  },
  {
    city: "Varna",
    iata: "VAR",
    name: "Varna Airport",
    country: "BG"
  },
  {
    city: "Tymbou (Kirklar)",
    iata: "ECN",
    name: "Ercan International Airport",
    country: "CY"
  },
  {
    city: "Lefkoniko (Geçitkale)",
    iata: "GEC",
    name: "Lefkoniko Airport / Geçitkale Air Base",
    country: "CY"
  },
  {
    city: "Larnaca",
    iata: "LCA",
    name: "Larnaca International Airport",
    country: "CY"
  },
  {
    city: "Loncopue",
    iata: "LCP",
    name: "Loncopue Airport",
    country: "Argentina"
  },
  {
    city: "Paphos",
    iata: "PFO",
    name: "Paphos International Airport",
    country: "CY"
  },
  {
    city: "Akrotiri",
    iata: "AKT",
    name: "RAF Akrotiri",
    country: "CY"
  },
  {
    city: "Dubrovnik",
    iata: "DBV",
    name: "Dubrovnik Ruđer Bošković Airport",
    country: "HR"
  },
  {
    city: "Mali Lošinj",
    iata: "LSZ",
    name: "Lošinj Airport",
    country: "HR"
  },
  {
    city: "Osijek(Klisa)",
    iata: "OSI",
    name: "Osijek Airport",
    country: "HR"
  },
  {
    city: "Pula",
    iata: "PUY",
    name: "Pula Airport",
    country: "HR"
  },
  {
    city: "Rijeka(Omišalj)",
    iata: "RJK",
    name: "Rijeka Airport",
    country: "HR"
  },
  {
    city: "Gornji Humac",
    iata: "BWK",
    name: "Brač Airport",
    country: "HR"
  },
  {
    city: "Split",
    iata: "SPU",
    name: "Split Saint Jerome Airport",
    country: "HR"
  },
  {
    city: "Lansdowne Station",
    iata: "LDW",
    name: "Lansdowne Airport",
    country: "Australia"
  },
  {
    city: "Velika Gorica",
    iata: "ZAG",
    name: "Zagreb Franjo Tuđman International Airport",
    country: "HR"
  },
  {
    city: "Zadar",
    iata: "ZAD",
    name: "Zadar Airport",
    country: "HR"
  },
  {
    city: "Albacete",
    iata: "ABC",
    name: "Albacete Airport / Los Llanos Air Base",
    country: "Spain"
  },
  {
    city: "Alicante",
    iata: "ALC",
    name: "Alicante-Elche Miguel Hernández Airport",
    country: "Spain"
  },
  {
    city: "Almería",
    iata: "LEI",
    name: "Almería Airport",
    country: "Spain"
  },
  {
    city: "Ranón",
    iata: "OVD",
    name: "Asturias Airport",
    country: "Spain"
  },
  {
    city: "Córdoba",
    iata: "ODB",
    name: "Córdoba Airport",
    country: "Spain"
  },
  {
    city: "Bilbao",
    iata: "BIO",
    name: "Bilbao Airport",
    country: "Spain"
  },
  {
    city: "Burgos",
    iata: "RGS",
    name: "Burgos Airport",
    country: "Spain"
  },
  {
    city: "Barcelona",
    iata: "BCN",
    name: "Josep Tarradellas Barcelona-El Prat Airport",
    country: "Spain"
  },
  {
    city: "Badajoz",
    iata: "BJZ",
    name: "Badajoz Airport",
    country: "Spain"
  },
  {
    city: "Castellón de la Plana",
    iata: "CDT",
    name: "Castellón-Costa Azahar Airport",
    country: "Spain"
  },
  {
    city: "Culleredo",
    iata: "LCG",
    name: "A Coruña Airport",
    country: "Spain"
  },
  {
    city: "Lleida",
    iata: "ILD",
    name: "Lleida-Alguaire Airport",
    country: "Spain"
  },
  {
    city: "Girona",
    iata: "GRO",
    name: "Girona-Costa Brava Airport",
    country: "Spain"
  },
  {
    city: "Granada",
    iata: "GRX",
    name: "F.G.L. Airport Granada-Jaén Airport",
    country: "Spain"
  },
  {
    city: "Monflorite/Alcalá del Obispo",
    iata: "HSK",
    name: "Huesca-Pirineos Airport",
    country: "Spain"
  },
  {
    city: "Ibiza (Eivissa)",
    iata: "IBZ",
    name: "Ibiza Airport",
    country: "Spain"
  },
  {
    city: "Jerez de la Frontera",
    iata: "XRY",
    name: "Jerez Airport",
    country: "Spain"
  },
  {
    city: "La Virgen Del Camino",
    iata: "LEN",
    name: "León Int'l Airport",
    country: "Spain"
  },
  {
    city: "Logroño",
    iata: "RJL",
    name: "Logroño-Agoncillo Airport",
    country: "Spain"
  },
  {
    city: "Madrid",
    iata: "MAD",
    name: "Adolfo Suárez Madrid–Barajas Airport",
    country: "Spain"
  },
  {
    city: "Málaga",
    iata: "AGP",
    name: "Málaga-Costa del Sol Airport",
    country: "Spain"
  },
  {
    city: "Mahón (Maó)",
    iata: "MAH",
    name: "Menorca Airport",
    country: "Spain"
  },
  {
    city: "Corvera",
    iata: "RMU",
    name: "Region of Murcia International Airport",
    country: "Spain"
  },
  {
    city: "Morón",
    iata: "OZP",
    name: "Moron Air Base",
    country: "Spain"
  },
  {
    city: "Lekoni",
    iata: "LEO",
    name: "Lekoni Airport",
    country: "GA"
  },
  {
    city: "Palma de Mallorca",
    iata: "PMI",
    name: "Palma de Mallorca Airport",
    country: "Spain"
  },
  {
    city: "Pamplona",
    iata: "PNA",
    name: "Pamplona Airport",
    country: "Spain"
  },
  {
    city: "Ciudad Real",
    iata: "CQM",
    name: "Ciudad Real International Airport",
    country: "Spain"
  },
  {
    city: "Reus",
    iata: "REU",
    name: "Reus Airport",
    country: "Spain"
  },
  {
    city: "Rota",
    iata: "ROZ",
    name: "Rota Naval Station Airport",
    country: "Spain"
  },
  {
    city: "Salamanca",
    iata: "SLM",
    name: "Salamanca Airport",
    country: "Spain"
  },
  {
    city: "Hondarribia",
    iata: "EAS",
    name: "San Sebastián Airport",
    country: "Spain"
  },
  {
    city: "Santiago de Compostela",
    iata: "SCQ",
    name: "Santiago-Rosalía de Castro Airport",
    country: "Spain"
  },
  {
    city: "La Seu d'Urgell Pyrenees and Andorra",
    iata: "LEU",
    name: "Pirineus - la Seu d'Urgel Airport",
    country: "Spain"
  },
  {
    city: "Teruel",
    iata: "TEV",
    name: "Teruel Airport",
    country: "Spain"
  },
  {
    city: "Madrid",
    iata: "TOJ",
    name: "Madrid–Torrejón Airport / Torrejón Air Base",
    country: "Spain"
  },
  {
    city: "Valencia",
    iata: "VLC",
    name: "Valencia Airport",
    country: "Spain"
  },
  {
    city: "Valladolid",
    iata: "VLL",
    name: "Valladolid Airport",
    country: "Spain"
  },
  {
    city: "Alava",
    iata: "VIT",
    name: "Vitoria Airport",
    country: "Spain"
  },
  {
    city: "Vigo",
    iata: "VGO",
    name: "Vigo Airport",
    country: "Spain"
  },
  {
    city: "Santander",
    iata: "SDR",
    name: "Seve Ballesteros-Santander Airport",
    country: "Spain"
  },
  {
    city: "Zaragoza",
    iata: "ZAZ",
    name: "Zaragoza Airport",
    country: "Spain"
  },
  {
    city: "Seville",
    iata: "SVQ",
    name: "Seville Airport",
    country: "Spain"
  },
  {
    city: "Saint-Aubin-sur-Scie",
    iata: "DPE",
    name: "Dieppe-Saint-Aubin Airport",
    country: "France"
  },
  {
    city: "Calais",
    iata: "CQF",
    name: "Calais Marck Airport",
    country: "France"
  },
  {
    city: "Albert",
    iata: "BYF",
    name: "Albert Bray airport",
    country: "France"
  },
  {
    city: "Le Touquet-Paris-Plage",
    iata: "LTQ",
    name: "Le Touquet-Côte d'Opale Airport",
    country: "France"
  },
  {
    city: "Agen",
    iata: "AGF",
    name: "Agen La Garenne airport",
    country: "France"
  },
  {
    city: "Bordeaux",
    iata: "BOD",
    name: "Bordeaux–Mérignac Airport",
    country: "France"
  },
  {
    city: "Bergerac",
    iata: "EGC",
    name: "Bergerac Dordogne-Périgord airport",
    country: "France"
  },
  {
    city: "Cognac/Châteaubernard",
    iata: "CNG",
    name: "Cognac-Châteaubernard (BA 709) Air Base",
    country: "France"
  },
  {
    city: "La Rochelle",
    iata: "LRH",
    name: "La Rochelle Île de Ré Airport",
    country: "France"
  },
  {
    city: "Poitiers/Biard",
    iata: "PIS",
    name: "Poitiers-Biard Airport",
    country: "France"
  },
  {
    city: "Lépaud, Creuse",
    iata: "MCU",
    name: "Montluçon-Guéret Airport",
    country: "France"
  },
  {
    city: "Limoges/Bellegarde",
    iata: "LIG",
    name: "Limoges Airport",
    country: "France"
  },
  {
    city: "Niort/Souché",
    iata: "NIT",
    name: "Niort - Marais Poitevin Airport",
    country: "France"
  },
  {
    city: "Toulouse/Blagnac",
    iata: "TLS",
    name: "Toulouse-Blagnac Airport",
    country: "France"
  },
  {
    city: "Pau/Pyrénées (Uzein)",
    iata: "PUF",
    name: "Pau Pyrénées Airport",
    country: "France"
  },
  {
    city: "Tarbes/Lourdes/Pyrénées",
    iata: "LDE",
    name: "Tarbes-Lourdes-Pyrénées Airport",
    country: "France"
  },
  {
    city: "Angoulême",
    iata: "ANG",
    name: "Angoulême Brie-Champniers airport",
    country: "France"
  },
  {
    city: "Périgueux/Bassillac",
    iata: "PGX",
    name: "Périgueux-Bassillac Airport",
    country: "France"
  },
  {
    city: "Biarritz",
    iata: "BIQ",
    name: "Biarritz Pays Basque airport",
    country: "France"
  },
  {
    city: "Cahors",
    iata: "ZAO",
    name: "Cahors Lalbenque airport",
    country: "France"
  },
  {
    city: "Albi",
    iata: "LBI",
    name: "Albi Le Sequestre airport",
    country: "France"
  },
  {
    city: "Castres",
    iata: "DCM",
    name: "Castres Mazamet Airport",
    country: "France"
  },
  {
    city: "Rodez/Marcillac",
    iata: "RDZ",
    name: "Rodez–Aveyron Airport",
    country: "France"
  },
  {
    city: "Royan/Médis",
    iata: "RYN",
    name: "Royan-Médis Airport",
    country: "France"
  },
  {
    city: "Rochefort/Saint-Agnant",
    iata: "RCO",
    name: "Rochefort-Saint-Agnant (BA 721) Airport",
    country: "France"
  },
  {
    city: "Bangor",
    iata: "BIC",
    name: "Aérodrome de Belle Île",
    country: "France"
  },
  {
    city: "Ushant",
    iata: "OUI",
    name: "Ouessant Airport",
    country: "France"
  },
  {
    city: "Île d'Yeu",
    iata: "IDY",
    name: "Île d'Yeu Airport",
    country: "France"
  },
  {
    city: "Colmar",
    iata: "CMR",
    name: "Colmar Houssen airport",
    country: "France"
  },
  {
    city: "Dole",
    iata: "DLE",
    name: "Dole Tavaux Airport",
    country: "France"
  },
  {
    city: "Megève",
    iata: "MVV",
    name: "Megève Altiport",
    country: "France"
  },
  {
    city: "Lanas, Ardèche",
    iata: "OBS",
    name: "Aubenas-South Ardèche Airport",
    country: "France"
  },
  {
    city: "Chaspuzac, Haute-Loire",
    iata: "LPY",
    name: "Le Puy-Loudes Airfield",
    country: "France"
  },
  {
    city: "Huez, Isère",
    iata: "AHZ",
    name: "L'Alpe d'Huez - Henri Giraud Altiport",
    country: "France"
  },
  {
    city: "Goin",
    iata: "ETZ",
    name: "Metz-Nancy-Lorraine Airport",
    country: "France"
  },
  {
    city: "Angers",
    iata: "ANE",
    name: "Angers Marcé airport",
    country: "France"
  },
  {
    city: "Bastia",
    iata: "BIA",
    name: "Bastia-Poretta International airport",
    country: "France"
  },
  {
    city: "Calvi",
    iata: "CLY",
    name: "Calvi Sainte Catherine Airport",
    country: "France"
  },
  {
    city: "Figari",
    iata: "FSC",
    name: "Figari Sud-Corse Airport",
    country: "France"
  },
  {
    city: "Ajaccio",
    iata: "AJA",
    name: "Ajaccio Napoléon Bonaparte airport",
    country: "France"
  },
  {
    city: "Propriano",
    iata: "PRP",
    name: "Propriano Airport",
    country: "France"
  },
  {
    city: "Solenzara",
    iata: "SOZ",
    name: "Solenzara (BA 126) Air Base",
    country: "France"
  },
  {
    city: "Les Allues",
    iata: "MFX",
    name: "Méribel Altiport",
    country: "France"
  },
  {
    city: "Auxerre",
    iata: "AUF",
    name: "Auxerre Branches airport",
    country: "France"
  },
  {
    city: "Chambéry",
    iata: "CMF",
    name: "Chambéry Aix les Bains airport",
    country: "France"
  },
  {
    city: "Clermont-Ferrand",
    iata: "CFE",
    name: "Clermont-Ferrand Auvergne airport",
    country: "France"
  },
  {
    city: "Bourges",
    iata: "BOU",
    name: "Bourges airport",
    country: "France"
  },
  {
    city: "Saint-Bon",
    iata: "CVF",
    name: "Courchevel Altiport",
    country: "France"
  },
  {
    city: "Colombier-Saugnieu, Rhône",
    iata: "LYS",
    name: "Lyon Saint-Exupéry Airport",
    country: "France"
  },
  {
    city: "L'Hôpital-le-Mercier, Saône-et-Loire",
    iata: "SYT",
    name: "Saint-Yan Airport",
    country: "France"
  },
  {
    city: "Saint-Léger-sur-Roanne",
    iata: "RNE",
    name: "Roanne-Renaison Airport",
    country: "France"
  },
  {
    city: "Annecy",
    iata: "NCY",
    name: "Annecy Meythet airport",
    country: "France"
  },
  {
    city: "Grenoble",
    iata: "GNB",
    name: "Grenoble Alpes Isère Airport",
    country: "France"
  },
  {
    city: "Chabeuil, Drôme",
    iata: "VAF",
    name: "Valence-Chabeuil Airport",
    country: "France"
  },
  {
    city: "Charmeil, Allier",
    iata: "VHY",
    name: "Vichy-Charmeil Airport",
    country: "France"
  },
  {
    city: "Aurillac",
    iata: "AUR",
    name: "Aurillac airport",
    country: "France"
  },
  {
    city: "Châteauroux",
    iata: "CHR",
    name: "Châteauroux Déols airport",
    country: "France"
  },
  {
    city: "Chassieu, Lyon",
    iata: "LYN",
    name: "Lyon Bron Airport",
    country: "France"
  },
  {
    city: "Cannes",
    iata: "CEQ",
    name: "Cannes Mandelieu Airport",
    country: "France"
  },
  {
    city: "Andrézieux-Bouthéon, Loire",
    iata: "EBU",
    name: "Saint-Étienne-Bouthéon Airport",
    country: "France"
  },
  {
    city: "Carcassonne",
    iata: "CCF",
    name: "Carcassonne Salvaza Airport",
    country: "France"
  },
  {
    city: "Marignane, Bouches-du-Rhône",
    iata: "MRS",
    name: "Marseille Provence Airport",
    country: "France"
  },
  {
    city: "Nice, Alpes-Maritimes",
    iata: "NCE",
    name: "Nice-Côte d'Azur Airport",
    country: "France"
  },
  {
    city: "Perpignan/Rivesaltes",
    iata: "PGF",
    name: "Perpignan-Rivesaltes (Llabanère) Airport",
    country: "France"
  },
  {
    city: "Le Castellet, Var",
    iata: "CTT",
    name: "Le Castellet Airport",
    country: "France"
  },
  {
    city: "Saint-Pons, Alpes-de-Haute-Provence",
    iata: "BAE",
    name: "Barcelonnette - Saint-Pons Airfield",
    country: "France"
  },
  {
    city: "Montpellier/Méditerranée",
    iata: "MPL",
    name: "Montpellier-Méditerranée Airport",
    country: "France"
  },
  {
    city: "Béziers",
    iata: "BZR",
    name: "Béziers Vias airport",
    country: "France"
  },
  {
    city: "Avignon",
    iata: "AVN",
    name: "Avignon Caumont airport",
    country: "France"
  },
  {
    city: "Tallard, Hautes-Alpes",
    iata: "GAT",
    name: "Gap-Tallard Airfield",
    country: "France"
  },
  {
    city: "Mende/Brénoux",
    iata: "MEN",
    name: "Mende-Brenoux Airfield",
    country: "France"
  },
  {
    city: "Saint-Crépin, Hautes-Alpes",
    iata: "SCP",
    name: "Mont-Dauphin Saint-Crépin Airfield",
    country: "France"
  },
  {
    city: "Beauvais",
    iata: "BVA",
    name: "Beauvais-Tillé airport",
    country: "France"
  },
  {
    city: "Fauville, Eure",
    iata: "EVX",
    name: "Évreux-Fauville (BA 105) Air Base",
    country: "France"
  },
  {
    city: "Le Havre",
    iata: "LEH",
    name: "Le Havre-Octeville Airport",
    country: "France"
  },
  {
    city: "Chalons en Champagne",
    iata: "XCR",
    name: "Chalons Vatry airport",
    country: "France"
  },
  {
    city: "Les Sables-d'Olonne",
    iata: "LSO",
    name: "Les Sables-d'Olonne Talmont Airport",
    country: "France"
  },
  {
    city: "Boos",
    iata: "URO",
    name: "Rouen Vallée de Seine Airport",
    country: "France"
  },
  {
    city: "Tours, Indre-et-Loire",
    iata: "TUF",
    name: "Tours Val de Loire Airport",
    country: "France"
  },
  {
    city: "Cholet",
    iata: "CET",
    name: "Cholet Le Pontreau airfield",
    country: "France"
  },
  {
    city: "Laval, Mayenne",
    iata: "LVA",
    name: "Laval-Entrammes Airport",
    country: "France"
  },
  {
    city: "Saint-Denis-de-l'Hôtel, Loiret",
    iata: "ORE",
    name: "Orléans–Saint-Denis-de-l'Hôtel Airport",
    country: "France"
  },
  {
    city: "Paris",
    iata: "LBG",
    name: "Paris-Le Bourget International Airport",
    country: "France"
  },
  {
    city: "Creil",
    iata: "CSF",
    name: "Creil Air Base",
    country: "France"
  },
  {
    city: "Paris (Roissy-en-France, Val-d'Oise)",
    iata: "CDG",
    name: "Charles de Gaulle International Airport",
    country: "France"
  },
  {
    city: "Toussus-le-Noble, Yvelines",
    iata: "TNF",
    name: "Toussus-le-Noble Airport",
    country: "France"
  },
  {
    city: "Paris (Orly, Val-de-Marne)",
    iata: "ORY",
    name: "Paris-Orly Airport",
    country: "France"
  },
  {
    city: "Cormeilles-en-Vexin, Val-d'Oise",
    iata: "POX",
    name: "Pontoise-Cormeilles Aerodrome",
    country: "France"
  },
  {
    city: "Vélizy-Villacoublay, Yvelines",
    iata: "VIY",
    name: "Vélizy-Villacoublay Air Base",
    country: "France"
  },
  {
    city: "Marzy, Nièvre",
    iata: "NVS",
    name: "Nevers-Fourchambault Airport",
    country: "France"
  },
  {
    city: "Lesquin",
    iata: "LIL",
    name: "Lille Airport",
    country: "France"
  },
  {
    city: "Merville, Nord",
    iata: "HZB",
    name: "Merville-Calonne Airport",
    country: "France"
  },
  {
    city: "Brest",
    iata: "BES",
    name: "Brest Bretagne airport",
    country: "France"
  },
  {
    city: "Cherbourg",
    iata: "CER",
    name: "Cherbourg Manche airport",
    country: "France"
  },
  {
    city: "Dinard",
    iata: "DNR",
    name: "Dinard Pleurtuit Saint-Malo airport",
    country: "France"
  },
  {
    city: "La Baule-Escoublac",
    iata: "LBY",
    name: "La Baule-Escoublac Airport",
    country: "France"
  },
  {
    city: "Bréville-sur-Mer, Manche",
    iata: "GFR",
    name: "Granville Airport",
    country: "France"
  },
  {
    city: "Deauville",
    iata: "DOL",
    name: "Deauville Normandie airport",
    country: "France"
  },
  {
    city: "Lorient/Lann/Bihoué",
    iata: "LRT",
    name: "Lorient South Brittany (Bretagne Sud) Airport",
    country: "France"
  },
  {
    city: "La Roche-sur-Yon",
    iata: "EDM",
    name: "La Roche-sur-Yon Les Ajoncs Airport",
    country: "France"
  },
  {
    city: "Landivisiau",
    iata: "LDV",
    name: "Landivisiau Air Base",
    country: "France"
  },
  {
    city: "Caen",
    iata: "CFR",
    name: "Caen Carpiquet airport",
    country: "France"
  },
  {
    city: "Le Mans, Sarthe",
    iata: "LME",
    name: "Le Mans-Arnage Airport",
    country: "France"
  },
  {
    city: "Saint-Jacques-de-la-Lande, Ille-et-Vilaine",
    iata: "RNS",
    name: "Rennes-Saint-Jacques Airport",
    country: "France"
  },
  {
    city: "Lannion",
    iata: "LAI",
    name: "Lannion Airport",
    country: "France"
  },
  {
    city: "Quimper/Pluguffan",
    iata: "UIP",
    name: "Quimper-Cornouaille Airport",
    country: "France"
  },
  {
    city: "Nantes",
    iata: "NTE",
    name: "Nantes Atlantique Airport",
    country: "France"
  },
  {
    city: "Trémuson, Côtes-d'Armor",
    iata: "SBK",
    name: "Saint-Brieuc-Armor Airport",
    country: "France"
  },
  {
    city: "Morlaix/Ploujean",
    iata: "MXN",
    name: "Morlaix-Ploujean Airport",
    country: "France"
  },
  {
    city: "Vannes/Meucon",
    iata: "VNE",
    name: "Vannes-Meucon Airport",
    country: "France"
  },
  {
    city: "Saint-Nazaire/Montoir",
    iata: "SNR",
    name: "Saint-Nazaire-Montoir Airport",
    country: "France"
  },
  {
    city: "Bâle / Mulhouse",
    iata: "BSL",
    name: "EuroAirport Basel–Mulhouse–Freiburg",
    country: "France"
  },
  {
    city: "Dijon",
    iata: "DIJ",
    name: "Dijon Longvic airport",
    country: "France"
  },
  {
    city: "Épinal",
    iata: "EPL",
    name: "Épinal Mirecourt Airport",
    country: "France"
  },
  {
    city: "Brive",
    iata: "BVE",
    name: "Brive Souillac airport",
    country: "France"
  },
  {
    city: "Tomblaine, Meurthe-et-Moselle",
    iata: "ENC",
    name: "Nancy-Essey Airport",
    country: "France"
  },
  {
    city: "Strasbourg",
    iata: "SXB",
    name: "Strasbourg Airport",
    country: "France"
  },
  {
    city: "Hyères, Var",
    iata: "TLN",
    name: "Toulon-Hyères Airport",
    country: "France"
  },
  {
    city: "Nîmes/Garons",
    iata: "FNI",
    name: "Nîmes-Arles-Camargue Airport",
    country: "France"
  },
  {
    city: "Saint-Tropez",
    iata: "LTT",
    name: "La Môle Airport",
    country: "France"
  },
  {
    city: "Miquelon",
    iata: "MQC",
    name: "Miquelon Airport",
    country: "PM"
  },
  {
    city: "Saint-Pierre",
    iata: "FSP",
    name: "Saint-Pierre Pointe-Blanche Airport",
    country: "PM"
  },
  {
    city: "Andravida",
    iata: "PYR",
    name: "Andravida Air Base",
    country: "GR"
  },
  {
    city: "Alexandroupolis",
    iata: "AXD",
    name: "Alexandroupoli Democritus Airport",
    country: "GR"
  },
  {
    city: "Spata-Artemida",
    iata: "ATH",
    name: "Athens Eleftherios Venizelos International Airport",
    country: "GR"
  },
  {
    city: "Nea Anchialos",
    iata: "VOL",
    name: "Nea Anchialos National Airport",
    country: "GR"
  },
  {
    city: "Lake Gregory",
    iata: "LGE",
    name: "Mulan Airport",
    country: "Australia"
  },
  {
    city: "Chios Island",
    iata: "JKH",
    name: "Chios Island National Airport",
    country: "GR"
  },
  {
    city: "Ikaria Island",
    iata: "JIK",
    name: "Ikaria Airport",
    country: "GR"
  },
  {
    city: "Ioannina",
    iata: "IOA",
    name: "Ioannina King Pyrrhus National Airport",
    country: "GR"
  },
  {
    city: "Heraklion",
    iata: "HER",
    name: "Heraklion International Nikos Kazantzakis Airport",
    country: "GR"
  },
  {
    city: "Argos Orestiko",
    iata: "KSO",
    name: "Kastoria National Airport Aristotle",
    country: "GR"
  },
  {
    city: "Kithira Island",
    iata: "KIT",
    name: "Kithira Airport",
    country: "GR"
  },
  {
    city: "Kefallinia Island",
    iata: "EFL",
    name: "Kefallinia Airport",
    country: "GR"
  },
  {
    city: "Kastelorizo Island",
    iata: "KZS",
    name: "Kastelorizo Airport",
    country: "GR"
  },
  {
    city: "Kalamata",
    iata: "KLX",
    name: "Kalamata Airport",
    country: "GR"
  },
  {
    city: "Kos Island",
    iata: "KGS",
    name: "Kos International Airport",
    country: "GR"
  },
  {
    city: "Karpathos Island",
    iata: "AOK",
    name: "Karpathos Airport",
    country: "GR"
  },
  {
    city: "Kerkyra (Corfu)",
    iata: "CFU",
    name: "Corfu Ioannis Kapodistrias International Airport",
    country: "GR"
  },
  {
    city: "Kasos Island",
    iata: "KSJ",
    name: "Kasos Airport",
    country: "GR"
  },
  {
    city: "Kavala",
    iata: "KVA",
    name: "Kavala Alexander the Great International Airport",
    country: "GR"
  },
  {
    city: "Kalymnos Island",
    iata: "JKL",
    name: "Kalymnos Airport",
    country: "GR"
  },
  {
    city: "Kozani",
    iata: "KZI",
    name: "Kozani National Airport Filippos",
    country: "GR"
  },
  {
    city: "Leros Island",
    iata: "LRS",
    name: "Leros Airport",
    country: "GR"
  },
  {
    city: "Limnos Island",
    iata: "LXS",
    name: "Limnos Airport",
    country: "GR"
  },
  {
    city: "Larissa",
    iata: "LRA",
    name: "Larissa Air Base",
    country: "GR"
  },
  {
    city: "Mykonos",
    iata: "JMK",
    name: "Mykonos Island National Airport",
    country: "GR"
  },
  {
    city: "Milos Island",
    iata: "MLO",
    name: "Milos Airport",
    country: "GR"
  },
  {
    city: "Mytilene",
    iata: "MJT",
    name: "Mytilene International Airport",
    country: "GR"
  },
  {
    city: "Naxos",
    iata: "JNX",
    name: "Naxos Island National Airport",
    country: "GR"
  },
  {
    city: "Paros",
    iata: "PAS",
    name: "Paros National Airport",
    country: "GR"
  },
  {
    city: "Astypalaia Island",
    iata: "JTY",
    name: "Astypalaia Airport",
    country: "GR"
  },
  {
    city: "Preveza",
    iata: "PVK",
    name: "Aktion National Airport",
    country: "GR"
  },
  {
    city: "Rhodes",
    iata: "RHO",
    name: "Rhodes International Airport",
    country: "GR"
  },
  {
    city: "Patras",
    iata: "GPA",
    name: "Patras Araxos Agamemnon Airport",
    country: "GR"
  },
  {
    city: "Souda",
    iata: "CHQ",
    name: "Chania International Airport",
    country: "GR"
  },
  {
    city: "Skiathos",
    iata: "JSI",
    name: "Skiathos Island National Airport",
    country: "GR"
  },
  {
    city: "Samos Island",
    iata: "SMI",
    name: "Samos Airport",
    country: "GR"
  },
  {
    city: "Syros Island",
    iata: "JSY",
    name: "Syros Airport",
    country: "GR"
  },
  {
    city: "Sparti",
    iata: "SPJ",
    name: "Sparti Airfield",
    country: "GR"
  },
  {
    city: "Santorini Island",
    iata: "JTR",
    name: "Santorini International Airport",
    country: "GR"
  },
  {
    city: "Crete Island",
    iata: "JSH",
    name: "Sitia Airport",
    country: "GR"
  },
  {
    city: "Skiros Island",
    iata: "SKU",
    name: "Skiros Airport",
    country: "GR"
  },
  {
    city: "Thessaloniki",
    iata: "SKG",
    name: "Thessaloniki Macedonia International Airport",
    country: "GR"
  },
  {
    city: "Zakynthos",
    iata: "ZTH",
    name: "Zakynthos International Airport Dionysios Solomos",
    country: "GR"
  },
  {
    city: "Budapest",
    iata: "BUD",
    name: "Budapest Liszt Ferenc International Airport",
    country: "HU"
  },
  {
    city: "Debrecen",
    iata: "DEB",
    name: "Debrecen International Airport",
    country: "HU"
  },
  {
    city: "Pécs",
    iata: "PEV",
    name: "Pécs-Pogány International Airport",
    country: "HU"
  },
  {
    city: "Győr",
    iata: "QGY",
    name: "Győr-Pér Airport",
    country: "HU"
  },
  {
    city: "Sármellék",
    iata: "SOB",
    name: "Hévíz–Balaton Airport",
    country: "HU"
  },
  {
    city: "Isola di Capo Rizzuto (KR)",
    iata: "CRV",
    name: "Crotone Sant'Anna Pythagoras Airport",
    country: "Italy"
  },
  {
    city: "Bari",
    iata: "BRI",
    name: "Bari Karol Wojtyła International Airport",
    country: "Italy"
  },
  {
    city: "Foggia (FG)",
    iata: "FOG",
    name: "Foggia Gino Lisa Airport",
    country: "Italy"
  },
  {
    city: "Grottaglie",
    iata: "TAR",
    name: "Taranto-Grottaglie Marcello Arlotta Airport",
    country: "Italy"
  },
  {
    city: "Galatina (LE)",
    iata: "LCC",
    name: "Lecce Galatina Air Base / Galatina Fortunato Cesari Airport",
    country: "Italy"
  },
  {
    city: "Pescara",
    iata: "PSR",
    name: "Abruzzo Airport",
    country: "Italy"
  },
  {
    city: "Brindisi",
    iata: "BDS",
    name: "Brindisi Airport",
    country: "Italy"
  },
  {
    city: "Lamezia Terme (CZ)",
    iata: "SUF",
    name: "Lamezia Terme Sant'Eufemia International Airport",
    country: "Italy"
  },
  {
    city: "Comiso",
    iata: "CIY",
    name: "Comiso Airport",
    country: "Italy"
  },
  {
    city: "Catania",
    iata: "CTA",
    name: "Catania-Fontanarossa Airport",
    country: "Italy"
  },
  {
    city: "Lampedusa",
    iata: "LMP",
    name: "Lampedusa Airport",
    country: "Italy"
  },
  {
    city: "Pantelleria (TP)",
    iata: "PNL",
    name: "Pantelleria Airport",
    country: "Italy"
  },
  {
    city: "Palermo",
    iata: "PMO",
    name: "Falcone–Borsellino Airport",
    country: "Italy"
  },
  {
    city: "Reggio Calabria",
    iata: "REG",
    name: "Reggio Calabria Airport",
    country: "Italy"
  },
  {
    city: "Trapani (TP)",
    iata: "TPS",
    name: "Vincenzo Florio Airport Trapani-Birgi",
    country: "Italy"
  },
  {
    city: "Belluno (BL)",
    iata: "BLX",
    name: "Belluno Arturo dell'Oro Airport",
    country: "Italy"
  },
  {
    city: "Ravenna (RA)",
    iata: "RAN",
    name: "Ravenna Airport",
    country: "Italy"
  },
  {
    city: "Alghero",
    iata: "AHO",
    name: "Alghero-Fertilia Airport",
    country: "Italy"
  },
  {
    city: "Decimomannu",
    iata: "DCI",
    name: "Decimomannu Air Base",
    country: "Italy"
  },
  {
    city: "Cagliari",
    iata: "CAG",
    name: "Cagliari Elmas Airport",
    country: "Italy"
  },
  {
    city: "Olbia (SS)",
    iata: "OLB",
    name: "Olbia Costa Smeralda Airport",
    country: "Italy"
  },
  {
    city: "Oristano",
    iata: "FNU",
    name: "Oristano-Fenosu Airport",
    country: "Italy"
  },
  {
    city: "Ferno (VA)",
    iata: "MXP",
    name: "Milan Malpensa International Airport",
    country: "Italy"
  },
  {
    city: "Orio al Serio (BG)",
    iata: "BGY",
    name: "Il Caravaggio International Airport",
    country: "Italy"
  },
  {
    city: "Caselle Torinese (TO)",
    iata: "TRN",
    name: "Turin Airport",
    country: "Italy"
  },
  {
    city: "Genova (GE)",
    iata: "GOA",
    name: "Genoa Cristoforo Colombo Airport",
    country: "Italy"
  },
  {
    city: "Segrate (MI)",
    iata: "LIN",
    name: "Milano Linate Airport",
    country: "Italy"
  },
  {
    city: "Parma (PR)",
    iata: "PMF",
    name: "Parma Airport",
    country: "Italy"
  },
  {
    city: "Saint-Christophe (AO)",
    iata: "AOT",
    name: "Aosta Corrado Gex Airport",
    country: "Italy"
  },
  {
    city: "Levaldigi (CN)",
    iata: "CUF",
    name: "Cuneo International Airport",
    country: "Italy"
  },
  {
    city: "Aviano (PN)",
    iata: "AVB",
    name: "Aviano Air Base",
    country: "Italy"
  },
  {
    city: "Bolzano (BZ)",
    iata: "BZO",
    name: "Bolzano Airport",
    country: "Italy"
  },
  {
    city: "Bologna",
    iata: "BLQ",
    name: "Bologna Guglielmo Marconi Airport",
    country: "Italy"
  },
  {
    city: "Treviso (TV)",
    iata: "TSF",
    name: "Treviso Airport",
    country: "Italy"
  },
  {
    city: "Forlì (FC)",
    iata: "FRL",
    name: "Forlì-Luigi Ridolfi International Airport",
    country: "Italy"
  },
  {
    city: "Montichiari (BS)",
    iata: "VBS",
    name: "Brescia Gabriele d'Annunzio Airport",
    country: "Italy"
  },
  {
    city: "Ronchi dei Legionari/Trieste",
    iata: "TRS",
    name: "Trieste Airport",
    country: "Italy"
  },
  {
    city: "Rimini (RN)",
    iata: "RMI",
    name: "Federico Fellini International Airport",
    country: "Italy"
  },
  {
    city: "Caselle (VR)",
    iata: "VRN",
    name: "Verona Villafranca Valerio Catullo Airport",
    country: "Italy"
  },
  {
    city: "Falconara Marittima (AN)",
    iata: "AOI",
    name: "Marche Airport",
    country: "Italy"
  },
  {
    city: "Venezia (VE)",
    iata: "VCE",
    name: "Venice Marco Polo Airport",
    country: "Italy"
  },
  {
    city: "Rome",
    iata: "CIA",
    name: "Ciampino–G. B. Pastine International Airport",
    country: "Italy"
  },
  {
    city: "Rome",
    iata: "FCO",
    name: "Rome–Fiumicino Leonardo da Vinci International Airport",
    country: "Italy"
  },
  {
    city: "Salerno",
    iata: "QSR",
    name: "Salerno Costa d'Amalfi Airport",
    country: "Italy"
  },
  {
    city: "Campo nell'Elba (LI)",
    iata: "EBA",
    name: "Marina di Campo Airport",
    country: "Italy"
  },
  {
    city: "Napoli",
    iata: "NAP",
    name: "Naples International Airport",
    country: "Italy"
  },
  {
    city: "Pisa (PI)",
    iata: "PSA",
    name: "Pisa International Airport",
    country: "Italy"
  },
  {
    city: "Firenze (FI)",
    iata: "FLR",
    name: "Florence Airport, Peretola",
    country: "Italy"
  },
  {
    city: "Grosseto (GR)",
    iata: "GRS",
    name: "Grosseto Corrado Baccarini Air Base / Grosseto Airport",
    country: "Italy"
  },
  {
    city: "Perugia (PG)",
    iata: "PEG",
    name: "Perugia San Francesco d'Assisi – Umbria International Airport",
    country: "Italy"
  },
  {
    city: "Zgornji Brnik",
    iata: "LJU",
    name: "Ljubljana Jože Pučnik Airport",
    country: "SI"
  },
  {
    city: "Maribor",
    iata: "MBX",
    name: "Maribor Edvard Rusjan Airport",
    country: "SI"
  },
  {
    city: "Sečovlje",
    iata: "POW",
    name: "Portorož Airport",
    country: "SI"
  },
  {
    city: "Nuwara Eliya",
    iata: "NUA",
    name: "Nuwara Eliya (Lake Gregory) Waterdrome",
    country: "Sri Lanka"
  },
  {
    city: "Lekana",
    iata: "LKC",
    name: "Lekana Airport",
    country: "CG"
  },
  {
    city: "České Budějovice",
    iata: "JCL",
    name: "České Budějovice South Bohemian Airport",
    country: "Czech Republic"
  },
  {
    city: "Uherské Hradiště",
    iata: "UHE",
    name: "Kunovice Airport",
    country: "Czech Republic"
  },
  {
    city: "Karlovy Vary",
    iata: "KLV",
    name: "Karlovy Vary Airport",
    country: "Czech Republic"
  },
  {
    city: "Mnichovo Hradiště",
    iata: "HRA",
    name: "Mnichovo Hradiště Airport",
    country: "Czech Republic"
  },
  {
    city: "Mošnov",
    iata: "OSR",
    name: "Leoš Janáček Airport Ostrava",
    country: "Czech Republic"
  },
  {
    city: "Olomouc",
    iata: "OLO",
    name: "Olomouc Airport",
    country: "Czech Republic"
  },
  {
    city: "Pardubice",
    iata: "PED",
    name: "Pardubice Airport",
    country: "Czech Republic"
  },
  {
    city: "Přerov",
    iata: "PRV",
    name: "Přerov Air Base",
    country: "Czech Republic"
  },
  {
    city: "Prague",
    iata: "PRG",
    name: "Václav Havel Airport Prague",
    country: "Czech Republic"
  },
  {
    city: "Brno",
    iata: "BRQ",
    name: "Brno-Tuřany Airport",
    country: "Czech Republic"
  },
  {
    city: "Vodochody",
    iata: "VOD",
    name: "Vodochody Airport",
    country: "Czech Republic"
  },
  {
    city: "Dolní Benešov",
    iata: "ZBE",
    name: "Zábřeh Dolní Benešov Airfield",
    country: "Czech Republic"
  },
  {
    city: "Tel Aviv",
    iata: "TLV",
    name: "Ben Gurion International Airport",
    country: "Israel"
  },
  {
    city: "Beersheba",
    iata: "BEV",
    name: "Beersheba (Teyman) Airport",
    country: "Israel"
  },
  {
    city: "Eilat",
    iata: "ETM",
    name: "Ramon International Airport",
    country: "Israel"
  },
  {
    city: "Sapir",
    iata: "EIY",
    name: "Ein Yahav Airfield",
    country: "Israel"
  },
  {
    city: "La Lima",
    iata: "LLH",
    name: "La Lima - Reginaldo Hammer Airport",
    country: "HN"
  },
  {
    city: "Haifa",
    iata: "HFA",
    name: "Uri Michaeli Haifa International Airport",
    country: "Israel"
  },
  {
    city: "Rosh Pina",
    iata: "RPN",
    name: "Rosh Pina Airport",
    country: "Israel"
  },
  {
    city: "Kiryat Shmona",
    iata: "KSW",
    name: "Kiryat Shmona Airport",
    country: "Israel"
  },
  {
    city: "Lissadell Station",
    iata: "LLL",
    name: "Lissadell Airport",
    country: "Australia"
  },
  {
    city: "Mitzpe Ramon",
    iata: "MIP",
    name: "Mitzpe Ramon Airfield",
    country: "Israel"
  },
  {
    city: "Masada",
    iata: "MTZ",
    name: "Bar Yehuda Airfield",
    country: "Israel"
  },
  {
    city: "Beersheba",
    iata: "VTM",
    name: "Nevatim Air Base",
    country: "Israel"
  },
  {
    city: "Eilat",
    iata: "VDA",
    name: "Ovda Airport",
    country: "Israel"
  },
  {
    city: "Gozo",
    iata: "GZM",
    name: "Xewkija Heliport",
    country: "MT"
  },
  {
    city: "Valletta",
    iata: "MLA",
    name: "Malta International Airport",
    country: "MT"
  },
  {
    city: "Naifaru",
    iata: "LMV",
    name: "Madivaru Airport",
    country: "MV"
  },
  {
    city: "Palma",
    iata: "LMZ",
    name: "Palma Airport",
    country: "MZ"
  },
  {
    city: "Fontvieille",
    iata: "MCM",
    name: "Monaco Heliport",
    country: "MC"
  },
  {
    city: "Sankt Anton am Arlberg",
    iata: "ANT",
    name: "Sankt Anton am Arlberg Heliport",
    country: "AT"
  },
  {
    city: "Hohenems",
    iata: "HOH",
    name: "Hohenems-Dornbirn Airfield",
    country: "AT"
  },
  {
    city: "Lagos de Moreno",
    iata: "LOM",
    name: "Francisco Primo de Verdad y Ramos Airport",
    country: "Mexico"
  },
  {
    city: "Fort Rucker Ozark",
    iata: "LOR",
    name: "Lowe AHP (Fort Rucker) Heliport",
    country: "United States"
  },
  {
    city: "Feldkirchen bei Graz",
    iata: "GRZ",
    name: "Graz Airport",
    country: "AT"
  },
  {
    city: "Innsbruck",
    iata: "INN",
    name: "Innsbruck Airport",
    country: "AT"
  },
  {
    city: "Klagenfurt am Wörthersee",
    iata: "KLU",
    name: "Klagenfurt Airport",
    country: "AT"
  },
  {
    city: "Linz",
    iata: "LNZ",
    name: "Linz-Hörsching Airport",
    country: "AT"
  },
  {
    city: "Salzburg",
    iata: "SZG",
    name: "Salzburg Airport",
    country: "AT"
  },
  {
    city: "Vienna",
    iata: "VIE",
    name: "Vienna International Airport",
    country: "AT"
  },
  {
    city: "Vila do Porto",
    iata: "SMA",
    name: "Santa Maria Airport",
    country: "PT"
  },
  {
    city: "Bragança",
    iata: "BGC",
    name: "Bragança Airport",
    country: "PT"
  },
  {
    city: "Beja",
    iata: "BYJ",
    name: "Beja Airport / Airbase",
    country: "PT"
  },
  {
    city: "Corvo",
    iata: "CVU",
    name: "Corvo Airport",
    country: "PT"
  },
  {
    city: "Cascais",
    iata: "CAT",
    name: "Cascais Airport",
    country: "PT"
  },
  {
    city: "Santa Cruz das Flores",
    iata: "FLW",
    name: "Flores Airport",
    country: "PT"
  },
  {
    city: "Faro",
    iata: "FAO",
    name: "Faro - Gago Coutinho International Airport",
    country: "PT"
  },
  {
    city: "Santa Cruz da Graciosa",
    iata: "GRW",
    name: "Graciosa Airport",
    country: "PT"
  },
  {
    city: "Horta",
    iata: "HOR",
    name: "Horta Airport",
    country: "PT"
  },
  {
    city: "Praia da Vitória",
    iata: "TER",
    name: "Lajes Airport",
    country: "PT"
  },
  {
    city: "Funchal",
    iata: "FNC",
    name: "Cristiano Ronaldo International Airport",
    country: "PT"
  },
  {
    city: "Ponta Delgada",
    iata: "PDL",
    name: "João Paulo II Airport",
    country: "PT"
  },
  {
    city: "Pico Island",
    iata: "PIX",
    name: "Pico Airport",
    country: "PT"
  },
  {
    city: "Portimão",
    iata: "PRM",
    name: "Portimão Airport",
    country: "PT"
  },
  {
    city: "Porto",
    iata: "OPO",
    name: "Francisco de Sá Carneiro Airport",
    country: "PT"
  },
  {
    city: "Vila Baleira",
    iata: "PXO",
    name: "Porto Santo Airport",
    country: "PT"
  },
  {
    city: "Lisbon",
    iata: "LIS",
    name: "Lisbon Humberto Delgado Airport",
    country: "PT"
  },
  {
    city: "Velas",
    iata: "SJZ",
    name: "São Jorge Airport",
    country: "PT"
  },
  {
    city: "Vila Real",
    iata: "VRL",
    name: "Vila Real Airport",
    country: "PT"
  },
  {
    city: "Viseu",
    iata: "VSE",
    name: "Aerodromo Goncalves Lobato (Viseu Airport)",
    country: "PT"
  },
  {
    city: "Mahovljani",
    iata: "BNX",
    name: "Banja Luka International Airport",
    country: "BA"
  },
  {
    city: "Mostar",
    iata: "OMO",
    name: "Mostar International Airport",
    country: "BA"
  },
  {
    city: "Sarajevo",
    iata: "SJJ",
    name: "Sarajevo International Airport",
    country: "BA"
  },
  {
    city: "Dubrave Gornje",
    iata: "TZL",
    name: "Tuzla International Airport",
    country: "BA"
  },
  {
    city: "Arad",
    iata: "ARW",
    name: "Arad International Airport",
    country: "RO"
  },
  {
    city: "Bacău",
    iata: "BCM",
    name: "Bacău George Enescu International  Airport",
    country: "RO"
  },
  {
    city: "Tăuții-Măgherăuș",
    iata: "BAY",
    name: "Maramureș International Airport",
    country: "RO"
  },
  {
    city: "Bucharest",
    iata: "BBU",
    name: "Bucharest Băneasa Aurel Vlaicu International Airport",
    country: "RO"
  },
  {
    city: "Brașov (Ghimbav)",
    iata: "GHV",
    name: "Brașov-Ghimbav International Airport",
    country: "RO"
  },
  {
    city: "Constanța",
    iata: "CND",
    name: "Mihail Kogălniceanu International Airport",
    country: "RO"
  },
  {
    city: "Cluj-Napoca",
    iata: "CLJ",
    name: "Avram Iancu Cluj International Airport",
    country: "RO"
  },
  {
    city: "Caransebeş",
    iata: "CSB",
    name: "Caransebeş Airport",
    country: "RO"
  },
  {
    city: "Craiova",
    iata: "CRA",
    name: "Craiova International Airport",
    country: "RO"
  },
  {
    city: "Iaşi",
    iata: "IAS",
    name: "Iaşi International Airport",
    country: "RO"
  },
  {
    city: "Oradea",
    iata: "OMR",
    name: "Oradea International Airport",
    country: "RO"
  },
  {
    city: "Otopeni",
    iata: "OTP",
    name: "Bucharest Henri Coandă International Airport",
    country: "RO"
  },
  {
    city: "Sibiu",
    iata: "SBZ",
    name: "Sibiu International Airport",
    country: "RO"
  },
  {
    city: "Satu Mare",
    iata: "SUJ",
    name: "Satu Mare International Airport",
    country: "RO"
  },
  {
    city: "Suceava",
    iata: "SCV",
    name: "Suceava Ștefan cel Mare International Airport",
    country: "RO"
  },
  {
    city: "Mihail Kogălniceanu",
    iata: "TCE",
    name: "Tulcea Danube Delta Airport",
    country: "RO"
  },
  {
    city: "Recea",
    iata: "TGM",
    name: "Târgu Mureş Transilvania International Airport",
    country: "RO"
  },
  {
    city: "Timişoara",
    iata: "TSR",
    name: "Timișoara Traian Vuia International Airport",
    country: "RO"
  },
  {
    city: "Geneva",
    iata: "GVA",
    name: "Geneva Cointrin International Airport",
    country: "Switzerland"
  },
  {
    city: "Sion",
    iata: "SIR",
    name: "Sion Airport",
    country: "Switzerland"
  },
  {
    city: "Emmen",
    iata: "EML",
    name: "Emmen Air Base",
    country: "Switzerland"
  },
  {
    city: "Payerne",
    iata: "VIP",
    name: "Payerne Air Base",
    country: "Switzerland"
  },
  {
    city: "Agno",
    iata: "LUG",
    name: "Lugano Airport",
    country: "Switzerland"
  },
  {
    city: "Bern",
    iata: "BRN",
    name: "Bern Airport",
    country: "Switzerland"
  },
  {
    city: "Buochs",
    iata: "BXO",
    name: "Buochs Airport",
    country: "Switzerland"
  },
  {
    city: "Zurich",
    iata: "ZRH",
    name: "Zürich Airport",
    country: "Switzerland"
  },
  {
    city: "St. Gallen",
    iata: "ACH",
    name: "Sankt Gallen Altenrhein Airport",
    country: "Switzerland"
  },
  {
    city: "Samedan",
    iata: "SMV",
    name: "Engadin Airport",
    country: "Switzerland"
  },
  {
    city: "Ankara",
    iata: "ESB",
    name: "Esenboğa International Airport",
    country: "Turkey"
  },
  {
    city: "Ankara",
    iata: "ANK",
    name: "Etimesgut Air Base",
    country: "Turkey"
  },
  {
    city: "Seyhan",
    iata: "ADA",
    name: "Adana Şakirpaşa Airport",
    country: "Turkey"
  },
  {
    city: "Sarıçam",
    iata: "UAB",
    name: "İncirlik Air Base",
    country: "Turkey"
  },
  {
    city: "Afyonkarahisar",
    iata: "AFY",
    name: "Afyon Air Base",
    country: "Turkey"
  },
  {
    city: "Antalya",
    iata: "AYT",
    name: "Antalya International Airport",
    country: "Turkey"
  },
  {
    city: "Gaziantep",
    iata: "GZT",
    name: "Gaziantep Oğuzeli International Airport",
    country: "Turkey"
  },
  {
    city: "Kastamonu",
    iata: "KFS",
    name: "Kastamonu Airport",
    country: "Turkey"
  },
  {
    city: "Konya",
    iata: "KYA",
    name: "Konya Airport",
    country: "Turkey"
  },
  {
    city: "Amasya",
    iata: "MZH",
    name: "Amasya Merzifon Airport",
    country: "Turkey"
  },
  {
    city: "Sivas",
    iata: "VAS",
    name: "Sivas Nuri Demirağ Airport",
    country: "Turkey"
  },
  {
    city: "Zonguldak",
    iata: "ONQ",
    name: "Zonguldak Çaycuma Airport",
    country: "Turkey"
  },
  {
    city: "Malatya",
    iata: "MLX",
    name: "Malatya Erhaç Airport",
    country: "Turkey"
  },
  {
    city: "Kayseri",
    iata: "ASR",
    name: "Kayseri Erkilet International Airport",
    country: "Turkey"
  },
  {
    city: "Tokat",
    iata: "TJK",
    name: "Tokat Airport",
    country: "Turkey"
  },
  {
    city: "Denizli",
    iata: "DNZ",
    name: "Çardak Airport",
    country: "Turkey"
  },
  {
    city: "Nevşehir",
    iata: "NAV",
    name: "Nevşehir Kapadokya Airport",
    country: "Turkey"
  },
  {
    city: "Istanbul(Bakırköy)",
    iata: "ISL",
    name: "İstanbul Atatürk Airport",
    country: "Turkey"
  },
  {
    city: "Aydın",
    iata: "CII",
    name: "Aydın Çıldır Airport",
    country: "Turkey"
  },
  {
    city: "Balıkesir",
    iata: "BZI",
    name: "Balıkesir Airport",
    country: "Turkey"
  },
  {
    city: "Bandırma",
    iata: "BDM",
    name: "Bandırma Airport",
    country: "Turkey"
  },
  {
    city: "Çanakkale",
    iata: "CKZ",
    name: "Çanakkale Airport",
    country: "Turkey"
  },
  {
    city: "Eskişehir",
    iata: "ESK",
    name: "Eskişehir Air Base",
    country: "Turkey"
  },
  {
    city: "Gaziemir",
    iata: "ADB",
    name: "Adnan Menderes International Airport",
    country: "Turkey"
  },
  {
    city: "Çiğli",
    iata: "IGL",
    name: "Çiğli Airbase",
    country: "Turkey"
  },
  {
    city: "Uşak",
    iata: "USQ",
    name: "Uşak Airport",
    country: "Turkey"
  },
  {
    city: "Kartepe",
    iata: "KCO",
    name: "Cengiz Topel Airport",
    country: "Turkey"
  },
  {
    city: "Yenişehir",
    iata: "YEI",
    name: "Bursa Yenişehir Airport",
    country: "Turkey"
  },
  {
    city: "Dalaman",
    iata: "DLM",
    name: "Dalaman International Airport",
    country: "Turkey"
  },
  {
    city: "Çorlu",
    iata: "TEQ",
    name: "Tekirdağ Çorlu Airport",
    country: "Turkey"
  },
  {
    city: "Bodrum",
    iata: "BXN",
    name: "Bodrum-Imsık Airport",
    country: "Turkey"
  },
  {
    city: "Eskişehir",
    iata: "AOE",
    name: "Hasan Polatkan Airport",
    country: "Turkey"
  },
  {
    city: "Altıntaş",
    iata: "KZR",
    name: "Zafer Airport",
    country: "Turkey"
  },
  {
    city: "Elazığ",
    iata: "EZS",
    name: "Elazığ Airport",
    country: "Turkey"
  },
  {
    city: "Ordu",
    iata: "OGU",
    name: "Ordu–Giresun Airport",
    country: "Turkey"
  },
  {
    city: "Diyarbakır",
    iata: "DIY",
    name: "Diyarbakır Airport",
    country: "Turkey"
  },
  {
    city: "Erzincan",
    iata: "ERC",
    name: "Erzincan Airport",
    country: "Turkey"
  },
  {
    city: "Erzurum",
    iata: "ERZ",
    name: "Erzurum International Airport",
    country: "Turkey"
  },
  {
    city: "Kars",
    iata: "KSY",
    name: "Kars Airport",
    country: "Turkey"
  },
  {
    city: "Trabzon",
    iata: "TZX",
    name: "Trabzon International Airport",
    country: "Turkey"
  },
  {
    city: "Van",
    iata: "VAN",
    name: "Van Ferit Melen Airport",
    country: "Turkey"
  },
  {
    city: "Batman",
    iata: "BAL",
    name: "Batman Airport",
    country: "Turkey"
  },
  {
    city: "Muş",
    iata: "MSR",
    name: "Muş Airport",
    country: "Turkey"
  },
  {
    city: "Siirt",
    iata: "SXZ",
    name: "Siirt Airport",
    country: "Turkey"
  },
  {
    city: "Sinop",
    iata: "NOP",
    name: "Sinop Airport",
    country: "Turkey"
  },
  {
    city: "Kahramanmaraş",
    iata: "KCM",
    name: "Kahramanmaraş Airport",
    country: "Turkey"
  },
  {
    city: "Ağrı",
    iata: "AJI",
    name: "Ağrı Airport",
    country: "Turkey"
  },
  {
    city: "Adıyaman",
    iata: "ADF",
    name: "Adıyaman Airport",
    country: "Turkey"
  },
  {
    city: "Mardin",
    iata: "MQM",
    name: "Mardin Airport",
    country: "Turkey"
  },
  {
    city: "Şanlıurfa",
    iata: "GNY",
    name: "Şanlıurfa GAP Airport",
    country: "Turkey"
  },
  {
    city: "Iğdır",
    iata: "IGD",
    name: "Iğdır Airport",
    country: "Turkey"
  },
  {
    city: "Bingöl",
    iata: "BGG",
    name: "Bingöl Airport",
    country: "Turkey"
  },
  {
    city: "Şırnak",
    iata: "NKT",
    name: "Şırnak Şerafettin Elçi Airport",
    country: "Turkey"
  },
  {
    city: "Hakkari",
    iata: "YKO",
    name: "Hakkari Yüksekova Airport",
    country: "Turkey"
  },
  {
    city: "Antakya",
    iata: "HTY",
    name: "Hatay Airport",
    country: "Turkey"
  },
  {
    city: "Tarsus",
    iata: "COV",
    name: "Çukurova International Airport",
    country: "Turkey"
  },
  {
    city: "Leitre",
    iata: "LTF",
    name: "Leitre Airport",
    country: "PG"
  },
  {
    city: "Selçuk",
    iata: "IZM",
    name: "Selçuk Efes Airport",
    country: "Turkey"
  },
  {
    city: "Isparta",
    iata: "ISE",
    name: "Süleyman Demirel International Airport",
    country: "Turkey"
  },
  {
    city: "Edremit",
    iata: "EDO",
    name: "Balıkesir Koca Seyit Airport",
    country: "Turkey"
  },
  {
    city: "Bodrum",
    iata: "BJV",
    name: "Milas Bodrum International Airport",
    country: "Turkey"
  },
  {
    city: "Gazipaşa",
    iata: "GZP",
    name: "Gazipaşa-Alanya Airport",
    country: "Turkey"
  },
  {
    city: "Samsun",
    iata: "SZF",
    name: "Samsun-Çarşamba Airport",
    country: "Turkey"
  },
  {
    city: "Pendik, Istanbul",
    iata: "SAW",
    name: "Istanbul Sabiha Gökçen International Airport",
    country: "Turkey"
  },
  {
    city: "Gökçeada",
    iata: "GKD",
    name: "Gökçeada Airport",
    country: "Turkey"
  },
  {
    city: "Istanbul",
    iata: "IST",
    name: "İstanbul Airport",
    country: "Turkey"
  },
  {
    city: "Rize",
    iata: "RZV",
    name: "Rize–Artvin Airport",
    country: "Turkey"
  },
  {
    city: "Bălți",
    iata: "BZY",
    name: "Bălți-Leadoveni International Airport",
    country: "MD"
  },
  {
    city: "Chişinău",
    iata: "RMO",
    name: "Chişinău International Airport",
    country: "MD"
  },
  {
    city: "Daugavpils",
    iata: "DGP",
    name: "Daugavpils International Airport",
    country: "LV"
  },
  {
    city: "Lebak",
    iata: "LWA",
    name: "Lebak Rural Airport",
    country: "Philippines"
  },
  {
    city: "Ohrid",
    iata: "OHD",
    name: "Ohrid St. Paul the Apostle Airport",
    country: "MK"
  },
  {
    city: "Ilinden",
    iata: "SKP",
    name: "Skopje International Airport",
    country: "MK"
  },
  {
    city: "Gibraltar",
    iata: "GIB",
    name: "Gibraltar Airport",
    country: "GI"
  },
  {
    city: "Brak",
    iata: "BCQ",
    name: "Brak Airport",
    country: "LY"
  },
  {
    city: "Martuba",
    iata: "DNF",
    name: "Martuba Air Base",
    country: "LY"
  },
  {
    city: "Belgrade",
    iata: "BEG",
    name: "Belgrade Nikola Tesla Airport",
    country: "RS"
  },
  {
    city: "Berane",
    iata: "IVG",
    name: "Berane Airport",
    country: "ME"
  },
  {
    city: "Zemun",
    iata: "BJY",
    name: "Batajnica Air Base",
    country: "RS"
  },
  {
    city: "Kraljevo",
    iata: "KVO",
    name: "Morava Airport",
    country: "RS"
  },
  {
    city: "Niš",
    iata: "INI",
    name: "Niš Constantine the Great Airport",
    country: "RS"
  },
  {
    city: "Podgorica",
    iata: "TGD",
    name: "Podgorica Airport / Podgorica Golubovci Airbase",
    country: "ME"
  },
  {
    city: "Tivat",
    iata: "TIV",
    name: "Tivat Airport",
    country: "ME"
  },
  {
    city: "Stapari",
    iata: "UZC",
    name: "Ponikve Airport",
    country: "RS"
  },
  {
    city: "Nanchong (Langzhong)",
    iata: "LZG",
    name: "Langzhong Gucheng Airport",
    country: "China"
  },
  {
    city: "Bratislava",
    iata: "BTS",
    name: "M. R. Štefánik Airport",
    country: "SK"
  },
  {
    city: "Košice",
    iata: "KSC",
    name: "Košice International Airport",
    country: "SK"
  },
  {
    city: "Lučenec",
    iata: "LUE",
    name: "Lučenec Airfield",
    country: "SK"
  },
  {
    city: "Piešťany",
    iata: "PZY",
    name: "Piešťany Airport",
    country: "SK"
  },
  {
    city: "Prešov",
    iata: "POV",
    name: "Prešov Air Base",
    country: "SK"
  },
  {
    city: "Sliač",
    iata: "SLD",
    name: "Sliač Airport",
    country: "SK"
  },
  {
    city: "Poprad",
    iata: "TAT",
    name: "Poprad-Tatry Airport",
    country: "SK"
  },
  {
    city: "Dolný Hričov",
    iata: "ILZ",
    name: "Žilina-Dolný Hričov Airport",
    country: "SK"
  },
  {
    city: "Drummond",
    iata: "DRU",
    name: "Drummond Airport",
    country: "United States"
  },
  {
    city: "Guelmim",
    iata: "GLN",
    name: "Guelmim Airport",
    country: "MA"
  },
  {
    city: "Ware",
    iata: "UWA",
    name: "Ware Airport",
    country: "United States"
  },
  {
    city: "Mamai",
    iata: "MAP",
    name: "Mamai Airport",
    country: "PG"
  },
  {
    city: "Cockburn Town",
    iata: "GDT",
    name: "JAGS McCartney International Airport",
    country: "TC"
  },
  {
    city: "Middle Caicos",
    iata: "MDS",
    name: "Middle Caicos Airport",
    country: "TC"
  },
  {
    city: "North Caicos",
    iata: "NCA",
    name: "North Caicos Airport",
    country: "TC"
  },
  {
    city: "Pine Cay",
    iata: "PIC",
    name: "Pine Cay Airport",
    country: "TC"
  },
  {
    city: "Providenciales",
    iata: "PLS",
    name: "Providenciales International Airport",
    country: "TC"
  },
  {
    city: "South Caicos",
    iata: "XSC",
    name: "South Caicos Airport",
    country: "TC"
  },
  {
    city: "Salt Cay",
    iata: "SLX",
    name: "Salt Cay Airport",
    country: "TC"
  },
  {
    city: "Barahona",
    iata: "BRX",
    name: "Maria Montez International Airport",
    country: "DO"
  },
  {
    city: "Cabo Rojo",
    iata: "CBJ",
    name: "Cabo Rojo Airport",
    country: "DO"
  },
  {
    city: "Samana",
    iata: "AZS",
    name: "Samaná El Catey International Airport",
    country: "DO"
  },
  {
    city: "Costanza",
    iata: "COZ",
    name: "Constanza - Expedición 14 de Junio National Airport",
    country: "DO"
  },
  {
    city: "La Isabela",
    iata: "JBQ",
    name: "La Isabela International Airport",
    country: "DO"
  },
  {
    city: "La Romana",
    iata: "LRM",
    name: "Casa De Campo International Airport",
    country: "DO"
  },
  {
    city: "Punta Cana",
    iata: "PUJ",
    name: "Punta Cana International Airport",
    country: "DO"
  },
  {
    city: "Puerto Plata",
    iata: "POP",
    name: "Gregorio Luperon International Airport",
    country: "DO"
  },
  {
    city: "Santo Domingo",
    iata: "SDQ",
    name: "Las Américas International Airport",
    country: "DO"
  },
  {
    city: "Santiago",
    iata: "STI",
    name: "Cibao International Airport",
    country: "DO"
  },
  {
    city: "Médouneu, Gabon",
    iata: "MDV",
    name: "Médouneu Airport",
    country: "GQ"
  },
  {
    city: "Limestone",
    iata: "LIZ",
    name: "Loring International Airport",
    country: "United States"
  },
  {
    city: "Melfi",
    iata: "MEF",
    name: "Melfi Airport",
    country: "TD"
  },
  {
    city: "Ankokoambo",
    iata: "NKO",
    name: "Ankokoambo Airport",
    country: "MG"
  },
  {
    city: "Isalo",
    iata: "RLR",
    name: "Relais de la Reine Airport",
    country: "MG"
  },
  {
    city: "Doany",
    iata: "DOA",
    name: "Doany Airport",
    country: "MG"
  },
  {
    city: "Coban",
    iata: "CBV",
    name: "Coban Airport",
    country: "GT"
  },
  {
    city: "Carmelita",
    iata: "CMM",
    name: "Carmelita Airport",
    country: "GT"
  },
  {
    city: "Coatepeque",
    iata: "CTF",
    name: "Coatepeque Airport",
    country: "GT"
  },
  {
    city: "Guatemala City",
    iata: "GUA",
    name: "La Aurora International Airport",
    country: "GT"
  },
  {
    city: "Huehuetenango",
    iata: "HUG",
    name: "Huehuetenango Airport",
    country: "GT"
  },
  {
    city: "Matagorda Island",
    iata: "MGI",
    name: "National Wildlife Refuge Airport",
    country: "United States"
  },
  {
    city: "Manga Mission",
    iata: "MGP",
    name: "Manga Airport",
    country: "PG"
  },
  {
    city: "Puerto Barrios",
    iata: "PBR",
    name: "Puerto Barrios Airport",
    country: "GT"
  },
  {
    city: "Playa Grande",
    iata: "PKJ",
    name: "Playa Grande Airport",
    country: "GT"
  },
  {
    city: "Poptún",
    iata: "PON",
    name: "Poptún Airport",
    country: "GT"
  },
  {
    city: "Santa Cruz del Quiché",
    iata: "AQB",
    name: "Quiché Airport",
    country: "GT"
  },
  {
    city: "Quezaltenango",
    iata: "AAZ",
    name: "Quezaltenango Airport",
    country: "GT"
  },
  {
    city: "Rubelsanto",
    iata: "RUV",
    name: "Rubelsanto Airport",
    country: "GT"
  },
  {
    city: "Rio Dulce",
    iata: "LCF",
    name: "Las Vegas Airport",
    country: "GT"
  },
  {
    city: "Retalhuleu",
    iata: "RER",
    name: "Retalhuleu Airport",
    country: "GT"
  },
  {
    city: "Puerto San José",
    iata: "GSJ",
    name: "San José Airport",
    country: "GT"
  },
  {
    city: "San Benito",
    iata: "FRS",
    name: "Mundo Maya International Airport",
    country: "GT"
  },
  {
    city: "Ujae Atoll",
    iata: "UJE",
    name: "Ujae Atoll Airport",
    country: "MH"
  },
  {
    city: "Ailuk Island",
    iata: "AIM",
    name: "Ailuk Airport",
    country: "MH"
  },
  {
    city: "Aur Atoll",
    iata: "AUL",
    name: "Aur Island Airport",
    country: "MH"
  },
  {
    city: "Bikini Atoll",
    iata: "BII",
    name: "Bikini Atoll Airport",
    country: "MH"
  },
  {
    city: "Ebadon Island",
    iata: "EBN",
    name: "Ebadon Airport",
    country: "MH"
  },
  {
    city: "Ailinglapalap Atoll",
    iata: "JAT",
    name: "Jabot Airport",
    country: "MH"
  },
  {
    city: "Ailinglapalap Atoll",
    iata: "JEJ",
    name: "Jeh Airport",
    country: "MH"
  },
  {
    city: "Likiep Island",
    iata: "LIK",
    name: "Likiep Airport",
    country: "MH"
  },
  {
    city: "Lae Island",
    iata: "LML",
    name: "Lae Island Airport",
    country: "MH"
  },
  {
    city: "Maloelap Island",
    iata: "MAV",
    name: "Maloelap Island Airport",
    country: "MH"
  },
  {
    city: "Mejit Atoll",
    iata: "MJB",
    name: "Mejit Atoll Airport",
    country: "MH"
  },
  {
    city: "Majkin",
    iata: "MJE",
    name: "Majkin Airport",
    country: "MH"
  },
  {
    city: "Namorik Atoll",
    iata: "NDK",
    name: "Namorik Airport",
    country: "MH"
  },
  {
    city: "Rongelap Island",
    iata: "RNP",
    name: "Rongelap Island Airport",
    country: "MH"
  },
  {
    city: "Arno Atoll",
    iata: "TIC",
    name: "Tinak Airport",
    country: "MH"
  },
  {
    city: "Jabor Jaluit Atoll",
    iata: "UIT",
    name: "Jaluit Airport",
    country: "MH"
  },
  {
    city: "Woja",
    iata: "WJA",
    name: "Woja Airport",
    country: "MH"
  },
  {
    city: "Wotje",
    iata: "WTE",
    name: "Wotje Airport",
    country: "MH"
  },
  {
    city: "Wotho Island",
    iata: "WTO",
    name: "Wotho Island Airport",
    country: "MH"
  },
  {
    city: "Ahuas",
    iata: "AHS",
    name: "Ahuas Airport",
    country: "HN"
  },
  {
    city: "Brus Laguna",
    iata: "BHG",
    name: "Brus Laguna Airport",
    country: "HN"
  },
  {
    city: "La Unión",
    iata: "LUI",
    name: "Carta Airport",
    country: "HN"
  },
  {
    city: "Coyoles",
    iata: "CYL",
    name: "Coyoles Airport",
    country: "HN"
  },
  {
    city: "Cauquira",
    iata: "CDD",
    name: "Cauquira Airport",
    country: "HN"
  },
  {
    city: "Olanchito",
    iata: "OAN",
    name: "El Arrayán Airport",
    country: "HN"
  },
  {
    city: "El Aguacate",
    iata: "CAA",
    name: "El Aguacate Airport",
    country: "HN"
  },
  {
    city: "Gracias",
    iata: "GAC",
    name: "Celaque Gracias Airport",
    country: "HN"
  },
  {
    city: "Iriona",
    iata: "IRN",
    name: "Iriona Airport",
    country: "HN"
  },
  {
    city: "Jutigalpa",
    iata: "JUT",
    name: "Jutigalpa airport",
    country: "HN"
  },
  {
    city: "La Ceiba",
    iata: "LCE",
    name: "Golosón International Airport",
    country: "HN"
  },
  {
    city: "La Esperanza",
    iata: "LEZ",
    name: "La Esperanza Airport",
    country: "HN"
  },
  {
    city: "San Pedro Sula",
    iata: "SAP",
    name: "Ramón Villeda Morales International Airport",
    country: "HN"
  },
  {
    city: "Limón",
    iata: "LMH",
    name: "Limon Airport",
    country: "HN"
  },
  {
    city: "Mullen",
    iata: "MHN",
    name: "Hooker County Airport",
    country: "United States"
  },
  {
    city: "Guanaja",
    iata: "GJA",
    name: "La Laguna Airport",
    country: "HN"
  },
  {
    city: "Palacios",
    iata: "PCH",
    name: "Palacios Airport",
    country: "HN"
  },
  {
    city: "Puerto Lempira",
    iata: "PEU",
    name: "Puerto Lempira Airport",
    country: "HN"
  },
  {
    city: "Coxen Hole",
    iata: "RTB",
    name: "Juan Manuel Gálvez International Airport",
    country: "HN"
  },
  {
    city: "Copán Ruinas",
    iata: "RUY",
    name: "Rioamarillo Airport",
    country: "HN"
  },
  {
    city: "Palmerola",
    iata: "XPL",
    name: "Palmerola International Airport",
    country: "HN"
  },
  {
    city: "Tela",
    iata: "TEA",
    name: "Tela Airport",
    country: "HN"
  },
  {
    city: "Tegucigalpa",
    iata: "TGU",
    name: "Toncontín Airport",
    country: "HN"
  },
  {
    city: "Trujillo",
    iata: "TJI",
    name: "Trujillo Airport",
    country: "HN"
  },
  {
    city: "Tocoa",
    iata: "TCF",
    name: "Tocoa Airport",
    country: "HN"
  },
  {
    city: "Sulaco",
    iata: "SCD",
    name: "Sulaco Airport",
    country: "HN"
  },
  {
    city: "Utila Island",
    iata: "UII",
    name: "Utila Airport",
    country: "HN"
  },
  {
    city: "Yoro",
    iata: "ORO",
    name: "Yoro Airport",
    country: "HN"
  },
  {
    city: "Mainoru",
    iata: "MIZ",
    name: "Mainoru Airstrip",
    country: "Australia"
  },
  {
    city: "Moki",
    iata: "MJJ",
    name: "Moki Airport",
    country: "PG"
  },
  {
    city: "Maganja",
    iata: "MJS",
    name: "Maganja da Costa Airport",
    country: "MZ"
  },
  {
    city: "Boscobel",
    iata: "OCJ",
    name: "Ian Fleming International Airport",
    country: "JM"
  },
  {
    city: "Kingston",
    iata: "KIN",
    name: "Norman Manley International Airport",
    country: "JM"
  },
  {
    city: "Montego Bay",
    iata: "MBJ",
    name: "Sangster International Airport",
    country: "JM"
  },
  {
    city: "Ken Jones",
    iata: "POT",
    name: "Ken Jones Airport",
    country: "JM"
  },
  {
    city: "Negril",
    iata: "NEG",
    name: "Negril Airport",
    country: "JM"
  },
  {
    city: "Tinson Pen",
    iata: "KTP",
    name: "Tinson Pen Airport",
    country: "JM"
  },
  {
    city: "Mili Island",
    iata: "MIJ",
    name: "Mili Island Airport",
    country: "MH"
  },
  {
    city: "Hinthada",
    iata: "HEB",
    name: "Hinthada Airport",
    country: "MM"
  },
  {
    city: "Tizimin",
    iata: "TZM",
    name: "Aeródromo de Cupul",
    country: "Mexico"
  },
  {
    city: "Acapulco",
    iata: "ACA",
    name: "General Juan N. Álvarez International Airport",
    country: "Mexico"
  },
  {
    city: "Monterrey",
    iata: "NTR",
    name: "Del Norte International Airport",
    country: "Mexico"
  },
  {
    city: "Aguascalientes",
    iata: "AGU",
    name: "Aguascalientes International Airport",
    country: "Mexico"
  },
  {
    city: "Huatulco",
    iata: "HUX",
    name: "Bahías de Huatulco International Airport",
    country: "Mexico"
  },
  {
    city: "Cananea",
    iata: "CNA",
    name: "Cananea National Airport",
    country: "Mexico"
  },
  {
    city: "Temixco",
    iata: "CVJ",
    name: "General Mariano Matamoros International Airport",
    country: "Mexico"
  },
  {
    city: "Ciudad Acuña",
    iata: "ACN",
    name: "Ciudad Acuña New International Airport",
    country: "Mexico"
  },
  {
    city: "Ciudad del Carmen",
    iata: "CME",
    name: "Ciudad del Carmen International Airport",
    country: "Mexico"
  },
  {
    city: "Nuevo Casas Grandes",
    iata: "NCG",
    name: "Aeropuerto Municipal de Nuevo Casas Grandes",
    country: "Mexico"
  },
  {
    city: "Culiacán",
    iata: "CUL",
    name: "Bachigualato Federal International Airport",
    country: "Mexico"
  },
  {
    city: "Chetumal",
    iata: "CTM",
    name: "Chetumal International Airport",
    country: "Mexico"
  },
  {
    city: "Ciudad Obregón",
    iata: "CEN",
    name: "Ciudad Obregón International Airport",
    country: "Mexico"
  },
  {
    city: "Comitán",
    iata: "CJT",
    name: "San Antonio Copalar Airport",
    country: "Mexico"
  },
  {
    city: "Campeche",
    iata: "CPE",
    name: "Ingeniero Alberto Acuña Ongay International Airport",
    country: "Mexico"
  },
  {
    city: "Ciudad Juárez",
    iata: "CJS",
    name: "Abraham González International Airport",
    country: "Mexico"
  },
  {
    city: "Tinúm",
    iata: "CZA",
    name: "Chichén Itzá International Airport",
    country: "Mexico"
  },
  {
    city: "Chihuahua",
    iata: "CUU",
    name: "General Roberto Fierro Villalobos International Airport",
    country: "Mexico"
  },
  {
    city: "Ciudad Victoria",
    iata: "CVM",
    name: "General Pedro Jose Mendez International Airport",
    country: "Mexico"
  },
  {
    city: "Celaya",
    iata: "CYW",
    name: "Captain Rogelio Castillo National Airport",
    country: "Mexico"
  },
  {
    city: "Cozumel",
    iata: "CZM",
    name: "Cozumel International Airport",
    country: "Mexico"
  },
  {
    city: "Comondú",
    iata: "CUA",
    name: "Ciudad Constitución National Airport",
    country: "Mexico"
  },
  {
    city: "Ciudad Mante",
    iata: "MMC",
    name: "Ciudad Mante Los Huastecas National Airport",
    country: "Mexico"
  },
  {
    city: "Durango",
    iata: "DGO",
    name: "General Guadalupe Victoria International Airport",
    country: "Mexico"
  },
  {
    city: "Tepic",
    iata: "TPQ",
    name: "Amado Nervo National Airport",
    country: "Mexico"
  },
  {
    city: "Ensenada",
    iata: "ESE",
    name: "Ensenada International Airport / El Ciprés Air Base",
    country: "Mexico"
  },
  {
    city: "Guadalajara",
    iata: "GDL",
    name: "Guadalajara International Airport",
    country: "Mexico"
  },
  {
    city: "Guaymas",
    iata: "GYM",
    name: "General José María Yáñez International Airport",
    country: "Mexico"
  },
  {
    city: "San Quintín",
    iata: "GUB",
    name: "Guerrero Negro Airport",
    country: "Mexico"
  },
  {
    city: "Tehuacán",
    iata: "TCN",
    name: "Tehuacán National Airport",
    country: "Mexico"
  },
  {
    city: "Hermosillo",
    iata: "HMO",
    name: "General Ignacio L. Pesqueira International Airport",
    country: "Mexico"
  },
  {
    city: "Colima",
    iata: "CLQ",
    name: "Licenciado Miguel de la Madrid International Airport",
    country: "Mexico"
  },
  {
    city: "Isla Mujeres",
    iata: "ISJ",
    name: "Isla Mujeres National Airport",
    country: "Mexico"
  },
  {
    city: "Saltillo",
    iata: "SLW",
    name: "Plan De Guadalupe International Airport",
    country: "Mexico"
  },
  {
    city: "Ixtepec",
    iata: "IZT",
    name: "General Antonio Cárdenas Rodríguez National Airport / Ixtepec Air Base",
    country: "Mexico"
  },
  {
    city: "Emiliano Zapata",
    iata: "JAL",
    name: "El Lencero Airport",
    country: "Mexico"
  },
  {
    city: "Atizapán de Zaragoza",
    iata: "AZP",
    name: "Jorge Jiménez Cantú National Airport",
    country: "Mexico"
  },
  {
    city: "Lázaro Cárdenas",
    iata: "LZC",
    name: "Lázaro Cárdenas Airport",
    country: "Mexico"
  },
  {
    city: "Los Mochis",
    iata: "LMM",
    name: "Valle del Fuerte International Airport",
    country: "Mexico"
  },
  {
    city: "Silao",
    iata: "BJX",
    name: "Guanajuato International Airport",
    country: "Mexico"
  },
  {
    city: "La Paz",
    iata: "LAP",
    name: "Manuel Márquez de León International Airport",
    country: "Mexico"
  },
  {
    city: "Loreto",
    iata: "LTO",
    name: "Loreto International Airport",
    country: "Mexico"
  },
  {
    city: "Matamoros",
    iata: "MAM",
    name: "General Servando Canales International Airport",
    country: "Mexico"
  },
  {
    city: "Mérida",
    iata: "MID",
    name: "Manuel Crescencio Rejón International Airport",
    country: "Mexico"
  },
  {
    city: "Mulege",
    iata: "MUG",
    name: "Mulege Airport",
    country: "Mexico"
  },
  {
    city: "Mexicali",
    iata: "MXL",
    name: "General Rodolfo Sánchez Taboada International Airport",
    country: "Mexico"
  },
  {
    city: "Morelia",
    iata: "MLM",
    name: "General Francisco J. Mujica International Airport",
    country: "Mexico"
  },
  {
    city: "Cosoleacaque",
    iata: "MTT",
    name: "Minatitlán/Coatzacoalcos International Airport",
    country: "Mexico"
  },
  {
    city: "Monclova",
    iata: "LOV",
    name: "Monclova International Airport",
    country: "Mexico"
  },
  {
    city: "Mexico City",
    iata: "MEX",
    name: "Mexico City Benito Juárez International Airport",
    country: "Mexico"
  },
  {
    city: "Monterrey",
    iata: "MTY",
    name: "Monterrey International Airport",
    country: "Mexico"
  },
  {
    city: "Mazatlàn",
    iata: "MZT",
    name: "General Rafael Buelna International Airport",
    country: "Mexico"
  },
  {
    city: "Nogales",
    iata: "NOG",
    name: "Nogales International Airport",
    country: "Mexico"
  },
  {
    city: "Nuevo Laredo",
    iata: "NLD",
    name: "Quetzalcóatl International Airport",
    country: "Mexico"
  },
  {
    city: "Oaxaca",
    iata: "OAX",
    name: "Xoxocotlán International Airport",
    country: "Mexico"
  },
  {
    city: "Poza Rica",
    iata: "PAZ",
    name: "El Tajín National Airport",
    country: "Mexico"
  },
  {
    city: "Puebla",
    iata: "PBC",
    name: "Hermanos Serdán International Airport",
    country: "Mexico"
  },
  {
    city: "Puerto Peñasco",
    iata: "PPE",
    name: "Mar de Cortés International Airport",
    country: "Mexico"
  },
  {
    city: "Piedras Negras",
    iata: "PDS",
    name: "Piedras Negras International Airport",
    country: "Mexico"
  },
  {
    city: "La Ribera",
    iata: "PCO",
    name: "Punta Colorada Airport",
    country: "Mexico"
  },
  {
    city: "Uruapan",
    iata: "UPN",
    name: "Uruapan - Licenciado y General Ignacio Lopez Rayon International Airport",
    country: "Mexico"
  },
  {
    city: "Palenque",
    iata: "PQM",
    name: "Palenque International Airport",
    country: "Mexico"
  },
  {
    city: "Puerto Vallarta",
    iata: "PVR",
    name: "Puerto Vallarta International Airport",
    country: "Mexico"
  },
  {
    city: "Puerto Escondido",
    iata: "PXM",
    name: "Puerto Escondido International Airport",
    country: "Mexico"
  },
  {
    city: "Querétaro",
    iata: "QRO",
    name: "Querétaro Intercontinental Airport",
    country: "Mexico"
  },
  {
    city: "Reynosa",
    iata: "REX",
    name: "General Lucio Blanco International Airport",
    country: "Mexico"
  },
  {
    city: "San José del Cabo",
    iata: "SJD",
    name: "Los Cabos International Airport",
    country: "Mexico"
  },
  {
    city: "Mexicali",
    iata: "SFH",
    name: "San Felipe International Airport",
    country: "Mexico"
  },
  {
    city: "Cabo San Lucas",
    iata: "CSW",
    name: "Cabo San Lucas International Airport",
    country: "Mexico"
  },
  {
    city: "Mexico City",
    iata: "NLU",
    name: "Felipe Ángeles International Airport",
    country: "Mexico"
  },
  {
    city: "San Luis Potosí",
    iata: "SLP",
    name: "Ponciano Arriaga International Airport",
    country: "Mexico"
  },
  {
    city: "Salina Cruz",
    iata: "SCX",
    name: "Estación Aeronaval de Salina Cruz",
    country: "Mexico"
  },
  {
    city: "Torreón",
    iata: "TRC",
    name: "Francisco Sarabia Tinoco International Airport",
    country: "Mexico"
  },
  {
    city: "Tuxtla Gutiérrez",
    iata: "TGZ",
    name: "Angel Albino Corzo International Airport",
    country: "Mexico"
  },
  {
    city: "Tijuana",
    iata: "TIJ",
    name: "General Abelardo L. Rodriguez International Airport",
    country: "Mexico"
  },
  {
    city: "Tulum",
    iata: "TQO",
    name: "Felipe Carrillo Puerto International Airport Tulum",
    country: "Mexico"
  },
  {
    city: "Ciudad Madero",
    iata: "TAM",
    name: "General Francisco Javier Mina International Airport",
    country: "Mexico"
  },
  {
    city: "Tamuín",
    iata: "TSL",
    name: "Tamuín National Airport",
    country: "Mexico"
  },
  {
    city: "Toluca",
    iata: "TLC",
    name: "Adolfo López Mateos International Airport",
    country: "Mexico"
  },
  {
    city: "Tapachula",
    iata: "TAP",
    name: "Tapachula International Airport",
    country: "Mexico"
  },
  {
    city: "Tulum",
    iata: "TUY",
    name: "Base Aeronaval de Tulum",
    country: "Mexico"
  },
  {
    city: "Cancún",
    iata: "CUN",
    name: "Cancún International Airport",
    country: "Mexico"
  },
  {
    city: "Mal Island",
    iata: "MMV",
    name: "Mal Airport",
    country: "PG"
  },
  {
    city: "Villahermosa",
    iata: "VSA",
    name: "Carlos Rovirosa Pérez International Airport",
    country: "Mexico"
  },
  {
    city: "Veracruz",
    iata: "VER",
    name: "General Heriberto Jara International Airport",
    country: "Mexico"
  },
  {
    city: "Zacatecas",
    iata: "ZCL",
    name: "General Leobardo C. Ruiz International Airport",
    country: "Mexico"
  },
  {
    city: "Ixtapa",
    iata: "ZIH",
    name: "Ixtapa-Zihuatanejo International Airport",
    country: "Mexico"
  },
  {
    city: "Zamora",
    iata: "ZMM",
    name: "Zamora Airport",
    country: "Mexico"
  },
  {
    city: "Manzanillo",
    iata: "ZLO",
    name: "Playa de Oro International Airport",
    country: "Mexico"
  },
  {
    city: "Bluefields",
    iata: "BEF",
    name: "Bluefields Airport",
    country: "NI"
  },
  {
    city: "Bonanza",
    iata: "BZA",
    name: "San Pedro Airport",
    country: "NI"
  },
  {
    city: "Tola",
    iata: "ECI",
    name: "Costa Esmeralda Airport",
    country: "NI"
  },
  {
    city: "Corn Island",
    iata: "RNI",
    name: "Corn Island Airport",
    country: "NI"
  },
  {
    city: "Managua",
    iata: "MGA",
    name: "Augusto C. Sandino (Managua) International Airport",
    country: "NI"
  },
  {
    city: "Hermit Islands",
    iata: "MNP",
    name: "Maron Island Airport",
    country: "PG"
  },
  {
    city: "Puerto Cabezas",
    iata: "PUZ",
    name: "Puerto Cabezas Airport",
    country: "NI"
  },
  {
    city: "La Rosita",
    iata: "RFS",
    name: "Rosita Airport",
    country: "NI"
  },
  {
    city: "San Carlos",
    iata: "NCR",
    name: "San Carlos Airport",
    country: "NI"
  },
  {
    city: "Siuna",
    iata: "SIU",
    name: "Siuna",
    country: "NI"
  },
  {
    city: "Waspam",
    iata: "WSP",
    name: "Waspam Airport",
    country: "NI"
  },
  {
    city: "Morowali",
    iata: "MOH",
    name: "Maleo Airport",
    country: "Indonesia"
  },
  {
    city: "Elim",
    iata: "MOS",
    name: "Moses Point Airport",
    country: "United States"
  },
  {
    city: "Isla Colón",
    iata: "BOC",
    name: "Bocas del Toro International Airport",
    country: "PA"
  },
  {
    city: "Chitré",
    iata: "CTD",
    name: "Alonso Valderrama Airport",
    country: "PA"
  },
  {
    city: "Changuinola",
    iata: "CHX",
    name: "Changuinola Captain Manuel Niño International Airport",
    country: "PA"
  },
  {
    city: "David",
    iata: "DAV",
    name: "Enrique Malek International Airport",
    country: "PA"
  },
  {
    city: "Colón",
    iata: "ONX",
    name: "Enrique Adolfo Jimenez Airport",
    country: "PA"
  },
  {
    city: "Panamá City",
    iata: "BLB",
    name: "Panamá Pacífico International Airport",
    country: "PA"
  },
  {
    city: "Mamitupu",
    iata: "MPI",
    name: "Mamitupu Airport",
    country: "PA"
  },
  {
    city: "Jaqué",
    iata: "JQE",
    name: "Jaqué Airport",
    country: "PA"
  },
  {
    city: "Albrook",
    iata: "PAC",
    name: "Marcos A. Gelabert International Airport",
    country: "PA"
  },
  {
    city: "Puerto Obaldía",
    iata: "PUE",
    name: "Puerto Obaldía Airport",
    country: "PA"
  },
  {
    city: "Pedasí",
    iata: "PDM",
    name: "Capt. J. Montenegro Airport",
    country: "PA"
  },
  {
    city: "Santiago",
    iata: "SYP",
    name: "Ruben Cantu Airport",
    country: "PA"
  },
  {
    city: "Río Hato",
    iata: "RIH",
    name: "Scarlett Martinez International Airport",
    country: "PA"
  },
  {
    city: "Tocumen",
    iata: "PTY",
    name: "Tocumen International Airport",
    country: "PA"
  },
  {
    city: "El Porvenir",
    iata: "PVE",
    name: "El Porvenir Airport",
    country: "PA"
  },
  {
    city: "San Blas",
    iata: "NBL",
    name: "Wannukandi Airport",
    country: "PA"
  },
  {
    city: "La Fortuna",
    iata: "FON",
    name: "La Fortuna Arenal Airport",
    country: "CR"
  },
  {
    city: "Punta Arenas",
    iata: "BAI",
    name: "Buenos Aires Airport",
    country: "CR"
  },
  {
    city: "Pococi",
    iata: "BCL",
    name: "Barra del Colorado Airport",
    country: "CR"
  },
  {
    city: "Tortuguero",
    iata: "TTQ",
    name: "Barra del Tortuguero",
    country: "CR"
  },
  {
    city: "Corredores",
    iata: "OTR",
    name: "Coto 47 Airport",
    country: "CR"
  },
  {
    city: "Puntarenas",
    iata: "JAP",
    name: "Chacarita Airport",
    country: "CR"
  },
  {
    city: "Carrillo",
    iata: "PLD",
    name: "Playa Samara/Carrillo Airport",
    country: "CR"
  },
  {
    city: "Puntarenas",
    iata: "DRK",
    name: "Drake Bay Airport",
    country: "CR"
  },
  {
    city: "Brasilito",
    iata: "FMG",
    name: "Flamingo Airport",
    country: "CR"
  },
  {
    city: "Golfito",
    iata: "GLF",
    name: "Golfito Airport",
    country: "CR"
  },
  {
    city: "Pococi",
    iata: "GPL",
    name: "Guapiles Airport",
    country: "CR"
  },
  {
    city: "Nandayure",
    iata: "PBP",
    name: "Islita Airport",
    country: "CR"
  },
  {
    city: "Liberia",
    iata: "LIR",
    name: "Daniel Oduber Quirós International Airport",
    country: "CR"
  },
  {
    city: "Los Chiles",
    iata: "LSL",
    name: "Los Chiles Airport",
    country: "CR"
  },
  {
    city: "Limón",
    iata: "LIO",
    name: "Limón International Airport",
    country: "CR"
  },
  {
    city: "Cañas",
    iata: "CSC",
    name: "Mojica Airport",
    country: "CR"
  },
  {
    city: "Nicoya/Guanacate",
    iata: "NCT",
    name: "Guanacaste Airport",
    country: "CR"
  },
  {
    city: "Nicoya",
    iata: "NOB",
    name: "Nosara Airport",
    country: "CR"
  },
  {
    city: "San José (Alajuela)",
    iata: "SJO",
    name: "Juan Santamaría International Airport",
    country: "CR"
  },
  {
    city: "Puerto Jimenez",
    iata: "PJM",
    name: "Puerto Jimenez Airport",
    country: "CR"
  },
  {
    city: "Palmar Sur",
    iata: "PMZ",
    name: "Palmar Sur Airport",
    country: "CR"
  },
  {
    city: "San Jose",
    iata: "SYQ",
    name: "Tobías Bolaños International Airport",
    country: "CR"
  },
  {
    city: "Quepos",
    iata: "XQP",
    name: "Quepos Managua Airport",
    country: "CR"
  },
  {
    city: "Rio Frio / Progreso",
    iata: "RFR",
    name: "Rio Frio / Progreso Airport",
    country: "CR"
  },
  {
    city: "Pérez Zeledón",
    iata: "IPZ",
    name: "San Isidro del General Airport",
    country: "CR"
  },
  {
    city: "Coto Brus",
    iata: "TOO",
    name: "San Vito de Java Airport",
    country: "CR"
  },
  {
    city: "Moroak",
    iata: "MRT",
    name: "Moroak Airport",
    country: "Australia"
  },
  {
    city: "Tamarindo",
    iata: "TNO",
    name: "Tamarindo Airport",
    country: "CR"
  },
  {
    city: "Nicoya",
    iata: "TMU",
    name: "Tambor Airport",
    country: "CR"
  },
  {
    city: "Upala",
    iata: "UPL",
    name: "Upala Airport",
    country: "CR"
  },
  {
    city: "Saint Martin",
    iata: "MSB",
    name: "Marigot Seaplane Base",
    country: "MF"
  },
  {
    city: "San Salvador (San Luis Talpa)",
    iata: "SAL",
    name: "El Salvador International Airport Saint Óscar Arnulfo Romero y Galdámez",
    country: "SV"
  },
  {
    city: "San Salvador",
    iata: "ILS",
    name: "Ilopango International Airport",
    country: "SV"
  },
  {
    city: "Comino",
    iata: "JCO",
    name: "Comino Heliport",
    country: "MT"
  },
  {
    city: "Les Cayes",
    iata: "CYA",
    name: "Antoine-Simon International Airport",
    country: "HT"
  },
  {
    city: "Cap Haitien",
    iata: "CAP",
    name: "Cap Haitien International Airport",
    country: "HT"
  },
  {
    city: "Fairbanks",
    iata: "MTX",
    name: "Metro Field",
    country: "United States"
  },
  {
    city: "Jacmel",
    iata: "JAK",
    name: "Jacmel Airport",
    country: "HT"
  },
  {
    city: "Carrefour Sanon",
    iata: "JEE",
    name: "Jérémie Airport",
    country: "HT"
  },
  {
    city: "Port-au-Prince",
    iata: "PAP",
    name: "Toussaint Louverture International Airport",
    country: "HT"
  },
  {
    city: "Port-de-Paix",
    iata: "PAX",
    name: "Port-de-Paix Airport",
    country: "HT"
  },
  {
    city: "Montepuez",
    iata: "MTU",
    name: "Montepuez Airport",
    country: "MZ"
  },
  {
    city: "Vingt Cinq",
    iata: "AHG",
    name: "Agalega Island Airstrip",
    country: "MU"
  },
  {
    city: "Baracoa",
    iata: "BCA",
    name: "Gustavo Rizo Airport",
    country: "CU"
  },
  {
    city: "Cayo Santa Maria",
    iata: "BWW",
    name: "Las Brujas Airport",
    country: "CU"
  },
  {
    city: "Bayamo",
    iata: "BYM",
    name: "Carlos Manuel de Cespedes Airport",
    country: "CU"
  },
  {
    city: "Ciro Redondo",
    iata: "AVI",
    name: "Máximo Gómez Airport",
    country: "CU"
  },
  {
    city: "Cayo Coco",
    iata: "CCC",
    name: "Jardines Del Rey Airport",
    country: "CU"
  },
  {
    city: "Cienfuegos",
    iata: "CFG",
    name: "Jaime Gonzalez Airport",
    country: "CU"
  },
  {
    city: "Cayo Largo del Sur",
    iata: "CYO",
    name: "Vilo Acuña International Airport",
    country: "CU"
  },
  {
    city: "Camaguey",
    iata: "CMW",
    name: "Ignacio Agramonte International Airport",
    country: "CU"
  },
  {
    city: "Santiago",
    iata: "SCU",
    name: "Antonio Maceo International Airport",
    country: "CU"
  },
  {
    city: "Guantanamo Bay Naval Station",
    iata: "NBW",
    name: "Leeward Point Field",
    country: "CU"
  },
  {
    city: "Guantánamo",
    iata: "GAO",
    name: "Mariana Grajales Airport",
    country: "CU"
  },
  {
    city: "Havana",
    iata: "HAV",
    name: "José Martí International Airport",
    country: "CU"
  },
  {
    city: "Holguin",
    iata: "HOG",
    name: "Frank Pais International Airport",
    country: "CU"
  },
  {
    city: "Santa Marta",
    iata: "VRO",
    name: "Kawama Airport",
    country: "CU"
  },
  {
    city: "Maisí",
    iata: "UMA",
    name: "Alfredo Noa Díaz Airport",
    country: "CU"
  },
  {
    city: "Mayajigua",
    iata: "MJG",
    name: "Mayajigua Airport",
    country: "CU"
  },
  {
    city: "Moa",
    iata: "MOA",
    name: "Orestes Acosta Airport",
    country: "CU"
  },
  {
    city: "Manzanillo",
    iata: "MZO",
    name: "Sierra Maestra International Airport",
    country: "CU"
  },
  {
    city: "Nueva Gerona",
    iata: "GER",
    name: "Rafael Cabrera Airport",
    country: "CU"
  },
  {
    city: "Havana",
    iata: "UPB",
    name: "Playa Baracoa Airport",
    country: "CU"
  },
  {
    city: "Santa Clara",
    iata: "SNU",
    name: "Abel Santamaria International Airport",
    country: "CU"
  },
  {
    city: "Sandino",
    iata: "SNJ",
    name: "San Julián Air Base",
    country: "CU"
  },
  {
    city: "Isla de la Juventud",
    iata: "SZJ",
    name: "Siguanea Airport",
    country: "CU"
  },
  {
    city: "Sancti Spiritus",
    iata: "USS",
    name: "Sancti Spiritus Airport",
    country: "CU"
  },
  {
    city: "Trinidad",
    iata: "TND",
    name: "Alberto Delgado Airport",
    country: "CU"
  },
  {
    city: "Matanzas",
    iata: "VRA",
    name: "Juan Gualberto Gomez International Airport",
    country: "CU"
  },
  {
    city: "Las Tunas",
    iata: "VTU",
    name: "Hermanos Ameijeiras Airport",
    country: "CU"
  },
  {
    city: "Faresmaathodaa",
    iata: "FMT",
    name: "Faresmaathoda Airport",
    country: "MV"
  },
  {
    city: "Muli",
    iata: "MUM",
    name: "Muli Airport",
    country: "MV"
  },
  {
    city: "West End",
    iata: "CYB",
    name: "Charles Kirkconnell International Airport",
    country: "KY"
  },
  {
    city: "Blossom Village",
    iata: "LYB",
    name: "Edward Bodden Little Cayman Airfield",
    country: "KY"
  },
  {
    city: "George Town",
    iata: "GCM",
    name: "Owen Roberts International Airport",
    country: "KY"
  },
  {
    city: "Motswari Private Game Reserve",
    iata: "MWR",
    name: "Motswari Airport",
    country: "South Africa"
  },
  {
    city: "Mussau Island",
    iata: "MWU",
    name: "Mussau Airport",
    country: "PG"
  },
  {
    city: "Mulegé",
    iata: "AJS",
    name: "Punta Abreojos Airport",
    country: "Mexico"
  },
  {
    city: "Apatzingán",
    iata: "AZG",
    name: "Apatzingán - Pablo L. Sidar Airport",
    country: "Mexico"
  },
  {
    city: "Playa del Carmen",
    iata: "PCM",
    name: "Playa del Carmen National Airport",
    country: "Mexico"
  },
  {
    city: "Mulegé",
    iata: "PCV",
    name: "Punta Chivato Airport",
    country: "Mexico"
  },
  {
    city: "Mulegé",
    iata: "SGM",
    name: "San Ignacio Airport",
    country: "Mexico"
  },
  {
    city: "San Luis Río Colorado",
    iata: "UAC",
    name: "San Luis Río Colorado Airport",
    country: "Mexico"
  },
  {
    city: "Álamos",
    iata: "XAL",
    name: "Álamos Airport",
    country: "Mexico"
  },
  {
    city: "Monticello",
    iata: "MXC",
    name: "Monticello Airport",
    country: "United States"
  },
  {
    city: "Sungai Tekai",
    iata: "GTK",
    name: "Sungai Tekai Airport",
    country: "Malaysia"
  },
  {
    city: "Long Banga",
    iata: "LBP",
    name: "Long Banga Airport",
    country: "Malaysia"
  },
  {
    city: "Sipitang",
    iata: "SPT",
    name: "Sipitang Airport",
    country: "Malaysia"
  },
  {
    city: "Mangrove Cay",
    iata: "MAY",
    name: "Clarence A. Bain Airport",
    country: "BS"
  },
  {
    city: "Andros Town",
    iata: "ASD",
    name: "Andros Town Airport",
    country: "BS"
  },
  {
    city: "Andros",
    iata: "TZN",
    name: "Congo Town Airport",
    country: "BS"
  },
  {
    city: "Marsh Harbour",
    iata: "MHH",
    name: "Leonard M. Thompson International Airport",
    country: "BS"
  },
  {
    city: "Andros Island",
    iata: "SAQ",
    name: "San Andros Airport",
    country: "BS"
  },
  {
    city: "Spring Point",
    iata: "AXP",
    name: "Spring Point Airport",
    country: "BS"
  },
  {
    city: "Treasure Cay",
    iata: "TCB",
    name: "Treasure Cay Airport",
    country: "BS"
  },
  {
    city: "Walkers Cay",
    iata: "WKR",
    name: "Walkers Cay Airport",
    country: "BS"
  },
  {
    city: "Chub Cay",
    iata: "CCZ",
    name: "Chub Cay Airport",
    country: "BS"
  },
  {
    city: "Bullocks Harbour",
    iata: "GHC",
    name: "Great Harbour Cay Airport",
    country: "BS"
  },
  {
    city: "South Bimini",
    iata: "BIM",
    name: "South Bimini Airport",
    country: "BS"
  },
  {
    city: "Arthur's Town",
    iata: "ATC",
    name: "Arthur's Town Airport",
    country: "BS"
  },
  {
    city: "Cat Island",
    iata: "TBI",
    name: "New Bight Airport",
    country: "BS"
  },
  {
    city: "North Cat Cay",
    iata: "CXY",
    name: "Cat Cay Airport",
    country: "BS"
  },
  {
    city: "Colonel Hill",
    iata: "CRI",
    name: "Colonel Hill Airport",
    country: "BS"
  },
  {
    city: "Pitts Town",
    iata: "PWN",
    name: "Pitts Town Airport",
    country: "BS"
  },
  {
    city: "Moss Town",
    iata: "GGT",
    name: "Exuma International Airport",
    country: "BS"
  },
  {
    city: "North Eleuthera",
    iata: "ELH",
    name: "North Eleuthera Airport",
    country: "BS"
  },
  {
    city: "Governor's Harbour",
    iata: "GHB",
    name: "Governor's Harbour Airport",
    country: "BS"
  },
  {
    city: "Normans Cay",
    iata: "NMC",
    name: "Normans Cay Airport",
    country: "BS"
  },
  {
    city: "Rock Sound",
    iata: "RSD",
    name: "Rock Sound International Airport",
    country: "BS"
  },
  {
    city: "Staniel Cay",
    iata: "TYM",
    name: "Staniel Cay Airport",
    country: "BS"
  },
  {
    city: "Freeport",
    iata: "FPO",
    name: "Grand Bahama International Airport",
    country: "BS"
  },
  {
    city: "West End",
    iata: "WTD",
    name: "West End Airport",
    country: "BS"
  },
  {
    city: "Matthew Town",
    iata: "IGA",
    name: "Inagua Airport",
    country: "BS"
  },
  {
    city: "May Creek",
    iata: "MYK",
    name: "May Creek Airport",
    country: "United States"
  },
  {
    city: "Deadman's Cay",
    iata: "LGI",
    name: "Deadman's Cay Airport",
    country: "BS"
  },
  {
    city: "Stella Maris",
    iata: "SML",
    name: "Stella Maris Airport",
    country: "BS"
  },
  {
    city: "Abraham Bay Settlement",
    iata: "MYG",
    name: "Mayaguana Airport",
    country: "BS"
  },
  {
    city: "Nassau",
    iata: "NAS",
    name: "Lynden Pindling International Airport",
    country: "BS"
  },
  {
    city: "Duncan Town",
    iata: "DCT",
    name: "Duncan Town Airport",
    country: "BS"
  },
  {
    city: "Port Nelson",
    iata: "RCY",
    name: "Rum Cay International Airport",
    country: "BS"
  },
  {
    city: "Moyale",
    iata: "MYS",
    name: "Moyale Airport",
    country: "ET"
  },
  {
    city: "San Salvador",
    iata: "ZSA",
    name: "San Salvador International Airport",
    country: "BS"
  },
  {
    city: "Santa Carolina",
    iata: "NTC",
    name: "Paradise Island Airport",
    country: "MZ"
  },
  {
    city: "Chokwé",
    iata: "TGS",
    name: "Chokwé Airport",
    country: "MZ"
  },
  {
    city: "Belize City",
    iata: "BZE",
    name: "Philip S. W. Goldson International Airport",
    country: "BZ"
  },
  {
    city: "nan",
    iata: "MZE",
    name: "Manatee Airport",
    country: "BZ"
  },
  {
    city: "Maya Flats",
    iata: "CYD",
    name: "San Ignacio Town (Maya Flats) Airstrip",
    country: "BZ"
  },
  {
    city: "Placencia",
    iata: "PLJ",
    name: "Placencia Airport",
    country: "BZ"
  },
  {
    city: "Arno Atoll",
    iata: "IMI",
    name: "Ine Airport",
    country: "MH"
  },
  {
    city: "Bagani",
    iata: "BQI",
    name: "Bagani Airport",
    country: "nan"
  },
  {
    city: "Aitutaki",
    iata: "AIT",
    name: "Aitutaki Airport",
    country: "CK"
  },
  {
    city: "Atiu Island",
    iata: "AIU",
    name: "Enua Airport",
    country: "CK"
  },
  {
    city: "Mangaia Island",
    iata: "MGS",
    name: "Mangaia Island Airport",
    country: "CK"
  },
  {
    city: "Manihiki Island",
    iata: "MHX",
    name: "Manihiki Island Airport",
    country: "CK"
  },
  {
    city: "Mauke Island",
    iata: "MUK",
    name: "Mauke Airport",
    country: "CK"
  },
  {
    city: "Mitiaro Island",
    iata: "MOI",
    name: "Mitiaro Island Airport",
    country: "CK"
  },
  {
    city: "Pukapuka Atoll",
    iata: "PZK",
    name: "Pukapuka Island Airport",
    country: "CK"
  },
  {
    city: "Penrhyn Island",
    iata: "PYE",
    name: "Tongareva Airport",
    country: "CK"
  },
  {
    city: "Avarua",
    iata: "RAR",
    name: "Rarotonga International Airport",
    country: "CK"
  },
  {
    city: "Weeping Water",
    iata: "EPG",
    name: "Browns Airport",
    country: "United States"
  },
  {
    city: "Cicia",
    iata: "ICI",
    name: "Cicia Airport",
    country: "FJ"
  },
  {
    city: "Castaway Island",
    iata: "CST",
    name: "Castaway Island Seaplane Base",
    country: "FJ"
  },
  {
    city: "Nadi",
    iata: "NAN",
    name: "Nadi International Airport",
    country: "FJ"
  },
  {
    city: "Malolo Lailai Island",
    iata: "PTF",
    name: "Malolo Lailai Island Airport",
    country: "FJ"
  },
  {
    city: "Rabi Island",
    iata: "RBI",
    name: "Rabi Island Airport",
    country: "FJ"
  },
  {
    city: "Vunisea",
    iata: "KDV",
    name: "Vunisea Airport",
    country: "FJ"
  },
  {
    city: "Mana Island",
    iata: "MNF",
    name: "Mana Island Airport",
    country: "FJ"
  },
  {
    city: "Moala",
    iata: "MFJ",
    name: "Moala Airport",
    country: "FJ"
  },
  {
    city: "Nausori",
    iata: "SUV",
    name: "Nausori International Airport",
    country: "FJ"
  },
  {
    city: "Bureta",
    iata: "LEV",
    name: "Levuka Airfield",
    country: "FJ"
  },
  {
    city: "Nanuku Auberge Resort",
    iata: "PHR",
    name: "Nanuku Airport",
    country: "FJ"
  },
  {
    city: "Ngau",
    iata: "NGI",
    name: "Ngau Airport",
    country: "FJ"
  },
  {
    city: "Laucala Island",
    iata: "LUC",
    name: "Laucala Island Airport",
    country: "FJ"
  },
  {
    city: "Lakeba Island",
    iata: "LKB",
    name: "Lakeba Island Airport",
    country: "FJ"
  },
  {
    city: "Labasa",
    iata: "LBS",
    name: "Labasa Airport",
    country: "FJ"
  },
  {
    city: "Matei",
    iata: "TVU",
    name: "Matei Airport",
    country: "FJ"
  },
  {
    city: "Koro Island",
    iata: "KXF",
    name: "Koro Island Airport",
    country: "FJ"
  },
  {
    city: "Rotuma",
    iata: "RTA",
    name: "Rotuma Airport",
    country: "FJ"
  },
  {
    city: "Savusavu",
    iata: "SVU",
    name: "Savusavu Airport",
    country: "FJ"
  },
  {
    city: "Wakaya Island",
    iata: "KAY",
    name: "Wakaya Island Airport",
    country: "FJ"
  },
  {
    city: "Ono-i-Lau",
    iata: "ONU",
    name: "Ono-i-Lau Airport",
    country: "FJ"
  },
  {
    city: "Yasawa Island",
    iata: "YAS",
    name: "Yasawa Island Airport",
    country: "FJ"
  },
  {
    city: "Eua Island",
    iata: "EUA",
    name: "Kaufana Airport",
    country: "TO"
  },
  {
    city: "Nuku'alofa",
    iata: "TBU",
    name: "Fua'amotu International Airport",
    country: "TO"
  },
  {
    city: "Lifuka",
    iata: "HPA",
    name: "Lifuka Island Airport",
    country: "TO"
  },
  {
    city: "Angaha, Niuafo'ou Island",
    iata: "NFO",
    name: "Mata'aho Airport",
    country: "TO"
  },
  {
    city: "Niuatoputapu",
    iata: "NTT",
    name: "Kuini Lavenia Airport",
    country: "TO"
  },
  {
    city: "Vava'u Island",
    iata: "VAV",
    name: "Vava'u International Airport",
    country: "TO"
  },
  {
    city: "Nanuya Levu Island",
    iata: "TTL",
    name: "Turtle Island Seaplane Base",
    country: "FJ"
  },
  {
    city: "Vanua Balavu",
    iata: "VBV",
    name: "Vanua Balavu Airport",
    country: "FJ"
  },
  {
    city: "Vatulele",
    iata: "VTF",
    name: "Vatulele Airport",
    country: "FJ"
  },
  {
    city: "Port Harcourt",
    iata: "PHG",
    name: "Port Harcourt City Airport / Port Harcourt Air Force Base",
    country: "Nigeria"
  },
  {
    city: "Abaiang",
    iata: "ABF",
    name: "Abaiang Airport",
    country: "KI"
  },
  {
    city: "Beru",
    iata: "BEZ",
    name: "Beru Airport",
    country: "KI"
  },
  {
    city: "Funafuti",
    iata: "FUN",
    name: "Funafuti International Airport",
    country: "TV"
  },
  {
    city: "Kuria",
    iata: "KUC",
    name: "Kuria Airport",
    country: "KI"
  },
  {
    city: "Maiana",
    iata: "MNK",
    name: "Maiana Airport",
    country: "KI"
  },
  {
    city: "Marakei",
    iata: "MZK",
    name: "Marakei Airport",
    country: "KI"
  },
  {
    city: "Makin Island",
    iata: "MTK",
    name: "Makin Island Airport",
    country: "KI"
  },
  {
    city: "Nikunau",
    iata: "NIG",
    name: "Nikunau Airport",
    country: "KI"
  },
  {
    city: "Onotoa",
    iata: "OOT",
    name: "Onotoa Airport",
    country: "KI"
  },
  {
    city: "South Tarawa",
    iata: "TRW",
    name: "Bonriki International Airport",
    country: "KI"
  },
  {
    city: "Abemama",
    iata: "AEA",
    name: "Abemama Airport",
    country: "KI"
  },
  {
    city: "nan",
    iata: "TBF",
    name: "Tabiteuea North Airport",
    country: "KI"
  },
  {
    city: "Tamana Island",
    iata: "TMN",
    name: "Tamana Island Airport",
    country: "KI"
  },
  {
    city: "Nonouti",
    iata: "NON",
    name: "Nonouti Airport",
    country: "KI"
  },
  {
    city: "Arorae Island",
    iata: "AIS",
    name: "Arorae Island Airport",
    country: "KI"
  },
  {
    city: "Tabiteuea South",
    iata: "TSU",
    name: "Tabiteuea South Airport",
    country: "KI"
  },
  {
    city: "Butaritari",
    iata: "BBG",
    name: "Butaritari Airport",
    country: "KI"
  },
  {
    city: "Buariki",
    iata: "AAK",
    name: "Aranuka Airport",
    country: "KI"
  },
  {
    city: "Niokolo-Koba National Park",
    iata: "NIK",
    name: "Niokolo-Koba Airport",
    country: "SN"
  },
  {
    city: "Ninilchik",
    iata: "NIN",
    name: "Ninilchik Airport",
    country: "United States"
  },
  {
    city: "Alofi",
    iata: "IUE",
    name: "Niue International Airport",
    country: "NU"
  },
  {
    city: "Heihe",
    iata: "NJJ",
    name: "Nenjiang Melgen Airport",
    country: "China"
  },
  {
    city: "Sinak",
    iata: "NKD",
    name: "Sinak Airport",
    country: "Indonesia"
  },
  {
    city: "Ninglang",
    iata: "NLH",
    name: "Ninglang Luguhu Airport",
    country: "China"
  },
  {
    city: "Futuna Island",
    iata: "FUT",
    name: "Pointe Vele Airport",
    country: "WF"
  },
  {
    city: "Wallis Island",
    iata: "WLS",
    name: "Hihifo Airport",
    country: "WF"
  },
  {
    city: "Hobbs",
    iata: "HBB",
    name: "Industrial Airpark",
    country: "United States"
  },
  {
    city: "Nangade",
    iata: "NND",
    name: "Nangade Airport",
    country: "MZ"
  },
  {
    city: "Nomad River",
    iata: "NOM",
    name: "Nomad River Airport",
    country: "PG"
  },
  {
    city: "Naoro Vilage",
    iata: "NOO",
    name: "Naoro Airport",
    country: "PG"
  },
  {
    city: "Pokhara",
    iata: "PHH",
    name: "Pokhara International Airport",
    country: "Nepal"
  },
  {
    city: "Nipa",
    iata: "NPG",
    name: "Nipa Airport",
    country: "PG"
  },
  {
    city: "Newry",
    iata: "NRY",
    name: "Newry Airport",
    country: "Australia"
  },
  {
    city: "Ofu",
    iata: "OFU",
    name: "Ofu Airport",
    country: "AS"
  },
  {
    city: "Asau",
    iata: "AAU",
    name: "Asau Airport",
    country: "WS"
  },
  {
    city: "Apia",
    iata: "APW",
    name: "Faleolo International Airport",
    country: "WS"
  },
  {
    city: "Apia",
    iata: "FGI",
    name: "Fagali'i Airport",
    country: "WS"
  },
  {
    city: "Fitiuta Village",
    iata: "FTI",
    name: "Fitiuta Airport",
    country: "AS"
  },
  {
    city: "Maota",
    iata: "MXS",
    name: "Maota Airport",
    country: "WS"
  },
  {
    city: "Pago Pago",
    iata: "PPG",
    name: "Pago Pago International Airport",
    country: "AS"
  },
  {
    city: "Papeete",
    iata: "PPT",
    name: "Fa'a'ā International Airport",
    country: "PF"
  },
  {
    city: "Rimatara Island",
    iata: "RMT",
    name: "Rimatara Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "RUR",
    name: "Rurutu Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "TUB",
    name: "Tubuai Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "RVV",
    name: "Raivavae Airport",
    country: "PF"
  },
  {
    city: "Anaa",
    iata: "AAA",
    name: "Anaa Airport",
    country: "PF"
  },
  {
    city: "Fangatau",
    iata: "FGU",
    name: "Fangatau Airport",
    country: "PF"
  },
  {
    city: "Tuherahera",
    iata: "TIH",
    name: "Tikehau Airport",
    country: "PF"
  },
  {
    city: "Apataki",
    iata: "APK",
    name: "Apataki Airport",
    country: "PF"
  },
  {
    city: "Reao",
    iata: "REA",
    name: "Reao Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "FAV",
    name: "Fakarava Airport",
    country: "PF"
  },
  {
    city: "Hikueru",
    iata: "HHZ",
    name: "Hikueru Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "XMH",
    name: "Manihi Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "GMR",
    name: "Totegegie Airport",
    country: "PF"
  },
  {
    city: "Raitahiti",
    iata: "KKR",
    name: "Kaukura Airport",
    country: "PF"
  },
  {
    city: "Makemo",
    iata: "MKP",
    name: "Makemo Airport",
    country: "PF"
  },
  {
    city: "Napuka Island",
    iata: "NAU",
    name: "Napuka Island Airport",
    country: "PF"
  },
  {
    city: "Tatakoto",
    iata: "TKV",
    name: "Tatakoto Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "PKP",
    name: "Puka Puka Airport",
    country: "PF"
  },
  {
    city: "Pukaruha",
    iata: "PUK",
    name: "Pukaruha Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "TKP",
    name: "Takapoto Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "AXR",
    name: "Arutua Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "MVT",
    name: "Mataiva Airport",
    country: "PF"
  },
  {
    city: "Nukutavake",
    iata: "NUK",
    name: "Nukutavake Airport",
    country: "PF"
  },
  {
    city: "Tureia",
    iata: "ZTA",
    name: "Tureia Airport",
    country: "PF"
  },
  {
    city: "Ahe Atoll",
    iata: "AHE",
    name: "Ahe Airport",
    country: "PF"
  },
  {
    city: "Kauehi",
    iata: "KHZ",
    name: "Kauehi Airport",
    country: "PF"
  },
  {
    city: "Faaite",
    iata: "FAC",
    name: "Faaite Airport",
    country: "PF"
  },
  {
    city: "Fakahina",
    iata: "FHZ",
    name: "Fakahina Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "RKA",
    name: "Aratika Nord Airport",
    country: "PF"
  },
  {
    city: "Takume",
    iata: "TJN",
    name: "Takume Airport",
    country: "PF"
  },
  {
    city: "Naiu Atoll",
    iata: "NIU",
    name: "Naiu Airport",
    country: "PF"
  },
  {
    city: "Raroia",
    iata: "RRR",
    name: "Raroia Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "TKX",
    name: "Takaroa Airport",
    country: "PF"
  },
  {
    city: "Katiu",
    iata: "KXU",
    name: "Katiu Airport",
    country: "PF"
  },
  {
    city: "Nukutepipi",
    iata: "NKP",
    name: "Nukutepipi Airport",
    country: "PF"
  },
  {
    city: "Nuku Hiva",
    iata: "NHV",
    name: "Nuku Hiva Airport",
    country: "PF"
  },
  {
    city: "Hiva Oa Island",
    iata: "AUQ",
    name: "Hiva Oa-Atuona Airport",
    country: "PF"
  },
  {
    city: "Ua Pou",
    iata: "UAP",
    name: "Ua Pou Airport",
    country: "PF"
  },
  {
    city: "Ua Huka",
    iata: "UAH",
    name: "Ua Huka Airport",
    country: "PF"
  },
  {
    city: "Motu Mute",
    iata: "BOB",
    name: "Bora Bora Airport",
    country: "PF"
  },
  {
    city: "Tetiaroa",
    iata: "TTI",
    name: "Tetiaroa Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "RGI",
    name: "Rangiroa Airport",
    country: "PF"
  },
  {
    city: "Fare",
    iata: "HUH",
    name: "Huahine-Fare Airport",
    country: "PF"
  },
  {
    city: "Moorea-Maiao",
    iata: "MOZ",
    name: "Moorea Temae Airport",
    country: "PF"
  },
  {
    city: "Otepa",
    iata: "HOI",
    name: "Hao Airport",
    country: "PF"
  },
  {
    city: "nan",
    iata: "MAU",
    name: "Maupiti Airport",
    country: "PF"
  },
  {
    city: "Uturoa",
    iata: "RFP",
    name: "Raiatea Airport",
    country: "PF"
  },
  {
    city: "Tupai Atoll",
    iata: "TPX",
    name: "Tupai Airport",
    country: "PF"
  },
  {
    city: "Moruroa Atoll",
    iata: "UOA",
    name: "Moruroa Airport",
    country: "PF"
  },
  {
    city: "Vahitahi",
    iata: "VHZ",
    name: "Vahitahi Airport",
    country: "PF"
  },
  {
    city: "Hatton",
    iata: "NUF",
    name: "Castlereagh Lake Seaplane Base",
    country: "Sri Lanka"
  },
  {
    city: "Mercury",
    iata: "UCC",
    name: "Yucca Airstrip",
    country: "United States"
  },
  {
    city: "Ablow",
    iata: "MTV",
    name: "Mota Lava Airport",
    country: "VU"
  },
  {
    city: "Sola",
    iata: "SLH",
    name: "Sola Airport",
    country: "VU"
  },
  {
    city: "Loh/Linua",
    iata: "TOH",
    name: "Torres Airstrip",
    country: "VU"
  },
  {
    city: "Emae Island",
    iata: "EAE",
    name: "Siwo Airport",
    country: "VU"
  },
  {
    city: "Craig Cove",
    iata: "CCV",
    name: "Craig Cove Airport",
    country: "VU"
  },
  {
    city: "Longana",
    iata: "LOD",
    name: "Longana Airport",
    country: "VU"
  },
  {
    city: "Pentecost Island",
    iata: "SSR",
    name: "Sara Airport",
    country: "VU"
  },
  {
    city: "Paama Island",
    iata: "PBJ",
    name: "Tavie Airport",
    country: "VU"
  },
  {
    city: "Lamap",
    iata: "LPM",
    name: "Lamap Airport",
    country: "VU"
  },
  {
    city: "Lamen Bay",
    iata: "LNB",
    name: "Lamen Bay Airport",
    country: "VU"
  },
  {
    city: "Maewo Island",
    iata: "MWF",
    name: "Maewo-Naone Airport",
    country: "VU"
  },
  {
    city: "Lonorore",
    iata: "LNE",
    name: "Lonorore Airport",
    country: "VU"
  },
  {
    city: "Norsup",
    iata: "NUS",
    name: "Norsup Airport",
    country: "VU"
  },
  {
    city: "Gaua Island",
    iata: "ZGU",
    name: "Gaua Island Airport",
    country: "VU"
  },
  {
    city: "Redcliffe",
    iata: "RCL",
    name: "Redcliffe Airport",
    country: "VU"
  },
  {
    city: "Luganville",
    iata: "SON",
    name: "Santo Pekoa International Airport",
    country: "VU"
  },
  {
    city: "Tongoa Island",
    iata: "TGH",
    name: "Tongoa Airport",
    country: "VU"
  },
  {
    city: "Ambrym Island",
    iata: "ULB",
    name: "Uléi Airport",
    country: "VU"
  },
  {
    city: "Epi Island",
    iata: "VLS",
    name: "Valesdir Airport",
    country: "VU"
  },
  {
    city: "Walaha",
    iata: "WLH",
    name: "Walaha Airport",
    country: "VU"
  },
  {
    city: "Malekula Island",
    iata: "SWJ",
    name: "Southwest Bay Airport",
    country: "VU"
  },
  {
    city: "Olpoi",
    iata: "OLJ",
    name: "North West Santo Airport",
    country: "VU"
  },
  {
    city: "Anatom Island",
    iata: "AUY",
    name: "Aneityum Airport",
    country: "VU"
  },
  {
    city: "Aniwa",
    iata: "AWD",
    name: "Aniwa Airport",
    country: "VU"
  },
  {
    city: "Dillon's Bay",
    iata: "DLY",
    name: "Dillon's Bay Airport",
    country: "VU"
  },
  {
    city: "Futuna Island",
    iata: "FTA",
    name: "Futuna Airport",
    country: "VU"
  },
  {
    city: "Ipota",
    iata: "IPA",
    name: "Ipota Airport",
    country: "VU"
  },
  {
    city: "Port Vila",
    iata: "VLI",
    name: "Bauerfield International Airport",
    country: "VU"
  },
  {
    city: "Tanna Island",
    iata: "TAH",
    name: "Whitegrass Airport",
    country: "VU"
  },
  {
    city: "Nowata",
    iata: "NWT",
    name: "Nowata Airport",
    country: "PG"
  },
  {
    city: "Tiga",
    iata: "TGJ",
    name: "Tiga Airport",
    country: "NC"
  },
  {
    city: "Waala",
    iata: "BMY",
    name: "Île Art - Waala Airport",
    country: "NC"
  },
  {
    city: "Koné",
    iata: "KNQ",
    name: "Koné Airport",
    country: "NC"
  },
  {
    city: "Île des Pins",
    iata: "ILP",
    name: "Île des Pins Airport",
    country: "NC"
  },
  {
    city: "Koumac",
    iata: "KOC",
    name: "Koumac Airport",
    country: "NC"
  },
  {
    city: "Lifou",
    iata: "LIF",
    name: "Lifou Airport",
    country: "NC"
  },
  {
    city: "Nouméa",
    iata: "GEA",
    name: "Nouméa Magenta Airport",
    country: "NC"
  },
  {
    city: "Malabou",
    iata: "PUV",
    name: "Poum / Malabou Airport",
    country: "NC"
  },
  {
    city: "Népoui",
    iata: "PDC",
    name: "Mueo Airport",
    country: "NC"
  },
  {
    city: "Maré",
    iata: "MEE",
    name: "Maré Airport",
    country: "NC"
  },
  {
    city: "Touho",
    iata: "TOU",
    name: "Touho Airport",
    country: "NC"
  },
  {
    city: "Ouvéa",
    iata: "UVE",
    name: "Ouvéa Airport",
    country: "NC"
  },
  {
    city: "Nouméa (La Tontouta)",
    iata: "NOU",
    name: "La Tontouta International Airport",
    country: "NC"
  },
  {
    city: "Fox Glacier",
    iata: "FGL",
    name: "Fox Glacier Aerodrome",
    country: "New Zealand"
  },
  {
    city: "Auckland",
    iata: "AKL",
    name: "Auckland International Airport",
    country: "New Zealand"
  },
  {
    city: "Taupo",
    iata: "TUO",
    name: "Taupo Airport",
    country: "New Zealand"
  },
  {
    city: "Manurewa",
    iata: "AMZ",
    name: "Ardmore Airport",
    country: "New Zealand"
  },
  {
    city: "Ashburton",
    iata: "ASG",
    name: "Ashburton Airport",
    country: "New Zealand"
  },
  {
    city: "Christchurch",
    iata: "CHC",
    name: "Christchurch International Airport",
    country: "New Zealand"
  },
  {
    city: "Te One",
    iata: "CHT",
    name: "Inia William Tuuta Memorial Airport",
    country: "New Zealand"
  },
  {
    city: "Coromandel",
    iata: "CMV",
    name: "Coromandel Airport",
    country: "New Zealand"
  },
  {
    city: "Dargaville",
    iata: "DGR",
    name: "Dargaville Aerodrome",
    country: "New Zealand"
  },
  {
    city: "Dunedin",
    iata: "DUD",
    name: "Dunedin International Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "WHO",
    name: "Franz Josef Aerodrome",
    country: "New Zealand"
  },
  {
    city: "Claris",
    iata: "GBZ",
    name: "Great Barrier Aerodrome",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "GMN",
    name: "Greymouth Airport",
    country: "New Zealand"
  },
  {
    city: "Gisborne",
    iata: "GIS",
    name: "Gisborne Airport",
    country: "New Zealand"
  },
  {
    city: "Glentanner Station",
    iata: "GTN",
    name: "Glentanner Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "HKK",
    name: "Hokitika Airfield",
    country: "New Zealand"
  },
  {
    city: "Hamilton",
    iata: "HLZ",
    name: "Hamilton International Airport",
    country: "New Zealand"
  },
  {
    city: "Waiheke Island",
    iata: "WIK",
    name: "Waiheke Island Aerodrome",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "KBZ",
    name: "Kaikoura Airport",
    country: "New Zealand"
  },
  {
    city: "Kerikeri",
    iata: "KKE",
    name: "Kerikeri Airport",
    country: "New Zealand"
  },
  {
    city: "Kaikohe",
    iata: "KKO",
    name: "Kaikohe Airport",
    country: "New Zealand"
  },
  {
    city: "Awanui",
    iata: "KAT",
    name: "Kaitaia Airport",
    country: "New Zealand"
  },
  {
    city: "Alexandra",
    iata: "ALR",
    name: "Alexandra Aerodrome",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "MTA",
    name: "Matamata Glider Airport",
    country: "New Zealand"
  },
  {
    city: "Auckland City",
    iata: "MHB",
    name: "Mechanics Bay Heliport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "MON",
    name: "Mount Cook Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "MFN",
    name: "Milford Sound Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "MZP",
    name: "Motueka Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "TEU",
    name: "Manapouri Airport",
    country: "New Zealand"
  },
  {
    city: "Masterton",
    iata: "MRO",
    name: "Hood Airport",
    country: "New Zealand"
  },
  {
    city: "New Plymouth",
    iata: "NPL",
    name: "New Plymouth Airport",
    country: "New Zealand"
  },
  {
    city: "Napier",
    iata: "NPE",
    name: "Hawke's Bay Airport",
    country: "New Zealand"
  },
  {
    city: "Nelson",
    iata: "NSN",
    name: "Nelson Airport",
    country: "New Zealand"
  },
  {
    city: "Invercargill",
    iata: "IVC",
    name: "Invercargill Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "OHA",
    name: "RNZAF Base Ohakea",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "OAM",
    name: "Oamaru Airport",
    country: "New Zealand"
  },
  {
    city: "Palmerston North",
    iata: "PMR",
    name: "Palmerston North Airport",
    country: "New Zealand"
  },
  {
    city: "Koromiko",
    iata: "PCN",
    name: "Picton Aerodrome",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "PPQ",
    name: "Paraparaumu Airport",
    country: "New Zealand"
  },
  {
    city: "Queenstown",
    iata: "ZQN",
    name: "Queenstown Airport",
    country: "New Zealand"
  },
  {
    city: "Raglan",
    iata: "RAG",
    name: "Raglan Aerodrome",
    country: "New Zealand"
  },
  {
    city: "Oban",
    iata: "SZS",
    name: "Ryan's Creek Aerodrome",
    country: "New Zealand"
  },
  {
    city: "Rotorua",
    iata: "ROT",
    name: "Rotorua Regional Airport",
    country: "New Zealand"
  },
  {
    city: "Tauranga",
    iata: "TRG",
    name: "Tauranga Airport",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "TMZ",
    name: "Thames Aerodrome",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "KTF",
    name: "Takaka Airport",
    country: "New Zealand"
  },
  {
    city: "Tokoroa",
    iata: "TKZ",
    name: "Tokoroa Airfield",
    country: "New Zealand"
  },
  {
    city: "nan",
    iata: "TIU",
    name: "Timaru Airport",
    country: "New Zealand"
  },
  {
    city: "Twitzel",
    iata: "TWZ",
    name: "Pukaki Airport",
    country: "New Zealand"
  },
  {
    city: "Blenheim",
    iata: "BHE",
    name: "Woodbourne Airport",
    country: "New Zealand"
  },
  {
    city: "Wanaka",
    iata: "WKA",
    name: "Wanaka Airport",
    country: "New Zealand"
  },
  {
    city: "Whakatāne",
    iata: "WHK",
    name: "Whakatāne Airport",
    country: "New Zealand"
  },
  {
    city: "Wellington",
    iata: "WLG",
    name: "Wellington International Airport",
    country: "New Zealand"
  },
  {
    city: "Wairoa",
    iata: "WIR",
    name: "Wairoa Airport",
    country: "New Zealand"
  },
  {
    city: "Whangarei",
    iata: "WRE",
    name: "Whangarei Airport",
    country: "New Zealand"
  },
  {
    city: "Westport",
    iata: "WSZ",
    name: "Westport Airport",
    country: "New Zealand"
  },
  {
    city: "Whitianga",
    iata: "WTZ",
    name: "Whitianga Airport",
    country: "New Zealand"
  },
  {
    city: "Wanganui",
    iata: "WAG",
    name: "Wanganui Airport",
    country: "New Zealand"
  },
  {
    city: "Kneeland",
    iata: "NLN",
    name: "Kneeland Airport",
    country: "United States"
  },
  {
    city: "Redding",
    iata: "BZF",
    name: "Benton Field",
    country: "United States"
  },
  {
    city: "Bamyan",
    iata: "BIN",
    name: "Bamyan Airport",
    country: "AF"
  },
  {
    city: "Lashkar Gah",
    iata: "BST",
    name: "Bost Airport",
    country: "AF"
  },
  {
    city: "Chaghcharan",
    iata: "CCN",
    name: "Chaghcharan Airport",
    country: "AF"
  },
  {
    city: "Sardeh Band",
    iata: "SBF",
    name: "Sardeh Band Airport",
    country: "AF"
  },
  {
    city: "Reg",
    iata: "DWR",
    name: "Dwyer Airport",
    country: "AF"
  },
  {
    city: "Darwaz",
    iata: "DAZ",
    name: "Darwaz Airport",
    country: "AF"
  },
  {
    city: "Farah",
    iata: "FAH",
    name: "Farah Airport",
    country: "AF"
  },
  {
    city: "Fayzabad",
    iata: "FBD",
    name: "Fayzabad Airport",
    country: "AF"
  },
  {
    city: "Ghazni",
    iata: "GZI",
    name: "Ghazni Airport",
    country: "AF"
  },
  {
    city: "Gardez",
    iata: "GRG",
    name: "Gardez Airport",
    country: "AF"
  },
  {
    city: "Khwahan",
    iata: "KWH",
    name: "Khwahan Airport",
    country: "AF"
  },
  {
    city: "Guzara",
    iata: "HEA",
    name: "Herat - Khwaja Abdullah Ansari International Airport",
    country: "AF"
  },
  {
    city: "Bagram",
    iata: "OAI",
    name: "Bagram Airfield",
    country: "AF"
  },
  {
    city: "Jalalabad",
    iata: "JAA",
    name: "Jalalabad Airport",
    country: "AF"
  },
  {
    city: "Kabul",
    iata: "KBL",
    name: "Kabul International Airport",
    country: "AF"
  },
  {
    city: "Kandahar",
    iata: "KDH",
    name: "Ahmad Shah Baba International Airport",
    country: "AF"
  },
  {
    city: "Khost",
    iata: "KHT",
    name: "Khost International Airport",
    country: "AF"
  },
  {
    city: "Maymana",
    iata: "MMZ",
    name: "Maymana Zahiraddin Faryabi Airport",
    country: "AF"
  },
  {
    city: "Mazar-i-Sharif",
    iata: "MZR",
    name: "Mazar-i-Sharif International Airport",
    country: "AF"
  },
  {
    city: "Urgun",
    iata: "URN",
    name: "Urgun Airport",
    country: "AF"
  },
  {
    city: "Qala-i-Naw",
    iata: "LQN",
    name: "Qala-i-Naw Airport",
    country: "AF"
  },
  {
    city: "Orūzgān",
    iata: "URZ",
    name: "Orūzgān Airport",
    country: "AF"
  },
  {
    city: "Skazar",
    iata: "KUR",
    name: "Razer Airport",
    country: "AF"
  },
  {
    city: "Sharana",
    iata: "OAS",
    name: "Sharana Airstrip",
    country: "AF"
  },
  {
    city: "Shindand",
    iata: "OAH",
    name: "Shindand Air Base",
    country: "AF"
  },
  {
    city: "Baraki Barak",
    iata: "OAA",
    name: "Shank Air Base",
    country: "AF"
  },
  {
    city: "Khost",
    iata: "OLR",
    name: "Salerno Airport",
    country: "AF"
  },
  {
    city: "Shiveh",
    iata: "SGA",
    name: "Sheghnan Airport",
    country: "AF"
  },
  {
    city: "Tarinkot",
    iata: "TII",
    name: "Tarinkot Airport",
    country: "AF"
  },
  {
    city: "Taleqan",
    iata: "TQN",
    name: "Taleqan Airport",
    country: "AF"
  },
  {
    city: "Kunduz",
    iata: "UND",
    name: "Kunduz Airport",
    country: "AF"
  },
  {
    city: "Lashkar Gah",
    iata: "OAZ",
    name: "Camp Shorabak Airfield",
    country: "AF"
  },
  {
    city: "Zaranj",
    iata: "ZAJ",
    name: "Zaranj Airport",
    country: "AF"
  },
  {
    city: "Manama",
    iata: "BAH",
    name: "Bahrain International Airport",
    country: "BH"
  },
  {
    city: "Corisco Island",
    iata: "OCS",
    name: "Corisco International Airport",
    country: "GQ"
  },
  {
    city: "Abha",
    iata: "AHB",
    name: "Abha International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Hofuf",
    iata: "HOF",
    name: "Al-Ahsa International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Al-Ula",
    iata: "ULH",
    name: "Al-Ula International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Al-Baha",
    iata: "ABT",
    name: "King Saud Bin Abdulaziz (Al Baha) Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Bisha",
    iata: "BHH",
    name: "Bisha Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Ad Dammam",
    iata: "DMM",
    name: "King Fahd International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Dawadmi",
    iata: "DWD",
    name: "Dawadmi Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Dhahran",
    iata: "DHA",
    name: "King Abdulaziz Air Base",
    country: "Saudi Arabia"
  },
  {
    city: "Jizan",
    iata: "GIZ",
    name: "Jizan Regional Airport / King Abdullah bin Abdulaziz Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Qassim",
    iata: "ELQ",
    name: "Prince Naif bin Abdulaziz International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Gurayat",
    iata: "URY",
    name: "Gurayat Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Ha'il",
    iata: "HAS",
    name: "Ha'il Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Jeddah",
    iata: "JED",
    name: "King Abdulaziz International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "King Khaled Military City",
    iata: "KMC",
    name: "King Khaled Military City Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Khamis Mushait",
    iata: "KMX",
    name: "King Khalid Air Base",
    country: "Saudi Arabia"
  },
  {
    city: "Medina",
    iata: "MED",
    name: "Prince Mohammad Bin Abdulaziz Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Najran",
    iata: "EAM",
    name: "Najran Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Sharma",
    iata: "NUM",
    name: "Neom Bay Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Qaisumah",
    iata: "AQI",
    name: "Al Qaisumah/Hafr Al Batin Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Al Kharj",
    iata: "AKH",
    name: "Prince Sultan Air Base",
    country: "Saudi Arabia"
  },
  {
    city: "Rafha",
    iata: "RAH",
    name: "Rafha Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Riyadh",
    iata: "RUH",
    name: "King Khalid International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Arar",
    iata: "RAE",
    name: "Arar Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Sharurah",
    iata: "SHW",
    name: "Sharurah Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Al-Jawf",
    iata: "AJF",
    name: "Al-Jawf International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "As-Sulayyil",
    iata: "SLF",
    name: "As-Sulayyil Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Tabuk",
    iata: "TUU",
    name: "Prince Sultan bin Abdulaziz International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Taif",
    iata: "TIF",
    name: "Taif International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Turaif",
    iata: "TUI",
    name: "Turaif Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Wadi Al Dawasir",
    iata: "WAE",
    name: "Wadi Al Dawasir Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Al Wajh",
    iata: "EJH",
    name: "Al Wajh Domestic Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Yanbu",
    iata: "YNB",
    name: "Prince Abdulmohsen Bin Abdulaziz International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Zilfi",
    iata: "ZUL",
    name: "Zilfi Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Ustupu",
    iata: "OGM",
    name: "Ogobsucum Airport",
    country: "PA"
  },
  {
    city: "Imam Hassan",
    iata: "IAQ",
    name: "Bahregan Airport",
    country: "Iran"
  },
  {
    city: "Abadan",
    iata: "ABD",
    name: "Abadan Ayatollah Jami International Airport",
    country: "Iran"
  },
  {
    city: "Dezful",
    iata: "DEF",
    name: "Dezful Airport",
    country: "Iran"
  },
  {
    city: "Aghajari",
    iata: "AKW",
    name: "Aghajari Airport",
    country: "Iran"
  },
  {
    city: "Gachsaran",
    iata: "GCH",
    name: "Gachsaran Airport",
    country: "Iran"
  },
  {
    city: "Masjed Soleyman",
    iata: "QMJ",
    name: "Shahid Asiyaee Airport",
    country: "Iran"
  },
  {
    city: "Omidiyeh",
    iata: "OMI",
    name: "Omidiyeh Airport",
    country: "Iran"
  },
  {
    city: "Mahshahr",
    iata: "MRX",
    name: "Mahshahr Airport",
    country: "Iran"
  },
  {
    city: "Ahvaz",
    iata: "AWZ",
    name: "Qasem Soleimani International Airport",
    country: "Iran"
  },
  {
    city: "Abu Musa",
    iata: "AEU",
    name: "Abu Musa Island Airport",
    country: "Iran"
  },
  {
    city: "Bushehr",
    iata: "BUZ",
    name: "Bushehr Airport",
    country: "Iran"
  },
  {
    city: "Jam",
    iata: "KNR",
    name: "Jam Airport",
    country: "Iran"
  },
  {
    city: "Kish Island",
    iata: "KIH",
    name: "Kish International Airport",
    country: "Iran"
  },
  {
    city: "Bandar Lengeh",
    iata: "BDH",
    name: "Bandar Lengeh International Airport",
    country: "Iran"
  },
  {
    city: "Khiyaroo",
    iata: "PGU",
    name: "Persian Gulf International Airport",
    country: "Iran"
  },
  {
    city: "Khark",
    iata: "KHK",
    name: "Khark Airport",
    country: "Iran"
  },
  {
    city: "Siri",
    iata: "SXI",
    name: "Siri Airport",
    country: "Iran"
  },
  {
    city: "Lavan Airport",
    iata: "LVP",
    name: "Lavan Airport",
    country: "Iran"
  },
  {
    city: "Kermanshah",
    iata: "KSH",
    name: "Shahid Ashrafi Esfahani Airport",
    country: "Iran"
  },
  {
    city: "Ilam",
    iata: "IIL",
    name: "Ilam Airport",
    country: "Iran"
  },
  {
    city: "nan",
    iata: "KHD",
    name: "Khoram Abad Airport",
    country: "Iran"
  },
  {
    city: "nan",
    iata: "SDG",
    name: "Sanandaj Airport",
    country: "Iran"
  },
  {
    city: "Hesa",
    iata: "IFH",
    name: "Hesa Airport",
    country: "Iran"
  },
  {
    city: "Kashan",
    iata: "KKS",
    name: "Kashan Airport",
    country: "Iran"
  },
  {
    city: "Isfahan",
    iata: "IFN",
    name: "Isfahan Shahid Beheshti International Airport",
    country: "Iran"
  },
  {
    city: "Shahrekord",
    iata: "CQD",
    name: "Shahrekord Airport",
    country: "Iran"
  },
  {
    city: "Rasht",
    iata: "RAS",
    name: "Sardar-e-Jangal Airport",
    country: "Iran"
  },
  {
    city: "Hamadan",
    iata: "HDM",
    name: "Hamadan Airport",
    country: "Iran"
  },
  {
    city: "Araak",
    iata: "AJK",
    name: "Arak Airport",
    country: "Iran"
  },
  {
    city: "Amirabad",
    iata: "NUJ",
    name: "Nojeh Air Base",
    country: "Iran"
  },
  {
    city: "Tehran",
    iata: "IKA",
    name: "Imam Khomeini International Airport",
    country: "Iran"
  },
  {
    city: "Tehran",
    iata: "THR",
    name: "Mehrabad International Airport",
    country: "Iran"
  },
  {
    city: "Qazvin",
    iata: "GZW",
    name: "Qazvin Airport",
    country: "Iran"
  },
  {
    city: "Karaj",
    iata: "PYK",
    name: "Payam International Airport",
    country: "Iran"
  },
  {
    city: "Semnan",
    iata: "SNX",
    name: "Semnan Municipal Airport",
    country: "Iran"
  },
  {
    city: "Bandar Abbas",
    iata: "BND",
    name: "Bandar Abbas International Airport",
    country: "Iran"
  },
  {
    city: "Jiroft",
    iata: "JYR",
    name: "Jiroft Airport",
    country: "Iran"
  },
  {
    city: "Kerman",
    iata: "KER",
    name: "Ayatollah Hashemi Rafsanjani International Airport",
    country: "Iran"
  },
  {
    city: "Bam",
    iata: "BXR",
    name: "Bam Airport",
    country: "Iran"
  },
  {
    city: "Bandar Abbas",
    iata: "HDR",
    name: "Havadarya Airport",
    country: "Iran"
  },
  {
    city: "Qeshm(Dayrestan)",
    iata: "GSM",
    name: "Qeshm International Airport",
    country: "Iran"
  },
  {
    city: "Rafsanjan",
    iata: "RJN",
    name: "Rafsanjan Airport",
    country: "Iran"
  },
  {
    city: "Sirjan",
    iata: "SYJ",
    name: "Sirjan Airport",
    country: "Iran"
  },
  {
    city: "Birjand",
    iata: "XBJ",
    name: "Birjand International Airport",
    country: "Iran"
  },
  {
    city: "Sarakhs",
    iata: "CKT",
    name: "Sarakhs Airport",
    country: "Iran"
  },
  {
    city: "Shahrud",
    iata: "RUD",
    name: "Shahrud International Airport",
    country: "Iran"
  },
  {
    city: "Mashhad",
    iata: "MHD",
    name: "Mashhad International Airport",
    country: "Iran"
  },
  {
    city: "Bojnord",
    iata: "BJB",
    name: "Bojnord Airport",
    country: "Iran"
  },
  {
    city: "Sabzevar",
    iata: "AFZ",
    name: "Sabzevar National Airport",
    country: "Iran"
  },
  {
    city: "Tabas",
    iata: "TCX",
    name: "Tabas Airport",
    country: "Iran"
  },
  {
    city: "Kalaleh",
    iata: "KLM",
    name: "Kalaleh Airport",
    country: "Iran"
  },
  {
    city: "Gorgan",
    iata: "GBT",
    name: "Gorgan Airport",
    country: "Iran"
  },
  {
    city: "Amol",
    iata: "BSM",
    name: "Bishe Kola Air Base",
    country: "Iran"
  },
  {
    city: "Nowshahr",
    iata: "NSH",
    name: "Nowshahr Airport",
    country: "Iran"
  },
  {
    city: "Ramsar",
    iata: "RZR",
    name: "Ramsar Airport",
    country: "Iran"
  },
  {
    city: "Sari",
    iata: "SRY",
    name: "Sari Dasht-e Naz International Airport",
    country: "Iran"
  },
  {
    city: "Fasa",
    iata: "FAZ",
    name: "Fasa Airport",
    country: "Iran"
  },
  {
    city: "Jahrom",
    iata: "JAR",
    name: "Jahrom Airport",
    country: "Iran"
  },
  {
    city: "Lar",
    iata: "LRR",
    name: "Lar Airport",
    country: "Iran"
  },
  {
    city: "Lamerd",
    iata: "LFM",
    name: "Lamerd Airport",
    country: "Iran"
  },
  {
    city: "Shiraz",
    iata: "SYZ",
    name: "Shiraz Shahid Dastghaib International Airport",
    country: "Iran"
  },
  {
    city: "Yasuj",
    iata: "YES",
    name: "Yasuj Airport",
    country: "Iran"
  },
  {
    city: "Khaneh",
    iata: "KHA",
    name: "Khaneh Airport",
    country: "Iran"
  },
  {
    city: "Khoy",
    iata: "KHY",
    name: "Khoy Airport",
    country: "Iran"
  },
  {
    city: "Ardabil",
    iata: "ADU",
    name: "Ardabil Airport",
    country: "Iran"
  },
  {
    city: "Maragheh",
    iata: "ACP",
    name: "Sahand Airport",
    country: "Iran"
  },
  {
    city: "Parsabad",
    iata: "PFQ",
    name: "Parsabad-Moghan Airport",
    country: "Iran"
  },
  {
    city: "Urmia",
    iata: "OMH",
    name: "Urmia Airport",
    country: "Iran"
  },
  {
    city: "Tabriz",
    iata: "TBZ",
    name: "Tabriz International Airport",
    country: "Iran"
  },
  {
    city: "Showt",
    iata: "IMQ",
    name: "Maku National Airport",
    country: "Iran"
  },
  {
    city: "Zanjan",
    iata: "JWN",
    name: "Zanjan Airport",
    country: "Iran"
  },
  {
    city: "Yazd",
    iata: "AZD",
    name: "Shahid Sadooghi Airport",
    country: "Iran"
  },
  {
    city: "Zabol",
    iata: "ACZ",
    name: "Zabol Airport",
    country: "Iran"
  },
  {
    city: "Konarak",
    iata: "ZBR",
    name: "Chabahar Konarak International Airport",
    country: "Iran"
  },
  {
    city: "Zahedan",
    iata: "ZAH",
    name: "Zahedan International Airport",
    country: "Iran"
  },
  {
    city: "Iranshahr",
    iata: "IHR",
    name: "Iranshahr Airport",
    country: "Iran"
  },
  {
    city: "Bandar-e-Jask",
    iata: "JSK",
    name: "Jask Airport",
    country: "Iran"
  },
  {
    city: "Amman",
    iata: "AMM",
    name: "Queen Alia International Airport",
    country: "JO"
  },
  {
    city: "Amman",
    iata: "ADJ",
    name: "Marka International (Amman Civil) Airport",
    country: "JO"
  },
  {
    city: "Aqaba",
    iata: "AQJ",
    name: "King Hussein International Airport",
    country: "JO"
  },
  {
    city: "Mafraq",
    iata: "OMF",
    name: "King Hussein Air College",
    country: "JO"
  },
  {
    city: "Ahmed Al Jaber AB",
    iata: "XIJ",
    name: "Ahmed Al Jaber Air Base",
    country: "KW"
  },
  {
    city: "Kuwait City",
    iata: "KWI",
    name: "Kuwait International Airport",
    country: "KW"
  },
  {
    city: "Beirut",
    iata: "BEY",
    name: "Beirut Rafic Hariri International Airport",
    country: "LB"
  },
  {
    city: "Old Harbor",
    iata: "OLH",
    name: "Old Harbor Airport",
    country: "United States"
  },
  {
    city: "Tripoli",
    iata: "KYE",
    name: "Rene Mouawad Air Base",
    country: "LB"
  },
  {
    city: "Dibba al Baya",
    iata: "BYB",
    name: "Dibba Airport",
    country: "OM"
  },
  {
    city: "Adam",
    iata: "AOM",
    name: "Adam Airport",
    country: "OM"
  },
  {
    city: "Duqm",
    iata: "DQM",
    name: "Duqm International Airport",
    country: "OM"
  },
  {
    city: "Al Masna'ah",
    iata: "MNH",
    name: "Mussanah Airport",
    country: "OM"
  },
  {
    city: "Abu Dhabi",
    iata: "AUH",
    name: "Zayed International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Abu Dhabi",
    iata: "AZI",
    name: "Al Bateen Executive Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Al Ain",
    iata: "AAN",
    name: "Al Ain International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "nan",
    iata: "DHF",
    name: "Al Dhafra Air Base",
    country: "United Arab Emirates"
  },
  {
    city: "Sir Bani Yas",
    iata: "XSB",
    name: "Sir Bani Yas Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Dubai",
    iata: "DXB",
    name: "Dubai International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Delma Island",
    iata: "ZDY",
    name: "Delma Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Dubai",
    iata: "NHD",
    name: "Al Minhad Air Base",
    country: "United Arab Emirates"
  },
  {
    city: "Dubai(Jebel Ali)",
    iata: "DWC",
    name: "Al Maktoum International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Fujairah",
    iata: "FJR",
    name: "Fujairah International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Ras Al Khaimah",
    iata: "RKT",
    name: "Ras Al Khaimah International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Sharjah",
    iata: "SHJ",
    name: "Sharjah International Airport",
    country: "United Arab Emirates"
  },
  {
    city: "Tbeng Meanchey",
    iata: "OMY",
    name: "Preah Vinhear Airport",
    country: "KH"
  },
  {
    city: "Buraimi",
    iata: "RMB",
    name: "Buraimi Airport",
    country: "OM"
  },
  {
    city: "Fahud",
    iata: "FAU",
    name: "Fahud Airport",
    country: "OM"
  },
  {
    city: "Ghaba",
    iata: "RNM",
    name: "Qarn Alam Airport",
    country: "OM"
  },
  {
    city: "Duqm",
    iata: "JNJ",
    name: "Ja'Aluni Airport",
    country: "OM"
  },
  {
    city: "Khasab",
    iata: "KHS",
    name: "Khasab Airport",
    country: "OM"
  },
  {
    city: "Lekhwair",
    iata: "LKW",
    name: "Lekhwair Airport",
    country: "OM"
  },
  {
    city: "Masirah",
    iata: "MSH",
    name: "RAFO Masirah",
    country: "OM"
  },
  {
    city: "Muscat/Seeb",
    iata: "MCT",
    name: "Muscat International Airport",
    country: "OM"
  },
  {
    city: "Marmul",
    iata: "OMM",
    name: "Marmul Airport",
    country: "OM"
  },
  {
    city: "Salalah",
    iata: "SLL",
    name: "Salalah International Airport",
    country: "OM"
  },
  {
    city: "Suhar",
    iata: "OHS",
    name: "Suhar International Airport",
    country: "OM"
  },
  {
    city: "Thumrait",
    iata: "TTH",
    name: "Thumrait Air Base",
    country: "OM"
  },
  {
    city: "Kandanwari",
    iata: "KCF",
    name: "Thar Airport",
    country: "Pakistan"
  },
  {
    city: "Dadu",
    iata: "DDU",
    name: "Dadu West Airport",
    country: "Pakistan"
  },
  {
    city: "Bhagatanwala",
    iata: "BHW",
    name: "Bhagatanwala Airport",
    country: "Pakistan"
  },
  {
    city: "Bannu",
    iata: "BNP",
    name: "Bannu Airport",
    country: "Pakistan"
  },
  {
    city: "Bahawalnagar",
    iata: "WGB",
    name: "Bahawalnagar Airport",
    country: "Pakistan"
  },
  {
    city: "Bahawalpur",
    iata: "BHV",
    name: "Bahawalpur Airport",
    country: "Pakistan"
  },
  {
    city: "Chitral",
    iata: "CJL",
    name: "Chitral Airport",
    country: "Pakistan"
  },
  {
    city: "Chilas",
    iata: "CHB",
    name: "Chilas Airport",
    country: "Pakistan"
  },
  {
    city: "Dalbandin",
    iata: "DBA",
    name: "Dalbandin Airport",
    country: "Pakistan"
  },
  {
    city: "Dera Ghazi Khan",
    iata: "DEA",
    name: "Dera Ghazi Khan Airport",
    country: "Pakistan"
  },
  {
    city: "Dera Ismael Khan",
    iata: "DSK",
    name: "Dera Ismael Khan Airport [IN-ACTIVE]",
    country: "Pakistan"
  },
  {
    city: "Faisalabad",
    iata: "LYP",
    name: "Faisalabad International Airport",
    country: "Pakistan"
  },
  {
    city: "Gurandani",
    iata: "GWD",
    name: "New Gwadar International Airport",
    country: "Pakistan"
  },
  {
    city: "Gilgit",
    iata: "GIL",
    name: "Gilgit Airport",
    country: "Pakistan"
  },
  {
    city: "Attock",
    iata: "ISB",
    name: "Islamabad International Airport",
    country: "Pakistan"
  },
  {
    city: "Jacobabad",
    iata: "JAG",
    name: "Shahbaz Air Base",
    country: "Pakistan"
  },
  {
    city: "Karachi",
    iata: "KHI",
    name: "Jinnah International Airport",
    country: "Pakistan"
  },
  {
    city: "Hyderabad",
    iata: "HDD",
    name: "Hyderabad Airport",
    country: "Pakistan"
  },
  {
    city: "Khuzdar",
    iata: "KDD",
    name: "Khuzdar Airport",
    country: "Pakistan"
  },
  {
    city: "Kohat",
    iata: "OHT",
    name: "Kohat Airport",
    country: "Pakistan"
  },
  {
    city: "Lahore",
    iata: "LHE",
    name: "Allama Iqbal International Airport",
    country: "Pakistan"
  },
  {
    city: "Loralai",
    iata: "LRG",
    name: "Loralai Airport",
    country: "Pakistan"
  },
  {
    city: "Mangla",
    iata: "XJM",
    name: "Mangla Airport",
    country: "Pakistan"
  },
  {
    city: "Muzaffarabad",
    iata: "MFG",
    name: "Muzaffarabad Airport",
    country: "Pakistan"
  },
  {
    city: "Mianwali",
    iata: "MWD",
    name: "Mianwali Air Base",
    country: "Pakistan"
  },
  {
    city: "Moenjodaro",
    iata: "MJD",
    name: "Moenjodaro Airport",
    country: "Pakistan"
  },
  {
    city: "Sindhri",
    iata: "MPD",
    name: "Sindhri Tharparkar Airport",
    country: "Pakistan"
  },
  {
    city: "Kamra",
    iata: "ATG",
    name: "Minhas Air Base",
    country: "Pakistan"
  },
  {
    city: "Multan",
    iata: "MUX",
    name: "Multan International Airport",
    country: "Pakistan"
  },
  {
    city: "Nawabashah",
    iata: "WNS",
    name: "Shaheed Benazirabad Airport",
    country: "Pakistan"
  },
  {
    city: "Ormara Raik",
    iata: "ORW",
    name: "Ormara Airport",
    country: "Pakistan"
  },
  {
    city: "Parachinar",
    iata: "PAJ",
    name: "Parachinar Airport",
    country: "Pakistan"
  },
  {
    city: "Panjgur",
    iata: "PJG",
    name: "Panjgur Airport",
    country: "Pakistan"
  },
  {
    city: "Pasni",
    iata: "PSI",
    name: "Pasni Airport",
    country: "Pakistan"
  },
  {
    city: "Peshawar",
    iata: "PEW",
    name: "Bacha Khan International Airport",
    country: "Pakistan"
  },
  {
    city: "Quetta",
    iata: "UET",
    name: "Quetta International Airport",
    country: "Pakistan"
  },
  {
    city: "Rahim Yar Khan",
    iata: "RYK",
    name: "Shaikh Zaid Airport",
    country: "Pakistan"
  },
  {
    city: "Rawalakot",
    iata: "RAZ",
    name: "Rawalakot Airport",
    country: "Pakistan"
  },
  {
    city: "Sibi",
    iata: "SBQ",
    name: "Sibi Airport",
    country: "Pakistan"
  },
  {
    city: "Skardu",
    iata: "KDU",
    name: "Skardu International Airport",
    country: "Pakistan"
  },
  {
    city: "Sukkur",
    iata: "SKZ",
    name: "Begum Nusrat Bhutto International Airport Sukkur",
    country: "Pakistan"
  },
  {
    city: "Sehwan Sharif",
    iata: "SYW",
    name: "Sehwan Sharif Airport",
    country: "Pakistan"
  },
  {
    city: "Sargodha",
    iata: "SGI",
    name: "Mushaf Air Base",
    country: "Pakistan"
  },
  {
    city: "Saidu Sharif",
    iata: "SDT",
    name: "Saidu Sharif Airport",
    country: "Pakistan"
  },
  {
    city: "Sialkot",
    iata: "SKT",
    name: "Sialkot International Airport",
    country: "Pakistan"
  },
  {
    city: "Sui",
    iata: "SUL",
    name: "Sui Airport",
    country: "Pakistan"
  },
  {
    city: "Sawan Gas Field",
    iata: "RZS",
    name: "Sawan Airport",
    country: "Pakistan"
  },
  {
    city: "Tarbela",
    iata: "TLB",
    name: "Tarbela Dam Airport",
    country: "Pakistan"
  },
  {
    city: "Badin",
    iata: "BDN",
    name: "Talhar Airport",
    country: "Pakistan"
  },
  {
    city: "Taftan",
    iata: "TFT",
    name: "Taftan Airport",
    country: "Pakistan"
  },
  {
    city: "Turbat",
    iata: "TUK",
    name: "Turbat International Airport",
    country: "Pakistan"
  },
  {
    city: "Waana",
    iata: "WAF",
    name: "Wana Airport",
    country: "Pakistan"
  },
  {
    city: "Fort Sandeman",
    iata: "PZH",
    name: "Zhob Airport",
    country: "Pakistan"
  },
  {
    city: "Hīt",
    iata: "IQA",
    name: "Al Asad Air Base",
    country: "Iraq"
  },
  {
    city: "Al Habbaniyah",
    iata: "TQD",
    name: "Al Taqaddum Air Base",
    country: "Iraq"
  },
  {
    city: "Bamarni",
    iata: "BMN",
    name: "Bamarni Airport",
    country: "Iraq"
  },
  {
    city: "Baghdad",
    iata: "BGW",
    name: "Baghdad International Airport / New Al Muthana Air Base",
    country: "Iraq"
  },
  {
    city: "Mosul",
    iata: "OSM",
    name: "Mosul International Airport",
    country: "Iraq"
  },
  {
    city: "Arbil",
    iata: "EBL",
    name: "Erbil International Airport",
    country: "Iraq"
  },
  {
    city: "Port Lions",
    iata: "ORI",
    name: "Port Lions Airport",
    country: "United States"
  },
  {
    city: "Kirkuk",
    iata: "KIK",
    name: "Kirkuk International Airport",
    country: "Iraq"
  },
  {
    city: "Basra",
    iata: "BSR",
    name: "Basra International Airport",
    country: "Iraq"
  },
  {
    city: "Najaf",
    iata: "NJF",
    name: "Al Najaf International Airport",
    country: "Iraq"
  },
  {
    city: "Qayyarah",
    iata: "RQW",
    name: "Qayyarah West Airport",
    country: "Iraq"
  },
  {
    city: "Sulaymaniyah",
    iata: "ISU",
    name: "Sulaymaniyah International Airport",
    country: "Iraq"
  },
  {
    city: "Nasiriyah",
    iata: "XNH",
    name: "Ali Air Base",
    country: "Iraq"
  },
  {
    city: "Aleppo",
    iata: "ALP",
    name: "Aleppo International Airport",
    country: "SY"
  },
  {
    city: "Damascus",
    iata: "DAM",
    name: "Damascus International Airport",
    country: "SY"
  },
  {
    city: "Deir ez-Zor",
    iata: "DEZ",
    name: "Deir ez-Zor Airport",
    country: "SY"
  },
  {
    city: "Qamishli",
    iata: "KAC",
    name: "Qamishli International Airport",
    country: "SY"
  },
  {
    city: "Latakia",
    iata: "LTK",
    name: "Latakia International Airport",
    country: "SY"
  },
  {
    city: "Tadmur",
    iata: "PMS",
    name: "Palmyra Airport",
    country: "SY"
  },
  {
    city: "Doha",
    iata: "DIA",
    name: "Doha International Airport",
    country: "QA"
  },
  {
    city: "Ar Rayyan",
    iata: "XJD",
    name: "Al Udeid Air Base",
    country: "QA"
  },
  {
    city: "Doha",
    iata: "DOH",
    name: "Hamad International Airport",
    country: "QA"
  },
  {
    city: "Cotriguaçu",
    iata: "OTT",
    name: "Andre Maggi Airport",
    country: "Brazil"
  },
  {
    city: "Oum Hadjer",
    iata: "OUM",
    name: "Oum Hadjer Airport",
    country: "TD"
  },
  {
    city: "Orientos",
    iata: "OXO",
    name: "Orientos Airport",
    country: "Australia"
  },
  {
    city: "Aden",
    iata: "ADE",
    name: "Aden International Airport",
    country: "YE"
  },
  {
    city: "Abs",
    iata: "EAB",
    name: "Abs Airport",
    country: "YE"
  },
  {
    city: "Ataq",
    iata: "AXK",
    name: "Ataq Airport",
    country: "YE"
  },
  {
    city: "Al-Bayda",
    iata: "BYD",
    name: "Al-Bayda Airport",
    country: "YE"
  },
  {
    city: "Beihan",
    iata: "BHN",
    name: "Beihan Airport",
    country: "YE"
  },
  {
    city: "Al-Bough",
    iata: "BUK",
    name: "Al-Bough Airport",
    country: "YE"
  },
  {
    city: "Al Ghaydah",
    iata: "AAY",
    name: "Al Ghaydah International Airport",
    country: "YE"
  },
  {
    city: "Kamaran",
    iata: "KAM",
    name: "Kamaran Airport",
    country: "YE"
  },
  {
    city: "Marib",
    iata: "MYN",
    name: "Marib Airport",
    country: "YE"
  },
  {
    city: "Mukayras",
    iata: "UKR",
    name: "Mukeiras Airport",
    country: "YE"
  },
  {
    city: "Qishn",
    iata: "IHN",
    name: "Qishn Airport",
    country: "YE"
  },
  {
    city: "Mukalla(Riyan)",
    iata: "RIY",
    name: "Riyan International Airport",
    country: "YE"
  },
  {
    city: "Sa'dah",
    iata: "SYE",
    name: "Sadah Airport",
    country: "YE"
  },
  {
    city: "Sanaa",
    iata: "SAH",
    name: "Sanaa International Airport",
    country: "YE"
  },
  {
    city: "Mori",
    iata: "SCT",
    name: "Socotra Airport",
    country: "YE"
  },
  {
    city: "Seiyun",
    iata: "GXF",
    name: "Seiyun Hadhramaut International Airport",
    country: "YE"
  },
  {
    city: "Taiz",
    iata: "TAI",
    name: "Taiz International Airport",
    country: "YE"
  },
  {
    city: "Mamitupu",
    iata: "ACU",
    name: "Achutupu Airport",
    country: "PA"
  },
  {
    city: "Isla Lorenzo Bello",
    iata: "AIL",
    name: "Ailigandí Airport",
    country: "PA"
  },
  {
    city: "Cartí Islands",
    iata: "CTE",
    name: "Cartí Airport",
    country: "PA"
  },
  {
    city: "Mulatupo",
    iata: "MPP",
    name: "Mulatupo Airport",
    country: "PA"
  },
  {
    city: "Ukupseni",
    iata: "PYC",
    name: "Playón Chico Airport",
    country: "PA"
  },
  {
    city: "Isla del Rey",
    iata: "NMG",
    name: "San Miguel Airport",
    country: "PA"
  },
  {
    city: "Coetupo",
    iata: "TUW",
    name: "Tubualá Airport",
    country: "PA"
  },
  {
    city: "Yaviza",
    iata: "PYV",
    name: "Yaviza Airport",
    country: "PA"
  },
  {
    city: "Puerto Armuelles",
    iata: "AML",
    name: "Puerto Armuelles Airport",
    country: "PA"
  },
  {
    city: "Puerto Piña",
    iata: "BFQ",
    name: "Bahia Piña Airport",
    country: "PA"
  },
  {
    city: "El Real de Santa María",
    iata: "ELE",
    name: "EL Real Airport",
    country: "PA"
  },
  {
    city: "Contadora Island",
    iata: "OTD",
    name: "Raul Arias Espinoza Airport",
    country: "PA"
  },
  {
    city: "Boca de Sábalo",
    iata: "SAX",
    name: "Sambú Airport",
    country: "PA"
  },
  {
    city: "Atka",
    iata: "AKB",
    name: "Atka Airport",
    country: "United States"
  },
  {
    city: "Cold Bay",
    iata: "PML",
    name: "Port Moller Airport",
    country: "United States"
  },
  {
    city: "Port Alexander",
    iata: "PTD",
    name: "Port Alexander Seaplane Base",
    country: "United States"
  },
  {
    city: "Palmer",
    iata: "PAQ",
    name: "Warren Woods Palmer Municipal Airport",
    country: "United States"
  },
  {
    city: "Attu",
    iata: "ATU",
    name: "Casco Cove Coast Guard Station",
    country: "United States"
  },
  {
    city: "Barter Island",
    iata: "BTI",
    name: "Barter Island Long Range Radar Station Airport",
    country: "United States"
  },
  {
    city: "Bethel",
    iata: "BET",
    name: "Bethel Airport",
    country: "United States"
  },
  {
    city: "Beluga",
    iata: "BVU",
    name: "Beluga Airport",
    country: "United States"
  },
  {
    city: "Delta Junction Ft Greely",
    iata: "BIG",
    name: "Allen Army Airfield",
    country: "United States"
  },
  {
    city: "Buckland",
    iata: "BKC",
    name: "Buckland Airport",
    country: "United States"
  },
  {
    city: "Big Mountain",
    iata: "BMX",
    name: "Big Mountain Airport",
    country: "United States"
  },
  {
    city: "Utqiaġvik",
    iata: "BRW",
    name: "Wiley Post Will Rogers Memorial Airport",
    country: "United States"
  },
  {
    city: "Bettles",
    iata: "BTT",
    name: "Bettles Airport",
    country: "United States"
  },
  {
    city: "Cold Bay",
    iata: "CDB",
    name: "Cold Bay Airport",
    country: "United States"
  },
  {
    city: "Central",
    iata: "CEM",
    name: "Central Airport",
    country: "United States"
  },
  {
    city: "Chalkyitsik",
    iata: "CIK",
    name: "Chalkyitsik Airport",
    country: "United States"
  },
  {
    city: "Chefornak",
    iata: "CYF",
    name: "Chefornak Airport",
    country: "United States"
  },
  {
    city: "Scammon Bay",
    iata: "SCM",
    name: "Scammon Bay Airport",
    country: "United States"
  },
  {
    city: "Circle",
    iata: "IRC",
    name: "Circle City (New) Airport",
    country: "United States"
  },
  {
    city: "Cape Sarichef",
    iata: "WSF",
    name: "Cape Sarichef Airport",
    country: "United States"
  },
  {
    city: "Cordova",
    iata: "CDV",
    name: "Merle K (Mudhole) Smith Airport",
    country: "United States"
  },
  {
    city: "Coldfoot",
    iata: "CXF",
    name: "Coldfoot Airport",
    country: "United States"
  },
  {
    city: "Yakataga",
    iata: "CYT",
    name: "Yakataga Airport",
    country: "United States"
  },
  {
    city: "Cape Romanzof",
    iata: "CZF",
    name: "Cape Romanzof LRRS Airport",
    country: "United States"
  },
  {
    city: "Deering",
    iata: "DRG",
    name: "Deering Airport",
    country: "United States"
  },
  {
    city: "Red Dog",
    iata: "RDB",
    name: "Red Dog Airport",
    country: "United States"
  },
  {
    city: "Adak",
    iata: "ADK",
    name: "Adak Airport",
    country: "United States"
  },
  {
    city: "Dillingham",
    iata: "DLG",
    name: "Dillingham Airport",
    country: "United States"
  },
  {
    city: "Marshall",
    iata: "MLL",
    name: "Marshall Don Hunter Sr Airport",
    country: "United States"
  },
  {
    city: "Kodiak",
    iata: "ADQ",
    name: "Kodiak Airport",
    country: "United States"
  },
  {
    city: "Unalaska",
    iata: "DUT",
    name: "Tom Madsen (Dutch Harbor) Airport",
    country: "United States"
  },
  {
    city: "Kongiganak",
    iata: "KKH",
    name: "Kongiganak Airport",
    country: "United States"
  },
  {
    city: "Anchorage",
    iata: "EDF",
    name: "Elmendorf Air Force Base",
    country: "United States"
  },
  {
    city: "Eek",
    iata: "EEK",
    name: "Eek Airport",
    country: "United States"
  },
  {
    city: "Eagle",
    iata: "EAA",
    name: "Eagle Airport",
    country: "United States"
  },
  {
    city: "Cape Newenham",
    iata: "EHM",
    name: "Cape Newenham LRRS Airport",
    country: "United States"
  },
  {
    city: "Fairbanks",
    iata: "EIL",
    name: "Eielson Air Force Base",
    country: "United States"
  },
  {
    city: "Elfin Cove",
    iata: "ELV",
    name: "Elfin Cove Seaplane Base",
    country: "United States"
  },
  {
    city: "Emmonak",
    iata: "EMK",
    name: "Emmonak Airport",
    country: "United States"
  },
  {
    city: "Kenai",
    iata: "ENA",
    name: "Kenai Municipal Airport",
    country: "United States"
  },
  {
    city: "Mertarvik",
    iata: "WWT",
    name: "Mertarvik Airport",
    country: "United States"
  },
  {
    city: "Fairbanks",
    iata: "FAI",
    name: "Fairbanks International Airport",
    country: "United States"
  },
  {
    city: "Fairbanks",
    iata: "FBK",
    name: "Ladd Army Airfield",
    country: "United States"
  },
  {
    city: "Ambler",
    iata: "ABL",
    name: "Ambler Airport",
    country: "United States"
  },
  {
    city: "Fort Richardson",
    iata: "FRN",
    name: "Bryant Army Airfield",
    country: "United States"
  },
  {
    city: "Nikolai",
    iata: "NIB",
    name: "Nikolai Airport",
    country: "United States"
  },
  {
    city: "Galena",
    iata: "GAL",
    name: "Edward G. Pitka Sr Airport",
    country: "United States"
  },
  {
    city: "Galbraith Lake",
    iata: "GBH",
    name: "Galbraith Lake Airport",
    country: "United States"
  },
  {
    city: "Kwigillingok",
    iata: "KWK",
    name: "Kwigillingok Airport",
    country: "United States"
  },
  {
    city: "Shungnak",
    iata: "SHG",
    name: "Shungnak Airport",
    country: "United States"
  },
  {
    city: "Gulkana",
    iata: "GKN",
    name: "Gulkana Airport",
    country: "United States"
  },
  {
    city: "Golovin",
    iata: "GLV",
    name: "Golovin Airport",
    country: "United States"
  },
  {
    city: "Gambell",
    iata: "GAM",
    name: "Gambell Airport",
    country: "United States"
  },
  {
    city: "Angoon",
    iata: "AGN",
    name: "Angoon Seaplane Base",
    country: "United States"
  },
  {
    city: "Big Lake",
    iata: "BGQ",
    name: "Big Lake Airport",
    country: "United States"
  },
  {
    city: "Gustavus",
    iata: "GST",
    name: "Gustavus Airport",
    country: "United States"
  },
  {
    city: "Nightmute",
    iata: "NME",
    name: "Nightmute Airport",
    country: "United States"
  },
  {
    city: "Skagway",
    iata: "SGY",
    name: "Skagway Airport",
    country: "United States"
  },
  {
    city: "Granite Mountain",
    iata: "GMT",
    name: "Granite Mountain Air Station",
    country: "United States"
  },
  {
    city: "Holy Cross",
    iata: "HCR",
    name: "Holy Cross Airport",
    country: "United States"
  },
  {
    city: "Huslia",
    iata: "HSL",
    name: "Huslia Airport",
    country: "United States"
  },
  {
    city: "Haines",
    iata: "HNS",
    name: "Haines Airport",
    country: "United States"
  },
  {
    city: "Homer",
    iata: "HOM",
    name: "Homer Airport",
    country: "United States"
  },
  {
    city: "Hooper Bay",
    iata: "HPB",
    name: "Hooper Bay Airport",
    country: "United States"
  },
  {
    city: "Hughes",
    iata: "HUS",
    name: "Hughes Airport",
    country: "United States"
  },
  {
    city: "Shageluk",
    iata: "SHX",
    name: "Shageluk Airport",
    country: "United States"
  },
  {
    city: "Hydaburg",
    iata: "HYG",
    name: "Hydaburg Seaplane Base",
    country: "United States"
  },
  {
    city: "Igiugig",
    iata: "IGG",
    name: "Igiugig Airport",
    country: "United States"
  },
  {
    city: "Egegik",
    iata: "EGX",
    name: "Egegik Airport",
    country: "United States"
  },
  {
    city: "Kiana",
    iata: "IAN",
    name: "Bob Baker Memorial Airport",
    country: "United States"
  },
  {
    city: "Iliamna",
    iata: "ILI",
    name: "Iliamna Airport",
    country: "United States"
  },
  {
    city: "Utopia Creek",
    iata: "UTO",
    name: "Indian Mountain LRRS Airport",
    country: "United States"
  },
  {
    city: "Denali Park",
    iata: "MCL",
    name: "Denali National Park Airport",
    country: "United States"
  },
  {
    city: "Wales",
    iata: "WAA",
    name: "Wales Airport",
    country: "United States"
  },
  {
    city: "Chignik",
    iata: "KCG",
    name: "Chignik Airport",
    country: "United States"
  },
  {
    city: "Juneau",
    iata: "JNU",
    name: "Juneau International Airport",
    country: "United States"
  },
  {
    city: "Koliganek",
    iata: "KGK",
    name: "Koliganek Airport",
    country: "United States"
  },
  {
    city: "Kodiak",
    iata: "KDK",
    name: "Kodiak Municipal Airport",
    country: "United States"
  },
  {
    city: "False Pass",
    iata: "KFP",
    name: "False Pass Airport",
    country: "United States"
  },
  {
    city: "Akhiok",
    iata: "AKK",
    name: "Akhiok Airport",
    country: "United States"
  },
  {
    city: "Kipnuk",
    iata: "KPN",
    name: "Kipnuk Airport",
    country: "United States"
  },
  {
    city: "Koyuk",
    iata: "KKA",
    name: "Koyuk Alfred Adams Airport",
    country: "United States"
  },
  {
    city: "Kulik Lake",
    iata: "LKK",
    name: "Kulik Lake Airport",
    country: "United States"
  },
  {
    city: "King Salmon",
    iata: "AKN",
    name: "King Salmon Airport",
    country: "United States"
  },
  {
    city: "Nikolski",
    iata: "IKO",
    name: "Nikolski Air Station",
    country: "United States"
  },
  {
    city: "Anaktuvuk Pass",
    iata: "AKP",
    name: "Anaktuvuk Pass Airport",
    country: "United States"
  },
  {
    city: "Ketchikan",
    iata: "KTN",
    name: "Ketchikan International Airport",
    country: "United States"
  },
  {
    city: "Kuparuk",
    iata: "UUK",
    name: "Ugnu-Kuparuk Airport",
    country: "United States"
  },
  {
    city: "Kaltag",
    iata: "KAL",
    name: "Kaltag Airport",
    country: "United States"
  },
  {
    city: "Klawock",
    iata: "KLW",
    name: "Klawock Airport",
    country: "United States"
  },
  {
    city: "Karluk",
    iata: "KYK",
    name: "Karluk Airport",
    country: "United States"
  },
  {
    city: "Larsen Bay",
    iata: "KLN",
    name: "Larsen Bay Airport",
    country: "United States"
  },
  {
    city: "Kalskag",
    iata: "KLG",
    name: "Kalskag Airport",
    country: "United States"
  },
  {
    city: "Port Alsworth",
    iata: "PTA",
    name: "Port Alsworth Airport",
    country: "United States"
  },
  {
    city: "Point Lonely",
    iata: "LNI",
    name: "Point Lonely Short Range Radar Site Airfield",
    country: "United States"
  },
  {
    city: "Chandalar Lake",
    iata: "WCR",
    name: "Chandalar Lake Airport",
    country: "United States"
  },
  {
    city: "Cape Lisburne",
    iata: "LUR",
    name: "Cape Lisburne LRRS Airport",
    country: "United States"
  },
  {
    city: "Manokotak",
    iata: "KMO",
    name: "Manokotak Airport",
    country: "United States"
  },
  {
    city: "McGrath",
    iata: "MCG",
    name: "McGrath Airport",
    country: "United States"
  },
  {
    city: "Middleton Island",
    iata: "MDO",
    name: "Middleton Island Airport",
    country: "United States"
  },
  {
    city: "Minchumina",
    iata: "LMA",
    name: "Minchumina Airport",
    country: "United States"
  },
  {
    city: "St Michael",
    iata: "SMK",
    name: "St Michael Airport",
    country: "United States"
  },
  {
    city: "Manley Hot Springs",
    iata: "MLY",
    name: "Manley Hot Springs Airport",
    country: "United States"
  },
  {
    city: "Metlakatla",
    iata: "MTM",
    name: "Metlakatla Seaplane Base",
    country: "United States"
  },
  {
    city: "Mountain Village",
    iata: "MOU",
    name: "Mountain Village Airport",
    country: "United States"
  },
  {
    city: "Anchorage",
    iata: "MRI",
    name: "Merrill Field",
    country: "United States"
  },
  {
    city: "Mccarthy",
    iata: "MXY",
    name: "Mc Carthy Airport",
    country: "United States"
  },
  {
    city: "Mekoryuk",
    iata: "MYU",
    name: "Mekoryuk Airport",
    country: "United States"
  },
  {
    city: "Napakiak",
    iata: "WNA",
    name: "Napakiak Airport",
    country: "United States"
  },
  {
    city: "Anchorage",
    iata: "ANC",
    name: "Ted Stevens Anchorage International Airport",
    country: "United States"
  },
  {
    city: "Aniak",
    iata: "ANI",
    name: "Aniak Airport",
    country: "United States"
  },
  {
    city: "Nenana",
    iata: "ENN",
    name: "Nenana Municipal Airport",
    country: "United States"
  },
  {
    city: "Nondalton",
    iata: "NNL",
    name: "Nondalton Airport",
    country: "United States"
  },
  {
    city: "Funter Bay",
    iata: "FNR",
    name: "Funter Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Metlakatla",
    iata: "ANN",
    name: "Annette Island Airport",
    country: "United States"
  },
  {
    city: "Nulato",
    iata: "NUL",
    name: "Nulato Airport",
    country: "United States"
  },
  {
    city: "Anvik",
    iata: "ANV",
    name: "Anvik Airport",
    country: "United States"
  },
  {
    city: "New Stuyahok",
    iata: "KNW",
    name: "New Stuyahok Airport",
    country: "United States"
  },
  {
    city: "Kobuk",
    iata: "OBU",
    name: "Kobuk Airport",
    country: "United States"
  },
  {
    city: "Portage Creek",
    iata: "PCA",
    name: "Portage Creek Airport",
    country: "United States"
  },
  {
    city: "Hoonah",
    iata: "HNH",
    name: "Hoonah Airport",
    country: "United States"
  },
  {
    city: "Nome",
    iata: "OME",
    name: "Nome Airport",
    country: "United States"
  },
  {
    city: "Toksook Bay",
    iata: "OOK",
    name: "Toksook Bay Airport",
    country: "United States"
  },
  {
    city: "Northway",
    iata: "ORT",
    name: "Northway Airport",
    country: "United States"
  },
  {
    city: "Kotzebue",
    iata: "OTZ",
    name: "Ralph Wien Memorial Airport",
    country: "United States"
  },
  {
    city: "Nelson Lagoon",
    iata: "NLG",
    name: "Nelson Lagoon Airport",
    country: "United States"
  },
  {
    city: "St George",
    iata: "STG",
    name: "St George Airport",
    country: "United States"
  },
  {
    city: "Port Clarence",
    iata: "KPC",
    name: "Port Clarence Coast Guard Station",
    country: "United States"
  },
  {
    city: "Perryville",
    iata: "KPV",
    name: "Perryville Airport",
    country: "United States"
  },
  {
    city: "Petersburg",
    iata: "PSG",
    name: "Petersburg James A Johnson Airport",
    country: "United States"
  },
  {
    city: "Port Heiden",
    iata: "PTH",
    name: "Port Heiden Airport",
    country: "United States"
  },
  {
    city: "Napaskiak",
    iata: "PKA",
    name: "Napaskiak Airport",
    country: "United States"
  },
  {
    city: "Platinum",
    iata: "PTU",
    name: "Platinum Airport",
    country: "United States"
  },
  {
    city: "Pilot Point",
    iata: "PIP",
    name: "Pilot Point Airport",
    country: "United States"
  },
  {
    city: "Point Hope",
    iata: "PHO",
    name: "Point Hope Airport",
    country: "United States"
  },
  {
    city: "Prospect Creek",
    iata: "PPC",
    name: "Prospect Creek Airport",
    country: "United States"
  },
  {
    city: "Quinhagak",
    iata: "KWN",
    name: "Quinhagak Airport",
    country: "United States"
  },
  {
    city: "Nuiqsut",
    iata: "NUI",
    name: "Nuiqsut Airport",
    country: "United States"
  },
  {
    city: "Arctic Village",
    iata: "ARC",
    name: "Arctic Village Airport",
    country: "United States"
  },
  {
    city: "Russian Mission",
    iata: "RSH",
    name: "Russian Mission Airport",
    country: "United States"
  },
  {
    city: "Ruby",
    iata: "RBY",
    name: "Ruby Airport",
    country: "United States"
  },
  {
    city: "Savoonga",
    iata: "SVA",
    name: "Savoonga Airport",
    country: "United States"
  },
  {
    city: "Deadhorse",
    iata: "SCC",
    name: "Deadhorse Airport",
    country: "United States"
  },
  {
    city: "Sand Point",
    iata: "SDP",
    name: "Sand Point Airport",
    country: "United States"
  },
  {
    city: "Shishmaref",
    iata: "SHH",
    name: "Shishmaref Airport",
    country: "United States"
  },
  {
    city: "Sitka",
    iata: "SIT",
    name: "Sitka Rocky Gutierrez Airport",
    country: "United States"
  },
  {
    city: "Selawik",
    iata: "WLK",
    name: "Selawik Airport",
    country: "United States"
  },
  {
    city: "Sleetmute",
    iata: "SLQ",
    name: "Sleetmute Airport",
    country: "United States"
  },
  {
    city: "St Mary's",
    iata: "KSM",
    name: "St Mary's Airport",
    country: "United States"
  },
  {
    city: "St Paul Island",
    iata: "SNP",
    name: "St Paul Island Airport",
    country: "United States"
  },
  {
    city: "Seldovia",
    iata: "SOV",
    name: "Seldovia Airport",
    country: "United States"
  },
  {
    city: "Sheep Mountain",
    iata: "SMU",
    name: "Sheep Mountain Airport",
    country: "United States"
  },
  {
    city: "Cantwell",
    iata: "UMM",
    name: "Summit Airport",
    country: "United States"
  },
  {
    city: "Sparrevohn",
    iata: "SVW",
    name: "Sparrevohn LRRS Airport",
    country: "United States"
  },
  {
    city: "Skwentna",
    iata: "SKW",
    name: "Skwentna Airport",
    country: "United States"
  },
  {
    city: "Soldotna",
    iata: "SXQ",
    name: "Soldotna Airport",
    country: "United States"
  },
  {
    city: "Shemya",
    iata: "SYA",
    name: "Eareckson Air Station",
    country: "United States"
  },
  {
    city: "Tanana",
    iata: "TAL",
    name: "Ralph M Calhoun Memorial Airport",
    country: "United States"
  },
  {
    city: "Tin City",
    iata: "TNC",
    name: "Tin City Long Range Radar Station Airport",
    country: "United States"
  },
  {
    city: "Teller",
    iata: "TLA",
    name: "Teller Airport",
    country: "United States"
  },
  {
    city: "Togiak Village",
    iata: "TOG",
    name: "Togiak Airport",
    country: "United States"
  },
  {
    city: "Talkeetna",
    iata: "TKA",
    name: "Talkeetna Airport",
    country: "United States"
  },
  {
    city: "Takotna",
    iata: "TLJ",
    name: "Tatalina LRRS Airport",
    country: "United States"
  },
  {
    city: "Atqasuk",
    iata: "ATK",
    name: "Atqasuk Edward Burnell Sr Memorial Airport",
    country: "United States"
  },
  {
    city: "Alakanuk",
    iata: "AUK",
    name: "Alakanuk Airport",
    country: "United States"
  },
  {
    city: "Umiat",
    iata: "UMT",
    name: "Umiat Airport",
    country: "United States"
  },
  {
    city: "Unalakleet",
    iata: "UNK",
    name: "Unalakleet Airport",
    country: "United States"
  },
  {
    city: "Willow",
    iata: "WOW",
    name: "Willow Airport",
    country: "United States"
  },
  {
    city: "Akutan",
    iata: "KQA",
    name: "Akutan Airport",
    country: "United States"
  },
  {
    city: "Chevak",
    iata: "VAK",
    name: "Chevak Airport",
    country: "United States"
  },
  {
    city: "King Cove",
    iata: "KVC",
    name: "King Cove Airport",
    country: "United States"
  },
  {
    city: "Valdez",
    iata: "VDZ",
    name: "Valdez Pioneer Field",
    country: "United States"
  },
  {
    city: "Venetie",
    iata: "VEE",
    name: "Venetie Airport",
    country: "United States"
  },
  {
    city: "Kivalina",
    iata: "KVL",
    name: "Kivalina Airport",
    country: "United States"
  },
  {
    city: "Beaver",
    iata: "WBQ",
    name: "Beaver Airport",
    country: "United States"
  },
  {
    city: "Seward",
    iata: "SWD",
    name: "Seward Airport",
    country: "United States"
  },
  {
    city: "Wrangell",
    iata: "WRG",
    name: "Wrangell Airport",
    country: "United States"
  },
  {
    city: "Wainwright",
    iata: "AIN",
    name: "Wainwright Airport",
    country: "United States"
  },
  {
    city: "White Mountain",
    iata: "WMO",
    name: "White Mountain Airport",
    country: "United States"
  },
  {
    city: "Noatak",
    iata: "WTK",
    name: "Noatak Airport",
    country: "United States"
  },
  {
    city: "Wasilla",
    iata: "WWA",
    name: "Wasilla Airport",
    country: "United States"
  },
  {
    city: "Yakutat",
    iata: "YAK",
    name: "Yakutat Airport",
    country: "United States"
  },
  {
    city: "Abariringa",
    iata: "CIS",
    name: "Canton Island Airport",
    country: "KI"
  },
  {
    city: "Phongsaly",
    iata: "PCQ",
    name: "Boun Neau Airport",
    country: "LA"
  },
  {
    city: "Presidente Dutra",
    iata: "PDR",
    name: "Presidente José Sarney Airport",
    country: "Brazil"
  },
  {
    city: "Máncora",
    iata: "PTL",
    name: "Walter Braedt Segú Airport",
    country: "Peru"
  },
  {
    city: "Bellavista",
    iata: "BLP",
    name: "Huallaga Airport",
    country: "Peru"
  },
  {
    city: "Pebane",
    iata: "PEB",
    name: "Pebane Airport",
    country: "MZ"
  },
  {
    city: "Pelican",
    iata: "PEC",
    name: "Pelican Seaplane Base",
    country: "United States"
  },
  {
    city: "Akiak",
    iata: "AKI",
    name: "Akiak Airport",
    country: "United States"
  },
  {
    city: "Allakaket",
    iata: "AET",
    name: "Allakaket Airport",
    country: "United States"
  },
  {
    city: "Chenega",
    iata: "NCN",
    name: "Chenega Bay Airport",
    country: "United States"
  },
  {
    city: "Clarks Point",
    iata: "CLP",
    name: "Clarks Point Airport",
    country: "United States"
  },
  {
    city: "Elim",
    iata: "ELI",
    name: "Elim Airport",
    country: "United States"
  },
  {
    city: "Kasigluk",
    iata: "KUK",
    name: "Kasigluk Airport",
    country: "United States"
  },
  {
    city: "Kokhanok",
    iata: "KNK",
    name: "Kokhanok Airport",
    country: "United States"
  },
  {
    city: "Kotlik",
    iata: "KOT",
    name: "Kotlik Airport",
    country: "United States"
  },
  {
    city: "Brevig Mission",
    iata: "KTS",
    name: "Brevig Mission Airport",
    country: "United States"
  },
  {
    city: "Koyukuk",
    iata: "KYU",
    name: "Koyukuk Airport",
    country: "United States"
  },
  {
    city: "Kwethluk",
    iata: "KWT",
    name: "Kwethluk Airport",
    country: "United States"
  },
  {
    city: "Noorvik",
    iata: "ORV",
    name: "Robert (Bob) Curtis Memorial Airport",
    country: "United States"
  },
  {
    city: "Shaktoolik",
    iata: "SKK",
    name: "Shaktoolik Airport",
    country: "United States"
  },
  {
    city: "Tok",
    iata: "TKJ",
    name: "Tok Junction Airport",
    country: "United States"
  },
  {
    city: "South Naknek",
    iata: "WSN",
    name: "South Naknek Number 2 Airport",
    country: "United States"
  },
  {
    city: "Fort Yukon",
    iata: "FYU",
    name: "Fort Yukon Airport",
    country: "United States"
  },
  {
    city: "Cape Rodney",
    iata: "CPN",
    name: "Cape Rodney Airport",
    country: "PG"
  },
  {
    city: "Esa'ala",
    iata: "ESA",
    name: "Esa'ala Airport",
    country: "PG"
  },
  {
    city: "Minj",
    iata: "MZN",
    name: "Minj Airport",
    country: "PG"
  },
  {
    city: "Stockholm",
    iata: "SMP",
    name: "Stockholm Landing Strip",
    country: "PG"
  },
  {
    city: "Brahman Mission",
    iata: "BRH",
    name: "Brahman Airstrip",
    country: "PG"
  },
  {
    city: "nan",
    iata: "BIJ",
    name: "Biliau Airport",
    country: "PG"
  },
  {
    city: "Pambwa Station",
    iata: "PAW",
    name: "Pambwa Airstrip",
    country: "PG"
  },
  {
    city: "Aitape",
    iata: "TAJ",
    name: "Tadji Airport",
    country: "PG"
  },
  {
    city: "Ihu",
    iata: "IHU",
    name: "Ihu Airport",
    country: "PG"
  },
  {
    city: "Jacquinot Bay",
    iata: "JAQ",
    name: "Jacquinot Bay Airport",
    country: "PG"
  },
  {
    city: "Kamusi",
    iata: "KUY",
    name: "Kamusi Airport",
    country: "PG"
  },
  {
    city: "Lake Murray",
    iata: "LMY",
    name: "Lake Murray Airport",
    country: "PG"
  },
  {
    city: "Sule",
    iata: "ULE",
    name: "Sule Airport",
    country: "PG"
  },
  {
    city: "nan",
    iata: "PGE",
    name: "Yegepa Airport",
    country: "PG"
  },
  {
    city: "Port Graham",
    iata: "PGM",
    name: "Port Graham Airport",
    country: "United States"
  },
  {
    city: "Rota Island",
    iata: "ROP",
    name: "Rota International Airport",
    country: "MP"
  },
  {
    city: "I Fadang, Saipan",
    iata: "SPN",
    name: "Saipan International Airport",
    country: "MP"
  },
  {
    city: "Yigo",
    iata: "UAM",
    name: "Andersen Air Force Base",
    country: "GU"
  },
  {
    city: "Hagåtña",
    iata: "GUM",
    name: "Antonio B. Won Pat International Airport",
    country: "GU"
  },
  {
    city: "Tinian Island",
    iata: "TIQ",
    name: "Tinian International Airport",
    country: "MP"
  },
  {
    city: "Rizal",
    iata: "TGB",
    name: "Tagbita Airstrip",
    country: "Philippines"
  },
  {
    city: "Kekaha",
    iata: "BKH",
    name: "Barking Sands Airport",
    country: "United States"
  },
  {
    city: "Mokuleia",
    iata: "HDH",
    name: "Kawaihapai Airfield",
    country: "United States"
  },
  {
    city: "Wahiawa",
    iata: "HHI",
    name: "Wheeler Army Airfield",
    country: "United States"
  },
  {
    city: "Hana",
    iata: "HNM",
    name: "Hana Airport",
    country: "United States"
  },
  {
    city: "Lahaina",
    iata: "JHM",
    name: "Kapalua Airport",
    country: "United States"
  },
  {
    city: "Kapolei",
    iata: "JRF",
    name: "Kalaeloa Airport",
    country: "United States"
  },
  {
    city: "Kailua-Kona",
    iata: "KOA",
    name: "Ellison Onizuka Kona International Airport at Keāhole",
    country: "United States"
  },
  {
    city: "Lihue, Kauai",
    iata: "LIH",
    name: "Lihue Airport",
    country: "United States"
  },
  {
    city: "Kalaupapa",
    iata: "LUP",
    name: "Kalaupapa Airport",
    country: "United States"
  },
  {
    city: "Kaunakakai",
    iata: "MKK",
    name: "Molokai Airport",
    country: "United States"
  },
  {
    city: "Waimea (Kamuela)",
    iata: "MUE",
    name: "Waimea Kohala Airport",
    country: "United States"
  },
  {
    city: "Kaneohe",
    iata: "NGF",
    name: "Kaneohe Bay MCAS (Marion E. Carl Field) Airport",
    country: "United States"
  },
  {
    city: "Honolulu, Oahu",
    iata: "HNL",
    name: "Daniel K. Inouye International Airport",
    country: "United States"
  },
  {
    city: "Lanai City",
    iata: "LNY",
    name: "Lanai Airport",
    country: "United States"
  },
  {
    city: "Kahului",
    iata: "OGG",
    name: "Kahului International Airport",
    country: "United States"
  },
  {
    city: "Hanapepe",
    iata: "PAK",
    name: "Port Allen Airport",
    country: "United States"
  },
  {
    city: "Waimea (Kamuela)",
    iata: "BSF",
    name: "Bradshaw Army Airfield",
    country: "United States"
  },
  {
    city: "Hilo",
    iata: "ITO",
    name: "Hilo International Airport",
    country: "United States"
  },
  {
    city: "Hawi",
    iata: "UPP",
    name: "Upolu Airport",
    country: "United States"
  },
  {
    city: "Jiwani",
    iata: "JIW",
    name: "Jiwani Airport (INACTIVE}",
    country: "Pakistan"
  },
  {
    city: "Bhurban",
    iata: "BHC",
    name: "Bhurban Heliport",
    country: "Pakistan"
  },
  {
    city: "Campbellpore",
    iata: "CWP",
    name: "Campbellpore Airport",
    country: "Pakistan"
  },
  {
    city: "Gujrat",
    iata: "GRT",
    name: "Gujrat Airport",
    country: "Pakistan"
  },
  {
    city: "Chagai",
    iata: "REQ",
    name: "Reko Diq Airport",
    country: "Pakistan"
  },
  {
    city: "Eniwetok Atoll",
    iata: "ENT",
    name: "Eniwetok Airport",
    country: "MH"
  },
  {
    city: "Majuro Atoll",
    iata: "MAJ",
    name: "Marshall Islands International Airport",
    country: "MH"
  },
  {
    city: "Kwajalein",
    iata: "KWA",
    name: "Bucholz Army Air Field",
    country: "MH"
  },
  {
    city: "Kiritimati",
    iata: "CXI",
    name: "Cassidy International Airport",
    country: "KI"
  },
  {
    city: "Tabuaeran Island",
    iata: "TNV",
    name: "Tabuaeran Island Airport",
    country: "KI"
  },
  {
    city: "Teraina",
    iata: "TNQ",
    name: "Washington Island Airstrip",
    country: "KI"
  },
  {
    city: "Sand Island",
    iata: "MDY",
    name: "Henderson Field",
    country: "UM"
  },
  {
    city: "Point Lay",
    iata: "PIZ",
    name: "Point Lay LRRS Airport",
    country: "United States"
  },
  {
    city: "Nepesi",
    iata: "PPX",
    name: "Param Airport",
    country: "PG"
  },
  {
    city: "Batticaloa",
    iata: "PQD",
    name: "Passikudah Helipad",
    country: "Sri Lanka"
  },
  {
    city: "Humacao",
    iata: "HUC",
    name: "Dr Hermenegildo Ortiz Quinones Airport",
    country: "PR"
  },
  {
    city: "Siocon",
    iata: "XSO",
    name: "Siocon Airport",
    country: "Philippines"
  },
  {
    city: "Weno Island",
    iata: "TKK",
    name: "Chuuk International Airport",
    country: "FM"
  },
  {
    city: "Pohnpei Island",
    iata: "PNI",
    name: "Pohnpei International Airport",
    country: "FM"
  },
  {
    city: "Babelthuap Island",
    iata: "ROR",
    name: "Roman Tmetuchl International Airport",
    country: "PW"
  },
  {
    city: "Okat",
    iata: "KSA",
    name: "Kosrae International Airport",
    country: "FM"
  },
  {
    city: "Yap Island",
    iata: "YAP",
    name: "Yap International Airport",
    country: "FM"
  },
  {
    city: "Puas Mission",
    iata: "PUA",
    name: "Puas Airport",
    country: "PG"
  },
  {
    city: "Wake Island",
    iata: "AWK",
    name: "Wake Island Airfield",
    country: "UM"
  },
  {
    city: "Port Walter",
    iata: "PWR",
    name: "Port Walter Seaplane Base",
    country: "United States"
  },
  {
    city: "Puerto Leda",
    iata: "PBT",
    name: "Aeródromo de Puerto Leda",
    country: "PY"
  },
  {
    city: "Puerto La Victoria",
    iata: "PCJ",
    name: "Puerto La Victoria Airport",
    country: "PY"
  },
  {
    city: "Perry Island",
    iata: "PYL",
    name: "Perry Island Seaplane Base",
    country: "United States"
  },
  {
    city: "Kili Island",
    iata: "KIO",
    name: "Kili Airport",
    country: "MH"
  },
  {
    city: "Igaliku",
    iata: "QFX",
    name: "Igaliku Heliport",
    country: "GL"
  },
  {
    city: "Pocheon",
    iata: "QJP",
    name: "Pocheon (G-217) Airport",
    country: "South Korea"
  },
  {
    city: "Rakanda",
    iata: "RAA",
    name: "Rakanda Airport",
    country: "PG"
  },
  {
    city: "Arawa",
    iata: "RAW",
    name: "Arawa Airport",
    country: "PG"
  },
  {
    city: "Shang-I",
    iata: "KNH",
    name: "Kinmen Airport",
    country: "TW"
  },
  {
    city: "Qimei",
    iata: "CMJ",
    name: "Qimei Airport",
    country: "TW"
  },
  {
    city: "Matsu (Nangan)",
    iata: "LZN",
    name: "Matsu Nangan Airport",
    country: "TW"
  },
  {
    city: "Taitung City",
    iata: "TTT",
    name: "Taitung Airport",
    country: "TW"
  },
  {
    city: "Lüdao",
    iata: "GNI",
    name: "Lüdao Airport",
    country: "TW"
  },
  {
    city: "Kaohsiung (Xiaogang)",
    iata: "KHH",
    name: "Kaohsiung International Airport",
    country: "TW"
  },
  {
    city: "Shuishang",
    iata: "CYI",
    name: "Chiayi Airport",
    country: "TW"
  },
  {
    city: "Hengchun",
    iata: "HCN",
    name: "Hengchun Airport",
    country: "TW"
  },
  {
    city: "Kaohsiung (Cijin - Pratas Island)",
    iata: "DSX",
    name: "Dongsha Island (Pratas Island) Airport",
    country: "TW"
  },
  {
    city: "Orchid Island",
    iata: "KYD",
    name: "Lanyu Airport",
    country: "TW"
  },
  {
    city: "Taichung (Qingshui)",
    iata: "RMQ",
    name: "Taichung International Airport / Ching Chuang Kang Air Base",
    country: "TW"
  },
  {
    city: "Matsu (Beigan)",
    iata: "MFK",
    name: "Matsu Beigan Airport",
    country: "TW"
  },
  {
    city: "Tainan (Rende)",
    iata: "TNN",
    name: "Tainan International Airport / Tainan Air Base",
    country: "TW"
  },
  {
    city: "Hsinchu City",
    iata: "HSZ",
    name: "Hsinchu Air Base",
    country: "TW"
  },
  {
    city: "Huxi",
    iata: "MZG",
    name: "Penghu Magong Airport",
    country: "TW"
  },
  {
    city: "Pingtung",
    iata: "PIF",
    name: "Pingtung Air Force Base North",
    country: "TW"
  },
  {
    city: "Taipei (Songshan)",
    iata: "TSA",
    name: "Taipei Songshan International Airport",
    country: "TW"
  },
  {
    city: "Taoyuan",
    iata: "TPE",
    name: "Taiwan Taoyuan International Airport",
    country: "TW"
  },
  {
    city: "Wang'an",
    iata: "WOT",
    name: "Wang'an Airport",
    country: "TW"
  },
  {
    city: "Hualien City",
    iata: "HUN",
    name: "Hualien Chiashan Airport",
    country: "TW"
  },
  {
    city: "Red Devil",
    iata: "RDV",
    name: "Red Devil Airport",
    country: "United States"
  },
  {
    city: "Badanjilin",
    iata: "RHT",
    name: "Alxa Right Banner Badanjilin Airport",
    country: "China"
  },
  {
    city: "Narita",
    iata: "NRT",
    name: "Narita International Airport",
    country: "Japan"
  },
  {
    city: "Matsumoto",
    iata: "MMJ",
    name: "Shinshu-Matsumoto Airport",
    country: "Japan"
  },
  {
    city: "Omitama",
    iata: "IBR",
    name: "Ibaraki International Airport",
    country: "Japan"
  },
  {
    city: "Ogasawara",
    iata: "MUS",
    name: "JMSDF Minami Torishima Air Base",
    country: "Japan"
  },
  {
    city: "Ogasawara",
    iata: "IWO",
    name: "Ioto (Iwo Jima) Airbase",
    country: "Japan"
  },
  {
    city: "Osaka",
    iata: "KIX",
    name: "Kansai International Airport",
    country: "Japan"
  },
  {
    city: "Shirahama",
    iata: "SHM",
    name: "Nanki Shirahama Airport",
    country: "Japan"
  },
  {
    city: "Kobe",
    iata: "UKB",
    name: "Kobe Airport",
    country: "Japan"
  },
  {
    city: "Hiroshima",
    iata: "HIW",
    name: "Hiroshima Heliport",
    country: "Japan"
  },
  {
    city: "Toyooka",
    iata: "TJH",
    name: "Konotori Tajima Airport",
    country: "Japan"
  },
  {
    city: "Obihiro",
    iata: "OBO",
    name: "Tokachi-Obihiro Airport",
    country: "Japan"
  },
  {
    city: "Sapporo",
    iata: "CTS",
    name: "New Chitose Airport",
    country: "Japan"
  },
  {
    city: "Hakodate",
    iata: "HKD",
    name: "Hakodate Airport",
    country: "Japan"
  },
  {
    city: "Kushiro",
    iata: "KUH",
    name: "Kushiro Airport",
    country: "Japan"
  },
  {
    city: "Ōzora",
    iata: "MMB",
    name: "Memanbetsu Airport",
    country: "Japan"
  },
  {
    city: "Nakashibetsu",
    iata: "SHB",
    name: "Nakashibetsu Airport",
    country: "Japan"
  },
  {
    city: "Sapporo",
    iata: "OKD",
    name: "Sapporo Okadama Airport",
    country: "Japan"
  },
  {
    city: "Rebun",
    iata: "RBJ",
    name: "Rebun Airport",
    country: "Japan"
  },
  {
    city: "Wakkanai",
    iata: "WKJ",
    name: "Wakkanai Airport",
    country: "Japan"
  },
  {
    city: "Amakusa",
    iata: "AXJ",
    name: "Amakusa Airport",
    country: "Japan"
  },
  {
    city: "Iki",
    iata: "IKI",
    name: "Iki Airport",
    country: "Japan"
  },
  {
    city: "Ube",
    iata: "UBJ",
    name: "Yamaguchi Ube Airport",
    country: "Japan"
  },
  {
    city: "Tsushima",
    iata: "TSJ",
    name: "Tsushima Airport",
    country: "Japan"
  },
  {
    city: "Nagasaki",
    iata: "OMJ",
    name: "JMSDF Omura Air Base",
    country: "Japan"
  },
  {
    city: "Monbetsu",
    iata: "MBE",
    name: "Monbetsu Airport",
    country: "Japan"
  },
  {
    city: "Higashikagura",
    iata: "AKJ",
    name: "Asahikawa Airport",
    country: "Japan"
  },
  {
    city: "Okushiri Island",
    iata: "OIR",
    name: "Okushiri Airport",
    country: "Japan"
  },
  {
    city: "Rishiri",
    iata: "RIS",
    name: "Rishiri Airport",
    country: "Japan"
  },
  {
    city: "Yakushima",
    iata: "KUM",
    name: "Yakushima Airport",
    country: "Japan"
  },
  {
    city: "Goto",
    iata: "FUJ",
    name: "Fukue Airport",
    country: "Japan"
  },
  {
    city: "Fukuoka",
    iata: "FUK",
    name: "Fukuoka Airport",
    country: "Japan"
  },
  {
    city: "Tanegashima",
    iata: "TNE",
    name: "New Tanegashima Airport",
    country: "Japan"
  },
  {
    city: "Kagoshima",
    iata: "KOJ",
    name: "Kagoshima Airport",
    country: "Japan"
  },
  {
    city: "Miyazaki",
    iata: "KMI",
    name: "Miyazaki Airport",
    country: "Japan"
  },
  {
    city: "Oita",
    iata: "OIT",
    name: "Oita Airport",
    country: "Japan"
  },
  {
    city: "Kitakyushu",
    iata: "KKJ",
    name: "Kitakyushu Airport",
    country: "Japan"
  },
  {
    city: "Saga",
    iata: "HSG",
    name: "Kyushu Saga International Airport",
    country: "Japan"
  },
  {
    city: "Kumamoto",
    iata: "KMJ",
    name: "Kumamoto Airport",
    country: "Japan"
  },
  {
    city: "Nagasaki",
    iata: "NGS",
    name: "Nagasaki Airport",
    country: "Japan"
  },
  {
    city: "Tokoname",
    iata: "NGO",
    name: "Chubu Centrair International Airport",
    country: "Japan"
  },
  {
    city: "Amami",
    iata: "ASJ",
    name: "Amami Airport",
    country: "Japan"
  },
  {
    city: "Wadomari",
    iata: "OKE",
    name: "Okinoerabu Airport",
    country: "Japan"
  },
  {
    city: "Kikai",
    iata: "KKX",
    name: "Kikai Airport",
    country: "Japan"
  },
  {
    city: "Amagi",
    iata: "TKN",
    name: "Tokunoshima Airport",
    country: "Japan"
  },
  {
    city: "Nagoya",
    iata: "NKM",
    name: "Nagoya Airport / JASDF Komaki Air Base",
    country: "Japan"
  },
  {
    city: "Fukui",
    iata: "FKJ",
    name: "Fukui Airport",
    country: "Japan"
  },
  {
    city: "Gifu",
    iata: "QGU",
    name: "Gifu Airport",
    country: "Japan"
  },
  {
    city: "Kanazawa",
    iata: "KMQ",
    name: "Komatsu Airport / JASDF Komatsu Air Base",
    country: "Japan"
  },
  {
    city: "Okinoshima",
    iata: "OKI",
    name: "Oki Global Geopark Airport",
    country: "Japan"
  },
  {
    city: "Makinohara / Shimada",
    iata: "FSZ",
    name: "Mount Fuji Shizuoka Airport",
    country: "Japan"
  },
  {
    city: "Toyama",
    iata: "TOY",
    name: "Toyama Kitokito Airport",
    country: "Japan"
  },
  {
    city: "Wajima",
    iata: "NTQ",
    name: "Noto Satoyama Airport",
    country: "Japan"
  },
  {
    city: "Hiroshima",
    iata: "HIJ",
    name: "Hiroshima Airport",
    country: "Japan"
  },
  {
    city: "Okayama",
    iata: "OKJ",
    name: "Okayama Momotaro Airport",
    country: "Japan"
  },
  {
    city: "Izumo",
    iata: "IZO",
    name: "Izumo Enmusubi Airport",
    country: "Japan"
  },
  {
    city: "Yonago",
    iata: "YGJ",
    name: "Yonago Kitaro Airport / JASDF Miho Air Base",
    country: "Japan"
  },
  {
    city: "Iwakuni",
    iata: "IWK",
    name: "Iwakuni Kintaikyo Airport",
    country: "Japan"
  },
  {
    city: "Nankoku",
    iata: "KCZ",
    name: "Kochi Ryoma Airport",
    country: "Japan"
  },
  {
    city: "Matsuyama",
    iata: "MYJ",
    name: "Matsuyama Airport",
    country: "Japan"
  },
  {
    city: "Osaka",
    iata: "ITM",
    name: "Osaka Itami International Airport",
    country: "Japan"
  },
  {
    city: "Tottori",
    iata: "TTJ",
    name: "Tottori Sand Dunes Conan Airport",
    country: "Japan"
  },
  {
    city: "Tokushima",
    iata: "TKS",
    name: "Tokushima Awaodori Airport / JMSDF Tokushima Air Base",
    country: "Japan"
  },
  {
    city: "Takamatsu",
    iata: "TAK",
    name: "Takamatsu Airport",
    country: "Japan"
  },
  {
    city: "Masuda",
    iata: "IWJ",
    name: "Iwami Airport",
    country: "Japan"
  },
  {
    city: "Aomori",
    iata: "AOJ",
    name: "Aomori Airport",
    country: "Japan"
  },
  {
    city: "Higashine",
    iata: "GAJ",
    name: "Yamagata Airport",
    country: "Japan"
  },
  {
    city: "Sado",
    iata: "SDS",
    name: "Sado Airport",
    country: "Japan"
  },
  {
    city: "Sukagawa",
    iata: "FKS",
    name: "Fukushima Airport",
    country: "Japan"
  },
  {
    city: "Hachinohe",
    iata: "HHE",
    name: "JMSDF Hachinohe Air Base / Hachinohe Airport",
    country: "Japan"
  },
  {
    city: "Hanamaki",
    iata: "HNA",
    name: "Iwate Hanamaki Airport",
    country: "Japan"
  },
  {
    city: "Akita",
    iata: "AXT",
    name: "Akita Airport",
    country: "Japan"
  },
  {
    city: "Misawa",
    iata: "MSJ",
    name: "Misawa Airport / Misawa Air Base",
    country: "Japan"
  },
  {
    city: "Niigata",
    iata: "KIJ",
    name: "Niigata Airport",
    country: "Japan"
  },
  {
    city: "Kitaakita",
    iata: "ONJ",
    name: "Odate Noshiro Airport",
    country: "Japan"
  },
  {
    city: "Natori",
    iata: "SDJ",
    name: "Sendai Airport",
    country: "Japan"
  },
  {
    city: "Shonai",
    iata: "SYO",
    name: "Shonai Airport",
    country: "Japan"
  },
  {
    city: "Ayase / Yamato",
    iata: "NJA",
    name: "JMSDF Atsugi Air Base / Naval Air Facility Atsugi",
    country: "Japan"
  },
  {
    city: "Hachijojima",
    iata: "HAC",
    name: "Hachijojima Airport",
    country: "Japan"
  },
  {
    city: "Izu Oshima",
    iata: "OIM",
    name: "Oshima Airport",
    country: "Japan"
  },
  {
    city: "Miyakejima",
    iata: "MYE",
    name: "Miyakejima Airport",
    country: "Japan"
  },
  {
    city: "Tokyo",
    iata: "HND",
    name: "Tokyo Haneda International Airport",
    country: "Japan"
  },
  {
    city: "Fussa",
    iata: "OKO",
    name: "Yokota Air Base",
    country: "Japan"
  },
  {
    city: "Muan (Piseo-ri)",
    iata: "MWX",
    name: "Muan International Airport",
    country: "South Korea"
  },
  {
    city: "Gwangju",
    iata: "KWJ",
    name: "Gwangju Airport",
    country: "South Korea"
  },
  {
    city: "Gunsan",
    iata: "KUV",
    name: "Gunsan Airport / Gunsan Air Base",
    country: "South Korea"
  },
  {
    city: "Jeonju",
    iata: "CHN",
    name: "Jeonju (G 703) Air Base",
    country: "South Korea"
  },
  {
    city: "Yeosu",
    iata: "RSU",
    name: "Yeosu Airport",
    country: "South Korea"
  },
  {
    city: "Gangneung",
    iata: "KAG",
    name: "Gangneung Airport (K-18)",
    country: "South Korea"
  },
  {
    city: "Wonju",
    iata: "WJU",
    name: "Wonju Airport / Hoengseong Air Base (K-38/K-46)",
    country: "South Korea"
  },
  {
    city: "Gonghang-ro",
    iata: "YNY",
    name: "Yangyang International Airport",
    country: "South Korea"
  },
  {
    city: "Jeju City",
    iata: "CJU",
    name: "Jeju International Airport",
    country: "South Korea"
  },
  {
    city: "Jeju Island",
    iata: "JDG",
    name: "Jeongseok Airport",
    country: "South Korea"
  },
  {
    city: "Jinhae",
    iata: "CHF",
    name: "Jinhae Air Base",
    country: "South Korea"
  },
  {
    city: "Busan",
    iata: "PUS",
    name: "Gimhae International Airport",
    country: "South Korea"
  },
  {
    city: "Sacheon",
    iata: "HIN",
    name: "Sacheon Airport / Sacheon Air Base",
    country: "South Korea"
  },
  {
    city: "Ulsan",
    iata: "USN",
    name: "Ulsan Airport",
    country: "South Korea"
  },
  {
    city: "Seoul",
    iata: "ICN",
    name: "Incheon International Airport",
    country: "South Korea"
  },
  {
    city: "Seongnam",
    iata: "SSN",
    name: "Seoul Air Base (K-16)",
    country: "South Korea"
  },
  {
    city: "Pyeongtaek",
    iata: "OSN",
    name: "Osan Air Base",
    country: "South Korea"
  },
  {
    city: "Seoul",
    iata: "GMP",
    name: "Gimpo International Airport",
    country: "South Korea"
  },
  {
    city: "Suwon",
    iata: "SWU",
    name: "Suwon Airport",
    country: "South Korea"
  },
  {
    city: "Taean",
    iata: "QDY",
    name: "Taean Airport",
    country: "South Korea"
  },
  {
    city: "Pohang",
    iata: "KPO",
    name: "Pohang Airport (G-815/K-3)",
    country: "South Korea"
  },
  {
    city: "Gimseang-ro",
    iata: "JWO",
    name: "Jungwon Air Base/Chungju Airport",
    country: "South Korea"
  },
  {
    city: "Bongsan-ri, Uljin",
    iata: "UJN",
    name: "Uljin Airport",
    country: "South Korea"
  },
  {
    city: "Daegu",
    iata: "TAE",
    name: "Daegu International Airport",
    country: "South Korea"
  },
  {
    city: "Seosan",
    iata: "HMY",
    name: "Seosan Air Base",
    country: "South Korea"
  },
  {
    city: "Cheongju",
    iata: "CJJ",
    name: "Cheongju International Airport/Cheongju Air Base (K-59/G-513)",
    country: "South Korea"
  },
  {
    city: "Yecheon-ri",
    iata: "YEC",
    name: "Yecheon Airbase",
    country: "South Korea"
  },
  {
    city: "Rokeby",
    iata: "RKY",
    name: "Rokeby Airport",
    country: "Australia"
  },
  {
    city: "Rosella Plains",
    iata: "RLP",
    name: "Rosella Plains Airport",
    country: "Australia"
  },
  {
    city: "Rampart",
    iata: "RMP",
    name: "Rampart Airport",
    country: "United States"
  },
  {
    city: "Naha",
    iata: "OKA",
    name: "Naha International Airport",
    country: "Japan"
  },
  {
    city: "Okinawa",
    iata: "DNA",
    name: "Kadena Air Base",
    country: "Japan"
  },
  {
    city: "Ishigaki",
    iata: "ISG",
    name: "New Ishigaki Airport",
    country: "Japan"
  },
  {
    city: "Kumejima",
    iata: "UEO",
    name: "Kumejima Airport",
    country: "Japan"
  },
  {
    city: "Zamami",
    iata: "KJP",
    name: "Kerama Airport",
    country: "Japan"
  },
  {
    city: "Minamidaito",
    iata: "MMD",
    name: "Minamidaito Airport",
    country: "Japan"
  },
  {
    city: "Miyakojima",
    iata: "MMY",
    name: "Miyako Airport",
    country: "Japan"
  },
  {
    city: "Aguni",
    iata: "AGJ",
    name: "Aguni Airport",
    country: "Japan"
  },
  {
    city: "Ie",
    iata: "IEJ",
    name: "Iejima Airport",
    country: "Japan"
  },
  {
    city: "Taketomi",
    iata: "HTR",
    name: "Hateruma Airport",
    country: "Japan"
  },
  {
    city: "Kitadaitōjima",
    iata: "KTD",
    name: "Kitadaito Airport",
    country: "Japan"
  },
  {
    city: "Miyakojima",
    iata: "SHI",
    name: "Shimojishima Airport",
    country: "Japan"
  },
  {
    city: "Tarama",
    iata: "TRA",
    name: "Tarama Airport",
    country: "Japan"
  },
  {
    city: "Yoron",
    iata: "RNJ",
    name: "Yoron Airport",
    country: "Japan"
  },
  {
    city: "Yonaguni",
    iata: "OGN",
    name: "Yonaguni Airport",
    country: "Japan"
  },
  {
    city: "El Nido",
    iata: "ENI",
    name: "El Nido Airport",
    country: "Philippines"
  },
  {
    city: "Olongapo",
    iata: "SFS",
    name: "Subic Bay International Airport / Naval Air Station Cubi Point",
    country: "Philippines"
  },
  {
    city: "Mabalacat",
    iata: "CRK",
    name: "Clark International Airport / Clark Air Base",
    country: "Philippines"
  },
  {
    city: "Balesin",
    iata: "BSI",
    name: "Balesin Island Airport",
    country: "Philippines"
  },
  {
    city: "Lal-lo",
    iata: "LLC",
    name: "Cagayan North International Airport",
    country: "Philippines"
  },
  {
    city: "Laoag City",
    iata: "LAO",
    name: "Laoag International Airport",
    country: "Philippines"
  },
  {
    city: "Legazpi",
    iata: "DRP",
    name: "Bicol International Airport",
    country: "Philippines"
  },
  {
    city: "Manila (Pasay)",
    iata: "MNL",
    name: "Ninoy Aquino International Airport",
    country: "Philippines"
  },
  {
    city: "Cuyo",
    iata: "CYU",
    name: "Cuyo Airport",
    country: "Philippines"
  },
  {
    city: "Cavite",
    iata: "SGL",
    name: "Danilo Atienza Air Base",
    country: "Philippines"
  },
  {
    city: "Lubang",
    iata: "LBX",
    name: "Lubang Airport",
    country: "Philippines"
  },
  {
    city: "Surallah",
    iata: "AAV",
    name: "Allah Valley Airport",
    country: "Philippines"
  },
  {
    city: "Datu Odin Sinsuat",
    iata: "CBO",
    name: "Cotabato (Awang) Airport",
    country: "Philippines"
  },
  {
    city: "Davao",
    iata: "DVO",
    name: "Francisco Bangoy International Airport",
    country: "Philippines"
  },
  {
    city: "Butuan",
    iata: "BXU",
    name: "Bancasi Airport",
    country: "Philippines"
  },
  {
    city: "Bislig",
    iata: "BPH",
    name: "Bislig Airport",
    country: "Philippines"
  },
  {
    city: "Dipolog",
    iata: "DPL",
    name: "Dipolog Airport",
    country: "Philippines"
  },
  {
    city: "Mambajao",
    iata: "CGM",
    name: "Camiguin Airport",
    country: "Philippines"
  },
  {
    city: "Balo-i",
    iata: "IGN",
    name: "Maria Cristina (Iligan) Airport",
    country: "Philippines"
  },
  {
    city: "Jolo",
    iata: "JOL",
    name: "Jolo Airport",
    country: "Philippines"
  },
  {
    city: "Malabang",
    iata: "MLP",
    name: "Malabang Airport",
    country: "Philippines"
  },
  {
    city: "Bongao",
    iata: "TWT",
    name: "Sanga Sanga Airport",
    country: "Philippines"
  },
  {
    city: "Ozamiz",
    iata: "OZC",
    name: "Labo Airport",
    country: "Philippines"
  },
  {
    city: "Pagadian",
    iata: "PAG",
    name: "Pagadian Airport",
    country: "Philippines"
  },
  {
    city: "Mati",
    iata: "MXI",
    name: "Mati National Airport",
    country: "Philippines"
  },
  {
    city: "General Santos",
    iata: "GES",
    name: "General Santos International Airport",
    country: "Philippines"
  },
  {
    city: "Surigao City",
    iata: "SUG",
    name: "Surigao Airport",
    country: "Philippines"
  },
  {
    city: "Mapun",
    iata: "CDY",
    name: "Cagayan de Sulu Airport",
    country: "Philippines"
  },
  {
    city: "Ipil",
    iata: "IPE",
    name: "Ipil Airport",
    country: "Philippines"
  },
  {
    city: "Tandag",
    iata: "TDG",
    name: "Tandag Airport",
    country: "Philippines"
  },
  {
    city: "Laguindingan",
    iata: "CGY",
    name: "Laguindingan International Airport",
    country: "Philippines"
  },
  {
    city: "Zamboanga",
    iata: "ZAM",
    name: "Zamboanga International Airport",
    country: "Philippines"
  },
  {
    city: "Del Carmen",
    iata: "IAO",
    name: "Siargao Airport",
    country: "Philippines"
  },
  {
    city: "Taytay",
    iata: "RZP",
    name: "Cesar Lim Rodriguez (Taytay-Sandoval) Airport",
    country: "Philippines"
  },
  {
    city: "Panglao",
    iata: "TAG",
    name: "Bohol-Panglao International Airport",
    country: "Philippines"
  },
  {
    city: "San Vicente",
    iata: "SWL",
    name: "San Vicente Airport",
    country: "Philippines"
  },
  {
    city: "Baguio",
    iata: "BAG",
    name: "Loakan Airport",
    country: "Philippines"
  },
  {
    city: "Daet",
    iata: "DTE",
    name: "Daet Airport",
    country: "Philippines"
  },
  {
    city: "San Jose",
    iata: "SJI",
    name: "San Jose Airport",
    country: "Philippines"
  },
  {
    city: "Mamburao",
    iata: "MBO",
    name: "Mamburao Airport",
    country: "Philippines"
  },
  {
    city: "Naga",
    iata: "WNP",
    name: "Naga Airport",
    country: "Philippines"
  },
  {
    city: "Basco",
    iata: "BSO",
    name: "Basco Airport",
    country: "Philippines"
  },
  {
    city: "Baler",
    iata: "BQA",
    name: "Dr. Juan C. Angara Airport",
    country: "Philippines"
  },
  {
    city: "San Fernando",
    iata: "SFE",
    name: "San Fernando Airport",
    country: "Philippines"
  },
  {
    city: "Tuguegarao City",
    iata: "TUG",
    name: "Tuguegarao Airport",
    country: "Philippines"
  },
  {
    city: "Virac",
    iata: "VRC",
    name: "Virac Airport",
    country: "Philippines"
  },
  {
    city: "Gasan",
    iata: "MRQ",
    name: "Marinduque Airport",
    country: "Philippines"
  },
  {
    city: "Cauayan City",
    iata: "CYZ",
    name: "Cauayan Airport",
    country: "Philippines"
  },
  {
    city: "Roper Valley",
    iata: "RPV",
    name: "Roper Valley Airport",
    country: "Australia"
  },
  {
    city: "Tacloban City",
    iata: "TAC",
    name: "Daniel Z. Romualdez Airport",
    country: "Philippines"
  },
  {
    city: "Bacolod City",
    iata: "BCD",
    name: "Bacolod-Silay International Airport",
    country: "Philippines"
  },
  {
    city: "Calbayog City",
    iata: "CYP",
    name: "Calbayog Airport",
    country: "Philippines"
  },
  {
    city: "Dumaguete City",
    iata: "DGT",
    name: "Sibulan Airport",
    country: "Philippines"
  },
  {
    city: "Caticlan",
    iata: "MPH",
    name: "Godofredo P. Ramos Airport",
    country: "Philippines"
  },
  {
    city: "Catarman",
    iata: "CRM",
    name: "Catarman National Airport",
    country: "Philippines"
  },
  {
    city: "Cabatuan",
    iata: "ILO",
    name: "Iloilo International Airport",
    country: "Philippines"
  },
  {
    city: "Masbate",
    iata: "MBT",
    name: "Moises R. Espinosa Airport",
    country: "Philippines"
  },
  {
    city: "Kalibo",
    iata: "KLO",
    name: "Kalibo International Airport",
    country: "Philippines"
  },
  {
    city: "Cebu City/Lapu-Lapu City",
    iata: "CEB",
    name: "Mactan Cebu International Airport",
    country: "Philippines"
  },
  {
    city: "Ormoc City",
    iata: "OMC",
    name: "Ormoc Airport",
    country: "Philippines"
  },
  {
    city: "Puerto Princesa",
    iata: "PPS",
    name: "Puerto Princesa International Airport / PAF Antonio Bautista Air Base",
    country: "Philippines"
  },
  {
    city: "Roxas City",
    iata: "RXS",
    name: "Roxas Airport",
    country: "Philippines"
  },
  {
    city: "San Jose",
    iata: "EUQ",
    name: "Evelio Javier Airport",
    country: "Philippines"
  },
  {
    city: "Tablas Island",
    iata: "TBH",
    name: "Tugdan Airport",
    country: "Philippines"
  },
  {
    city: "Coron",
    iata: "USU",
    name: "Francisco B. Reyes (Busuanga) Airport",
    country: "Philippines"
  },
  {
    city: "Borongan City",
    iata: "BPA",
    name: "Borongan Airport",
    country: "Philippines"
  },
  {
    city: "Marromeu",
    iata: "RRM",
    name: "Marromeu Airport",
    country: "MZ"
  },
  {
    city: "Sydney",
    iata: "RSE",
    name: "Rose Bay Seaplane Base",
    country: "Australia"
  },
  {
    city: "Hanak",
    iata: "RSI",
    name: "Red Sea International Airport",
    country: "Saudi Arabia"
  },
  {
    city: "Taksimo",
    iata: "TKM",
    name: "Taksimo Airport",
    country: "Russia"
  },
  {
    city: "Krymsk",
    iata: "NOI",
    name: "Krymsk Air Base",
    country: "Russia"
  },
  {
    city: "Motygino",
    iata: "MJY",
    name: "Motygino Airport",
    country: "Russia"
  },
  {
    city: "Aleksandrovsk-Sakhalinskiy",
    iata: "UHS",
    name: "Aleksandrovsk-Sakhalinskiy Airport",
    country: "Russia"
  },
  {
    city: "Apatity",
    iata: "KVK",
    name: "Kirovsk-Apatity Airport",
    country: "Russia"
  },
  {
    city: "Tula",
    iata: "TYA",
    name: "Klokovo Air Base",
    country: "Russia"
  },
  {
    city: "Smolensk",
    iata: "LNX",
    name: "Smolensk North Airport",
    country: "Russia"
  },
  {
    city: "Yeysk",
    iata: "EIK",
    name: "Yeysk Airport",
    country: "Russia"
  },
  {
    city: "Kawbenaberi",
    iata: "RUU",
    name: "Ruti Airport",
    country: "PG"
  },
  {
    city: "River Cess",
    iata: "RVC",
    name: "River Cess Airport and Heliport",
    country: "LR"
  },
  {
    city: "Lopez",
    iata: "LPS",
    name: "Lopez Island Airport",
    country: "United States"
  },
  {
    city: "Kenmore",
    iata: "KEH",
    name: "Kenmore Air Harbor LLC Seaplane Base",
    country: "United States"
  },
  {
    city: "Miramar",
    iata: "MJR",
    name: "Miramar Airport",
    country: "Argentina"
  },
  {
    city: "Concordia",
    iata: "COC",
    name: "Comodoro Pierrestegui Airport",
    country: "Argentina"
  },
  {
    city: "Gualeguaychu",
    iata: "GHU",
    name: "Gualeguaychu Airport",
    country: "Argentina"
  },
  {
    city: "Parana",
    iata: "PRA",
    name: "General Urquiza Airport",
    country: "Argentina"
  },
  {
    city: "Rosario",
    iata: "ROS",
    name: "Rosario Islas Malvinas International Airport",
    country: "Argentina"
  },
  {
    city: "Santa Fe",
    iata: "SFN",
    name: "Sauce Viejo Airport",
    country: "Argentina"
  },
  {
    city: "Buenos Aires",
    iata: "AEP",
    name: "Aeroparque Jorge Newbery",
    country: "Argentina"
  },
  {
    city: "La Cumbre",
    iata: "LCM",
    name: "La Cumbre Airport",
    country: "Argentina"
  },
  {
    city: "Cordoba",
    iata: "COR",
    name: "Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport",
    country: "Argentina"
  },
  {
    city: "La Plata",
    iata: "LPG",
    name: "La Plata Airport",
    country: "Argentina"
  },
  {
    city: "El Palomar",
    iata: "EPA",
    name: "El Palomar Airport",
    country: "Argentina"
  },
  {
    city: "Buenos Aires (Ezeiza)",
    iata: "EZE",
    name: "Ezeiza International Airport - Ministro Pistarini",
    country: "Argentina"
  },
  {
    city: "Rafaela",
    iata: "RAF",
    name: "Rafaela Airport",
    country: "Argentina"
  },
  {
    city: "Sunchales",
    iata: "NCJ",
    name: "Sunchales Aeroclub Airport",
    country: "Argentina"
  },
  {
    city: "Chos Malal",
    iata: "HOS",
    name: "Chos Malal Airport",
    country: "Argentina"
  },
  {
    city: "Lafontaine",
    iata: "CVH",
    name: "Caviahue Airport",
    country: "Argentina"
  },
  {
    city: "General Roca",
    iata: "GNR",
    name: "Dr. Arturo H. Illia Airport",
    country: "Argentina"
  },
  {
    city: "Rincon de los Sauces",
    iata: "RDS",
    name: "Rincon De Los Sauces Airport",
    country: "Argentina"
  },
  {
    city: "Zapala",
    iata: "APZ",
    name: "Zapala Airport",
    country: "Argentina"
  },
  {
    city: "Salamo",
    iata: "SAM",
    name: "Salamo Airport",
    country: "PG"
  },
  {
    city: "Mendoza",
    iata: "MDZ",
    name: "Governor Francisco Gabrielli International Airport",
    country: "Argentina"
  },
  {
    city: "Malargue",
    iata: "LGS",
    name: "Comodoro D.R. Salomón Airport",
    country: "Argentina"
  },
  {
    city: "San Rafael",
    iata: "AFA",
    name: "Suboficial Ay Santiago Germano Airport",
    country: "Argentina"
  },
  {
    city: "Catamarca",
    iata: "CTC",
    name: "Coronel Felipe Varela International Airport",
    country: "Argentina"
  },
  {
    city: "Santiago del Estero",
    iata: "SDE",
    name: "Vicecomodoro Angel D. La Paz Aragonés Airport",
    country: "Argentina"
  },
  {
    city: "La Rioja",
    iata: "IRJ",
    name: "Capitan V A Almonacid Airport",
    country: "Argentina"
  },
  {
    city: "Termas de Río Hondo",
    iata: "RHD",
    name: "Termas de Río Hondo international Airport",
    country: "Argentina"
  },
  {
    city: "San Miguel de Tucumán",
    iata: "TUC",
    name: "Teniente Benjamín Matienzo International Airport",
    country: "Argentina"
  },
  {
    city: "San Juan",
    iata: "UAQ",
    name: "Domingo Faustino Sarmiento Airport",
    country: "Argentina"
  },
  {
    city: "Ceres",
    iata: "CRR",
    name: "Ceres Airport",
    country: "Argentina"
  },
  {
    city: "Rio Cuarto",
    iata: "RCU",
    name: "Area De Material Airport",
    country: "Argentina"
  },
  {
    city: "Villa Dolores",
    iata: "VDR",
    name: "Villa Dolores Airport",
    country: "Argentina"
  },
  {
    city: "Villa Mercedes",
    iata: "VME",
    name: "Villa Reynolds Airport",
    country: "Argentina"
  },
  {
    city: "Merlo",
    iata: "RLO",
    name: "Valle Del Conlara International Airport",
    country: "Argentina"
  },
  {
    city: "San Luis",
    iata: "LUQ",
    name: "Brigadier Mayor D Cesar Raul Ojeda Airport",
    country: "Argentina"
  },
  {
    city: "Corrientes",
    iata: "CNQ",
    name: "Corrientes Airport",
    country: "Argentina"
  },
  {
    city: "Resistencia",
    iata: "RES",
    name: "Resistencia International Airport",
    country: "Argentina"
  },
  {
    city: "Formosa",
    iata: "FMA",
    name: "Formosa National Airport",
    country: "Argentina"
  },
  {
    city: "Puerto Iguazu",
    iata: "IGR",
    name: "Cataratas Del Iguazú International Airport",
    country: "Argentina"
  },
  {
    city: "Paso de los Libres",
    iata: "AOL",
    name: "Paso De Los Libres Airport",
    country: "Argentina"
  },
  {
    city: "Monte Caseros",
    iata: "MCS",
    name: "Monte Caseros Airport",
    country: "Argentina"
  },
  {
    city: "Posadas",
    iata: "PSS",
    name: "Libertador Gral D Jose De San Martin Airport",
    country: "Argentina"
  },
  {
    city: "Presidencia Roque Sáenz Peña",
    iata: "PRQ",
    name: "Termal Airport",
    country: "Argentina"
  },
  {
    city: "Salta",
    iata: "SLA",
    name: "Martín Miguel de Güemes International Airport",
    country: "Argentina"
  },
  {
    city: "San Salvador de Jujuy",
    iata: "JUJ",
    name: "Gobernador Horacio Guzman International Airport",
    country: "Argentina"
  },
  {
    city: "Orán",
    iata: "ORA",
    name: "Orán Airport",
    country: "Argentina"
  },
  {
    city: "Tartagal",
    iata: "TTG",
    name: "General Enrique Mosconi Airport",
    country: "Argentina"
  },
  {
    city: "Clorinda",
    iata: "CLX",
    name: "Aeródromo de Clorinda",
    country: "Argentina"
  },
  {
    city: "El Dorado",
    iata: "ELO",
    name: "El Dorado Airport",
    country: "Argentina"
  },
  {
    city: "Goya",
    iata: "OYA",
    name: "Goya Airport",
    country: "Argentina"
  },
  {
    city: "Las Lomitas",
    iata: "LLS",
    name: "Alferez Armando Rodriguez Airport",
    country: "Argentina"
  },
  {
    city: "Mercedes",
    iata: "MDX",
    name: "Mercedes Airport",
    country: "Argentina"
  },
  {
    city: "Reconquista",
    iata: "RCQ",
    name: "Reconquista Airport",
    country: "Argentina"
  },
  {
    city: "Curuzu Cuatia",
    iata: "UZU",
    name: "Curuzu Cuatia Airport",
    country: "Argentina"
  },
  {
    city: "El Bolsón",
    iata: "EHL",
    name: "El Bolsón Airfield",
    country: "Argentina"
  },
  {
    city: "Comodoro Rivadavia",
    iata: "CRD",
    name: "General Enrique Mosconi International Airport",
    country: "Argentina"
  },
  {
    city: "El Maitén",
    iata: "EMX",
    name: "El Maitén Airport",
    country: "Argentina"
  },
  {
    city: "Esquel",
    iata: "EQS",
    name: "Esquel Brigadier Antonio Parodi International Airport",
    country: "Argentina"
  },
  {
    city: "Las Heras",
    iata: "LHS",
    name: "Las Heras Airport",
    country: "Argentina"
  },
  {
    city: "Ingeniero Jacobacci",
    iata: "IGB",
    name: "Ingeniero Jacobacci - Captain H R Bordón Airport",
    country: "Argentina"
  },
  {
    city: "Sarmiento",
    iata: "OLN",
    name: "Lago Musters Airport",
    country: "Argentina"
  },
  {
    city: "San Antonio Oeste",
    iata: "OES",
    name: "Antoine de Saint Exupéry Airport",
    country: "Argentina"
  },
  {
    city: "Maquinchao",
    iata: "MQD",
    name: "Maquinchao Airport",
    country: "Argentina"
  },
  {
    city: "Alto Rio Senguerr",
    iata: "ARR",
    name: "D. Casimiro Szlapelis Airport",
    country: "Argentina"
  },
  {
    city: "Sierra Grande",
    iata: "SGV",
    name: "Sierra Grande Airport",
    country: "Argentina"
  },
  {
    city: "Rawson",
    iata: "REL",
    name: "Almirante Marco Andres Zar Airport",
    country: "Argentina"
  },
  {
    city: "Viedma / Carmen de Patagones",
    iata: "VDM",
    name: "Gobernador Castello Airport",
    country: "Argentina"
  },
  {
    city: "Puerto Madryn",
    iata: "PMY",
    name: "El Tehuelche Airport",
    country: "Argentina"
  },
  {
    city: "El Calafate",
    iata: "FTE",
    name: "El Calafate - Commander Armando Tola International Airport",
    country: "Argentina"
  },
  {
    city: "Puerto Deseado",
    iata: "PUD",
    name: "Puerto Deseado Airport",
    country: "Argentina"
  },
  {
    city: "Rio Grande",
    iata: "RGA",
    name: "Hermes Quijada International Airport",
    country: "Argentina"
  },
  {
    city: "Rio Gallegos",
    iata: "RGL",
    name: "Piloto Civil Norberto Fernández International Airport",
    country: "Argentina"
  },
  {
    city: "Ushuaia",
    iata: "USH",
    name: "Ushuaia - Malvinas Argentinas International Airport",
    country: "Argentina"
  },
  {
    city: "San Julian",
    iata: "ULA",
    name: "Capitan D Daniel Vazquez Airport",
    country: "Argentina"
  },
  {
    city: "Rio Mayo",
    iata: "ROY",
    name: "Rio Mayo Airport",
    country: "Argentina"
  },
  {
    city: "Perito Moreno",
    iata: "PMQ",
    name: "Perito Moreno Jalil Hamer Airport",
    country: "Argentina"
  },
  {
    city: "Gobernador Gregores",
    iata: "GGS",
    name: "Gobernador Gregores Airport",
    country: "Argentina"
  },
  {
    city: "Chubut",
    iata: "JSM",
    name: "Jose De San Martin Airport",
    country: "Argentina"
  },
  {
    city: "Rio Turbio",
    iata: "RYO",
    name: "28 de Noviembre Airport",
    country: "Argentina"
  },
  {
    city: "Puerto Santa Cruz",
    iata: "RZA",
    name: "Santa Cruz Airport",
    country: "Argentina"
  },
  {
    city: "Bahía Blanca",
    iata: "BHI",
    name: "Comandante Espora Airport",
    country: "Argentina"
  },
  {
    city: "Coronel Suarez",
    iata: "CSZ",
    name: "Brigadier D.H.E. Ruiz Airport",
    country: "Argentina"
  },
  {
    city: "Olavarria",
    iata: "OVR",
    name: "Olavarria Airport",
    country: "Argentina"
  },
  {
    city: "General Pico",
    iata: "GPO",
    name: "General Pico Airport",
    country: "Argentina"
  },
  {
    city: "Tres Arroyos",
    iata: "OYO",
    name: "Tres Arroyos Airport",
    country: "Argentina"
  },
  {
    city: "Santa Teresita",
    iata: "SST",
    name: "Santa Teresita Airport",
    country: "Argentina"
  },
  {
    city: "Mar del Plata",
    iata: "MDQ",
    name: "Ástor Piazzola International Airport",
    country: "Argentina"
  },
  {
    city: "Neuquén",
    iata: "NQN",
    name: "Presidente Perón International Airport",
    country: "Argentina"
  },
  {
    city: "Necochea",
    iata: "NEC",
    name: "Necochea Airport",
    country: "Argentina"
  },
  {
    city: "Pehuajó",
    iata: "PEH",
    name: "Comodoro Pedro Zanni Airport",
    country: "Argentina"
  },
  {
    city: "Santa Rosa",
    iata: "RSA",
    name: "Santa Rosa Airport",
    country: "Argentina"
  },
  {
    city: "San Carlos de Bariloche",
    iata: "BRC",
    name: "Teniente Luis Candelaria International Airport",
    country: "Argentina"
  },
  {
    city: "Tandil",
    iata: "TDL",
    name: "Héroes de Malvinas Airport",
    country: "Argentina"
  },
  {
    city: "Villa Gesell",
    iata: "VLG",
    name: "Villa Gesell Airport",
    country: "Argentina"
  },
  {
    city: "Cutral-Co",
    iata: "CUT",
    name: "Cutral-Co Airport",
    country: "Argentina"
  },
  {
    city: "Chapelco/San Martin de los Andes",
    iata: "CPC",
    name: "Aviador C. Campos Airport",
    country: "Argentina"
  },
  {
    city: "Viru",
    iata: "VIU",
    name: "Viru Harbour Airstrip",
    country: "SB"
  },
  {
    city: "Conceição do Araguaia",
    iata: "CDJ",
    name: "Conceição do Araguaia Airport",
    country: "Brazil"
  },
  {
    city: "Aracati",
    iata: "ARX",
    name: "Aracati Dragão do Mar Regional Airport",
    country: "Brazil"
  },
  {
    city: "Bauru",
    iata: "JTC",
    name: "Bauru/Arealva–Moussa Nakhal Tobias State Airport",
    country: "Brazil"
  },
  {
    city: "Araraquara",
    iata: "AQA",
    name: "Araraquara Airport",
    country: "Brazil"
  },
  {
    city: "Aracaju",
    iata: "AJU",
    name: "Aracaju - Santa Maria Airport",
    country: "Brazil"
  },
  {
    city: "Alta Floresta",
    iata: "AFL",
    name: "Piloto Osvaldo Marques Dias Airport",
    country: "Brazil"
  },
  {
    city: "Araçatuba",
    iata: "ARU",
    name: "Araçatuba Airport",
    country: "Brazil"
  },
  {
    city: "Araxá",
    iata: "AAX",
    name: "Romeu Zema Airport",
    country: "Brazil"
  },
  {
    city: "Belém",
    iata: "BEL",
    name: "Val de Cans/Júlio Cezar Ribeiro International Airport",
    country: "Brazil"
  },
  {
    city: "Bagé",
    iata: "BGX",
    name: "Comandante Gustavo Kraemer Airport",
    country: "Brazil"
  },
  {
    city: "Belo Horizonte",
    iata: "PLU",
    name: "Pampulha - Carlos Drummond de Andrade Airport",
    country: "Brazil"
  },
  {
    city: "Curitiba",
    iata: "BFH",
    name: "Bacacheri Airport",
    country: "Brazil"
  },
  {
    city: "Bragança Paulista",
    iata: "BJP",
    name: "Estadual Arthur Siqueira Airport",
    country: "Brazil"
  },
  {
    city: "Brasília",
    iata: "BSB",
    name: "Presidente Juscelino Kubitschek International Airport",
    country: "Brazil"
  },
  {
    city: "Barretos",
    iata: "BAT",
    name: "Chafei Amsei Airport",
    country: "Brazil"
  },
  {
    city: "Boa Vista",
    iata: "BVB",
    name: "Atlas Brasil Cantanhede International Airport",
    country: "Brazil"
  },
  {
    city: "Barra do Garças",
    iata: "BPG",
    name: "Barra do Garças Airport",
    country: "Brazil"
  },
  {
    city: "Cabo Frio",
    iata: "BZC",
    name: "Umberto Modiano Airport",
    country: "Brazil"
  },
  {
    city: "Cascavel",
    iata: "CAC",
    name: "Coronel Adalberto Mendes da Silva Airport",
    country: "Brazil"
  },
  {
    city: "Cabo Frio",
    iata: "CFB",
    name: "Cabo Frio Airport",
    country: "Brazil"
  },
  {
    city: "Caçador",
    iata: "CFC",
    name: "Doctor Carlos Alberto da Costa Neves Airport",
    country: "Brazil"
  },
  {
    city: "Belo Horizonte",
    iata: "CNF",
    name: "Tancredo Neves International Airport",
    country: "Brazil"
  },
  {
    city: "Campo Grande",
    iata: "CGR",
    name: "Campo Grande Airport",
    country: "Brazil"
  },
  {
    city: "Chapecó",
    iata: "XAP",
    name: "Serafin Enoss Bertaso Airport",
    country: "Brazil"
  },
  {
    city: "Carolina",
    iata: "CLN",
    name: "Brig. Lysias Augusto Rodrigues Airport",
    country: "Brazil"
  },
  {
    city: "Parauapebas",
    iata: "CKS",
    name: "Carajás Airport",
    country: "Brazil"
  },
  {
    city: "Criciúma",
    iata: "CCM",
    name: "Forquilhinha - Criciúma  Airport",
    country: "Brazil"
  },
  {
    city: "Caldas Novas",
    iata: "CLV",
    name: "Nelson Ribeiro Guimarães Airport",
    country: "Brazil"
  },
  {
    city: "Porto Alegre",
    iata: "QNS",
    name: "Canoas Air Force Base",
    country: "Brazil"
  },
  {
    city: "Campos dos Goytacazes",
    iata: "CAW",
    name: "Bartolomeu Lisandro Airport",
    country: "Brazil"
  },
  {
    city: "Corumbá",
    iata: "CMG",
    name: "Corumbá International Airport",
    country: "Brazil"
  },
  {
    city: "Curitiba",
    iata: "CWB",
    name: "Curitiba-Afonso Pena International Airport",
    country: "Brazil"
  },
  {
    city: "Caravelas",
    iata: "CRQ",
    name: "Caravelas Airport",
    country: "Brazil"
  },
  {
    city: "Caxias Do Sul",
    iata: "CXJ",
    name: "Hugo Cantergiani Regional Airport",
    country: "Brazil"
  },
  {
    city: "Cuiabá",
    iata: "CGB",
    name: "Várzea Grande–Marechal Rondon International Airport",
    country: "Brazil"
  },
  {
    city: "Cruzeiro Do Sul",
    iata: "CZS",
    name: "Cruzeiro do Sul Airport",
    country: "Brazil"
  },
  {
    city: "Bonito",
    iata: "BYO",
    name: "Bonito Airport",
    country: "Brazil"
  },
  {
    city: "Presidente Prudente",
    iata: "PPB",
    name: "Presidente Prudente Airport",
    country: "Brazil"
  },
  {
    city: "Dourados",
    iata: "DOU",
    name: "Dourados Airport",
    country: "Brazil"
  },
  {
    city: "Manaus",
    iata: "MAO",
    name: "Eduardo Gomes International Airport",
    country: "Brazil"
  },
  {
    city: "Jacareacanga",
    iata: "JCR",
    name: "Jacareacanga Airport",
    country: "Brazil"
  },
  {
    city: "Foz do Iguaçu",
    iata: "IGU",
    name: "Cataratas International Airport",
    country: "Brazil"
  },
  {
    city: "Florianópolis",
    iata: "FLN",
    name: "Hercílio Luz International Airport",
    country: "Brazil"
  },
  {
    city: "Fernando de Noronha",
    iata: "FEN",
    name: "Fernando de Noronha Airport",
    country: "Brazil"
  },
  {
    city: "Fortaleza",
    iata: "FOR",
    name: "Pinto Martins International Airport",
    country: "Brazil"
  },
  {
    city: "Rio De Janeiro",
    iata: "GIG",
    name: "Rio Galeão – Tom Jobim International Airport",
    country: "Brazil"
  },
  {
    city: "Guajará-Mirim",
    iata: "GJM",
    name: "Guajará-Mirim Airport",
    country: "Brazil"
  },
  {
    city: "Goiânia",
    iata: "GYN",
    name: "Santa Genoveva International Airport",
    country: "Brazil"
  },
  {
    city: "São Paulo",
    iata: "GRU",
    name: "São Paulo/Guarulhos–Governor André Franco Montoro International Airport",
    country: "Brazil"
  },
  {
    city: "Guarapuava",
    iata: "GPB",
    name: "Tancredo Thomas de Faria Airport",
    country: "Brazil"
  },
  {
    city: "Governador Valadares",
    iata: "GVR",
    name: "Coronel Altino Machado Airport",
    country: "Brazil"
  },
  {
    city: "Guaratinguetá",
    iata: "GUJ",
    name: "Edu Chaves Field",
    country: "Brazil"
  },
  {
    city: "Altamira",
    iata: "ATM",
    name: "Altamira Interstate Airport",
    country: "Brazil"
  },
  {
    city: "Itacoatiara",
    iata: "ITA",
    name: "Itacoatiara Airport",
    country: "Brazil"
  },
  {
    city: "Itaituba",
    iata: "ITB",
    name: "Itaituba Airport",
    country: "Brazil"
  },
  {
    city: "Ilhéus",
    iata: "IOS",
    name: "Bahia - Jorge Amado Airport",
    country: "Brazil"
  },
  {
    city: "Ipatinga",
    iata: "IPN",
    name: "Usiminas Airport",
    country: "Brazil"
  },
  {
    city: "Itumbiara",
    iata: "ITR",
    name: "Francisco Vilela do Amaral Airport",
    country: "Brazil"
  },
  {
    city: "Imperatriz",
    iata: "IMP",
    name: "Prefeito Renato Moreira Airport",
    country: "Brazil"
  },
  {
    city: "Jaguaruna",
    iata: "JJG",
    name: "Humberto Ghizzo Bortoluzzi Regional Airport",
    country: "Brazil"
  },
  {
    city: "Jundiaí",
    iata: "QDV",
    name: "Comte. Rolim Adolfo Amaro–Jundiaí State Airport",
    country: "Brazil"
  },
  {
    city: "Cruz",
    iata: "JJD",
    name: "Comandante Ariston Pessoa Airport",
    country: "Brazil"
  },
  {
    city: "Juiz de Fora",
    iata: "JDF",
    name: "Francisco de Assis Airport",
    country: "Brazil"
  },
  {
    city: "São Roque",
    iata: "JHF",
    name: "São Paulo Catarina Executive Airport",
    country: "Brazil"
  },
  {
    city: "Ji-Paraná",
    iata: "JPR",
    name: "Ji-Paraná Airport",
    country: "Brazil"
  },
  {
    city: "João Pessoa",
    iata: "JPA",
    name: "Presidente Castro Pinto International Airport",
    country: "Brazil"
  },
  {
    city: "Rio de Janeiro",
    iata: "RRJ",
    name: "Jacarepaguá - Roberto Marinho Airport",
    country: "Brazil"
  },
  {
    city: "Juazeiro do Norte",
    iata: "JDO",
    name: "Orlando Bezerra de Menezes Airport",
    country: "Brazil"
  },
  {
    city: "Joinville",
    iata: "JOI",
    name: "Lauro Carneiro de Loyola Airport",
    country: "Brazil"
  },
  {
    city: "Campina Grande",
    iata: "CPV",
    name: "Presidente João Suassuna Airport",
    country: "Brazil"
  },
  {
    city: "Campinas",
    iata: "VCP",
    name: "Viracopos International Airport",
    country: "Brazil"
  },
  {
    city: "Lençóis",
    iata: "LEC",
    name: "Coronel Horácio de Mattos Airport",
    country: "Brazil"
  },
  {
    city: "Lages",
    iata: "LAJ",
    name: "Lages Airport",
    country: "Brazil"
  },
  {
    city: "Lins",
    iata: "LIP",
    name: "Lins Airport",
    country: "Brazil"
  },
  {
    city: "Londrina",
    iata: "LDB",
    name: "Governor José Richa Airport",
    country: "Brazil"
  },
  {
    city: "Bom Jesus da Lapa",
    iata: "LAZ",
    name: "Bom Jesus da Lapa Airport",
    country: "Brazil"
  },
  {
    city: "Marabá",
    iata: "MAB",
    name: "João Correa da Rocha Airport",
    country: "Brazil"
  },
  {
    city: "Minaçu",
    iata: "MQH",
    name: "Minaçu Airport",
    country: "Brazil"
  },
  {
    city: "Almeirim",
    iata: "MEU",
    name: "Monte Dourado - Serra do Areão Airport",
    country: "Brazil"
  },
  {
    city: "Macaé",
    iata: "MEA",
    name: "Macaé Benedito Lacerda Airport",
    country: "Brazil"
  },
  {
    city: "Maringá",
    iata: "MGF",
    name: "Regional de Maringá - Sílvio Name Júnior Airport",
    country: "Brazil"
  },
  {
    city: "Montes Claros",
    iata: "MOC",
    name: "Mário Ribeiro Airport",
    country: "Brazil"
  },
  {
    city: "Marília",
    iata: "MII",
    name: "Frank Miloye Milenkowichi–Marília State Airport",
    country: "Brazil"
  },
  {
    city: "Manaus",
    iata: "PLL",
    name: "Ponta Pelada Airport / Manaus Air Base",
    country: "Brazil"
  },
  {
    city: "Maceió",
    iata: "MCZ",
    name: "Zumbi dos Palmares International Airport",
    country: "Brazil"
  },
  {
    city: "Macapá",
    iata: "MCP",
    name: "Macapá - Alberto Alcolumbre International Airport",
    country: "Brazil"
  },
  {
    city: "Mossoró",
    iata: "MVF",
    name: "Dix-Sept Rosado Airport",
    country: "Brazil"
  },
  {
    city: "São Paulo",
    iata: "RTE",
    name: "Campo de Marte Airport",
    country: "Brazil"
  },
  {
    city: "Manicoré",
    iata: "MNX",
    name: "Manicoré Airport",
    country: "Brazil"
  },
  {
    city: "Navegantes",
    iata: "NVT",
    name: "Ministro Victor Konder International Airport",
    country: "Brazil"
  },
  {
    city: "Santo Ângelo",
    iata: "GEL",
    name: "Santo Ângelo Airport",
    country: "Brazil"
  },
  {
    city: "Oiapoque",
    iata: "OYK",
    name: "Oiapoque Airport",
    country: "Brazil"
  },
  {
    city: "Porto Alegre",
    iata: "POA",
    name: "Porto Alegre-Salgado Filho International Airport",
    country: "Brazil"
  },
  {
    city: "Parnaíba",
    iata: "PHB",
    name: "Parnaíba - Prefeito Doutor João Silva Filho International Airport",
    country: "Brazil"
  },
  {
    city: "Poços De Caldas",
    iata: "POO",
    name: "Poços de Caldas - Embaixador Walther Moreira Salles Airport",
    country: "Brazil"
  },
  {
    city: "Passo Fundo",
    iata: "PFB",
    name: "Lauro Kurtz Airport",
    country: "Brazil"
  },
  {
    city: "Ponta Grossa",
    iata: "PGZ",
    name: "Ponta Grossa Airport - Comandante Antonio Amilton Beraldo",
    country: "Brazil"
  },
  {
    city: "Palmas",
    iata: "PMW",
    name: "Brigadeiro Lysias Rodrigues Airport",
    country: "Brazil"
  },
  {
    city: "Pelotas",
    iata: "PET",
    name: "João Simões Lopes Neto International Airport",
    country: "Brazil"
  },
  {
    city: "Petrolina",
    iata: "PNZ",
    name: "Senador Nilo Coelho Airport",
    country: "Brazil"
  },
  {
    city: "Porto Nacional",
    iata: "PNB",
    name: "Porto Nacional Airport",
    country: "Brazil"
  },
  {
    city: "Pato Branco",
    iata: "PTO",
    name: "Juvenal Loureiro Cardoso Airport",
    country: "Brazil"
  },
  {
    city: "Ponta Porã",
    iata: "PMG",
    name: "Ponta Porã Airport",
    country: "Brazil"
  },
  {
    city: "Porto Seguro",
    iata: "BPS",
    name: "Porto Seguro International Airport",
    country: "Brazil"
  },
  {
    city: "Porto Velho",
    iata: "PVH",
    name: "Governador Jorge Teixeira de Oliveira International Airport",
    country: "Brazil"
  },
  {
    city: "Rio Branco",
    iata: "RBR",
    name: "Rio Branco-Plácido de Castro International Airport",
    country: "Brazil"
  },
  {
    city: "Rondonópolis",
    iata: "ROO",
    name: "Maestro Marinho Franco Airport",
    country: "Brazil"
  },
  {
    city: "Recife",
    iata: "REC",
    name: "Recife/Guararapes - Gilberto Freyre International Airport",
    country: "Brazil"
  },
  {
    city: "Rio de Janeiro",
    iata: "SDU",
    name: "Santos Dumont Airport",
    country: "Brazil"
  },
  {
    city: "Ribeirão Preto",
    iata: "RAO",
    name: "Leite Lopes Airport",
    country: "Brazil"
  },
  {
    city: "Barreirinhas",
    iata: "BRB",
    name: "Barreirinhas National Airport",
    country: "Brazil"
  },
  {
    city: "Rio de Janeiro",
    iata: "SNZ",
    name: "Santa Cruz Air Force Base",
    country: "Brazil"
  },
  {
    city: "Natal",
    iata: "NAT",
    name: "Rio Grande do Norte/São Gonçalo do Amarante–Governador Aluízio Alves International Airport",
    country: "Brazil"
  },
  {
    city: "Sinop",
    iata: "OPS",
    name: "Presidente João Batista Figueiredo Airport",
    country: "Brazil"
  },
  {
    city: "São José Dos Campos",
    iata: "SJK",
    name: "Professor Urbano Ernesto Stumpf Airport",
    country: "Brazil"
  },
  {
    city: "São Luís",
    iata: "SLZ",
    name: "Marechal Cunha Machado International Airport",
    country: "Brazil"
  },
  {
    city: "Santa Maria",
    iata: "RIA",
    name: "Santa Maria Airport",
    country: "Brazil"
  },
  {
    city: "Santarém",
    iata: "STM",
    name: "Santarém - Maestro Wilson Fonseca International Airport",
    country: "Brazil"
  },
  {
    city: "Sorriso",
    iata: "SMT",
    name: "Adolino Bedin Regional Airport",
    country: "Brazil"
  },
  {
    city: "São Paulo",
    iata: "CGH",
    name: "Congonhas–Deputado Freitas Nobre Airport",
    country: "Brazil"
  },
  {
    city: "São José do Rio Preto",
    iata: "SJP",
    name: "Prof. Eribelto Manoel Reino State Airport",
    country: "Brazil"
  },
  {
    city: "Guarujá",
    iata: "SSZ",
    name: "Santos Nero Moura Air Base / Guarujá Airport",
    country: "Brazil"
  },
  {
    city: "Salvador",
    iata: "SSA",
    name: "Deputado Luiz Eduardo Magalhães International Airport",
    country: "Brazil"
  },
  {
    city: "Oriximiná",
    iata: "TMT",
    name: "Trombetas Airport",
    country: "Brazil"
  },
  {
    city: "Una",
    iata: "UNA",
    name: "Una-Comandatuba Airport",
    country: "Brazil"
  },
  {
    city: "Toledo",
    iata: "TOW",
    name: "Toledo - Luiz Dalcanale Filho Municipal Airport",
    country: "Brazil"
  },
  {
    city: "Teresina",
    iata: "THE",
    name: "Senador Petrônio Portela Airport",
    country: "Brazil"
  },
  {
    city: "Tefé",
    iata: "TFF",
    name: "Tefé Airport",
    country: "Brazil"
  },
  {
    city: "Três Lagoas",
    iata: "TJL",
    name: "Plínio Alarcom Airport",
    country: "Brazil"
  },
  {
    city: "Tarauacá",
    iata: "TRQ",
    name: "Tarauacá Airport",
    country: "Brazil"
  },
  {
    city: "Telêmaco Borba",
    iata: "TEC",
    name: "Telêmaco Borba Airport",
    country: "Brazil"
  },
  {
    city: "Torres",
    iata: "TSQ",
    name: "Torres Airport",
    country: "Brazil"
  },
  {
    city: "Tabatinga",
    iata: "TBT",
    name: "Tabatinga International Airport",
    country: "Brazil"
  },
  {
    city: "Tucuruí",
    iata: "TUR",
    name: "Tucuruí Airport",
    country: "Brazil"
  },
  {
    city: "São Gabriel da Cachoeira",
    iata: "SJL",
    name: "São Gabriel da Cachoeira Airport",
    country: "Brazil"
  },
  {
    city: "Paulo Afonso",
    iata: "PAV",
    name: "Paulo Afonso Airport",
    country: "Brazil"
  },
  {
    city: "Uruguaiana",
    iata: "URG",
    name: "Rubem Berta Airport",
    country: "Brazil"
  },
  {
    city: "Uberlândia",
    iata: "UDI",
    name: "Ten. Cel. Aviador César Bombonato Airport",
    country: "Brazil"
  },
  {
    city: "Uberaba",
    iata: "UBA",
    name: "Mário de Almeida Franco Airport",
    country: "Brazil"
  },
  {
    city: "Urucu",
    iata: "RPU",
    name: "Urucu Airport",
    country: "Brazil"
  },
  {
    city: "Varginha",
    iata: "VAG",
    name: "Major Brigadeiro Trompowsky Airport",
    country: "Brazil"
  },
  {
    city: "Vilhena",
    iata: "BVH",
    name: "Brigadeiro Camarão Airport",
    country: "Brazil"
  },
  {
    city: "Vitória",
    iata: "VIX",
    name: "Eurico de Aguiar Salles International Airport",
    country: "Brazil"
  },
  {
    city: "Pirassununga",
    iata: "QPS",
    name: "Campo Fontenelle",
    country: "Brazil"
  },
  {
    city: "Juiz de Fora",
    iata: "IZA",
    name: "Presidente Itamar Franco Airport",
    country: "Brazil"
  },
  {
    city: "Ancud",
    iata: "ZUD",
    name: "Pupelde Airport",
    country: "Chile"
  },
  {
    city: "Los Andes",
    iata: "LOB",
    name: "San Rafael Airport",
    country: "Chile"
  },
  {
    city: "Palena",
    iata: "WAP",
    name: "Alto Palena Airport",
    country: "Chile"
  },
  {
    city: "Arica",
    iata: "ARI",
    name: "Chacalluta International Airport",
    country: "Chile"
  },
  {
    city: "Puerto Aysén",
    iata: "WPA",
    name: "Cabo Juan Román Airfield",
    country: "Chile"
  },
  {
    city: "Copiapo",
    iata: "CPO",
    name: "Desierto de Atacama Airport",
    country: "Chile"
  },
  {
    city: "Balmaceda",
    iata: "BBA",
    name: "Balmaceda Airport",
    country: "Chile"
  },
  {
    city: "Tocopilla",
    iata: "TOQ",
    name: "Barriles Airport",
    country: "Chile"
  },
  {
    city: "Bahia Inutil",
    iata: "DPB",
    name: "Pampa Guanaco Airport",
    country: "Chile"
  },
  {
    city: "Chile Chico",
    iata: "CCH",
    name: "Chile Chico Airport",
    country: "Chile"
  },
  {
    city: "Calama",
    iata: "CJC",
    name: "El Loa Airport",
    country: "Chile"
  },
  {
    city: "Chillan",
    iata: "YAI",
    name: "Gral. Bernardo O´Higgins Airport",
    country: "Chile"
  },
  {
    city: "Punta Arenas",
    iata: "PUQ",
    name: "President Carlos Ibáñez International Airport",
    country: "Chile"
  },
  {
    city: "Coquimbo",
    iata: "COW",
    name: "Tambillos Airport",
    country: "Chile"
  },
  {
    city: "Coyhaique",
    iata: "GXQ",
    name: "Teniente Vidal Airport",
    country: "Chile"
  },
  {
    city: "Iquique",
    iata: "IQQ",
    name: "Diego Aracena International Airport",
    country: "Chile"
  },
  {
    city: "Santiago",
    iata: "SCL",
    name: "Comodoro Arturo Merino Benítez International Airport",
    country: "Chile"
  },
  {
    city: "El Salvador",
    iata: "ESR",
    name: "Ricardo García Posada Airport",
    country: "Chile"
  },
  {
    city: "Frutillar",
    iata: "FRT",
    name: "El Avellano Airport",
    country: "Chile"
  },
  {
    city: "Antofagasta",
    iata: "ANF",
    name: "Andrés Sabella Gálvez International Airport",
    country: "Chile"
  },
  {
    city: "Porvenir",
    iata: "WPR",
    name: "Captain Fuentes Martinez Airport",
    country: "Chile"
  },
  {
    city: "Futaleufu",
    iata: "FFU",
    name: "Futaleufú Airport",
    country: "Chile"
  },
  {
    city: "Union Glacier",
    iata: "UGL",
    name: "Union Glacier Blue-Ice Runway",
    country: "AQ"
  },
  {
    city: "Los Angeles",
    iata: "LSQ",
    name: "María Dolores Airport",
    country: "Chile"
  },
  {
    city: "Puerto Williams",
    iata: "WPU",
    name: "Guardia Marina Zañartu Airport",
    country: "Chile"
  },
  {
    city: "Cochrane",
    iata: "LGR",
    name: "Cochrane Airport",
    country: "Chile"
  },
  {
    city: "Concepcion",
    iata: "CCP",
    name: "Carriel Sur International Airport",
    country: "Chile"
  },
  {
    city: "Isla De Pascua",
    iata: "IPC",
    name: "Mataveri International Airport",
    country: "Chile"
  },
  {
    city: "Osorno",
    iata: "ZOS",
    name: "Cañal Bajo Carlos Hott Siebert Airport",
    country: "Chile"
  },
  {
    city: "Pica",
    iata: "CPP",
    name: "Coposa Airport",
    country: "Chile"
  },
  {
    city: "Vallenar",
    iata: "VLR",
    name: "Vallenar Airport",
    country: "Chile"
  },
  {
    city: "Linares",
    iata: "ZLR",
    name: "Municipal de Linares Airport",
    country: "Chile"
  },
  {
    city: "Puerto Natales",
    iata: "PNT",
    name: "Lieutenant Julio Gallardo Airport",
    country: "Chile"
  },
  {
    city: "Ovalle",
    iata: "OVL",
    name: "El Tuqui Airport",
    country: "Chile"
  },
  {
    city: "Pucon",
    iata: "ZPC",
    name: "Pucón Airport",
    country: "Chile"
  },
  {
    city: "Dalcahue",
    iata: "MHC",
    name: "Mocopulli Airport",
    country: "Chile"
  },
  {
    city: "Puerto Varas",
    iata: "PUX",
    name: "El Mirador Airport",
    country: "Chile"
  },
  {
    city: "Temuco",
    iata: "ZCO",
    name: "La Araucanía International Airport",
    country: "Chile"
  },
  {
    city: "Chañaral",
    iata: "CNR",
    name: "Chañaral Airport",
    country: "Chile"
  },
  {
    city: "Viña Del Mar",
    iata: "VAP",
    name: "Rodelillo Airport",
    country: "Chile"
  },
  {
    city: "Villa Las Estrellas",
    iata: "TNM",
    name: "Teniente Rodolfo Marsh Martin Airport",
    country: "AQ"
  },
  {
    city: "Cerro Sombrero",
    iata: "SMB",
    name: "Franco Bianco Airport",
    country: "Chile"
  },
  {
    city: "La Serena-Coquimbo",
    iata: "LSC",
    name: "La Florida Airport",
    country: "Chile"
  },
  {
    city: "San Felipe",
    iata: "SSD",
    name: "Víctor Lafón Airport",
    country: "Chile"
  },
  {
    city: "Castro",
    iata: "WCA",
    name: "Gamboa Airport",
    country: "Chile"
  },
  {
    city: "Temuco",
    iata: "PZS",
    name: "Maquehue Airport",
    country: "Chile"
  },
  {
    city: "Puerto Montt",
    iata: "PMC",
    name: "El Tepual International Airport",
    country: "Chile"
  },
  {
    city: "Talca",
    iata: "TLX",
    name: "Panguilemo Airport",
    country: "Chile"
  },
  {
    city: "Chaitén",
    iata: "WCH",
    name: "Nuevo Chaitén Airport",
    country: "Chile"
  },
  {
    city: "Victoria",
    iata: "ZIC",
    name: "Victoria Airport",
    country: "Chile"
  },
  {
    city: "Taltal",
    iata: "TTC",
    name: "Las Breas Airport",
    country: "Chile"
  },
  {
    city: "Valdivia",
    iata: "ZAL",
    name: "Pichoy Airport",
    country: "Chile"
  },
  {
    city: "Viña del Mar",
    iata: "KNA",
    name: "Viña del Mar Airport",
    country: "Chile"
  },
  {
    city: "Belmonte",
    iata: "BVM",
    name: "Belmonte Airport",
    country: "Brazil"
  },
  {
    city: "Angra dos Reis",
    iata: "GDR",
    name: "Angra dos Reis Airport",
    country: "Brazil"
  },
  {
    city: "São Paulo De Olivença",
    iata: "OLC",
    name: "Senadora Eunice Micheles Airport",
    country: "Brazil"
  },
  {
    city: "Sorocaba",
    iata: "SOD",
    name: "Sorocaba Airport",
    country: "Brazil"
  },
  {
    city: "Itanhaém",
    iata: "JTN",
    name: "Itanhaém Airport",
    country: "Brazil"
  },
  {
    city: "Feira de Santana",
    iata: "FEC",
    name: "João Durval Carneiro Airport",
    country: "Brazil"
  },
  {
    city: "Jales",
    iata: "JLS",
    name: "Jales Airport",
    country: "Brazil"
  },
  {
    city: "Cairu",
    iata: "PBA",
    name: "Fábio Perini Airport",
    country: "Brazil"
  },
  {
    city: "Maricá",
    iata: "JMR",
    name: "Maricá Airport",
    country: "Brazil"
  },
  {
    city: "Nova Mutum",
    iata: "NVM",
    name: "Brigadeiro Eduardo Gomes Airport",
    country: "Brazil"
  },
  {
    city: "Ourinhos",
    iata: "OUS",
    name: "Jornalista Benedito Pimentel Airport",
    country: "Brazil"
  },
  {
    city: "Ourilândia do Norte",
    iata: "OIA",
    name: "Ourilândia do Norte Airport",
    country: "Brazil"
  },
  {
    city: "Resende",
    iata: "REZ",
    name: "Resende Airport",
    country: "Brazil"
  },
  {
    city: "São Carlos",
    iata: "QSC",
    name: "Mário Pereira Lopes–São Carlos International Airport",
    country: "Brazil"
  },
  {
    city: "Paraty",
    iata: "JPY",
    name: "Paraty Airport",
    country: "Brazil"
  },
  {
    city: "Ubatuba",
    iata: "UBT",
    name: "Ubatuba Gastão Madeira State Airport",
    country: "Brazil"
  },
  {
    city: "Itaperuna",
    iata: "ITP",
    name: "Itaperuna Airport",
    country: "Brazil"
  },
  {
    city: "Votuporanga",
    iata: "VOT",
    name: "Domingos Pignatari Airport",
    country: "Brazil"
  },
  {
    city: "Tauá",
    iata: "JTA",
    name: "Pedro Teixeira Castelo Airport",
    country: "Brazil"
  },
  {
    city: "Hudiksvall",
    iata: "HUV",
    name: "Hudiksvall Airport",
    country: "Sweden"
  },
  {
    city: "Ambato",
    iata: "ATF",
    name: "Chachoán Regional Airport",
    country: "EC"
  },
  {
    city: "Coca",
    iata: "OCC",
    name: "Francisco De Orellana Airport",
    country: "EC"
  },
  {
    city: "Cuenca",
    iata: "CUE",
    name: "Mariscal Lamar Airport",
    country: "EC"
  },
  {
    city: "Isla Baltra",
    iata: "GPS",
    name: "Seymour Galapagos Ecological Airport",
    country: "EC"
  },
  {
    city: "Guayaquil",
    iata: "GYE",
    name: "José Joaquín de Olmedo International Airport",
    country: "EC"
  },
  {
    city: "Puerto Villamil",
    iata: "IBB",
    name: "General Villamil Airport",
    country: "EC"
  },
  {
    city: "Ahuano",
    iata: "TNW",
    name: "Jumandy Airport",
    country: "EC"
  },
  {
    city: "Jipijapa",
    iata: "JIP",
    name: "Jipijapa Airport",
    country: "EC"
  },
  {
    city: "Latacunga",
    iata: "LTX",
    name: "Cotopaxi International Airport",
    country: "EC"
  },
  {
    city: "Macará",
    iata: "MRR",
    name: "Jose Maria Velasco Ibarra Airport",
    country: "EC"
  },
  {
    city: "Macas",
    iata: "XMS",
    name: "Coronel E Carvajal Airport",
    country: "EC"
  },
  {
    city: "Manta",
    iata: "MEC",
    name: "Eloy Alfaro International Airport",
    country: "EC"
  },
  {
    city: "Lago Agrio",
    iata: "LGQ",
    name: "Nueva Loja Airport",
    country: "EC"
  },
  {
    city: "Puerto Putumayo",
    iata: "PYO",
    name: "Putumayo Airport",
    country: "EC"
  },
  {
    city: "Portoviejo",
    iata: "PVO",
    name: "Reales Tamarindos Airport",
    country: "EC"
  },
  {
    city: "Quito",
    iata: "UIO",
    name: "Mariscal Sucre International Airport",
    country: "EC"
  },
  {
    city: "Santa Rosa",
    iata: "ETR",
    name: "Santa Rosa - Artillery Colonel Victor Larrea International Airport",
    country: "EC"
  },
  {
    city: "Salinas/La Libertad",
    iata: "SNC",
    name: "General Ulpiano Paez International Airport",
    country: "EC"
  },
  {
    city: "Sucúa",
    iata: "SUQ",
    name: "Sucúa Airport",
    country: "EC"
  },
  {
    city: "Shell Mera",
    iata: "PTZ",
    name: "Rio Amazonas Airport",
    country: "EC"
  },
  {
    city: "Puerto Baquerizo Moreno",
    iata: "SCY",
    name: "San Cristóbal Airport",
    country: "EC"
  },
  {
    city: "Bahía de Caraquez",
    iata: "BHA",
    name: "Los Perales Airport",
    country: "EC"
  },
  {
    city: "Taisha",
    iata: "TSC",
    name: "Taisha Airport",
    country: "EC"
  },
  {
    city: "Tiputini",
    iata: "TPN",
    name: "Tiputini Airport",
    country: "EC"
  },
  {
    city: "La Toma (Catamayo)",
    iata: "LOH",
    name: "Ciudad de Catamayo Airport",
    country: "EC"
  },
  {
    city: "Tachina",
    iata: "ESM",
    name: "Carlos Concha Torres International Airport",
    country: "EC"
  },
  {
    city: "Tarapoa",
    iata: "TPC",
    name: "Tarapoa Airport",
    country: "EC"
  },
  {
    city: "Tulcán",
    iata: "TUA",
    name: "Lieutenant Colonel Luis A. Mantilla International Airport",
    country: "EC"
  },
  {
    city: "Stanley",
    iata: "PSY",
    name: "Port Stanley Airport",
    country: "FK"
  },
  {
    city: "Asunción",
    iata: "ASU",
    name: "Silvio Pettirossi International Airport",
    country: "PY"
  },
  {
    city: "Ayolas",
    iata: "AYO",
    name: "Aeropuerto Nacional Juan de Ayolas",
    country: "PY"
  },
  {
    city: "Bahía Negra",
    iata: "BFA",
    name: "Bahía Negra Airport",
    country: "PY"
  },
  {
    city: "Concepción",
    iata: "CIO",
    name: "Lieutenant Colonel Carmelo Peralta National Airport",
    country: "PY"
  },
  {
    city: "Encarnación",
    iata: "ENO",
    name: "Teniente Ramon A. Ayub Gonzalez International Airport",
    country: "PY"
  },
  {
    city: "Ciudad del Este",
    iata: "AGT",
    name: "Guaraní International Airport",
    country: "PY"
  },
  {
    city: "Filadelfia",
    iata: "FLM",
    name: "Aeródromo de Filadelfia",
    country: "PY"
  },
  {
    city: "Mariscal Estigarribia",
    iata: "ESG",
    name: "Dr. Luis María Argaña International Airport",
    country: "PY"
  },
  {
    city: "Fuerte Olimpo",
    iata: "OLK",
    name: "Aeródromo de Fuerte",
    country: "PY"
  },
  {
    city: "Pilar",
    iata: "PIL",
    name: "Aeródromo Don Carlos Miguel Gimenez",
    country: "PY"
  },
  {
    city: "Pedro Juan Caballero",
    iata: "PJC",
    name: "Aeropuerto Nacional Dr. Augusto Roberto Fuster",
    country: "PY"
  },
  {
    city: "Las Perlas",
    iata: "SIC",
    name: "San José Island Airport",
    country: "PA"
  },
  {
    city: "Itajaí",
    iata: "ITJ",
    name: "Campo Comandantes Airport",
    country: "Brazil"
  },
  {
    city: "Lucas do Rio Verde",
    iata: "LVR",
    name: "Municipal Bom Futuro Airport",
    country: "Brazil"
  },
  {
    city: "Santa Fé do Sul",
    iata: "SFV",
    name: "Santa Fé do Sul Airport",
    country: "Brazil"
  },
  {
    city: "Franca",
    iata: "FRC",
    name: "Tenente Lund Pressoto Airport",
    country: "Brazil"
  },
  {
    city: "Maraú",
    iata: "MUU",
    name: "Barra Grande Airport",
    country: "Brazil"
  },
  {
    city: "Juara",
    iata: "JUA",
    name: "Inácio Luís do Nascimento Airport",
    country: "Brazil"
  },
  {
    city: "Cruz Bay",
    iata: "SJF",
    name: "Cruz Bay Seaplane Base",
    country: "VI"
  },
  {
    city: "Confresa",
    iata: "CFO",
    name: "Confresa Airport",
    country: "Brazil"
  },
  {
    city: "Novo Progresso",
    iata: "NPR",
    name: "Novo Progresso Airport",
    country: "Brazil"
  },
  {
    city: "Ariquemes",
    iata: "AQM",
    name: "Ariquemes Airport",
    country: "Brazil"
  },
  {
    city: "Juruti",
    iata: "JRT",
    name: "Juruti Airport",
    country: "Brazil"
  },
  {
    city: "Rio Grande",
    iata: "RIG",
    name: "Rio Grande Regional Airport",
    country: "Brazil"
  },
  {
    city: "Aragarças",
    iata: "ARS",
    name: "Aragarças Airport",
    country: "Brazil"
  },
  {
    city: "El Encanto",
    iata: "ECO",
    name: "El Encanto Airport",
    country: "Colombia"
  },
  {
    city: "Mirití-Paraná",
    iata: "MIX",
    name: "Miriti Parana Airport",
    country: "Colombia"
  },
  {
    city: "Arboletes",
    iata: "ARO",
    name: "Arboletes Airport",
    country: "Colombia"
  },
  {
    city: "Mulatos",
    iata: "ULS",
    name: "Mulatos Airport",
    country: "Colombia"
  },
  {
    city: "San Juan De Uraba",
    iata: "SJR",
    name: "San Juan De Uraba Airport",
    country: "Colombia"
  },
  {
    city: "San Pedro de Urabá",
    iata: "NPU",
    name: "San Pedro Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Rico",
    iata: "PCC",
    name: "Puerto Rico Airport",
    country: "Colombia"
  },
  {
    city: "Solano",
    iata: "SQF",
    name: "Solano Airport",
    country: "Colombia"
  },
  {
    city: "Yari",
    iata: "AYI",
    name: "Yari Airport",
    country: "Colombia"
  },
  {
    city: "Currillo",
    iata: "CUI",
    name: "Currillo Airport",
    country: "Colombia"
  },
  {
    city: "Monterrey",
    iata: "MOY",
    name: "Monterrey Airport",
    country: "Colombia"
  },
  {
    city: "Nunchia",
    iata: "NUH",
    name: "Nunchia Airport",
    country: "Colombia"
  },
  {
    city: "Paratebueno",
    iata: "EUO",
    name: "Paratebueno Airport",
    country: "Colombia"
  },
  {
    city: "Pore",
    iata: "PRE",
    name: "Pore Airport",
    country: "Colombia"
  },
  {
    city: "San Luis De Palenque",
    iata: "SQE",
    name: "San Luis De Palenque Airport",
    country: "Colombia"
  },
  {
    city: "Tablón De Tamara",
    iata: "TTM",
    name: "Tablón De Tamara Airport",
    country: "Colombia"
  },
  {
    city: "Micay",
    iata: "LMX",
    name: "Lopez de Micay Airport",
    country: "Colombia"
  },
  {
    city: "Ayacucho",
    iata: "AYC",
    name: "Ayacucho Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Mosquito",
    iata: "GRA",
    name: "Gamarra Airport",
    country: "Colombia"
  },
  {
    city: "Codazzi",
    iata: "DZI",
    name: "Las Flores Airport",
    country: "Colombia"
  },
  {
    city: "San Juan Del César",
    iata: "SJH",
    name: "San Juan Del César Airport",
    country: "Colombia"
  },
  {
    city: "Bajo Baudó",
    iata: "PZR",
    name: "Pizarro Airport",
    country: "Colombia"
  },
  {
    city: "Unguía",
    iata: "UNC",
    name: "Unguía Airport",
    country: "Colombia"
  },
  {
    city: "Ayapel",
    iata: "AYA",
    name: "Ayapel Airport",
    country: "Colombia"
  },
  {
    city: "Santa Catalina",
    iata: "SCA",
    name: "Santa Catalina Airport",
    country: "Colombia"
  },
  {
    city: "Medina",
    iata: "MND",
    name: "Medina Airport",
    country: "Colombia"
  },
  {
    city: "Macanal",
    iata: "NAD",
    name: "Macanal Airport",
    country: "Colombia"
  },
  {
    city: "Guacamayas",
    iata: "GCA",
    name: "Guacamayas Airport",
    country: "Colombia"
  },
  {
    city: "Santana Ramos",
    iata: "SRO",
    name: "Santana Ramos Airport",
    country: "Colombia"
  },
  {
    city: "Chivolo",
    iata: "IVO",
    name: "Chivolo Airport",
    country: "Colombia"
  },
  {
    city: "Guamal",
    iata: "GAA",
    name: "Guamal Airport",
    country: "Colombia"
  },
  {
    city: "Barranca De Upia",
    iata: "BAC",
    name: "Barranca De Upia Airport",
    country: "Colombia"
  },
  {
    city: "Candilejas",
    iata: "CJD",
    name: "Candilejas Airport",
    country: "Colombia"
  },
  {
    city: "Caquetania",
    iata: "CQT",
    name: "Caquetania Airport",
    country: "Colombia"
  },
  {
    city: "Ruperto Polania",
    iata: "ELJ",
    name: "El Recreo Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Gaitán",
    iata: "MSK",
    name: "Morelia Airport",
    country: "Colombia"
  },
  {
    city: "Solita",
    iata: "SOH",
    name: "Solita Airport",
    country: "Colombia"
  },
  {
    city: "Mosquera",
    iata: "MQR",
    name: "Mosquera Airport",
    country: "Colombia"
  },
  {
    city: "Payán",
    iata: "PYN",
    name: "Payán Airport",
    country: "Colombia"
  },
  {
    city: "Iscuandé",
    iata: "ISD",
    name: "Santa Bárbara Airport",
    country: "Colombia"
  },
  {
    city: "Zapatoca",
    iata: "AZT",
    name: "Zapatoca Airport",
    country: "Colombia"
  },
  {
    city: "Campiña",
    iata: "HRR",
    name: "Herrera Airport",
    country: "Colombia"
  },
  {
    city: "Planadas",
    iata: "PLA",
    name: "Planadas Airport",
    country: "Colombia"
  },
  {
    city: "Piedras",
    iata: "SQB",
    name: "Santa Ana Airport",
    country: "Colombia"
  },
  {
    city: "Acaricuara",
    iata: "ARF",
    name: "Acaricuara Airport",
    country: "Colombia"
  },
  {
    city: "Monfort",
    iata: "MFB",
    name: "Monfort Airport",
    country: "Colombia"
  },
  {
    city: "Morichal",
    iata: "MHF",
    name: "Morichal Airport",
    country: "Colombia"
  },
  {
    city: "Yavarate",
    iata: "VAB",
    name: "Yavarate Airport",
    country: "Colombia"
  },
  {
    city: "Casuarito",
    iata: "CSR",
    name: "Casuarito Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Carreño",
    iata: "GMC",
    name: "Guerima Airport",
    country: "Colombia"
  },
  {
    city: "Araracuara",
    iata: "ACR",
    name: "Araracuara Airport",
    country: "Colombia"
  },
  {
    city: "Acandí",
    iata: "ACD",
    name: "Alcides Fernández Airport",
    country: "Colombia"
  },
  {
    city: "Aguachica",
    iata: "HAY",
    name: "Hacaritama Airport",
    country: "Colombia"
  },
  {
    city: "Amalfi",
    iata: "AFI",
    name: "Amalfi Airport",
    country: "Colombia"
  },
  {
    city: "Apiay",
    iata: "API",
    name: "Gomez Nino Apiay Air Base",
    country: "Colombia"
  },
  {
    city: "Armenia",
    iata: "AXM",
    name: "El Eden Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Asís",
    iata: "PUU",
    name: "Tres De Mayo Airport",
    country: "Colombia"
  },
  {
    city: "Arauquita",
    iata: "ARQ",
    name: "El Troncal Airport",
    country: "Colombia"
  },
  {
    city: "El Banco",
    iata: "ELB",
    name: "Las Flores Airport",
    country: "Colombia"
  },
  {
    city: "Bucaramanga",
    iata: "BGA",
    name: "Palonegro Airport",
    country: "Colombia"
  },
  {
    city: "Barranco Minas",
    iata: "NBB",
    name: "Barranco Minas Airport",
    country: "Colombia"
  },
  {
    city: "Bogota",
    iata: "BOG",
    name: "El Dorado International Airport",
    country: "Colombia"
  },
  {
    city: "Barranquilla",
    iata: "BAQ",
    name: "Ernesto Cortissoz International Airport",
    country: "Colombia"
  },
  {
    city: "Bahía Solano",
    iata: "BSC",
    name: "José Celestino Mutis Airport",
    country: "Colombia"
  },
  {
    city: "Buenaventura",
    iata: "BUN",
    name: "Gerardo Tobar López Airport",
    country: "Colombia"
  },
  {
    city: "Acandí",
    iata: "CPB",
    name: "Capurganá Airport",
    country: "Colombia"
  },
  {
    city: "Cúcuta",
    iata: "CUC",
    name: "Camilo Daza International Airport",
    country: "Colombia"
  },
  {
    city: "Condoto",
    iata: "COG",
    name: "Mandinga Airport",
    country: "Colombia"
  },
  {
    city: "Cartagena",
    iata: "CTG",
    name: "Rafael Nuñez International Airport",
    country: "Colombia"
  },
  {
    city: "Puerto López",
    iata: "CCO",
    name: "Carimagua Airport",
    country: "Colombia"
  },
  {
    city: "Cali",
    iata: "CLO",
    name: "Alfonso Bonilla Aragon International Airport",
    country: "Colombia"
  },
  {
    city: "Cimitarra",
    iata: "CIM",
    name: "Cimitarra Airport",
    country: "Colombia"
  },
  {
    city: "Cravo Norte",
    iata: "RAV",
    name: "Cravo Norte Airport",
    country: "Colombia"
  },
  {
    city: "Tumaco",
    iata: "TCO",
    name: "La Florida Airport",
    country: "Colombia"
  },
  {
    city: "Bahía Solano",
    iata: "BHF",
    name: "Cupica Airport",
    country: "Colombia"
  },
  {
    city: "Carurú",
    iata: "CUO",
    name: "Carurú Airport",
    country: "Colombia"
  },
  {
    city: "Caucasia",
    iata: "CAQ",
    name: "Juan H White Airport",
    country: "Colombia"
  },
  {
    city: "Coveñas",
    iata: "CVE",
    name: "Coveñas Airport",
    country: "Colombia"
  },
  {
    city: "Corozal",
    iata: "CZU",
    name: "Las Brujas Airport",
    country: "Colombia"
  },
  {
    city: "El Bagre",
    iata: "EBG",
    name: "El Bagre Airport",
    country: "Colombia"
  },
  {
    city: "El Charco",
    iata: "ECR",
    name: "El Charco Airport",
    country: "Colombia"
  },
  {
    city: "Barrancabermeja",
    iata: "EJA",
    name: "Yariguíes Airport",
    country: "Colombia"
  },
  {
    city: "Florencia",
    iata: "FLA",
    name: "Gustavo Artunduaga Paredes Airport",
    country: "Colombia"
  },
  {
    city: "Fundación",
    iata: "FDA",
    name: "Fundación Airport",
    country: "Colombia"
  },
  {
    city: "nan",
    iata: "LGT",
    name: "La Gaviota Airport",
    country: "Colombia"
  },
  {
    city: "Girardot",
    iata: "GIR",
    name: "Santiago Vila Airport",
    country: "Colombia"
  },
  {
    city: "Cartago",
    iata: "CRC",
    name: "Santa Ana Airport",
    country: "Colombia"
  },
  {
    city: "Guapi",
    iata: "GPI",
    name: "Guapi Airport",
    country: "Colombia"
  },
  {
    city: "Chaparral",
    iata: "CPL",
    name: "General Navas Pardo Airport",
    country: "Colombia"
  },
  {
    city: "Hato Corozal",
    iata: "HTZ",
    name: "Hato Corozal Airport",
    country: "Colombia"
  },
  {
    city: "Ibagué",
    iata: "IBE",
    name: "Perales Airport",
    country: "Colombia"
  },
  {
    city: "Chigorodó",
    iata: "IGO",
    name: "Jaime Ortiz Betancourt Airport",
    country: "Colombia"
  },
  {
    city: "La Primavera",
    iata: "LPE",
    name: "La Primavera Airport",
    country: "Colombia"
  },
  {
    city: "Ipiales",
    iata: "IPI",
    name: "San Luis Airport",
    country: "Colombia"
  },
  {
    city: "Juradó",
    iata: "JUO",
    name: "Juradó Airport",
    country: "Colombia"
  },
  {
    city: "Carepa",
    iata: "APO",
    name: "Antonio Roldán Betancur Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Leguízamo",
    iata: "LQM",
    name: "Caucaya Airport",
    country: "Colombia"
  },
  {
    city: "La Mina-Maicao",
    iata: "MCJ",
    name: "Jorge Isaac Airport",
    country: "Colombia"
  },
  {
    city: "La Pedrera",
    iata: "LPD",
    name: "La Pedrera Airport",
    country: "Colombia"
  },
  {
    city: "Leticia",
    iata: "LET",
    name: "Alfredo Vásquez Cobo International Airport",
    country: "Colombia"
  },
  {
    city: "Timbiqui",
    iata: "TBD",
    name: "Timbiqui Airport",
    country: "Colombia"
  },
  {
    city: "Medellín",
    iata: "EOH",
    name: "Enrique Olaya Herrera Airport",
    country: "Colombia"
  },
  {
    city: "Miraflores",
    iata: "MFS",
    name: "Miraflores Airport",
    country: "Colombia"
  },
  {
    city: "Magangué",
    iata: "MGN",
    name: "Baracoa Airport",
    country: "Colombia"
  },
  {
    city: "Montelíbano",
    iata: "MTB",
    name: "Montelibano Airport",
    country: "Colombia"
  },
  {
    city: "Santa Cruz de Mompóx",
    iata: "MMP",
    name: "San Bernardo Airport",
    country: "Colombia"
  },
  {
    city: "Montería",
    iata: "MTR",
    name: "Los Garzones Airport",
    country: "Colombia"
  },
  {
    city: "Mitú",
    iata: "MVP",
    name: "Fabio Alberto Leon Bentley Airport",
    country: "Colombia"
  },
  {
    city: "Manizales",
    iata: "MZL",
    name: "La Nubia Airport",
    country: "Colombia"
  },
  {
    city: "La Macarena",
    iata: "LMC",
    name: "La Macarena Airport",
    country: "Colombia"
  },
  {
    city: "Necocli",
    iata: "NCI",
    name: "Necocli Airport",
    country: "Colombia"
  },
  {
    city: "Nuquí",
    iata: "NQU",
    name: "Reyes Murillo Airport",
    country: "Colombia"
  },
  {
    city: "Neiva",
    iata: "NVA",
    name: "Benito Salas Airport",
    country: "Colombia"
  },
  {
    city: "Ocaña",
    iata: "OCV",
    name: "Aguas Claras Airport",
    country: "Colombia"
  },
  {
    city: "Orocue",
    iata: "ORC",
    name: "Orocue Airport",
    country: "Colombia"
  },
  {
    city: "Remedios",
    iata: "OTU",
    name: "Otu Airport",
    country: "Colombia"
  },
  {
    city: "Paipa",
    iata: "RON",
    name: "Juan Jose Rondon Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Carreño",
    iata: "PCR",
    name: "German Olano Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Inírida",
    iata: "PDA",
    name: "Obando Cesar Gaviria Trujillo Airport",
    country: "Colombia"
  },
  {
    city: "Pereira",
    iata: "PEI",
    name: "Matecaña International Airport",
    country: "Colombia"
  },
  {
    city: "Pitalito",
    iata: "PTX",
    name: "Pitalito Airport",
    country: "Colombia"
  },
  {
    city: "Plato",
    iata: "PLT",
    name: "Plato Airport",
    country: "Colombia"
  },
  {
    city: "Armenia",
    iata: "NAR",
    name: "Puerto Nare Airport",
    country: "Colombia"
  },
  {
    city: "Popayán",
    iata: "PPN",
    name: "Guillermo León Valencia Airport",
    country: "Colombia"
  },
  {
    city: "La Dorada",
    iata: "PAL",
    name: "German Olano Air Base",
    country: "Colombia"
  },
  {
    city: "Puerto Berrio",
    iata: "PBE",
    name: "Puerto Berrio Airport",
    country: "Colombia"
  },
  {
    city: "Chachagüí",
    iata: "PSO",
    name: "Antonio Nariño Airport",
    country: "Colombia"
  },
  {
    city: "Providencia",
    iata: "PVA",
    name: "El Embrujo Airport",
    country: "Colombia"
  },
  {
    city: "Paz de Ariporo",
    iata: "PZA",
    name: "Paz de Ariporo Airport",
    country: "Colombia"
  },
  {
    city: "Mariquita",
    iata: "MQU",
    name: "Mariquita Airport",
    country: "Colombia"
  },
  {
    city: "Tarapacá",
    iata: "TCD",
    name: "Tarapacá Airport",
    country: "Colombia"
  },
  {
    city: "Medellín",
    iata: "MDE",
    name: "Jose Maria Córdova International Airport",
    country: "Colombia"
  },
  {
    city: "Riohacha",
    iata: "RCH",
    name: "Almirante Padilla Airport",
    country: "Colombia"
  },
  {
    city: "Sabana de Torres",
    iata: "SNT",
    name: "Las Cruces Airport",
    country: "Colombia"
  },
  {
    city: "Saravena",
    iata: "RVE",
    name: "Los Colonizadores Airport",
    country: "Colombia"
  },
  {
    city: "San José Del Guaviare",
    iata: "SJE",
    name: "Jorge E. Gonzalez Torres Airport",
    country: "Colombia"
  },
  {
    city: "Santa Rosalia",
    iata: "SSL",
    name: "Santa Rosalia Airport",
    country: "Colombia"
  },
  {
    city: "Santa Marta",
    iata: "SMR",
    name: "Simón Bolívar International Airport",
    country: "Colombia"
  },
  {
    city: "Sogamoso",
    iata: "SOX",
    name: "Alberto Lleras Camargo Airport",
    country: "Colombia"
  },
  {
    city: "San Andrés",
    iata: "ADZ",
    name: "Gustavo Rojas Pinilla International Airport",
    country: "Colombia"
  },
  {
    city: "San Marcos",
    iata: "SRS",
    name: "San Marcos Airport",
    country: "Colombia"
  },
  {
    city: "San Vicente Del Caguán",
    iata: "SVI",
    name: "Eduardo Falla Solano Airport",
    country: "Colombia"
  },
  {
    city: "Tauramena",
    iata: "TAU",
    name: "Tauramena Airport",
    country: "Colombia"
  },
  {
    city: "Tibú",
    iata: "TIB",
    name: "Tibú Airport",
    country: "Colombia"
  },
  {
    city: "Trinidad",
    iata: "TDA",
    name: "Trinidad Airport",
    country: "Colombia"
  },
  {
    city: "Santiago de Tolú",
    iata: "TLU",
    name: "Golfo de Morrosquillo Airport",
    country: "Colombia"
  },
  {
    city: "Tame",
    iata: "TME",
    name: "Gustavo Vargas Airport",
    country: "Colombia"
  },
  {
    city: "Tres Esquinas",
    iata: "TQS",
    name: "Captain Ernesto Esguerra Cubides Air Base",
    country: "Colombia"
  },
  {
    city: "Turbo",
    iata: "TRB",
    name: "Gonzalo Mejía Airport",
    country: "Colombia"
  },
  {
    city: "La Uribe",
    iata: "URI",
    name: "Uribe Airport",
    country: "Colombia"
  },
  {
    city: "Arauca",
    iata: "AUC",
    name: "Santiago Perez Airport",
    country: "Colombia"
  },
  {
    city: "Quibdó",
    iata: "UIB",
    name: "El Caraño Airport",
    country: "Colombia"
  },
  {
    city: "Tuluá",
    iata: "ULQ",
    name: "Heriberto Gíl Martínez Airport",
    country: "Colombia"
  },
  {
    city: "Urrao",
    iata: "URR",
    name: "Urrao Airport",
    country: "Colombia"
  },
  {
    city: "Villa Garzón",
    iata: "VGZ",
    name: "Villa Garzón Airport",
    country: "Colombia"
  },
  {
    city: "Puerto Boyacá",
    iata: "PYA",
    name: "Velásquez Airport",
    country: "Colombia"
  },
  {
    city: "Valledupar",
    iata: "VUP",
    name: "Alfonso López Pumarejo Airport",
    country: "Colombia"
  },
  {
    city: "Villavicencio",
    iata: "VVC",
    name: "Vanguardia Airport",
    country: "Colombia"
  },
  {
    city: "San Vicente Del Caguán",
    iata: "AYG",
    name: "Yaguara Airport",
    country: "Colombia"
  },
  {
    city: "Yopal",
    iata: "EYP",
    name: "El Alcaravan - Yopal Airport",
    country: "Colombia"
  },
  {
    city: "El Bañado",
    iata: "MHW",
    name: "Monteagudo Airport",
    country: "BO"
  },
  {
    city: "Sucre",
    iata: "SRE",
    name: "Alcantarí International Airport",
    country: "BO"
  },
  {
    city: "Apolo",
    iata: "APB",
    name: "Apolo Airport",
    country: "BO"
  },
  {
    city: "Ascensión de Guarayos",
    iata: "ASC",
    name: "Ascención de Guarayos Airport",
    country: "BO"
  },
  {
    city: "Bermejo",
    iata: "BJO",
    name: "Bermejo Airport",
    country: "BO"
  },
  {
    city: "Camiri",
    iata: "CAM",
    name: "Camiri Airport",
    country: "BO"
  },
  {
    city: "Cochabamba",
    iata: "CBB",
    name: "Jorge Wilsterman International Airport",
    country: "BO"
  },
  {
    city: "Cobija",
    iata: "CIJ",
    name: "Capitán Aníbal Arab Airport",
    country: "BO"
  },
  {
    city: "Concepción",
    iata: "CEP",
    name: "Concepción Airport",
    country: "BO"
  },
  {
    city: "Santa Cruz",
    iata: "SRZ",
    name: "El Trompillo Airport",
    country: "BO"
  },
  {
    city: "Guayaramerín",
    iata: "GYA",
    name: "Guayaramerín Airport",
    country: "BO"
  },
  {
    city: "Chimore",
    iata: "CCA",
    name: "Chimore Airport",
    country: "BO"
  },
  {
    city: "Itenes",
    iata: "BVK",
    name: "Huacaraje Airport",
    country: "BO"
  },
  {
    city: "San José de Chiquitos",
    iata: "SJS",
    name: "San José De Chiquitos Airport",
    country: "BO"
  },
  {
    city: "San Joaquín",
    iata: "SJB",
    name: "San Joaquín Airport",
    country: "BO"
  },
  {
    city: "San Javier",
    iata: "SJV",
    name: "San Javier Airport",
    country: "BO"
  },
  {
    city: "La Paz / El Alto",
    iata: "LPB",
    name: "El Alto International Airport",
    country: "BO"
  },
  {
    city: "Magdalena",
    iata: "MGD",
    name: "Magdalena Airport",
    country: "BO"
  },
  {
    city: "Oruro",
    iata: "ORU",
    name: "Juan Mendoza International Airport",
    country: "BO"
  },
  {
    city: "Potosí",
    iata: "POI",
    name: "Capitan Nicolas Rojas Airport",
    country: "BO"
  },
  {
    city: "Puerto Rico/Manuripi",
    iata: "PUR",
    name: "Puerto Rico Airport",
    country: "BO"
  },
  {
    city: "Puerto Suárez",
    iata: "PSZ",
    name: "Capitán Av. Salvador Ogaya G. airport",
    country: "BO"
  },
  {
    city: "San Ramón / Mamoré",
    iata: "SRD",
    name: "San Ramón Airport",
    country: "BO"
  },
  {
    city: "Roboré",
    iata: "RBO",
    name: "Roboré Airport",
    country: "BO"
  },
  {
    city: "Riberalta",
    iata: "RIB",
    name: "Capitán Av. Selin Zeitun Lopez Airport",
    country: "BO"
  },
  {
    city: "Rurrenabaque",
    iata: "RBQ",
    name: "Rurrenabaque Airport",
    country: "BO"
  },
  {
    city: "Reyes",
    iata: "REY",
    name: "Reyes Airport",
    country: "BO"
  },
  {
    city: "Santa Ana del Yacuma",
    iata: "SBL",
    name: "Santa Ana Del Yacuma Airport",
    country: "BO"
  },
  {
    city: "San Borja",
    iata: "SRJ",
    name: "Capitán Av. German Quiroga G. Airport",
    country: "BO"
  },
  {
    city: "San Ignacio de Velasco",
    iata: "SNG",
    name: "Capitán Av. Juan Cochamanidis S. Airport",
    country: "BO"
  },
  {
    city: "San Ignacio de Moxos",
    iata: "SNM",
    name: "San Ignacio de Moxos Airport",
    country: "BO"
  },
  {
    city: "Santa Rosa",
    iata: "SRB",
    name: "Santa Rosa de Yacuma Airport",
    country: "BO"
  },
  {
    city: "San Matías",
    iata: "MQK",
    name: "San Matías Airport",
    country: "BO"
  },
  {
    city: "Tarija",
    iata: "TJA",
    name: "Capitan Oriel Lea Plaza Airport",
    country: "BO"
  },
  {
    city: "Trinidad",
    iata: "TDD",
    name: "Teniente Av. Jorge Henrich Arauz Airport",
    country: "BO"
  },
  {
    city: "Quijarro",
    iata: "UYU",
    name: "Uyuni Joya Andina Airport",
    country: "BO"
  },
  {
    city: "Vallegrande",
    iata: "VAH",
    name: "Capitán Av. Vidal Villagomez Toledo Airport",
    country: "BO"
  },
  {
    city: "Villamontes",
    iata: "VLM",
    name: "Teniente Coronel Rafael Pabón Airport",
    country: "BO"
  },
  {
    city: "Santa Cruz",
    iata: "VVI",
    name: "Viru Viru International Airport",
    country: "BO"
  },
  {
    city: "Yacuíba",
    iata: "BYC",
    name: "Yacuiba Airport",
    country: "BO"
  },
  {
    city: "Albina",
    iata: "ABN",
    name: "Albina Airport",
    country: "SR"
  },
  {
    city: "Awaradam",
    iata: "AAJ",
    name: "Cayana Airstrip",
    country: "SR"
  },
  {
    city: "Totness",
    iata: "TOT",
    name: "Totness Airport",
    country: "SR"
  },
  {
    city: "Drietabbetje",
    iata: "DRJ",
    name: "Drietabbetje Airport",
    country: "SR"
  },
  {
    city: "Aurora",
    iata: "LDO",
    name: "Ladouanie Airport",
    country: "SR"
  },
  {
    city: "Paramaribo",
    iata: "PBM",
    name: "Johan Adolf Pengel International Airport",
    country: "SR"
  },
  {
    city: "Moengo",
    iata: "MOJ",
    name: "Moengo Airstrip",
    country: "SR"
  },
  {
    city: "Nieuw Nickerie",
    iata: "ICK",
    name: "Nieuw Nickerie - Major Henk Fernandes Airport",
    country: "SR"
  },
  {
    city: "Paloemeu",
    iata: "OEM",
    name: "Vincent Fayks Airport",
    country: "SR"
  },
  {
    city: "Stoelmanseiland",
    iata: "SMZ",
    name: "Stoelmanseiland Airport",
    country: "SR"
  },
  {
    city: "Kasikasima",
    iata: "KCB",
    name: "Tepoe Airstrip",
    country: "SR"
  },
  {
    city: "Wageningen",
    iata: "AGI",
    name: "Wageningen Airstrip",
    country: "SR"
  },
  {
    city: "Washabo",
    iata: "WSO",
    name: "Washabo Airport",
    country: "SR"
  },
  {
    city: "Paramaribo",
    iata: "ORG",
    name: "Zorg en Hoop Airport",
    country: "SR"
  },
  {
    city: "Sobral",
    iata: "JSO",
    name: "Dr. Luciano de Arruda Coelho Regional Airport",
    country: "Brazil"
  },
  {
    city: "Araripina",
    iata: "JAW",
    name: "Araripina Airport",
    country: "Brazil"
  },
  {
    city: "Arapiraca",
    iata: "APQ",
    name: "Arapiraca Airport",
    country: "Brazil"
  },
  {
    city: "Almenara",
    iata: "AMJ",
    name: "Cirilo Queiróz Airport",
    country: "Brazil"
  },
  {
    city: "Assis",
    iata: "AIF",
    name: "Marcelo Pires Halzhausen Airport",
    country: "Brazil"
  },
  {
    city: "Barra do Corda",
    iata: "BDC",
    name: "Barra do Corda Airport",
    country: "Brazil"
  },
  {
    city: "Barreiras",
    iata: "BRA",
    name: "Dom Ricardo Weberberger Airport",
    country: "Brazil"
  },
  {
    city: "Balsas",
    iata: "BSS",
    name: "Balsas Airport",
    country: "Brazil"
  },
  {
    city: "Barra",
    iata: "BQQ",
    name: "Barra Airport",
    country: "Brazil"
  },
  {
    city: "Cairu",
    iata: "MXQ",
    name: "Lorenzo Airport",
    country: "Brazil"
  },
  {
    city: "Correia Pinto",
    iata: "EEA",
    name: "Planalto Serrano Regional Airport",
    country: "Brazil"
  },
  {
    city: "Colatina",
    iata: "QCH",
    name: "Colatina Airport",
    country: "Brazil"
  },
  {
    city: "Redenção",
    iata: "RDC",
    name: "Redenção Airport",
    country: "Brazil"
  },
  {
    city: "Diamantina",
    iata: "DTI",
    name: "Diamantina Airport",
    country: "Brazil"
  },
  {
    city: "Divinópolis",
    iata: "DIQ",
    name: "Brigadeiro Cabral Airport",
    country: "Brazil"
  },
  {
    city: "Paragominas",
    iata: "JPE",
    name: "Nagib Demachki Airport",
    country: "Brazil"
  },
  {
    city: "Canavieiras",
    iata: "CNV",
    name: "Sócrates Rezende Airport",
    country: "Brazil"
  },
  {
    city: "Vacaria",
    iata: "VCC",
    name: "Vacaria Airport",
    country: "Brazil"
  },
  {
    city: "São Félix do Xingu",
    iata: "SXX",
    name: "São Félix do Xingu Airport",
    country: "Brazil"
  },
  {
    city: "Guarapari",
    iata: "GUZ",
    name: "Guarapari Airport",
    country: "Brazil"
  },
  {
    city: "Guadalupe",
    iata: "GDP",
    name: "Guadalupe Airport",
    country: "Brazil"
  },
  {
    city: "Guanambi",
    iata: "GNM",
    name: "Guanambi Airport",
    country: "Brazil"
  },
  {
    city: "Garanhuns",
    iata: "QGP",
    name: "Garanhuns Airport",
    country: "Brazil"
  },
  {
    city: "Serra Talhada",
    iata: "SET",
    name: "Santa Magalhães Airport",
    country: "Brazil"
  },
  {
    city: "Irecê",
    iata: "IRE",
    name: "Irecê Airport",
    country: "Brazil"
  },
  {
    city: "Iguatu",
    iata: "QIG",
    name: "Iguatu Airport",
    country: "Brazil"
  },
  {
    city: "Itapetinga",
    iata: "QIT",
    name: "Itapetinga Airport",
    country: "Brazil"
  },
  {
    city: "Ipiaú",
    iata: "IPU",
    name: "Ipiaú Airport",
    country: "Brazil"
  },
  {
    city: "Jacobina",
    iata: "JCM",
    name: "Jacobina Airport",
    country: "Brazil"
  },
  {
    city: "Jequié",
    iata: "JEQ",
    name: "Jequié Airport",
    country: "Brazil"
  },
  {
    city: "Manhuaçu",
    iata: "JMA",
    name: "Aeroporto Elias Breder Airport",
    country: "Brazil"
  },
  {
    city: "Januária",
    iata: "JNA",
    name: "Januária Airport",
    country: "Brazil"
  },
  {
    city: "São João Del Rei",
    iata: "JDR",
    name: "Prefeito Octávio de Almeida Neves Airport",
    country: "Brazil"
  },
  {
    city: "Cachoeiro do Itapemirim",
    iata: "CDI",
    name: "Cachoeiro do Itapemirim - Raimundo de Andrade Airport",
    country: "Brazil"
  },
  {
    city: "Currais Novos",
    iata: "QCP",
    name: "Currais Novos Airport",
    country: "Brazil"
  },
  {
    city: "Linhares",
    iata: "LHN",
    name: "Linhares Municipal Airport",
    country: "Brazil"
  },
  {
    city: "São Lourenço",
    iata: "SSO",
    name: "São Lourenço Airport",
    country: "Brazil"
  },
  {
    city: "Monte Alegre",
    iata: "MTE",
    name: "Monte Alegre Airport",
    country: "Brazil"
  },
  {
    city: "Mucuri",
    iata: "MVS",
    name: "Mucuri Airport",
    country: "Brazil"
  },
  {
    city: "São Mateus",
    iata: "SBJ",
    name: "São Mateus - Ernesto Bonomo Airport",
    country: "Brazil"
  },
  {
    city: "Porto de Moz",
    iata: "PTQ",
    name: "Porto de Moz Airport",
    country: "Brazil"
  },
  {
    city: "Nanuque",
    iata: "NNU",
    name: "Nanuque Airport",
    country: "Brazil"
  },
  {
    city: "Passos",
    iata: "PSW",
    name: "José Figueiredo Municipal Airport",
    country: "Brazil"
  },
  {
    city: "Feijó",
    iata: "FEJ",
    name: "Feijó Airport",
    country: "Brazil"
  },
  {
    city: "Oriximiná",
    iata: "ORX",
    name: "Oriximiná Airport",
    country: "Brazil"
  },
  {
    city: "Picos",
    iata: "PCS",
    name: "Picos Airport",
    country: "Brazil"
  },
  {
    city: "Patos de Minas",
    iata: "POJ",
    name: "Patos de Minas Airport",
    country: "Brazil"
  },
  {
    city: "Pirapora",
    iata: "PIV",
    name: "Pirapora Airport",
    country: "Brazil"
  },
  {
    city: "San Quintín",
    iata: "SNQ",
    name: "San Quintín Military Airstrip",
    country: "Mexico"
  },
  {
    city: "Floriano",
    iata: "FLB",
    name: "Cangapara Airport",
    country: "Brazil"
  },
  {
    city: "Mucugê",
    iata: "CHD",
    name: "Mucugê Airport",
    country: "Brazil"
  },
  {
    city: "Prado",
    iata: "PDF",
    name: "Prado Airport",
    country: "Brazil"
  },
  {
    city: "Caruaru",
    iata: "CAU",
    name: "Caruaru Airport",
    country: "Brazil"
  },
  {
    city: "Salinópolis",
    iata: "OPP",
    name: "Salinópolis Airport",
    country: "Brazil"
  },
  {
    city: "Soure",
    iata: "SFK",
    name: "Soure Airport",
    country: "Brazil"
  },
  {
    city: "Teixeira de Freitas",
    iata: "TXF",
    name: "9 de Maio - Teixeira de Freitas Airport",
    country: "Brazil"
  },
  {
    city: "Óbidos",
    iata: "OBI",
    name: "Óbidos Municipal Airport",
    country: "Brazil"
  },
  {
    city: "Teófilo Otoni",
    iata: "TFL",
    name: "Juscelino Kubitscheck Airport",
    country: "Brazil"
  },
  {
    city: "Patos",
    iata: "JPO",
    name: "Aeroporto Brigadeiro Firmino Ayres",
    country: "Brazil"
  },
  {
    city: "Araçuaí",
    iata: "AIY",
    name: "Araçuaí Airport",
    country: "Brazil"
  },
  {
    city: "Valença",
    iata: "VAL",
    name: "Valença Airport",
    country: "Brazil"
  },
  {
    city: "Breves",
    iata: "BVS",
    name: "Breves Airport",
    country: "Brazil"
  },
  {
    city: "Camocim",
    iata: "CMC",
    name: "Camocim - Pinto Martins Airport",
    country: "Brazil"
  },
  {
    city: "Crateús",
    iata: "JCS",
    name: "Crateús Airport",
    country: "Brazil"
  },
  {
    city: "Almeirim",
    iata: "GGF",
    name: "Almeirim Airport",
    country: "Brazil"
  },
  {
    city: "Pinheiro",
    iata: "PHI",
    name: "Pinheiro Airport",
    country: "Brazil"
  },
  {
    city: "Guimarães",
    iata: "GMS",
    name: "Antônio Guerreiro Airport",
    country: "Brazil"
  },
  {
    city: "Pouso Alegre",
    iata: "PPY",
    name: "Pouso Alegre Airport",
    country: "Brazil"
  },
  {
    city: "Paracatu",
    iata: "PYT",
    name: "Pedro Rabelo de Souza Airport",
    country: "Brazil"
  },
  {
    city: "Ituberá",
    iata: "ITE",
    name: "Ituberá Airport",
    country: "Brazil"
  },
  {
    city: "Las Khorey",
    iata: "LKR",
    name: "Las Khorey Airport",
    country: "SO"
  },
  {
    city: "Guriel",
    iata: "GUO",
    name: "Guriel Airport",
    country: "SO"
  },
  {
    city: "Borama",
    iata: "BXX",
    name: "Borama Airport",
    country: "SO"
  },
  {
    city: "Sóc Trăng",
    iata: "SOA",
    name: "Sóc Trăng Airport",
    country: "Vietnam"
  },
  {
    city: "Matoury",
    iata: "CAY",
    name: "Cayenne – Félix Eboué Airport",
    country: "GF"
  },
  {
    city: "Grand-Santi",
    iata: "GSI",
    name: "Grand-Santi Airport",
    country: "GF"
  },
  {
    city: "Maripasoula",
    iata: "MPY",
    name: "Maripasoula Airport",
    country: "GF"
  },
  {
    city: "Saint-Georges-de-l'Oyapock",
    iata: "OYP",
    name: "Saint-Georges-de-l'Oyapock Airport",
    country: "GF"
  },
  {
    city: "Saint-Laurent-du-Maroni",
    iata: "LDX",
    name: "Saint-Laurent-du-Maroni Airport",
    country: "GF"
  },
  {
    city: "Régina",
    iata: "REI",
    name: "Régina Airport",
    country: "GF"
  },
  {
    city: "Saül",
    iata: "XAU",
    name: "Saül Airport",
    country: "GF"
  },
  {
    city: "T2",
    iata: "SOR",
    name: "Al Thaurah Airport",
    country: "SY"
  },
  {
    city: "Fortaleza",
    iata: "ALD",
    name: "Alerta Airport",
    country: "Peru"
  },
  {
    city: "Andoas",
    iata: "AOP",
    name: "Alferez FAP Alfredo Vladimir Sara Bauer Airport",
    country: "Peru"
  },
  {
    city: "Atalaya",
    iata: "AYX",
    name: "Teniente General Gerardo Pérez Pinedo Airport",
    country: "Peru"
  },
  {
    city: "Moyobamba",
    iata: "MBP",
    name: "Moyobamba Airport",
    country: "Peru"
  },
  {
    city: "Iberia",
    iata: "IBP",
    name: "Iberia Airport",
    country: "Peru"
  },
  {
    city: "Pucallpa",
    iata: "PCL",
    name: "Cap FAP David Abenzur Rengifo International Airport",
    country: "Peru"
  },
  {
    city: "Corrientes",
    iata: "TDP",
    name: "Trompeteros Airport",
    country: "Peru"
  },
  {
    city: "Chimbote",
    iata: "CHM",
    name: "FAP Lieutenant Jaime Andres de Montreuil Morales Airport",
    country: "Peru"
  },
  {
    city: "nan",
    iata: "CGL",
    name: "Chagual Airport",
    country: "Peru"
  },
  {
    city: "Tingo Maria",
    iata: "TGI",
    name: "Tingo Maria Airport",
    country: "Peru"
  },
  {
    city: "Chiclayo",
    iata: "CIX",
    name: "Capitán FAP José A. Quiñones González International Airport",
    country: "Peru"
  },
  {
    city: "Ayacucho",
    iata: "AYP",
    name: "Air Force Colonel Alfredo Mendivil Duarte Airport",
    country: "Peru"
  },
  {
    city: "Andahuaylas",
    iata: "ANS",
    name: "Andahuaylas Airport",
    country: "Peru"
  },
  {
    city: "Anta",
    iata: "ATA",
    name: "Comandante FAP German Arias Graziani Airport",
    country: "Peru"
  },
  {
    city: "Quince Mil",
    iata: "UMI",
    name: "Quincemil Air Base",
    country: "Peru"
  },
  {
    city: "Lima",
    iata: "LIM",
    name: "Jorge Chávez International Airport",
    country: "Peru"
  },
  {
    city: "Uchiza",
    iata: "UCZ",
    name: "Uchiza Airport",
    country: "Peru"
  },
  {
    city: "Rioja",
    iata: "RIJ",
    name: "Juan Simons Vela Airport",
    country: "Peru"
  },
  {
    city: "Jaén",
    iata: "JAE",
    name: "Shumba Airport",
    country: "Peru"
  },
  {
    city: "Juanjuí",
    iata: "JJI",
    name: "Juanjui Airport",
    country: "Peru"
  },
  {
    city: "Jauja",
    iata: "JAU",
    name: "Francisco Carle Airport",
    country: "Peru"
  },
  {
    city: "Juliaca",
    iata: "JUL",
    name: "Inca Manco Capac International Airport",
    country: "Peru"
  },
  {
    city: "San Juan de Marcona",
    iata: "SJA",
    name: "San Juan de Marcona Airport",
    country: "Peru"
  },
  {
    city: "Cajamarca",
    iata: "CJA",
    name: "Mayor General FAP Armando Revoredo Iglesias Airport",
    country: "Peru"
  },
  {
    city: "Rodriguez de Mendoza",
    iata: "RIM",
    name: "San Nicolas Airport",
    country: "Peru"
  },
  {
    city: "Ilo",
    iata: "ILQ",
    name: "General Jorge Fernandez Maldon Airport",
    country: "Peru"
  },
  {
    city: "Tumbes",
    iata: "TBP",
    name: "Captain Pedro Canga Rodríguez International Airport",
    country: "Peru"
  },
  {
    city: "Mazamari",
    iata: "MZA",
    name: "Mayor PNP Nancy Flores Paucar Airport",
    country: "Peru"
  },
  {
    city: "Yurimaguas",
    iata: "YMS",
    name: "Moises Benzaquen Rengifo Airport",
    country: "Peru"
  },
  {
    city: "Huánuco",
    iata: "HUU",
    name: "Alferez Fap David Figueroa Fernandini Airport",
    country: "Peru"
  },
  {
    city: "Plaza Saposoa",
    iata: "SQU",
    name: "Saposoa Airport",
    country: "Peru"
  },
  {
    city: "Chachapoyas",
    iata: "CHH",
    name: "Chachapoyas Airport",
    country: "Peru"
  },
  {
    city: "Iquitos",
    iata: "IQT",
    name: "Coronel FAP Francisco Secada Vignetta International Airport",
    country: "Peru"
  },
  {
    city: "Arequipa",
    iata: "AQP",
    name: "Rodríguez Ballón International Airport",
    country: "Peru"
  },
  {
    city: "Trujillo",
    iata: "TRU",
    name: "Capitán FAP Carlos Martínez de Pinillos International Airport",
    country: "Peru"
  },
  {
    city: "Pisco",
    iata: "PIO",
    name: "Captain Renán Elías Olivera International Airport",
    country: "Peru"
  },
  {
    city: "Tarapoto",
    iata: "TPP",
    name: "Cadete FAP Guillermo Del Castillo Paredes Airport",
    country: "Peru"
  },
  {
    city: "Shiringayoc",
    iata: "SYC",
    name: "Shiringayoc Airport",
    country: "Peru"
  },
  {
    city: "Tacna",
    iata: "TCQ",
    name: "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
    country: "Peru"
  },
  {
    city: "Puerto Maldonado",
    iata: "PEM",
    name: "Padre Aldamiz International Airport",
    country: "Peru"
  },
  {
    city: "Piura",
    iata: "PIU",
    name: "PAF Captain Guillermo Concha Iberico International Airport",
    country: "Peru"
  },
  {
    city: "Talara",
    iata: "TYL",
    name: "Captain Victor Montes Arias International Airport",
    country: "Peru"
  },
  {
    city: "Nazca",
    iata: "NZC",
    name: "Maria Reiche Neuman Airport",
    country: "Peru"
  },
  {
    city: "Cusco",
    iata: "CUZ",
    name: "Alejandro Velasco Astete International Airport",
    country: "Peru"
  },
  {
    city: "Kwatta",
    iata: "EAX",
    name: "Eduard Alexander Gummels Airport",
    country: "SR"
  },
  {
    city: "Mulegé",
    iata: "SRL",
    name: "Palo Verde Airport",
    country: "Mexico"
  },
  {
    city: "Sandringham Station",
    iata: "SRM",
    name: "Sandringham Airport",
    country: "Australia"
  },
  {
    city: "Stony River",
    iata: "SRV",
    name: "Stony River 2 Airport",
    country: "United States"
  },
  {
    city: "Cruz Alta",
    iata: "CZB",
    name: "Carlos Ruhl Airport",
    country: "Brazil"
  },
  {
    city: "Apucarana",
    iata: "APU",
    name: "Captain João Busse Airport",
    country: "Brazil"
  },
  {
    city: "Bento Gonçalves",
    iata: "BGV",
    name: "Aeroclube de Bento Gonçalves Airport",
    country: "Brazil"
  },
  {
    city: "Blumenau",
    iata: "BNU",
    name: "Blumenau Airport",
    country: "Brazil"
  },
  {
    city: "Concórdia",
    iata: "CCI",
    name: "Olavo Cecco Rigon Airport",
    country: "Brazil"
  },
  {
    city: "Cassilândia",
    iata: "CSS",
    name: "Cassilândia Airport",
    country: "Brazil"
  },
  {
    city: "Canela",
    iata: "CEL",
    name: "Canela Airport",
    country: "Brazil"
  },
  {
    city: "Cornélio Procópio",
    iata: "CKO",
    name: "Cornélio Procópio Airport",
    country: "Brazil"
  },
  {
    city: "Cianorte",
    iata: "GGH",
    name: "Engenheiro Gastão de Mesquita Filho Airport",
    country: "Brazil"
  },
  {
    city: "Erechim",
    iata: "ERM",
    name: "Erechim Airport",
    country: "Brazil"
  },
  {
    city: "Francisco Beltrão",
    iata: "FBE",
    name: "Paulo Abdala Airport",
    country: "Brazil"
  },
  {
    city: "Guaíra",
    iata: "GGJ",
    name: "Guaíra Airport",
    country: "Brazil"
  },
  {
    city: "Horizontina",
    iata: "HRZ",
    name: "Walter Bündchen Airport",
    country: "Brazil"
  },
  {
    city: "Ijuí",
    iata: "IJU",
    name: "João Batista Bos Filho Airport",
    country: "Brazil"
  },
  {
    city: "Itaqui",
    iata: "ITQ",
    name: "Itaqui Airport",
    country: "Brazil"
  },
  {
    city: "Joaçaba",
    iata: "JCB",
    name: "Santa Terezinha Airport",
    country: "Brazil"
  },
  {
    city: "Campo Mourão",
    iata: "CBW",
    name: "Campo Mourão Airport",
    country: "Brazil"
  },
  {
    city: "Cachoeira Do Sul",
    iata: "QDB",
    name: "Cachoeira do Sul Airport",
    country: "Brazil"
  },
  {
    city: "Cacoal",
    iata: "OAL",
    name: "Cacoal Airport",
    country: "Brazil"
  },
  {
    city: "Lontras",
    iata: "LOI",
    name: "Helmuth Baungarten Airport",
    country: "Brazil"
  },
  {
    city: "Alegrete",
    iata: "ALQ",
    name: "Alegrete Novo Airport",
    country: "Brazil"
  },
  {
    city: "Montenegro",
    iata: "QGF",
    name: "Montenegro Airport",
    country: "Brazil"
  },
  {
    city: "Novo Hamburgo",
    iata: "QHV",
    name: "Novo Hamburgo Airport",
    country: "Brazil"
  },
  {
    city: "São Miguel do Oeste",
    iata: "SQX",
    name: "São Miguel do Oeste Hélio Wasum Airport",
    country: "Brazil"
  },
  {
    city: "Arapongas",
    iata: "APX",
    name: "Arapongas Airport",
    country: "Brazil"
  },
  {
    city: "Lavras",
    iata: "VRZ",
    name: "Padre Israel Airport",
    country: "Brazil"
  },
  {
    city: "Aripuanã",
    iata: "AIR",
    name: "Aripuanã Airport",
    country: "Brazil"
  },
  {
    city: "Paranaguá",
    iata: "PNG",
    name: "Paranaguá Airport",
    country: "Brazil"
  },
  {
    city: "Paranavaí",
    iata: "PVI",
    name: "Paranavaí Airport",
    country: "Brazil"
  },
  {
    city: "Paranaíba",
    iata: "PBB",
    name: "Paranaíba Airport",
    country: "Brazil"
  },
  {
    city: "São Lourenço Do Sul",
    iata: "SQY",
    name: "São Lourenço do Sul Airport",
    country: "Brazil"
  },
  {
    city: "Siassi",
    iata: "SSS",
    name: "Siassi Airport",
    country: "PG"
  },
  {
    city: "São Borja",
    iata: "JBS",
    name: "São Borja Airport",
    country: "Brazil"
  },
  {
    city: "Santa Cruz do Sul",
    iata: "CSU",
    name: "Santa Cruz do Sul Airport",
    country: "Brazil"
  },
  {
    city: "Umuarama",
    iata: "UMU",
    name: "Orlando de Carvalho Airport",
    country: "Brazil"
  },
  {
    city: "Arujá",
    iata: "ZFU",
    name: "Unifly Heliport",
    country: "Brazil"
  },
  {
    city: "União da Vitória",
    iata: "UVI",
    name: "José Cleto Airport",
    country: "Brazil"
  },
  {
    city: "Videira",
    iata: "VIA",
    name: "Videira Airport",
    country: "Brazil"
  },
  {
    city: "Brumado",
    iata: "BMS",
    name: "Sócrates Mariani Bittencourt Airport",
    country: "Brazil"
  },
  {
    city: "Xanxerê",
    iata: "AXE",
    name: "Xanxerê Airport",
    country: "Brazil"
  },
  {
    city: "Santa Rosa",
    iata: "SRA",
    name: "Luis Alberto Lehr Airport",
    country: "Brazil"
  },
  {
    city: "Artigas",
    iata: "ATI",
    name: "Artigas International Airport",
    country: "UY"
  },
  {
    city: "Bella Union",
    iata: "BUV",
    name: "Placeres Airport",
    country: "UY"
  },
  {
    city: "Colonia del Sacramento",
    iata: "CYR",
    name: "Colonia Laguna de Los Patos International Airport",
    country: "UY"
  },
  {
    city: "Durazno",
    iata: "DZO",
    name: "Santa Bernardina International Airport",
    country: "UY"
  },
  {
    city: "Punta del Este",
    iata: "PDP",
    name: "Capitan Corbeta CA Curbelo International Airport",
    country: "UY"
  },
  {
    city: "Melo",
    iata: "MLZ",
    name: "Cerro Largo International Airport",
    country: "UY"
  },
  {
    city: "Ciudad de la Costa",
    iata: "MVD",
    name: "Carrasco General Cesáreo L. Berisso International Airport",
    country: "UY"
  },
  {
    city: "Paysandú",
    iata: "PDU",
    name: "Tydeo Larre Borges Airport",
    country: "UY"
  },
  {
    city: "Rivera/Santana do Livramento",
    iata: "RVY",
    name: "Pres. Gral. Óscar D. Gestido Binational Airport",
    country: "UY"
  },
  {
    city: "Salto",
    iata: "STY",
    name: "Nueva Hesperides International Airport",
    country: "UY"
  },
  {
    city: "Tacuarembo",
    iata: "TAW",
    name: "Tacuarembo Airport",
    country: "UY"
  },
  {
    city: "Treinta y Tres",
    iata: "TYT",
    name: "Treinta y Tres Airport",
    country: "UY"
  },
  {
    city: "Vichadero",
    iata: "VCH",
    name: "Vichadero Airport",
    country: "UY"
  },
  {
    city: "Acarigua",
    iata: "AGV",
    name: "Oswaldo Guevara Mujica Airport",
    country: "VE"
  },
  {
    city: "Anaco",
    iata: "AAO",
    name: "Anaco Airport",
    country: "VE"
  },
  {
    city: "Guayabal",
    iata: "LPJ",
    name: "Armando Schwarck Airport",
    country: "VE"
  },
  {
    city: "Barcelona",
    iata: "BLA",
    name: "General José Antonio Anzoategui International Airport",
    country: "VE"
  },
  {
    city: "Barinas",
    iata: "BNS",
    name: "Barinas Airport",
    country: "VE"
  },
  {
    city: "Barquisimeto",
    iata: "BRM",
    name: "Jacinto Lara International Airport",
    country: "VE"
  },
  {
    city: "Maracay",
    iata: "MYC",
    name: "Escuela Mariscal Sucre Airport",
    country: "VE"
  },
  {
    city: "Ciudad Bolivar",
    iata: "CBL",
    name: "General Tomas de Heres Airport",
    country: "VE"
  },
  {
    city: "nan",
    iata: "CXA",
    name: "Caicara del Orinoco Airport",
    country: "VE"
  },
  {
    city: "Casigua El Cubo",
    iata: "CUV",
    name: "Casigua El Cubo Airport",
    country: "VE"
  },
  {
    city: "Guarico",
    iata: "CLZ",
    name: "Calabozo Airport",
    country: "VE"
  },
  {
    city: "Canaima",
    iata: "CAJ",
    name: "Canaima Airport",
    country: "VE"
  },
  {
    city: "Carúpano",
    iata: "CUP",
    name: "General Francisco Bermúdez Airport",
    country: "VE"
  },
  {
    city: "Coro",
    iata: "CZE",
    name: "José Leonardo Chirinos Airport",
    country: "VE"
  },
  {
    city: "Cumaná",
    iata: "CUM",
    name: "Antonio José de Sucre Airport",
    country: "VE"
  },
  {
    city: "Puerto Paez",
    iata: "PPZ",
    name: "Puerto Paez Airport",
    country: "VE"
  },
  {
    city: "Bolivar",
    iata: "EOR",
    name: "El Dorado Airport",
    country: "VE"
  },
  {
    city: "nan",
    iata: "EOZ",
    name: "Elorza Airport",
    country: "VE"
  },
  {
    city: "Guasdualito",
    iata: "GDO",
    name: "Guasdualito Airport",
    country: "VE"
  },
  {
    city: "nan",
    iata: "GUI",
    name: "Guiria Airport",
    country: "VE"
  },
  {
    city: "Guanare",
    iata: "GUQ",
    name: "Guanare Airport",
    country: "VE"
  },
  {
    city: "Higuerote",
    iata: "HGE",
    name: "Higuerote Airport",
    country: "VE"
  },
  {
    city: "Ikabarú",
    iata: "ICA",
    name: "Ikabaru Airport",
    country: "VE"
  },
  {
    city: "Isla de Coche",
    iata: "ICC",
    name: "Andrés Miguel Salazar Marcano Airport",
    country: "VE"
  },
  {
    city: "Paraguaná",
    iata: "LSP",
    name: "Josefa Camejo International Airport",
    country: "VE"
  },
  {
    city: "Kavanayén",
    iata: "KAV",
    name: "Kavanayen Airport",
    country: "VE"
  },
  {
    city: "Kamarata",
    iata: "KTV",
    name: "Kamarata Airport",
    country: "VE"
  },
  {
    city: "nan",
    iata: "LFR",
    name: "La Fria Airport",
    country: "VE"
  },
  {
    city: "Maracaibo",
    iata: "MAR",
    name: "La Chinita International Airport",
    country: "VE"
  },
  {
    city: "Mérida",
    iata: "MRD",
    name: "Alberto Carnevalli Airport",
    country: "VE"
  },
  {
    city: "Isla Margarita",
    iata: "PMV",
    name: "Del Caribe Santiago Mariño International Airport",
    country: "VE"
  },
  {
    city: "Maiquetía",
    iata: "CCS",
    name: "Maiquetía Simón Bolívar International Airport",
    country: "VE"
  },
  {
    city: "Maturín",
    iata: "MUN",
    name: "José Tadeo Monagas International Airport",
    country: "VE"
  },
  {
    city: "Cabimas",
    iata: "CBS",
    name: "Oro Negro Airport",
    country: "VE"
  },
  {
    city: "Puerto Ayacucho",
    iata: "PYH",
    name: "Cacique Aramare Airport",
    country: "VE"
  },
  {
    city: "Puerto Cabello",
    iata: "PBL",
    name: "General Bartolome Salom International Airport",
    country: "VE"
  },
  {
    city: "Capure",
    iata: "PDZ",
    name: "Pedernales Airport",
    country: "VE"
  },
  {
    city: "Paraitepuy de Ikabarú",
    iata: "PPH",
    name: "Paraitepuy Airstrip",
    country: "VE"
  },
  {
    city: "San Cristóbal",
    iata: "SCI",
    name: "Paramillo Airport",
    country: "VE"
  },
  {
    city: "Guyana City",
    iata: "PZO",
    name: "General Manuel Carlos Piar International Airport",
    country: "VE"
  },
  {
    city: "Palmarito",
    iata: "PTM",
    name: "Palmarito Airport",
    country: "VE"
  },
  {
    city: "Gran Roque Island",
    iata: "LRV",
    name: "Los Roques Airport",
    country: "VE"
  },
  {
    city: "Stevens Village",
    iata: "SVS",
    name: "Stevens Village Airport",
    country: "United States"
  },
  {
    city: "San Antonio del Tachira",
    iata: "SVZ",
    name: "Juan Vicente Gómez International Airport",
    country: "VE"
  },
  {
    city: "Santa Bárbara",
    iata: "SBB",
    name: "Santa Bárbara de Barinas Airport",
    country: "VE"
  },
  {
    city: "Santa Elena de Uairén",
    iata: "SNV",
    name: "Santa Elena de Uairén Airport",
    country: "VE"
  },
  {
    city: "Santo Domingo",
    iata: "STD",
    name: "Mayor Buenaventura Vivas International Airport",
    country: "VE"
  },
  {
    city: "San Felipe",
    iata: "SNF",
    name: "Sub Teniente Nestor Arias Airport",
    country: "VE"
  },
  {
    city: "San Fernando de Apure",
    iata: "SFD",
    name: "San Fernando de Apure Las Flecheras National Airport",
    country: "VE"
  },
  {
    city: "El Tigre",
    iata: "SOM",
    name: "San Tomé Airport",
    country: "VE"
  },
  {
    city: "San Carlos del Zulia",
    iata: "STB",
    name: "Miguel Urdaneta Fernández Airport",
    country: "VE"
  },
  {
    city: "Tucupita",
    iata: "TUV",
    name: "Tucupita Airport",
    country: "VE"
  },
  {
    city: "nan",
    iata: "TMO",
    name: "Tumeremo Airport",
    country: "VE"
  },
  {
    city: "Urimán",
    iata: "URM",
    name: "Uriman Airport",
    country: "VE"
  },
  {
    city: "Uonquén",
    iata: "WOK",
    name: "Uon Quen Airport",
    country: "VE"
  },
  {
    city: "Valencia",
    iata: "VLN",
    name: "Arturo Michelena International Airport",
    country: "VE"
  },
  {
    city: "El Vigía",
    iata: "VIG",
    name: "Juan Pablo Pérez Alfonso Airport",
    country: "VE"
  },
  {
    city: "Valera",
    iata: "VLV",
    name: "Dr. Antonio Nicolás Briceño Airport",
    country: "VE"
  },
  {
    city: "nan",
    iata: "VDP",
    name: "Valle de La Pascua Airport",
    country: "VE"
  },
  {
    city: "Barcelos",
    iata: "BAZ",
    name: "Barcelos Airport",
    country: "Brazil"
  },
  {
    city: "São Benedito",
    iata: "JSB",
    name: "Walfrido Salmito de Almeida Airport",
    country: "Brazil"
  },
  {
    city: "Pontes e Lacerda",
    iata: "LCB",
    name: "André Antônio Maggi Airport",
    country: "Brazil"
  },
  {
    city: "Borba",
    iata: "RBB",
    name: "Borba Airport",
    country: "Brazil"
  },
  {
    city: "Carauari",
    iata: "CAF",
    name: "Carauari Airport",
    country: "Brazil"
  },
  {
    city: "Costa Marques",
    iata: "CQS",
    name: "Costa Marques Airport",
    country: "Brazil"
  },
  {
    city: "Diamantino",
    iata: "DMT",
    name: "Diamantino Airport",
    country: "Brazil"
  },
  {
    city: "Dianópolis",
    iata: "DNO",
    name: "Dianópolis Airport",
    country: "Brazil"
  },
  {
    city: "Eirunepé",
    iata: "ERN",
    name: "Eirunepé Airport",
    country: "Brazil"
  },
  {
    city: "Canarana",
    iata: "CQA",
    name: "Canarana Airport",
    country: "Brazil"
  },
  {
    city: "São Félix Do Araguaia",
    iata: "SXO",
    name: "São Félix do Araguaia Airport",
    country: "Brazil"
  },
  {
    city: "Gurupi",
    iata: "GRP",
    name: "Gurupi Airport",
    country: "Brazil"
  },
  {
    city: "Araguaína",
    iata: "AUX",
    name: "Araguaína Airport",
    country: "Brazil"
  },
  {
    city: "Água Boa",
    iata: "GGB",
    name: "Frederico Carlos Müller Airport",
    country: "Brazil"
  },
  {
    city: "Humaitá",
    iata: "HUW",
    name: "Humaitá Airport",
    country: "Brazil"
  },
  {
    city: "Santo Antônio do Içá",
    iata: "IPG",
    name: "Ipiranga Airport",
    country: "Brazil"
  },
  {
    city: "Cristalândia",
    iata: "IDO",
    name: "Santa Izabel do Morro Airport",
    country: "Brazil"
  },
  {
    city: "Juína",
    iata: "JIA",
    name: "Juína Airport",
    country: "Brazil"
  },
  {
    city: "Jataí",
    iata: "JTI",
    name: "Jataí Airport",
    country: "Brazil"
  },
  {
    city: "Cáceres",
    iata: "CCX",
    name: "Cáceres Airport",
    country: "Brazil"
  },
  {
    city: "Coari",
    iata: "CIZ",
    name: "Danilson Municipal Airport",
    country: "Brazil"
  },
  {
    city: "São Raimundo Nonato",
    iata: "NSR",
    name: "Serra da Capivara Airport",
    country: "Brazil"
  },
  {
    city: "Catalão",
    iata: "TLZ",
    name: "Catalão Airport",
    country: "Brazil"
  },
  {
    city: "Lábrea",
    iata: "LBR",
    name: "Lábrea Airport",
    country: "Brazil"
  },
  {
    city: "Rio Verde",
    iata: "RVD",
    name: "General Leite de Castro Airport",
    country: "Brazil"
  },
  {
    city: "Maués",
    iata: "MBZ",
    name: "Maués Airport",
    country: "Brazil"
  },
  {
    city: "Novo Aripuanã",
    iata: "NVP",
    name: "Novo Aripuanã Airport",
    country: "Brazil"
  },
  {
    city: "Boca do Acre",
    iata: "BCR",
    name: "Novo Campo Airport",
    country: "Brazil"
  },
  {
    city: "Niquelândia",
    iata: "NQL",
    name: "Niquelândia Airport",
    country: "Brazil"
  },
  {
    city: "Anápolis",
    iata: "APS",
    name: "Anápolis Airport",
    country: "Brazil"
  },
  {
    city: "Fonte Boa",
    iata: "FBA",
    name: "Fonte Boa Airport",
    country: "Brazil"
  },
  {
    city: "Parintins",
    iata: "PIN",
    name: "Parintins Airport",
    country: "Brazil"
  },
  {
    city: "Pimenta Bueno",
    iata: "PBQ",
    name: "Pimenta Bueno Airport",
    country: "Brazil"
  },
  {
    city: "Porto Alegre do Norte",
    iata: "PBX",
    name: "Fazenda Piraguassu Airport",
    country: "Brazil"
  },
  {
    city: "Santa Isabel do Rio Negro",
    iata: "IRZ",
    name: "Tapuruquara Airport",
    country: "Brazil"
  },
  {
    city: "Tangará da Serra",
    iata: "TGQ",
    name: "Tangará da Serra Airport",
    country: "Brazil"
  },
  {
    city: "Sapezal",
    iata: "AZL",
    name: "Fazenda Tucunaré Airport",
    country: "Brazil"
  },
  {
    city: "São Miguel do Araguaia",
    iata: "SQM",
    name: "São Miguel do Araguaia Airport",
    country: "Brazil"
  },
  {
    city: "Vila Rica",
    iata: "VLP",
    name: "Vila Rica Airport",
    country: "Brazil"
  },
  {
    city: "Matupá",
    iata: "MBK",
    name: "Orlando Villas Boas Regional Airport",
    country: "Brazil"
  },
  {
    city: "Nova Xavantina",
    iata: "NOK",
    name: "Xavantina Airport",
    country: "Brazil"
  },
  {
    city: "Apuí",
    iata: "IUP",
    name: "Apuí Airport",
    country: "Brazil"
  },
  {
    city: "Itambacuri",
    iata: "ITI",
    name: "Fazenda Americana Airport",
    country: "Brazil"
  },
  {
    city: "Nunam Iqua",
    iata: "SXP",
    name: "Nunam Iqua Airport",
    country: "United States"
  },
  {
    city: "Aishalton",
    iata: "AHL",
    name: "Aishalton Airport",
    country: "GY"
  },
  {
    city: "Annai",
    iata: "NAI",
    name: "Annai Airport",
    country: "GY"
  },
  {
    city: "Seal Bay",
    iata: "SYB",
    name: "Seal Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Baramita",
    iata: "BMJ",
    name: "Baramita Airport",
    country: "GY"
  },
  {
    city: "Bartica",
    iata: "GFO",
    name: "Bartica A Airport",
    country: "GY"
  },
  {
    city: "Georgetown",
    iata: "GEO",
    name: "Cheddi Jagan International Airport",
    country: "GY"
  },
  {
    city: "Gabriola Island",
    iata: "SYF",
    name: "Silva Bay Seaplane Base",
    country: "Canada"
  },
  {
    city: "Ogle",
    iata: "OGL",
    name: "Eugene F. Correia International Airport",
    country: "GY"
  },
  {
    city: "Imbaimadai",
    iata: "IMB",
    name: "Imbaimadai Airport",
    country: "GY"
  },
  {
    city: "Kaieteur Falls",
    iata: "KAI",
    name: "Kaieteur Airport",
    country: "GY"
  },
  {
    city: "Kamarang",
    iata: "KAR",
    name: "Kamarang Airport",
    country: "GY"
  },
  {
    city: "Karanambo",
    iata: "KRM",
    name: "Karanambo Airport",
    country: "GY"
  },
  {
    city: "Karasabai",
    iata: "KRG",
    name: "Karasabai Airport",
    country: "GY"
  },
  {
    city: "Kato",
    iata: "KTO",
    name: "Kato Airport",
    country: "GY"
  },
  {
    city: "Konawaruk",
    iata: "KKG",
    name: "Konawaruk Airport",
    country: "GY"
  },
  {
    city: "Camp Roberts/San Miguel",
    iata: "SYL",
    name: "Roberts Army Heliport",
    country: "United States"
  },
  {
    city: "Lumid Pau",
    iata: "LUB",
    name: "Lumid Pau Airport",
    country: "GY"
  },
  {
    city: "Lethem",
    iata: "LTM",
    name: "Lethem Airport",
    country: "GY"
  },
  {
    city: "Mabaruma",
    iata: "USI",
    name: "Mabaruma Airport",
    country: "GY"
  },
  {
    city: "Mahdia",
    iata: "MHA",
    name: "Mahdia Airport",
    country: "GY"
  },
  {
    city: "Maikwak",
    iata: "VEG",
    name: "Maikwak Airport",
    country: "GY"
  },
  {
    city: "Monkey Mountain",
    iata: "MYM",
    name: "Monkey Mountain Airport",
    country: "GY"
  },
  {
    city: "Matthews Ridge",
    iata: "MWJ",
    name: "Matthews Ridge Airport",
    country: "GY"
  },
  {
    city: "New Amsterdam",
    iata: "QSX",
    name: "New Amsterdam Airport",
    country: "GY"
  },
  {
    city: "Orinduik",
    iata: "ORJ",
    name: "Orinduik Airport",
    country: "GY"
  },
  {
    city: "Port Kaituma",
    iata: "PKM",
    name: "Port Kaituma Airport",
    country: "GY"
  },
  {
    city: "Pipillipai",
    iata: "PIQ",
    name: "Pipillipai Airport",
    country: "GY"
  },
  {
    city: "Paramakatoi",
    iata: "PMT",
    name: "Paramakatoi Airport",
    country: "GY"
  },
  {
    city: "Paruima",
    iata: "PRR",
    name: "Paruima Airport",
    country: "GY"
  },
  {
    city: "Sand Creek",
    iata: "SDC",
    name: "Sand Creek Airport",
    country: "GY"
  },
  {
    city: "Skeldon",
    iata: "SKM",
    name: "Skeldon Airport",
    country: "GY"
  },
  {
    city: "Osbourn",
    iata: "ANU",
    name: "V. C. Bird International Airport",
    country: "AG"
  },
  {
    city: "Bridgetown",
    iata: "BGI",
    name: "Grantley Adams International Airport",
    country: "BB"
  },
  {
    city: "Tabal Island",
    iata: "TBV",
    name: "Tabal Airstrip",
    country: "MH"
  },
  {
    city: "Takotna",
    iata: "TCT",
    name: "Takotna Airport",
    country: "United States"
  },
  {
    city: "Canefield",
    iata: "DCF",
    name: "Canefield Airport",
    country: "DM"
  },
  {
    city: "Marigot",
    iata: "DOM",
    name: "Douglas-Charles Airport",
    country: "DM"
  },
  {
    city: "Grande Anse",
    iata: "DSD",
    name: "La Désirade Airport",
    country: "GP"
  },
  {
    city: "Basse-Terre",
    iata: "BBR",
    name: "Basse-Terre Baillif Airport",
    country: "GP"
  },
  {
    city: "St-François",
    iata: "SFC",
    name: "St-François Airport",
    country: "GP"
  },
  {
    city: "Fort-de-France",
    iata: "FDF",
    name: "Martinique Aimé Césaire International Airport",
    country: "MQ"
  },
  {
    city: "Grand Case",
    iata: "SFG",
    name: "Grand Case-l'Espérance Airport",
    country: "MF"
  },
  {
    city: "Gustavia",
    iata: "SBH",
    name: "St. Jean Airport",
    country: "BL"
  },
  {
    city: "Grand-Bourg",
    iata: "GBJ",
    name: "Marie-Galante Airport",
    country: "GP"
  },
  {
    city: "Pointe-à-Pitre",
    iata: "PTP",
    name: "Maryse Condé International Airport",
    country: "GP"
  },
  {
    city: "Les Saintes",
    iata: "LSS",
    name: "Terre-de-Haut Airport",
    country: "GP"
  },
  {
    city: "Saint George's",
    iata: "GND",
    name: "Maurice Bishop International Airport",
    country: "GD"
  },
  {
    city: "Carriacou Island",
    iata: "CRU",
    name: "Lauriston Airport",
    country: "GD"
  },
  {
    city: "Trincomalee",
    iata: "THW",
    name: "Trincomalee Harbor Waterdrome",
    country: "Sri Lanka"
  },
  {
    city: "Charlotte Amalie",
    iata: "STT",
    name: "Cyril E. King Airport",
    country: "VI"
  },
  {
    city: "Christiansted",
    iata: "STX",
    name: "Henry E. Rohlsen Airport",
    country: "VI"
  },
  {
    city: "Arecibo",
    iata: "ARE",
    name: "Antonio Nery Juarbe Pol Airport",
    country: "PR"
  },
  {
    city: "Aguadilla",
    iata: "BQN",
    name: "Rafael Hernández International Airport",
    country: "PR"
  },
  {
    city: "Ticantiquí",
    iata: "TJC",
    name: "Ticantiquí Airport",
    country: "PA"
  },
  {
    city: "Culebra",
    iata: "CPX",
    name: "Benjamin Rivera Noriega Airport",
    country: "PR"
  },
  {
    city: "San Juan",
    iata: "SIG",
    name: "Fernando Luis Ribas Dominicci Airport",
    country: "PR"
  },
  {
    city: "Mayaguez",
    iata: "MAZ",
    name: "Eugenio Maria De Hostos Airport",
    country: "PR"
  },
  {
    city: "Ponce",
    iata: "PSE",
    name: "Mercedita International Airport",
    country: "PR"
  },
  {
    city: "Ceiba",
    iata: "NRR",
    name: "José Aponte de la Torre Airport",
    country: "PR"
  },
  {
    city: "San Juan",
    iata: "SJU",
    name: "Luis Munoz Marin International Airport",
    country: "PR"
  },
  {
    city: "Vieques",
    iata: "VQS",
    name: "Antonio Rivera Rodriguez Airport",
    country: "PR"
  },
  {
    city: "Tenakee Springs",
    iata: "TKE",
    name: "Tenakee Seaplane Base",
    country: "United States"
  },
  {
    city: "Taku Lodge",
    iata: "TKL",
    name: "Taku Lodge Seaplane Base",
    country: "United States"
  },
  {
    city: "Basseterre",
    iata: "SKB",
    name: "Robert L. Bradshaw International Airport",
    country: "KN"
  },
  {
    city: "Charlestown",
    iata: "NEV",
    name: "Vance W. Amory International Airport",
    country: "KN"
  },
  {
    city: "Castries",
    iata: "SLU",
    name: "George F. L. Charles Airport",
    country: "LC"
  },
  {
    city: "Vieux Fort",
    iata: "UVF",
    name: "Hewanorra International Airport",
    country: "LC"
  },
  {
    city: "Tuluksak",
    iata: "TLT",
    name: "Tuluksak Airport",
    country: "United States"
  },
  {
    city: "Balkanabat",
    iata: "BKN",
    name: "Balkanabat International Airport",
    country: "TM"
  },
  {
    city: "Oranjestad",
    iata: "AUA",
    name: "Queen Beatrix International Airport",
    country: "AW"
  },
  {
    city: "Kralendijk",
    iata: "BON",
    name: "Flamingo International Airport",
    country: "BQ"
  },
  {
    city: "Willemstad",
    iata: "CUR",
    name: "Hato International Airport",
    country: "CW"
  },
  {
    city: "Oranjestad",
    iata: "EUX",
    name: "F. D. Roosevelt Airport",
    country: "BQ"
  },
  {
    city: "Sint Maarten",
    iata: "SXM",
    name: "Princess Juliana International Airport",
    country: "SX"
  },
  {
    city: "Zion's Hill",
    iata: "SAB",
    name: "Juancho E. Yrausquin Airport",
    country: "BQ"
  },
  {
    city: "Torokina",
    iata: "TOK",
    name: "Torokina Airport",
    country: "PG"
  },
  {
    city: "Tortola",
    iata: "TOV",
    name: "Tortola West End Seaplane Base",
    country: "VG"
  },
  {
    city: "Tapeta",
    iata: "TPT",
    name: "Tapeta Airport",
    country: "LR"
  },
  {
    city: "The Valley",
    iata: "AXA",
    name: "Clayton J. Lloyd International Airport",
    country: "AI"
  },
  {
    city: "Serik",
    iata: "XXX",
    name: "Serik Bus Station Helipad",
    country: "Turkey"
  },
  {
    city: "Gerald's Park",
    iata: "MNI",
    name: "John A. Osborne Airport",
    country: "MS"
  },
  {
    city: "Tanacross",
    iata: "TSG",
    name: "Tanacross Airport",
    country: "United States"
  },
  {
    city: "Tsile Tsile",
    iata: "TSI",
    name: "Tsile Tsile Airport",
    country: "PG"
  },
  {
    city: "Scarborough",
    iata: "TAB",
    name: "A.N.R. Robinson International Airport",
    country: "TT"
  },
  {
    city: "Port of Spain",
    iata: "POS",
    name: "Piarco International Airport",
    country: "TT"
  },
  {
    city: "Tissamaharama",
    iata: "TTW",
    name: "Tissa Tank Waterdrome",
    country: "Sri Lanka"
  },
  {
    city: "Tum",
    iata: "TUJ",
    name: "Tum Airport",
    country: "ET"
  },
  {
    city: "Anegada",
    iata: "NGD",
    name: "Captain Auguste George Airport",
    country: "VG"
  },
  {
    city: "Beef Island",
    iata: "EIS",
    name: "Terrance B. Lettsome International Airport",
    country: "VG"
  },
  {
    city: "Spanish Town",
    iata: "VIJ",
    name: "Virgin Gorda Airport",
    country: "VG"
  },
  {
    city: "Kingstown",
    iata: "SVD",
    name: "Argyle International Airport",
    country: "VC"
  },
  {
    city: "Bequia",
    iata: "BQU",
    name: "J F Mitchell Airport",
    country: "VC"
  },
  {
    city: "Canouan",
    iata: "CIW",
    name: "Canouan Airport",
    country: "VC"
  },
  {
    city: "Lovell",
    iata: "MQS",
    name: "Mustique Airport",
    country: "VC"
  },
  {
    city: "Union Island",
    iata: "UNI",
    name: "Union Island International Airport",
    country: "VC"
  },
  {
    city: "Tumxuk",
    iata: "TWC",
    name: "Tumxuk Tangwangcheng Airport",
    country: "China"
  },
  {
    city: "Two Harbors",
    iata: "TWH",
    name: "Two Harbors Amphibious Terminal",
    country: "United States"
  },
  {
    city: "Hamilton",
    iata: "BDA",
    name: "L.F. Wade International Airport",
    country: "BM"
  },
  {
    city: "Tyonek",
    iata: "TYE",
    name: "Tyonek Airport",
    country: "United States"
  },
  {
    city: "Geita",
    iata: "GIT",
    name: "Mchauru Airport",
    country: "TZ"
  },
  {
    city: "Ankisatra",
    iata: "TZO",
    name: "Tsimiroro Airport",
    country: "MG"
  },
  {
    city: "Dubois",
    iata: "DBS",
    name: "Dubois Municipal Airport",
    country: "United States"
  },
  {
    city: "Myrhorod",
    iata: "MXR",
    name: "Myrhorod Air Base",
    country: "Ukraine"
  },
  {
    city: "Kremenchuk",
    iata: "KHU",
    name: "Kakhnovka Airfield",
    country: "Ukraine"
  },
  {
    city: "Kamyan'ka",
    iata: "KCP",
    name: "Kam'yanets'-Podil's'kyi Airfield",
    country: "Ukraine"
  },
  {
    city: "Almaty",
    iata: "ALA",
    name: "Almaty International Airport",
    country: "KZ"
  },
  {
    city: "Balkhash",
    iata: "BXH",
    name: "Balkhash Airport",
    country: "KZ"
  },
  {
    city: "Usharal",
    iata: "USJ",
    name: "Usharal Airport",
    country: "KZ"
  },
  {
    city: "Boralday",
    iata: "BXJ",
    name: "Boralday Airport",
    country: "KZ"
  },
  {
    city: "Taldykorgan",
    iata: "TDK",
    name: "Taldykorgan Airport",
    country: "KZ"
  },
  {
    city: "Astana",
    iata: "NQZ",
    name: "Nursultan Nazarbayev International Airport",
    country: "KZ"
  },
  {
    city: "Kokshetau",
    iata: "KOV",
    name: "Kokshetau International Airport",
    country: "KZ"
  },
  {
    city: "Petropavl",
    iata: "PPK",
    name: "Petropavl International Airport",
    country: "KZ"
  },
  {
    city: "Taraz",
    iata: "DMB",
    name: "Taraz International Airport",
    country: "KZ"
  },
  {
    city: "Bishkek",
    iata: "BSZ",
    name: "Manas International Airport",
    country: "KG"
  },
  {
    city: "Osh",
    iata: "OSS",
    name: "Osh International Airport",
    country: "KG"
  },
  {
    city: "Karakol",
    iata: "IKG",
    name: "Karakol Airport",
    country: "KG"
  },
  {
    city: "Shymkent",
    iata: "CIT",
    name: "Shymkent International Airport",
    country: "KZ"
  },
  {
    city: "Turkıstan",
    iata: "HSA",
    name: "Hazrat Sultan International Airport",
    country: "KZ"
  },
  {
    city: "Zhezkazgan",
    iata: "DZN",
    name: "Zhezkazgan National Airport",
    country: "KZ"
  },
  {
    city: "Karaganda",
    iata: "KGF",
    name: "Sary-Arka Airport",
    country: "KZ"
  },
  {
    city: "Baikonur",
    iata: "BXY",
    name: "Baikonur Krayniy International Airport",
    country: "KZ"
  },
  {
    city: "Kyzylorda",
    iata: "KZO",
    name: "Korkyt Ata International Airport",
    country: "KZ"
  },
  {
    city: "Uralsk",
    iata: "URA",
    name: "Manshuk Mametova International Airport",
    country: "KZ"
  },
  {
    city: "Ekibastuz",
    iata: "EKB",
    name: "Ekibastuz Airport",
    country: "KZ"
  },
  {
    city: "Ust-Kamenogorsk (Oskemen)",
    iata: "UKK",
    name: "Oskemen International Airport",
    country: "KZ"
  },
  {
    city: "Pavlodar",
    iata: "PWQ",
    name: "Pavlodar International Airport",
    country: "KZ"
  },
  {
    city: "Semey",
    iata: "PLX",
    name: "Semei International Airport",
    country: "KZ"
  },
  {
    city: "Zaysan",
    iata: "SZI",
    name: "Zaysan Airport",
    country: "KZ"
  },
  {
    city: "Aktau",
    iata: "SCO",
    name: "Aktau International Airport",
    country: "KZ"
  },
  {
    city: "Atyrau",
    iata: "GUW",
    name: "Atyrau International Airport",
    country: "KZ"
  },
  {
    city: "Aktobe",
    iata: "AKX",
    name: "Aktobe International Airport",
    country: "KZ"
  },
  {
    city: "Arkalyk",
    iata: "AYK",
    name: "Arkalyk North Airport",
    country: "KZ"
  },
  {
    city: "Kostanay",
    iata: "KSN",
    name: "Kostanay International Airport",
    country: "KZ"
  },
  {
    city: "Baku",
    iata: "GYD",
    name: "Heydar Aliyev International Airport",
    country: "AZ"
  },
  {
    city: "Fuzuli",
    iata: "FZL",
    name: "Fuzuli International Airport",
    country: "AZ"
  },
  {
    city: "Ganja",
    iata: "GNJ",
    name: "Ganja International Airport",
    country: "AZ"
  },
  {
    city: "Lankaran",
    iata: "LLK",
    name: "Lankaran International Airport",
    country: "AZ"
  },
  {
    city: "Nakhchivan",
    iata: "NAJ",
    name: "Nakhchivan International Airport",
    country: "AZ"
  },
  {
    city: "Gabala",
    iata: "GBB",
    name: "Gabala International Airport",
    country: "AZ"
  },
  {
    city: "Zaqatala",
    iata: "ZTU",
    name: "Zaqatala International Airport",
    country: "AZ"
  },
  {
    city: "Zangilan",
    iata: "ZZE",
    name: "Zangilan International Airport",
    country: "AZ"
  },
  {
    city: "Yevlakh",
    iata: "YLV",
    name: "Yevlakh Airport",
    country: "AZ"
  },
  {
    city: "Tamchy",
    iata: "IKU",
    name: "Issyk-Kul International Airport",
    country: "KG"
  },
  {
    city: "Gyumri",
    iata: "LWN",
    name: "Shirak International Airport",
    country: "AM"
  },
  {
    city: "Yerevan",
    iata: "EVN",
    name: "Zvartnots International Airport",
    country: "AM"
  },
  {
    city: "Batagay",
    iata: "BQJ",
    name: "Batagay Airport",
    country: "Russia"
  },
  {
    city: "Batagay-Alyta",
    iata: "SUK",
    name: "Sakkyryr Airport",
    country: "Russia"
  },
  {
    city: "Ust-Kuyga",
    iata: "UKG",
    name: "Ust-Kuyga Airport",
    country: "Russia"
  },
  {
    city: "Talakan Oil Field",
    iata: "TLK",
    name: "Talakan Airport",
    country: "Russia"
  },
  {
    city: "Aldan",
    iata: "ADH",
    name: "Aldan Airport",
    country: "Russia"
  },
  {
    city: "Yakutsk",
    iata: "YKS",
    name: "Platon Oyunsky Yakutsk International Airport",
    country: "Russia"
  },
  {
    city: "Neryungri",
    iata: "NER",
    name: "Chulman Airport",
    country: "Russia"
  },
  {
    city: "Khonuu",
    iata: "MQJ",
    name: "Moma Airport",
    country: "Russia"
  },
  {
    city: "Khandyga",
    iata: "KDY",
    name: "Typliy Klyuch Airport",
    country: "Russia"
  },
  {
    city: "Magan",
    iata: "GYG",
    name: "Magan Airport",
    country: "Russia"
  },
  {
    city: "Olyokminsk",
    iata: "OLZ",
    name: "Olyokminsk Airport",
    country: "Russia"
  },
  {
    city: "Ust-Nera",
    iata: "USR",
    name: "Ust-Nera Airport",
    country: "Russia"
  },
  {
    city: "Ust-Maya",
    iata: "UMS",
    name: "Ust-Maya Airport",
    country: "Russia"
  },
  {
    city: "Verkhnevilyuisk",
    iata: "VHV",
    name: "Verkhnevilyuisk Airport",
    country: "Russia"
  },
  {
    city: "Nyurba",
    iata: "NYR",
    name: "Nyurba Airport",
    country: "Russia"
  },
  {
    city: "Suntar",
    iata: "SUY",
    name: "Suntar Airport",
    country: "Russia"
  },
  {
    city: "Vilyuisk",
    iata: "VYI",
    name: "Vilyuisk Airport",
    country: "Russia"
  },
  {
    city: "Lensk",
    iata: "ULK",
    name: "Lensk Airport",
    country: "Russia"
  },
  {
    city: "Olenyok",
    iata: "ONK",
    name: "Olenyok Airport",
    country: "Russia"
  },
  {
    city: "Yakutia",
    iata: "PYJ",
    name: "Polyarny Airport",
    country: "Russia"
  },
  {
    city: "Mirny",
    iata: "MJZ",
    name: "Mirny Airport",
    country: "Russia"
  },
  {
    city: "Saskylakh",
    iata: "SYS",
    name: "Saskylakh Airport",
    country: "Russia"
  },
  {
    city: "Belaya Gora",
    iata: "BGN",
    name: "Belaya Gora Airport",
    country: "Russia"
  },
  {
    city: "Srednekolymsk",
    iata: "SEK",
    name: "Srednekolymsk Airport",
    country: "Russia"
  },
  {
    city: "Chokurdah",
    iata: "CKH",
    name: "Chokurdakh Airport",
    country: "Russia"
  },
  {
    city: "Cherskiy",
    iata: "CYX",
    name: "Cherskiy Airport",
    country: "Russia"
  },
  {
    city: "Tiksi",
    iata: "IKS",
    name: "Tiksi Airport",
    country: "Russia"
  },
  {
    city: "Zyryanka",
    iata: "ZKP",
    name: "Zyryanka Airport",
    country: "Russia"
  },
  {
    city: "Zhigansk",
    iata: "ZIX",
    name: "Zhigansk Airport",
    country: "Russia"
  },
  {
    city: "Kisoro",
    iata: "KXO",
    name: "Kisoro Airport",
    country: "UG"
  },
  {
    city: "Kihihi",
    iata: "KHX",
    name: "Savannah Airstrip",
    country: "UG"
  },
  {
    city: "Moyo",
    iata: "OYG",
    name: "Moyo Airport",
    country: "UG"
  },
  {
    city: "Pilot Point",
    iata: "UGB",
    name: "Ugashik Bay Airport",
    country: "United States"
  },
  {
    city: "Kopitnari",
    iata: "KUT",
    name: "David the Builder Kutaisi International Airport",
    country: "GE"
  },
  {
    city: "Batumi",
    iata: "BUS",
    name: "Alexander Kartveli Batumi International Airport",
    country: "GE"
  },
  {
    city: "Sukhumi",
    iata: "SUI",
    name: "Vladislav Ardzinba Sukhum International Airport",
    country: "GE"
  },
  {
    city: "Tbilisi",
    iata: "TBS",
    name: "Tbilisi International Airport",
    country: "GE"
  },
  {
    city: "Blagoveschensk",
    iata: "BQS",
    name: "Ignatyevo Airport",
    country: "Russia"
  },
  {
    city: "Zeya",
    iata: "EYA",
    name: "Zeya Airport",
    country: "Russia"
  },
  {
    city: "Tynda",
    iata: "TYD",
    name: "Tynda Airport",
    country: "Russia"
  },
  {
    city: "Khabarovsk",
    iata: "KHV",
    name: "Khabarovsk Novy Airport",
    country: "Russia"
  },
  {
    city: "Komsomolsk-on-Amur",
    iata: "KXK",
    name: "Komsomolsk-on-Amur Airport",
    country: "Russia"
  },
  {
    city: "Sovetskaya Gavan",
    iata: "GVN",
    name: "Sovetskaya Gavan (Maygatka) Airport",
    country: "Russia"
  },
  {
    city: "Anadyr",
    iata: "DYR",
    name: "Ugolny Yuri Ryktheu Airport",
    country: "Russia"
  },
  {
    city: "Chukotka",
    iata: "PVS",
    name: "Provideniya Bay Airport",
    country: "Russia"
  },
  {
    city: "Keperveem",
    iata: "KPW",
    name: "Keperveem Airport",
    country: "Russia"
  },
  {
    city: "Magadan",
    iata: "GDX",
    name: "Sokol Airport",
    country: "Russia"
  },
  {
    city: "Markovo",
    iata: "KVM",
    name: "Markovo Airport",
    country: "Russia"
  },
  {
    city: "Apapelgino",
    iata: "PWE",
    name: "Pevek Airport",
    country: "Russia"
  },
  {
    city: "Evensk",
    iata: "SWV",
    name: "Severo-Evensk Airport",
    country: "Russia"
  },
  {
    city: "Bogorodskoye",
    iata: "BQG",
    name: "Bogorodskoye Airport",
    country: "Russia"
  },
  {
    city: "Nikolayevsk-na-Amure Airport",
    iata: "NLI",
    name: "Nikolayevsk-na-Amure Airport",
    country: "Russia"
  },
  {
    city: "Okhotsk",
    iata: "OHO",
    name: "Okhotsk Airport",
    country: "Russia"
  },
  {
    city: "Petropavlovsk-Kamchatsky",
    iata: "PKC",
    name: "Yelizovo Airport",
    country: "Russia"
  },
  {
    city: "Kurilsk",
    iata: "BVV",
    name: "Burevestnik Airport",
    country: "Russia"
  },
  {
    city: "Okha",
    iata: "OHH",
    name: "Okha Airport",
    country: "Russia"
  },
  {
    city: "Kurilsk",
    iata: "ITU",
    name: "Iturup Airport",
    country: "Russia"
  },
  {
    city: "Shakhtyorsk",
    iata: "EKS",
    name: "Shakhtyorsk Airport",
    country: "Russia"
  },
  {
    city: "Yuzhno-Kurilsk",
    iata: "DEE",
    name: "Yuzhno-Kurilsk Mendeleyevo Airport",
    country: "Russia"
  },
  {
    city: "Nogliki",
    iata: "NGK",
    name: "Nogliki Airport",
    country: "Russia"
  },
  {
    city: "Tymovskoye",
    iata: "ZZO",
    name: "Zonalnoye Airport",
    country: "Russia"
  },
  {
    city: "Yuzhno-Sakhalinsk",
    iata: "UUS",
    name: "Yuzhno-Sakhalinsk International Airport",
    country: "Russia"
  },
  {
    city: "Amgu",
    iata: "AEM",
    name: "Amgu Airport",
    country: "Russia"
  },
  {
    city: "Svetlaya",
    iata: "ETL",
    name: "Svetlaya Airport",
    country: "Russia"
  },
  {
    city: "Yedinka",
    iata: "EDN",
    name: "Yedinka Airport",
    country: "Russia"
  },
  {
    city: "Kavalerovo",
    iata: "KVR",
    name: "Kavalerovo Airport",
    country: "Russia"
  },
  {
    city: "Plastun",
    iata: "TLY",
    name: "Plastun Airport",
    country: "Russia"
  },
  {
    city: "Terney",
    iata: "NEI",
    name: "Terney Airport",
    country: "Russia"
  },
  {
    city: "Artyom",
    iata: "VVO",
    name: "Vladivostok International Airport",
    country: "Russia"
  },
  {
    city: "Chita",
    iata: "HTA",
    name: "Chita-Kadala International Airport",
    country: "Russia"
  },
  {
    city: "Chara",
    iata: "CZR",
    name: "Chara Airport",
    country: "Russia"
  },
  {
    city: "Bratsk",
    iata: "BTK",
    name: "Bratsk Airport",
    country: "Russia"
  },
  {
    city: "Ust-Ilimsk",
    iata: "UIK",
    name: "Ust-Ilimsk Airport",
    country: "Russia"
  },
  {
    city: "Irkutsk",
    iata: "IKT",
    name: "Irkutsk International Airport",
    country: "Russia"
  },
  {
    city: "Bodaybo",
    iata: "ODO",
    name: "Bodaybo Airport",
    country: "Russia"
  },
  {
    city: "Erbogachen",
    iata: "ERG",
    name: "Yerbogachen Airport",
    country: "Russia"
  },
  {
    city: "Kirensk",
    iata: "KCK",
    name: "Kirensk Airport",
    country: "Russia"
  },
  {
    city: "Preobrazheniye",
    iata: "RZH",
    name: "Preobrazheniye Airport",
    country: "Russia"
  },
  {
    city: "Ust-Kut",
    iata: "UKX",
    name: "Ust-Kut Airport",
    country: "Russia"
  },
  {
    city: "Nizhneangarsk",
    iata: "NZG",
    name: "Nizhneangarsk International Airport",
    country: "Russia"
  },
  {
    city: "Ulan Ude",
    iata: "UUD",
    name: "Baikal International Airport",
    country: "Russia"
  },
  {
    city: "Boryspil",
    iata: "KBP",
    name: "Boryspil International Airport",
    country: "Ukraine"
  },
  {
    city: "Kramatorsk",
    iata: "KRQ",
    name: "Kramatorsk Airport",
    country: "Ukraine"
  },
  {
    city: "Mariupol",
    iata: "MPW",
    name: "Mariupol International Airport",
    country: "Ukraine"
  },
  {
    city: "Berdyansk",
    iata: "ERD",
    name: "Berdyansk Airport",
    country: "Ukraine"
  },
  {
    city: "Dnipro",
    iata: "DNK",
    name: "Dnipro International Airport",
    country: "Ukraine"
  },
  {
    city: "Zaporizhia",
    iata: "OZH",
    name: "Zaporizhzhia International Airport",
    country: "Ukraine"
  },
  {
    city: "Kryvyi Rih",
    iata: "KWG",
    name: "Kryvyi Rih International Airport",
    country: "Ukraine"
  },
  {
    city: "Sevastopol",
    iata: "UKS",
    name: "Sevastopol International Airport / Belbek Air Base",
    country: "Ukraine"
  },
  {
    city: "Simferopol",
    iata: "SIP",
    name: "Simferopol International Airport",
    country: "Ukraine"
  },
  {
    city: "Kerch",
    iata: "KHC",
    name: "Kerch Airport",
    country: "Ukraine"
  },
  {
    city: "Mukhaizna Oil Field",
    iata: "UKH",
    name: "Mukhaizna Airport",
    country: "OM"
  },
  {
    city: "Kharkiv",
    iata: "HRK",
    name: "Kharkiv International Airport",
    country: "Ukraine"
  },
  {
    city: "Poltava",
    iata: "PLV",
    name: "Suprunovka Airport",
    country: "Ukraine"
  },
  {
    city: "Sumy",
    iata: "UMY",
    name: "Sumy Airport",
    country: "Ukraine"
  },
  {
    city: "Cherkasy",
    iata: "CKC",
    name: "Cherkasy International Airport",
    country: "Ukraine"
  },
  {
    city: "Kirovograd",
    iata: "KGO",
    name: "Kirovograd Airport",
    country: "Ukraine"
  },
  {
    city: "Kyiv",
    iata: "IEV",
    name: "Ihor Sikorsky Kyiv International Airport (Zhuliany)",
    country: "Ukraine"
  },
  {
    city: "Zhytomyr",
    iata: "ZTR",
    name: "Zhytomyr Airport",
    country: "Ukraine"
  },
  {
    city: "Lutsk",
    iata: "UCK",
    name: "Lutsk Airport",
    country: "Ukraine"
  },
  {
    city: "Khmelnytskyi",
    iata: "HMJ",
    name: "Khmelnytskyi Airport",
    country: "Ukraine"
  },
  {
    city: "Ivano-Frankivsk",
    iata: "IFO",
    name: "Ivano-Frankivsk International Airport",
    country: "Ukraine"
  },
  {
    city: "Lviv",
    iata: "LWO",
    name: "Lviv International Airport",
    country: "Ukraine"
  },
  {
    city: "Chernivtsi",
    iata: "CWC",
    name: "Chernivtsi International Airport",
    country: "Ukraine"
  },
  {
    city: "Rivne",
    iata: "RWN",
    name: "Rivne International Airport",
    country: "Ukraine"
  },
  {
    city: "Ternopil",
    iata: "TNL",
    name: "Ternopil International Airport",
    country: "Ukraine"
  },
  {
    city: "Uzhhorod",
    iata: "UDJ",
    name: "Uzhhorod International Airport",
    country: "Ukraine"
  },
  {
    city: "Kherson",
    iata: "KHE",
    name: "Kherson International Airport",
    country: "Ukraine"
  },
  {
    city: "Odesa",
    iata: "ODS",
    name: "Odesa International Airport",
    country: "Ukraine"
  },
  {
    city: "Vinnitsa",
    iata: "VIN",
    name: "Vinnytsia/Gavyryshivka International Airport",
    country: "Ukraine"
  },
  {
    city: "Archangelsk",
    iata: "ARH",
    name: "Talagi Airport",
    country: "Russia"
  },
  {
    city: "Arkhangelsk",
    iata: "VKV",
    name: "Vaskovo Airport",
    country: "Russia"
  },
  {
    city: "Leshukonskoye",
    iata: "LDG",
    name: "Leshukonskoye Airport",
    country: "Russia"
  },
  {
    city: "Naryan Mar",
    iata: "NNM",
    name: "Naryan Mar Airport",
    country: "Russia"
  },
  {
    city: "Solovetsky Islands",
    iata: "CSH",
    name: "Solovki Airport",
    country: "Russia"
  },
  {
    city: "Amderma",
    iata: "AMV",
    name: "Amderma Airport",
    country: "Russia"
  },
  {
    city: "Varandey",
    iata: "VRI",
    name: "Varandey Airport",
    country: "Russia"
  },
  {
    city: "Kotlas",
    iata: "KSZ",
    name: "Kotlas Airport",
    country: "Russia"
  },
  {
    city: "St. Petersburg",
    iata: "LED",
    name: "Pulkovo Airport",
    country: "Russia"
  },
  {
    city: "Murmansk",
    iata: "MMK",
    name: "Emperor Nicholas II Murmansk Airport",
    country: "Russia"
  },
  {
    city: "Pskov",
    iata: "PKV",
    name: "Princess Olga Pskov International Airport",
    country: "Russia"
  },
  {
    city: "Petrozavodsk",
    iata: "PES",
    name: "Petrozavodsk Airport",
    country: "Russia"
  },
  {
    city: "Cherepovets",
    iata: "CEE",
    name: "Cherepovets Airport",
    country: "Russia"
  },
  {
    city: "Velikiy Ustyug",
    iata: "VUS",
    name: "Velikiy Ustyug Airport",
    country: "Russia"
  },
  {
    city: "Vologda",
    iata: "VGD",
    name: "Vologda Airport",
    country: "Russia"
  },
  {
    city: "Brest",
    iata: "BQT",
    name: "Brest International Airport",
    country: "BY"
  },
  {
    city: "Gomel",
    iata: "GME",
    name: "Gomel Airport",
    country: "BY"
  },
  {
    city: "Vitebsk",
    iata: "VTB",
    name: "Vitebsk Vostochny Airport",
    country: "BY"
  },
  {
    city: "Kaliningrad",
    iata: "KGD",
    name: "Khrabrovo Airport",
    country: "Russia"
  },
  {
    city: "Hrodna",
    iata: "GNA",
    name: "Hrodna Airport",
    country: "BY"
  },
  {
    city: "Minsk",
    iata: "MSQ",
    name: "Minsk National Airport",
    country: "BY"
  },
  {
    city: "Mogilev",
    iata: "MVQ",
    name: "Mogilev Airport",
    country: "BY"
  },
  {
    city: "Abakan",
    iata: "ABA",
    name: "Abakan International Airport",
    country: "Russia"
  },
  {
    city: "Barnaul",
    iata: "BAX",
    name: "Barnaul Gherman Titov International Airport",
    country: "Russia"
  },
  {
    city: "Gorno-Altaysk",
    iata: "RGK",
    name: "Gorno-Altaysk Airport",
    country: "Russia"
  },
  {
    city: "Kemerovo",
    iata: "KEJ",
    name: "Alexei Leonov Kemerovo International Airport",
    country: "Russia"
  },
  {
    city: "Baykit",
    iata: "BKA",
    name: "Baykit Airport",
    country: "Russia"
  },
  {
    city: "Yeniseysk",
    iata: "EIE",
    name: "Yeniseysk Airport",
    country: "Russia"
  },
  {
    city: "Yartsevo",
    iata: "YAE",
    name: "Yartsevo Airport",
    country: "Russia"
  },
  {
    city: "Bor",
    iata: "TGP",
    name: "Podkamennaya Tunguska Airport",
    country: "Russia"
  },
  {
    city: "Severo-Yeniseysk",
    iata: "VEO",
    name: "Severo-Yeniseysk Airport",
    country: "Russia"
  },
  {
    city: "Tura",
    iata: "GOY",
    name: "Tura Mountain Airport",
    country: "Russia"
  },
  {
    city: "Vanavara",
    iata: "VAQ",
    name: "Vanavara Airport",
    country: "Russia"
  },
  {
    city: "Boguchany",
    iata: "BGS",
    name: "Boguchany Airport",
    country: "Russia"
  },
  {
    city: "nan",
    iata: "KNY",
    name: "Kodinsk Airport",
    country: "Russia"
  },
  {
    city: "Krasnoyarsk",
    iata: "KJA",
    name: "Krasnoyarsk International Airport",
    country: "Russia"
  },
  {
    city: "Krasnoyarsk",
    iata: "KCY",
    name: "Krasnoyarsk Cheremshanka Airport",
    country: "Russia"
  },
  {
    city: "Achinsk",
    iata: "ACS",
    name: "Achinsk Airport",
    country: "Russia"
  },
  {
    city: "Kyzyl",
    iata: "KYZ",
    name: "Kyzyl Airport",
    country: "Russia"
  },
  {
    city: "Novosibirsk",
    iata: "OVB",
    name: "Novosibirsk Tolmachevo Airport",
    country: "Russia"
  },
  {
    city: "Omsk",
    iata: "OMS",
    name: "Omsk Central Airport",
    country: "Russia"
  },
  {
    city: "Strezhevoy",
    iata: "SWT",
    name: "Strezhevoy Airport",
    country: "Russia"
  },
  {
    city: "Tomsk",
    iata: "TOF",
    name: "Tomsk Kamov Airport",
    country: "Russia"
  },
  {
    city: "Novokuznetsk",
    iata: "NOZ",
    name: "Spichenkovo Airport",
    country: "Russia"
  },
  {
    city: "Dikson",
    iata: "DKS",
    name: "Dikson Airport",
    country: "Russia"
  },
  {
    city: "Khatanga",
    iata: "HTG",
    name: "Khatanga Airport",
    country: "Russia"
  },
  {
    city: "Svetlogorsk",
    iata: "SES",
    name: "Svetlogorsk Airport",
    country: "Russia"
  },
  {
    city: "Igarka",
    iata: "IAA",
    name: "Igarka Airport",
    country: "Russia"
  },
  {
    city: "Norilsk",
    iata: "NSK",
    name: "Alykel International Airport",
    country: "Russia"
  },
  {
    city: "Turukhansk",
    iata: "THX",
    name: "Turukhansk Airport",
    country: "Russia"
  },
  {
    city: "Krasnyi Kurgan",
    iata: "AAQ",
    name: "Anapa Vityazevo Airport",
    country: "Russia"
  },
  {
    city: "Gelendzhik",
    iata: "GDZ",
    name: "Gelendzhik Airport",
    country: "Russia"
  },
  {
    city: "Krasnodar",
    iata: "KRR",
    name: "Krasnodar Pashkovsky International Airport",
    country: "Russia"
  },
  {
    city: "Grozny",
    iata: "GRV",
    name: "Akhmat Kadyrov Grozny International Airport",
    country: "Russia"
  },
  {
    city: "Makhachkala",
    iata: "MCX",
    name: "Makhachkala Uytash International Airport",
    country: "Russia"
  },
  {
    city: "Mineralnyye Vody",
    iata: "MRV",
    name: "Mineralnye Vody Airport",
    country: "Russia"
  },
  {
    city: "Nalchik",
    iata: "NAL",
    name: "Nalchik Airport",
    country: "Russia"
  },
  {
    city: "Beslan",
    iata: "OGZ",
    name: "Vladikavkaz Beslan International Airport",
    country: "Russia"
  },
  {
    city: "Sunzha",
    iata: "IGT",
    name: "Magas Airport",
    country: "Russia"
  },
  {
    city: "Stavropol",
    iata: "STW",
    name: "Stavropol Shpakovskoye Airport",
    country: "Russia"
  },
  {
    city: "Rostov-on-Don",
    iata: "ROV",
    name: "Platov International Airport",
    country: "Russia"
  },
  {
    city: "Taganrog",
    iata: "TGK",
    name: "Taganrog Yuzhny Airport",
    country: "Russia"
  },
  {
    city: "Sochi",
    iata: "AER",
    name: "Sochi International Airport",
    country: "Russia"
  },
  {
    city: "Astrakhan",
    iata: "ASF",
    name: "Astrakhan Narimanovo Boris M. Kustodiev International Airport",
    country: "Russia"
  },
  {
    city: "Elista",
    iata: "ESL",
    name: "Elista Airport",
    country: "Russia"
  },
  {
    city: "Volgograd",
    iata: "VOG",
    name: "Volgograd International Airport",
    country: "Russia"
  },
  {
    city: "Boston",
    iata: "BNH",
    name: "Cape Air Seaplanes on Boston Harbor Seaplane Base",
    country: "United States"
  },
  {
    city: "Okoboji",
    iata: "RTL",
    name: "Spirit Lake Municipal Airport",
    country: "United States"
  },
  {
    city: "Key Largo",
    iata: "KYL",
    name: "Port Largo Airport",
    country: "United States"
  },
  {
    city: "Farewell",
    iata: "FWL",
    name: "Farewell Airport",
    country: "United States"
  },
  {
    city: "Corcoran",
    iata: "CRO",
    name: "Corcoran Airport",
    country: "United States"
  },
  {
    city: "Holland",
    iata: "HLM",
    name: "Park Township Airport",
    country: "United States"
  },
  {
    city: "Big Pine Key, Florida",
    iata: "XFT",
    name: "Big Pine Sands STOLGround",
    country: "United States"
  },
  {
    city: "Pilot Station",
    iata: "PQS",
    name: "Pilot Station Airport",
    country: "United States"
  },
  {
    city: "Chelyabinsk",
    iata: "CEK",
    name: "Kurchatov Chelyabinsk International Airport",
    country: "Russia"
  },
  {
    city: "Magnitogorsk",
    iata: "MQF",
    name: "Magnitogorsk International Airport",
    country: "Russia"
  },
  {
    city: "Sabetta",
    iata: "SBT",
    name: "Sabetta International Airport",
    country: "Russia"
  },
  {
    city: "Bovanenkovo",
    iata: "BVJ",
    name: "Bovanenkovo Airport",
    country: "Russia"
  },
  {
    city: "Salekhard",
    iata: "SLY",
    name: "Salekhard Airport",
    country: "Russia"
  },
  {
    city: "Mys Kamennyi",
    iata: "YMK",
    name: "Mys Kamenny Airport",
    country: "Russia"
  },
  {
    city: "Krasnoselkup",
    iata: "KKQ",
    name: "Krasnoselkup Airport",
    country: "Russia"
  },
  {
    city: "Tarko-Sale",
    iata: "TQL",
    name: "Tarko-Sale Airport",
    country: "Russia"
  },
  {
    city: "Urengoy",
    iata: "UEN",
    name: "Urengoy Airport",
    country: "Russia"
  },
  {
    city: "nan",
    iata: "EZV",
    name: "Berezovo Airport",
    country: "Russia"
  },
  {
    city: "Khanty-Mansiysk",
    iata: "HMA",
    name: "Khanty Mansiysk Airport",
    country: "Russia"
  },
  {
    city: "nan",
    iata: "IRM",
    name: "Igrim Airport",
    country: "Russia"
  },
  {
    city: "Kondinskoye",
    iata: "KXD",
    name: "Kondinskoye Airport",
    country: "Russia"
  },
  {
    city: "Nyagan",
    iata: "NYA",
    name: "Nyagan Airport",
    country: "Russia"
  },
  {
    city: "nan",
    iata: "EYK",
    name: "Beloyarskiy Airport",
    country: "Russia"
  },
  {
    city: "Sovetskiy",
    iata: "OVS",
    name: "Sovetskiy Airport",
    country: "Russia"
  },
  {
    city: "Uray",
    iata: "URJ",
    name: "Uray Airport",
    country: "Russia"
  },
  {
    city: "Izhevsk",
    iata: "IJK",
    name: "Izhevsk Airport",
    country: "Russia"
  },
  {
    city: "Kirov",
    iata: "KVX",
    name: "Pobedilovo Airport",
    country: "Russia"
  },
  {
    city: "Nadym",
    iata: "NYM",
    name: "Nadym Airport",
    country: "Russia"
  },
  {
    city: "Novy Urengoy",
    iata: "NUX",
    name: "Novy Urengoy Airport",
    country: "Russia"
  },
  {
    city: "Nizhnevartovsk",
    iata: "NJC",
    name: "Nizhnevartovsk Airport",
    country: "Russia"
  },
  {
    city: "Perm",
    iata: "PEE",
    name: "Perm International Airport",
    country: "Russia"
  },
  {
    city: "Kogalym",
    iata: "KGP",
    name: "Kogalym International Airport",
    country: "Russia"
  },
  {
    city: "Nefteyugansk",
    iata: "NFG",
    name: "Nefteyugansk Airport",
    country: "Russia"
  },
  {
    city: "Noyabrsk",
    iata: "NOJ",
    name: "Noyabrsk Airport",
    country: "Russia"
  },
  {
    city: "Surgut",
    iata: "SGC",
    name: "Surgut International Airport",
    country: "Russia"
  },
  {
    city: "Yekaterinburg",
    iata: "SVX",
    name: "Koltsovo Airport",
    country: "Russia"
  },
  {
    city: "Tobolsk",
    iata: "RMZ",
    name: "Tobolsk Remezov Airport",
    country: "Russia"
  },
  {
    city: "Tobolsk",
    iata: "TOX",
    name: "Tobolsk Airport",
    country: "Russia"
  },
  {
    city: "Tyumen",
    iata: "TJM",
    name: "Roshchino International Airport",
    country: "Russia"
  },
  {
    city: "Kurgan",
    iata: "KRO",
    name: "Kurgan Airport",
    country: "Russia"
  },
  {
    city: "Oljato-Monument Valley",
    iata: "GMV",
    name: "Monument Valley Airport",
    country: "United States"
  },
  {
    city: "Ashgabat",
    iata: "ASB",
    name: "Ashgabat International Airport",
    country: "TM"
  },
  {
    city: "Kerki",
    iata: "KEA",
    name: "Kerki Airport",
    country: "TM"
  },
  {
    city: "Turkmenbaşy",
    iata: "KRW",
    name: "Turkmenbaşy International Airport",
    country: "TM"
  },
  {
    city: "Mary",
    iata: "MYP",
    name: "Mary International Airport",
    country: "TM"
  },
  {
    city: "Daşoguz",
    iata: "TAZ",
    name: "Dashoguz International Airport",
    country: "TM"
  },
  {
    city: "Türkmenabat",
    iata: "CRZ",
    name: "Türkmenabat International Airport",
    country: "TM"
  },
  {
    city: "Dushanbe",
    iata: "DYU",
    name: "Dushanbe International Airport",
    country: "TJ"
  },
  {
    city: "Kulyab",
    iata: "TJU",
    name: "Kulob Airport",
    country: "TJ"
  },
  {
    city: "Khujand",
    iata: "LBD",
    name: "Khujand International Airport",
    country: "TJ"
  },
  {
    city: "Kurgan-Tyube",
    iata: "KQT",
    name: "Qurghonteppa International Airport",
    country: "TJ"
  },
  {
    city: "Namangan",
    iata: "NMA",
    name: "Namangan International Airport",
    country: "UZ"
  },
  {
    city: "Andijan",
    iata: "AZN",
    name: "Andijan International Airport",
    country: "UZ"
  },
  {
    city: "Fergana",
    iata: "FEG",
    name: "Fergana International Airport",
    country: "UZ"
  },
  {
    city: "Kokand",
    iata: "OQN",
    name: "Kokand Airport",
    country: "UZ"
  },
  {
    city: "Muynak",
    iata: "MOK",
    name: "Muynak Airport",
    country: "UZ"
  },
  {
    city: "Nukus",
    iata: "NCU",
    name: "Nukus International Airport",
    country: "UZ"
  },
  {
    city: "Urgench",
    iata: "UGC",
    name: "Urgench International Airport",
    country: "UZ"
  },
  {
    city: "Navoi",
    iata: "NVI",
    name: "Navoi International Airport",
    country: "UZ"
  },
  {
    city: "Bukhara",
    iata: "BHK",
    name: "Bukhara International Airport",
    country: "UZ"
  },
  {
    city: "Karshi",
    iata: "KSQ",
    name: "Karshi Airport",
    country: "UZ"
  },
  {
    city: "Zarafshan",
    iata: "AFS",
    name: "Sugraly Airport",
    country: "UZ"
  },
  {
    city: "Samarkand",
    iata: "SKD",
    name: "Samarkand International Airport",
    country: "UZ"
  },
  {
    city: "Termez",
    iata: "TMJ",
    name: "Termez Airport",
    country: "UZ"
  },
  {
    city: "Tashkent",
    iata: "TAS",
    name: "Tashkent International Airport",
    country: "UZ"
  },
  {
    city: "Zaamin",
    iata: "OMN",
    name: "Zomin Airport",
    country: "UZ"
  },
  {
    city: "Ustupu",
    iata: "UTU",
    name: "Ustupu Airport",
    country: "PA"
  },
  {
    city: "Kostroma",
    iata: "KMW",
    name: "Kostroma Sokerkino Airport",
    country: "Russia"
  },
  {
    city: "Kaluga",
    iata: "KLF",
    name: "Grabtsevo Airport",
    country: "Russia"
  },
  {
    city: "Ivanovo",
    iata: "IWA",
    name: "Ivanovo South Airport",
    country: "Russia"
  },
  {
    city: "Rybinsk",
    iata: "RYB",
    name: "Staroselye Airport",
    country: "Russia"
  },
  {
    city: "Bryansk",
    iata: "BZK",
    name: "Bryansk International Airport",
    country: "Russia"
  },
  {
    city: "Moscow",
    iata: "ZIA",
    name: "Zhukovsky International Airport",
    country: "Russia"
  },
  {
    city: "Moscow",
    iata: "DME",
    name: "Domodedovo International Airport",
    country: "Russia"
  },
  {
    city: "Tunoshna",
    iata: "IAR",
    name: "Golden Ring Yaroslavl International Airport",
    country: "Russia"
  },
  {
    city: "Moscow",
    iata: "SVO",
    name: "Sheremetyevo International Airport",
    country: "Russia"
  },
  {
    city: "Tver",
    iata: "KLD",
    name: "Migalovo Air Base",
    country: "Russia"
  },
  {
    city: "Moscow",
    iata: "CKL",
    name: "Chkalovskiy Air Base",
    country: "Russia"
  },
  {
    city: "Belgorod",
    iata: "EGO",
    name: "Belgorod International Airport",
    country: "Russia"
  },
  {
    city: "Kursk",
    iata: "URS",
    name: "Kursk East Airport",
    country: "Russia"
  },
  {
    city: "Lipetsk",
    iata: "LPK",
    name: "Lipetsk Airport",
    country: "Russia"
  },
  {
    city: "Voronezh",
    iata: "VOZ",
    name: "Voronezh International Airport",
    country: "Russia"
  },
  {
    city: "Tambov",
    iata: "TBW",
    name: "Donskoye Airport",
    country: "Russia"
  },
  {
    city: "Manumu",
    iata: "UUU",
    name: "Manumu Airport",
    country: "PG"
  },
  {
    city: "Moscow",
    iata: "VKO",
    name: "Vnukovo International Airport",
    country: "Russia"
  },
  {
    city: "Ukhta",
    iata: "UCT",
    name: "Ukhta Airport",
    country: "Russia"
  },
  {
    city: "Inta",
    iata: "INA",
    name: "Inta Airport",
    country: "Russia"
  },
  {
    city: "Pechora",
    iata: "PEX",
    name: "Pechora Airport",
    country: "Russia"
  },
  {
    city: "Usinsk",
    iata: "USK",
    name: "Usinsk Airport",
    country: "Russia"
  },
  {
    city: "Vorkuta",
    iata: "VKT",
    name: "Vorkuta Airport",
    country: "Russia"
  },
  {
    city: "Ust-Tsylma",
    iata: "UTS",
    name: "Ust-Tsylma Airport",
    country: "Russia"
  },
  {
    city: "Syktyvkar",
    iata: "SCW",
    name: "Syktyvkar Airport",
    country: "Russia"
  },
  {
    city: "Nizhny Novgorod",
    iata: "GOJ",
    name: "Nizhny Novgorod / Strigino International Airport",
    country: "Russia"
  },
  {
    city: "Bugulma",
    iata: "UUA",
    name: "Bugulma Airport",
    country: "Russia"
  },
  {
    city: "Kazan",
    iata: "KZN",
    name: "Kazan International Airport",
    country: "Russia"
  },
  {
    city: "Nizhnekamsk",
    iata: "NBC",
    name: "Begishevo Airport",
    country: "Russia"
  },
  {
    city: "Yoshkar-Ola",
    iata: "JOK",
    name: "Yoshkar-Ola Airport",
    country: "Russia"
  },
  {
    city: "Cheboksary",
    iata: "CSY",
    name: "Cheboksary Airport",
    country: "Russia"
  },
  {
    city: "Ulyanovsk",
    iata: "ULV",
    name: "Ulyanovsk Baratayevka Airport",
    country: "Russia"
  },
  {
    city: "Cherdakly",
    iata: "ULY",
    name: "Ulyanovsk Vostochny Airport",
    country: "Russia"
  },
  {
    city: "Orenburg",
    iata: "REN",
    name: "Orenburg Central Airport",
    country: "Russia"
  },
  {
    city: "Orsk",
    iata: "OSW",
    name: "Orsk Airport",
    country: "Russia"
  },
  {
    city: "Penza",
    iata: "PEZ",
    name: "Penza Airport",
    country: "Russia"
  },
  {
    city: "Saransk",
    iata: "SKX",
    name: "Saransk International Airport",
    country: "Russia"
  },
  {
    city: "Balakovo",
    iata: "BWO",
    name: "Balakovo Airport",
    country: "Russia"
  },
  {
    city: "Saratov",
    iata: "GSV",
    name: "Gagarin International Airport",
    country: "Russia"
  },
  {
    city: "Beloretsk",
    iata: "BCX",
    name: "Beloretsk Airport",
    country: "Russia"
  },
  {
    city: "Kzyl-Yar",
    iata: "OKT",
    name: "Oktyabrskiy Airport",
    country: "Russia"
  },
  {
    city: "Ufa",
    iata: "UFA",
    name: "Ufa International Airport",
    country: "Russia"
  },
  {
    city: "Samara",
    iata: "KUF",
    name: "Kurumoch International Airport",
    country: "Russia"
  },
  {
    city: "Shahrisabz",
    iata: "RBZ",
    name: "Shahrisabz Southwest Airport",
    country: "UZ"
  },
  {
    city: "Hope Bay",
    iata: "UZM",
    name: "Hope Bay Aerodrome",
    country: "Canada"
  },
  {
    city: "Urzhar",
    iata: "UZR",
    name: "Urzhar Airport",
    country: "KZ"
  },
  {
    city: "Rewa",
    iata: "REW",
    name: "Rewa Airport, Chorhata, REWA",
    country: "India"
  },
  {
    city: "Diu",
    iata: "DIU",
    name: "Diu Airport",
    country: "India"
  },
  {
    city: "Gondia",
    iata: "GDB",
    name: "Gondia Airport",
    country: "India"
  },
  {
    city: "Ahmedabad",
    iata: "AMD",
    name: "Sardar Vallabh Patel International Airport",
    country: "India"
  },
  {
    city: "Akola",
    iata: "AKD",
    name: "Akola Airport",
    country: "India"
  },
  {
    city: "Aurangabad",
    iata: "IXU",
    name: "Aurangabad Airport",
    country: "India"
  },
  {
    city: "Mumbai",
    iata: "BOM",
    name: "Chhatrapati Shivaji Maharaj International Airport",
    country: "India"
  },
  {
    city: "Bhuj",
    iata: "BHJ",
    name: "Bhuj Airport",
    country: "India"
  },
  {
    city: "Belgaum",
    iata: "IXG",
    name: "Belagavi Airport",
    country: "India"
  },
  {
    city: "Vadodara",
    iata: "BDQ",
    name: "Vadodara International Airport",
    country: "India"
  },
  {
    city: "Bhopal",
    iata: "BHO",
    name: "Raja Bhoj International Airport",
    country: "India"
  },
  {
    city: "Bhavnagar",
    iata: "BHU",
    name: "Bhavnagar Airport",
    country: "India"
  },
  {
    city: "Daman",
    iata: "NMB",
    name: "Daman Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "GUX",
    name: "Guna Airport",
    country: "India"
  },
  {
    city: "Hubballi",
    iata: "HBX",
    name: "Hubballi Airport",
    country: "India"
  },
  {
    city: "Rajkot",
    iata: "HSR",
    name: "Rajkot International Airport",
    country: "India"
  },
  {
    city: "Indore",
    iata: "IDR",
    name: "Devi Ahilya Bai Holkar International Airport",
    country: "India"
  },
  {
    city: "Jabalpur",
    iata: "JLR",
    name: "Jabalpur Airport",
    country: "India"
  },
  {
    city: "Jalgaon",
    iata: "JLG",
    name: "Jalgaon Airport",
    country: "India"
  },
  {
    city: "Jamnagar",
    iata: "JGA",
    name: "Jamnagar Airport",
    country: "India"
  },
  {
    city: "Kandla",
    iata: "IXY",
    name: "Kandla Airport",
    country: "India"
  },
  {
    city: "Khajuraho",
    iata: "HJR",
    name: "Khajuraho Airport",
    country: "India"
  },
  {
    city: "Kolhapur",
    iata: "KLH",
    name: "Kolhapur Airport",
    country: "India"
  },
  {
    city: "Keshod",
    iata: "IXK",
    name: "Keshod Airport",
    country: "India"
  },
  {
    city: "Latur",
    iata: "LTU",
    name: "Murod Kond Airport",
    country: "India"
  },
  {
    city: "Nanded",
    iata: "NDC",
    name: "Nanded Airport",
    country: "India"
  },
  {
    city: "Nagpur",
    iata: "NAG",
    name: "Dr. Babasaheb Ambedkar International Airport",
    country: "India"
  },
  {
    city: "Nashik",
    iata: "ISK",
    name: "Nashik International Airport",
    country: "India"
  },
  {
    city: "Pune",
    iata: "PNQ",
    name: "Pune International Airport",
    country: "India"
  },
  {
    city: "Porbandar",
    iata: "PBD",
    name: "Porbandar Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "RTC",
    name: "Ratnagiri Airport",
    country: "India"
  },
  {
    city: "Rajkot",
    iata: "RAJ",
    name: "Rajkot Airport",
    country: "India"
  },
  {
    city: "Raipur",
    iata: "RPR",
    name: "Swami Vivekananda Airport",
    country: "India"
  },
  {
    city: "Kakadi",
    iata: "SAG",
    name: "Shirdi International Airport",
    country: "India"
  },
  {
    city: "Solapur",
    iata: "SSE",
    name: "Solapur Airport",
    country: "India"
  },
  {
    city: "Surat",
    iata: "STV",
    name: "Surat International Airport",
    country: "India"
  },
  {
    city: "Udaipur",
    iata: "UDR",
    name: "Maharana Pratap Airport",
    country: "India"
  },
  {
    city: "Colombo",
    iata: "CMB",
    name: "Bandaranaike International Colombo Airport",
    country: "Sri Lanka"
  },
  {
    city: "Anuradhapura",
    iata: "ACJ",
    name: "Anuradhapura Airport",
    country: "Sri Lanka"
  },
  {
    city: "Batticaloa",
    iata: "BTC",
    name: "Batticaloa International Airport",
    country: "Sri Lanka"
  },
  {
    city: "Colombo",
    iata: "RML",
    name: "Colombo Ratmalana International Airport",
    country: "Sri Lanka"
  },
  {
    city: "Ampara",
    iata: "ADP",
    name: "Ampara Airport",
    country: "Sri Lanka"
  },
  {
    city: "Polonnaruwa Town",
    iata: "HIM",
    name: "Hingurakgoda Air Force Base",
    country: "Sri Lanka"
  },
  {
    city: "Jaffna",
    iata: "JAF",
    name: "Jaffna International Airport",
    country: "Sri Lanka"
  },
  {
    city: "Galle",
    iata: "KCT",
    name: "Koggala Airport",
    country: "Sri Lanka"
  },
  {
    city: "Kalutara",
    iata: "KTY",
    name: "Katukurunda Air Force Base",
    country: "Sri Lanka"
  },
  {
    city: "Sigiriya",
    iata: "GIU",
    name: "Sigiriya Air Force Base",
    country: "Sri Lanka"
  },
  {
    city: "Trincomalee",
    iata: "TRR",
    name: "China Bay Airport",
    country: "Sri Lanka"
  },
  {
    city: "Weerawila",
    iata: "WRZ",
    name: "Weerawila Airport",
    country: "Sri Lanka"
  },
  {
    city: "Mattala",
    iata: "HRI",
    name: "Mattala Rajapaksa International Airport",
    country: "Sri Lanka"
  },
  {
    city: "Battambang",
    iata: "BBM",
    name: "Battambang Airport",
    country: "KH"
  },
  {
    city: "Krong Khemara Phoumin",
    iata: "KKZ",
    name: "Koh Kong Airport",
    country: "KH"
  },
  {
    city: "Sen Monorom",
    iata: "MWV",
    name: "Mondulkiri Airport",
    country: "KH"
  },
  {
    city: "Phnom Penh (Pou Senchey)",
    iata: "PNH",
    name: "Phnom Penh International Airport",
    country: "KH"
  },
  {
    city: "Ratanakiri",
    iata: "RBE",
    name: "Ratanakiri Airport",
    country: "KH"
  },
  {
    city: "Siem Reap",
    iata: "SAI",
    name: "Siem Reap-Angkor International Airport",
    country: "KH"
  },
  {
    city: "Preah Sihanouk",
    iata: "KOS",
    name: "Sihanouk International Airport",
    country: "KH"
  },
  {
    city: "Krakor",
    iata: "KZD",
    name: "Krakor Airport",
    country: "KH"
  },
  {
    city: "Ciudad Guayana",
    iata: "SFX",
    name: "Macagua Airport",
    country: "VE"
  },
  {
    city: "San Salvador de Paul",
    iata: "SVV",
    name: "San Salvador de Paul Airport",
    country: "VE"
  },
  {
    city: "El Tigre",
    iata: "ELX",
    name: "El Tigre Airport",
    country: "VE"
  },
  {
    city: "Azamgarh",
    iata: "AZH",
    name: "Azamgarh Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "IXV",
    name: "Along Airport",
    country: "India"
  },
  {
    city: "Agartala",
    iata: "IXA",
    name: "Agartala - Maharaja Bir Bikram Airport",
    country: "India"
  },
  {
    city: "Siliguri",
    iata: "IXB",
    name: "Bagdogra Airport",
    country: "India"
  },
  {
    city: "Balurghat",
    iata: "RGH",
    name: "Balurghat Airport",
    country: "India"
  },
  {
    city: "Shillong",
    iata: "SHL",
    name: "Shillong Airport",
    country: "India"
  },
  {
    city: "Varanasi",
    iata: "VNS",
    name: "Lal Bahadur Shastri International Airport",
    country: "India"
  },
  {
    city: "Bhubaneswar",
    iata: "BBI",
    name: "Biju Patnaik International Airport",
    country: "India"
  },
  {
    city: "Bilaspur",
    iata: "PAB",
    name: "Bilaspur Airport",
    country: "India"
  },
  {
    city: "Kolkata",
    iata: "CCU",
    name: "Netaji Subhash Chandra Bose International Airport",
    country: "India"
  },
  {
    city: "Cooch Behar",
    iata: "COH",
    name: "Cooch Behar Airport",
    country: "India"
  },
  {
    city: "Chitrakoot",
    iata: "CWK",
    name: "Chitrakoot Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "DBD",
    name: "Dhanbad Airport",
    country: "India"
  },
  {
    city: "Durgapur",
    iata: "RDP",
    name: "Kazi Nazrul Islam Airport",
    country: "India"
  },
  {
    city: "Darbhanga",
    iata: "DBR",
    name: "Darbhanga Airport",
    country: "India"
  },
  {
    city: "Deoghar",
    iata: "DGH",
    name: "Deoghar Airport",
    country: "India"
  },
  {
    city: "Daporijo",
    iata: "DEP",
    name: "Daporijo Airport",
    country: "India"
  },
  {
    city: "Gorakhpur",
    iata: "GOP",
    name: "Gorakhpur Airport",
    country: "India"
  },
  {
    city: "Guwahati",
    iata: "GAU",
    name: "Lokpriya Gopinath Bordoloi International Airport",
    country: "India"
  },
  {
    city: "Gaya",
    iata: "GAY",
    name: "Gaya Airport",
    country: "India"
  },
  {
    city: "Imphal",
    iata: "IMF",
    name: "Bir Tikendrajit International Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "JRG",
    name: "Jharsuguda Airport",
    country: "India"
  },
  {
    city: "Jeypore",
    iata: "PYB",
    name: "Jeypore Airport",
    country: "India"
  },
  {
    city: "Jamshedpur",
    iata: "IXW",
    name: "Sonari Airport",
    country: "India"
  },
  {
    city: "Jorhat",
    iata: "JRH",
    name: "Jorhat Airport",
    country: "India"
  },
  {
    city: "Kushinagar",
    iata: "KBK",
    name: "Kushinagar International Airport",
    country: "India"
  },
  {
    city: "Manik Bhandar",
    iata: "IXQ",
    name: "Kamalpur Airport",
    country: "India"
  },
  {
    city: "Kailashahar",
    iata: "IXH",
    name: "Kailashahar Airport",
    country: "India"
  },
  {
    city: "Silchar",
    iata: "IXS",
    name: "Silchar Airport",
    country: "India"
  },
  {
    city: "Khowai",
    iata: "IXN",
    name: "Khowai Airport",
    country: "India"
  },
  {
    city: "Aizawl (Lengpui)",
    iata: "AJL",
    name: "Lengpui Airport",
    country: "India"
  },
  {
    city: "Lilabari",
    iata: "IXI",
    name: "Lilabari North Lakhimpur Airport",
    country: "India"
  },
  {
    city: "Malda",
    iata: "LDA",
    name: "Malda Airport",
    country: "India"
  },
  {
    city: "Dibrugarh",
    iata: "DIB",
    name: "Dibrugarh Airport",
    country: "India"
  },
  {
    city: "Dimapur",
    iata: "DMU",
    name: "Dimapur Airport",
    country: "India"
  },
  {
    city: "Muzaffarpur",
    iata: "MZU",
    name: "Muzaffarpur Airport",
    country: "India"
  },
  {
    city: "Pasighat",
    iata: "IXT",
    name: "Pasighat Airport",
    country: "India"
  },
  {
    city: "Patna",
    iata: "PAT",
    name: "Jay Prakash Narayan Airport",
    country: "India"
  },
  {
    city: "Ranchi",
    iata: "IXR",
    name: "Birsa Munda Airport",
    country: "India"
  },
  {
    city: "Rourkela",
    iata: "RRK",
    name: "Rourkela Airport",
    country: "India"
  },
  {
    city: "Rupsi",
    iata: "RUP",
    name: "Rupsi Airport",
    country: "India"
  },
  {
    city: "Tezu",
    iata: "TEI",
    name: "Tezu Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "TEZ",
    name: "Tezpur Airport",
    country: "India"
  },
  {
    city: "Visakhapatnam",
    iata: "VTZ",
    name: "Visakhapatnam International Airport",
    country: "India"
  },
  {
    city: "Ziro",
    iata: "ZER",
    name: "Ziro Airport",
    country: "India"
  },
  {
    city: "Tortola",
    iata: "RAD",
    name: "Road Town Seaplane Base",
    country: "VG"
  },
  {
    city: "Barisal",
    iata: "BZL",
    name: "Barisal Airport",
    country: "Bangladesh"
  },
  {
    city: "Cox's Bazar",
    iata: "CXB",
    name: "Cox's Bazar Airport",
    country: "Bangladesh"
  },
  {
    city: "Comilla",
    iata: "CLA",
    name: "Comilla Airport",
    country: "Bangladesh"
  },
  {
    city: "Chattogram (Chittagong)",
    iata: "CGP",
    name: "Shah Amanat International Airport",
    country: "Bangladesh"
  },
  {
    city: "Dhaka",
    iata: "DAC",
    name: "Hazrat Shahjalal International Airport",
    country: "Bangladesh"
  },
  {
    city: "Ishurdi",
    iata: "IRD",
    name: "Ishurdi Airport",
    country: "Bangladesh"
  },
  {
    city: "Jashore (Jessore)",
    iata: "JSR",
    name: "Jessore Airport",
    country: "Bangladesh"
  },
  {
    city: "Rajshahi",
    iata: "RJH",
    name: "Shah Makhdum Airport",
    country: "Bangladesh"
  },
  {
    city: "Saidpur",
    iata: "SPD",
    name: "Saidpur Airport",
    country: "Bangladesh"
  },
  {
    city: "Thakurgaon",
    iata: "TKR",
    name: "Thakurgaon Airport",
    country: "Bangladesh"
  },
  {
    city: "Shamshernagar",
    iata: "ZHM",
    name: "Shamshernagar Airport",
    country: "Bangladesh"
  },
  {
    city: "Sylhet",
    iata: "ZYL",
    name: "Osmany International Airport",
    country: "Bangladesh"
  },
  {
    city: "Hong Kong",
    iata: "HKG",
    name: "Hong Kong International Airport",
    country: "HK"
  },
  {
    city: "Central and Western",
    iata: "HHP",
    name: "Shun Tak Heliport",
    country: "HK"
  },
  {
    city: "Charlotte Amalie",
    iata: "SPB",
    name: "Charlotte Amalie Harbor Seaplane Base",
    country: "VI"
  },
  {
    city: "Christiansted",
    iata: "SSB",
    name: "Christiansted Harbor Seaplane Base",
    country: "VI"
  },
  {
    city: "Agra",
    iata: "AGR",
    name: "Agra Airport / Agra Air Force Station",
    country: "India"
  },
  {
    city: "Aligarh",
    iata: "HRH",
    name: "Aligarh Airport",
    country: "India"
  },
  {
    city: "Allahabad",
    iata: "IXD",
    name: "Prayagraj Airport",
    country: "India"
  },
  {
    city: "Amritsar",
    iata: "ATQ",
    name: "Sri Guru Ram Das Ji International Airport",
    country: "India"
  },
  {
    city: "Adampur",
    iata: "AIP",
    name: "Adampur Airport",
    country: "India"
  },
  {
    city: "Bikaner",
    iata: "BKB",
    name: "Nal Airport",
    country: "India"
  },
  {
    city: "Bhuntar",
    iata: "KUU",
    name: "Kullu Manali Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "BUP",
    name: "Bhatinda Air Force Station",
    country: "India"
  },
  {
    city: "Bareilly",
    iata: "BEK",
    name: "Bareilly Air Force Station",
    country: "India"
  },
  {
    city: "Chandigarh",
    iata: "IXC",
    name: "Shaheed Bhagat Singh International Airport",
    country: "India"
  },
  {
    city: "Kanpur",
    iata: "KNU",
    name: "Kanpur Airport",
    country: "India"
  },
  {
    city: "Dehradun (Jauligrant)",
    iata: "DED",
    name: "Dehradun Jolly Grant Airport",
    country: "India"
  },
  {
    city: "New Delhi",
    iata: "DEL",
    name: "Indira Gandhi International Airport",
    country: "India"
  },
  {
    city: "Ghaziabad",
    iata: "HDO",
    name: "Hindon Airport / Hindon Air Force Station",
    country: "India"
  },
  {
    city: "Kangra",
    iata: "DHM",
    name: "Kangra Airport",
    country: "India"
  },
  {
    city: "Gwalior",
    iata: "GWL",
    name: "Gwalior Airport",
    country: "India"
  },
  {
    city: "Hisar",
    iata: "HSS",
    name: "Maharaja Agrasen International Airport",
    country: "India"
  },
  {
    city: "Halwara",
    iata: "HWR",
    name: "Halwara International Airport",
    country: "India"
  },
  {
    city: "Jodhpur",
    iata: "JDH",
    name: "Jodhpur Airport",
    country: "India"
  },
  {
    city: "Jaipur",
    iata: "JAI",
    name: "Jaipur International Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "JSA",
    name: "Jaisalmer Airport",
    country: "India"
  },
  {
    city: "Jammu",
    iata: "IXJ",
    name: "Jammu Airport",
    country: "India"
  },
  {
    city: "Ajmer (Kishangarh)",
    iata: "KQH",
    name: "Kishangarh Airport Ajmer",
    country: "India"
  },
  {
    city: "Kota",
    iata: "KTU",
    name: "Kota Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "LUH",
    name: "Ludhiana Airport",
    country: "India"
  },
  {
    city: "Leh",
    iata: "IXL",
    name: "Leh Kushok Bakula Rimpochee Airport",
    country: "India"
  },
  {
    city: "Lucknow",
    iata: "LKO",
    name: "Chaudhary Charan Singh International Airport",
    country: "India"
  },
  {
    city: "Moradabad",
    iata: "MZS",
    name: "Moradabad Airport",
    country: "India"
  },
  {
    city: "Pathankot",
    iata: "IXP",
    name: "Pathankot Airport",
    country: "India"
  },
  {
    city: "Pantnagar",
    iata: "PGH",
    name: "Pantnagar Airport",
    country: "India"
  },
  {
    city: "Jubbarhatti",
    iata: "SLV",
    name: "Shimla Airport",
    country: "India"
  },
  {
    city: "Sherpur Naqeebpur",
    iata: "SWN",
    name: "Sarsawa Air Force Station",
    country: "India"
  },
  {
    city: "Srinagar",
    iata: "SXR",
    name: "Sheikh ul Alam International Airport",
    country: "India"
  },
  {
    city: "nan",
    iata: "TNI",
    name: "Satna Airport",
    country: "India"
  },
  {
    city: "Shravasti",
    iata: "VSV",
    name: "Shravasti Airport",
    country: "India"
  },
  {
    city: "Vivigani",
    iata: "VIV",
    name: "Vivigani Airfield",
    country: "PG"
  },
  {
    city: "Gurue",
    iata: "VJQ",
    name: "Gurue Airport",
    country: "MZ"
  },
  {
    city: "Attopeu",
    iata: "AOU",
    name: "Attopeu Airport",
    country: "LA"
  },
  {
    city: "Huay Xai",
    iata: "HOE",
    name: "Ban Huoeisay Airport",
    country: "LA"
  },
  {
    city: "Luang Phabang",
    iata: "LPQ",
    name: "Luang Phabang International Airport",
    country: "LA"
  },
  {
    city: "Luang Namtha",
    iata: "LXG",
    name: "Luang Namtha Airport",
    country: "LA"
  },
  {
    city: "Oudomsay",
    iata: "ODY",
    name: "Oudomsay Airport",
    country: "LA"
  },
  {
    city: "Pakse",
    iata: "PKZ",
    name: "Pakse International Airport",
    country: "LA"
  },
  {
    city: "Sainyabuli",
    iata: "ZBY",
    name: "Sayaboury Airport",
    country: "LA"
  },
  {
    city: "nan",
    iata: "ZVK",
    name: "Savannakhet Airport",
    country: "LA"
  },
  {
    city: "nan",
    iata: "NEU",
    name: "Sam Neua Airport",
    country: "LA"
  },
  {
    city: "Salavan",
    iata: "VNA",
    name: "Salavan Airport",
    country: "LA"
  },
  {
    city: "Thakhek",
    iata: "THK",
    name: "Thakhek Airport",
    country: "LA"
  },
  {
    city: "Vientiane",
    iata: "VTE",
    name: "Wattay International Airport",
    country: "LA"
  },
  {
    city: "Xieng Khouang",
    iata: "XKH",
    name: "Xieng Khouang Airport",
    country: "LA"
  },
  {
    city: "Xienglom",
    iata: "XIE",
    name: "Xienglom Airport",
    country: "LA"
  },
  {
    city: "Puerto Vallemi",
    iata: "VMI",
    name: "Aeropuerto Nacional Doctor Juan Plate",
    country: "PY"
  },
  {
    city: "Nossa Senhora do Carmo",
    iata: "MFM",
    name: "Macau International Airport",
    country: "MO"
  },
  {
    city: "Ho Chi Minh City (Long Thanh)",
    iata: "LTH",
    name: "Long Thanh International Airport (Under Construction)",
    country: "Vietnam"
  },
  {
    city: "Bajhang",
    iata: "BJH",
    name: "Bajhang Airport",
    country: "Nepal"
  },
  {
    city: "Bhojpur",
    iata: "BHP",
    name: "Bhojpur Airport",
    country: "Nepal"
  },
  {
    city: "Baglung",
    iata: "BGL",
    name: "Baglung Airport",
    country: "Nepal"
  },
  {
    city: "Bharatpur",
    iata: "BHR",
    name: "Bharatpur Airport",
    country: "Nepal"
  },
  {
    city: "Bajura",
    iata: "BJU",
    name: "Bajura Airport",
    country: "Nepal"
  },
  {
    city: "Baitadi",
    iata: "BIT",
    name: "Baitadi Airport",
    country: "Nepal"
  },
  {
    city: "Siddharthanagar (Bhairahawa)",
    iata: "BWA",
    name: "Gautam Buddha International Airport",
    country: "Nepal"
  },
  {
    city: "Bhadrapur",
    iata: "BDP",
    name: "Bhadrapur Airport",
    country: "Nepal"
  },
  {
    city: "Dang",
    iata: "DNP",
    name: "Tulsipur Airport",
    country: "Nepal"
  },
  {
    city: "Dhangarhi",
    iata: "DHI",
    name: "Dhangarhi Airport",
    country: "Nepal"
  },
  {
    city: "Darchula",
    iata: "DAP",
    name: "Darchula Airport",
    country: "Nepal"
  },
  {
    city: "Dolpa",
    iata: "DOP",
    name: "Dolpa Airport",
    country: "Nepal"
  },
  {
    city: "Silgadi Doti",
    iata: "SIH",
    name: "Silgadi Doti Airport",
    country: "Nepal"
  },
  {
    city: "Gorkha",
    iata: "GKH",
    name: "Palungtar Airport",
    country: "Nepal"
  },
  {
    city: "Jiri",
    iata: "JIR",
    name: "Jiri Airport",
    country: "Nepal"
  },
  {
    city: "Jumla",
    iata: "JUM",
    name: "Jumla Airport",
    country: "Nepal"
  },
  {
    city: "Janakpur",
    iata: "JKR",
    name: "Janakpur Airport",
    country: "Nepal"
  },
  {
    city: "Jomsom",
    iata: "JMO",
    name: "Jomsom Airport",
    country: "Nepal"
  },
  {
    city: "Kathmandu",
    iata: "KTM",
    name: "Tribhuvan International Airport",
    country: "Nepal"
  },
  {
    city: "Lamidanda",
    iata: "LDN",
    name: "Lamidanda Airport",
    country: "Nepal"
  },
  {
    city: "Lukla",
    iata: "LUA",
    name: "Lukla Airport",
    country: "Nepal"
  },
  {
    city: "Langtang",
    iata: "LTG",
    name: "Langtang Airport",
    country: "Nepal"
  },
  {
    city: "Ngawal",
    iata: "NGX",
    name: "Manang Airport",
    country: "Nepal"
  },
  {
    city: "Meghauli",
    iata: "MEY",
    name: "Meghauli Airport",
    country: "Nepal"
  },
  {
    city: "Mahendranagar",
    iata: "XMG",
    name: "Mahendranagar Airport",
    country: "Nepal"
  },
  {
    city: "Nepalgunj",
    iata: "KEP",
    name: "Nepalgunj Airport",
    country: "Nepal"
  },
  {
    city: "Pokhara",
    iata: "PKR",
    name: "Pokhara Domestic Airport",
    country: "Nepal"
  },
  {
    city: "Phaplu",
    iata: "PPL",
    name: "Phaplu Airport",
    country: "Nepal"
  },
  {
    city: "Rajbiraj",
    iata: "RJB",
    name: "Rajbiraj Airport",
    country: "Nepal"
  },
  {
    city: "Ramechhap",
    iata: "RHP",
    name: "Ramechhap Airport",
    country: "Nepal"
  },
  {
    city: "Rukumkot",
    iata: "RUK",
    name: "Rukum Chaurjahari Airport",
    country: "Nepal"
  },
  {
    city: "Rolpa",
    iata: "RPA",
    name: "Rolpa Airport",
    country: "Nepal"
  },
  {
    city: "Rumjatar",
    iata: "RUM",
    name: "Rumjatar Airport",
    country: "Nepal"
  },
  {
    city: "Namche Bazaar",
    iata: "SYH",
    name: "Syangboche Airport",
    country: "Nepal"
  },
  {
    city: "Simara",
    iata: "SIF",
    name: "Simara Airport",
    country: "Nepal"
  },
  {
    city: "Surkhet",
    iata: "SKH",
    name: "Surkhet Airport",
    country: "Nepal"
  },
  {
    city: "Sanfebagar",
    iata: "FEB",
    name: "Sanfebagar Airport",
    country: "Nepal"
  },
  {
    city: "Simikot",
    iata: "IMK",
    name: "Simikot Airport",
    country: "Nepal"
  },
  {
    city: "Taplejung",
    iata: "TPJ",
    name: "Taplejung Airport",
    country: "Nepal"
  },
  {
    city: "Tikapur",
    iata: "TPU",
    name: "Tikapur Airport",
    country: "Nepal"
  },
  {
    city: "Tumling Tar",
    iata: "TMI",
    name: "Tumling Tar Airport",
    country: "Nepal"
  },
  {
    city: "Biratnagar",
    iata: "BIR",
    name: "Biratnagar Airport",
    country: "Nepal"
  },
  {
    city: "Agatti",
    iata: "AGX",
    name: "Agatti Airport",
    country: "India"
  },
  {
    city: "Bellary",
    iata: "BEP",
    name: "Bellary Airport",
    country: "India"
  },
  {
    city: "Bengaluru",
    iata: "BLR",
    name: "Kempegowda International Airport Bengaluru",
    country: "India"
  },
  {
    city: "Bidar",
    iata: "IXX",
    name: "Bidar Airport / Bidar Air Force Station",
    country: "India"
  },
  {
    city: "Vijayawada",
    iata: "VGA",
    name: "Vijayawada International Airport",
    country: "India"
  },
  {
    city: "Coimbatore",
    iata: "CJB",
    name: "Coimbatore International Airport",
    country: "India"
  },
  {
    city: "Kochi",
    iata: "COK",
    name: "Cochin International Airport",
    country: "India"
  },
  {
    city: "Calicut",
    iata: "CCJ",
    name: "Calicut International Airport",
    country: "India"
  },
  {
    city: "Kadapa",
    iata: "CDP",
    name: "Kadapa Airport",
    country: "India"
  },
  {
    city: "IAF Camp",
    iata: "CBD",
    name: "Car Nicobar Air Force Base",
    country: "India"
  },
  {
    city: "Mopa",
    iata: "GOX",
    name: "Manohar International Airport",
    country: "India"
  },
  {
    city: "Kalaburagi",
    iata: "GBI",
    name: "Kalaburagi Airport",
    country: "India"
  },
  {
    city: "Vasco da Gama",
    iata: "GOI",
    name: "Goa Dabolim International Airport",
    country: "India"
  },
  {
    city: "Hyderabad",
    iata: "HYD",
    name: "Rajiv Gandhi International Airport",
    country: "India"
  },
  {
    city: "Hyderabad",
    iata: "BPM",
    name: "Begumpet Airport",
    country: "India"
  },
  {
    city: "Toranagallu",
    iata: "VDY",
    name: "Jindal Vijaynagar Airport",
    country: "India"
  },
  {
    city: "Kannur",
    iata: "CNN",
    name: "Kannur International Airport",
    country: "India"
  },
  {
    city: "Orvakal",
    iata: "KJB",
    name: "Kurnool Airport",
    country: "India"
  },
  {
    city: "Madurai",
    iata: "IXM",
    name: "Madurai Airport",
    country: "India"
  },
  {
    city: "Mangaluru",
    iata: "IXE",
    name: "Mangaluru International Airport",
    country: "India"
  },
  {
    city: "Chennai",
    iata: "MAA",
    name: "Chennai International Airport",
    country: "India"
  },
  {
    city: "Mysore",
    iata: "MYQ",
    name: "Mysore Airport",
    country: "India"
  },
  {
    city: "Neyveli",
    iata: "NVY",
    name: "Neyveli Airport",
    country: "India"
  },
  {
    city: "Port Blair",
    iata: "IXZ",
    name: "Veer Savarkar International Airport / INS Utkrosh",
    country: "India"
  },
  {
    city: "Puducherry (Pondicherry)",
    iata: "PNY",
    name: "Pondicherry Airport",
    country: "India"
  },
  {
    city: "Puttaparthi",
    iata: "PUT",
    name: "Sri Sathya Sai Airport",
    country: "India"
  },
  {
    city: "Ramagundam",
    iata: "RMD",
    name: "Basanth Nagar Airport",
    country: "India"
  },
  {
    city: "Madhurapudi",
    iata: "RJA",
    name: "Rajahmundry Airport",
    country: "India"
  },
  {
    city: "Salem",
    iata: "SXV",
    name: "Salem Airport",
    country: "India"
  },
  {
    city: "Thanjavur",
    iata: "TJV",
    name: "Thanjavur Air Force Station",
    country: "India"
  },
  {
    city: "Vagaikulam",
    iata: "TCR",
    name: "Tuticorin Airport",
    country: "India"
  },
  {
    city: "Tirupati",
    iata: "TIR",
    name: "Tirupati International Airport",
    country: "India"
  },
  {
    city: "Tiruchirappalli",
    iata: "TRZ",
    name: "Tiruchirappalli International Airport",
    country: "India"
  },
  {
    city: "Thiruvananthapuram",
    iata: "TRV",
    name: "Thiruvananthapuram International Airport",
    country: "India"
  },
  {
    city: "Warangal",
    iata: "WGC",
    name: "Warangal Airport",
    country: "India"
  },
  {
    city: "Jakar",
    iata: "BUT",
    name: "Bathpalathang Airport",
    country: "BT"
  },
  {
    city: "Gelephu",
    iata: "GLU",
    name: "Gelephu Airport",
    country: "BT"
  },
  {
    city: "Paro",
    iata: "PBH",
    name: "Paro International Airport",
    country: "BT"
  },
  {
    city: "Yongphulla",
    iata: "YON",
    name: "Yongphulla Airport",
    country: "BT"
  },
  {
    city: "nan",
    iata: "HRF",
    name: "Hoarafushi Airport",
    country: "MV"
  },
  {
    city: "Kulhudhuffushi",
    iata: "HDK",
    name: "Kulhudhuffushi Airport",
    country: "MV"
  },
  {
    city: "Noonu Atoll",
    iata: "NMF",
    name: "Maafaru International Airport",
    country: "MV"
  },
  {
    city: "Ifuru Island",
    iata: "IFU",
    name: "Ifuru Airport",
    country: "MV"
  },
  {
    city: "Baa Atoll",
    iata: "DRV",
    name: "Dharavandhoo Airport",
    country: "MV"
  },
  {
    city: "Fuvahmulah Island",
    iata: "FVM",
    name: "Fuvahmulah Airport",
    country: "MV"
  },
  {
    city: "Gan",
    iata: "GAN",
    name: "Gan International Airport",
    country: "MV"
  },
  {
    city: "Haa Dhaalu Atoll",
    iata: "HAQ",
    name: "Hanimaadhoo International Airport",
    country: "MV"
  },
  {
    city: "Kadhdhoo",
    iata: "KDO",
    name: "Kadhdhoo Airport",
    country: "MV"
  },
  {
    city: "Malé",
    iata: "MLE",
    name: "Velana International Airport",
    country: "MV"
  },
  {
    city: "Huvadhu Atoll",
    iata: "GKK",
    name: "Kooddoo Airport",
    country: "MV"
  },
  {
    city: "Huvadhu Atoll",
    iata: "KDM",
    name: "Kaadedhdhoo Airport",
    country: "MV"
  },
  {
    city: "Kudahuvadhoo",
    iata: "DDD",
    name: "Dhaalu Atoll Airport",
    country: "MV"
  },
  {
    city: "Maamigili",
    iata: "VAM",
    name: "Villa International Airport Maamigili",
    country: "MV"
  },
  {
    city: "Thimarafushi",
    iata: "TMF",
    name: "Thimarafushi Airport",
    country: "MV"
  },
  {
    city: "Maavaarulu",
    iata: "RUL",
    name: "Maavaarulaa Airport",
    country: "MV"
  },
  {
    city: "Bangkok",
    iata: "DMK",
    name: "Don Mueang International Airport",
    country: "Thailand"
  },
  {
    city: "Nakhon Pathom",
    iata: "KDT",
    name: "Kamphaeng Saen Airport",
    country: "Thailand"
  },
  {
    city: "Lop Buri",
    iata: "KKM",
    name: "Khok Kathiam Airport",
    country: "Thailand"
  },
  {
    city: "Laem Ngop",
    iata: "TDX",
    name: "Trat Airport",
    country: "Thailand"
  },
  {
    city: "Bangkok",
    iata: "BKK",
    name: "Suvarnabhumi Airport",
    country: "Thailand"
  },
  {
    city: "Rayong",
    iata: "UTP",
    name: "U-Tapao–Rayong–Pattaya International Airport",
    country: "Thailand"
  },
  {
    city: "Chiang Mai",
    iata: "CNX",
    name: "Chiang Mai International Airport",
    country: "Thailand"
  },
  {
    city: "Mae Hong Son",
    iata: "HGN",
    name: "Mae Hong Son Airport",
    country: "Thailand"
  },
  {
    city: "Pai",
    iata: "PYY",
    name: "Pai Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "LPT",
    name: "Lampang Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "NNT",
    name: "Nan Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "PRH",
    name: "Phrae Airport",
    country: "Thailand"
  },
  {
    city: "Chiang Rai",
    iata: "CEI",
    name: "Mae Fah Luang - Chiang Rai International Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "PHY",
    name: "Phetchabun Airport",
    country: "Thailand"
  },
  {
    city: "Hua Hin",
    iata: "HHQ",
    name: "Hua Hin Airport",
    country: "Thailand"
  },
  {
    city: "Takhli",
    iata: "TKH",
    name: "Takhli Royal Thai Air Force Base",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "MAQ",
    name: "Mae Sot Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "THS",
    name: "Sukhothai Airport",
    country: "Thailand"
  },
  {
    city: "Phitsanulok",
    iata: "PHS",
    name: "Phitsanulok Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "TKT",
    name: "Tak Airport",
    country: "Thailand"
  },
  {
    city: "Surat Thani",
    iata: "URT",
    name: "Surat Thani Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "NAW",
    name: "Narathiwat Airport",
    country: "Thailand"
  },
  {
    city: "Chumphon",
    iata: "CJM",
    name: "Chumphon Airport",
    country: "Thailand"
  },
  {
    city: "Nakhon Si Thammarat",
    iata: "NST",
    name: "Nakhon Si Thammarat Airport",
    country: "Thailand"
  },
  {
    city: "Krabi",
    iata: "KBV",
    name: "Krabi International Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "SGZ",
    name: "Songkhla Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "PAN",
    name: "Pattani Airport",
    country: "Thailand"
  },
  {
    city: "Na Thon (Ko Samui Island)",
    iata: "USM",
    name: "Samui International Airport",
    country: "Thailand"
  },
  {
    city: "Phuket",
    iata: "HKT",
    name: "Phuket International Airport",
    country: "Thailand"
  },
  {
    city: "Ranong",
    iata: "UNN",
    name: "Ranong Airport",
    country: "Thailand"
  },
  {
    city: "Hat Yai",
    iata: "HDY",
    name: "Hat Yai International Airport",
    country: "Thailand"
  },
  {
    city: "Trang",
    iata: "TST",
    name: "Trang Airport",
    country: "Thailand"
  },
  {
    city: "Udon Thani",
    iata: "UTH",
    name: "Udon Thani International Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "SNO",
    name: "Sakon Nakhon Airport",
    country: "Thailand"
  },
  {
    city: "Surin",
    iata: "PXR",
    name: "Surin Airport",
    country: "Thailand"
  },
  {
    city: "Khon Kaen",
    iata: "KKC",
    name: "Khon Kaen Airport",
    country: "Thailand"
  },
  {
    city: "nan",
    iata: "LOE",
    name: "Loei Airport",
    country: "Thailand"
  },
  {
    city: "Buriram",
    iata: "BFV",
    name: "Buri Ram Airport",
    country: "Thailand"
  },
  {
    city: "Chaloem Phra Kiat",
    iata: "NAK",
    name: "Nakhon Ratchasima Airport",
    country: "Thailand"
  },
  {
    city: "Ubon Ratchathani",
    iata: "UBP",
    name: "Ubon Ratchathani Airport",
    country: "Thailand"
  },
  {
    city: "Roi Et",
    iata: "ROI",
    name: "Roi Et Airport",
    country: "Thailand"
  },
  {
    city: "Nakhon Phanom",
    iata: "KOP",
    name: "Nakhon Phanom Airport",
    country: "Thailand"
  },
  {
    city: "Liwonde National Park",
    iata: "VUU",
    name: "Mvuu Camp Airport",
    country: "MW"
  },
  {
    city: "Buon Ma Thuot",
    iata: "BMV",
    name: "Buon Ma Thuot Airport",
    country: "Vietnam"
  },
  {
    city: "Tam Nghĩa",
    iata: "VCL",
    name: "Chu Lai Airport",
    country: "Vietnam"
  },
  {
    city: "Haiphong (Hai An)",
    iata: "HPH",
    name: "Cat Bi International Airport",
    country: "Vietnam"
  },
  {
    city: "Ca Mau City",
    iata: "CAH",
    name: "Cà Mau Airport",
    country: "Vietnam"
  },
  {
    city: "Nha Trang/nha Trang aiurportCam Ranh",
    iata: "CXR",
    name: "Cam Ranh International Airport / Cam Ranh Air Base",
    country: "Vietnam"
  },
  {
    city: "Con Dao",
    iata: "VCS",
    name: "Con Dao Airport",
    country: "Vietnam"
  },
  {
    city: "Can Tho",
    iata: "VCA",
    name: "Can Tho International Airport",
    country: "Vietnam"
  },
  {
    city: "Dien Bien Phu",
    iata: "DIN",
    name: "Dien Bien Phu Airport",
    country: "Vietnam"
  },
  {
    city: "Dong Hoi",
    iata: "VDH",
    name: "Dong Hoi Airport",
    country: "Vietnam"
  },
  {
    city: "Da Lat",
    iata: "DLI",
    name: "Lien Khuong Airport",
    country: "Vietnam"
  },
  {
    city: "Da Nang",
    iata: "DAD",
    name: "Da Nang International Airport",
    country: "Vietnam"
  },
  {
    city: "Las Malvinas",
    iata: "VVN",
    name: "Las Malvinas/Echarate Airport",
    country: "Peru"
  },
  {
    city: "Hanoi (Soc Son)",
    iata: "HAN",
    name: "Noi Bai International Airport",
    country: "Vietnam"
  },
  {
    city: "Mai Son",
    iata: "SQH",
    name: "Na San Airport",
    country: "Vietnam"
  },
  {
    city: "Huế",
    iata: "HUI",
    name: "Phu Bai International Airport",
    country: "Vietnam"
  },
  {
    city: "Quy Nohn",
    iata: "UIH",
    name: "Phu Cat Airport",
    country: "Vietnam"
  },
  {
    city: "Pleiku",
    iata: "PXU",
    name: "Pleiku Airport",
    country: "Vietnam"
  },
  {
    city: "Phu Quoc Island",
    iata: "PQC",
    name: "Phú Quốc International Airport",
    country: "Vietnam"
  },
  {
    city: "Phan Rang",
    iata: "PHA",
    name: "Phan Rang Airport",
    country: "Vietnam"
  },
  {
    city: "Rach Gia",
    iata: "VKG",
    name: "Rach Gia Airport",
    country: "Vietnam"
  },
  {
    city: "Tuy Hoa",
    iata: "TBB",
    name: "Dong Tac Airport",
    country: "Vietnam"
  },
  {
    city: "Ho Chi Minh City",
    iata: "SGN",
    name: "Tan Son Nhat International Airport",
    country: "Vietnam"
  },
  {
    city: "Thanh Hóa",
    iata: "THD",
    name: "Tho Xuan Airport",
    country: "Vietnam"
  },
  {
    city: "Van Don",
    iata: "VDO",
    name: "Van Don International Airport",
    country: "Vietnam"
  },
  {
    city: "Vinh",
    iata: "VII",
    name: "Vinh Airport",
    country: "Vietnam"
  },
  {
    city: "Vũng Tàu",
    iata: "VTG",
    name: "Vung Tau Airport",
    country: "Vietnam"
  },
  {
    city: "Aeng",
    iata: "VBA",
    name: "Ann Airport",
    country: "MM"
  },
  {
    city: "Nyaung U",
    iata: "NYU",
    name: "Bagan Airport",
    country: "MM"
  },
  {
    city: "Banmaw",
    iata: "BMO",
    name: "Banmaw Airport",
    country: "MM"
  },
  {
    city: "Bokpyinn",
    iata: "VBP",
    name: "Bokpyinn Airport",
    country: "MM"
  },
  {
    city: "Mandalay",
    iata: "VBC",
    name: "Chanmyathazi Airport",
    country: "MM"
  },
  {
    city: "Dawei",
    iata: "TVY",
    name: "Dawei Airport",
    country: "MM"
  },
  {
    city: "Falam",
    iata: "SRU",
    name: "Surbung Airport",
    country: "MM"
  },
  {
    city: "Gangaw",
    iata: "GAW",
    name: "Gangaw Airport",
    country: "MM"
  },
  {
    city: "Gwa",
    iata: "GWA",
    name: "Gwa Airport",
    country: "MM"
  },
  {
    city: "Heho",
    iata: "HEH",
    name: "Heho Airport",
    country: "MM"
  },
  {
    city: "Hommalinn",
    iata: "HOX",
    name: "Hommalinn Airport",
    country: "MM"
  },
  {
    city: "Tilin",
    iata: "TIO",
    name: "Tilin Airport",
    country: "MM"
  },
  {
    city: "Kengtung",
    iata: "KET",
    name: "Kengtung Airport",
    country: "MM"
  },
  {
    city: "Kanti",
    iata: "KHM",
    name: "Kanti Airport",
    country: "MM"
  },
  {
    city: "Kalemyo",
    iata: "KMV",
    name: "Kalay Airport",
    country: "MM"
  },
  {
    city: "Kyaukpyu",
    iata: "KYP",
    name: "Kyaukpyu Airport",
    country: "MM"
  },
  {
    city: "Kawthoung",
    iata: "KAW",
    name: "Kawthoung Airport",
    country: "MM"
  },
  {
    city: "Kyauktu",
    iata: "KYT",
    name: "Kyauktu Airport",
    country: "MM"
  },
  {
    city: "Loikaw",
    iata: "LIW",
    name: "Loikaw Airport",
    country: "MM"
  },
  {
    city: "Lashio",
    iata: "LSH",
    name: "Lashio Airport",
    country: "MM"
  },
  {
    city: "Mandalay",
    iata: "MDL",
    name: "Mandalay International Airport",
    country: "MM"
  },
  {
    city: "Mkeik",
    iata: "MGZ",
    name: "Myeik Airport",
    country: "MM"
  },
  {
    city: "Myitkyina",
    iata: "MYT",
    name: "Myitkyina Airport",
    country: "MM"
  },
  {
    city: "Mawlamyine",
    iata: "MNU",
    name: "Mawlamyine Airport",
    country: "MM"
  },
  {
    city: "Manaung",
    iata: "MGU",
    name: "Manaung Airport",
    country: "MM"
  },
  {
    city: "nan",
    iata: "MOE",
    name: "Momeik Airport",
    country: "MM"
  },
  {
    city: "Mong Hsat",
    iata: "MOG",
    name: "Mong Hsat Airport",
    country: "MM"
  },
  {
    city: "Mong Tong",
    iata: "MGK",
    name: "Mong Tong Airport",
    country: "MM"
  },
  {
    city: "Magway",
    iata: "MWQ",
    name: "Magway Airport",
    country: "MM"
  },
  {
    city: "Monywar",
    iata: "NYW",
    name: "Monywar Airport",
    country: "MM"
  },
  {
    city: "Namsang",
    iata: "NMS",
    name: "Namsang Airport",
    country: "MM"
  },
  {
    city: "Naypyitaw",
    iata: "NYT",
    name: "Nay Pyi Taw International Airport",
    country: "MM"
  },
  {
    city: "Namtu",
    iata: "NMT",
    name: "Namtu Airport",
    country: "MM"
  },
  {
    city: "Hpa-N",
    iata: "PAA",
    name: "Hpa-N Airport",
    country: "MM"
  },
  {
    city: "Pauk",
    iata: "PAU",
    name: "Pauk Airport",
    country: "MM"
  },
  {
    city: "Pathein",
    iata: "BSX",
    name: "Pathein Airport",
    country: "MM"
  },
  {
    city: "Pa Pun",
    iata: "PPU",
    name: "Hpapun Airport",
    country: "MM"
  },
  {
    city: "Putao",
    iata: "PBU",
    name: "Putao Airport",
    country: "MM"
  },
  {
    city: "Pakhokku",
    iata: "PKK",
    name: "Pakhokku Airport",
    country: "MM"
  },
  {
    city: "Pye",
    iata: "PRU",
    name: "Pyay Airport",
    country: "MM"
  },
  {
    city: "Sittwe",
    iata: "AKY",
    name: "Sittwe Airport",
    country: "MM"
  },
  {
    city: "Thandwe",
    iata: "SNW",
    name: "Thandwe Airport",
    country: "MM"
  },
  {
    city: "Tachileik",
    iata: "THL",
    name: "Tachileik Airport",
    country: "MM"
  },
  {
    city: "Ye",
    iata: "XYE",
    name: "Ye Airport",
    country: "MM"
  },
  {
    city: "Yangon",
    iata: "RGN",
    name: "Yangon International Airport",
    country: "MM"
  },
  {
    city: "Friday Harbor",
    iata: "FBS",
    name: "Friday Harbor Seaplane Base",
    country: "United States"
  },
  {
    city: "Rosario",
    iata: "RSJ",
    name: "Rosario Seaplane Base",
    country: "United States"
  },
  {
    city: "Seattle",
    iata: "LKE",
    name: "Kenmore Air Harbor Seaplane Base",
    country: "United States"
  },
  {
    city: "Roche Harbor",
    iata: "RCE",
    name: "Roche Harbor Airport",
    country: "United States"
  },
  {
    city: "Waha-Tomea Island",
    iata: "TQQ",
    name: "Maranggo Airport",
    country: "Indonesia"
  },
  {
    city: "West Sound",
    iata: "WSX",
    name: "Westsound/WSX Seaplane Base",
    country: "United States"
  },
  {
    city: "Makassar",
    iata: "UPG",
    name: "Sultan Hasanuddin International Airport",
    country: "Indonesia"
  },
  {
    city: "Biak",
    iata: "BIK",
    name: "Frans Kaisiepo Airport",
    country: "Indonesia"
  },
  {
    city: "Moanamani",
    iata: "ONI",
    name: "Moanamani Airport",
    country: "Indonesia"
  },
  {
    city: "Nomfor",
    iata: "FOO",
    name: "Kornasoren Airport",
    country: "Indonesia"
  },
  {
    city: "Tigi",
    iata: "WET",
    name: "Deiyai / Waghete Baru Airport",
    country: "Indonesia"
  },
  {
    city: "Nabire",
    iata: "NBX",
    name: "Douw Aturure Airport",
    country: "Indonesia"
  },
  {
    city: "Karubaga",
    iata: "KBF",
    name: "Karubaga Airport",
    country: "Indonesia"
  },
  {
    city: "Ilaga",
    iata: "ILA",
    name: "Ilaga Airport",
    country: "Indonesia"
  },
  {
    city: "Kokonao",
    iata: "KOX",
    name: "Kokonao Airport",
    country: "Indonesia"
  },
  {
    city: "Serui",
    iata: "ZRI",
    name: "Stevanus Rumbewas Airport",
    country: "Indonesia"
  },
  {
    city: "Timika",
    iata: "TIM",
    name: "Mozes Kilangin Airport",
    country: "Indonesia"
  },
  {
    city: "Enarotali",
    iata: "EWI",
    name: "Enarotali Airport",
    country: "Indonesia"
  },
  {
    city: "Andriamena",
    iata: "WAD",
    name: "Andriamena Airport",
    country: "MG"
  },
  {
    city: "Bima",
    iata: "BMU",
    name: "Sultan Muhammad Salahuddin Airport",
    country: "Indonesia"
  },
  {
    city: "Kuta, Badung",
    iata: "DPS",
    name: "Denpasar I Gusti Ngurah Rai International Airport",
    country: "Indonesia"
  },
  {
    city: "Mataram (Pujut, Lombok Tengah)",
    iata: "LOP",
    name: "Lombok International Airport",
    country: "Indonesia"
  },
  {
    city: "Sumbawa Besar",
    iata: "SWQ",
    name: "Sultan Muhammad Kaharuddin III Airport",
    country: "Indonesia"
  },
  {
    city: "Radamata",
    iata: "TMC",
    name: "Tambolaka Airport",
    country: "Indonesia"
  },
  {
    city: "Lunyuk",
    iata: "LYK",
    name: "Lunyuk Airport",
    country: "Indonesia"
  },
  {
    city: "Waingapu-Sumba Island",
    iata: "WGP",
    name: "Umbu Mehang Kunda Airport",
    country: "Indonesia"
  },
  {
    city: "Rogojampi, Banyuwangi",
    iata: "BWX",
    name: "Banyuwangi Airport",
    country: "Indonesia"
  },
  {
    city: "Ternate",
    iata: "TTE",
    name: "Sultan Babullah Airport",
    country: "Indonesia"
  },
  {
    city: "Sanana",
    iata: "SQN",
    name: "Emalamo Airport",
    country: "Indonesia"
  },
  {
    city: "Gotalalamo-Morotai Island",
    iata: "OTI",
    name: "Pitu Airport",
    country: "Indonesia"
  },
  {
    city: "Toraja",
    iata: "TRT",
    name: "Toraja Airport",
    country: "Indonesia"
  },
  {
    city: "Palopo",
    iata: "LLO",
    name: "Bua - Palopo Lagaligo Airport",
    country: "Indonesia"
  },
  {
    city: "Palu",
    iata: "PLW",
    name: "Mutiara - SIS Al-Jufrie Airport",
    country: "Indonesia"
  },
  {
    city: "Mamuju",
    iata: "MJU",
    name: "Tampa Padang Airport",
    country: "Indonesia"
  },
  {
    city: "Toli Toli-Celebes Island",
    iata: "TLI",
    name: "Sultan Bantilan Airport",
    country: "Indonesia"
  },
  {
    city: "Masamba",
    iata: "MXB",
    name: "Andi Jemma Airport",
    country: "Indonesia"
  },
  {
    city: "Poso-Celebes Island",
    iata: "PSJ",
    name: "Kasiguncu Airport",
    country: "Indonesia"
  },
  {
    city: "Tojo Una-Una",
    iata: "OJU",
    name: "Tanjung Api Airport",
    country: "Indonesia"
  },
  {
    city: "Luwok",
    iata: "LUW",
    name: "Syukuran Aminuddin Amir Airport",
    country: "Indonesia"
  },
  {
    city: "Muara Teweh",
    iata: "HMS",
    name: "Haji Muhammad Sidik Airport",
    country: "Indonesia"
  },
  {
    city: "Seruyan",
    iata: "KLP",
    name: "Seruyan Kuala Pembuang Airport",
    country: "Indonesia"
  },
  {
    city: "Palangkaraya",
    iata: "PKY",
    name: "Tjilik Riwut Airport",
    country: "Indonesia"
  },
  {
    city: "Yogyakarta",
    iata: "YIA",
    name: "Yogyakarta International Airport",
    country: "Indonesia"
  },
  {
    city: "Cilacap",
    iata: "CXP",
    name: "Tunggul Wulung Airport",
    country: "Indonesia"
  },
  {
    city: "Purwokerto-Java Island",
    iata: "PWL",
    name: "Jenderal Besar Soedirman Airport",
    country: "Indonesia"
  },
  {
    city: "Karimunjawa",
    iata: "KWB",
    name: "Dewadaru Airport",
    country: "Indonesia"
  },
  {
    city: "Bokondini",
    iata: "BUI",
    name: "Bokondini Airport",
    country: "Indonesia"
  },
  {
    city: "Dabra",
    iata: "DRH",
    name: "Dabra Airport",
    country: "Indonesia"
  },
  {
    city: "Batom",
    iata: "BXM",
    name: "Batom Airport",
    country: "Indonesia"
  },
  {
    city: "Sarmi",
    iata: "ZRM",
    name: "Mararena Sarmi Airport",
    country: "Indonesia"
  },
  {
    city: "Sentani",
    iata: "DJJ",
    name: "Dortheys Hiyo Eluay International Airport",
    country: "Indonesia"
  },
  {
    city: "Lereh-Papua Island",
    iata: "LHI",
    name: "Lereh Airport",
    country: "Indonesia"
  },
  {
    city: "Mulia-Papua Island",
    iata: "LII",
    name: "Mulia Airport",
    country: "Indonesia"
  },
  {
    city: "Oksibil",
    iata: "OKL",
    name: "Oksibil Airport",
    country: "Indonesia"
  },
  {
    city: "Senggeh",
    iata: "SEH",
    name: "Senggeh Airport",
    country: "Indonesia"
  },
  {
    city: "Mindiptana-Papua Island",
    iata: "MDP",
    name: "Mindiptana Airport",
    country: "Indonesia"
  },
  {
    city: "Bade",
    iata: "BXD",
    name: "Bade Airport",
    country: "Indonesia"
  },
  {
    city: "Merauke",
    iata: "MKQ",
    name: "Mopah International Airport",
    country: "Indonesia"
  },
  {
    city: "Kamur",
    iata: "KCD",
    name: "Kamur Airport",
    country: "Indonesia"
  },
  {
    city: "Okaba",
    iata: "OKQ",
    name: "Okaba Airport",
    country: "Indonesia"
  },
  {
    city: "Kepi",
    iata: "KEI",
    name: "Kepi Airport",
    country: "Indonesia"
  },
  {
    city: "Senggo-Papua Island",
    iata: "ZEG",
    name: "Senggo Airport",
    country: "Indonesia"
  },
  {
    city: "Tanah Merah",
    iata: "TMH",
    name: "Tanah Merah Airport",
    country: "Indonesia"
  },
  {
    city: "Melak-Borneo Island",
    iata: "GHS",
    name: "Melalan Airport",
    country: "Indonesia"
  },
  {
    city: "Tanjung Selor-Borneo Island",
    iata: "TJS",
    name: "Tanjung Harapan Airport",
    country: "Indonesia"
  },
  {
    city: "Datadawai-Borneo Island",
    iata: "DTD",
    name: "Datadawai Airport",
    country: "Indonesia"
  },
  {
    city: "Balikpapan",
    iata: "BPN",
    name: "Sultan Aji Muhammad Sulaiman Sepinggan International Airport",
    country: "Indonesia"
  },
  {
    city: "Tarakan",
    iata: "TRK",
    name: "Juwata International Airport / Suharnoko Harbani AFB",
    country: "Indonesia"
  },
  {
    city: "Samarinda",
    iata: "AAP",
    name: "Aji Pangeran Tumenggung Pranoto International Airport",
    country: "Indonesia"
  },
  {
    city: "Galela",
    iata: "GLX",
    name: "Gamarmalamo Airport",
    country: "Indonesia"
  },
  {
    city: "Pekaulang",
    iata: "PGQ",
    name: "Buli Airport",
    country: "Indonesia"
  },
  {
    city: "Gorontalo-Celebes Island",
    iata: "GTO",
    name: "Jalaluddin Airport",
    country: "Indonesia"
  },
  {
    city: "Tabukan Utara, Sangihe Islands",
    iata: "NAH",
    name: "Naha Airport",
    country: "Indonesia"
  },
  {
    city: "Lolak",
    iata: "LKM",
    name: "Bolaang Mongondow Airport",
    country: "Indonesia"
  },
  {
    city: "Gebe Island",
    iata: "GEB",
    name: "Gebe Airport",
    country: "Indonesia"
  },
  {
    city: "Kao",
    iata: "KAZ",
    name: "Kuabang Airport",
    country: "Indonesia"
  },
  {
    city: "Manado",
    iata: "MDC",
    name: "Sam Ratulangi International Airport",
    country: "Indonesia"
  },
  {
    city: "Karakelong Island",
    iata: "MNA",
    name: "Melangguane Airport",
    country: "Indonesia"
  },
  {
    city: "Balirangen",
    iata: "BRG",
    name: "Siau/Sitaro Airport",
    country: "Indonesia"
  },
  {
    city: "Morowali",
    iata: "MWS",
    name: "Indonesia Morowali Industrial Park (IMIP) Airport",
    country: "Indonesia"
  },
  {
    city: "Miangas",
    iata: "IAX",
    name: "Miangas Airport",
    country: "Indonesia"
  },
  {
    city: "Buol-Celebes Island",
    iata: "UOL",
    name: "Buol - Pogogul Airport",
    country: "Indonesia"
  },
  {
    city: "Batu Licin",
    iata: "BTW",
    name: "Bersujud Airport",
    country: "Indonesia"
  },
  {
    city: "Pangkalanbun",
    iata: "PKN",
    name: "Iskandar Airport",
    country: "Indonesia"
  },
  {
    city: "Stagen",
    iata: "KBU",
    name: "Gusti Syamsir Alam Airport",
    country: "Indonesia"
  },
  {
    city: "Tanta-Tabalong",
    iata: "TJG",
    name: "Warukin Airport",
    country: "Indonesia"
  },
  {
    city: "Banjarbaru",
    iata: "BDJ",
    name: "Syamsudin Noor International Airport",
    country: "Indonesia"
  },
  {
    city: "Sampit",
    iata: "SMQ",
    name: "Sampit (H.Asan) Airport",
    country: "Indonesia"
  },
  {
    city: "Tumbang Samba-Borneo Island",
    iata: "TBM",
    name: "Tumbang Samba Airport",
    country: "Indonesia"
  },
  {
    city: "Amahai",
    iata: "AHI",
    name: "Amahai Airport",
    country: "Indonesia"
  },
  {
    city: "Bandanaira",
    iata: "NDA",
    name: "Bandanaira Airport",
    country: "Indonesia"
  },
  {
    city: "Dobo-Warmar Island",
    iata: "DOB",
    name: "Rar Gwamar Airport",
    country: "Indonesia"
  },
  {
    city: "Mangole Island",
    iata: "MAL",
    name: "Mangole Airport, Falabisahaya",
    country: "Indonesia"
  },
  {
    city: "Langgur",
    iata: "LUV",
    name: "Karel Sadsuitubun Airport",
    country: "Indonesia"
  },
  {
    city: "Namrole",
    iata: "NRE",
    name: "Namrole Airport",
    country: "Indonesia"
  },
  {
    city: "Labuha-Halmahera Island",
    iata: "LAH",
    name: "Oesman Sadik Airport",
    country: "Indonesia"
  },
  {
    city: "Maikoor Island",
    iata: "BJK",
    name: "Benjina Airport",
    country: "Indonesia"
  },
  {
    city: "Namniwel",
    iata: "NAM",
    name: "Namniwel Airport",
    country: "Indonesia"
  },
  {
    city: "Ambon",
    iata: "AMQ",
    name: "Pattimura International Airport",
    country: "Indonesia"
  },
  {
    city: "Tikong-Taliabu Island",
    iata: "TAX",
    name: "Taliabu Island Airport",
    country: "Indonesia"
  },
  {
    city: "Wahai",
    iata: "WBA",
    name: "Wahai Airport",
    country: "Indonesia"
  },
  {
    city: "Maratua",
    iata: "RTU",
    name: "Maratua Airport",
    country: "Indonesia"
  },
  {
    city: "Malinau",
    iata: "LNU",
    name: "Robert Atty Bessing",
    country: "Indonesia"
  },
  {
    city: "Tanjung Redeb - Borneo Island",
    iata: "BEJ",
    name: "Kalimarau Airport",
    country: "Indonesia"
  },
  {
    city: "Malang",
    iata: "MLG",
    name: "Abdul Rachman Saleh Airport",
    country: "Indonesia"
  },
  {
    city: "Blora",
    iata: "CPF",
    name: "Ngloram Airport",
    country: "Indonesia"
  },
  {
    city: "Jember",
    iata: "JBB",
    name: "Notohadinegoro Airport",
    country: "Indonesia"
  },
  {
    city: "Yogyakarta",
    iata: "JOG",
    name: "Adisutjipto International Airport",
    country: "Indonesia"
  },
  {
    city: "Surakarta",
    iata: "SOC",
    name: "Adisumarmo Airport",
    country: "Indonesia"
  },
  {
    city: "Surabaya",
    iata: "SUB",
    name: "Juanda International Airport",
    country: "Indonesia"
  },
  {
    city: "Semarang",
    iata: "SRG",
    name: "Jenderal Ahmad Yani Airport",
    country: "Indonesia"
  },
  {
    city: "Sumenep",
    iata: "SUP",
    name: "Trunojoyo Airport",
    country: "Indonesia"
  },
  {
    city: "Bawean",
    iata: "BXW",
    name: "Harun Thohir Airport",
    country: "Indonesia"
  },
  {
    city: "Ayawasi",
    iata: "AYW",
    name: "Ayawasi Airport",
    country: "Indonesia"
  },
  {
    city: "Bintuni",
    iata: "NTI",
    name: "Stenkol Airport",
    country: "Indonesia"
  },
  {
    city: "Ransiki-Papua Island",
    iata: "RSK",
    name: "Abresso Airport",
    country: "Indonesia"
  },
  {
    city: "Kebar",
    iata: "KEQ",
    name: "Kebar Airport",
    country: "Indonesia"
  },
  {
    city: "Fakfak",
    iata: "FKQ",
    name: "Fakfak Airport",
    country: "Indonesia"
  },
  {
    city: "Inanwatan",
    iata: "INX",
    name: "Inanwatan Airport",
    country: "Indonesia"
  },
  {
    city: "Kaimana",
    iata: "KNG",
    name: "Utarom Airport",
    country: "Indonesia"
  },
  {
    city: "Merdei-Papua Island",
    iata: "RDE",
    name: "Merdey Airport",
    country: "Indonesia"
  },
  {
    city: "Waisai",
    iata: "RJM",
    name: "Marinda Airport",
    country: "Indonesia"
  },
  {
    city: "Babo",
    iata: "BXB",
    name: "Babo Airport",
    country: "Indonesia"
  },
  {
    city: "Manokwari",
    iata: "MKW",
    name: "Rendani Airport",
    country: "Indonesia"
  },
  {
    city: "Sorong",
    iata: "SOQ",
    name: "Domine Eduard Osok Airport",
    country: "Indonesia"
  },
  {
    city: "Atinjoe",
    iata: "TXM",
    name: "Teminabuan Airport",
    country: "Indonesia"
  },
  {
    city: "Kambuaya-Papua Island",
    iata: "KBX",
    name: "Kambuaya Airport",
    country: "Indonesia"
  },
  {
    city: "Wasior",
    iata: "WSR",
    name: "Wasior Airport",
    country: "Indonesia"
  },
  {
    city: "Atambua",
    iata: "ABU",
    name: "AA Bere Tallo (Haliwen) Airport",
    country: "Indonesia"
  },
  {
    city: "Soa, Ngada",
    iata: "BJW",
    name: "Bajawa Soa (Turelelo) Airport",
    country: "Indonesia"
  },
  {
    city: "Waioti",
    iata: "MOF",
    name: "Frans Xavier Seda Airport",
    country: "Indonesia"
  },
  {
    city: "Ende",
    iata: "ENE",
    name: "H. Hasan Aroeboesman (Ende) Airport",
    country: "Indonesia"
  },
  {
    city: "Satar Tacik, Manggarai",
    iata: "RTG",
    name: "Frans Sales Lega Airport",
    country: "Indonesia"
  },
  {
    city: "Tiwatobi",
    iata: "LKA",
    name: "Larantuka Gewayentana Airport",
    country: "Indonesia"
  },
  {
    city: "Kabola",
    iata: "ARD",
    name: "Alor Island - Mali Airport",
    country: "Indonesia"
  },
  {
    city: "Labuan Bajo, Manggarai Barat",
    iata: "LBJ",
    name: "Komodo Airport",
    country: "Indonesia"
  },
  {
    city: "Ba'a - Rote Island",
    iata: "RTI",
    name: "David Constantijn Saudale Airport",
    country: "Indonesia"
  },
  {
    city: "Sabu-Sawu Island",
    iata: "SAU",
    name: "Sabu-Tardanu Airport",
    country: "Indonesia"
  },
  {
    city: "Kupang",
    iata: "KOE",
    name: "El Tari Airport",
    country: "Indonesia"
  },
  {
    city: "Lewoleba",
    iata: "LWE",
    name: "Wonopito Airport",
    country: "Indonesia"
  },
  {
    city: "Wamena",
    iata: "WMX",
    name: "Wamena Airport",
    country: "Indonesia"
  },
  {
    city: "Bau Bau",
    iata: "BUW",
    name: "Betoambari Airport",
    country: "Indonesia"
  },
  {
    city: "Wangi-wangi Island",
    iata: "WNI",
    name: "Matahora Airport",
    country: "Indonesia"
  },
  {
    city: "Benteng",
    iata: "KSR",
    name: "Selayar - Haji Aroeppala Airport",
    country: "Indonesia"
  },
  {
    city: "Bone",
    iata: "APD",
    name: "Arung Palakka Airport",
    country: "Indonesia"
  },
  {
    city: "Kolaka",
    iata: "KXB",
    name: "Sangia Nibandera Airport",
    country: "Indonesia"
  },
  {
    city: "Raha",
    iata: "RAQ",
    name: "Sugimanuru Airport",
    country: "Indonesia"
  },
  {
    city: "Soroako",
    iata: "SQR",
    name: "Soroako Airport",
    country: "Indonesia"
  },
  {
    city: "Makale",
    iata: "TTR",
    name: "Pongtiku Airport",
    country: "Indonesia"
  },
  {
    city: "Kendari",
    iata: "KDI",
    name: "Haluoleo Airport",
    country: "Indonesia"
  },
  {
    city: "Stebbins",
    iata: "WBB",
    name: "Stebbins Airport",
    country: "United States"
  },
  {
    city: "Bintulu",
    iata: "BTU",
    name: "Bintulu Airport",
    country: "Malaysia"
  },
  {
    city: "Belaga",
    iata: "BLG",
    name: "Belaga Airport",
    country: "Malaysia"
  },
  {
    city: "Long Semado",
    iata: "LSM",
    name: "Long Semado Airport",
    country: "Malaysia"
  },
  {
    city: "Long Datih",
    iata: "LGL",
    name: "Long Lellang Airport",
    country: "Malaysia"
  },
  {
    city: "Kuching",
    iata: "KCH",
    name: "Kuching International Airport",
    country: "Malaysia"
  },
  {
    city: "Long Seridan",
    iata: "ODN",
    name: "Long Seridan Airport",
    country: "Malaysia"
  },
  {
    city: "Limbang",
    iata: "LMN",
    name: "Limbang Airport",
    country: "Malaysia"
  },
  {
    city: "Mukah",
    iata: "MKM",
    name: "Mukah Airport",
    country: "Malaysia"
  },
  {
    city: "Long Akah",
    iata: "LKH",
    name: "Long Akah Airport",
    country: "Malaysia"
  },
  {
    city: "Marudi",
    iata: "MUR",
    name: "Marudi Airport",
    country: "Malaysia"
  },
  {
    city: "Sematan",
    iata: "BSE",
    name: "Sematan Airport",
    country: "Malaysia"
  },
  {
    city: "Kapit",
    iata: "KPI",
    name: "Kapit Airport",
    country: "Malaysia"
  },
  {
    city: "Bakalalan",
    iata: "BKM",
    name: "Bakalalan Airport",
    country: "Malaysia"
  },
  {
    city: "Miri",
    iata: "MYY",
    name: "Miri Airport",
    country: "Malaysia"
  },
  {
    city: "Sibu",
    iata: "SBW",
    name: "Sibu Airport",
    country: "Malaysia"
  },
  {
    city: "Long Sukang",
    iata: "LSU",
    name: "Long Sukang Airport",
    country: "Malaysia"
  },
  {
    city: "Lawas",
    iata: "LWY",
    name: "Lawas Airport",
    country: "Malaysia"
  },
  {
    city: "Bario",
    iata: "BBN",
    name: "Bario Airport",
    country: "Malaysia"
  },
  {
    city: "Semporna",
    iata: "SMM",
    name: "Semporna Airport",
    country: "Malaysia"
  },
  {
    city: "Lahad Datu",
    iata: "LDU",
    name: "Lahad Datu Airport",
    country: "Malaysia"
  },
  {
    city: "Telupid",
    iata: "TEL",
    name: "Telupid Airport",
    country: "Malaysia"
  },
  {
    city: "Keningau",
    iata: "KGU",
    name: "Keningau Airport",
    country: "Malaysia"
  },
  {
    city: "Sahabat",
    iata: "SXS",
    name: "Sahabat [Sahabat 16] Airport",
    country: "Malaysia"
  },
  {
    city: "Kota Kinabalu",
    iata: "BKI",
    name: "Kota Kinabalu International Airport",
    country: "Malaysia"
  },
  {
    city: "Labuan",
    iata: "LBU",
    name: "Labuan Airport",
    country: "Malaysia"
  },
  {
    city: "Tomanggong",
    iata: "TMG",
    name: "Tomanggong Airport",
    country: "Malaysia"
  },
  {
    city: "Long Miau",
    iata: "GSA",
    name: "Long Pasia Airport",
    country: "Malaysia"
  },
  {
    city: "Sepulot",
    iata: "SPE",
    name: "Sepulot Airport",
    country: "Malaysia"
  },
  {
    city: "Pamol",
    iata: "PAY",
    name: "Pamol Airport",
    country: "Malaysia"
  },
  {
    city: "Ranau",
    iata: "RNU",
    name: "Ranau Airport",
    country: "Malaysia"
  },
  {
    city: "Sandakan",
    iata: "SDK",
    name: "Sandakan Airport",
    country: "Malaysia"
  },
  {
    city: "Kudat",
    iata: "KUD",
    name: "Kudat Airport",
    country: "Malaysia"
  },
  {
    city: "Tawau",
    iata: "TWU",
    name: "Tawau Airport",
    country: "Malaysia"
  },
  {
    city: "Mulu",
    iata: "MZV",
    name: "Mulu Airport",
    country: "Malaysia"
  },
  {
    city: "Bandar Seri Begawan",
    iata: "BWN",
    name: "Brunei International Airport",
    country: "BN"
  },
  {
    city: "Belawai",
    iata: "TGC",
    name: "Tanjung Manis Airport",
    country: "Malaysia"
  },
  {
    city: "Ain District",
    iata: "WDA",
    name: "Al Ain Airport Ain District, Shabwah Governorate, Yemen",
    country: "YE"
  },
  {
    city: "Wedau",
    iata: "WED",
    name: "Wedau Airport",
    country: "PG"
  },
  {
    city: "Welshpool",
    iata: "WHL",
    name: "Welshpool Airport",
    country: "Australia"
  },
  {
    city: "Pekanbaru",
    iata: "PKU",
    name: "Sultan Syarif Kasim II International Airport / Roesmin Nurjadin AFB",
    country: "Indonesia"
  },
  {
    city: "Dumai",
    iata: "DUM",
    name: "Pinang Kampai Airport",
    country: "Indonesia"
  },
  {
    city: "Rengat-Sumatra Island",
    iata: "RGT",
    name: "Japura Airport",
    country: "Indonesia"
  },
  {
    city: "Bengkalis-Sumatra Island",
    iata: "SEQ",
    name: "Sungai Pakning Bengkalis Airport",
    country: "Indonesia"
  },
  {
    city: "Tanjung Balai-Karinmunbesar Island",
    iata: "TJB",
    name: "Raja Haji Abdullah Airport",
    country: "Indonesia"
  },
  {
    city: "Kertajati",
    iata: "KJT",
    name: "Kertajati International Airport",
    country: "Indonesia"
  },
  {
    city: "Tangerang-Java Island",
    iata: "RTO",
    name: "Budiarto Airport",
    country: "Indonesia"
  },
  {
    city: "Bandung",
    iata: "BDO",
    name: "Husein Sastranegara International Airport",
    country: "Indonesia"
  },
  {
    city: "Cirebon-Java Island",
    iata: "CBN",
    name: "Cakrabhuwana  Airport",
    country: "Indonesia"
  },
  {
    city: "Tasikmalaya-Java Island",
    iata: "TSY",
    name: "Cibeureum Airport",
    country: "Indonesia"
  },
  {
    city: "Cijulang",
    iata: "CJN",
    name: "Nusawiru Airport",
    country: "Indonesia"
  },
  {
    city: "Tambelan",
    iata: "TBX",
    name: "Tambelan Airport",
    country: "Indonesia"
  },
  {
    city: "Batam",
    iata: "BTH",
    name: "Hang Nadim International Airport",
    country: "Indonesia"
  },
  {
    city: "Pasir Pengarayan",
    iata: "PPR",
    name: "Tuanku Tambusai Airport",
    country: "Indonesia"
  },
  {
    city: "Bukit Padi",
    iata: "LMU",
    name: "Letung Airport",
    country: "Indonesia"
  },
  {
    city: "Palmatak",
    iata: "MWK",
    name: "Matak Airport",
    country: "Indonesia"
  },
  {
    city: "Tanjung Pinang-Bintan Island",
    iata: "TNJ",
    name: "Raja Haji Fisabilillah International Airport",
    country: "Indonesia"
  },
  {
    city: "Pasirkuning-Singkep Island",
    iata: "SIQ",
    name: "Dabo Airport",
    country: "Indonesia"
  },
  {
    city: "Muko Muko",
    iata: "MPC",
    name: "Muko Muko Airport",
    country: "Indonesia"
  },
  {
    city: "Jakarta",
    iata: "HLP",
    name: "Halim Perdanakusuma International Airport",
    country: "Indonesia"
  },
  {
    city: "Jakarta",
    iata: "PCB",
    name: "Pondok Cabe Air Base",
    country: "Indonesia"
  },
  {
    city: "Jakarta",
    iata: "CGK",
    name: "Soekarno-Hatta International Airport",
    country: "Indonesia"
  },
  {
    city: "Bandar Lampung",
    iata: "TKG",
    name: "Radin Inten II International Airport",
    country: "Indonesia"
  },
  {
    city: "Krui",
    iata: "TFY",
    name: "Muhammad Taufiq Kiemas Airport",
    country: "Indonesia"
  },
  {
    city: "Lhok Seumawe-Sumatra Island",
    iata: "LSW",
    name: "Malikus Saleh Airport",
    country: "Indonesia"
  },
  {
    city: "Gunungsitoli",
    iata: "GNS",
    name: "Binaka Airport",
    country: "Indonesia"
  },
  {
    city: "Padang Sidempuan",
    iata: "AEG",
    name: "Aek Godang Airport",
    country: "Indonesia"
  },
  {
    city: "Mandailing",
    iata: "JHN",
    name: "Jenderal Besar Abdul Haris Nasution Airport",
    country: "Indonesia"
  },
  {
    city: "Medan",
    iata: "MES",
    name: "Soewondo Air Force Base",
    country: "Indonesia"
  },
  {
    city: "Beringin",
    iata: "KNO",
    name: "Kualanamu International Airport",
    country: "Indonesia"
  },
  {
    city: "Siborong-Borong",
    iata: "DTB",
    name: "Silangit Airport",
    country: "Indonesia"
  },
  {
    city: "Parapat-Sumatra Island",
    iata: "SIW",
    name: "Sibisa Airport",
    country: "Indonesia"
  },
  {
    city: "Sibolga (Pinangsori)",
    iata: "FLZ",
    name: "Dr. Ferdinand Lumban Tobing Airport",
    country: "Indonesia"
  },
  {
    city: "Kutacane",
    iata: "LSR",
    name: "Alas Leuser Airport",
    country: "Indonesia"
  },
  {
    city: "Tanjung Pandan",
    iata: "TJQ",
    name: "H A S Hanandjoeddin International Airport",
    country: "Indonesia"
  },
  {
    city: "Nanga Pinoh-Borneo Island",
    iata: "NPO",
    name: "Nanga Pinoh Airport",
    country: "Indonesia"
  },
  {
    city: "Ketapang",
    iata: "KTG",
    name: "Rahadi Osman Airport",
    country: "Indonesia"
  },
  {
    city: "Ranai-Natuna Besar Island",
    iata: "NTX",
    name: "Ranai Airport",
    country: "Indonesia"
  },
  {
    city: "Pontianak",
    iata: "PNK",
    name: "Supadio International Airport",
    country: "Indonesia"
  },
  {
    city: "Putussibau-Borneo Island",
    iata: "PSU",
    name: "Pangsuma Airport",
    country: "Indonesia"
  },
  {
    city: "Sintang",
    iata: "SQG",
    name: "Tebelian Airport",
    country: "Indonesia"
  },
  {
    city: "Jambi",
    iata: "DJB",
    name: "Sultan Thaha Airport",
    country: "Indonesia"
  },
  {
    city: "Lubuk Linggau",
    iata: "LLJ",
    name: "Silampari Airport",
    country: "Indonesia"
  },
  {
    city: "Muara Bungo",
    iata: "BUU",
    name: "Muara Bungo Airport",
    country: "Indonesia"
  },
  {
    city: "Pangkal Pinang",
    iata: "PGK",
    name: "Depati Amir Airport",
    country: "Indonesia"
  },
  {
    city: "Bengkulu",
    iata: "BKS",
    name: "Fatmawati Soekarno Airport",
    country: "Indonesia"
  },
  {
    city: "Palembang",
    iata: "PLM",
    name: "Sultan Mahmud Badaruddin II Airport",
    country: "Indonesia"
  },
  {
    city: "Talang Gudang-Sumatra Island",
    iata: "PDO",
    name: "Pendopo Airport",
    country: "Indonesia"
  },
  {
    city: "Padang (Katapiang)",
    iata: "PDG",
    name: "Minangkabau International Airport",
    country: "Indonesia"
  },
  {
    city: "Bentayan",
    iata: "PXA",
    name: "Atung Bungsu Airport",
    country: "Indonesia"
  },
  {
    city: "Tapaktuan",
    iata: "TPK",
    name: "Teuku Cut Ali Airport",
    country: "Indonesia"
  },
  {
    city: "Kuala Pesisir",
    iata: "MEQ",
    name: "Cut Nyak Dhien Airport",
    country: "Indonesia"
  },
  {
    city: "Lubang",
    iata: "LKI",
    name: "Lasikin Airport",
    country: "Indonesia"
  },
  {
    city: "Takengon",
    iata: "TXE",
    name: "Rembele Airport",
    country: "Indonesia"
  },
  {
    city: "Lhok Sukon-Sumatra Island",
    iata: "LSX",
    name: "Lhok Sukon Airport",
    country: "Indonesia"
  },
  {
    city: "Sabang",
    iata: "SBG",
    name: "Maimun Saleh Airport",
    country: "Indonesia"
  },
  {
    city: "Banda Aceh",
    iata: "BTJ",
    name: "Sultan Iskandar Muda International Airport",
    country: "Indonesia"
  },
  {
    city: "Taman Negara",
    iata: "SXT",
    name: "Sungai Tiang Airport",
    country: "Malaysia"
  },
  {
    city: "Mersing",
    iata: "MEP",
    name: "Mersing Airport",
    country: "Malaysia"
  },
  {
    city: "Sitiawan",
    iata: "SWY",
    name: "Sitiawan Airport",
    country: "Malaysia"
  },
  {
    city: "Taiping",
    iata: "TPG",
    name: "Taiping (Tekah) Airport",
    country: "Malaysia"
  },
  {
    city: "Tioman Island",
    iata: "TOD",
    name: "Tioman Airport",
    country: "Malaysia"
  },
  {
    city: "Alor Satar",
    iata: "AOR",
    name: "Sultan Abdul Halim Airport",
    country: "Malaysia"
  },
  {
    city: "Butterworth",
    iata: "BWH",
    name: "RMAF Butterworth Air Base",
    country: "Malaysia"
  },
  {
    city: "Kota Baharu",
    iata: "KBR",
    name: "Sultan Ismail Petra Airport",
    country: "Malaysia"
  },
  {
    city: "Kuantan",
    iata: "KUA",
    name: "Kuantan Airport",
    country: "Malaysia"
  },
  {
    city: "Kerteh",
    iata: "KTE",
    name: "Kerteh Airport",
    country: "Malaysia"
  },
  {
    city: "Ipoh",
    iata: "IPH",
    name: "Sultan Azlan Shah Airport",
    country: "Malaysia"
  },
  {
    city: "Johor Bahru",
    iata: "JHB",
    name: "Senai International Airport",
    country: "Malaysia"
  },
  {
    city: "Sepang",
    iata: "KUL",
    name: "Kuala Lumpur International Airport",
    country: "Malaysia"
  },
  {
    city: "Langkawi",
    iata: "LGK",
    name: "Langkawi International Airport",
    country: "Malaysia"
  },
  {
    city: "Malacca",
    iata: "MKZ",
    name: "Malacca International Airport",
    country: "Malaysia"
  },
  {
    city: "Kuala Terengganu",
    iata: "TGG",
    name: "Sultan Mahmud Airport",
    country: "Malaysia"
  },
  {
    city: "Penang",
    iata: "PEN",
    name: "Penang International Airport",
    country: "Malaysia"
  },
  {
    city: "Pangkor Island",
    iata: "PKG",
    name: "Pulau Pangkor Airport",
    country: "Malaysia"
  },
  {
    city: "Redang",
    iata: "RDN",
    name: "LTS Pulau Redang Airport",
    country: "Malaysia"
  },
  {
    city: "Subang",
    iata: "SZB",
    name: "Sultan Abdul Aziz Shah International Airport",
    country: "Malaysia"
  },
  {
    city: "Decatur",
    iata: "DTR",
    name: "Decatur Shores Airport",
    country: "United States"
  },
  {
    city: "Saumlaki-Yamdena Island",
    iata: "SXK",
    name: "Mathilda Batlayeri Airport",
    country: "Indonesia"
  },
  {
    city: "Vila",
    iata: "AUT",
    name: "Atauro Airport",
    country: "TL"
  },
  {
    city: "Suai",
    iata: "UAI",
    name: "Commander in Chief of FALINTIL, Kay Rala Xanana Gusmão, International Airport",
    country: "TL"
  },
  {
    city: "Dili",
    iata: "DIL",
    name: "Presidente Nicolau Lobato International Airport",
    country: "TL"
  },
  {
    city: "Baucau",
    iata: "BCH",
    name: "Baucau Airport",
    country: "TL"
  },
  {
    city: "Maliana",
    iata: "MPT",
    name: "Maliana Airport",
    country: "TL"
  },
  {
    city: "Oecussi-Ambeno",
    iata: "OEC",
    name: "Oecusse Route of the Sandalwood International Airport",
    country: "TL"
  },
  {
    city: "Viqueque",
    iata: "VIQ",
    name: "Viqueque Airport",
    country: "TL"
  },
  {
    city: "Sanggata/Sangkimah",
    iata: "SGQ",
    name: "Sanggata/Sangkimah Airport",
    country: "Indonesia"
  },
  {
    city: "Long Bawan",
    iata: "LBW",
    name: "Yuvai Semaring Airport",
    country: "Indonesia"
  },
  {
    city: "Bontang-Borneo Island",
    iata: "BXT",
    name: "LNG Badak Airport",
    country: "Indonesia"
  },
  {
    city: "Nunukan-Nunukan Island",
    iata: "NNX",
    name: "Nunukan Airport",
    country: "Indonesia"
  },
  {
    city: "Tanah Grogot",
    iata: "TNB",
    name: "Tanah Grogot Airport",
    country: "Indonesia"
  },
  {
    city: "Long Apung-Borneo Island",
    iata: "LPU",
    name: "Long Apung Airport",
    country: "Indonesia"
  },
  {
    city: "Paya Lebar",
    iata: "QPG",
    name: "Paya Lebar Air Base",
    country: "Singapore"
  },
  {
    city: "Western Water Catchment",
    iata: "TGA",
    name: "Tengah Air Base",
    country: "Singapore"
  },
  {
    city: "Steamboat Bay",
    iata: "WSB",
    name: "Steamboat Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "San Juan",
    iata: "UGI",
    name: "San Juan /Uganik/ Seaplane Base",
    country: "United States"
  },
  {
    city: "Wiseman",
    iata: "WSM",
    name: "Wiseman Airport",
    country: "United States"
  },
  {
    city: "Seletar",
    iata: "XSP",
    name: "Seletar Airport",
    country: "Singapore"
  },
  {
    city: "Singapore",
    iata: "SIN",
    name: "Singapore Changi Airport",
    country: "Singapore"
  },
  {
    city: "Glendale",
    iata: "GWV",
    name: "Glendale Fokker Field",
    country: "United States"
  },
  {
    city: "Urad Middle Banner",
    iata: "WZQ",
    name: "Urad Middle Banner Airport",
    country: "China"
  },
  {
    city: "Miami",
    iata: "MPB",
    name: "Miami Seaplane Base",
    country: "United States"
  },
  {
    city: "Blubber Bay",
    iata: "XBB",
    name: "Blubber Bay Seaplane Base",
    country: "Canada"
  },
  {
    city: "Xinguara",
    iata: "XIG",
    name: "Xinguara Municipal Airport",
    country: "Brazil"
  },
  {
    city: "Maramag",
    iata: "XMA",
    name: "Maramag Airport",
    country: "Philippines"
  },
  {
    city: "New Barag Right Banner",
    iata: "XRQ",
    name: "New Barag Right Banner Baogede Airport",
    country: "China"
  },
  {
    city: "Sé",
    iata: "XZM",
    name: "Macau Heliport at Outer Harbour Ferry Terminal",
    country: "MO"
  },
  {
    city: "Waukon",
    iata: "UKN",
    name: "Waukon Municipal Airport",
    country: "United States"
  },
  {
    city: "Albany",
    iata: "ALH",
    name: "Albany Airport",
    country: "Australia"
  },
  {
    city: "Abingdon Downs",
    iata: "ABG",
    name: "Abingdon Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AWN",
    name: "Alton Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AUD",
    name: "Augustus Downs Airport",
    country: "Australia"
  },
  {
    city: "Saturna Island",
    iata: "YAJ",
    name: "Lyall Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Marla",
    iata: "MRP",
    name: "Marla Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AXL",
    name: "Alexandria Homestead Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AXC",
    name: "Aramac Airport",
    country: "Australia"
  },
  {
    city: "Andamooka",
    iata: "ADO",
    name: "Andamooka Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AMX",
    name: "Ammaroo Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AMT",
    name: "Amata Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WLP",
    name: "West Angelas Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AYL",
    name: "Anthony Lagoon Airport",
    country: "Australia"
  },
  {
    city: "Alpha",
    iata: "ABH",
    name: "Alpha Airport",
    country: "Australia"
  },
  {
    city: "Maple Bay",
    iata: "YAQ",
    name: "Maple Bay Seaplane Base",
    country: "Canada"
  },
  {
    city: "Ararat",
    iata: "ARY",
    name: "Ararat Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GYL",
    name: "Argyle Airport",
    country: "Australia"
  },
  {
    city: "Armidale",
    iata: "ARM",
    name: "Armidale Airport",
    country: "Australia"
  },
  {
    city: "Tanbar",
    iata: "AAB",
    name: "Arrabury Airport",
    country: "Australia"
  },
  {
    city: "Aurukun",
    iata: "AUU",
    name: "Aurukun Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "AWP",
    name: "Austral Downs Airport",
    country: "Australia"
  },
  {
    city: "Auvergne Station",
    iata: "AVG",
    name: "Auvergne Airport",
    country: "Australia"
  },
  {
    city: "Yulara",
    iata: "AYQ",
    name: "Ayers Rock Connellan Airport",
    country: "Australia"
  },
  {
    city: "Ayr",
    iata: "AYR",
    name: "Ayr Airport",
    country: "Australia"
  },
  {
    city: "Wunaamin Miliwundi Ranges",
    iata: "MBN",
    name: "Mount Barnett Airport",
    country: "Australia"
  },
  {
    city: "Barcaldine",
    iata: "BCI",
    name: "Barcaldine Airport",
    country: "Australia"
  },
  {
    city: "Alice Springs",
    iata: "ASP",
    name: "Alice Springs Airport",
    country: "Australia"
  },
  {
    city: "Badu Island",
    iata: "BDD",
    name: "Badu Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BKP",
    name: "Barkly Downs Airport",
    country: "Australia"
  },
  {
    city: "Brisbane",
    iata: "BNE",
    name: "Brisbane International Airport",
    country: "Australia"
  },
  {
    city: "Gold Coast",
    iata: "OOL",
    name: "Gold Coast Airport",
    country: "Australia"
  },
  {
    city: "Blackall",
    iata: "BKQ",
    name: "Blackall Airport",
    country: "Australia"
  },
  {
    city: "Cairns",
    iata: "CNS",
    name: "Cairns International Airport",
    country: "Australia"
  },
  {
    city: "Charleville",
    iata: "CTL",
    name: "Charleville Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BDW",
    name: "Bedford Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BXG",
    name: "Bendigo Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BVI",
    name: "Birdsville Airport",
    country: "Australia"
  },
  {
    city: "Pumululu National Park",
    iata: "BXF",
    name: "Bellburn Airstrip",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BTX",
    name: "Betoota Airport",
    country: "Australia"
  },
  {
    city: "Dampier Peninsula",
    iata: "BEE",
    name: "Beagle Bay Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "OCM",
    name: "Boolgeeda",
    country: "Australia"
  },
  {
    city: "Balgo",
    iata: "BQW",
    name: "Balgo Hill Airport",
    country: "Australia"
  },
  {
    city: "Bull Harbour",
    iata: "YBH",
    name: "Bull Harbour Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Broken Hill",
    iata: "BHQ",
    name: "Broken Hill Airport",
    country: "Australia"
  },
  {
    city: "Hamilton Island",
    iata: "HTI",
    name: "Hamilton Island Airport",
    country: "Australia"
  },
  {
    city: "Bedourie",
    iata: "BEU",
    name: "Bedourie Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BIW",
    name: "Billiluna Airport",
    country: "Australia"
  },
  {
    city: "Lakefield National Park",
    iata: "BZP",
    name: "Bizant Airport",
    country: "Australia"
  },
  {
    city: "Baie-Johan-Beetz",
    iata: "YBJ",
    name: "Baie-Johan-Beetz Water Aerodrome",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "BRK",
    name: "Bourke Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BUC",
    name: "Burketown Airport",
    country: "Australia"
  },
  {
    city: "Benalla",
    iata: "BLN",
    name: "Benalla Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LCN",
    name: "Balcanoona Airport",
    country: "Australia"
  },
  {
    city: "Biloela",
    iata: "ZBL",
    name: "Biloela Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BLS",
    name: "Bollon Airport",
    country: "Australia"
  },
  {
    city: "Busselton",
    iata: "BQB",
    name: "Busselton Margaret River Regional Airport",
    country: "Australia"
  },
  {
    city: "Mount Isa",
    iata: "ISA",
    name: "Mount Isa Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BFC",
    name: "Bloomfield River Airport",
    country: "Australia"
  },
  {
    city: "Mackay",
    iata: "MKY",
    name: "Mackay Airport",
    country: "Australia"
  },
  {
    city: "Ballina",
    iata: "BNK",
    name: "Ballina Byron Gateway Airport",
    country: "Australia"
  },
  {
    city: "Bairnsdale",
    iata: "BSJ",
    name: "Bairnsdale Airport",
    country: "Australia"
  },
  {
    city: "Boigu Island",
    iata: "GIC",
    name: "Boigu Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "OKY",
    name: "Oakey Army Aviation Centre",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BQL",
    name: "Boulia Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BMP",
    name: "Brampton Island Airport",
    country: "Australia"
  },
  {
    city: "Melbourne",
    iata: "KAH",
    name: "Melbourne Heliport, Batman Park",
    country: "Australia"
  },
  {
    city: "Proserpine",
    iata: "PPP",
    name: "Proserpine Whitsunday Coast Airport",
    country: "Australia"
  },
  {
    city: "Thetis Island",
    iata: "YBQ",
    name: "Telegraph Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Rockhampton",
    iata: "ROK",
    name: "Rockhampton Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BOX",
    name: "Borroloola Airport",
    country: "Australia"
  },
  {
    city: "Broome",
    iata: "BME",
    name: "Broome International Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BZD",
    name: "Balranald Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BTD",
    name: "Brunette Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BWQ",
    name: "Brewarrina Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BYP",
    name: "Barimunya Airport",
    country: "Australia"
  },
  {
    city: "Maroochydore",
    iata: "MCY",
    name: "Sunshine Coast Airport",
    country: "Australia"
  },
  {
    city: "Bathurst",
    iata: "BHS",
    name: "Bathurst Airport",
    country: "Australia"
  },
  {
    city: "Wurrumiyanga",
    iata: "BRT",
    name: "Bathurst Island Airport",
    country: "Australia"
  },
  {
    city: "Townsville",
    iata: "TSV",
    name: "Townsville Airport / RAAF Base Townsville",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BLT",
    name: "Blackwater Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BVW",
    name: "Batavia Downs Airport",
    country: "Australia"
  },
  {
    city: "Bundaberg",
    iata: "BDB",
    name: "Bundaberg Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BUY",
    name: "Bunbury Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BIP",
    name: "Bulimba Airport",
    country: "Australia"
  },
  {
    city: "Bowen",
    iata: "ZBO",
    name: "Bowen Airport",
    country: "Australia"
  },
  {
    city: "Weipa",
    iata: "WEI",
    name: "Weipa Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BCK",
    name: "Bolwarra Airport",
    country: "Australia"
  },
  {
    city: "Toowoomba",
    iata: "WTB",
    name: "Toowoomba Wellcamp Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BWB",
    name: "Barrow Island Airport",
    country: "Australia"
  },
  {
    city: "Wunaamin Miliwundi Ranges",
    iata: "BVZ",
    name: "Beverley Springs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CTR",
    name: "Cattle Creek Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CGV",
    name: "Caiguna Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CLH",
    name: "Coolah Airport",
    country: "Australia"
  },
  {
    city: "Carnarvon",
    iata: "CVQ",
    name: "Carnarvon Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CSI",
    name: "Casino Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CAZ",
    name: "Cobar Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "COJ",
    name: "Coonabarabran Airport",
    country: "Australia"
  },
  {
    city: "Canobie",
    iata: "CBY",
    name: "Canobie Airport",
    country: "Australia"
  },
  {
    city: "Cape Barren Island",
    iata: "CBI",
    name: "Cape Barren Island Airport",
    country: "Australia"
  },
  {
    city: "Coober Pedy",
    iata: "CPD",
    name: "Coober Pedy Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CRB",
    name: "Collarenebri Airport",
    country: "Australia"
  },
  {
    city: "Chinchilla",
    iata: "CCL",
    name: "Chinchilla Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CNC",
    name: "Coconut Island Airport",
    country: "Australia"
  },
  {
    city: "Cloncurry",
    iata: "CNJ",
    name: "Cloncurry Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CBX",
    name: "Condobolin Airport",
    country: "Australia"
  },
  {
    city: "Caloundra",
    iata: "CUD",
    name: "Caloundra Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CED",
    name: "Ceduna Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CVC",
    name: "Cleve Airport",
    country: "Australia"
  },
  {
    city: "Cortes Bay",
    iata: "YCF",
    name: "Cortes Bay Water Aerodrome",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "CFI",
    name: "Camfield Airport",
    country: "Australia"
  },
  {
    city: "Clifton Hills",
    iata: "CFH",
    name: "Clifton Hills Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CQP",
    name: "Cape Flattery Airport",
    country: "Australia"
  },
  {
    city: "Coffs Harbour",
    iata: "CFS",
    name: "Coffs Harbour Airport",
    country: "Australia"
  },
  {
    city: "Chillagoe",
    iata: "LLG",
    name: "Chillagoe Airport",
    country: "Australia"
  },
  {
    city: "Cherrabah Homestead Resort",
    iata: "CRH",
    name: "Cherrabah Airport",
    country: "Australia"
  },
  {
    city: "Christmas Creek Mine",
    iata: "CKW",
    name: "Christmas Creek Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CXT",
    name: "Charters Towers Airport",
    country: "Australia"
  },
  {
    city: "Derby",
    iata: "DCN",
    name: "RAAF Base Curtin",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CKI",
    name: "Croker Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CTN",
    name: "Cooktown Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CMQ",
    name: "Clermont Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CMA",
    name: "Cunnamulla Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CML",
    name: "Camooweal Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NIF",
    name: "Camp Nifty Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CES",
    name: "Cessnock Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CNB",
    name: "Coonamble Airport",
    country: "Australia"
  },
  {
    city: "Cordillo Downs",
    iata: "ODL",
    name: "Cordillo Downs Airport",
    country: "Australia"
  },
  {
    city: "Coen",
    iata: "CUQ",
    name: "Coen Airport",
    country: "Australia"
  },
  {
    city: "Collie",
    iata: "CIE",
    name: "Collie Airport",
    country: "Australia"
  },
  {
    city: "Cooma",
    iata: "OOM",
    name: "Cooma Snowy Mountains Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CDA",
    name: "Cooinda Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CWW",
    name: "Corowa Airport",
    country: "Australia"
  },
  {
    city: "Carpentaria Downs",
    iata: "CFP",
    name: "Carpentaria Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CYG",
    name: "Corryong Airport",
    country: "Australia"
  },
  {
    city: "Wangkat Jungka",
    iata: "CXQ",
    name: "Christmas Creek Station Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CDQ",
    name: "Croydon Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KCE",
    name: "Collinsville Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CMD",
    name: "Cootamundra Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CUG",
    name: "Cudal Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CUY",
    name: "Cue Airport",
    country: "Australia"
  },
  {
    city: "Coondewanna",
    iata: "CJF",
    name: "Coondewanna Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CWR",
    name: "Cowarie Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CCW",
    name: "Cowell Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CWT",
    name: "Cowra Airport",
    country: "Australia"
  },
  {
    city: "Coolawanyah Station",
    iata: "COY",
    name: "Coolawanyah Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DJR",
    name: "Dajarra Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DBY",
    name: "Dalby Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DRN",
    name: "Dirranbandi Airport",
    country: "Australia"
  },
  {
    city: "Maramie",
    iata: "DNB",
    name: "Dunbar Airport",
    country: "Australia"
  },
  {
    city: "Derby",
    iata: "DRB",
    name: "Derby Airport",
    country: "Australia"
  },
  {
    city: "Palmer",
    iata: "DFP",
    name: "Drumduff Airport",
    country: "Australia"
  },
  {
    city: "Whitsundays",
    iata: "DDI",
    name: "Daydream Island Helipad",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DGD",
    name: "Dalgaranga Gold Mine Airport",
    country: "Australia"
  },
  {
    city: "Drysdale River",
    iata: "DNG",
    name: "Doongan Airport",
    country: "Australia"
  },
  {
    city: "New Dixie",
    iata: "DXD",
    name: "Dixie Airport",
    country: "Australia"
  },
  {
    city: "Dunk Island",
    iata: "DKI",
    name: "Dunk Island Airport",
    country: "Australia"
  },
  {
    city: "Dulkaninna",
    iata: "DLK",
    name: "Dulkaninna Airport",
    country: "Australia"
  },
  {
    city: "Deniliquin",
    iata: "DNQ",
    name: "Deniliquin Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DDN",
    name: "Delta Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DLV",
    name: "Delissaville Airport",
    country: "Australia"
  },
  {
    city: "Daly Waters",
    iata: "DYW",
    name: "Daly Waters Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DMD",
    name: "Doomadgee Airport",
    country: "Australia"
  },
  {
    city: "Nauiyu",
    iata: "DVR",
    name: "Daly River Airport",
    country: "Australia"
  },
  {
    city: "Darnley Island",
    iata: "NLF",
    name: "Darnley Island Airport",
    country: "Australia"
  },
  {
    city: "Dorunda Outstation",
    iata: "DRD",
    name: "Dorunda Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DVP",
    name: "Davenport Downs Airport",
    country: "Australia"
  },
  {
    city: "Devonport",
    iata: "DPO",
    name: "Devonport Airport",
    country: "Australia"
  },
  {
    city: "Port Denison",
    iata: "DOX",
    name: "Dongara Airport",
    country: "Australia"
  },
  {
    city: "Drysdale River",
    iata: "DRY",
    name: "Drysdale River Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DHD",
    name: "Durham Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DRR",
    name: "Durrie Airport",
    country: "Australia"
  },
  {
    city: "North Stradbroke Island",
    iata: "SRR",
    name: "Dunwich Airport",
    country: "Australia"
  },
  {
    city: "Kaltukatjara",
    iata: "DKV",
    name: "Docker River Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "DYA",
    name: "Dysart Airport",
    country: "Australia"
  },
  {
    city: "Ar Rawdah",
    iata: "RXA",
    name: "Ar Rawdah Airport",
    country: "YE"
  },
  {
    city: "nan",
    iata: "ECH",
    name: "Echuca Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "EUC",
    name: "Eucla Airport",
    country: "Australia"
  },
  {
    city: "Etadunna",
    iata: "ETD",
    name: "Etadunna Airport",
    country: "Australia"
  },
  {
    city: "Eneabba",
    iata: "ENB",
    name: "Eneabba Airport",
    country: "Australia"
  },
  {
    city: "Einasleigh",
    iata: "EIH",
    name: "Einasleigh Airport",
    country: "Australia"
  },
  {
    city: "Elcho Island",
    iata: "ELC",
    name: "Elcho Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "EKD",
    name: "Elkedra Airport",
    country: "Australia"
  },
  {
    city: "Emerald",
    iata: "EMD",
    name: "Emerald Airport",
    country: "Australia"
  },
  {
    city: "Ghan",
    iata: "EDD",
    name: "Erldunda Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ERB",
    name: "Ernabella Airport",
    country: "Australia"
  },
  {
    city: "Elrose Mine",
    iata: "ERQ",
    name: "Elrose Airport",
    country: "Australia"
  },
  {
    city: "Esperance",
    iata: "EPR",
    name: "Esperance Airport",
    country: "Australia"
  },
  {
    city: "Eva Downs",
    iata: "EVD",
    name: "Eva Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "EVH",
    name: "Evans Head Aerodrome",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WHB",
    name: "Eliwana",
    country: "Australia"
  },
  {
    city: "Exmouth",
    iata: "EXM",
    name: "Exmouth Airport",
    country: "Australia"
  },
  {
    city: "Forbes",
    iata: "FRB",
    name: "Forbes Airport",
    country: "Australia"
  },
  {
    city: "Cloudbreak Village",
    iata: "KFE",
    name: "Fortescue - Dave Forrest Aerodrome",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "FLY",
    name: "Finley Airport",
    country: "Australia"
  },
  {
    city: "Whitemark",
    iata: "FLS",
    name: "Flinders Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "FVL",
    name: "Flora Valley Airport",
    country: "Australia"
  },
  {
    city: "Finke",
    iata: "FIK",
    name: "Finke Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "FOS",
    name: "Forrest Airport",
    country: "Australia"
  },
  {
    city: "Oombulgurri",
    iata: "FVR",
    name: "Oombulgurri Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "FOT",
    name: "Forster (Wallis Is) Airport",
    country: "Australia"
  },
  {
    city: "Fremantle",
    iata: "JFM",
    name: "Fremantle Heliport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "FIZ",
    name: "Fitzroy Crossing Airport",
    country: "Australia"
  },
  {
    city: "Chongqing",
    iata: "YGA",
    name: "Yongchuan Da'an General Airport",
    country: "China"
  },
  {
    city: "Gamboola",
    iata: "GBP",
    name: "Gamboola Airport",
    country: "Australia"
  },
  {
    city: "Gayndah",
    iata: "GAH",
    name: "Gayndah Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GBL",
    name: "South Goulburn Is Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GUH",
    name: "Gunnedah Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GOO",
    name: "Goondiwindi Airport",
    country: "Australia"
  },
  {
    city: "Gordon Downs",
    iata: "GDD",
    name: "Gordon Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GGD",
    name: "Gregory Downs Airport",
    country: "Australia"
  },
  {
    city: "Gorge Harbour",
    iata: "YGE",
    name: "Gorge Harbour Seaplane Base",
    country: "Canada"
  },
  {
    city: "Moonyoonooka",
    iata: "GET",
    name: "Geraldton Airport",
    country: "Australia"
  },
  {
    city: "Grafton",
    iata: "GFN",
    name: "Clarence Valley Regional Airport",
    country: "Australia"
  },
  {
    city: "Ginbata",
    iata: "GBW",
    name: "Ginbata Airport",
    country: "Australia"
  },
  {
    city: "Gibb",
    iata: "GBV",
    name: "Gibb River Airport",
    country: "Australia"
  },
  {
    city: "Great Keppel Island",
    iata: "GKL",
    name: "Great Keppel Is Airport",
    country: "Australia"
  },
  {
    city: "Gladstone",
    iata: "GLT",
    name: "Gladstone Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GUL",
    name: "Goulburn Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GLG",
    name: "Glengyle Airport",
    country: "Australia"
  },
  {
    city: "Glen Innes",
    iata: "GLI",
    name: "Glen Innes Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GLM",
    name: "Glenormiston Airport",
    country: "Australia"
  },
  {
    city: "Broughton Island",
    iata: "YGN",
    name: "Greenway Sound Seaplane Base",
    country: "Canada"
  },
  {
    city: "Grenfell",
    iata: "GFE",
    name: "Grenfell Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GVP",
    name: "Greenvale Airport",
    country: "Australia"
  },
  {
    city: "Mount Gordon Mine",
    iata: "GPD",
    name: "Mount Gordon Airport",
    country: "Australia"
  },
  {
    city: "Pirlangimpi",
    iata: "GPN",
    name: "Garden Point Airport",
    country: "Australia"
  },
  {
    city: "Gascoyne Junction",
    iata: "GSC",
    name: "Gascoyne Junction Airport",
    country: "Australia"
  },
  {
    city: "Groote Eylandt",
    iata: "GTE",
    name: "Groote Eylandt Airport",
    country: "Australia"
  },
  {
    city: "Griffith",
    iata: "GFF",
    name: "Griffith Airport",
    country: "Australia"
  },
  {
    city: "Georgetown",
    iata: "GTT",
    name: "Georgetown Airport",
    country: "Australia"
  },
  {
    city: "George Town",
    iata: "GEE",
    name: "George Town Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "GYP",
    name: "Gympie Airport",
    country: "Australia"
  },
  {
    city: "Hawker",
    iata: "HWK",
    name: "Wilpena Pound Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HXX",
    name: "Hay Airport",
    country: "Australia"
  },
  {
    city: "Hervey Bay",
    iata: "HVB",
    name: "Hervey Bay Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HUB",
    name: "Humbert River Airport",
    country: "Australia"
  },
  {
    city: "Ghan",
    iata: "HRY",
    name: "Henbury Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HIP",
    name: "Headingly Airport",
    country: "Australia"
  },
  {
    city: "Highbury",
    iata: "HIG",
    name: "Highbury Airport",
    country: "Australia"
  },
  {
    city: "Horn",
    iata: "HID",
    name: "Horn Island Airport",
    country: "Australia"
  },
  {
    city: "Hillside",
    iata: "HLL",
    name: "Hillside Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HCQ",
    name: "Halls Creek Airport",
    country: "Australia"
  },
  {
    city: "Hermannsburg (Ntaria)",
    iata: "HMG",
    name: "Hermannsburg Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HLT",
    name: "Hamilton Airport",
    country: "Australia"
  },
  {
    city: "Lajamanu",
    iata: "HOK",
    name: "Hooker Creek Airport",
    country: "Australia"
  },
  {
    city: "Mount Hotham",
    iata: "MHU",
    name: "Mount Hotham Airport",
    country: "Australia"
  },
  {
    city: "Long Island",
    iata: "HAP",
    name: "Happy Bay Helipad",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HTU",
    name: "Hopetoun Airport",
    country: "Australia"
  },
  {
    city: "Hope Vale",
    iata: "HPE",
    name: "Hope Vale Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HSM",
    name: "Horsham Airport",
    country: "Australia"
  },
  {
    city: "Shelburne",
    iata: "HAT",
    name: "Heathlands Airport",
    country: "Australia"
  },
  {
    city: "Hughenden",
    iata: "HGD",
    name: "Hughenden Airport",
    country: "Australia"
  },
  {
    city: "Japal Camp",
    iata: "IBM",
    name: "Iron Bridge Mine Airport",
    country: "Australia"
  },
  {
    city: "Indulkana",
    iata: "IDK",
    name: "Indulkana Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "IFL",
    name: "Innisfail Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "IFF",
    name: "Iffley Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "IGH",
    name: "Ingham Airport",
    country: "Australia"
  },
  {
    city: "Inkerman",
    iata: "IKP",
    name: "Inkerman Airport",
    country: "Australia"
  },
  {
    city: "Injune",
    iata: "INJ",
    name: "Injune Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "INM",
    name: "Innamincka Airport",
    country: "Australia"
  },
  {
    city: "Inverway",
    iata: "IVW",
    name: "Inverway Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ISI",
    name: "Isisford Airport",
    country: "Australia"
  },
  {
    city: "Inverell",
    iata: "IVR",
    name: "Inverell Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "JAB",
    name: "Jabiru Airport",
    country: "Australia"
  },
  {
    city: "Jundah",
    iata: "JUN",
    name: "Jundah Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "JCK",
    name: "Julia Creek Airport",
    country: "Australia"
  },
  {
    city: "Jurien Bay",
    iata: "JUR",
    name: "Jurien Bay Airport",
    country: "Australia"
  },
  {
    city: "Kalumburu",
    iata: "UBU",
    name: "Kalumburu Airport",
    country: "Australia"
  },
  {
    city: "Karara",
    iata: "KQR",
    name: "Karara Airport",
    country: "Australia"
  },
  {
    city: "Ken's Bore",
    iata: "KYB",
    name: "Ken's Bore airport",
    country: "Australia"
  },
  {
    city: "Kambalda West",
    iata: "KDB",
    name: "Kambalda Airport",
    country: "Australia"
  },
  {
    city: "Kalbarri",
    iata: "KAX",
    name: "Kalbarri Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KBY",
    name: "Streaky Bay Airport",
    country: "Australia"
  },
  {
    city: "Petermann",
    iata: "KBJ",
    name: "Kings Canyon Airport",
    country: "Australia"
  },
  {
    city: "Petermann",
    iata: "KCS",
    name: "Kings Creek Airport",
    country: "Australia"
  },
  {
    city: "Koodaideri Mine",
    iata: "OOD",
    name: "Koodaideri Mine Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KRA",
    name: "Kerang Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KNS",
    name: "King Island Airport",
    country: "Australia"
  },
  {
    city: "Kirkimbie",
    iata: "KBB",
    name: "Kirkimbie Station Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KFG",
    name: "Kalkgurung Airport",
    country: "Australia"
  },
  {
    city: "Maramie",
    iata: "KOH",
    name: "Koolatah Airport",
    country: "Australia"
  },
  {
    city: "Koolburra",
    iata: "KKP",
    name: "Koolburra Airport",
    country: "Australia"
  },
  {
    city: "Koolan Island",
    iata: "KCI",
    name: "Koolan Central Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KRB",
    name: "Karumba Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KML",
    name: "Kamileroi Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KPS",
    name: "Kempsey Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KNI",
    name: "Katanning Airport",
    country: "Australia"
  },
  {
    city: "Kowanyama",
    iata: "KWM",
    name: "Kowanyama Airport",
    country: "Australia"
  },
  {
    city: "Kalpower",
    iata: "KPP",
    name: "Kalpowar Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KGY",
    name: "Kingaroy Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KGC",
    name: "Kingscote Airport",
    country: "Australia"
  },
  {
    city: "Klemtu",
    iata: "YKT",
    name: "Klemtu Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Kubin Island",
    iata: "KUG",
    name: "Kubin Island Airport",
    country: "Australia"
  },
  {
    city: "Kurundi Station",
    iata: "KRD",
    name: "Kurundi Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LWH",
    name: "Lawn Hill Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LGH",
    name: "Leigh Creek Airport",
    country: "Australia"
  },
  {
    city: "Leonora",
    iata: "LNO",
    name: "Leonora Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LEL",
    name: "Lake Evella Airport",
    country: "Australia"
  },
  {
    city: "Lakefield",
    iata: "LFP",
    name: "Lakefield Airport",
    country: "Australia"
  },
  {
    city: "Lord Howe Island",
    iata: "LDH",
    name: "Lord Howe Island Airport",
    country: "Australia"
  },
  {
    city: "Lockhart River",
    iata: "IRG",
    name: "Lockhart River Airport",
    country: "Australia"
  },
  {
    city: "Lyndhurst",
    iata: "LTP",
    name: "Lyndhurst Airport",
    country: "Australia"
  },
  {
    city: "Limbunya",
    iata: "LIB",
    name: "Limbunya Airport",
    country: "Australia"
  },
  {
    city: "Lindeman Island",
    iata: "LDC",
    name: "Lindeman Island Airport",
    country: "Australia"
  },
  {
    city: "Lismore",
    iata: "LSY",
    name: "Lismore Airport",
    country: "Australia"
  },
  {
    city: "Alpurrurulam",
    iata: "LNH",
    name: "Lake Nash Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "BBL",
    name: "Ballera Airport",
    country: "Australia"
  },
  {
    city: "City of Lake Macquarie",
    iata: "BEO",
    name: "Lake Macquarie Airport",
    country: "Australia"
  },
  {
    city: "Lakeland Downs",
    iata: "LKD",
    name: "Lakeland Airport",
    country: "Australia"
  },
  {
    city: "Lock",
    iata: "LOC",
    name: "Lock Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LOA",
    name: "Lorraine Airport",
    country: "Australia"
  },
  {
    city: "Lotus Vale",
    iata: "LTV",
    name: "Lotus Vale Airport",
    country: "Australia"
  },
  {
    city: "Longue-Pointe-de-Mingan",
    iata: "YLP",
    name: "Mingan Airport",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "LUU",
    name: "Laura Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LHG",
    name: "Lightning Ridge Airport",
    country: "Australia"
  },
  {
    city: "Longreach",
    iata: "LRE",
    name: "Longreach Airport",
    country: "Australia"
  },
  {
    city: "Laura Station",
    iata: "LUT",
    name: "New Laura Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LER",
    name: "Leinster Airport",
    country: "Australia"
  },
  {
    city: "Laverton",
    iata: "LVO",
    name: "Laverton Airport",
    country: "Australia"
  },
  {
    city: "Morwell",
    iata: "TGN",
    name: "Latrobe Valley Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "LZR",
    name: "Lizard Island Airport",
    country: "Australia"
  },
  {
    city: "Mabuiag Island",
    iata: "UBB",
    name: "Mabuiag Island Airport",
    country: "Australia"
  },
  {
    city: "Murray Island",
    iata: "MYI",
    name: "Murray Island Airport",
    country: "Australia"
  },
  {
    city: "Geelong/Melbourne",
    iata: "AVV",
    name: "Melbourne Avalon International Airport",
    country: "Australia"
  },
  {
    city: "East Albury",
    iata: "ABX",
    name: "Albury Airport",
    country: "Australia"
  },
  {
    city: "Mareeba",
    iata: "MRG",
    name: "Mareeba Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MBB",
    name: "Marble Bar Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "XMC",
    name: "Mallacoota Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MFP",
    name: "Manners Creek Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MLR",
    name: "Millicent Airport",
    country: "Australia"
  },
  {
    city: "Mudgee",
    iata: "DGE",
    name: "Mudgee Airport",
    country: "Australia"
  },
  {
    city: "Eighty Mile Beach",
    iata: "MQA",
    name: "Mandora Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MNW",
    name: "Macdonald Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MKR",
    name: "Meekatharra Airport",
    country: "Australia"
  },
  {
    city: "Essendon Fields",
    iata: "MEB",
    name: "Melbourne Essendon Airport",
    country: "Australia"
  },
  {
    city: "Merimbula",
    iata: "MIM",
    name: "Merimbula Airport",
    country: "Australia"
  },
  {
    city: "Merluna",
    iata: "MLV",
    name: "Merluna Airport",
    country: "Australia"
  },
  {
    city: "Milingimbi Island",
    iata: "MGT",
    name: "Milingimbi Airport",
    country: "Australia"
  },
  {
    city: "Maningrida",
    iata: "MNG",
    name: "Maningrida Airport",
    country: "Australia"
  },
  {
    city: "Mount Gunson",
    iata: "GSN",
    name: "Mount Gunson Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MGV",
    name: "Margaret River (Station) Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MQZ",
    name: "Margaret River Airport",
    country: "Australia"
  },
  {
    city: "Musgrave",
    iata: "MVU",
    name: "Musgrave Airport",
    country: "Australia"
  },
  {
    city: "Hobart (Cambridge)",
    iata: "HBA",
    name: "Hobart International Airport",
    country: "Australia"
  },
  {
    city: "Wunaamin Miliwundi Ranges",
    iata: "MHO",
    name: "Mount House Airport",
    country: "Australia"
  },
  {
    city: "McArthur River Mine",
    iata: "MCV",
    name: "McArthur River Mine Airport",
    country: "Australia"
  },
  {
    city: "Mildura",
    iata: "MQL",
    name: "Mildura Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "XML",
    name: "Minlaton Airport",
    country: "Australia"
  },
  {
    city: "Mitchell Plateau",
    iata: "MIH",
    name: "Mitchell Plateau Airport",
    country: "Australia"
  },
  {
    city: "Miranda Downs",
    iata: "MWY",
    name: "Miranda Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MTQ",
    name: "Mitchell Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MJP",
    name: "Manjimup Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WLE",
    name: "Miles Airport",
    country: "Australia"
  },
  {
    city: "Launceston (Western Junction)",
    iata: "LST",
    name: "Launceston Airport",
    country: "Australia"
  },
  {
    city: "Melbourne",
    iata: "MBW",
    name: "Melbourne Moorabbin Airport",
    country: "Australia"
  },
  {
    city: "Murrin Murrin",
    iata: "WUI",
    name: "Murrin Murrin Airport",
    country: "Australia"
  },
  {
    city: "Melbourne",
    iata: "MEL",
    name: "Melbourne Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MMM",
    name: "Middlemount Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MTL",
    name: "Maitland Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WME",
    name: "Mount Keith Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ONR",
    name: "Monkira Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MSF",
    name: "Mount Swan Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "OXY",
    name: "Morney Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MMG",
    name: "Mount Magnet Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "OOR",
    name: "Mooraberree Airport",
    country: "Australia"
  },
  {
    city: "Moree",
    iata: "MRZ",
    name: "Moree Airport",
    country: "Australia"
  },
  {
    city: "Moreton",
    iata: "MET",
    name: "Moreton Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MIN",
    name: "Minnipa Airport",
    country: "Australia"
  },
  {
    city: "Marqua",
    iata: "MQE",
    name: "Marqua Airport",
    country: "Australia"
  },
  {
    city: "Moranbah",
    iata: "MOV",
    name: "Moranbah Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RRE",
    name: "Marree Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MWB",
    name: "Morawa Airport",
    country: "Australia"
  },
  {
    city: "Moruya",
    iata: "MYA",
    name: "Moruya Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MTD",
    name: "Mount Sanford Station Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MIY",
    name: "Mittebah Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "UTB",
    name: "Muttaburra Airport",
    country: "Australia"
  },
  {
    city: "Mount Gambier",
    iata: "MGB",
    name: "Mount Gambier Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ONG",
    name: "Mornington Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MNQ",
    name: "Monto Airport",
    country: "Australia"
  },
  {
    city: "Muccan Station",
    iata: "MUQ",
    name: "Muccan Station Airport",
    country: "Australia"
  },
  {
    city: "Mungeranie",
    iata: "MNE",
    name: "Mungeranie Airport",
    country: "Australia"
  },
  {
    city: "Mulka",
    iata: "MVK",
    name: "Mulka Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MUP",
    name: "Mulga Park Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MNV",
    name: "Mount Valley Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MXU",
    name: "Mullewa Airport",
    country: "Australia"
  },
  {
    city: "Moolawatana Station",
    iata: "MWT",
    name: "Moolawatana Airport",
    country: "Australia"
  },
  {
    city: "Marion Downs",
    iata: "MXD",
    name: "Marion Downs Airport",
    country: "Australia"
  },
  {
    city: "Maryborough",
    iata: "MBH",
    name: "Maryborough Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MYO",
    name: "Myroodan Station Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RTY",
    name: "Merty Merty Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NMR",
    name: "Nappa Merrie Airport",
    country: "Australia"
  },
  {
    city: "Narrandera",
    iata: "NRA",
    name: "Narrandera Airport",
    country: "Australia"
  },
  {
    city: "Narrabri",
    iata: "NAA",
    name: "Narrabri Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RPM",
    name: "Ngukurr Airport",
    country: "Australia"
  },
  {
    city: "Nambucca Heads",
    iata: "NBH",
    name: "Nambucca Heads Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NLS",
    name: "Nicholson Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NKB",
    name: "Noonkanbah Airport",
    country: "Australia"
  },
  {
    city: "Basalt",
    iata: "NMP",
    name: "New Moon Airport",
    country: "Australia"
  },
  {
    city: "Napperby",
    iata: "NPP",
    name: "Napperby Airport",
    country: "Australia"
  },
  {
    city: "Bamaga",
    iata: "ABM",
    name: "Northern Peninsula Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NAC",
    name: "Naracoorte Airport",
    country: "Australia"
  },
  {
    city: "Narrogin",
    iata: "NRG",
    name: "Narrogin Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "QRM",
    name: "Narromine Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RVT",
    name: "Ravensthorpe Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NSV",
    name: "Noosa Airport",
    country: "Australia"
  },
  {
    city: "Norseman",
    iata: "NSM",
    name: "Norseman Aerodrome",
    country: "Australia"
  },
  {
    city: "Normanton",
    iata: "NTN",
    name: "Normanton Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NUR",
    name: "Nullabor Motel Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NLL",
    name: "Nullagine Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NUB",
    name: "Numbulwar Airport",
    country: "Australia"
  },
  {
    city: "Nutwood Downs",
    iata: "UTD",
    name: "Nutwood Downs Airport",
    country: "Australia"
  },
  {
    city: "Newman",
    iata: "ZNE",
    name: "Newman Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NYN",
    name: "Nyngan Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "OPI",
    name: "Oenpelli Airport",
    country: "Australia"
  },
  {
    city: "Éléonore Mine",
    iata: "YOI",
    name: "Opinaca Aerodrome",
    country: "Canada"
  },
  {
    city: "Colac Otway Shire",
    iata: "XCO",
    name: "Colac Airport",
    country: "Australia"
  },
  {
    city: "Olympic Dam",
    iata: "OLP",
    name: "Olympic Dam Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ONS",
    name: "Onslow Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ODD",
    name: "Oodnadatta Airport",
    country: "Australia"
  },
  {
    city: "Moomba",
    iata: "MOO",
    name: "Moomba Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RBS",
    name: "Orbost Airport",
    country: "Australia"
  },
  {
    city: "Orchid Beach",
    iata: "OKB",
    name: "Orchid Beach Airport",
    country: "Australia"
  },
  {
    city: "Orange",
    iata: "OAG",
    name: "Orange Airport",
    country: "Australia"
  },
  {
    city: "Ord River",
    iata: "ODR",
    name: "Ord River Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "OSO",
    name: "Osborne Mine Airport",
    country: "Australia"
  },
  {
    city: "Ouyen",
    iata: "OYN",
    name: "Ouyen Airport",
    country: "Australia"
  },
  {
    city: "Adelaide",
    iata: "ADL",
    name: "Adelaide International Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "PUG",
    name: "Port Augusta Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "PMK",
    name: "Palm Island Airport",
    country: "Australia"
  },
  {
    city: "Paraburdoo",
    iata: "PBO",
    name: "Paraburdoo Airport",
    country: "Australia"
  },
  {
    city: "West Island",
    iata: "CCK",
    name: "Cocos (Keeling) Islands Airport",
    country: "CC"
  },
  {
    city: "Kangaroo Island",
    iata: "PDN",
    name: "Parndana Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "PDE",
    name: "Pandie Pandie Airport",
    country: "Australia"
  },
  {
    city: "Darwin",
    iata: "DRW",
    name: "Darwin International Airport / RAAF Darwin",
    country: "Australia"
  },
  {
    city: "Pardoo",
    iata: "PRD",
    name: "Pardoo Airport",
    country: "Australia"
  },
  {
    city: "Nhulunbuy",
    iata: "GOV",
    name: "Gove Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "PPI",
    name: "Port Pirie Airport",
    country: "Australia"
  },
  {
    city: "Perth",
    iata: "JAD",
    name: "Perth Jandakot Airport",
    country: "Australia"
  },
  {
    city: "Karratha",
    iata: "KTA",
    name: "Karratha Airport",
    country: "Australia"
  },
  {
    city: "Broadwood",
    iata: "KGI",
    name: "Kalgoorlie Boulder Airport",
    country: "Australia"
  },
  {
    city: "Parkes",
    iata: "PKE",
    name: "Parkes Airport",
    country: "Australia"
  },
  {
    city: "Wadeye",
    iata: "PKT",
    name: "Port Keats Airport",
    country: "Australia"
  },
  {
    city: "Kununurra",
    iata: "KNX",
    name: "East Kimberley Regional (Kununurra) Airport",
    country: "Australia"
  },
  {
    city: "Port Lincoln",
    iata: "PLO",
    name: "Port Lincoln Airport",
    country: "Australia"
  },
  {
    city: "Exmouth",
    iata: "LEA",
    name: "Learmonth Airport",
    country: "Australia"
  },
  {
    city: "Mount Eba",
    iata: "PXH",
    name: "Prominent Hill Airport",
    country: "Australia"
  },
  {
    city: "Pormpuraaw",
    iata: "EDR",
    name: "Pormpuraaw Airport",
    country: "Australia"
  },
  {
    city: "Port Macquarie",
    iata: "PQQ",
    name: "Port Macquarie Airport",
    country: "Australia"
  },
  {
    city: "Penong",
    iata: "PEY",
    name: "Penong Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "PTJ",
    name: "Portland Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "MBF",
    name: "Porepunkah Airport",
    country: "Australia"
  },
  {
    city: "Port Hedland",
    iata: "PHE",
    name: "Port Hedland International Airport",
    country: "Australia"
  },
  {
    city: "Perth",
    iata: "PER",
    name: "Perth International Airport",
    country: "Australia"
  },
  {
    city: "Ironstone",
    iata: "PEA",
    name: "Penneshaw Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KTR",
    name: "Tindal Airport",
    country: "Australia"
  },
  {
    city: "Woomera",
    iata: "UMR",
    name: "Woomera Airfield",
    country: "Australia"
  },
  {
    city: "Flying Fish Cove",
    iata: "XCH",
    name: "Christmas Island International Airport",
    country: "CX"
  },
  {
    city: "nan",
    iata: "UIR",
    name: "Quirindi Airport",
    country: "Australia"
  },
  {
    city: "Quadra Island",
    iata: "YQJ",
    name: "April Point Seaplane Base",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "ULP",
    name: "Quilpie Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "UEE",
    name: "Queenstown Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RRV",
    name: "Robinson River Airport",
    country: "Australia"
  },
  {
    city: "Desolation Sound",
    iata: "YRC",
    name: "Refuge Cove Seaplane Base",
    country: "Canada"
  },
  {
    city: "Kimsquit Valley",
    iata: "YRD",
    name: "Dean River Airport",
    country: "Canada"
  },
  {
    city: "nan",
    iata: "RMK",
    name: "Renmark Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RCM",
    name: "Richmond Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RAM",
    name: "Ramingining Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ROH",
    name: "Robinhood Airport",
    country: "Australia"
  },
  {
    city: "Roebourne",
    iata: "RBU",
    name: "Roebourne Airport",
    country: "Australia"
  },
  {
    city: "Robinvale",
    iata: "RBC",
    name: "Robinvale Airport",
    country: "Australia"
  },
  {
    city: "Roma",
    iata: "RMA",
    name: "Roma Airport",
    country: "Australia"
  },
  {
    city: "Roper Bar",
    iata: "RPB",
    name: "Roper Bar Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RSB",
    name: "Roseberth Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RTS",
    name: "Rottnest Island Airport",
    country: "Australia"
  },
  {
    city: "Yagoonya",
    iata: "RTP",
    name: "Rutland Plains Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "RHL",
    name: "Roy Hill Station Airport",
    country: "Australia"
  },
  {
    city: "Sandstone",
    iata: "NDS",
    name: "Sandstone Airport",
    country: "Australia"
  },
  {
    city: "Sydney",
    iata: "BWU",
    name: "Sydney Bankstown Airport",
    country: "Australia"
  },
  {
    city: "Canberra",
    iata: "CBR",
    name: "Canberra Airport",
    country: "Australia"
  },
  {
    city: "Cundeelee",
    iata: "WCD",
    name: "Carosue Dam Airport",
    country: "Australia"
  },
  {
    city: "Cobbitty",
    iata: "CDU",
    name: "Camden Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NSO",
    name: "Scone Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SQC",
    name: "Southern Cross Airport",
    country: "Australia"
  },
  {
    city: "Dubbo",
    iata: "DBO",
    name: "Dubbo City Regional Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SGO",
    name: "St George Airport",
    country: "Australia"
  },
  {
    city: "Singleton",
    iata: "SIX",
    name: "Singleton Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ZGL",
    name: "South Galway Airport",
    country: "Australia"
  },
  {
    city: "Shay Gap",
    iata: "SGP",
    name: "Shay Gap Airport",
    country: "Australia"
  },
  {
    city: "Denham",
    iata: "MJK",
    name: "Shark Bay Airport",
    country: "Australia"
  },
  {
    city: "Albion Park Rail",
    iata: "WOL",
    name: "Shellharbour Airport",
    country: "Australia"
  },
  {
    city: "Shute Harbour",
    iata: "WSY",
    name: "Shute Harbour/Whitsunday Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SHT",
    name: "Shepparton Airport",
    country: "Australia"
  },
  {
    city: "Saibai Island",
    iata: "SBR",
    name: "Saibai Island Airport",
    country: "Australia"
  },
  {
    city: "Gosford",
    iata: "GOS",
    name: "Somersby Airstrip",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SIO",
    name: "Smithton Airport",
    country: "Australia"
  },
  {
    city: "South Molle Island Resort",
    iata: "SOI",
    name: "South Molle Island Helipad",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SHU",
    name: "Smith Point Airport",
    country: "Australia"
  },
  {
    city: "Strathmore",
    iata: "STH",
    name: "Strathmore Airport",
    country: "Australia"
  },
  {
    city: "Milikapiti",
    iata: "SNB",
    name: "Snake Bay Airport",
    country: "Australia"
  },
  {
    city: "Burnt Pine",
    iata: "NLK",
    name: "Norfolk Island International Airport",
    country: "NF"
  },
  {
    city: "Nowra Hill",
    iata: "NOA",
    name: "Naval Air Station Nowra - HMAS Albatross",
    country: "Australia"
  },
  {
    city: "Karijini National Park",
    iata: "SLJ",
    name: "Solomon Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SNH",
    name: "Stanthorpe Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SCG",
    name: "Spring Creek Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SHQ",
    name: "Southport Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KSV",
    name: "Springvale Airport",
    country: "Australia"
  },
  {
    city: "Richmond",
    iata: "XRH",
    name: "RAAF Base Richmond",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SRN",
    name: "Strahan Airport",
    country: "Australia"
  },
  {
    city: "Sydney (Mascot)",
    iata: "SYD",
    name: "Sydney Kingsford Smith International Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "HLS",
    name: "St Helens Airport",
    country: "Australia"
  },
  {
    city: "Stephens Island",
    iata: "STF",
    name: "Stephens Island Seaplane Base",
    country: "Australia"
  },
  {
    city: "Tamworth",
    iata: "TMW",
    name: "Tamworth Airport",
    country: "Australia"
  },
  {
    city: "Silver Plains",
    iata: "SSP",
    name: "Silver Plains Airport",
    country: "Australia"
  },
  {
    city: "Forest Hill",
    iata: "WGA",
    name: "Wagga Wagga Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SWH",
    name: "Swan Hill Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "SWC",
    name: "Stawell Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "XTR",
    name: "Tara Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TBL",
    name: "Tableland Homestead Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "XTO",
    name: "Taroom Airport",
    country: "Australia"
  },
  {
    city: "Tarcoola",
    iata: "TAQ",
    name: "Tarcoola Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TBK",
    name: "Timber Creek Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TDR",
    name: "Theodore Airport",
    country: "Australia"
  },
  {
    city: "Trepell",
    iata: "TQP",
    name: "Trepell Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TEF",
    name: "Telfer Airport",
    country: "Australia"
  },
  {
    city: "Temora",
    iata: "TEM",
    name: "Temora Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TAN",
    name: "Tangalooma Airport",
    country: "Australia"
  },
  {
    city: "Thargomindah",
    iata: "XTG",
    name: "Thargomindah Airport",
    country: "Australia"
  },
  {
    city: "The Granites Gold Mine",
    iata: "GTS",
    name: "The Granites Airport",
    country: "Australia"
  },
  {
    city: "Drysdale River",
    iata: "TDN",
    name: "Theda Station Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TYG",
    name: "Thylungra Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TYB",
    name: "Tibooburra Airport",
    country: "Australia"
  },
  {
    city: "Turkey Creek",
    iata: "TKY",
    name: "Turkey Creek Airport",
    country: "Australia"
  },
  {
    city: "Phosphate Hill",
    iata: "PHQ",
    name: "The Monument Airport",
    country: "Australia"
  },
  {
    city: "Tom Price",
    iata: "TPR",
    name: "Tom Price Airport",
    country: "Australia"
  },
  {
    city: "Tumut",
    iata: "TUM",
    name: "Tumut Aerodrome",
    country: "Australia"
  },
  {
    city: "Tobermorey",
    iata: "TYP",
    name: "Tobermorey Airport",
    country: "Australia"
  },
  {
    city: "Tanbar Station",
    iata: "TXR",
    name: "Tanbar Airport",
    country: "Australia"
  },
  {
    city: "Biloela",
    iata: "THG",
    name: "Thangool Airport",
    country: "Australia"
  },
  {
    city: "Tennant Creek",
    iata: "TCA",
    name: "Tennant Creek Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "TCW",
    name: "Tocumwal Airport",
    country: "Australia"
  },
  {
    city: "Taree",
    iata: "TRO",
    name: "Taree Airport",
    country: "Australia"
  },
  {
    city: "Anjo Peninsula",
    iata: "TTX",
    name: "Truscott-Mungalalu Airport",
    country: "Australia"
  },
  {
    city: "Toowoomba",
    iata: "TWB",
    name: "Toowoomba Airport",
    country: "Australia"
  },
  {
    city: "Undara",
    iata: "UDA",
    name: "Undara Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "CZY",
    name: "Cluny Airport",
    country: "Australia"
  },
  {
    city: "Useless Loop",
    iata: "USL",
    name: "Useless Loop Airport",
    country: "Australia"
  },
  {
    city: "Victoria River",
    iata: "VCD",
    name: "Victoria River Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "VNR",
    name: "Vanrook Station Airport",
    country: "Australia"
  },
  {
    city: "Wauchope",
    iata: "WAU",
    name: "Wauchope Airport",
    country: "Australia"
  },
  {
    city: "Eighty Mile Beach",
    iata: "WLA",
    name: "Wallal Downs Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WAV",
    name: "Wave Hill Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WMB",
    name: "Warrnambool Airport",
    country: "Australia"
  },
  {
    city: "Sue Islet",
    iata: "SYU",
    name: "Warraber Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WIO",
    name: "Wilcannia Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WLC",
    name: "Walcha Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WAZ",
    name: "Warwick Airport",
    country: "Australia"
  },
  {
    city: "Laverton",
    iata: "WND",
    name: "Windarra Airport",
    country: "Australia"
  },
  {
    city: "Windarling Mine",
    iata: "WRN",
    name: "Windarling Airport",
    country: "Australia"
  },
  {
    city: "Windorah",
    iata: "WNR",
    name: "Windorah Airport",
    country: "Australia"
  },
  {
    city: "Wondoola",
    iata: "WON",
    name: "Wondoola Airport",
    country: "Australia"
  },
  {
    city: "Wando Vale",
    iata: "MFL",
    name: "Mount Full Stop Airport",
    country: "Australia"
  },
  {
    city: "Wodgina",
    iata: "GYB",
    name: "Port Hedland/Wodgina Airport",
    country: "Australia"
  },
  {
    city: "Laceby",
    iata: "WGT",
    name: "Wangaratta Airport",
    country: "Australia"
  },
  {
    city: "Whyalla",
    iata: "WYA",
    name: "Whyalla Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WIT",
    name: "Wittenoom Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WKB",
    name: "Warracknabeal Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WGE",
    name: "Walgett Airport",
    country: "Australia"
  },
  {
    city: "Williamtown",
    iata: "NTL",
    name: "Newcastle Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WUN",
    name: "Wiluna Airport",
    country: "Australia"
  },
  {
    city: "Wrotham Park",
    iata: "WPK",
    name: "Wrotham Park Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WDI",
    name: "Wondai Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WLL",
    name: "Wollogorang Airport",
    country: "Australia"
  },
  {
    city: "Sale",
    iata: "SXE",
    name: "West Sale Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WLO",
    name: "Waterloo Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WIN",
    name: "Winton Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WUD",
    name: "Wudinna Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WEW",
    name: "Wee Waa Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WRW",
    name: "Warrawagine Airport",
    country: "Australia"
  },
  {
    city: "Woodie Woodie",
    iata: "WWI",
    name: "Woodie Woodie Airport",
    country: "Australia"
  },
  {
    city: "West Wyalong",
    iata: "WWY",
    name: "West Wyalong Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "WYN",
    name: "Wyndham Airport",
    country: "Australia"
  },
  {
    city: "Burnie",
    iata: "BWT",
    name: "Wynyard Airport",
    country: "Australia"
  },
  {
    city: "Yalgoo",
    iata: "YLG",
    name: "Yalgoo Airport",
    country: "Australia"
  },
  {
    city: "Yorke Island",
    iata: "OKR",
    name: "Yorke Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "KYF",
    name: "Yeelirrie Airport",
    country: "Australia"
  },
  {
    city: "Yam Island",
    iata: "XMY",
    name: "Yam Island Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "YUE",
    name: "Yuendumu Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "NGA",
    name: "Young Airport",
    country: "Australia"
  },
  {
    city: "nan",
    iata: "ORR",
    name: "Yorketown Airport",
    country: "Australia"
  },
  {
    city: "Yalata Mission",
    iata: "KYI",
    name: "Yalata Mission Airport",
    country: "Australia"
  },
  {
    city: "Akiachak",
    iata: "KKI",
    name: "Akiachak Airport",
    country: "United States"
  },
  {
    city: "Bear Creek",
    iata: "BCC",
    name: "Bear Creek 3 Airport",
    country: "United States"
  },
  {
    city: "Bethel",
    iata: "JBT",
    name: "Bethel Seaplane Base",
    country: "United States"
  },
  {
    city: "Cape Pole",
    iata: "CZP",
    name: "Cape Pole Seaplane Base",
    country: "United States"
  },
  {
    city: "Chignik",
    iata: "KBW",
    name: "Chignik Bay Seaplane Base",
    country: "United States"
  },
  {
    city: "Birch Creek",
    iata: "KBC",
    name: "Birch Creek Airport",
    country: "United States"
  },
  {
    city: "Copper Center",
    iata: "CZC",
    name: "Copper Center 2 Airport",
    country: "United States"
  },
  {
    city: "Pretoria",
    iata: "HPR",
    name: "Pretoria Central Heliport",
    country: "South Africa"
  },
  {
    city: "Timbavati",
    iata: "TDT",
    name: "Tanda Tula Airport",
    country: "South Africa"
  },
  {
    city: "Hazyview",
    iata: "HZV",
    name: "Hazyview Airport",
    country: "South Africa"
  },
  {
    city: "Khoka Moya",
    iata: "KHO",
    name: "Khoka Moya Airport",
    country: "South Africa"
  },
  {
    city: "Mkambati",
    iata: "MBM",
    name: "Mkambati Airport",
    country: "South Africa"
  },
  {
    city: "Inyati",
    iata: "INY",
    name: "Inyati Airport",
    country: "South Africa"
  },
  {
    city: "Tshipise",
    iata: "TSD",
    name: "Tshipise Airport",
    country: "South Africa"
  },
  {
    city: "Singita Safari Lodge",
    iata: "SSX",
    name: "Singita Safari Lodge Airport",
    country: "South Africa"
  },
  {
    city: "Koingnaas",
    iata: "KIG",
    name: "Koingnaas Airport",
    country: "South Africa"
  },
  {
    city: "Beijing",
    iata: "PEK",
    name: "Beijing Capital International Airport",
    country: "China"
  },
  {
    city: "Beijing",
    iata: "PKX",
    name: "Beijing Daxing International Airport",
    country: "China"
  },
  {
    city: "Chengde",
    iata: "CDE",
    name: "Chengde Puning Airport",
    country: "China"
  },
  {
    city: "Chifeng",
    iata: "CIF",
    name: "Chifeng Yulong Airport",
    country: "China"
  },
  {
    city: "Changzhi",
    iata: "CIH",
    name: "Changzhi Wangcun Airport",
    country: "China"
  },
  {
    city: "Qinhuangdao (Changli)",
    iata: "BPE",
    name: "Qinhuangdao Beidaihe Airport",
    country: "China"
  },
  {
    city: "Ordos",
    iata: "DSN",
    name: "Ordos Ejin Horo International Airport",
    country: "China"
  },
  {
    city: "Datong",
    iata: "DAT",
    name: "Datong Yungang International Airport",
    country: "China"
  },
  {
    city: "Erenhot",
    iata: "ERL",
    name: "Erenhot Saiwusu International Airport",
    country: "China"
  },
  {
    city: "Arxan",
    iata: "YIE",
    name: "Arxan Yi'ershi Airport",
    country: "China"
  },
  {
    city: "Handan",
    iata: "HDG",
    name: "Handan Airport",
    country: "China"
  },
  {
    city: "Hohhot",
    iata: "HET",
    name: "Hohhot Baita International Airport",
    country: "China"
  },
  {
    city: "Holingol",
    iata: "HUO",
    name: "Holingol Huolinhe Airport",
    country: "China"
  },
  {
    city: "Hailar",
    iata: "HLD",
    name: "Hulunbuir Hailar Airport",
    country: "China"
  },
  {
    city: "Linfen (Yaodu)",
    iata: "LFQ",
    name: "Linfen Yaodu Airport",
    country: "China"
  },
  {
    city: "Lüliang",
    iata: "LLV",
    name: "Lüliang Dawu Airport",
    country: "China"
  },
  {
    city: "Manzhouli",
    iata: "NZH",
    name: "Manzhouli Xijiao Airport",
    country: "China"
  },
  {
    city: "Baotou",
    iata: "BAV",
    name: "Baotou Donghe International Airport",
    country: "China"
  },
  {
    city: "Shuozhou",
    iata: "SZH",
    name: "Shuozhou Zirun Airport",
    country: "China"
  },
  {
    city: "Shijiazhuang",
    iata: "SJW",
    name: "Shijiazhuang Zhengding International Airport",
    country: "China"
  },
  {
    city: "Tangshan (Fengrun)",
    iata: "TVS",
    name: "Tangshan Sannühe Airport",
    country: "China"
  },
  {
    city: "Tianjin",
    iata: "TSN",
    name: "Tianjin Binhai International Airport",
    country: "China"
  },
  {
    city: "Tongliao",
    iata: "TGO",
    name: "Tongliao Airport",
    country: "China"
  },
  {
    city: "Ulanqab",
    iata: "UCB",
    name: "Ulanqab Jining Airport",
    country: "China"
  },
  {
    city: "Wuhai",
    iata: "WUA",
    name: "Wuhai Airport",
    country: "China"
  },
  {
    city: "Ulanhot",
    iata: "HLH",
    name: "Ulanhot Yilelite Airport",
    country: "China"
  },
  {
    city: "Xilinhot",
    iata: "XIL",
    name: "Xilinhot Airport",
    country: "China"
  },
  {
    city: "Xingtai",
    iata: "XNT",
    name: "Xingtai Dalian Airport",
    country: "China"
  },
  {
    city: "Xinzhou",
    iata: "WUT",
    name: "Xinzhou Wutaishan Airport",
    country: "China"
  },
  {
    city: "Yuncheng (Yanhu)",
    iata: "YCU",
    name: "Yuncheng Yanhu International Airport",
    country: "China"
  },
  {
    city: "Taiyuan",
    iata: "TYN",
    name: "Taiyuan Wusu International Airport",
    country: "China"
  },
  {
    city: "Bayannur",
    iata: "RLK",
    name: "Bayannur Tianjitai Airport",
    country: "China"
  },
  {
    city: "Zhangjiakou",
    iata: "ZQZ",
    name: "Zhangjiakou Ningyuan Airport",
    country: "China"
  },
  {
    city: "Zhalantun",
    iata: "NZL",
    name: "Zhalantun Genghis Khan Airport",
    country: "China"
  },
  {
    city: "Ramallah",
    iata: "ZDM",
    name: "Ramallah Heliport",
    country: "PS"
  },
  {
    city: "Beihai",
    iata: "BHY",
    name: "Beihai Fucheng Airport",
    country: "China"
  },
  {
    city: "Baise (Tianyang)",
    iata: "AEB",
    name: "Baise (Bose) Bama Airport",
    country: "China"
  },
  {
    city: "Changde (Dingcheng)",
    iata: "CGD",
    name: "Changde Taohuayuan Airport",
    country: "China"
  },
  {
    city: "Huaihua",
    iata: "HJJ",
    name: "Huaihua Zhijiang Airport",
    country: "China"
  },
  {
    city: "Chenzhou",
    iata: "HCZ",
    name: "Chenzhou Beihu Airport",
    country: "China"
  },
  {
    city: "Zhangjiajie (Yongding)",
    iata: "DYG",
    name: "Zhangjiajie Hehua International Airport",
    country: "China"
  },
  {
    city: "Foshan (Nanhai)",
    iata: "FUO",
    name: "Foshan Shadi Airport",
    country: "China"
  },
  {
    city: "Guangzhou (Huadu)",
    iata: "CAN",
    name: "Guangzhou Baiyun International Airport",
    country: "China"
  },
  {
    city: "Changsha (Changsha)",
    iata: "CSX",
    name: "Changsha Huanghua International Airport",
    country: "China"
  },
  {
    city: "Hechi (Jinchengjiang)",
    iata: "HCJ",
    name: "Hechi Jinchengjiang Airport",
    country: "China"
  },
  {
    city: "Hengyang",
    iata: "HNY",
    name: "Hengyang Nanyue Airport",
    country: "China"
  },
  {
    city: "Huizhou (Pingtan)",
    iata: "HUZ",
    name: "Huizhou Pingtan Airport",
    country: "China"
  },
  {
    city: "Guilin (Lingui)",
    iata: "KWL",
    name: "Guilin Liangjiang International Airport",
    country: "China"
  },
  {
    city: "Yongzhou",
    iata: "LLF",
    name: "Yongzhou Lingling Airport",
    country: "China"
  },
  {
    city: "Meizhou (Meixian)",
    iata: "MXZ",
    name: "Meizhou Meixian Changgangji International Airport",
    country: "China"
  },
  {
    city: "Nanning (Jiangnan)",
    iata: "NNG",
    name: "Nanning Wuxu International Airport",
    country: "China"
  },
  {
    city: "Jieyang (Rongcheng)",
    iata: "SWA",
    name: "Jieyang Chaoshan International Airport",
    country: "China"
  },
  {
    city: "Zhuhai (Jinwan)",
    iata: "ZUH",
    name: "Zhuhai Jinwan Airport",
    country: "China"
  },
  {
    city: "Shaoyang (Wugang)",
    iata: "WGN",
    name: "Shaoyang Wugang Airport",
    country: "China"
  },
  {
    city: "Shenzhen",
    iata: "SZX",
    name: "Shenzhen Bao'an International Airport",
    country: "China"
  },
  {
    city: "Tangbu",
    iata: "WUZ",
    name: "Wuzhou Xijiang Airport",
    country: "China"
  },
  {
    city: "Meizhou (Xingning)",
    iata: "XIN",
    name: "Xingning Air Base",
    country: "China"
  },
  {
    city: "Xiangxi",
    iata: "DXJ",
    name: "Xiangxi Biancheng Airport",
    country: "China"
  },
  {
    city: "Yulin",
    iata: "YLX",
    name: "Yulin Fumian Airport",
    country: "China"
  },
  {
    city: "Yueyang (Yueyanglou)",
    iata: "YYA",
    name: "Yueyang Sanhe Airport",
    country: "China"
  },
  {
    city: "Liuzhou (Liujiang)",
    iata: "LZH",
    name: "Liuzhou Bailian Airport / Bailian Air Base",
    country: "China"
  },
  {
    city: "Zhanjiang",
    iata: "ZHA",
    name: "Zhanjiang Wuchuan International Airport",
    country: "China"
  },
  {
    city: "Anyang",
    iata: "AYN",
    name: "Anyang Yindu Airport",
    country: "China"
  },
  {
    city: "Zhengzhou",
    iata: "CGO",
    name: "Zhengzhou Xinzheng International Airport",
    country: "China"
  },
  {
    city: "Ezhou",
    iata: "EHU",
    name: "Ezhou Huahu International Airport",
    country: "China"
  },
  {
    city: "Enshi (Enshi)",
    iata: "ENH",
    name: "Enshi Xujiaping Airport",
    country: "China"
  },
  {
    city: "Xiangyang (Laohekou)",
    iata: "LHK",
    name: "Guangzhou MR Air Base / Guanghua Airport",
    country: "China"
  },
  {
    city: "Wuhan (Huangpi)",
    iata: "WUH",
    name: "Wuhan Tianhe International Airport",
    country: "China"
  },
  {
    city: "Jingzhou (Shashi)",
    iata: "SHS",
    name: "Jingzhou Shashi Airport",
    country: "China"
  },
  {
    city: "Luoyang (Laocheng)",
    iata: "LYA",
    name: "Luoyang Beijiao Airport",
    country: "China"
  },
  {
    city: "Nanyang (Wancheng)",
    iata: "NNY",
    name: "Nanyang Jiangying Airport",
    country: "China"
  },
  {
    city: "Anyang",
    iata: "HQQ",
    name: "Anyang Hongqiqu Airport",
    country: "China"
  },
  {
    city: "Shennongjia (Hongping)",
    iata: "HPG",
    name: "Shennongjia Hongping Airport",
    country: "China"
  },
  {
    city: "Shiyan (Maojian)",
    iata: "WDS",
    name: "Shiyan Wudangshan Airport",
    country: "China"
  },
  {
    city: "Xiangyang (Xiangzhou)",
    iata: "XFN",
    name: "Xiangyang Liuji Airport",
    country: "China"
  },
  {
    city: "Xinyang",
    iata: "XAI",
    name: "Xinyang Minggang Airport",
    country: "China"
  },
  {
    city: "Yichang (Xiaoting)",
    iata: "YIH",
    name: "Yichang Sanxia Airport",
    country: "China"
  },
  {
    city: "Zamzama Gas Field",
    iata: "ZIZ",
    name: "Zamzama Heliport",
    country: "Pakistan"
  },
  {
    city: "Haikou (Meilan)",
    iata: "HAK",
    name: "Haikou Meilan International Airport",
    country: "China"
  },
  {
    city: "Qionghai (Basuo)",
    iata: "BAR",
    name: "Qionghai Bo'ao Airport",
    country: "China"
  },
  {
    city: "Sanya (Tianya)",
    iata: "SYX",
    name: "Sanya Phoenix International Airport",
    country: "China"
  },
  {
    city: "Hoemun-ri",
    iata: "RGO",
    name: "Orang (Chongjin) Airport",
    country: "KP"
  },
  {
    city: "Pyongyang",
    iata: "FNJ",
    name: "Pyongyang Sunan International Airport",
    country: "KP"
  },
  {
    city: "Sŏndŏng-ni",
    iata: "DSO",
    name: "Sondok Airport",
    country: "KP"
  },
  {
    city: "Samjiyŏn",
    iata: "YJS",
    name: "Samjiyŏn Airport",
    country: "KP"
  },
  {
    city: "Uiju",
    iata: "UJU",
    name: "Uiju Airport",
    country: "KP"
  },
  {
    city: "Wonsan",
    iata: "WOS",
    name: "Wonsan Kalma International Airport",
    country: "KP"
  },
  {
    city: "Ankang (Hanbin)",
    iata: "AKA",
    name: "Ankang Fuqiang Airport",
    country: "China"
  },
  {
    city: "Dunhuang",
    iata: "DNH",
    name: "Dunhuang Mogao International Airport",
    country: "China"
  },
  {
    city: "Delingha",
    iata: "HXD",
    name: "Delingha Airport",
    country: "China"
  },
  {
    city: "Golog (Maqên)",
    iata: "GMQ",
    name: "Golog Maqên Airport",
    country: "China"
  },
  {
    city: "Golmud",
    iata: "GOQ",
    name: "Golmud Airport",
    country: "China"
  },
  {
    city: "Guyuan (Yuanzhou)",
    iata: "GYU",
    name: "Guyuan Liupanshan Airport",
    country: "China"
  },
  {
    city: "Haibei (Qilian)",
    iata: "HBQ",
    name: "Haibei Qilian Airport",
    country: "China"
  },
  {
    city: "Mengnai",
    iata: "HTT",
    name: "Huatugou Airport",
    country: "China"
  },
  {
    city: "Hanzhong (Chenggu)",
    iata: "HZG",
    name: "Hanzhong Chenggu Airport",
    country: "China"
  },
  {
    city: "Yinchuan",
    iata: "INC",
    name: "Yinchuan Hedong International Airport",
    country: "China"
  },
  {
    city: "Jinchang",
    iata: "JIC",
    name: "Jinchang Jinchuan Airport",
    country: "China"
  },
  {
    city: "Jiayuguan",
    iata: "JGN",
    name: "Jiayuguan International Airport",
    country: "China"
  },
  {
    city: "Lanzhou (Yongdeng)",
    iata: "LHW",
    name: "Lanzhou Zhongchuan International Airport",
    country: "China"
  },
  {
    city: "Longnan (Cheng)",
    iata: "LNL",
    name: "Longnan Chengzhou Airport",
    country: "China"
  },
  {
    city: "Qingyang (Xifeng)",
    iata: "IQN",
    name: "Qingyang Xifeng Airport",
    country: "China"
  },
  {
    city: "Xi'an (Baqiao)",
    iata: "SIA",
    name: "Xi'an Xiguan Airport",
    country: "China"
  },
  {
    city: "Tianshui (Maiji)",
    iata: "THQ",
    name: "Tianshui Maijishan Airport",
    country: "China"
  },
  {
    city: "Gannan (Xiahe)",
    iata: "GXH",
    name: "Gannan Xiahe Airport",
    country: "China"
  },
  {
    city: "Haidong (Huzhu Tu Autonomous County)",
    iata: "XNN",
    name: "Xining Caojiabao International Airport",
    country: "China"
  },
  {
    city: "Xianyang (Weicheng)",
    iata: "XIY",
    name: "Xi'an Xianyang International Airport",
    country: "China"
  },
  {
    city: "Yan'an (Baota)",
    iata: "ENY",
    name: "Yan'an Nanniwan Airport",
    country: "China"
  },
  {
    city: "Yulin",
    iata: "UYN",
    name: "Yulin Yuyang Airport",
    country: "China"
  },
  {
    city: "Yushu (Batang)",
    iata: "YUS",
    name: "Yushu Batang Airport",
    country: "China"
  },
  {
    city: "Zhongwei (Shapotou)",
    iata: "ZHY",
    name: "Zhongwei Shapotou Airport",
    country: "China"
  },
  {
    city: "Zhangye (Ganzhou)",
    iata: "YZY",
    name: "Zhangye Ganzhou Airport",
    country: "China"
  },
  {
    city: "Kalumbila",
    iata: "UMB",
    name: "Kalumbila Airport",
    country: "ZM"
  },
  {
    city: "Arvaikheer",
    iata: "AVK",
    name: "Arvaikheer Airport",
    country: "MN"
  },
  {
    city: "Altai",
    iata: "LTI",
    name: "Altai Airport",
    country: "MN"
  },
  {
    city: "Bayankhongor",
    iata: "BYN",
    name: "Bayankhongor Airport",
    country: "MN"
  },
  {
    city: "Bulgan",
    iata: "UGA",
    name: "Bulgan Airport",
    country: "MN"
  },
  {
    city: "Khankhongor",
    iata: "UGT",
    name: "Bulagtai Resort Airport",
    country: "MN"
  },
  {
    city: "Bulgan",
    iata: "HBU",
    name: "Bulgan Sum Airport",
    country: "MN"
  },
  {
    city: "nan",
    iata: "UUN",
    name: "Baruun Urt Airport",
    country: "MN"
  },
  {
    city: "nan",
    iata: "COQ",
    name: "Choibalsan Airport",
    country: "MN"
  },
  {
    city: "Ulaanbaatar (Sergelen)",
    iata: "UBN",
    name: "Ulaanbaatar Chinggis Khaan International Airport",
    country: "MN"
  },
  {
    city: "Sena Madureira",
    iata: "ZMD",
    name: "Sena Madureira Airport",
    country: "Brazil"
  },
  {
    city: "Uliastai",
    iata: "ULZ",
    name: "Donoi Airport",
    country: "MN"
  },
  {
    city: "Dalanzadgad",
    iata: "DLZ",
    name: "Dalanzadgad Airport",
    country: "MN"
  },
  {
    city: "Hatgal",
    iata: "HTM",
    name: "Khatgal Airport",
    country: "MN"
  },
  {
    city: "nan",
    iata: "KHR",
    name: "Kharkhorin Airport",
    country: "MN"
  },
  {
    city: "Khujirt",
    iata: "HJT",
    name: "Khujirt Airport",
    country: "MN"
  },
  {
    city: "Khovd",
    iata: "HVD",
    name: "Khovd Airport",
    country: "MN"
  },
  {
    city: "Mandalgobi",
    iata: "MXW",
    name: "Mandalgobi Airport",
    country: "MN"
  },
  {
    city: "Mörön",
    iata: "MXV",
    name: "Mörön Airport",
    country: "MN"
  },
  {
    city: "Tsetserleg",
    iata: "TSZ",
    name: "Tsetserleg Airport",
    country: "MN"
  },
  {
    city: "Tosontsengel",
    iata: "TNZ",
    name: "Tosontsengel Airport",
    country: "MN"
  },
  {
    city: "Ulaanbaatar",
    iata: "ULN",
    name: "Buyant-Ukhaa International Airport",
    country: "MN"
  },
  {
    city: "Ulaangom",
    iata: "ULO",
    name: "Ulaangom Airport",
    country: "MN"
  },
  {
    city: "Öndörkhaan",
    iata: "UNR",
    name: "Öndörkhaan Airport",
    country: "MN"
  },
  {
    city: "Ölgii",
    iata: "ULG",
    name: "Ölgii Mongolei International Airport",
    country: "MN"
  },
  {
    city: "Nyac",
    iata: "ZNC",
    name: "Nyac Airport",
    country: "United States"
  },
  {
    city: "Namu",
    iata: "ZNU",
    name: "Namu Water Aerodrome",
    country: "Canada"
  },
  {
    city: "Baoshan (Longyang)",
    iata: "BSD",
    name: "Baoshan Yunrui Airport",
    country: "China"
  },
  {
    city: "Lincang (Cangyuan)",
    iata: "CWJ",
    name: "Cangyuan Washan Airport",
    country: "China"
  },
  {
    city: "Dali (Xiaguan)",
    iata: "DLU",
    name: "Dali Fengyi Airport",
    country: "China"
  },
  {
    city: "Diqing (Shangri-La)",
    iata: "DIG",
    name: "Diqing Shangri-La Airport",
    country: "China"
  },
  {
    city: "Jinghong (Gasa)",
    iata: "JHG",
    name: "Xishuangbanna Gasa International Airport",
    country: "China"
  },
  {
    city: "Pu'er (Lancang)",
    iata: "JMJ",
    name: "Lancang Jingmai Airport",
    country: "China"
  },
  {
    city: "Lincang",
    iata: "LNJ",
    name: "Lincang Boshang Airport",
    country: "China"
  },
  {
    city: "Lijiang",
    iata: "LJG",
    name: "Lijiang Sanyi International Airport",
    country: "China"
  },
  {
    city: "Dehong (Mangshi)",
    iata: "LUM",
    name: "Dehong Mangshi International Airport",
    country: "China"
  },
  {
    city: "Kunming",
    iata: "KMG",
    name: "Kunming Changshui International Airport",
    country: "China"
  },
  {
    city: "Pu'er",
    iata: "SYM",
    name: "Pu'er Simao Airport",
    country: "China"
  },
  {
    city: "Wenshan",
    iata: "WNH",
    name: "Wenshan Puzhehei Airport",
    country: "China"
  },
  {
    city: "Chuxiong (Yuanmou)",
    iata: "YUA",
    name: "Yuanmou Air Base",
    country: "China"
  },
  {
    city: "Xiamen",
    iata: "XMN",
    name: "Xiamen Gaoqi International Airport",
    country: "China"
  },
  {
    city: "Anqing",
    iata: "AQG",
    name: "Anqing Tianzhushan Airport / Anqing North Air Base",
    country: "China"
  },
  {
    city: "Bengbu",
    iata: "BFU",
    name: "Bengbu Tenghu Airport",
    country: "China"
  },
  {
    city: "Changzhou",
    iata: "CZX",
    name: "Changzhou Benniu International Airport",
    country: "China"
  },
  {
    city: "Nanchang",
    iata: "KHN",
    name: "Nanchang Changbei International Airport",
    country: "China"
  },
  {
    city: "Zhenjiang",
    iata: "AZJ",
    name: "Zhenjiang Dalu Airport",
    country: "China"
  },
  {
    city: "Dongying (Kenli)",
    iata: "DOY",
    name: "Dongying Shengli Airport",
    country: "China"
  },
  {
    city: "Yingzhou, Fuyang",
    iata: "FUG",
    name: "Fuyang Xiguan Airport",
    country: "China"
  },
  {
    city: "Fuzhou (Changle)",
    iata: "FOC",
    name: "Fuzhou Changle International Airport",
    country: "China"
  },
  {
    city: "Ganzhou",
    iata: "KOW",
    name: "Ganzhou Huangjin Airport",
    country: "China"
  },
  {
    city: "Hangzhou",
    iata: "HGH",
    name: "Hangzhou Xiaoshan International Airport",
    country: "China"
  },
  {
    city: "Heze (Dingtao)",
    iata: "HZA",
    name: "Heze Mudan Airport",
    country: "China"
  },
  {
    city: "Jingdezhen",
    iata: "JDZ",
    name: "Jingdezhen Luojia Airport",
    country: "China"
  },
  {
    city: "Jining",
    iata: "JNG",
    name: "Jining Da'an Airport",
    country: "China"
  },
  {
    city: "Jiujiang",
    iata: "JIU",
    name: "Jiujiang Lushan Airport",
    country: "China"
  },
  {
    city: "Jinan (Licheng)",
    iata: "TNA",
    name: "Jinan Yaoqiang International Airport",
    country: "China"
  },
  {
    city: "Quzhou (Kezheng)",
    iata: "JUZ",
    name: "Quzhou Airport",
    country: "China"
  },
  {
    city: "Lianyungang",
    iata: "LYG",
    name: "Lianyungang Huaguoshan International Airport",
    country: "China"
  },
  {
    city: "Longyan (Liancheng)",
    iata: "LCX",
    name: "Liancheng Guanzhishan Airport",
    country: "China"
  },
  {
    city: "Taizhou (Luqiao)",
    iata: "HYN",
    name: "Taizhou Luqiao Airport",
    country: "China"
  },
  {
    city: "Linyi (Hedong)",
    iata: "LYI",
    name: "Linyi Qiyang Airport",
    country: "China"
  },
  {
    city: "Ningbo",
    iata: "NGB",
    name: "Ningbo Lishe International Airport",
    country: "China"
  },
  {
    city: "Nanjing",
    iata: "NKG",
    name: "Nanjing Lukou International Airport",
    country: "China"
  },
  {
    city: "Nantong (Tongzhou)",
    iata: "NTG",
    name: "Nantong Xingdong International Airport",
    country: "China"
  },
  {
    city: "Hefei",
    iata: "HFE",
    name: "Hefei Xinqiao International Airport",
    country: "China"
  },
  {
    city: "Shanghai (Pudong)",
    iata: "PVG",
    name: "Shanghai Pudong International Airport",
    country: "China"
  },
  {
    city: "Qingdao (Jiaozhou)",
    iata: "TAO",
    name: "Qingdao Jiaodong International Airport",
    country: "China"
  },
  {
    city: "Quanzhou",
    iata: "JJN",
    name: "Quanzhou Jinjiang International Airport",
    country: "China"
  },
  {
    city: "Rugao (Nantong)",
    iata: "RUG",
    name: "Rugao Air Base",
    country: "China"
  },
  {
    city: "Rizhao (Donggang)",
    iata: "RIZ",
    name: "Rizhao Shanzihe Airport",
    country: "China"
  },
  {
    city: "Huai'an",
    iata: "HIA",
    name: "Huai'an Lianshui Airport",
    country: "China"
  },
  {
    city: "Sanming (Sha)",
    iata: "SQJ",
    name: "Sanming Shaxian Airport",
    country: "China"
  },
  {
    city: "Shangrao (Hengfeng)",
    iata: "SQD",
    name: "Shangrao Sanqingshan Airport",
    country: "China"
  },
  {
    city: "Shanghai (Minhang)",
    iata: "SHA",
    name: "Shanghai Hongqiao International Airport",
    country: "China"
  },
  {
    city: "Suzhou",
    iata: "SZV",
    name: "Suzhou Guangfu Airport",
    country: "China"
  },
  {
    city: "Huangshan",
    iata: "TXN",
    name: "Huangshan Tunxi International Airport",
    country: "China"
  },
  {
    city: "Wuhu",
    iata: "WHA",
    name: "Wuhu Xuanzhou Airport",
    country: "China"
  },
  {
    city: "Weifang (Kuiwen)",
    iata: "WEF",
    name: "Weifang Nanyuan Airport",
    country: "China"
  },
  {
    city: "Weihai",
    iata: "WEH",
    name: "Weihai Dashuibo Airport",
    country: "China"
  },
  {
    city: "Wuhu",
    iata: "WHU",
    name: "Wuhu Wanli Airport / Wuhu Air Base",
    country: "China"
  },
  {
    city: "Wuxi",
    iata: "WUX",
    name: "Sunan Shuofang International Airport",
    country: "China"
  },
  {
    city: "Wuyishan",
    iata: "WUS",
    name: "Nanping Wuyishan Airport",
    country: "China"
  },
  {
    city: "Wenzhou (Longwan)",
    iata: "WNZ",
    name: "Wenzhou Longwan International Airport",
    country: "China"
  },
  {
    city: "Xuzhou",
    iata: "XUZ",
    name: "Xuzhou Guanyin International Airport",
    country: "China"
  },
  {
    city: "Yangzhou",
    iata: "YTY",
    name: "Yangzhou Taizhou Airport",
    country: "China"
  },
  {
    city: "Yichun",
    iata: "YIC",
    name: "Yichun Mingyueshan Airport",
    country: "China"
  },
  {
    city: "Yancheng (Tinghu)",
    iata: "YNZ",
    name: "Yancheng Nanyang International Airport",
    country: "China"
  },
  {
    city: "Yantai",
    iata: "YNT",
    name: "Yantai Penglai International Airport",
    country: "China"
  },
  {
    city: "Yiwu/Jinhua",
    iata: "YIW",
    name: "Yiwu Airport",
    country: "China"
  },
  {
    city: "Zhoushan",
    iata: "HSN",
    name: "Zhoushan Putuoshan International Airport",
    country: "China"
  },
  {
    city: "Shiquanhe",
    iata: "NGQ",
    name: "Ngari Gunsa Airport",
    country: "China"
  },
  {
    city: "Anshun (Xixiu)",
    iata: "AVA",
    name: "Anshun Huangguoshu Airport",
    country: "China"
  },
  {
    city: "Mianyang",
    iata: "BCJ",
    name: "Beichuan Yongchang Airport",
    country: "China"
  },
  {
    city: "Bangda",
    iata: "BPX",
    name: "Qamdo Bangda Airport",
    country: "China"
  },
  {
    city: "Bijie",
    iata: "BFJ",
    name: "Bijie Feixiong Airport",
    country: "China"
  },
  {
    city: "Chongqing",
    iata: "CKG",
    name: "Chongqing Jiangbei International Airport",
    country: "China"
  },
  {
    city: "Dazhou (Dachuan)",
    iata: "DZH",
    name: "Dazhou Jinya Airport",
    country: "China"
  },
  {
    city: "Garzê (Daocheng)",
    iata: "DCY",
    name: "Daocheng Yading Airport",
    country: "China"
  },
  {
    city: "Tongren",
    iata: "DEJ",
    name: "Tongren Dejiang Airport (Under Construction)",
    country: "China"
  },
  {
    city: "Dazhou (Daxian)",
    iata: "DAX",
    name: "Dachuan Airport",
    country: "China"
  },
  {
    city: "Dazu",
    iata: "DZU",
    name: "Dazu Air Base",
    country: "China"
  },
  {
    city: "Deyang (Guanghan)",
    iata: "GHN",
    name: "Guanghan Airport",
    country: "China"
  },
  {
    city: "Guangyuan (Lizhou)",
    iata: "GYS",
    name: "Guangyuan Panlong Airport",
    country: "China"
  },
  {
    city: "Guiyang (Nanming)",
    iata: "KWE",
    name: "Guiyang Longdongbao International Airport",
    country: "China"
  },
  {
    city: "Garzê (Garzê)",
    iata: "GZG",
    name: "Garze Gesar Airport",
    country: "China"
  },
  {
    city: "Ngawa (Hongyuan)",
    iata: "AHJ",
    name: "Hongyuan Airport",
    country: "China"
  },
  {
    city: "Ngawa (Songpan)",
    iata: "JZH",
    name: "Jiuzhai Huanglong Airport",
    country: "China"
  },
  {
    city: "Garzê (Kangding)",
    iata: "KGT",
    name: "Kangding Airport",
    country: "China"
  },
  {
    city: "Kaili  (Huangping)",
    iata: "KJH",
    name: "Kaili Huangping Airport",
    country: "China"
  },
  {
    city: "Qiannan (Libo)",
    iata: "LLB",
    name: "Libo Airport",
    country: "China"
  },
  {
    city: "Liangping",
    iata: "LIA",
    name: "Liangping Airport",
    country: "China"
  },
  {
    city: "Shannan (Gonggar)",
    iata: "LXA",
    name: "Lhasa Gonggar International Airport",
    country: "China"
  },
  {
    city: "Luzhou (Yunlong)",
    iata: "LZO",
    name: "Luzhou Yunlong Airport",
    country: "China"
  },
  {
    city: "Zunyi",
    iata: "WMT",
    name: "Zunyi Maotai Airport",
    country: "China"
  },
  {
    city: "Mianyang (Fucheng)",
    iata: "MIG",
    name: "Mianyang Nanjiao Airport",
    country: "China"
  },
  {
    city: "Nanchong (Gaoping)",
    iata: "NAO",
    name: "Nanchong Gaoping Airport",
    country: "China"
  },
  {
    city: "Liping",
    iata: "HZH",
    name: "Liping Airport",
    country: "China"
  },
  {
    city: "Nyingchi (Mainling)",
    iata: "LZY",
    name: "Nyingchi Mainling Airport",
    country: "China"
  },
  {
    city: "Liupanshui (Zhongshan)",
    iata: "LPF",
    name: "Liupanshui Yuezhao Airport",
    country: "China"
  },
  {
    city: "Qianjiang",
    iata: "JIQ",
    name: "Qianjiang Wulingshan Airport",
    country: "China"
  },
  {
    city: "Xigazê (Samzhubzê)",
    iata: "RKZ",
    name: "Xigaze Peace Airport / Shigatse Air Base",
    country: "China"
  },
  {
    city: "Shannan",
    iata: "LGZ",
    name: "Shannan Longzi Airport",
    country: "China"
  },
  {
    city: "Baoshan (Tengchong)",
    iata: "TCZ",
    name: "Tengchong Tuofeng Airport",
    country: "China"
  },
  {
    city: "Chengdu (Jianyang)",
    iata: "TFU",
    name: "Chengdu Tianfu International Airport",
    country: "China"
  },
  {
    city: "Tongren (Daxing)",
    iata: "TEN",
    name: "Tongren Fenghuang Airport",
    country: "China"
  },
  {
    city: "Chengdu (Shuangliu)",
    iata: "CTU",
    name: "Chengdu Shuangliu International Airport",
    country: "China"
  },
  {
    city: "Wulong",
    iata: "CQW",
    name: "Chongqing Xiannüshan Airport",
    country: "China"
  },
  {
    city: "Wushan",
    iata: "WSK",
    name: "Chongqing Wushan Airport",
    country: "China"
  },
  {
    city: "Wanzhou",
    iata: "WXN",
    name: "Wanzhou Wuqiao Airport",
    country: "China"
  },
  {
    city: "Liangshan (Xichang)",
    iata: "XIC",
    name: "Xichang Qingshan Airport",
    country: "China"
  },
  {
    city: "Yibin (Cuiping)",
    iata: "YBP",
    name: "Yibin Wuliangye Airport",
    country: "China"
  },
  {
    city: "Xingyi",
    iata: "ACX",
    name: "Xingyi Wanfenglin Airport",
    country: "China"
  },
  {
    city: "Panzhihua (Renhe)",
    iata: "PZI",
    name: "Panzhihua Bao'anying Airport",
    country: "China"
  },
  {
    city: "Zunyi",
    iata: "ZYI",
    name: "Zunyi Xinzhou Airport",
    country: "China"
  },
  {
    city: "Aksu (Onsu)",
    iata: "AKU",
    name: "Aksu Hongqipo Airport",
    country: "China"
  },
  {
    city: "Aral",
    iata: "ACF",
    name: "Aral Tarim Airport",
    country: "China"
  },
  {
    city: "Altay",
    iata: "AAT",
    name: "Altay Xuedu Airport",
    country: "China"
  },
  {
    city: "Bole",
    iata: "BPL",
    name: "Bole Alashankou Airport",
    country: "China"
  },
  {
    city: "Qiemo",
    iata: "IQM",
    name: "Qiemo Yudu Airport",
    country: "China"
  },
  {
    city: "Fuyun",
    iata: "FYN",
    name: "Fuyun Koktokay Airport",
    country: "China"
  },
  {
    city: "Hami",
    iata: "HMI",
    name: "Hami Airport",
    country: "China"
  },
  {
    city: "Shihezi",
    iata: "SHF",
    name: "Shihezi Huayuan Airport",
    country: "China"
  },
  {
    city: "Kuqa",
    iata: "KCA",
    name: "Kuqa Qiuci Airport",
    country: "China"
  },
  {
    city: "Korla",
    iata: "KRL",
    name: "Korla Licheng Airport",
    country: "China"
  },
  {
    city: "Karamay",
    iata: "KRY",
    name: "Karamay Airport",
    country: "China"
  },
  {
    city: "Burqin",
    iata: "KJI",
    name: "Burqin Kanas Airport",
    country: "China"
  },
  {
    city: "Xinyuan",
    iata: "NLT",
    name: "Xinyuan Nalati Airport",
    country: "China"
  },
  {
    city: "Ruoqiang Town",
    iata: "RQA",
    name: "Ruoqiang Loulan Airport",
    country: "China"
  },
  {
    city: "Shache",
    iata: "QSZ",
    name: "Shache Airport",
    country: "China"
  },
  {
    city: "Kashgar",
    iata: "KHG",
    name: "Kashgar Laining International Airport",
    country: "China"
  },
  {
    city: "Shanshan",
    iata: "SXJ",
    name: "Shanshan Airport",
    country: "China"
  },
  {
    city: "Tacheng",
    iata: "TCG",
    name: "Tacheng Qianquan Airport",
    country: "China"
  },
  {
    city: "Turpan",
    iata: "TLQ",
    name: "Turpan Jiaohe Airport",
    country: "China"
  },
  {
    city: "Hotan",
    iata: "HTN",
    name: "Hotan Airport",
    country: "China"
  },
  {
    city: "Ürümqi",
    iata: "URC",
    name: "Ürümqi Tianshan International Airport",
    country: "China"
  },
  {
    city: "Ili (Yining / Ghulja)",
    iata: "YIN",
    name: "Yining Airport",
    country: "China"
  },
  {
    city: "Hotan (Yutian)",
    iata: "YTW",
    name: "Yutian Wanfang Airport",
    country: "China"
  },
  {
    city: "Anshan",
    iata: "AOG",
    name: "Anshan Teng'ao Airport / Anshan Air Base",
    country: "China"
  },
  {
    city: "Baicheng",
    iata: "DBC",
    name: "Baicheng Chang'an Airport",
    country: "China"
  },
  {
    city: "Baishan",
    iata: "NBS",
    name: "Changbaishan Airport",
    country: "China"
  },
  {
    city: "Changchun",
    iata: "CGQ",
    name: "Changchun Longjia International Airport",
    country: "China"
  },
  {
    city: "Dalian (Changhai)",
    iata: "CNI",
    name: "Changhai Dachangshandao Airport",
    country: "China"
  },
  {
    city: "Shuangta, Chaoyang",
    iata: "CHG",
    name: "Chaoyang Airport",
    country: "China"
  },
  {
    city: "Dandong (Zhenxing)",
    iata: "DDG",
    name: "Dandong Langtou International Airport",
    country: "China"
  },
  {
    city: "Daqing",
    iata: "DQA",
    name: "Daqing Sartu Airport",
    country: "China"
  },
  {
    city: "Heihe",
    iata: "DTU",
    name: "Wudalianchi Dedu Airport",
    country: "China"
  },
  {
    city: "Fuyuan",
    iata: "FYJ",
    name: "Fuyuan Dongji Airport",
    country: "China"
  },
  {
    city: "Harbin",
    iata: "HRB",
    name: "Harbin Taiping International Airport",
    country: "China"
  },
  {
    city: "Heihe",
    iata: "HEK",
    name: "Heihe Aihui Airport",
    country: "China"
  },
  {
    city: "Jiagedaqi",
    iata: "JGD",
    name: "Daxing'anling Elunchun Airport",
    country: "China"
  },
  {
    city: "Jilin",
    iata: "JIL",
    name: "Jilin Ertaizi Airport",
    country: "China"
  },
  {
    city: "Jiamusi",
    iata: "JMU",
    name: "Jiamusi Songjiang International Airport",
    country: "China"
  },
  {
    city: "Jiansanjiang",
    iata: "JSJ",
    name: "Jiansanjiang Shidi Airport",
    country: "China"
  },
  {
    city: "Jixi",
    iata: "JXA",
    name: "Jixi Xingkaihu Airport",
    country: "China"
  },
  {
    city: "Jinzhou (Linghai)",
    iata: "JNZ",
    name: "Jinzhou Bay Airport",
    country: "China"
  },
  {
    city: "Yichun",
    iata: "LDS",
    name: "Yichun Lindu Airport",
    country: "China"
  },
  {
    city: "Mudanjiang",
    iata: "MDG",
    name: "Mudanjiang Hailang International Airport",
    country: "China"
  },
  {
    city: "Mohe",
    iata: "OHE",
    name: "Mohe Gulian Airport",
    country: "China"
  },
  {
    city: "Qiqihar",
    iata: "NDG",
    name: "Qiqihar Sanjiazi Airport",
    country: "China"
  },
  {
    city: "Suifenhe",
    iata: "HSF",
    name: "Suifenhe Dongning Airport",
    country: "China"
  },
  {
    city: "Qian Gorlos Mongol Autonomous County",
    iata: "YSQ",
    name: "Songyuan Chaganhu Airport",
    country: "China"
  },
  {
    city: "Dalian (Ganjingzi)",
    iata: "DLC",
    name: "Dalian Zhoushuizi International Airport",
    country: "China"
  },
  {
    city: "Tonghua",
    iata: "TNH",
    name: "Tonghua Sanyuanpu Airport",
    country: "China"
  },
  {
    city: "Shenyang",
    iata: "SHE",
    name: "Shenyang Taoxian International Airport",
    country: "China"
  },
  {
    city: "Huludao (Xingcheng)",
    iata: "XEN",
    name: "Xingcheng Air Base",
    country: "China"
  },
  {
    city: "Yanji",
    iata: "YNJ",
    name: "Yanji Chaoyangchuan Airport",
    country: "China"
  },
  {
    city: "Yingkou (Laobian)",
    iata: "YKH",
    name: "Yingkou Lanqi Airport",
    country: "China"
  }
];
 export default airports;