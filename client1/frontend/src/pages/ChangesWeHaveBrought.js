import React from "react";
import { Link } from "react-router-dom";

const ChangesWeHaveBrought = () => {
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
        <h2>Changes We Have Brought</h2>
        <p>At CodingNepal, we have revolutionized the way tutorials are presented. We believe in simplicity, effectiveness, and clarity, ensuring every tutorial is easy to follow and implement. Our goal is to bring coding knowledge to everyone, no matter their skill level.</p>
      </div>
    </div>
  );
};

export default ChangesWeHaveBrought;
