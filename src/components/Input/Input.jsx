import "./Input.css";
import search from "../../images/search.svg";
const Input = () => {
  return (
    <section className="tweet inputTop">
      <img src={search} alt="search icon" />
      <input className="input-explore" placeholder="Search" />
      <button>Search</button>
    </section>
  );
};

export default Input;