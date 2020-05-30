import {hi, te, gu, ta, bn} from 'date-fns/locale/';

export const STATE_ROW_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deaths',
];
export const DISTRICT_ROW_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deceased',
];

export const MAP_TYPES = {
  COUNTRY: 'country',
  STATE: 'state',
  DISTRICT: 'district',
};

export const MAP_STATISTICS = {
  TOTAL: 0,
  PER_MILLION: 1,
  ZONE: 2,
  HOTSPOTS: 3,
};

export const MAP_VIEWS = {
  STATES: 0,
  DISTRICTS: 1,
};


// export const MAPS_DIR =
//   process.env.NODE_ENV === 'production' ?  '/mini_maps' : '/maps';


export const MAP_META = {
  India: {
    geoDataFile: `/maps/india.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectStates: 'india-states',
    graphObjectDistricts: 'india-districts-2019-734',
  },
  'Andaman and Nicobar Islands': {
    geoDataFile: `maps/andamannicobarislands.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'andamannicobarislands_district',
  },
  'Arunachal Pradesh': {
    geoDataFile: `maps/arunachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'arunachalpradesh_district',
  },
  'Andhra Pradesh': {
    geoDataFile: `maps/andhrapradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'andhrapradesh_district',
  },
  Assam: {
    geoDataFile: `maps/assam.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'assam_district',
  },
  Bihar: {
    name: 'Bihar',
    geoDataFile: `maps/bihar.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'bihar_district',
  },
  Chandigarh: {
    name: 'Chandigarh',
    geoDataFile: `maps/chandigarh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'chandigarh_district',
  },
  Chhattisgarh: {
    name: 'Chhattisgarh',
    geoDataFile: `maps/chhattisgarh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'chhattisgarh_district',
  },
  'Dadra and Nagar Haveli and Daman and Diu': {
    geoDataFile: `maps/dnh-and-dd.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'dnh-and-dd',
  },
  Delhi: {
    geoDataFile: `maps/delhi.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'delhi_district',
  },
  Karnataka: {
    geoDataFile: `maps/karnataka.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'karnataka_district',
  },
  Kerala: {
    geoDataFile: `maps/kerala.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'kerala_district',
  },
  Goa: {
    geoDataFile: `maps/goa.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'goa_district',
  },
  Gujarat: {
    geoDataFile: `maps/gujarat.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'gujarat_district',
  },
  Haryana: {
    geoDataFile: `maps/haryana.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'haryana_district',
  },
  'Himachal Pradesh': {
    geoDataFile: `maps/himachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'himachalpradesh_district',
  },
  'Jammu and Kashmir': {
    geoDataFile: `maps/jammukashmir.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'jammukashmir_district',
  },
  Jharkhand: {
    geoDataFile: `maps/jharkhand.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'jharkhand_district',
  },
  Ladakh: {
    geoDataFile: `maps/ladakh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'ladakh_district',
  },
  Lakshadweep: {
    geoDataFile: `maps/lakshadweep.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'lakshadweep_district',
  },
  'Madhya Pradesh': {
    geoDataFile: `maps/madhyapradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'madhyapradesh_district',
  },
  Maharashtra: {
    geoDataFile: `maps/maharashtra.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'maharashtra_district',
  },
  Manipur: {
    geoDataFile: `maps/manipur.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'manipur_district',
  },
  Meghalaya: {
    geoDataFile: `maps/meghalaya.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'meghalaya_district',
  },
  Mizoram: {
    geoDataFile: `maps/mizoram.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'mizoram_district',
  },
  Nagaland: {
    geoDataFile: `maps/nagaland.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'nagaland_district',
  },
  Odisha: {
    geoDataFile: `maps/odisha.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'odisha_district',
  },
  Puducherry: {
    geoDataFile: `maps/puducherry.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'puducherry_district',
  },
  Punjab: {
    geoDataFile: `maps/punjab.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'punjab_district',
  },
  Rajasthan: {
    geoDataFile: `maps/rajasthan.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'rajasthan_district',
  },
  Sikkim: {
    geoDataFile: `maps/sikkim.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'sikkim_district',
  },
  'Tamil Nadu': {
    geoDataFile: `maps/tamilnadu.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'tamilnadu_district',
  },
  Telangana: {
    geoDataFile: `maps/telangana.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'telangana_district',
  },
  Tripura: {
    geoDataFile: `maps/tripura.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'tripura_district',
  },
  Uttarakhand: {
    geoDataFile: `maps/uttarakhand.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'uttarakhand_district',
  },
  'Uttar Pradesh': {
    geoDataFile: `maps/uttarpradesh.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'uttarpradesh_district',
  },

  'West Bengal': {
    geoDataFile: `maps/westbengal.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectDistricts: 'westbengal_district',
  },
};

export const STATE_CODES = {
  AP: 'Andhra Pradesh',
  AR: 'Arunachal Pradesh',
  AS: 'Assam',
  BR: 'Bihar',
  CT: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'Himachal Pradesh',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  UT: 'Uttarakhand',
  UP: 'Uttar Pradesh',
  WB: 'West Bengal',
  AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh',
  DN: 'Dadra and Nagar Haveli and Daman and Diu',
  DL: 'Delhi',
  JK: 'Jammu and Kashmir',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  PY: 'Puducherry',
};

const stateCodes = [];
const reverseStateCodes = {};
Object.keys(STATE_CODES).map((key, index) => {
  reverseStateCodes[STATE_CODES[key]] = key;
  stateCodes.push({code: key, name: STATE_CODES[key]});
  return null;
});
export const STATE_CODES_REVERSE = reverseStateCodes;
export const STATE_CODES_ARRAY = stateCodes;

// Source: Projected Populations (2019)
// National Commission on Population, "Population Projections for India and
// States (2011-2036)", Table-8 (p43), November 2019
// https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf
export const STATE_POPULATIONS = {
  'Andaman and Nicobar Islands': 397000,
  'Andhra Pradesh': 52221000,
  'Arunachal Pradesh': 1504000,
  Assam: 34293000,
  Bihar: 119520000,
  Chandigarh: 1179000,
  Chhattisgarh: 28724000,
  'Dadra and Nagar Haveli and Daman and Diu': 959000,
  Delhi: 19814000,
  Goa: 1540000,
  Gujarat: 67936000,
  Haryana: 28672000,
  'Himachal Pradesh': 7300000,
  'Jammu and Kashmir': 13203000,
  Jharkhand: 37403000,
  Karnataka: 65798000,
  Kerala: 35125000,
  Ladakh: 293000,
  Lakshadweep: 68000,
  'Madhya Pradesh': 82232000,
  Maharashtra: 122153000,
  Manipur: 3103000,
  Meghalaya: 3224000,
  Mizoram: 1192000,
  Nagaland: 2150000,
  Odisha: 43671000,
  Puducherry: 1504000,
  Punjab: 29859000,
  Rajasthan: 77264000,
  Sikkim: 664000,
  'Tamil Nadu': 75695000,
  Telangana: 37220000,
  Tripura: 3992000,
  'Uttar Pradesh': 224979000,
  Uttarakhand: 11141000,
  'West Bengal': 96906000,
  Total: 1332900000,
};

export const RAW_DATA_PARTITIONS = {
  v1: {
    start: new Date(2020, 0, 1),
    end: new Date(2020, 3, 19),
  },
  v2: {
    start: new Date(2020, 3, 20),
    end: new Date(2020, 3, 26),
  },
  v3: {
    start: new Date(2020, 3, 27),
    end: new Date(2020, 4, 9),
  },
  v4: {
    start: new Date(2020, 4, 10),
    end: new Date(),
  },
};

export const LOCALE_SHORTHANDS = {
  english: null,
  hindi: hi,
  telugu: te,
  kannada: null,
  gujarati: gu,
  marathi: null,
  tamil: ta,
  bengali: bn,
  punjabi: null,
  malayalam: null,
  odiya: null,
};
