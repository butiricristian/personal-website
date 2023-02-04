export const JUDETE = [
  "TOTAL",
  "ALBA",
  "ARAD",
  "ARGES",
  "BACAU",
  "BIHOR",
  "BISTRITA NASAUD",
  "BOTOSANI",
  "BRAILA",
  "BRASOV",
  "BUCURESTI",
  "BUZAU",
  "CALARASI",
  "CARAS SEVERIN",
  "CLUJ",
  "CONSTANTA",
  "COVASNA",
  "DAMBOVITA",
  "DOLJ",
  "GALATI",
  "GIURGIU",
  "GORJ",
  "HARGHITA",
  "HUNEDOARA",
  "IALOMITA",
  "IASI",
  "ILFOV",
  "MARAMURES",
  "MEHEDINTI",
  "MURES",
  "NEAMT",
  "OLT",
  "PRAHOVA",
  "SALAJ",
  "SATU MARE",
  "SIBIU",
  "SUCEAVA",
  "TELEORMAN",
  "TIMIS",
  "TULCEA",
  "VALCEA",
  "VASLUI",
  "VRANCEA",
];

export const IPOTECI_TYPES = [
  {value: 'true', label: 'active'},
  {value: 'false', label: 'radiated'},
]

export const REQUEST_TYPES = [
  {value: 'altele', label: 'other'},
  {value: 'informare', label: 'information'},
  {value: 'inscriere', label: 'subscription'},
  {value: 'receptie', label: 'reception'},
]

export const PROPERTY_TYPES = [
  {
    label: 'total',
    value: 'Total'
  },
  {
    label: 'individual_units',
    value: 'UnitatiIndividuale'
  },
  {
    label: 'lands',
    options: [
      {value: 'Constructie', label: 'urban_land_building'},
      {value: 'FaraConstructie', label: 'urban_land_without_building'},
      {value: 'Agricol', label: 'outside_the_city_agricultural'},
      {value: 'Neagricol', label: 'outside_the_city_non_agricultural'},
    ]
  },
]