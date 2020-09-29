const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://dataservice.accuweather.com';
const weatherUrl = `${cors}${url}`;
const imageUrl = 'https://developer.accuweather.com/sites/default/files';
const DEFAULT_LOCATION = { label: 'Tel Aviv', key: '215854', country: 'Israel' };
const ERROR_MSG = `Sorry, unable to fetch the weather, maybe it's to cloudy` ;
const SEARCH_ERROR_MSG = `Sorry, unable to fetch the cities list, maybe it's to cloudy` ;

const ROUTES = {
  home: '/home',
  favorites: '/favorites',
};

const API_KEY = process.env.REACT_APP_API_KEY || '7va3PZ339tY4Gph5Y6kHRACPcRdfbdiT';

// the next API_KEY is for when we past the 50 API call limit for this app
// const oneMoreApiKey = '7va3PZ339tY4Gph5Y6kHRACPcRdfbdiT';

export {
  weatherUrl,
  imageUrl,
  DEFAULT_LOCATION,
  ROUTES,
  ERROR_MSG,
  SEARCH_ERROR_MSG,
  API_KEY
}


