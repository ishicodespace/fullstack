import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherInfo() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "" ,
      feelsLike:        "", 
      description: "",   
      temperatureMin: "",
      temperatureMax: "",
      humidity: "",
      pressure: "",
      windSpeed: ""
    });

    const updateInfo = (result) => {
        setWeatherInfo(result);
}

  return (
    <div>
          <h2>Weather Information</h2>
          <SearchBox updateInfo={updateInfo} />
          <br />
          <InfoBox weatherInfo={weatherInfo}/>   
    </div>
  );
}