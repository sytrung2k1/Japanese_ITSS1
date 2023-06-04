import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>Vlean</div>
        <div className={cx("option")}>
          <NotificationsNoneIcon sx={{ fontSize: 40 }} />
          <Avatar
            alt="Remy Sharp"
            src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
            sx={{ width: 48, height: 48, margin: "0 0 0 12px" }}
          />
          <KeyboardArrowDownIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
export default Header;
