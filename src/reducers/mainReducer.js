import { handleActions } from 'redux-actions';
import types from '../actions/actionTypes';
import { DEFAULT_LOCATION } from '../consts';
import Immutable from 'seamless-immutable';

const favoritesCity = localStorage.getItem('favorites');

const initialState = Immutable({
    city: DEFAULT_LOCATION || {},
    cityDetails: {
        currWeatherInfo: {},
        forecast: [],
    },
    favoriteCities: JSON.parse(favoritesCity) || [],
    metric: true,
    darkMode: true,
    requestErrorMsg: ''
});

export default handleActions({
    [types.setCity]: (state, { value }) => state.setIn(['city'], value),
    [types.setCityDetails]: (state, { key, value }) => state.setIn(['cityDetails', key], value),
    [types.updateFavorites]: (state, { favorites }) => state.set('favoriteCities', favorites),
    [types.tampToggle]: (state, { bool }) => state.setIn(['metric'], bool),
    [types.setDarkMode]: (state, { bool }) => state.setIn(['darkMode'], bool),
    [types.requestError]: (state, { errMsg }) => state.setIn(['requestErrorMsg'], errMsg)
}, initialState)
