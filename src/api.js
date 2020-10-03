import store from './store';
import { setCityDetails, setCity } from './actions/mainActions';
import { weatherUrl, geoLocationUrl, imageUrl, API_KEY, API_GEOLOCATION_KEY } from './consts';
import { get, lowerCase } from 'lodash';

async function fetchCityWeather(key) {
  const response = await fetch(`${weatherUrl}/currentconditions/v1/${key}?apikey=${API_KEY}`);
  const currentWeatherDetails = await response.json();
  const { WeatherText, Temperature, WeatherIcon } = currentWeatherDetails[0] || [];
  const weatherImage = WeatherIcon && `${imageUrl}/${WeatherIcon.toString().padStart(2, '0')}-s.png`;

  return {
    tempC: get(Temperature, ['Metric', 'Value'], ''),
    tempF: get(Temperature, ['Imperial', 'Value'], ''),
    description: WeatherText,
    img: weatherImage,
  }
}

async function updateCurrentCityWeather(key) {
  const currWeatherInfo = await fetchCityWeather(key);

  store.dispatch(setCityDetails('currWeatherInfo', currWeatherInfo))
}

async function geoLocationCity() {
  const response = await fetch(`${geoLocationUrl}/check?access_key=${API_GEOLOCATION_KEY}`);
  const geo = await response.json();
  const { city } = geo || {};

  const cityResult = await fetchAutoCompleteOptions(lowerCase(city));
  const cityObj = await cityResult[0];
  const { LocalizedName, Country, Key } = cityObj || {};
  const country = Country.LocalizedName;
  const cityConfig = { label: LocalizedName, key: Key, country: country };

  store.dispatch(setCity(cityConfig))
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
      min: get(day.Temperature, ['Minimum', 'Value'], ''),
      max: get(day.Temperature, ['Maximum', 'Value'], ''),
    },
    dayTemp: {
      icon: get(day.Day, ['Icon'], ''),
      text: get(day.Day, ['IconPhrase'], ''),
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
  geoLocationCity
}
