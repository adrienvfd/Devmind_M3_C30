import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/home">Home</Link>
      <Link to="/repos">Repositories</Link>
      <Link to="/about">About</Link>
    </nav>

  );
};

export default NavBar;
