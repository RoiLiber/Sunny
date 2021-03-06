import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { CircularProgress, Button } from '@material-ui/core';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { setCity, removeFavoriteCity } from '../../actions/mainActions';
import { fetchCityWeather } from '../../api';
import { ROUTES, ERROR_MSG, NO_FAV_CITIES_SAVED } from '../../consts';
import { Fade } from "react-reveal";
import RainEffect from '../UI/RainEffect';
import LightningEffect from '../UI/Lightning';
import Pulse from 'react-reveal/Pulse';
import './style.scss';

export default function Favorites(props) {
    const dispatch = useDispatch();
    const favoriteCities = useSelector(state => state.mainReducer.favoriteCities);
    const metric = useSelector(state => state.mainReducer.metric);
    const darkMode = useSelector(state => state.mainReducer.darkMode);
    const [isLoader, setIsLoader] = useState(true);
    const [isError, setIsError] = useState(false);
    const [favCitiesInfo, setFavCitiesInfo] = useState({});

    function handleCityClick(city) {
        dispatch(setCity(city));
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
                <span>{NO_FAV_CITIES_SAVED}</span>
                <Pulse forever duration={750}>
                    <FavoriteBorderIcon className={`favorite_icon`}/>
                </Pulse>

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
                        <div className={'temp'}>
                            {Math.round(tamp)}
                            &#176;
                            <span className={'tamp_symbol'}>{metric ? 'C' : 'F'}</span>
                        </div>
                        <div className={'description'}>
                            {favCitiesInfo[city.key].description}
                        </div>
                    </div>
                    {favCitiesInfo[city.key].img && (
                        <div className={'fav_weather_img'}>
                            <img
                                src={favCitiesInfo[city.key].img}
                                alt="weather icon"
                                className={'img'}
                            />
                        </div>
                    )}
                    <div className={'remove_icon_wrapper'}>
                        <DeleteIcon
                            className={'remove_icon'}
                            onClick={() => {
                                dispatch(removeFavoriteCity(city.key))
                            }}
                        />
                    </div>
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
            {isError && <div className={'storm'}>
                {RainEffect(3)}
                {LightningEffect()}
            </div>}
        </div>
    )
}
