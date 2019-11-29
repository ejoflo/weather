import React from 'react';
import TodaysDate from './Components/Date';
import { WeatherContextProvider } from './Context/WeatherContext';
import TodaysWeather from './Components/TodaysWeather';
import TodaysDetails from './Components/TodaysDetails';

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <TodaysDate />
        <TodaysWeather />
        <TodaysDetails />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
