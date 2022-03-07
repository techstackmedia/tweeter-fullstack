import "./Header.css";
import coverImages from "../../images/cover-image-demo.jpeg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-coverImg">
          <img src={coverImages} alt="cover pic" />
        </div>
      </header>
    </>
  );
};

export default Header;
