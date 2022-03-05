// import person from "../../images/person-add.svg";
import "./Info.css";
import UserImg from "../../images/emma.jpeg";

const Info = () => {
  return (
    <>
      <div className="info">
        <div className="header-info">
          <div>
            <img src={UserImg} alt="user pic" />
          </div>
          <div className="header-info-friends">
            <ul>
              <li>Daniel Jensen</li>
              <li>
                <strong>2,659</strong> <span>Following</span>
              </li>
              <li>
                <strong>10.8k</strong> <span>Followers</span>
              </li>
            </ul>
          </div>
          <div className="header-info-button">
            <button>
              {/* <img src={person} alt="default icon" width="12.83px" /> */}
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Info;
