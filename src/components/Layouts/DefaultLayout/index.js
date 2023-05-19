import classNames from "classnames/bind";
import Header from "../../common/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{content}</div>
    </div>
  );
}

export default DefaultLayout;
