import React, { useContext } from 'react';
import Search from './Search';
import { WeatherContext } from '../Context/WeatherContext';

function TodaysWeather() {
    const { currentWeather, cityName } = useContext(WeatherContext);

    return (
        <div id="todays-weather">
            <h1 style={currentWeather ? {display: ''} : {display: "none"}} className="highlightOrange">{currentWeather}<span className="degrees">°</span></h1>
            <h2>{cityName}</h2>
            <Search />
        </div>
    ) 
}

export default TodaysWeather;