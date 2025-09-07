import PageDailyForecast from "../PageDailyForecast/PageDailyForecast";
import PageHourlyForecast from "../PageHourlyForecast/PageHourlyForecast";
import PageMainWeather from "../PageMainWeather/PageMainWeather";
import classes from "./PageAllWeather.module.css";

function PageAllWeather() {
  return (
    <div className={classes.weatherContainer}>
      <PageMainWeather />
      <PageDailyForecast />
      <PageHourlyForecast />
    </div>
  );
}
export default PageAllWeather;
