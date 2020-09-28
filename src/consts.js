const weatherUrl = 'https://dataservice.accuweather.com';
const imageUrl = 'https://developer.accuweather.com/sites/default/files';
const DEFAULT_LOCATION = { label: 'Tel Aviv', key: '215854', country: 'Israel' };
const ERROR_MSG = `Sorry, unable to fetch the weather, maybe it's to cloudy` ;
const SEARCH_ERROR_MSG = `Sorry, unable to fetch the cities list, maybe it's to cloudy` ;

const ROUTES = {
  home: '/',
  favorites: '/favorites',
};

const API_KEY = process.env.REACT_APP_API_KEY || 'saWWFAfScoxhIexu7ayAU90tvkAvcGJz';

export {
  weatherUrl,
  imageUrl,
  DEFAULT_LOCATION,
  ROUTES,
  ERROR_MSG,
  SEARCH_ERROR_MSG,
  API_KEY
}

////// for development purposes only

// one more key for development purposes

// const API_KEY = process.env.REACT_APP_API_KEY || '3585775f387b0d0cba6c5b3dc41b8167';

// one more key for development purposes
// const API_KEY = process.env.REACT_APP_API_KEY || '7va3PZ339tY4Gph5Y6kHRACPcRdfbdiT';

////// API res const for development purposes only

// const testACity = {
//   EpochTime: 1601148360,
//   HasPrecipitation: false,
//   IsDayTime: false,
//   Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
//   LocalObservationDateTime: "2020-09-26T22:26:00+03:00",
//   MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
//   PrecipitationType: null,
//   Temperature: {
//     Imperial: {Value: 80, Unit: "F", UnitType: 18},
//     Metric: {Value: 26.8, Unit: "C", UnitType: 17}
//   },
//   WeatherIcon: 34,
//   WeatherText: "Mostly clear",
// };
// const dailyforecasts = [
//   {
//     Date: "2020-09-26T07:00:00+03:00",
//     Day: {Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false},
//     EpochDate: 1601092800,
//     Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
//     MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
//     Night: {Icon: 33, IconPhrase: "Clear", HasPrecipitation: false},
//     Sources: ["AccuWeather"],
//     Temperature: {
//       Maximum: {Value: 30.1, Unit: "C", UnitType: 17},
//       Minimum: {Value: 23.2, Unit: "C", UnitType: 17}
//     },
//   },
//   {
//     Date: "2020-09-27T07:00:00+03:00",
//     Day: {Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false},
//     EpochDate: 1601179200,
//     Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
//     MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
//     Night: {Icon: 33, IconPhrase: "Clear", HasPrecipitation: false},
//     Sources: ["AccuWeather"],
//     Temperature: {
//       Maximum: {Value: 31.5, Unit: "C", UnitType: 17},
//       Minimum: {Value: 24.8, Unit: "C", UnitType: 17},
//     },
//   },
//   {
//     Date: "2020-09-28T07:00:00+03:00",
//     Day: {Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false},
//     EpochDate: 1601265600,
//     Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
//     MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
//     Night: {Icon: 34, IconPhrase: "Mostly clear", HasPrecipitation: false},
//     Sources: ["AccuWeather"],
//     Temperature: {
//       Maximum: {Value: 33.1, Unit: "C", UnitType: 17},
//       Minimum: {Value: 24.9, Unit: "C", UnitType: 17}
//     },
//   },
//   {
//     Date: "2020-09-29T07:00:00+03:00",
//     Day: {Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false},
//     EpochDate: 1601352000,
//     Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
//     MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
//     Night: {Icon: 34, IconPhrase: "Mostly clear", HasPrecipitation: false},
//     Sources: ["AccuWeather"],
//     Temperature: {
//       Maximum: {Value: 31.9, Unit: "C", UnitType: 17},
//       Minimum: {Value: 25.1, Unit: "C", UnitType: 17}
//     },
//   },
//   {
//     Date: "2020-09-30T07:00:00+03:00",
//     Day: {Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false},
//     EpochDate: 1601438400,
//     Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
//     MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
//     Night: {Icon: 34, IconPhrase: "Mostly clear", HasPrecipitation: false},
//     Sources: ["AccuWeather"],
//     Temperature: {
//       Maximum: {Value: 32, Unit: "C", UnitType: 17},
//       Minimum: {Value: 24.6, Unit: "C", UnitType: 17}
//     },
//   },
// ];
// const searchCitisRespance = [
//   {
//     AdministrativeArea: {ID: "BE", LocalizedName: "Berlin"},
//     Country: {ID: "DE", LocalizedName: "Germany"},
//     Key: "178087",
//     LocalizedName: "Berlin",
//     Rank: 10,
//     Type: "City",
//     Version: 1,
//   },
//   {
//     AdministrativeArea: {ID: "BE", LocalizedName: "Berlin"},
//     Country: {ID: "DE", LocalizedName: "Germany"},
//     Key: "178087",
//     LocalizedName: "Berlin",
//     Rank: 10,
//     Type: "City",
//     Version: 1,
//   },
//   {
//     AdministrativeArea: {ID: "BE", LocalizedName: "Berlin"},
//     Country: {ID: "DE", LocalizedName: "Germany"},
//     Key: "178087",
//     LocalizedName: "Berlin",
//     Rank: 10,
//     Type: "City",
//     Version: 1,
//   },
//   {
//     AdministrativeArea: {ID: "BE", LocalizedName: "Berlin"},
//     Country: {ID: "DE", LocalizedName: "Germany"},
//     Key: "178087",
//     LocalizedName: "Berlin",
//     Rank: 10,
//     Type: "City",
//     Version: 1,
//   },
//   {
//     AdministrativeArea: {ID: "BE", LocalizedName: "Berlin"},
//     Country: {ID: "DE", LocalizedName: "Germany"},
//     Key: "178087",
//     LocalizedName: "Berlin",
//     Rank: 10,
//     Type: "City",
//     Version: 1,
//   }
// ];
