import logo from "../../images/logo.svg";
import emailImg from "../../images/email.svg";
import lock from "../../images/lock.svg";
import "./LoginForm.css";

const Login = () => {
  return (
    <section className="login">
      <form className="section--login">
        <div className="section--brand">
          <img className="icon" src={logo} alt="logo" /> Tweeter
        </div>
        <div className="login--main">
          <h3>Join thousands of learners from around the world</h3>
        </div>
        <div>
          <p className="login-para">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>
        <div className="login--input">
          <div className="login--position__email">
            <img
              className="login--position--email__absolute"
              src={emailImg}
              alt="email"
            />
          </div>
          <input
            className="login--input__email"
            type="email"
            placeholder="Email"
            required
          />{" "}
          <br /> <br />
          <div className="login--position__lock">
            <img
              className="login--position--absolute__img"
              src={lock}
              alt="lock"
            />
          </div>
          <input
            className="login--input__password"
            type="password"
            placeholder="Password"
            required
            minLength="6"
          />
        </div>
        <div className="login--button">
          <button type="submit" className="login--button__code">
            Start coding now
          </button>
        </div>
        <div className="continue--media">
          <p className="para--continue">
            or continue with these social profile
          </p>
        </div>
      </form>
      <div className="members--login">
        <div className="social--media__login">
          <i className="fab fa-google google__login login--icon__icons"></i>
          <i className="fab fa-twitter-square twitter__login login--icon__icons"></i>
          <i className="fab fa-facebook-square facebook__login login--icon__icons"></i>
          <i className="fab fa-github github__login login--icon__icons"></i>
        </div>
        <p>
          Already a member? <a href="/register">Register</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
