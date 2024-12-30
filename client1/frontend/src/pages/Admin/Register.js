import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <header className="register-header">
        <div className="logo-container">
          <h1 >Responsible Citizens</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/changes">Changes We Have Brought</Link></li>
          </ul>
        </nav>
      </header>

      <div className="register-content">
        <div className="register-form">
          <h2>Register</h2>
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
