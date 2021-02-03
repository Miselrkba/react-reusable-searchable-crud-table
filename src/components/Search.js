import React from 'react';

const Search = ({ filterText, onFilterTextChange }) => {
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className="form-row search-container">
      <div className="col-md-4 col-sm-5">
        <input
          className="form-control"
          type="text"
          onChange={handleFilterTextChange}
          placeholder="Search by Last name"
          value={filterText}
        />
      </div>
    </div>
  );
};

export default Search;
