import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { useContext, useEffect, useState } from "react";
import { authApi } from "../../services/auth-api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../contexts/UserContext";

const cx = classNames.bind(styles);
function Login() {
  const navigate = useNavigate();
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginContext } = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let response = await authApi.login(user_name, password);
      console.log("res: ", response);
      if (response && response.TokenId) {
        loginContext(
          user_name,
          response.TokenId,
          response.roleId,
          response.user_id
        );
        if (response.roleId === 1) {
          navigate("/admin/manager"); // Chuyển đến trang chính hoặc làm bất kỳ điều gì bạn cần
        } else {
          navigate("/home"); // Chuyển đến trang chính hoặc làm bất kỳ điều gì bạn cần
        }
        toast.success("Đăng nhập thành công");
      } else {
        if (response && response.status === 500) {
          toast.error(response.data.message);

          console.log("errror2: ", response.status);
        }
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
            <label>User_name: </label>
            <input
              type="text"
              required
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
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
      <ToastContainer />
    </div>
  );
}

export default Login;
