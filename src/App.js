import './App.css';
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import {useState} from "react"
import {APP_ID} from "./config";
import {useDebounce, useFetch} from "./utils";

function App() {
  const [weatherData, setWeatherData] = useState(); 
  const debouncedApiCall = useDebounce((searchQuery) => FetchWeatherData(searchQuery),1000);

  const FetchWeatherData = async (searchQuery) =>{
   const data = await useFetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&units=metric&appid=${APP_ID}`);
   
    if (data.error === null) {
      setWeatherData(data.response)
    }
  }

  const  handleCLick = (searchQuery)=>{
    FetchWeatherData(searchQuery);
  };

  const  handleChange = (event)=>{
    debouncedApiCall(event.target.value);
  };

  return (
    <div className="App">
      <div className="searchSection">
        <SearchBar onClick={handleCLick} onChange={handleChange} placeholder="Enter City Name"/>
      </div>
      <div className="weatherCardSection">
        {weatherData ? (weatherData.cod==="200" ? <WeatherCard weatherData = {weatherData}/> : <div>Result Not Found</div>):<div/> }

      </div>
    </div>
  );
}

export default App;
