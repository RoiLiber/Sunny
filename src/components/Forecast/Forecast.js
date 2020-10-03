import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import WeatherDetails from '../WeatherDetails';
import './style.scss';

export default function Forecast() {
    const cityDetails = useSelector(state => state.mainReducer.cityDetails);
    const darkMode = useSelector(state => state.mainReducer.darkMode);

  return (
      <div className={`forecast_wrapper ${!darkMode ? 'forecast_light_mode' : ''}`}>
          <div className={'cards'}>
              {cityDetails.forecast.map((item, i) => (
                  <WeatherDetails dayDetails={item} key={uuidv4()} currDay={!i} index={i}/>
              ))}
          </div>
      </div>
  )
}
