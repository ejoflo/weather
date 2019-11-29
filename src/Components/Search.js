import React, { useState, useContext } from 'react';
import { WeatherContext } from '../Context/WeatherContext';

function Search() {
    const { getCurrentWeather } = useContext(WeatherContext);
    const [ city, setCity ] = useState('');

    // initiate API call in WeatherContext
    const handleSubmit = (e) => {
        e.preventDefault();
        city ? getCurrentWeather(city) : alert('Please enter a city.');
        setCity('');
    }

    // update city state in WeatherContext
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    return (
        <div id="search">
            <form onSubmit={handleSubmit}>
                <input className="searchBox" type='text' size='30' placeholder='Enter a City, Country' value={city} onChange={handleChange}></input>
                <input className="button" type='submit' value='CHECK THE WEATHER'></input>
            </form>
        </div>        
    )
}

export default Search;