import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <header>
        <h1>CodingNepal</h1>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/changes">Changes We Have Brought</Link></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h2>About Us</h2>
        <p>Welcome to CodingNepal, your hub for everything related to coding tutorials, web development, and much more. Our team is dedicated to bringing you the latest and best resources to help you grow as a developer.</p>
      </div>
    </div>
  );
};

export default AboutUs;
