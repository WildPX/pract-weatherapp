import HeaderSidebar from "../../Elements/HeaderSidebar/HeaderSidebar";
import Logo from "../../Elements/Logo/Logo";
import classes from "./PageHeader.module.css";

function PageHeader() {
  return (
    <header className={classes.header}>
      <Logo />
      <HeaderSidebar />
    </header>
  );
}
export default PageHeader;
