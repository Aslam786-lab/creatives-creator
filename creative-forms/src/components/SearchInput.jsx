import React from "react";

export default function SearchInput({ searchItem, handleSearchText}) {
  return (
    <div className="search-input">
      <label htmlFor="search-input" className="search-input">
        title / subtitle:
      </label>
      <input
        type="text"
        placeholder="search across title and subtitle"
        id="search-input"
        value={searchItem.text}
        onChange={handleSearchText}
      />
    </div>
  );
}

