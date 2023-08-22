import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <div className="search-results-container">
      <p>Search Results</p>
      {results.map((result, index) => {
        return (
          <img
            key={index}
            className="search-results"
            src={result}
            alt="space-pic"
          ></img>
        );
      })}
    </div>
  );
};

export default SearchResults;
