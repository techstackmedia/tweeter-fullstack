import Navbar from "../../components/Navbar/Navbar";
import ExploreDashboard from "../../components/ExploreDashboard/ExploreDashboard";
import Feed from "../../components/Feed/Feed";
import Input from "../../components/Input/Input";
import NavbarBottom from "../../components/NavbarBottom/NavbarBottom";
import Footer from "../../components/Footer/Footer";
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <Navbar />
      <Input />
      <div>
        <div className="Explore">
          <ExploreDashboard />
          <Feed />
        </div>
      </div>
      <NavbarBottom />
      <Footer />
    </>
  );
};

export default Explore;
