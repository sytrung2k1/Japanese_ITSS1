import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx("red")}>
      <div>Home Search</div>
    </div>
  );
}
export default Search;
