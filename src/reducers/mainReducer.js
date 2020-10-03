import { handleActions } from 'redux-actions';
import types from '../actions/actionTypes';
import Immutable from 'seamless-immutable';

const favoritesCity = localStorage.getItem('favorites');
const metricPreferences = localStorage.getItem('metricPreferences');
const darkModePreferences = localStorage.getItem('darkModePreferences');
const geoLocationApproved = localStorage.getItem('geoLocationApproved');

const initialState = Immutable({
    city: { },
    cityDetails: {
        currWeatherInfo: {},
        forecast: [],
    },
    favoriteCities: JSON.parse(favoritesCity) || [],
    metric: JSON.parse(metricPreferences) === null ? true : JSON.parse(metricPreferences),
    darkMode: JSON.parse(darkModePreferences) === null ? true : JSON.parse(darkModePreferences),
    geoLocation: JSON.parse(geoLocationApproved) || false,
    apiError: ''
});

export default handleActions({
    [types.setCity]: (state, { value }) => state.setIn(['city'], value),
    [types.setCityDetails]: (state, { key, value }) => state.setIn(['cityDetails', key], value),
    [types.updateFavorites]: (state, { favorites }) => state.set('favoriteCities', favorites),
    [types.tampToggle]: (state, { bool }) => state.setIn(['metric'], bool),
    [types.setDarkMode]: (state, { bool }) => state.setIn(['darkMode'], bool),
    [types.setGeoLocationApproval]: (state, { bool }) => state.setIn(['geoLocation'], bool),
    [types.setError]: (state, { err }) => state.setIn(['apiError'], err),
}, initialState)
