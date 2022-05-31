import React from "react";
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
  return (
    <div className="box">
        <input
            className="ba b--green bg-lightest-blue"
            type="search"
            placeholder="Search Robots"
            onChange={searchChange}
        />
    </div>
  );
}

export default SearchBox;