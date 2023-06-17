import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

const cx = classNames.bind(styles);

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logout Success !");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>Vlearn</div>
        <div className={cx("option")}>
          <NotificationsNoneIcon sx={{ fontSize: 40 }} />
          {token && user.name && <h4>{user.name}</h4>}
          <Avatar
            alt="Remy Sharp"
            src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
            sx={{ width: 48, height: 48, margin: "0 0 0 12px" }}
          />

          <NavDropdown title="">
            <NavDropdown.Item href="/login">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLogout()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}
export default Header;
