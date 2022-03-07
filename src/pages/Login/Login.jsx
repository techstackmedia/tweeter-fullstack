import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <LoginForm />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flexEnd",
          height: "100vh",
        }}
      >
        <Footer />
      </div>
    </>
  );
};
export default Login;
