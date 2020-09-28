import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import WeatherDetails from '../WeatherDetails';
import './style.scss';

function Forecast(props) {
  const { cityDetails, darkMode } = props;

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

const mapStateToProps = state => ({
    cityDetails: state.mainReducer.cityDetails,
    darkMode: state.mainReducer.darkMode,
});

export default connect(mapStateToProps)(Forecast)
