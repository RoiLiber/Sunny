import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { setTampMetric, setDarkMode } from '../../actions/mainActions';
import './style.scss';

function CurrentWeather(props) {
    const { city: { label: cityName, country }, cityDetails, metric, darkMode } = props;
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
                        onClick={() => props.setTampMetric(true)}
                    >
                        Celsius
                    </Button>
                    <Button
                        className={`${!metric ? 'active' : ''}`}
                        onClick={() => props.setTampMetric(false)}
                    >
                        Fahrenheit
                    </Button>
                </ButtonGroup>
            </div>
            <div className={'set_dark_mode'}>
                <ButtonGroup disableElevation variant="contained">
                    <Button
                        className={`${darkMode ? 'active' : ''}`}
                        onClick={() => props.setDarkMode(true)}
                    >
                        Dark
                    </Button>
                    <Button
                        className={`${!darkMode ? 'active' : ''}`}
                        onClick={() => props.setDarkMode(false)}
                    >
                        Light
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    city: state.mainReducer.city,
    cityDetails: state.mainReducer.cityDetails,
    metric: state.mainReducer.metric,
    darkMode: state.mainReducer.darkMode
});

export default connect(mapStateToProps, { setTampMetric, setDarkMode })(CurrentWeather)
