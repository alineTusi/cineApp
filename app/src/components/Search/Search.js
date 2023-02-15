import * as React from "react";

export default function SearchBar({ searchChange }) {
  return (
    <div id="search_bar">
      <label>Search Movie</label>
      <input type="text" onChange={searchChange} placeholder="Search..." />
    </div>
  );
}
