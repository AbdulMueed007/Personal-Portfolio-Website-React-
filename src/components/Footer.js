import React from 'react';
import '../App.css';
import githubIcon from '../images/github2.png';
import linkedinIcon from '../images/linkedin.png';
import emailIcon from '../images/gmail.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Abdul Mueed Khan. All Rights Reserved.
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/AbdulMueed007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-mueed-khan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="mailto:mueeda581@gmail.com">
            <img src={emailIcon} alt="Email" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
