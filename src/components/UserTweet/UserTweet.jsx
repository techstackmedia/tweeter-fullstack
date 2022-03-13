import belloImg from "../../images/bello.jpeg";
import photo from "../../images/photo-alt.svg";
import world from "../../images/public-alt.svg";
import "./UserTweet.css";

const UserTweet = () => {
  return (
    <section className="tweet UserTweet">
      <div>Tweet something</div>
      <hr className="UserTweet-hr" />
      <div className="UserTweet-position">
        <img className="UserTweet-img" src={belloImg} alt="bello img" />
        <input className="UserTweet-input" placeholder="What's happening?" />
      </div>
      <div className="UserTweet-reply">
        <div className="tweet-users">
          <img src={photo} alt="pic icon" />
          <img src={world} alt="public pic" />
          <span>Everyone can reply</span>
        </div>
        <button>Tweet</button>
      </div>
    </section>
  );
};
export default UserTweet;
