import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/ExploreDashboard/ExploreDashboard";
import Feed from "../../components/Feed/Feed";
import Footer from "../../components/Footer/Footer";

const Bookmarks = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <div style={{ position: "relative", top: "30px" }}>
          <Dashboard />
        </div>
        <Feed />
      </div>

      <Footer />
    </>
  );
};

export default Bookmarks;