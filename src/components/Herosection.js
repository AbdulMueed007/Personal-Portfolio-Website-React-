import React from "react";
import "../App.css";
import profile from "../images/profile.jpg";
import { Link } from "react-router-dom";
import instagram from "../images/instagram2.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github2.png";

export default function Herosection() {
  return (
    <>
    <section className="intro-banner">
        <div className="intro-container">
          <h2>"Building interfaces that connect people and ideas".</h2>
          <p>
           I create fast, accessible, and engaging websites that put people first and bring ideas to life.
          </p>
        </div>
      </section>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image-wrapper">
            <img
              src={profile}
              alt="Abdul Mueed Khan"
              className="hero-profile-img"
            />
          </div>

          <div className="hero-text-content">
            <h3 className="hero-subtitle">Hello, I'm</h3>
            <h1 className="hero-title">Abdul Mueed Khan</h1>
            <h2 className="hero-role">
              And I'm currently a{" "}
              <span className="highlight">Frontend Engineer</span>
            </h2>
            <p className="hero-description">
              A creative developer and designer who is passionate about creating
              responsive designs, bringing imagination to life, and most
              importantly being there when you need me.
            </p>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/abdul-mueed-khan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/AbdulMueed007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/pov._.mueed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </div>

            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
     
        <section className="quick-snapshot">
        <div className="snapshot-container">
          <h2 className="section-title">Quick Snapshot</h2>
          <div className="snapshot-grid">
            <div>
              <h3>Who I Am</h3>
              <p>
                A frontend engineer with a passion for clean design and seamless
                user experience.
              </p>
            </div>
            <div>
              <h3>What I Use</h3>
              <p>Html, CSS & Tailwind, React, Git/GitHub, VS Code, Figma, Adobe.</p>
            </div>
            <div>
              <h3>What I Build</h3>
              <p>
                Responsive websites, personal dashboards, portfolios, landing
                pages, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
       

    </>
  );
}
