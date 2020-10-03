import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import WeatherApp from "./containers/WeatherApp";
import './App.scss';

export default function App() {
  return (
      <Router>
          <div className="App">
              <WeatherApp/>
          </div>
      </Router>
  );
}

