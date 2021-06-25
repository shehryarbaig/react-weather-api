import {useEffect, useState} from 'react';
import {APP_ID} from "../../config"


const WeatherCard = props => {
    const {cityName} = props;

    const fetchWeatherData = async () =>{
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APP_ID}`);
        console.log(await resp.json());
    }

    useEffect(() =>{
        fetchWeatherData();
    })

    return (
        <div>
            <h2>Weather Card</h2>
            <h5>{cityName}</h5>
        </div>
    );
};

export default WeatherCard;