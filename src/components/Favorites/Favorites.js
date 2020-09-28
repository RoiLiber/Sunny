import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { CircularProgress, Button } from '@material-ui/core';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { setCity, removeFavoriteCity } from '../../actions/mainActions';
import { fetchCityWeather } from '../../api';
import { ROUTES, ERROR_MSG } from '../../consts';
import { Fade } from "react-reveal";
import RainEffect from '../UI/RainEffect';
import LightningEffect from '../UI/Lightning';
import './style.scss';

function Favorites(props) {
    const { favoriteCities = [], metric, darkMode } = props;
    const [isLoader, setIsLoader] = useState(true);
    const [isError, setIsError] = useState(false);
    const [favCitiesInfo, setFavCitiesInfo] = useState({});

    function handleCityClick(city) {
        props.setCity(city);
        props.history.push(ROUTES.home)
    }

    function getCityWeather() {
        (async () => {
            try {
                setIsLoader(true);
                const cities = await Promise.all(favoriteCities.map((city) => fetchCityWeather(city.key, metric)));
                const citiesInfo = cities.reduce((acc, info, i) => ({
                    ...acc,
                    [favoriteCities[i].key]: info,
                }), {});
                if (favoriteCities.length && !Object.keys(citiesInfo).length) {
                    throw new Error()
                }
                setFavCitiesInfo(citiesInfo);
                setIsError(false)
            }
            catch (e) {
                setIsError(true)
            }
            finally {
                setIsLoader(false)
            }
        })()
    }

    useEffect(getCityWeather, []);

    function renderNoFavorites() {
        return (
            <div className={'no_favorites_container'}>
                <span>
                    There is no favorites cities saved yet, go to the home page search a cite and click her
                </span>
                <FavoriteBorderIcon className={`favorite_icon`}/>
            </div>
        )
    }

    function renderCities() {
        if (!favoriteCities.length) {
            return renderNoFavorites()
        }

        return favoriteCities.map((city, index) => {
            const tamp = metric ? favCitiesInfo[city.key].tempC : favCitiesInfo[city.key].tempF;

            return <Fade cascade delay={200 * index} key={city.key}>
                <div key={city.key} className={`fav_city_container`}>
                    <div
                        className={'city_details'}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleCityClick(city)}
                    >
                        <div className={'city_name'}>
                            {city.label}
                        </div>
                        <div className={'description'}>
                            {favCitiesInfo[city.key].description}
                        </div>
                        <div className={'temp'}>
                            {Math.round(tamp)}
                            &#176;
                            <span className={'tamp_symbol'}>{metric ? 'C' : 'F'}</span>
                        </div>
                        {favCitiesInfo[city.key].img && (
                            <img
                                src={favCitiesInfo[city.key].img}
                                alt="weather icon"
                                className={'img'}
                            />
                        )}
                    </div>
                    <DeleteIcon
                        className={'remove_icon'}
                        onClick={() => {
                            props.removeFavoriteCity(city.key)
                        }}
                    />
                </div>
            </Fade>
        })
    }

    function renderFavBody() {
        if (isLoader) {
            return <CircularProgress className={'loader'} />
        }
        if (isError) {
            return (
                <div className={'error_wrapper'}>
                    <div className={'storm'}>
                        {RainEffect(3)}
                        {LightningEffect()}
                    </div>
                    <div className={'error_msg'}>{ERROR_MSG}</div>
                    <Button
                        variant="text"
                        onClick={getCityWeather}
                    >
                        Try again
                    </Button>
                </div>
            )
        }
        return renderCities()
    }

    return (
        <div className={`favorites_wrapper ${!darkMode ? 'favorites_light_mode' : ''}`}>
            {renderFavBody()}
        </div>
    )
}

const mapStateToProps = state => ({
    favoriteCities: state.mainReducer.favoriteCities,
    cityDetails: state.mainReducer.cityDetails,
    metric: state.mainReducer.metric,
    darkMode: state.mainReducer.darkMode
});

export default connect(mapStateToProps, { setCity, removeFavoriteCity })(Favorites)

