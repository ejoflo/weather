import React, { useContext } from 'react';
import { WeatherContext } from '../Context/WeatherContext';

function TodaysDetails() {
    const { currentHigh, currentLow, humidity, wind, conditions, weatherIcon } = useContext(WeatherContext);

    return (
        <div id='todays-details' style={humidity ? {display: ''} : {display: "none"}}>
        <h3 className="highlightRed">High: {currentHigh}°</h3>
        <h3 className="highlightBlue">Low: {currentLow}°</h3>
        <h3 className="highlightPurple">{`Humidity: ${humidity}%`}</h3>
        <h3 className="highlightBlue">{`Wind: ${wind} MPH`}</h3>
        <img src={weatherIcon} alt={conditions}/>
        <h3 className="highlightRed">{conditions}</h3>
        </div>
    ) 
}

export default TodaysDetails;