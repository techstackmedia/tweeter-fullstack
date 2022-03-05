import "./Header.css";
import profilePic from "../../images/bello.jpeg";
import coverImages from "../../images/cover-image-demo.jpeg"

const Header = () => {
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
        <div className="header-coverImg">
          <img src={coverImages} alt="cover pic" />
        </div>
      </header>
    </>
  );
};

export default Header;
