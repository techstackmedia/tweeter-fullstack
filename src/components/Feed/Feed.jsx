import danImg from "../../images/dan.jpeg";
import belloImg from "../../images/bello.jpeg";
import platon from "../../images/platon.jpeg";
import photo from "../../images/photo.svg";
import repeat from "../../images/repeat.svg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import bookmark from "../../images/bookmark.svg";

import "./Feed.css";

const Feed = () => {
  return (
    <>
      <main>
        <div className="feed-dashboard">
          <ul>
            <li className="active">Tweets</li>
            <li>Tweets &amp; replies</li>
            <li>Media</li>
            <li>Likes</li>
          </ul>
        </div>
        <div className="tweet">
          <div className="person-retweet">
            <img
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
              <img src={comment} alt="comment" /> Comments
            </div>
            <div className="post-icon">
              <img src={repeat} alt="repeat" />
              Retweets
            </div>
            <div className="post-icon">
              <img src={love} alt="love" />
              Likes
            </div>
            <div className="post-icon">
              <img src={bookmark} alt="love" />
              Saved
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
                  right: "30px",
                  width: "25px",
                  height: "20px",
                  bottom: "-10px",
                  cursor: "pointer",
                }}
                src={photo}
                alt="post pic"
              />
            </div>
            {/* <ImageIcon /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
