import danImg from "../../images/dan.jpeg";
import belloImg from "../../images/bello.jpeg";
import platon from "../../images/platon.jpeg";
import photo from "../../images/photo.svg";
import repeat from "../../images/repeat.svg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import bookmark from "../../images/bookmark.svg";
import usulaImg from "../../images/ursula.jpeg";

import "./Feed.css";

const Feed = () => {
  return (
    <>
      <main>
        <div className="tweet">
          <div className="person-retweet">
            <img
              className="person-retweet-img"
              style={{
                width: "16px",
                height: "16px",
                position: "relative",
                paddingRight: "5px",
                top: "5px",
              }}
              src={repeat}
              alt="retweet pic"
            />
            <span>Daniel Lyons Retweeted</span>
          </div>
          <img src={danImg} alt="dan pic" />
          <div className="person-history">
            <span>Daniel Lyons</span> <br />
            <span className="date">24 August at 20:43 </span>
          </div>
          <div className="message">
            Traveling &#8211; it leaves you speechless, then turns you into a
            storyteller.
          </div>
          <div className="feed-image-posts">
            <img className="image-post" src={platon} alt="pic post" />
          </div>
          <div className="tweets-checks">
            <div className="comments-count">449 Comments</div>
            <div className="retweet-counts">59k Retweets</div>
            <div className="saved-count">234 Saved</div>
          </div>
          <hr />
          <div className="tweet-post-icons">
            <div className="post-icon">
              <img src={comment} alt="comment" /> <span>Comments</span>
            </div>
            <div className="post-icon">
              <img src={repeat} alt="repeat" />
              <span>Retweets</span>
            </div>
            <div className="post-icon">
              <img src={love} alt="love" />
              <span>Likes</span>
            </div>
            <div className="post-icon">
              <img src={bookmark} alt="love" />
              <span>Saved</span>
            </div>
          </div>
          <hr />
          <div className="tweets-reply">
            <img src={belloImg} alt="bello's pic" />
            <input
              className="input"
              type="text"
              placeholder="Tweet your reply"
            />
            <div style={{ position: "relative" }}>
              <img
                style={{
                  position: "absolute",
                  zIndex: 3,
                  width: "25px",
                  height: "20px",
                  cursor: "pointer",
                  bottom: "-2px",
                  right: "15px",
                }}
                src={photo}
                alt="post pic"
              />
            </div>
          </div>
          <hr />
          <div className="tweets-reply">
            <img
              className="tweets-reply-img"
              src={usulaImg}
              alt="bello's pic"
            />
            <div className="tweets-reply-msg">
              <div>
                <span className="tweet-reply-user">Waqar Bloom</span>{" "}
                <span className="date">24 August at 20:43 </span>
              </div>
              <span className="tweet-reply-user-chat">
                I've seen awe-inspiring things that I thought I'd never be able
                to explain to another person.
              </span>
            </div>
            <div style={{ position: "relative" }}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
