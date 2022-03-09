import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CreateUserPage from "./Pages/CreateUserPage/CreateUserPage";
import EditUserPage from "./Pages/EditUserPage/EditUserPage";
import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createuser" element={<CreateUserPage />} />
        <Route path="/edituser/:id" element={<EditUserPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
