import React from "react";

const Search = ({ handleSearch, searchInput }) => {
  return (
    <div class="form-row search-container">
      <div class="col-md-4 col-sm-5">
        <input
          className="form-control"
          type="text"
          onChange={handleSearch}
          placeholder="Search..."
          value={searchInput}
        />
      </div>
    </div>
  );
};

export default Search;
