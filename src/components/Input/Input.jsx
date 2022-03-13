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

/*
// import { useState } from "react";
import search from "../../images/search.svg";
import "./Input.css";
const Input = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const searchTermHandler = (e) => {
  //   setSearchTerm((prevSearchTerm) => {
  //     prevSearchTerm = e.target.value;
  //   });
  // };

  return (
    <div className="tweet inputTop">
      <img src={search} alt="search icon" />

      <input
        className="input-explore"
        placeholder="Search"
        value={searchTerm}
        onChange={searchTermHandler}
      />

      <button>Search</button>
    </div>
  );
};

export default Input;

*/