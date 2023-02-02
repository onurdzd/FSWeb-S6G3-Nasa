import React from "react";
import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <div className="App-header container">
      <div>
        <ReactSVG src="nasalogo.svg" />
      </div>
      <h1>Astronomy Picture of the Day</h1>
    </div>
  );
};

export default Header;
