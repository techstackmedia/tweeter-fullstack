import image from "../../images/emma.jpeg";
import coverImage from "../../images/cover-image-demo.jpeg";
import coverImg from "../../images/cover-img.jpeg";
import soares from "../../images/soares.jpeg";
import "./Follow.css";

const Follow = () => {
  return (
    <>
      <div className="feed-dashboard trends follow">
        <ul>
          <li className="trend-item title">
            <span>Who to Follow</span> <br />
            <hr />
          </li>

          <li className="trend-item trend-item-position follow-position">
            <div style={{ display: "inlineFlex" }}>
              <div className="follow-position-between">
                <div>
                  <img src={image} alt="user pic" />
                </div>
                <div>
                  <h3 className="follow-user-name">Mikael Stanley</h3>

                  <span>
                    <small style={{ fontSize: "12px" }}>230k followers</small>
                  </span>
                </div>

                <div>
                  <button className="follow-button">Follow</button>
                </div>
              </div>
              <div>
                <span className="follow-bio">
                  <p>
                    Photographer &amp; Filmmaker based in Copenhagen, Denmark ✵
                    🇩🇰
                  </p>
                </span>
              </div>
              <img
                className="follow-user-img"
                src={coverImage}
                alt="user cover pic"
              />
            </div>
          </li>

          <hr style={{ width: "90%", margin: "auto" }} />
          <li className="trend-item trend-item-position follow-position">
            <div style={{ display: "inlineFlex" }}>
              <div className="follow-position-between">
                <div>
                  <img src={soares} alt="user pic" />
                </div>
                <div>
                  <h3 className="follow-user-name">Austin Neill</h3>

                  <span>
                    <small style={{ fontSize: "12px" }}>120k followers</small>
                  </span>
                </div>

                <div>
                  <button className="follow-button">Follow</button>
                </div>
              </div>
              <div>
                <span className="follow-bio">
                  <p>
                    Photographer &amp; Filmmak
                    🇩🇰
                  </p>
                </span>
              </div>
              <img
                className="follow-user-img"
                src={coverImg}
                alt="user cover pic"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Follow;
