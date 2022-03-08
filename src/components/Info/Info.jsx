import person from "../../images/person-add.svg";
import "./Info.css";
import UserImg from "../../images/emma.jpeg";

const Info = () => {
  return (
    <div>
      <div className="info">
        <div className="header-info">
          <div>
            <img src={UserImg} alt="user's pix" />
          </div>
          <div className="header-info-userProfile">Daniel Jensen</div>
          <div>
            <strong className="header-info-userCount">2,569</strong>{" "}
            <span className="header-info-userFollow">Following</span>
          </div>
          <div>
            <strong className="header-info-userCount">10.8K</strong>{" "}
            <span className="header-info-userFollow">Followers</span>
          </div>
        </div>
        <div className="header-info-button">
          <button><img src={person} alt="default icon" width="12.83px" /> Follow</button>
        </div>
      </div>
    </div>
  );
};
export default Info;
