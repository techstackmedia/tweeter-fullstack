import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Outlet, Link } from "react-router-dom";
import profilePic from "../../images/bello.jpeg";
import dropdown from "../../images/dropdown.svg";
import logo from "../../images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <header>
        <nav>
          <div className="header-Icon">
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  style={{ width: "31.5px", height: "28.77px" }}
                  src={logo}
                  alt="logo"
                />
              </div>
              <div>
                <h2>
                  <Link to="/">Tweeter</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="header-navlinks">
            <ul>
              <li>
                <Link to="/profile">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
            </ul>
          </div>
          <div
            className="header-profile"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <img
              className="header-profileImg"
              src={profilePic}
              alt="user's profile pic"
              onClick={() => setShow((s) => !s)}
            />
            <span>Bello Osagie</span>
            <img
              className="header-navdropdown"
              src={dropdown}
              alt="dropdown icon"
              onClick={() => setShow((s) => !s)}
            />
            <div
              className="dropdown-dropdown"
              style={{ display: show ? "none" : "block" }}
            >
              <Dropdown />
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
    </>
  );
};

export default Navbar;
