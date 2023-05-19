import Login from "./pages/Login";
import HomeSearch from "./pages/HomeSearch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Login" element={<Login></Login>} />
        <Route path="/" element={<HomeSearch></HomeSearch>} />
      </Routes>
    </Router>
  );
}

export default App;
