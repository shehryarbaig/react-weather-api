import React from 'react';
import "./WeatherChart.style.css";
import {Line} from 'react-chartjs-2';
import {getDayName} from "../../utils";

const WeatherChart = props => {

    const {data} = props;

    const state = {
        labels: data.map((item) => {return getDayName(new Date(item.dt_txt).getDay())}),
        datasets: [
          {
            label: 'Temperature',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data.map((item) => {return Math.floor(item.main.temp)})
          }
        ]
      }

    return (
        <div>
            <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Temperature each day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    );
};

export default WeatherChart;