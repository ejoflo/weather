import React, { useContext } from 'react';
import { WeatherContext } from '../Context/WeatherContext';
import Sunrise from "../Assets/sunrise.svg"
import Sunset from "../Assets/sunset.svg"

function TodaysDate() {
    // const currentDay = new Date.getDay();
    const { sunsetTime, sunriseTime } = useContext(WeatherContext);
    const currentDate = new Date();
    // const time = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    let currentMonth = currentDate.getMonth();
    let currentDayNum = currentDate.getDate();
    let currentDay = currentDate.getDay();
    let month = null;
    let day = null;
    let currentSunrise = new Date(sunriseTime * 1000).toLocaleTimeString();
    let currentSunset = new Date(sunsetTime * 1000).toLocaleTimeString();
    // let foreignTime = new Date(1574935545 * 1000).toLocaleTimeString();
    
    switch (currentDay) {
        case 0: 
            day = 'Sunday';
            break;
        case 1: 
            day = 'Monday';
            break;
        case 2: 
            day = 'Tuesday';
            break;
        case 3: 
            day = 'Wednesday';
            break;
        case 4: 
            day = 'Thursday';
            break;
        case 5: 
            day = 'Friday';
            break;
        case 6: 
            day = 'Saturday';
            break;
    
        default: 
            day = 'Default currentDay';
    }
    
    switch (currentMonth) {
        case 0:
            month = 'Jan';
            break;
        case 1:
            month = 'Feb';
            break;
        case 2:
            month = 'Mar';
            break;
        case 3:
            month = 'Apr';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'Jun';
            break;
        case 6:
            month = 'Jul';
            break;
        case 7:
            month = 'Aug';
            break;
        case 8:
            month = 'Sep';
            break;
        case 9:
            month = 'Oct';
            break;
        case 10:
            month = 'Nov';
            break;
        case 11:
            month = 'Dec';
            break;
          
        default:
            month = 'Default currentMonth';
    }

    return (
        <div id="todays-date">
            <h1 className="highlightOrange">{day}</h1>
            <h2>{month} {currentDayNum}</h2>
            <div style={sunriseTime ? {display: "block"} : {display: "none"}}>
                <img className="sunriseSunset" src={Sunrise} alt='sunrise' />
                <p className="highlightRed" style={{margin: 0}}>Sunrise</p>
                <p>{currentSunrise}</p>
                <img className="sunriseSunset" src={Sunset} alt='sunset' />
                <p className="highlightRed" style={{margin: 0}}>Sunset</p>
                <p>{currentSunset}</p>
            </div>
        </div>
    )
}


export default TodaysDate;