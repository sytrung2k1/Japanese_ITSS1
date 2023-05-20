import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { useEffect, useState } from "react";
import { authApi } from "../../services/auth-api";

const cx = classNames.bind(styles);
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // useEffect(() => {
  //   handleLogin();
  // }, []);

  const handleLogin = async () => {
    if (username.trim() === "") {
      console.log("error");
    } else if (password.trim() === "") {
      console.log("error");
    } else {
      try {
        let response = await authApi.login({
          username: username,
          password: password,
        });
        const token = response.data.accessToken;
        // Lưu token vào Local Storage
        localStorage.setItem("token", token);
        // Đăng nhập thành công, xử lý logic sau khi đăng nhập
        console.log("Đăng nhập thành công");
        // Chuyển đến trang chính hoặc làm bất kỳ điều gì bạn cần
      } catch (error) {
        // Xử lý lỗi đăng nhập
        setError(
          "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập."
        );
        console.error(error);
      }
    }
  };
  return (
    <div>
      <h1 className={cx("header")}>Login</h1>;
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button onClick={handleLogin}>Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
