import React from 'react';
import "./WeatherTile.style.css";
import {getDayName} from "../../utils";

const WeatherTile = props => {
    const {data} = props;
    const day = getDayName(new Date(data.dt_txt).getDay());
    //console.log(data);
    return (
        <div className="weatherTileContainer">
            <h6 className="custom-h6">{day}</h6>
            <img className="avatar" alt="weather" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
            <h6 className="custom-h6">{Math.floor(data.main.temp_min)}° {Math.floor(data.main.temp_max)}°</h6>
            {/* {Math.floor(data.main.temp)} */}
        </div>
    );
};


export default WeatherTile;