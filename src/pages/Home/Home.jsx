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
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Feed />
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "auto",
          }}
        >
          <Trends />
          <div style={{ marginTop: "30px" }}></div>
          <Follow />
        </div>
      </div>
    </>
  );
};

export default Home;
