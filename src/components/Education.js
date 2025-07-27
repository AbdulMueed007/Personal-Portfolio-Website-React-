import React from 'react';
import meta from '../images/meta.jpg';
import google from '../images/google.jpg';
import adobe from '../images/adobe.jpg';
import gct from '../images/certificate.jpg';
import umt from '../images/umt.png';
import als from '../images/als.png';

export default function Education() {
  return (
    <>
 <header className="intro-banner">
  <div className="intro-container">
        <h2>My Educational Journey</h2>
        <p>
          Here's a look at my academic background and certifications that shaped my technical foundation
          and creative thinking.
        </p>
        </div>
      </header>


    <main className="education-page">
      <section className="education-section">
        <h2 className="section-title">Academic <span>Education</span></h2>
        <p className="section-subtext">
          I’ve built a strong academic foundation in software and AI through formal education.
        </p>

        <div className="card-container">
          <div className="edu-card">
            <img src={als} alt="Matriculation" />
            <h3>Matriculation</h3>
            <p>American Lycetuff School System</p>
            <p className="edu-duration">2019 – 2021</p>
          </div>

          <div className="edu-card">
            <img src={gct} alt="Higher Secondary Education" />
            <h3>Higher Secondary Education</h3>
            <p>Goverment College Township Lahore</p>
            <p className="edu-duration">2021 – 2023</p>
          </div>

          <div className="edu-card">
            <img src={umt} alt="BSc Artificial Intelligence" />
            <h3>Bachelor of Science in Artificial Intelligence</h3>
            <p>University of Management and Technology</p>
            <p className="edu-duration">2023 – 2027</p>
          </div>
        </div>
      </section>

  
      <section className="education-section">
        <h2 className="section-title">Professional <span>Certifications</span></h2>

        {/* Certifications Intro Paragraph */}
        <p className="section-subtext">
          In addition to my degree, I’ve completed industry-recognized certifications that demonstrate
          hands-on expertise in areas like front-end development, UX design, and creative design.
          These credentials are a testament to my commitment to continuous learning and skill development.
        </p>

        <div className="card-container">
          <div className="edu-card">
            <img src={meta} alt="Meta Frontend Certificate" />
            <h3>Frontend Developer Certificate</h3>
            <p>Meta</p>
            <p className="edu-duration">July 2024 – June 2025</p>
          </div>

          <div className="edu-card">
            <img src={google} alt="Google UX Design Certificate" />
            <h3>UX Design Certificate</h3>
            <p>Google</p>
            <p className="edu-duration">July 2024 – June 2025</p>
          </div>

          <div className="edu-card">
            <img src={adobe} alt="Adobe Graphic Design Certificate" />
            <h3>Graphic Designer Certificate</h3>
            <p>Adobe</p>
            <p className="edu-duration">July 2024 – June 2025</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
