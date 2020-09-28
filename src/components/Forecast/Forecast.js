import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import WeatherDetails from '../WeatherDetails';
import './style.scss';

function Forecast(props) {
  const { cityDetails } = props;

  return (
      <div className={'forecast_wrapper'}>
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
});

export default connect(mapStateToProps)(Forecast)
