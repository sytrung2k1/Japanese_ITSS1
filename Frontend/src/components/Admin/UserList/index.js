// import classNames from "classnames/bind";
// import styles from "./Header.module.scss";
// const cx = classNames.bind(styles);

import { useEffect } from "react";
import { userApi } from "../../../services/user-api";

function UserList() {
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await userApi.getUsers();
    console.log("res:", res);
  };
  return <h1>UserList</h1>;
}
export default UserList;
