import React from "react";
import { NavLink, Link } from "react-router-dom";

// Components

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <NavLink to="/profile" className="btn btn-success my-2 my-sm-0">
        Profile
      </NavLink>
      <Link to="/schoollist" className="btn btn-success my-2 my-sm-0">
        School List
      </Link>
    </nav>
  );
};

export default Navbar;
