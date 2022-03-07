import Navbar from "../../components/Navbar/Navbar";
import UserTweet from "../../components/UserTweet/UserTweet";
import Feed from "../../components/Feed/Feed";
import Trends from "../../components/Trends/Trends";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
