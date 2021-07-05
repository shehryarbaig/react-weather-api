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
            label: 'Min Temperature',
            data: data.map((item) => {return Math.floor(item.main.temp_min)}),
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
            fill: '-1'
          },
          {
            label: 'Max Temperature',
            data: data.map((item) => {return Math.floor(item.main.temp_max)}),
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: "#CCEBFA",
            fill: '-1'
          }
        ]
      }

    return (
        <div>
            <Line
          data={state}
          options={{
            plugins: {
              filler: {
                propagate: false
              },
              'samples-filler-analyser': {
                target: 'chart-analyser'
              }
            },
            interaction: {
              intersect: false,
            }
          }}
        />
        </div>
    );
};

export default WeatherChart;