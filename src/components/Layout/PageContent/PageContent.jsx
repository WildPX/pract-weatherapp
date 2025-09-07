import MOTDMessage from "../../Elements/MOTDMessage/MOTDMessage";
import PageAllWeather from "../PageAllWeather/PageAllWeather";
import Search from "../../Elements/Search/Search";
import classes from "./PageContent.module.css";

function PageContent() {
  return (
    <div className={classes.content}>
      <MOTDMessage />
      <Search />
      <main>
        <PageAllWeather />
      </main>
    </div>
  );
}
export default PageContent;
