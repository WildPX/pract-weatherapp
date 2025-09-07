import PageContent from "../../Layout/PageContent/PageContent";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import PageFooter from "./../../Layout/PageFooter/PageFooter";
import classes from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={classes.mainContainer}>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}
export default MainPage;
