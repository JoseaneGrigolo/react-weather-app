export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      {" "}
      <div className="WeatherForecast-day">{props.data.time}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition}
          className="WeatherForecast-img"
        />{" "}
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">
          {" "}
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-min">
          {" "}
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
