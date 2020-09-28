import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WeatherApp from "./containers/WeatherApp";
import './App.scss';

export default function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
              <WeatherApp/>
          </div>
      </Router>
  );
}

