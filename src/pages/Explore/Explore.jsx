import Navbar from "../../components/Navbar/Navbar";
import ExploreDashboard from "../../components/ExploreDashboard/ExploreDashboard";
import Feed from "../../components/Feed/Feed";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <Navbar />
      <div className="Explore">
        <div>
          <ExploreDashboard />
        </div>
        <div>
          <Input />
          <Feed />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
