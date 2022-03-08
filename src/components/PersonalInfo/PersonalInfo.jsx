import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import profilePic from "../../images/bello.jpeg";
import logo from "../../images/logo.svg";
import dropdown from "../../images/dropdown.svg";
import capture from "../../images/capture.svg";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <ul className="personal-navbar">
          <li>
            <h2 className="h2">
              <Link to="/">
                <div className="tweeter-logo">
                  <div>
                    <img src={logo} alt="tweeter logo" />
                  </div>
                  <div className="tweeter-text">Tweeter</div>
                </div>
              </Link>
            </h2>
          </li>
          <li>
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
          </li>
        </ul>
        <Outlet />
      </div>
      <div className="setting">
        <h1 className="setting-info">Change Info</h1>
        <p className="setting-text">
          Changes will be reflected to every services
        </p>
        <div className="profile-changeImg">
          <div className="setting-photo">
            <div className="capture-img">
              <img className="capture-image" src={capture} alt="profile pic" />
            </div>
            <img
              className="setting-photo-img"
              src={profilePic}
              alt="profile pic"
            />
          </div>
          <div className="setting-change-photo">
            <p>CHANGE PHOTO</p>
          </div>
        </div>
        <form>
          <div className="form">
            <div className="label">
              <label>Name</label>
            </div>
            <div className="label">
              <input placeholder="Enter your name..." />
            </div>
            <div className="label">
              <label>Bio</label>
            </div>

            <div className="label">
              <textarea
                placeholder="Enter your bio..."
                row="5"
                column="5"
              ></textarea>
            </div>

            <div className="label">
              <label>Phone</label>
            </div>

            <div className="label">
              <input type="phone" placeholder="Enter your phone..." />
            </div>

            <div className="label">
              <label>Email</label>
            </div>

            <div className="label">
              <input type="email" placeholder="Enter your email..." />
            </div>

            <div className="label">
              <label>Password</label>
            </div>

            <div className="label">
              <input type="password" placeholder="Enter your password..." />
            </div>

            <div className="label">
              <input className="setting-button" type="submit" value="Save" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
