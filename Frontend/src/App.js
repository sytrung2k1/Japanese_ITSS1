import Login from "./pages/Login";
import HomeSearch from "./pages/HomeSearch";
import BookmarkList from "./pages/Student/BookmarkList";
import StudentList from "./pages/Teacher/StudentList";
import UserList from "./components/Admin/UserList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import TeacherProfile from "./pages/Teacher/TeacherProfile";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const token = localStorage.getItem("token");
  const { user, loginContext } = useContext(UserContext);
  console.log("<<< user :", user);
  console.log("<<< token :", token);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("username"),
        localStorage.getItem("token"),
        localStorage.getItem("role"),
        localStorage.getItem("id")
      );
    }
  }, []);
  return (
    <Router>
      <Routes>
        {/* 1 */}
        <Route path="/login" element={<Login />} />
        {/* 2 Quỳnh*/}
        <Route path="/signup" element={<SignUp />} />
        {/* 3 Quỳnh*/}
        <Route path="/home" element={<HomeSearch />} />
        {/* 4 Tú*/}
        <Route
          path="/info/:id"
          element={
            token && user.role === 2 ? (
              <TeacherProfile />
            ) : (
              <h1>
                Ban khong the truy cap. Hay dang nhap voi vai tro la hoc sinh !
              </h1>
            )
          }
        />
        {/*  */}
        <Route path="/profile" element={<TeacherProfile />} />
        {/* 7 Trưởng */}
        <Route path="/student/bookmark" element={<BookmarkList />} />
        {/* 8 Tú*/}
        <Route path="/teacher/studentlist" element={<StudentList />} />
        {/* 9 Trung */}
        {/* <PrivateRoute path="/admin/manager" element={<UserList />} /> */}
        <Route
          path="/admin/manager"
          element={
            token && user.role === 1 ? <UserList /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
