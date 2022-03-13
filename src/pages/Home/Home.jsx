import Navbar from "../../components/Navbar/Navbar";
import UserTweet from "../../components/UserTweet/UserTweet";
import Feed from "../../components/Feed/Feed";
import Trends from "../../components/Trends/Trends";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";
import NavbarBottom from "../../components/NavbarBottom/NavbarBottom";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <UserTweet />
      <div className="Home-Feed">
        <div className="Home-Feed-Down">
          <Feed />
        </div>
        <div className="trends-follow">
          <Trends />
          <br />
          <Follow />
        </div>
      </div>
      <NavbarBottom />
      <Footer />
    </>
  );
};

export default Home;
