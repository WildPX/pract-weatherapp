import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import classes from "./HeaderSidebar.module.css";

function HeaderSidebar() {
  return (
    <div className={classes.headerSidebar}>
      <DarkModeToggle />
      <DropdownMenu />
    </div>
  );
}
export default HeaderSidebar;
