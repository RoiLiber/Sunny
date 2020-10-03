const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://dataservice.accuweather.com';
const geoLocationUrl = 'http://api.ipstack.com';
const weatherUrl = `${cors}${url}`;
const geoUrl = `${cors}${geoLocationUrl}`;
const imageUrl = 'https://developer.accuweather.com/sites/default/files';
const DEFAULT_LOCATION = { label: 'Tel Aviv', key: '215854', country: 'Israel' };
const ERROR_MSG = `Sorry, unable to fetch the weather, maybe it's too cloudy` ;
const SEARCH_ERROR_MSG = `Sorry, unable to fetch the cities list, maybe it's to cloudy` ;
const NO_FAV_CITIES_SAVED = 'There are no favorite cities saved yet, go to the home page, ' +
    'search for a city and click the heart to add it to your favorites list';

const ROUTES = {
  home: '/home',
  favorites: '/favorites',
};

const API_GEOLOCATION_KEY = process.env.REACT_APP_API_KEY || '07a6835d0ab442a7ebf372dd744b19ab';
const API_KEY = process.env.REACT_APP_API_KEY || 'n1xIWRaY5wORZiI3PWXUX4thGRMulDNG';

export {
  weatherUrl,
  geoUrl,
  imageUrl,
  DEFAULT_LOCATION,
  ROUTES,
  ERROR_MSG,
  NO_FAV_CITIES_SAVED,
  SEARCH_ERROR_MSG,
  API_KEY,
  API_GEOLOCATION_KEY
}


