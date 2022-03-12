import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/ExploreDashboard/ExploreDashboard";
import Feed from "../../components/Feed/Feed";
import NavbarBottom from "../../components/NavbarBottom/NavbarBottom";
import Footer from "../../components/Footer/Footer";
// import axios from "axios";

const Bookmarks = () => {
  // async function getUser() {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/users/621bf5f424c70962fda999cf"
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getUser();

  return (
    <>
      <Navbar />
      <div className="dash" style={{ marginTop: "20px" }}>
        <div className="dash-div" style={{ position: "relative", top: "30px" }}>
          <Dashboard />
        </div>
        <Feed />
      </div>
      <NavbarBottom />
      <Footer />
    </>
  );
};

export default Bookmarks;
