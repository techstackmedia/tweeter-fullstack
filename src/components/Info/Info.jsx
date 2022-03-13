import person from "../../images/person-add.svg";
import "./Info.css";
import UserImg from "../../images/emma.jpeg";

const Info = () => {
  return (
    <section>
      <div className="info">
        <div className="header-info">
          <div>
            <div>
              <img src={UserImg} alt="user's pix" />
              {/* <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Photographer &amp; Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
              </p> */}
            </div>
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
          <button>
            <img src={person} alt="default icon" width="12.83px" /> Follow
          </button>
        </div>
      </div>
    </section>
  );
};
export default Info;
