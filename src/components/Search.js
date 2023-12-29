import React, { useState } from "react";
import "../styles/Search.css";

const Search = ({ onSearch, onReset }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCity(inputValue);
    onSearch(inputValue);
  };

  const handleReset = () => {
    setCity("");
    onReset();
  };

  return (
    <form className="search-container">
      <input
        type="text"
        placeholder="Sök efter stad"
        value={city}
        onChange={handleInputChange}
        className="search-input"
      />
      <div id="imgcontainer">
        <button type="button" onClick={handleReset} className="search-reset">
          <img src="./images/search_icon.png" alt="Rensa" />
        </button>
      </div>
    </form>
  );
};

export default Search;
