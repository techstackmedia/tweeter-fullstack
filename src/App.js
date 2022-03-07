import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import "./App.css";

const App = () => {
  return (
    <div className="homepage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
