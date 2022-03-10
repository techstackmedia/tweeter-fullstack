import { Outlet, Link } from "react-router-dom";
import person from "../../images/account-circle.svg";
import group from "../../images/group.svg";
import logout from "../../images/logout.svg";
import setting from "../../images/setting.svg";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <>
      <div className="dropdown-items">
        <ul className="ul-dropdown">
          <li>
            <Link to="/profile">
              <img src={person} alt="person icon" />{" "}
              <span className="dropdown-span">My Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/#">
              <img src={group} alt="group icon" /> <span>Group Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/setting">
              <img src={setting} alt="setting icon" />
              <span>Settings</span>
            </Link>
          </li>
          <hr style={{ margin: "auto", width: "90%" }} />
          <li>
            <Link to="/register">
              <img src={logout} alt="logout icon" />
              <span style={{ color: "#EB5757" }}>Logout</span>
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Dropdown;
