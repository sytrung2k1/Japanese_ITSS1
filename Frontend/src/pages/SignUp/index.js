import classNames from "classnames/bind";
import styles from "./signup.module.scss";

const cx = classNames.bind(styles);

function SignUp() {
  return <h1 className={cx("header")}>SignUp</h1>;
}

export default SignUp;
