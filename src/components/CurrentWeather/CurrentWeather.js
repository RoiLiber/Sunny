import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { setTampMetric, setDarkMode } from '../../actions/mainActions';
import './style.scss';

export default function CurrentWeather() {
    const dispatch = useDispatch();
    const city = useSelector(state => state.mainReducer.city);
    const cityDetails = useSelector(state => state.mainReducer.cityDetails);
    const metric = useSelector(state => state.mainReducer.metric);
    const darkMode = useSelector(state => state.mainReducer.darkMode);
    const { label: cityName, country } = city;
    const { currWeatherInfo } = cityDetails || {};
    const { tempC, tempF, description, img } = currWeatherInfo || {};
    const degree = metric ? tempC : tempF;

    return (
        <div className={`current_weather_wrapper ${!darkMode ? 'current_weather_light_mode' : ''}`}>
            <div className={'cityName'}>{`${cityName}, ${country}`}</div>
            <div className={'description'}>{description}</div>
            <div className={'temp_icon_wrapper'}>
                {img && <img
                    src={img}
                    alt="weather icon"
                    className={'img'}
                />}
                <div className={'degree'}>
                    {Math.round(degree)}
                    &#176;
                    <span className={'degree_symbol'}>{metric ? 'C' : 'F'}</span>
                </div>
            </div>
            <div className={'set_tamp_type'}>
                <ButtonGroup disableElevation variant="contained">
                    <Button
                        className={`${metric ? 'active' : ''}`}
                        onClick={() => dispatch(setTampMetric(true))}
                    >
                        Celsius
                    </Button>
                    <Button
                        className={`${!metric ? 'active' : ''}`}
                        onClick={() => dispatch(setTampMetric(false))}
                    >
                        Fahrenheit
                    </Button>
                </ButtonGroup>
            </div>
            <div className={'set_dark_mode'}>
                <ButtonGroup disableElevation variant="contained">
                    <Button
                        className={`${darkMode ? 'active' : ''}`}
                        onClick={() => dispatch(setDarkMode(true))}
                    >
                        Dark
                    </Button>
                    <Button
                        className={`${!darkMode ? 'active' : ''}`}
                        onClick={() => dispatch(setDarkMode(false))}
                    >
                        Light
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
