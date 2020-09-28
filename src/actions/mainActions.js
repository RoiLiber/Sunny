import types from "./actionTypes";
import store from '../store';

const setCity = value => ({
    type: types.setCity,
    value
});

const setCityDetails = (key, value) => ({
    type: types.setCityDetails,
    key,
    value
});

const setTampMetric = bool => ({
    type: types.tampToggle,
    bool
});

const setDarkMode = bool => ({
    type: types.setDarkMode,
    bool
});

const setFavoriteCities = value => {
    const { favoriteCities } = store.getState().mainReducer;
    const newFavList = [...favoriteCities, value];

    localStorage.setItem('favorites', JSON.stringify(newFavList));
    return ({
        type: types.updateFavorites,
        favorites: newFavList
    })
};

const removeFavoriteCity = value => {
    const { favoriteCities } = store.getState().mainReducer;
    const newFavList = favoriteCities.filter((city) => city.key !== value);

    localStorage.setItem('favorites', JSON.stringify(newFavList));
    return ({
        type: types.updateFavorites,
        favorites: newFavList
    })
};

export {
    setCity,
    setCityDetails,
    setFavoriteCities,
    removeFavoriteCity,
    setTampMetric,
    setDarkMode,
}
