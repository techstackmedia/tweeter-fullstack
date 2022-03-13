import "./Trends.css";

const Trends = () => {
  return (
    <section>
      <div className="feed-dashboard trends">
        <ul>
          <li className="trend-item title">
            <span>Trends for you</span> <br />
            <hr />
          </li>
          <li className="trend-item">
            <strong>#programming</strong> <br />
            <span>
              <small>213k Tweets</small>
            </span>
          </li>
          <li className="trend-item">
            <strong>#devchallenges</strong> <br />
            <span>
              <small>123k Tweets</small>
            </span>
          </li>
          <li className="trend-item">
            <strong>#frontend</strong> <br />
            <span>
              <small>34k Tweets</small>
            </span>
          </li>
          <li className="trend-item">
            <strong>#helsinki</strong> <br />
            <span>
              <small>11k Tweets</small>
            </span>
          </li>
          <li className="trend-item">
            <strong>#100DaysOfCode</strong> <br />
            <span>
              <small>5k Tweets</small>
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
    </section>
  );
};

export default Trends;
