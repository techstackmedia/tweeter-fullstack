import image from "../../images/emma.jpeg";

const Follow = () => {
  return (
    <>
      <div className="feed-dashboard trends follow">
        <ul>
          <li className="trend-item title">
            <span>Who to Follow</span> <br />
            <hr />
          </li>
          <li className="trend-item">
            <img /> <br />
            <span>
              <small>213k Tweets</small>
            </span>
          </li>
          <li className="trend-item">
            <strong>#learntocode</strong> <br />
            <span>
              <small>1k Tweets</small>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Follow;
