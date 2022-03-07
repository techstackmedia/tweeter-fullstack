import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Dashboard from "../../components/Dashboard/Dashboard";
import Feed from "../../components/Feed/Feed";
import Footer from "../../components/Footer/Footer";

function Profile() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Dashboard />
        <Feed />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
