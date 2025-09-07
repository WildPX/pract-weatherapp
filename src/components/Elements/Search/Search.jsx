import Button from "../Button/Button";
import SearchBox from "../SearchBox/SearchBox";
import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.searchContainer}>
      <SearchBox />
      <Button />
    </div>
  );
}
export default Search;
