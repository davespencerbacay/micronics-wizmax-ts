import React from "react";
import "./SearchBarDesktop.scss";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBarDesktop: React.FC = () => {
  return (
    <div className="searchbar-container">
      <span className="searchbar">
        <input type="text" />
        <FontAwesomeIcon className="search-reset-btn" icon={faX} />
      </span>
    </div>
  );
};

export default SearchBarDesktop;
