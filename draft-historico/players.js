const players = [
  {
    "id": "roberto_dinamite_1",
    "nome": "Roberto Dinamite",
    "posicao": "ATA/MEI",
    "overall": 97,
    "raridade": "Panteão",
    "era": "1970/1980/1990"
  },
  {
    "id": "moacyr_barbosa_2",
    "nome": "Moacyr Barbosa",
    "posicao": "GOL",
    "overall": 94,
    "raridade": "Panteão",
    "era": "1940/1950"
  },
  {
    "id": "ademir_de_menezes_3",
    "nome": "Ademir de Menezes",
    "posicao": "ATA/MEI",
    "overall": 96,
    "raridade": "Panteão",
    "era": "1940/1950"
  },
  {
    "id": "romario_4",
    "nome": "Romário",
    "posicao": "ATA",
    "overall": 96,
    "raridade": "Lenda",
    "era": "1980/2000"
  },
  {
    "id": "juninho_pernambucano_5",
    "nome": "Juninho Pernambucano",
    "posicao": "VOL/MC",
    "overall": 93,
    "raridade": "Lenda",
    "era": "1990/2000/2010"
  },
  {
    "id": "bellini_6",
    "nome": "Bellini",
    "posicao": "ZAG",
    "overall": 93,
    "raridade": "Lenda",
    "era": "1950/1960"
  },
  {
    "id": "danilo_alvim_7",
    "nome": "Danilo Alvim",
    "posicao": "VOL",
    "overall": 93,
    "raridade": "Lenda",
    "era": "1940/1950"
  },
  {
    "id": "vava_8",
    "nome": "Vavá",
    "posicao": "ATA",
    "overall": 93,
    "raridade": "Lenda",
    "era": "1950"
  },
  {
    "id": "edmundo_9",
    "nome": "Edmundo",
    "posicao": "ATA",
    "overall": 93,
    "raridade": "Lenda",
    "era": "1990/2000"
  },
  {
    "id": "maneca_10",
    "nome": "Maneca",
    "posicao": "MC/MEI",
    "overall": 92,
    "raridade": "Lenda",
    "era": "1940/1950"
  },
  {
    "id": "geovani_11",
    "nome": "Geovani",
    "posicao": "VOL/MC",
    "overall": 92,
    "raridade": "Lenda",
    "era": "1980/1990"
  },
  {
    "id": "felipe_12",
    "nome": "Felipe",
    "posicao": "LAT/MEI",
    "overall": 92,
    "raridade": "Lenda",
    "era": "1990/2000/2010"
  },
  {
    "id": "chico_13",
    "nome": "Chico",
    "posicao": "ATA",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1940/1950"
  },
  {
    "id": "orlando_pecanha_14",
    "nome": "Orlando Peçanha",
    "posicao": "ZAG",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1950/1960"
  },
  {
    "id": "brito_15",
    "nome": "Brito",
    "posicao": "ZAG",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1950/1960"
  },
  {
    "id": "bebeto_16",
    "nome": "Bebeto",
    "posicao": "ATA",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1980/1990"
  },
  {
    "id": "ely_do_amparo_17",
    "nome": "Ely do Amparo",
    "posicao": "LAT/VOL",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1940/1950"
  },
  {
    "id": "fausto_18",
    "nome": "Fausto",
    "posicao": "VOL/MC",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1920/1930"
  },
  {
    "id": "russinho_19",
    "nome": "Russinho",
    "posicao": "ATA",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1920/1930"
  },
  {
    "id": "mauro_galvao_20",
    "nome": "Mauro Galvão",
    "posicao": "ZAG",
    "overall": 92,
    "raridade": "Lenda",
    "era": "1990/2000"
  },
  {
    "id": "paschoal_21",
    "nome": "Paschoal",
    "posicao": "MEI/ATA",
    "overall": 89,
    "raridade": "Lenda",
    "era": "1920/1930"
  },
  {
    "id": "domingos_da_guia_22",
    "nome": "Domingos da Guia",
    "posicao": "ZAG",
    "overall": 90,
    "raridade": "Craque",
    "era": "1930"
  },
  {
    "id": "heleno_de_freitas_23",
    "nome": "Heleno de Freitas",
    "posicao": "ATA",
    "overall": 89,
    "raridade": "Craque",
    "era": "1940"
  },
  {
    "id": "augusto_da_costa_24",
    "nome": "Augusto da Costa",
    "posicao": "LAT/ZAG",
    "overall": 88,
    "raridade": "Craque",
    "era": "1940/1950"
  },
  {
    "id": "rafanelli_25",
    "nome": "Rafanelli",
    "posicao": "ZAG",
    "overall": 87,
    "raridade": "Craque",
    "era": "1940/1950"
  },
  {
    "id": "jorge_sacramento_26",
    "nome": "Jorge Sacramento",
    "posicao": "LAT/VOL",
    "overall": 86,
    "raridade": "Craque",
    "era": "1940/1950"
  },
  {
    "id": "bismarck_27",
    "nome": "Bismarck",
    "posicao": "MC/MEI",
    "overall": 89,
    "raridade": "Craque",
    "era": "1980/1990"
  },
  {
    "id": "jorginho_carvoeiro_28",
    "nome": "Jorginho Carvoeiro",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Xodó",
    "era": "1970"
  },
  {
    "id": "dede_29",
    "nome": "Dedé",
    "posicao": "ZAG",
    "overall": 88,
    "raridade": "Craque",
    "era": "2000/2010"
  },
  {
    "id": "nene_30",
    "nome": "Nenê",
    "posicao": "MEI",
    "overall": 87,
    "raridade": "Xodó",
    "era": "2010/2020"
  },
  {
    "id": "dimitri_payet_31",
    "nome": "Dimitri Payet",
    "posicao": "MEI",
    "overall": 85,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "philippe_coutinho_32",
    "nome": "Philippe Coutinho",
    "posicao": "MEI",
    "overall": 86,
    "raridade": "Craque",
    "era": "2000/2020"
  },
  {
    "id": "rayan_33",
    "nome": "Rayan",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Xodó",
    "era": "2020"
  },
  {
    "id": "carlos_germano_34",
    "nome": "Carlos Germano",
    "posicao": "GOL",
    "overall": 91,
    "raridade": "Lenda",
    "era": "1990"
  },
  {
    "id": "acacio_35",
    "nome": "Acácio",
    "posicao": "GOL",
    "overall": 90,
    "raridade": "Lenda",
    "era": "1980/1990"
  },
  {
    "id": "andrada_36",
    "nome": "Andrada",
    "posicao": "GOL",
    "overall": 89,
    "raridade": "Lenda",
    "era": "1970"
  },
  {
    "id": "moises_37",
    "nome": "Moisés",
    "posicao": "ZAG",
    "overall": 85,
    "raridade": "Xodó",
    "era": "1970"
  },
  {
    "id": "paulinho_massariol_38",
    "nome": "Paulinho Massariol",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Xodó",
    "era": "1970"
  },
  {
    "id": "ramon_menezes_39",
    "nome": "Ramon Menezes",
    "posicao": "MEI",
    "overall": 87,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "juninho_paulista_40",
    "nome": "Juninho Paulista",
    "posicao": "MEI",
    "overall": 87,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "eder_luis_41",
    "nome": "Éder Luís",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "tita_42",
    "nome": "Tita",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Craque",
    "era": "1980"
  },
  {
    "id": "isaias_43",
    "nome": "Isaías",
    "posicao": "ATA",
    "overall": 89,
    "raridade": "Craque",
    "era": "1940"
  },
  {
    "id": "jair_rosa_pinto_44",
    "nome": "Jair Rosa Pinto",
    "posicao": "MEI",
    "overall": 88,
    "raridade": "Lenda",
    "era": "1940"
  },
  {
    "id": "lele_45",
    "nome": "Lelé",
    "posicao": "ATA",
    "overall": 90,
    "raridade": "Lenda",
    "era": "1940"
  },
  {
    "id": "paulinho_de_almeida_46",
    "nome": "Paulinho de Almeida",
    "posicao": "LAT/VOL",
    "overall": 89,
    "raridade": "Craque",
    "era": "1950"
  },
  {
    "id": "pinga_47",
    "nome": "Pinga",
    "posicao": "ATA",
    "overall": 90,
    "raridade": "Lenda",
    "era": "1950/1960"
  },
  {
    "id": "sabara_48",
    "nome": "Sabará",
    "posicao": "ATA",
    "overall": 90,
    "raridade": "Lenda",
    "era": "1950/1960"
  },
  {
    "id": "ipojucan_49",
    "nome": "Ipojucan",
    "posicao": "MC/MEI",
    "overall": 88,
    "raridade": "Craque",
    "era": "1940/1950"
  },
  {
    "id": "friaca_50",
    "nome": "Friaça",
    "posicao": "ATA",
    "overall": 88,
    "raridade": "Craque",
    "era": "1940/1950"
  },
  {
    "id": "orlando_lele_51",
    "nome": "Orlando Lelé",
    "posicao": "LAT/ZAG",
    "overall": 88,
    "raridade": "Craque",
    "era": "1970/1980"
  },
  {
    "id": "mazinho_52",
    "nome": "Mazinho",
    "posicao": "LAT/VOL",
    "overall": 89,
    "raridade": "Craque",
    "era": "1980"
  },
  {
    "id": "niginho_53",
    "nome": "Niginho",
    "posicao": "ATA",
    "overall": 88,
    "raridade": "Craque",
    "era": "1930"
  },
  {
    "id": "orlando_rosa_pinto_54",
    "nome": "Orlando Rosa Pinto",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1930/1940"
  },
  {
    "id": "leonidas_da_silva_55",
    "nome": "Leônidas da Silva",
    "posicao": "ATA",
    "overall": 88,
    "raridade": "Craque",
    "era": "1930"
  },
  {
    "id": "anderson_martins_56",
    "nome": "Anderson Martins",
    "posicao": "ZAG",
    "overall": 86,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "ramon_motta_57",
    "nome": "Ramon Motta",
    "posicao": "LAT",
    "overall": 84,
    "raridade": "Comum",
    "era": "2000/2010"
  },
  {
    "id": "fagner_58",
    "nome": "Fagner",
    "posicao": "LAT",
    "overall": 84,
    "raridade": "Comum",
    "era": "2000/2010"
  },
  {
    "id": "wagner_diniz_59",
    "nome": "Wagner Diniz",
    "posicao": "LAT",
    "overall": 83,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "rodrigo_60",
    "nome": "Rodrigo",
    "posicao": "ZAG",
    "overall": 82,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "luan_61",
    "nome": "Luan",
    "posicao": "ZAG",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "raniel_62",
    "nome": "Raniel",
    "posicao": "ATA",
    "overall": 77,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "edmilson_63",
    "nome": "Edmílson",
    "posicao": "ATA",
    "overall": 77,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "nilton_64",
    "nome": "Nilton",
    "posicao": "VOL",
    "overall": 80,
    "raridade": "Comum",
    "era": "2000/2010"
  },
  {
    "id": "eduardo_costa_65",
    "nome": "Eduardo Costa",
    "posicao": "VOL",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "romulo_66",
    "nome": "Rômulo",
    "posicao": "VOL",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010/2020"
  },
  {
    "id": "diego_souza_67",
    "nome": "Diego Souza",
    "posicao": "MEI/ATA",
    "overall": 86,
    "raridade": "Xodó",
    "era": "2010"
  },
  {
    "id": "jumar_68",
    "nome": "Jumar",
    "posicao": "LAT/VOL",
    "overall": 79,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "alecsandro_69",
    "nome": "Alecsandro",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "paulo_miranda_70",
    "nome": "Paulo Miranda",
    "posicao": "LAT",
    "overall": 82,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "jorginho_71",
    "nome": "Jorginho",
    "posicao": "LAT/VOL",
    "overall": 85,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "feitico_72",
    "nome": "Feitiço",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1930"
  },
  {
    "id": "tatu_73",
    "nome": "Tatu",
    "posicao": "MEI",
    "overall": 81,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "bahianinho_74",
    "nome": "Bahianinho",
    "posicao": "ATA",
    "overall": 81,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "figliola_75",
    "nome": "Figliola",
    "posicao": "VOL",
    "overall": 84,
    "raridade": "Comum",
    "era": "1930/1940"
  },
  {
    "id": "villadoniga_76",
    "nome": "Villadoniga",
    "posicao": "ATA",
    "overall": 88,
    "raridade": "Craque",
    "era": "1930/1940"
  },
  {
    "id": "pablo_vegetti_77",
    "nome": "Pablo Vegetti",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Xodó",
    "era": "2020"
  },
  {
    "id": "gabriel_pec_78",
    "nome": "Gabriel Pec",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Xodó",
    "era": "2010/2020"
  },
  {
    "id": "andrey_santos_79",
    "nome": "Andrey Santos",
    "posicao": "VOL",
    "overall": 85,
    "raridade": "Xodó",
    "era": "2020"
  },
  {
    "id": "fontana_80",
    "nome": "Fontana",
    "posicao": "ZAG",
    "overall": 87,
    "raridade": "Craque",
    "era": "1960"
  },
  {
    "id": "celio_81",
    "nome": "Célio",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1960"
  },
  {
    "id": "lamanna_82",
    "nome": "Lamanna",
    "posicao": "ATA",
    "overall": 84,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "zarzur_83",
    "nome": "Zarzur",
    "posicao": "LAT/VOL",
    "overall": 81,
    "raridade": "Comum",
    "era": "1930/1940"
  },
  {
    "id": "mola_84",
    "nome": "Mola",
    "posicao": "LAT/VOL",
    "overall": 81,
    "raridade": "Xodó",
    "era": "1920/1930"
  },
  {
    "id": "marco_antonio_85",
    "nome": "Marco Antônio",
    "posicao": "LAT",
    "overall": 86,
    "raridade": "Craque",
    "era": "1970"
  },
  {
    "id": "dirceuzinho_86",
    "nome": "Dirceuzinho",
    "posicao": "MC",
    "overall": 87,
    "raridade": "Craque",
    "era": "1970"
  },
  {
    "id": "fidelis_87",
    "nome": "Fidélis",
    "posicao": "LAT",
    "overall": 84,
    "raridade": "Comum",
    "era": "1970"
  },
  {
    "id": "paulo_sergio_88",
    "nome": "Paulo Sérgio",
    "posicao": "LAT",
    "overall": 83,
    "raridade": "Comum",
    "era": "1970"
  },
  {
    "id": "alfinete_89",
    "nome": "Alfinete",
    "posicao": "LAT",
    "overall": 85,
    "raridade": "Xodó",
    "era": "1970"
  },
  {
    "id": "zanata_90",
    "nome": "Zanata",
    "posicao": "VOL",
    "overall": 85,
    "raridade": "Comum",
    "era": "1970"
  },
  {
    "id": "alcir_portela_91",
    "nome": "Alcir Portela",
    "posicao": "VOL",
    "overall": 87,
    "raridade": "Lenda",
    "era": "1970"
  },
  {
    "id": "de_aranha_92",
    "nome": "Dé Aranha",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Craque",
    "era": "1970"
  },
  {
    "id": "mazzaropi_93",
    "nome": "Mazzaropi",
    "posicao": "GOL",
    "overall": 87,
    "raridade": "Craque",
    "era": "1970/1980"
  },
  {
    "id": "emerson_leao_94",
    "nome": "Emerson Leão",
    "posicao": "GOL",
    "overall": 87,
    "raridade": "Craque",
    "era": "1970"
  },
  {
    "id": "abel_braga_95",
    "nome": "Abel Braga",
    "posicao": "ZAG",
    "overall": 84,
    "raridade": "Craque",
    "era": "1970"
  },
  {
    "id": "ramon_96",
    "nome": "Ramón",
    "posicao": "ATA",
    "overall": 81,
    "raridade": "Comum",
    "era": "1970"
  },
  {
    "id": "pedrinho_vicencote_97",
    "nome": "Pedrinho Vicençote",
    "posicao": "LAT",
    "overall": 85,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "mauricinho_98",
    "nome": "Mauricinho",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Comum",
    "era": "1980/1990"
  },
  {
    "id": "arturzinho_99",
    "nome": "Arturzinho",
    "posicao": "ATA",
    "overall": 84,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "rosemiro_100",
    "nome": "Rosemiro",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "joao_luis_101",
    "nome": "João Luís",
    "posicao": "LAT",
    "overall": 78,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "ivan_102",
    "nome": "Ivan",
    "posicao": "ZAG",
    "overall": 80,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "roberto_costa_103",
    "nome": "Roberto Costa",
    "posicao": "GOL",
    "overall": 82,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "claudio_adao_104",
    "nome": "Cláudio Adão",
    "posicao": "ATA",
    "overall": 83,
    "raridade": "Craque",
    "era": "1980"
  },
  {
    "id": "luis_carlos_105",
    "nome": "Luís Carlos",
    "posicao": "VOL/MC",
    "overall": 84,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "andrade_106",
    "nome": "Andrade",
    "posicao": "VOL",
    "overall": 84,
    "raridade": "Craque",
    "era": "1980"
  },
  {
    "id": "dunga_107",
    "nome": "Dunga",
    "posicao": "VOL",
    "overall": 86,
    "raridade": "Craque",
    "era": "1980"
  },
  {
    "id": "boiadeiro_108",
    "nome": "Boiadeiro",
    "posicao": "VOL/MC",
    "overall": 84,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "ze_do_carmo_109",
    "nome": "Zé do Carmo",
    "posicao": "VOL",
    "overall": 83,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "luis_carlos_wink_110",
    "nome": "Luís Carlos Wink",
    "posicao": "LAT",
    "overall": 85,
    "raridade": "Craque",
    "era": "1980/1990"
  },
  {
    "id": "valdir_bigode_111",
    "nome": "Valdir Bigode",
    "posicao": "ATA",
    "overall": 88,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "sorato_112",
    "nome": "Sorato",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1980/1990"
  },
  {
    "id": "odvan_113",
    "nome": "Odvan",
    "posicao": "ZAG",
    "overall": 86,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "pedrinho_114",
    "nome": "Pedrinho",
    "posicao": "MEI/ATA",
    "overall": 86,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "jardel_115",
    "nome": "Jardel",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "ricardo_rocha_116",
    "nome": "Ricardo Rocha",
    "posicao": "ZAG",
    "overall": 88,
    "raridade": "Craque",
    "era": "1990"
  },
  {
    "id": "guina_117",
    "nome": "Guina",
    "posicao": "MC",
    "overall": 85,
    "raridade": "Xodó",
    "era": "1970/1980"
  },
  {
    "id": "wilsinho_118",
    "nome": "Wilsinho",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Comum",
    "era": "1970/1980"
  },
  {
    "id": "donizete_119",
    "nome": "Donizete",
    "posicao": "ATA",
    "overall": 88,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "luisao_120",
    "nome": "Luisão",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1990"
  },
  {
    "id": "nasa_121",
    "nome": "Nasa",
    "posicao": "VOL",
    "overall": 83,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "vagner_122",
    "nome": "Vagner",
    "posicao": "LAT/MEI",
    "overall": 83,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "jorge_luis_123",
    "nome": "Jorge Luís",
    "posicao": "ZAG",
    "overall": 81,
    "raridade": "Comum",
    "era": "1990/2000"
  },
  {
    "id": "alexandre_torres_124",
    "nome": "Alexandre Torres",
    "posicao": "ZAG",
    "overall": 84,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "yan_125",
    "nome": "Yan",
    "posicao": "MC/MEI",
    "overall": 80,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "bernardo_126",
    "nome": "Bernardo",
    "posicao": "MEI/ATA",
    "overall": 81,
    "raridade": "Xodó",
    "era": "2010"
  },
  {
    "id": "pimentel_127",
    "nome": "Pimentel",
    "posicao": "LAT",
    "overall": 82,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "valkmar_128",
    "nome": "Valkmar",
    "posicao": "ZAG",
    "overall": 75,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "leo_moura_129",
    "nome": "Léo Moura",
    "posicao": "LAT",
    "overall": 81,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "helton_130",
    "nome": "Hélton",
    "posicao": "GOL",
    "overall": 86,
    "raridade": "Craque",
    "era": "2000"
  },
  {
    "id": "fabio_131",
    "nome": "Fábio",
    "posicao": "GOL",
    "overall": 83,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "paulo_henrique_132",
    "nome": "Paulo Henrique",
    "posicao": "LAT",
    "overall": 83,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "lucas_piton_133",
    "nome": "Lucas Piton",
    "posicao": "LAT",
    "overall": 82,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "puma_rodriguez_134",
    "nome": "Puma Rodríguez",
    "posicao": "LAT",
    "overall": 78,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "rodrigo_souto_135",
    "nome": "Rodrigo Souto",
    "posicao": "VOL/MC",
    "overall": 80,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "leo_lima_136",
    "nome": "Léo Lima",
    "posicao": "MC/MEI",
    "overall": 81,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "petkovic_137",
    "nome": "Petkovic",
    "posicao": "MEI",
    "overall": 86,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "claudemir_138",
    "nome": "Claudemir",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "alex_dias_139",
    "nome": "Alex Dias",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "cassio_140",
    "nome": "Cássio",
    "posicao": "GOL",
    "overall": 80,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "fernando_prass_141",
    "nome": "Fernando Prass",
    "posicao": "GOL",
    "overall": 86,
    "raridade": "Craque",
    "era": "2000/2010"
  },
  {
    "id": "martin_silva_142",
    "nome": "Martín Silva",
    "posicao": "GOL",
    "overall": 84,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "rodrigo_pimpao_143",
    "nome": "Rodrigo Pimpão",
    "posicao": "ATA",
    "overall": 78,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "alex_teixeira_144",
    "nome": "Alex Teixeira",
    "posicao": "ATA",
    "overall": 81,
    "raridade": "Comum",
    "era": "2000/2020"
  },
  {
    "id": "marcio_careca_145",
    "nome": "Márcio Careca",
    "posicao": "LAT",
    "overall": 76,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "felipe_bastos_146",
    "nome": "Felipe Bastos",
    "posicao": "VOL",
    "overall": 77,
    "raridade": "Comum",
    "era": "2000/2010"
  },
  {
    "id": "allan_147",
    "nome": "Allan",
    "posicao": "LAT/VOL",
    "overall": 83,
    "raridade": "Comum",
    "era": "2000/2010"
  },
  {
    "id": "alessandro_148",
    "nome": "Alessandro",
    "posicao": "GOL",
    "overall": 69,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "diogo_silva_149",
    "nome": "Diogo Silva",
    "posicao": "GOL",
    "overall": 70,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "michel_alves_150",
    "nome": "Michel Alves",
    "posicao": "GOL",
    "overall": 69,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "leandro_bonfim_151",
    "nome": "Leandro Bonfim",
    "posicao": "MC/MEI",
    "overall": 77,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "jh_andrade_152",
    "nome": "JH Andrade",
    "posicao": "VOL",
    "overall": 79,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "dario_conca_153",
    "nome": "Darío Conca",
    "posicao": "MEI",
    "overall": 80,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "leandro_amaral_154",
    "nome": "Leandro Amaral",
    "posicao": "ATA",
    "overall": 86,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "ely_thadeu_155",
    "nome": "Ely Thadeu",
    "posicao": "ATA",
    "overall": 74,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "marcelinho_carioca_156",
    "nome": "Marcelinho Carioca",
    "posicao": "MEI",
    "overall": 86,
    "raridade": "Craque",
    "era": "2000"
  },
  {
    "id": "robson_luis_157",
    "nome": "Robson Luís",
    "posicao": "ATA",
    "overall": 75,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "fabio_bras_158",
    "nome": "Fábio Brás",
    "posicao": "ZAG",
    "overall": 74,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "emiliano_dudar_159",
    "nome": "Emiliano Dudar",
    "posicao": "ZAG",
    "overall": 74,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "bruno_meneghel_160",
    "nome": "Bruno Meneghel",
    "posicao": "ATA",
    "overall": 76,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "abuda_161",
    "nome": "Abuda",
    "posicao": "ATA",
    "overall": 74,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "beto_162",
    "nome": "Beto",
    "posicao": "MEI/ATA",
    "overall": 78,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "pinilla_163",
    "nome": "Pinilla",
    "posicao": "ATA",
    "overall": 74,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "souza_caveirao_164",
    "nome": "Souza Caveirão",
    "posicao": "ATA",
    "overall": 79,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "souza_165",
    "nome": "Souza",
    "posicao": "VOL",
    "overall": 80,
    "raridade": "Comum",
    "era": "2000/2020"
  },
  {
    "id": "dodo_166",
    "nome": "Dodô",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "2000"
  },
  {
    "id": "renato_silva_167",
    "nome": "Renato Silva",
    "posicao": "ZAG",
    "overall": 79,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "douglas_bacelar_168",
    "nome": "Douglas Bacelar",
    "posicao": "ZAG",
    "overall": 78,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "auremir_169",
    "nome": "Auremir",
    "posicao": "LAT",
    "overall": 73,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "thiago_feltri_170",
    "nome": "Thiago Feltri",
    "posicao": "LAT",
    "overall": 75,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "wendel_171",
    "nome": "Wendel",
    "posicao": "VOL",
    "overall": 76,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "dakson_172",
    "nome": "Dakson",
    "posicao": "MC/MEI",
    "overall": 77,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "marlone_173",
    "nome": "Marlone",
    "posicao": "MEI",
    "overall": 77,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "montoya_174",
    "nome": "Montoya",
    "posicao": "MEI",
    "overall": 77,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "rafael_silva_175",
    "nome": "Rafael Silva",
    "posicao": "ATA",
    "overall": 79,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "julio_dos_santos_176",
    "nome": "Julio dos Santos",
    "posicao": "VOL/MC",
    "overall": 76,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "evander_177",
    "nome": "Evander",
    "posicao": "MEI",
    "overall": 77,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "riascos_178",
    "nome": "Riascos",
    "posicao": "ATA",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "guarin_179",
    "nome": "Guarín",
    "posicao": "MEI",
    "overall": 82,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "talles_magno_180",
    "nome": "Talles Magno",
    "posicao": "ATA",
    "overall": 78,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "yago_pikachu_181",
    "nome": "Yago Pikachu",
    "posicao": "LAT/ATA",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010/2020"
  },
  {
    "id": "german_cano_182",
    "nome": "German Cano",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "2010/2020"
  },
  {
    "id": "renato_kayzer_183",
    "nome": "Renato Kayzer",
    "posicao": "ATA",
    "overall": 76,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "douglas_luiz_184",
    "nome": "Douglas Luiz",
    "posicao": "VOL/MC",
    "overall": 83,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "andrezinho_185",
    "nome": "Andrezinho",
    "posicao": "MC",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "breno_186",
    "nome": "Breno",
    "posicao": "ZAG",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "luis_fabiano_187",
    "nome": "Luís Fabiano",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "jean_188",
    "nome": "Jean",
    "posicao": "VOL",
    "overall": 79,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "diguinho_189",
    "nome": "Diguinho",
    "posicao": "VOL",
    "overall": 77,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "jomar_190",
    "nome": "Jomar",
    "posicao": "ZAG",
    "overall": 74,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "andrey_ramos_191",
    "nome": "Andrey Ramos",
    "posicao": "VOL",
    "overall": 76,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "madson_192",
    "nome": "Madson",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "ricardo_graca_193",
    "nome": "Ricardo Graça",
    "posicao": "ZAG",
    "overall": 78,
    "raridade": "Comum",
    "era": "2010"
  },
  {
    "id": "leandro_castan_194",
    "nome": "Leandro Castán",
    "posicao": "ZAG",
    "overall": 81,
    "raridade": "Comum",
    "era": "2010/2020"
  },
  {
    "id": "luisinho_quintanilha_195",
    "nome": "Luisinho Quintanilha",
    "posicao": "VOL",
    "overall": 84,
    "raridade": "Craque",
    "era": "1990"
  },
  {
    "id": "gian_196",
    "nome": "Gian",
    "posicao": "MEI",
    "overall": 79,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "vivinho_197",
    "nome": "Vivinho",
    "posicao": "ATA",
    "overall": 81,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "regis_198",
    "nome": "Régis",
    "posicao": "GOL",
    "overall": 78,
    "raridade": "Comum",
    "era": "1980/1990"
  },
  {
    "id": "dener_199",
    "nome": "Dener",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Craque",
    "era": "1990"
  },
  {
    "id": "evair_200",
    "nome": "Evair",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1990"
  },
  {
    "id": "euller_201",
    "nome": "Euller",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1990"
  },
  {
    "id": "marica_202",
    "nome": "Maricá",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "valber_203",
    "nome": "Válber",
    "posicao": "LAT",
    "overall": 82,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "bruno_carvalho_204",
    "nome": "Bruno Carvalho",
    "posicao": "LAT",
    "overall": 75,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "quinones_205",
    "nome": "Quiñones",
    "posicao": "ZAG",
    "overall": 84,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "marco_aurelio_206",
    "nome": "Marco Aurélio",
    "posicao": "ZAG",
    "overall": 84,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "cocada_207",
    "nome": "Cocada",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Xodó",
    "era": "1980"
  },
  {
    "id": "franca_208",
    "nome": "França",
    "posicao": "VOL/MC",
    "overall": 76,
    "raridade": "Comum",
    "era": "1980/1990"
  },
  {
    "id": "paulo_baier_209",
    "nome": "Paulo Baier",
    "posicao": "LAT",
    "overall": 76,
    "raridade": "Comum",
    "era": "1990"
  },
  {
    "id": "clebson_210",
    "nome": "Clébson",
    "posicao": "LAT",
    "overall": 83,
    "raridade": "Comum",
    "era": "1990/2000"
  },
  {
    "id": "viola_211",
    "nome": "Viola",
    "posicao": "ATA",
    "overall": 83,
    "raridade": "Craque",
    "era": "1990/2000"
  },
  {
    "id": "pedro_raul_212",
    "nome": "Pedro Raúl",
    "posicao": "ATA",
    "overall": 77,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "paulinho_paula_213",
    "nome": "Paulinho Paula",
    "posicao": "VOL/MC",
    "overall": 80,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "gary_medel_214",
    "nome": "Gary Medel",
    "posicao": "ZAG",
    "overall": 81,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "maicon_215",
    "nome": "Maicon",
    "posicao": "ZAG",
    "overall": 79,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "leo_pele_216",
    "nome": "Léo Pelé",
    "posicao": "ZAG",
    "overall": 76,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "leo_jardim_217",
    "nome": "Léo Jardim",
    "posicao": "GOL",
    "overall": 83,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "hugo_moura_218",
    "nome": "Hugo Moura",
    "posicao": "VOL",
    "overall": 77,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "thiago_mendes_219",
    "nome": "Thiago Mendes",
    "posicao": "VOL",
    "overall": 83,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "caua_barros_220",
    "nome": "Cauã Barros",
    "posicao": "VOL",
    "overall": 79,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "lucas_freitas_221",
    "nome": "Lucas Freitas",
    "posicao": "ZAG",
    "overall": 75,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "joao_victor_222",
    "nome": "João Victor",
    "posicao": "ZAG",
    "overall": 77,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "andres_gomez_223",
    "nome": "Andrés Gomez",
    "posicao": "ATA",
    "overall": 83,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "marquinhos_gabriel_224",
    "nome": "Marquinhos Gabriel",
    "posicao": "MEI",
    "overall": 79,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "bruno_gomes_225",
    "nome": "Bruno Gomes",
    "posicao": "VOL",
    "overall": 78,
    "raridade": "Comum",
    "era": "2020"
  },
  {
    "id": "martin_benitez_226",
    "nome": "Martín Benítez",
    "posicao": "MEI",
    "overall": 80,
    "raridade": "Comum",
    "era": "2010/2020"
  },
  {
    "id": "torterolli_227",
    "nome": "Torterolli",
    "posicao": "MEI",
    "overall": 83,
    "raridade": "Comum",
    "era": "1920"
  },
  {
    "id": "tinoco_228",
    "nome": "Tinoco",
    "posicao": "VOL",
    "overall": 82,
    "raridade": "Comum",
    "era": "1920"
  },
  {
    "id": "jaguare_229",
    "nome": "Jaguaré",
    "posicao": "GOL",
    "overall": 86,
    "raridade": "Craque",
    "era": "1930"
  },
  {
    "id": "rei_230",
    "nome": "Rei",
    "posicao": "GOL",
    "overall": 84,
    "raridade": "Craque",
    "era": "1930"
  },
  {
    "id": "nelson_da_conceicao_231",
    "nome": "Nélson da Conceição",
    "posicao": "GOL",
    "overall": 88,
    "raridade": "Lenda",
    "era": "1920"
  },
  {
    "id": "d_alessandro_232",
    "nome": "D'Alessandro",
    "posicao": "ATA",
    "overall": 79,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "nena_233",
    "nome": "Nena",
    "posicao": "ATA",
    "overall": 80,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "brilhante_234",
    "nome": "Brilhante",
    "posicao": "ZAG",
    "overall": 86,
    "raridade": "Craque",
    "era": "1920/1930"
  },
  {
    "id": "italia_235",
    "nome": "Itália",
    "posicao": "ZAG",
    "overall": 86,
    "raridade": "Craque",
    "era": "1920/1930"
  },
  {
    "id": "gradim_236",
    "nome": "Gradim",
    "posicao": "MEI",
    "overall": 81,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "luiz_carvalho_237",
    "nome": "Luiz Carvalho",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "ladislau_da_guia_238",
    "nome": "Ladislau da Guia",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "gandula_239",
    "nome": "Gandula",
    "posicao": "MEI",
    "overall": 79,
    "raridade": "Comum",
    "era": "1930"
  },
  {
    "id": "alfredo_ii_240",
    "nome": "Alfredo II",
    "posicao": "LAT/VOL/MC",
    "overall": 88,
    "raridade": "Comum",
    "era": "1940"
  },
  {
    "id": "djalma_241",
    "nome": "Djalma",
    "posicao": "ATA",
    "overall": 85,
    "raridade": "Craque",
    "era": "1940"
  },
  {
    "id": "cordeiro_242",
    "nome": "Cordeiro",
    "posicao": "ATA",
    "overall": 77,
    "raridade": "Comum",
    "era": "1940"
  },
  {
    "id": "dino_243",
    "nome": "Dino",
    "posicao": "VOL",
    "overall": 80,
    "raridade": "Comum",
    "era": "1940"
  },
  {
    "id": "berascochea_244",
    "nome": "Berascochea",
    "posicao": "VOL/MC",
    "overall": 86,
    "raridade": "Craque",
    "era": "1940"
  },
  {
    "id": "argemiro_245",
    "nome": "Argemiro",
    "posicao": "VOL",
    "overall": 83,
    "raridade": "Xodó",
    "era": "1930/1940"
  },
  {
    "id": "dimas_246",
    "nome": "Dimas",
    "posicao": "ATA",
    "overall": 84,
    "raridade": "Comum",
    "era": "1940"
  },
  {
    "id": "nestor_247",
    "nome": "Nestor",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "1940"
  },
  {
    "id": "wilson_248",
    "nome": "Wilson",
    "posicao": "ZAG",
    "overall": 84,
    "raridade": "Xodó",
    "era": "1940"
  },
  {
    "id": "tesourinha_249",
    "nome": "Tesourinha",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1950"
  },
  {
    "id": "dejayr_250",
    "nome": "Dejayr",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Xodó",
    "era": "1950"
  },
  {
    "id": "almir_pernambuquinho_251",
    "nome": "Almir Pernambuquinho",
    "posicao": "MEI",
    "overall": 85,
    "raridade": "Craque",
    "era": "1950/1960"
  },
  {
    "id": "parodi_252",
    "nome": "Parodi",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "1950"
  },
  {
    "id": "laerte_253",
    "nome": "Laerte",
    "posicao": "VOL/MC",
    "overall": 83,
    "raridade": "Comum",
    "era": "1950"
  },
  {
    "id": "valter_marciano_254",
    "nome": "Válter Marciano",
    "posicao": "MEI",
    "overall": 87,
    "raridade": "Craque",
    "era": "1950"
  },
  {
    "id": "coronel_255",
    "nome": "Coronel",
    "posicao": "LAT",
    "overall": 87,
    "raridade": "Craque",
    "era": "1950"
  },
  {
    "id": "carlos_alberto_256",
    "nome": "Carlos Alberto",
    "posicao": "GOL",
    "overall": 82,
    "raridade": "Comum",
    "era": "1950"
  },
  {
    "id": "delem_257",
    "nome": "Delém",
    "posicao": "MEI",
    "overall": 84,
    "raridade": "Xodó",
    "era": "1950"
  },
  {
    "id": "ita_258",
    "nome": "Ita",
    "posicao": "GOL",
    "overall": 80,
    "raridade": "Comum",
    "era": "1960"
  },
  {
    "id": "lorico_259",
    "nome": "Lorico",
    "posicao": "VOL",
    "overall": 85,
    "raridade": "Comum",
    "era": "1960"
  },
  {
    "id": "saulzinho_260",
    "nome": "Saulzinho",
    "posicao": "ATA",
    "overall": 84,
    "raridade": "Comum",
    "era": "1960"
  },
  {
    "id": "barbosinha_261",
    "nome": "Barbosinha",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Comum",
    "era": "1960"
  },
  {
    "id": "joel_262",
    "nome": "Joel",
    "posicao": "LAT",
    "overall": 79,
    "raridade": "Comum",
    "era": "1960"
  },
  {
    "id": "danilo_meneses_263",
    "nome": "Danilo Meneses",
    "posicao": "MC/MEI/ATA",
    "overall": 79,
    "raridade": "Comum",
    "era": "1960"
  },
  {
    "id": "valfrido_264",
    "nome": "Valfrido",
    "posicao": "ATA",
    "overall": 84,
    "raridade": "Xodó",
    "era": "1960/1970"
  },
  {
    "id": "tostao_265",
    "nome": "Tostão",
    "posicao": "ATA",
    "overall": 87,
    "raridade": "Craque",
    "era": "1970"
  },
  {
    "id": "geraldo_266",
    "nome": "Geraldo",
    "posicao": "ZAG",
    "overall": 84,
    "raridade": "Xodó",
    "era": "1970"
  },
  {
    "id": "pintinho_267",
    "nome": "Pintinho",
    "posicao": "VOL",
    "overall": 84,
    "raridade": "Xodó",
    "era": "1970"
  },
  {
    "id": "dudu_268",
    "nome": "Dudu",
    "posicao": "VOL/MC",
    "overall": 82,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "pedrinho_gaucho_269",
    "nome": "Pedrinho Gaúcho",
    "posicao": "ATA",
    "overall": 82,
    "raridade": "Comum",
    "era": "1980"
  },
  {
    "id": "ze_sergio_270",
    "nome": "Zé Sérgio",
    "posicao": "ATA",
    "overall": 78,
    "raridade": "Comum",
    "era": "1980"
  }
];
