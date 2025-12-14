import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "2d47be48e0cda70ee0d9631eebfde9de";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let data = await response.json();
    let lon = data[0].lon;
    let lat = data[0].lat;
    let weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    let weatherData = await weather.json();
    let result = {
      city: city,
      feelsLike: weatherData.main.feels_like,
      description: weatherData.weather[0].description,
      temperatureMin: weatherData.main.temp_min,
      temperatureMax: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      windSpeed: weatherData.wind.speed,
    };
    console.log(updateInfo);
    return result;
  };

  function handleChange(event) {
    setCity(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await getWeatherInfo();
    updateInfo(result);
    setCity("");
  };

  return (
    <div className="search-box">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
