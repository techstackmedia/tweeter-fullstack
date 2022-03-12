import { Outlet, Link } from "react-router-dom";
import home from "../../images/home.svg";
import explore from "../../images/explore.svg";
import bookmark from "../../images/bookmark.svg";
import "./NavbarBottom.css";

const NavbarBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <ul>
          <li>
            <Link to="/profile">
              <img src={home} alt="home icon" />
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <img src={explore} alt="explore icon" />
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <span>
                <img src={bookmark} alt="bookmark icon" />
              </span>
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default NavbarBottom;
