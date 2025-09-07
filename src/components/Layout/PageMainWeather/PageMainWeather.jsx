import MainWeatherBox from "../../Elements/MainWeatherBox/MainWeatherBox";
import classes from "./PageMainWeather.module.css";
import MainWeatherAdditional from "./../../Elements/MainWeatherAdditional/MainWeatherAdditional";

function PageMainWeather() {
  return (
    <div className={classes.mainWeatherContainer}>
      <MainWeatherBox />
      <MainWeatherAdditional />
    </div>
  );
}
export default PageMainWeather;
