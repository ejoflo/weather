import React, { createContext, useState } from 'react';

const WeatherContext = createContext();
const CURRENT_API_KEY = "3aab69399bf03eca438758bf6e33d18e"; // current weather
// const FORECAST_API_KEY = "4a12e1a24af4c1c3362bdec84315696c"; // forecast

function WeatherContextProvider(props) {
    const [ currentWeather, setCurrentWeather ] = useState('');
    const [ currentHigh, setCurrentHigh ] = useState('');
    const [ currentLow, setCurrentLow ] = useState('');
    const [ cityName, setCityName ] = useState('');
    const [ humidity, setHumidity ] = useState('');
    const [ sunriseTime, setSunriseTime ] = useState(0);
    const [ sunsetTime, setSunsetTime ] = useState(0);
    const [ wind, setWind ] = useState('');
    const [ conditions, setConditions ] = useState('');
    const [ weatherIcon, setWeatherIcon ] = useState('');

    const collectWeatherData = async (weatherData) => {
        setCityName(weatherData.name + ` ${weatherData.sys.country}`);
        setCurrentWeather(Math.floor(weatherData.main.temp));
        setCurrentHigh(Math.floor(weatherData.main.temp_max));
        setCurrentLow(Math.floor(weatherData.main.temp_min));
        setHumidity(weatherData.main.humidity);
        setSunriseTime(weatherData.sys.sunrise);
        setSunsetTime(weatherData.sys.sunset);
        setWind(weatherData.wind.speed);
        setWeatherIcon(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
        setConditions(` ${weatherData.weather[0].description}`);  // setup icon 
        console.log(weatherData);
    }
    
    async function getCurrentWeather(searchName) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&units=imperial&appid=${CURRENT_API_KEY}`, {mode: 'cors'});
            const weather = await response.json();

            if (weather.cod !== "404") {
                collectWeatherData(weather);

            } else {
                throw new Error('City not found. Please try again.');
            }
            
        } catch (error) {
            alert(error);
        }
    }

/*     async function getCurrentForecast(searchName) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchName}&appid=${FORECAST_API_KEY}`, {mode: 'cors'});
            const weather = await response.json();

            console.log(weather);
        
        } catch (error) {
            alert(error);
        }
    } */

    return (
        <WeatherContext.Provider value={{
            getCurrentWeather,
            currentWeather, 
            currentHigh,
            currentLow,
            cityName, 
            sunsetTime,
            sunriseTime,
            humidity, 
            wind, 
            conditions, 
            weatherIcon}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export { WeatherContext, WeatherContextProvider };