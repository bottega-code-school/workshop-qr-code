import * as React from "react";

const logo = require("../../static/assets/images/logo.png");

const NavBar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default NavBar;
