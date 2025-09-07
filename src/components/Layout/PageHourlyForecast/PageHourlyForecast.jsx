import HourlyForecast from "../../Elements/HourlyForecast/HourlyForecast";
import classes from "./PageHourlyForecast.module.css";

function PageHourlyForecast() {
  return (
    <div className={classes.hourlyForecastContainer}>
      <HourlyForecast />
    </div>
  );
}
export default PageHourlyForecast;
