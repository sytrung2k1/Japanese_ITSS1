import classNames from "classnames/bind";
import styles from "./login.module.scss";

const cx = classNames.bind(styles);
function Login() {
  return <h1 className={cx("header")}>Login</h1>;
}

export default Login;
