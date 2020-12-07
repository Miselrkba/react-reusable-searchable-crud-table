import React from 'react'

const Search = ({handleSearch, searchInput}) => {
    return (
        <input
        type="text"
        onChange={handleSearch}
        placeholder="Search..."
        value={searchInput}
      />
    )
}

export default Search
