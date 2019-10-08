import React from "react";
import { Link } from "react-router-dom";

// Components
import Login from "../Login";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Navbar
      </Link>
      <Login />
    </nav>
  );
};

export default Navbar;
