import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="feed-dashboard">
        <ul>
          <li className="active">Tweets</li>
          <li>Tweets &amp; replies</li>
          <li>Media</li>
          <li>Likes</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
