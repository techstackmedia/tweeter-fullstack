import logo from "../../images/logo.svg";
import email from "../../images/email.svg";
import lock from "../../images/lock.svg";
import username from "../../images/username.svg";
import gender from "../../images/gender.svg";
import "../LoginForm/LoginForm.css";

const RegisterForm = () => {
  return (
    <section className="login">
      <div className="section--login">
        <div>
          <img className="icon" src={logo} alt="logo" /> devChallenges
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
              src={username}
              alt="username"
            />
          </div>
          <input
            className="login--input__email"
            type="name"
            placeholder="Username"
          />{" "}
          <br />
          <br />
          <div className="login--position__email">
            <img
              className="login--position--email__absolute"
              src={gender}
              alt="gender"
            />
          </div>
          <input
            className="login--input__email"
            type="name"
            placeholder="Gender"
          />{" "}
          <br />
          <br />
          <div className="login--position__email">
            <img
              className="login--position--email__absolute"
              src={email}
              alt="email"
            />
          </div>
          <input
            className="login--input__email"
            type="email"
            placeholder="Email"
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
          />
        </div>
        <div className="login--button">
          <button type="button" className="login--button__code">
            Start coding now
          </button>
        </div>
        <div className="continue--media">
          <p className="para--continue">
            or continue with these social profile
          </p>
        </div>
      </div>
      <div className="members--login">
        <div className="social--media__login">
          <i className="fab fa-google google__login login--icon__icons"></i>
          <i className="fab fa-twitter-square twitter__login login--icon__icons"></i>
          <i className="fab fa-facebook-square facebook__login login--icon__icons"></i>
          <i className="fab fa-github github__login login--icon__icons"></i>
        </div>
        <p>
          Already a member? <a href="/login">Login</a>
        </p>
      </div>
      <div className="login-footer">
        <div className="login-absolute">
          <p>
            created by <a href="#top">username</a>
          </p>
        </div>
        <div>
          <p>
            <a href="#top">devChallenges.io </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
