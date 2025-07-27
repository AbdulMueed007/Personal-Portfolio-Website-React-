import React from 'react';
import aiImage from '../images/AI.jpg'; // adjust the path if needed
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <>
    <header className="intro-banner">
  <div className="intro-container">
    <h2>My Project Showcase</h2>
    <p>
      Dive into a curated collection of real-world projects that reflect my passion for building
      interactive interfaces, solving problems with code, and crafting seamless digital experiences.
      Each project highlights my growth as a developer and my drive to deliver impactful solutions.
    </p>
  </div>
</header>

<section className="services-section">
  <h2>
    My <span>Projects</span>
  </h2>

  <div className="services-container">
    {/* Project 1: BioShine Website */}
    <div className="service-card">
      <img src={aiImage} alt="BioShine Website" />
      <h3>BioShine</h3>
      <p>
        A modern website for an urban cleaning company based in the Netherlands. Offers services like residential and commercial cleaning with intuitive UI.
      </p>
      <p><strong>Tech:</strong> HTML, Tailwind CSS, JavaScript</p>
      <a
        href="https://bioshine.nl"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </div>

    {/* Project 2: Crypto Tracker */}
    <div className="service-card">
      <img src={aiImage} alt="Crypto Currency Tracker" />
      <h3>Crypto Tracker</h3>
      <p>
        Real-time cryptocurrency dashboard using CoinGecko API. View live charts, coin stats, and auto-refresh data for latest updates.
      </p>
      <p><strong>Tech:</strong> SQL Server, Node.js, HTML, CSS</p>
      <a
        href="https://bioshine.nl/crypto.html"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>

    {/* Project 3: AI Resume Analyzer (Imagined Project) */}
    <div className="service-card">
      <img src={aiImage} alt="AI Resume Analyzer" />
      <h3>AI Resume Analyzer</h3>
      <p>
        A web tool that uses NLP and ML models to analyze resumes against job descriptions, scoring and highlighting key matches in seconds.
      </p>
      <p><strong>Tech:</strong> React, Python (Flask), OpenAI API</p>
      <Link
        to="/project"
        className="btn"
      >
        View on GitHub
      </Link>
    </div>
  </div>
</section>

    </>
  );
}
