import profilePic from "../../images/bello.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="header-Icon">
            <h2>Tweeter</h2>
          </div>
          <div className="header-navlinks">
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>Bookmarks</li>
            </ul>
          </div>
          <div className="header-profile">
            <img
              className="header-profileImg"
              src={profilePic}
              alt="user's profile pic"
            />
            <span>Bello Osagie</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
