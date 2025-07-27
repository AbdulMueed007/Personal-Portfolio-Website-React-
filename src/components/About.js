import React from 'react';
import profile from '../images/profile.jpg';
import instagram from "../images/instagram2.png";
import linkedin from "../images/linkedin.png";
import adobe from '../images/adobe.jpg';
import github from "../images/github2.png";

import '../App.css';

export default function About() {
  return (
    <>
    <header className="intro-banner">
  <div className="intro-container">
    <h2>About Me</h2>
    <p>
      I'm a passionate developer driven by curiosity and creativity. From building clean user interfaces
      to solving real-world problems with code, my journey reflects a strong commitment to continuous learning
      and delivering value through technology. Let’s explore what makes my work stand out.
    </p>
  </div>
</header>

   
    <section className="about-section">
      <div className="about-wrapper">
        
       
        <div className="social-top-right">
          <a href="https://www.linkedin.com/in/abdul-mueed-khan/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/AbdulMueed007" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/pov._.mueed/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>

        <div className="about-content">
        
          <div className="about-text">
        
            <h2>AI Powered Front End Engineer</h2>

            <div className="about-block">
              <h4>Professional Summary</h4>
              <p>
                I bring together front-end design and full-stack development skills
                with a strong grasp of performance optimization, accessibility, and
                responsive UI. I've contributed to several freelance and academic
                projects using React, Tailwind, JavaScript, MySQL, and Git.
              </p>
            </div>

            <div className="about-block">
              <h4>Educational Background</h4>
              <p>
                Currently pursuing a Bachelor's degree in Computer Science, where I’ve
                built a solid foundation in software engineering, algorithms, and data
                structures.
              </p>
            </div>

            <div className="about-block">
              <h4>Interests</h4>
              <p>
                Deeply interested in cutting-edge tech like Artificial Intelligence,
                Machine Learning, and Generative AI. I enjoy exploring how these can
                transform user interfaces and digital experiences.
              </p>
            </div>

            <div className="about-block future-vision">
              <h4>Future Vision</h4>
              <p>
                My ultimate goal is to work at a global tech company like{" "}
                <img src={adobe} alt="Adobe" className="inline-icon" />
                <strong> Adobe</strong>, where creativity and engineering meet to
                innovate for millions of users worldwide.
              </p>
            </div>

            <div className="about-block">
              <h4>Hobbies</h4>
              <p>
                Outside of tech, I enjoy going to the gym, gaming, and staying updated
                with design trends and UI/UX innovations.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="about-image">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
     </>
  );
}
