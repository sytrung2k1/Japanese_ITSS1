import Login from "./pages/Login";
import HomeSearch from "./pages/HomeSearch";
import Feedback from "./pages/Student/Feedback";
import BookmarkList from "./pages/Student/BookmarkList";
import StudentList from "./pages/Teacher/StudentList";
import UserList from "./components/Admin/UserList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1 */}
        <Route path="/login" element={<Login />} />
        {/* 2 Quỳnh*/}
        <Route path="/signup" element={<SignUp />} />
        {/* 3 Quỳnh*/}
        <Route path="/home" element={<HomeSearch />} />
        {/* 6 Ánh*/}
        <Route path="/student/feedback" element={<Feedback />} />
        {/* 7 Trưởng */}
        <Route path="/student/bookmark" element={<BookmarkList />} />
        {/* 8 Tú*/}
        <Route path="/teacher/studentlist" element={<StudentList />} />
        {/* 9 Trung */}
        <Route path="/admin/manager" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
