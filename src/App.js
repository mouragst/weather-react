import './App.css';
import { IoSearchSharp } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { useState } from 'react';
import api from "./utils/Api";

function App() {
  const [input, setInput] = useState('');
  const [weatherInfo, setWeatherinfo] = useState('');

  function getWeather (lat, lon, apiKey) {
    api.get('/weather', {
      params: {
        lat: lat,
        lon: lon,
        appid: apiKey
      }
    })
  }

  return (
    <div className="container">
      <div>
        <h1 className="title">Weather App</h1>
      </div>

      <div className="inputContainer">
        <input type="text"
        />
        <button className="search"> <IoSearchSharp size={25}/> </button>
      </div>

      <div className="cardResults">
        <h1>Londrina</h1>
        <span><TiWeatherSunny size={50}/></span>
        <span>23 Graus</span>
        <span>Vento: 23km/h</span>
        <span>Chovendo</span>
        <span>Latitude: </span>
        <span>Longitude: </span>
      </div>
    </div>

  );
}

export default App;
