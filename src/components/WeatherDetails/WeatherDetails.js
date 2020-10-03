import React from 'react';
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { imageUrl } from '../../consts';
import './style.scss';

export default function WeatherDetails(props) {
    const { dayDetails, currDay, index } = props;
    const metric = useSelector(state => state.mainReducer.metric);
    const darkMode = useSelector(state => state.mainReducer.darkMode);
    const { temp, dayTemp, date } = dayDetails;
    const { min: minTemp, max: maxTemp } = temp;

    return (
        <Fade cascade delay={150 * index}>
            <div className={`card_wrapper ${!darkMode ? 'card_light_mode' : ''}`}>
                <div className={`day_name ${currDay ? 'today' : ''}`}>
                    {new Date(date).toString().split(' ')[0]}
                </div>
                <div className={'weather_img'}>
                    <img
                        src={`${imageUrl}/${dayTemp.icon.toString().padStart(2, '0')}-s.png`}
                        alt="daily weather icon"
                        className={'icon'}
                    />
                </div>
                <div className={'day_tamp'}>
                    <span className={'low_tamp_symbol'}>L:</span>
                    {Math.round(minTemp)}
                    &#176;
                    <span className={'tamp_symbol'}>{metric ? 'C' : 'F'}</span>
                    <span className={'high_tamp_symbol'}>H:</span>
                    {Math.round(maxTemp)}
                    &#176;
                    <span className={'tamp_symbol'}>{metric ? 'C' : 'F'}</span>
                </div>
            </div>
        </Fade>
    )
}

