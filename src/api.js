import _get from 'lodash/get';
import store from './store';
import { setCityDetails, setRequestError } from './actions/mainActions';
import { weatherUrl, imageUrl, API_KEY } from './consts';

async function fetchCityWeather(key) {
  const response = await fetch(`${weatherUrl}/currentconditions/v1/${key}?apikey=${API_KEY}`);
  const currentWeatherDetails = await response.json();
  const { WeatherText, Temperature, WeatherIcon } = currentWeatherDetails[0] || [];
  const weatherImage = WeatherIcon && `${imageUrl}/${WeatherIcon.toString().padStart(2, '0')}-s.png`;

  return {
    tempC: _get(Temperature, ['Metric', 'Value'], ''),
    tempF: _get(Temperature, ['Imperial', 'Value'], ''),
    description: WeatherText,
    img: weatherImage,
  }
}

async function updateCurrentCityWeather(key) {
  const currWeatherInfo = await fetchCityWeather(key);

  store.dispatch(setCityDetails('currWeatherInfo', currWeatherInfo))
}

async function fetchAutoCompleteOptions(value) {
  const response = await fetch(`${weatherUrl}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`);
  const cities = await response.json();

  return cities
}

async function fetchForecastDetails(key, metricBool) {
  const response = await fetch(`${weatherUrl}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=${metricBool}`);
  const forecast = await response.json();
  const { DailyForecasts } = forecast || {};

  return DailyForecasts.map((day) => ({
    date: day.Date,
    temp: {
      min: _get(day.Temperature, ['Minimum', 'Value'], ''),
      max: _get(day.Temperature, ['Maximum', 'Value'], ''),
    },
    dayTemp: {
      icon: _get(day.Day, ['Icon'], ''),
      text: _get(day.Day, ['IconPhrase'], ''),
    },
  }))
}

async function updateForecast(key, metricBool) {
  const forecast = await fetchForecastDetails(key, metricBool);
  store.dispatch(setCityDetails('forecast', forecast))
}

export {
  fetchCityWeather,
  updateCurrentCityWeather,
  fetchForecastDetails,
  fetchAutoCompleteOptions,
  updateForecast,
}
