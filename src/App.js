import './App.css';
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import {useState} from "react"
import {APP_ID} from "./config";

function App() {
  const [weatherData, setWeatherData] = useState();  

  const fetchWeatherData = async (searchQuery) =>{
    //const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${APP_ID}`);
    //console.log("inside fetch");
    const resp = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&units=metric&appid=${APP_ID}`);
    const responseJson = await resp.json();
    console.log(responseJson);
    setWeatherData(responseJson);
    
  }

  const  handleCLick = (searchQuery)=>{
    fetchWeatherData(searchQuery);
  };

  return (
    <div className="App">
      <div className="searchSection">
        <SearchBar onClick={handleCLick} placeholder="Enter City Name"/>
      </div>
      <div className="weatherCardSection">
        {weatherData && <WeatherCard weatherData = {weatherData}/>}

      </div>
    </div>
  );
}

export default App;
