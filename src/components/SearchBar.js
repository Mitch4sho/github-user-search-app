import React from "react";
import "../styles/searchBar.css";
import MagnifyGlass from "../assets/icon-search.svg";

const SearchBar = ({
  onSearch,
  userNotFound,
  currentUsername,
  setUsername,
}) => {
  return (
    <div className="search-bar">
      <form>
        <div className="search-box-container">
          <img
            className="magnify-glass"
            src={MagnifyGlass}
            alt="magnify-glass"
          />
          <input
            className="search-box"
            type="text"
            placeholder="Search Github username..."
            name="searchbox"
            value={currentUsername}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="button-container">
          {userNotFound ? <p className="no-results">No results</p> : ""}
          <button
            className="search-button"
            onClick={(e) => {
              onSearch(e, currentUsername);
              setUsername("");
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;