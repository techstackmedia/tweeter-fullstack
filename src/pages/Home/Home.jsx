import Navbar from "../../components/Navbar/Navbar";
import UserTweet from "../../components/UserTweet/UserTweet";
import Feed from "../../components/Feed/Feed";
import Trends from "../../components/Trends/Trends";
import Follow from "../../components/Follow/Follow";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <UserTweet />
      <div className="Home-Feed">
        <div>
          <Feed />
        </div>
        <div>
          <Trends />
          <br />
          <br />
          <Follow />
        </div>
      </div>
    </>
  );
};

export default Home;
