import "./Input.css";
import search from "../../images/search.svg";
const Input = () => {
  return (
    <div className="tweet inputTop">
      <img src={search} alt="search icon" />
      <input className="input-explore" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default Input;
