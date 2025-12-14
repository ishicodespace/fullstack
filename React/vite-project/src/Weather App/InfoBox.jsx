import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function InfoBox({ weatherInfo }) {
  return (
    <div>
      <Card sx={{ minWidth: 340 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          Feels Like: {weatherInfo.feelsLike} °C
              <br />
              Description: {weatherInfo.description}
              <br />
              Min Temperature: {weatherInfo.temperatureMin} °C
                          <br />
                          Max Temperature: {weatherInfo.temperatureMax} °C
                <br />
              Humidity: {weatherInfo.humidity} %<br />
              Pressure: {weatherInfo.pressure} hPa
              <br />
              Wind Speed: {weatherInfo.windSpeed} m/s
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
