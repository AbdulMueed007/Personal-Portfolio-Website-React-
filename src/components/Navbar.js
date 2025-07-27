import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar({ name }) {
  return (
    <nav className="navbar">
      <div className="logo">{name}</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li>
          <Link to="/contact" className="btn-contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
