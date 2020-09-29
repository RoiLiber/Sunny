import React, { Fragment } from 'react';
import RainEffect from "../RainEffect";
import LightningEffect from "../Lightning";
import './style.scss';

export default function WeatherIcon(props) {

    const { weatherDescription, darkMode } = props;
    const lightMode = !darkMode ? 'weather_icon_light_mode' : '';

    switch (weatherDescription) {
        case 'Hazy Sunshine':
        case 'Intermittent Clouds':
        case 'Cloudy':
        case 'Mostly cloudy':
        case 'Dreary (Overcast)':
        case 'Flurries':
        case 'Mostly Cloudy w/ Flurries':
        case 'Partly Sunny w/ Flurries' :
        case 'Windy':
        case 'Fog': {

            return <div className={`weather_icon cloudy ${lightMode}`}>
                <div className="cloud"/>
                <div className="cloud"/>
            </div>
        }
        case 'Showers':
        case 'Rain':
        case 'Sleet':
        case 'Freezing Rain':
        case 'Partly Cloudy w/ Showers': {
            return <Fragment>
                {RainEffect(2)}
                <div className={`weather_icon rainy ${lightMode}`}>
                    <div className="cloud"/>
                    <div className="rain"/>
                </div>
            </Fragment>
        }
        case 'Mostly Cloudy w/ Showers':
        case 'Partly Sunny w/ Showers': {
            return <Fragment>
                {RainEffect(1)}
                <div className={`weather_icon sun-shower ${lightMode}`}>
                    <div className="cloud"/>
                    <div className="sun">
                        <div className="rays"/>
                    </div>
                    <div className="rain"/>
                </div>
            </Fragment>
        }
        case 'T-Storms':
        case 'Thunderstorm':
        case 'Mostly Cloudy w/ T-Storms':
        case 'Partly Sunny w/ T-Storms': {
            return <Fragment>
                {RainEffect(3)}
                {LightningEffect()}
                <div className={`weather_icon thunder-storm ${lightMode}`}>
                    <div className="cloud"/>
                    <div className="lightning">
                        <div className="bolt"/>
                        <div className="bolt"/>
                    </div>
                </div>
            </Fragment>
        }
        case 'Ice':
        case 'Snow':
        case 'Rain and Snow':
        case 'Mostly Cloudy w/ Snow': {
            return <div className={`weather_icon flurries ${lightMode}`}>
                <div className="cloud"/>
                <div className="snow">
                    <div className="flake"/>
                    <div className="flake"/>
                </div>
            </div>
        }
        default: {
            return <div className={`weather_icon sunny ${lightMode}`}>
                <div className="sun">
                    <div className="rays"/>
                </div>
            </div>
        }
    }
}
