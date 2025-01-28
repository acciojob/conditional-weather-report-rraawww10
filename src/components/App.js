import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const temperatureStyle = temperature > 20 ? { color: 'red' } : { color: 'blue' };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: <span>{temperature}&deg;C</span></p> 
      <p>Conditions: {conditions}</p>
    </div>
  );
};

const App = () => {
  const [weather, setWeather] = useState({ 
    temperature: 25, 
    conditions: "Sunny" 
  });

  useEffect(() => {
    // You can add API calls here to fetch real-time weather data 
    // For this example, we use a static value
    setWeather({ temperature: 25, conditions: "Sunny" }); 
  }, []); 

  return (
    <div>
      <WeatherDisplay weather={weather} /> 
    </div>
  );
}

export default App;
