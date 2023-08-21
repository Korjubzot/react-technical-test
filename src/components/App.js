import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";

const App = () => {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="App">
      <img
        className="main-logo"
        alt="NASA logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      ></img>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
};

export default App;
