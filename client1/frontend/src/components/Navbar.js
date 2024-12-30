import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Your App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/stray-animal-report">Stray Animal Report</Link>
        </li>
        <li>
          <Link to="/traffic-violation">Traffic Violation</Link>
        </li>
        <li>
          <Link to="/waste-management">Waste Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
