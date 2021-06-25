import './App.css';
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import {useState} from "react"

function App() {
  const [query,setQuery] = useState("");

  const  handleCLick = (searchQuery)=>{
    setQuery(searchQuery);
  };

  return (
    <div className="App">
      <SearchBar onClick={handleCLick} placeholder="Enter City Name"/>
      {query && <WeatherCard cityName = {query}/>}
    </div>
  );
}

export default App;
