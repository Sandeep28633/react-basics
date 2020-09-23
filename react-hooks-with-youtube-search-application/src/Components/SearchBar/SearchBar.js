import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit(term);
  };
  return (
    <div className="Search-Bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>video Search</label>
          <input
            className="searchBox"
            value={term}
            type="text"
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
