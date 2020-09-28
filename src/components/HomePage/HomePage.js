import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { CircularProgress, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { setCityDetails, setFavoriteCities, removeFavoriteCity } from '../../actions/mainActions';
import { updateCurrentCityWeather, updateForecast, fetchAutoCompleteOptions } from '../../api';
import { ERROR_MSG } from '../../consts';
import AutoComplete from '../AutoComplete';
import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';
import WeatherIcon from '../UI/WeatherIcons';
import RainEffect from '../UI/RainEffect';
import LightningEffect from '../UI/Lightning';
import './style.scss';

function HomePage(props) {
    const { city: { key = '', label }, favoriteCities, metric, darkMode } = props;
    const [isLoader, setIsLoader] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoader(true);
                await updateForecast(key, metric);
                setIsError(false)
            }
            catch (e) {
                setIsError(true)
            }
            finally {
                setIsLoader(false)
            }
        })()
    }, [metric, key]);

    function getCityWeather() {

        if (!key) return;
        (async () => {
            try {
                setIsLoader(true);
                await fetchAutoCompleteOptions(label);
                await updateCurrentCityWeather(key);
                await updateForecast(key, metric);
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

    useEffect(getCityWeather, [key]);

    function renderWeatherBody() {
        if (isLoader) {
            return <div className={'loader'}>
                <CircularProgress/>
            </div>
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
        return [
            <CurrentWeather key='currentWeather'/>,
            <Forecast key='forecast'/>,
        ]
    }

    function renderFavoriteIcon() {
        const isCityInFav = !!favoriteCities.find(city => city.key === props.city.key);

        return isError ? null
            : isCityInFav
                ? <Favorite
                    className={`favorite_icon favorite`}
                    onClick={() => {
                        if (!isCityInFav) {
                            props.setFavoriteCities(props.city)
                        }
                        else {
                            props.removeFavoriteCity(key)
                        }
                    }}
                />
                : <FavoriteBorderIcon
                    className={`favorite_icon`}
                    onClick={() => {
                        if (!isCityInFav) {
                            props.setFavoriteCities(props.city)
                        }
                        else {
                            props.removeFavoriteCity(key)
                        }
                    }}
                />
    }

    function weatherIcons(weatherText) {
        switch (weatherText) {
            case 'Hazy Sunshine':
            case 'Intermittent Clouds':
            case 'Cloudy':
            case 'Dreary (Overcast)':
            case 'Flurries':
            case 'Mostly Cloudy w/ Flurries':
            case 'Partly Sunny w/ Flurries' :
            case 'Mostly Cloudy':
            case 'Windy':
            case 'Fog': {
                return WeatherIcon.cloudy()
            }
            case 'Showers':
            case 'Rain':
            case 'Sleet':
            case 'Freezing Rain':
            case 'Partly Cloudy w/ Showers': {
                return <Fragment>
                    {RainEffect(2)}
                    {WeatherIcon.rainy()}
                </Fragment>
            }
            case 'Mostly Cloudy w/ Showers':
            case 'Partly Sunny w/ Showers': {
                return <Fragment>
                    {RainEffect(1)}
                    {WeatherIcon.sunShower()}
                </Fragment>
            }
            case 'T-Storms':
            case 'Mostly Cloudy w/ T-Storms':
            case 'Partly Sunny w/ T-Storms': {
                return <Fragment>
                    {RainEffect(3)}
                    {LightningEffect()}
                    {WeatherIcon.thunderStorm()}
                </Fragment>
            }
            case 'Ice':
            case 'Snow':
            case 'Rain and Snow':
            case 'Mostly Cloudy w/ Snow': {
                return WeatherIcon.flurries()
            }
            default: {
                return WeatherIcon.sunny()
            }
        }
    }
    const weatherDescription = props.cityDetails.currWeatherInfo.description;

    return (
        <div className={`home_page ${!darkMode ? 'home_page_light_mode' : ''}`}>
            <AutoComplete/>
            {renderFavoriteIcon()}
            <div className={`city_weather_wrapper`}>
                {renderWeatherBody()}
                {!isError && !isLoader && weatherIcons(weatherDescription)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    city: state.mainReducer.city,
    cityDetails: state.mainReducer.cityDetails,
    favoriteCities: state.mainReducer.favoriteCities,
    metric: state.mainReducer.metric,
    darkMode: state.mainReducer.darkMode,
});

export default connect(mapStateToProps, { setCityDetails, setFavoriteCities, removeFavoriteCity })(HomePage)
