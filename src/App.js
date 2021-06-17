import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
  
  const [locationNB, setLocationNB] = useState([]);
  const [locationCleveland, setLocationCleveland] = useState([]);
  const [locationVegas, setLocationVegas] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      getWeather(locationNB, locationCleveland, locationVegas)
      .then(weather => {
        setWeatherData(weather);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });

  }, [error, locationNB, locationCleveland, locationVegas])

  function handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
    }
  }

  function getWeather(locationNB, locationCleveland, locationVegas) {
    return fetch(
      `${process.env.REACT_APP_API_URL}/weather/?zip=${process.env.REACT_APP_API_URL}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => handleResponse(res))
      .then(weather => {
      });
  }
  
  
  return (
    <div className="App">
      (
        <div>
          <Weather weatherData={weatherData}/>
        </div>
      )
    </div>
  );
}