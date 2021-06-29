import {useEffect, useState} from 'react';
import {APP_ID} from "../../config";
import "./WeatherCard.style.css";
import {getDayName} from "../../utils";



const WeatherCard = props => {
    const {weatherData} = props;
    //const day = getDayName(new Date(weatherData.dt*1000).getDay());
    const {list} = props.weatherData;
    const currentWeatherDetail = list[0];
    const day = getDayName(new Date(currentWeatherDetail.dt_txt).getDay());
    const skyDescription = currentWeatherDetail.weather[0].main;
    
    let date = [];
    const currentDateHours = new Date(currentWeatherDetail.dt_txt).getHours();
    const result = list.filter(obj => {
        const nextDate = new Date(obj.dt_txt).getDate();
        const nextDateHours = new Date(obj.dt_txt).getHours();
        if(!date.includes(nextDate) && currentDateHours == nextDateHours)
        {
            date.push(nextDate);
            return true;
        }
        return false;
      });

    console.log(result);
    return weatherData.cod == "200"  ? (
        <div className="weatherCardContainer">
            <div>
            <h3 className="weatherCardHeaderText">{weatherData.city.name}</h3>
            <h4 className="weatherCardHeaderText">{day}</h4>
            <h5 className="weatherCardHeaderText">{skyDescription}</h5>

            </div>
            <div class="currentWeatherContainer">
                <div class="temperatureSection">
                    <img className="avatar" alt="weather" src={`http://openweathermap.org/img/w/${currentWeatherDetail.weather[0].icon}.png`}/>
                    <h3 className="custom-h3">38</h3>
                    <h4 className="degrees-h4">°C</h4>
                </div>
                <div class="detailSection">
                    <p className="temperatureDetails">Pressure: {currentWeatherDetail.main.pressure} hPa</p>
                    <p className="temperatureDetails">Humidity: {currentWeatherDetail.main.humidity}%</p>
                    <p className="temperatureDetails">Wind Speed: {currentWeatherDetail.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    ) : (<div>Result Not Found.</div>);
};

export default WeatherCard;