import classNames from "classnames/bind";
import styles from "./UserList.module.scss";
import { useContext, useEffect, useState } from "react";
import { userApi } from "../../../services/user-api";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
import { UserContext } from "../../../contexts/UserContext";

const cx = classNames.bind(styles);

function UserList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0); // Current active page
  const { logout } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let res = await userApi.getUsers();
    // console.log("res:", res);
    setUsers(res);
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const hanldLogout = () => {
    logout();
    return navigate("/login");
  };

  return (
    <div className={cx("table-container")}>
      <table>
        <thead>
          <tr>
            <th className={cx("color", "th-name-user")}>
              ユーザー名
              <img
                src="/icons/up-icon.png"
                alt="Up Icon"
                className={cx("icons")}
              />
            </th>
            <th className={cx("color2")}>表示名</th>
            <th className={cx("color2")}>メール</th>
            <th className={cx("color2")}>ロール</th>
            <th className={cx("color2")}>電話番号</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, i) => (
            <tr key={i}>
              <td className={cx("color2", "th-name-user")}>
                <img
                  src="/icons/avatar-icon.png"
                  alt="Avatar Icon"
                  className={cx("icons")}
                />
                aikawa
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
              <td>
                {/* <a href="#">
                  <img
                    src="/icons/trash-icon.png"
                    alt="Trash Icon"
                    className={cx("icons")}
                  />
                </a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={hanldLogout}>logout</button>
      <div className={cx("pagination-container")}>
        <ReactPaginate
          previousClassName={cx("pagination-item", "pagination-previous")}
          nextClassName={cx("pagination-item", "pagination-next")}
          breakClassName={cx("pagination-item")}
          pageClassName={cx("pagination-item")}
          previousLabel={<img src="/icons/left-icon.png" alt="Previous" />}
          nextLabel={<img src="/icons/right-icon.png" alt="Next" />}
          onPageChange={handlePageChange}
          pageRangeDisplayed={2}
          pageCount={Math.ceil(users.length / itemsPerPage)}
          // pageCount={Math.ceil(40 / itemsPerPage)}
          containerClassName={cx("pagination-container")}
          activeClassName={cx("pagination-link", "active")}
          disabledClassName={cx("pagination-disabled")}
        />
      </div>
    </div>
  );
}
export default UserList;
