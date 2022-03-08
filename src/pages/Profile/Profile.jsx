import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Dashboard from "../../components/Dashboard/Dashboard";
import Feed from "../../components/Feed/Feed";
import Footer from "../../components/Footer/Footer";
import NavbarBottom from "../../components/NavbarBottom/NavbarBottom";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <div className="dash">
        <Dashboard />
        <Feed />
      </div>
      <Footer />
      <NavbarBottom />
    </>
  );
}

export default Profile;
