import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { useState } from "react";
import { authApi } from "../../services/auth-api";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let response = await authApi.login(username, password);
      if (response && response.accessToken) {
        const token = response.accessToken;
        console.log("token:", token);
        localStorage.setItem("token", token); // Lưu token vào Local Storage
        alert("Đăng nhập thành công"); // Đăng nhập thành công, xử lý logic sau khi đăng nhập
        navigate("/home"); // Chuyển đến trang chính hoặc làm bất kỳ điều gì bạn cần
      } else {
        alert("Tài khoản đăng nhập hoặc mật khẩu không chính xác");
      }
    } catch (error) {
      // Xử lý lỗi đăng nhập
      setError(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập."
      );
      console.error(error);
    }
  };
  return (
    <div className={cx("app")}>
      <h1 className={cx("header")}>Login</h1>
      <div className={cx("form")}>
        <form onSubmit={handleLogin}>
          <div className={cx("input-container")}>
            <label>Username: </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <div className={cx("input-container")}>
            <label>Password: </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className={cx("button-container")}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
