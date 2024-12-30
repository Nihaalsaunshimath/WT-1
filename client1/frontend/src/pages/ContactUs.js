import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at:</p>
        <p>Email: contact@codingnepal.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
