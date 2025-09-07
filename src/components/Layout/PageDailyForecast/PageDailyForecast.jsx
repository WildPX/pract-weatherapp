import DailyForecast from "../../Elements/DailyForecast/DailyForecast";
import classes from "./PageDailyForecast.module.css";

function PageDailyForecast() {
  return (
    <div className={classes.dailyForecastContainer}>
      <DailyForecast />
    </div>
  );
}
export default PageDailyForecast;
