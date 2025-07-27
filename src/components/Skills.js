import React from 'react';
import python from '../images/python.png';
import c from '../images/c.png';
import javascript from '../images/js.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/rs.png';
import tailwind from '../images/tailwind.png';
import sql from '../images/sql.png'; // You can add this icon if missing

export default function Skills() {
  const skills = [
    {
      name: 'Python',
      desc: 'A powerful, high-level programming language known for its simplicity and wide range of applications from web development to AI.',
      img: python,
    },
    {
      name: 'C++',
      desc: 'A fast and efficient programming language used for system/software development and performance-critical applications.',
      img: c,
    },
    {
      name: 'JavaScript',
      desc: 'A dynamic scripting language that enables interactive web features and powers most frontend web apps.',
      img: javascript,
    },
    {
      name: 'HTML',
      desc: 'The standard markup language used to structure and display content on the web.',
      img: html,
    },
    {
      name: 'CSS',
      desc: 'A stylesheet language used to design and visually style HTML elements on webpages.',
      img: css,
    },
    {
      name: 'React',
      desc: 'A JavaScript library for building fast and reusable user interfaces, developed by Meta.',
      img: react,
    },
    {
      name: 'Tailwind CSS',
      desc: 'A utility-first CSS framework that lets you build modern websites rapidly with less code.',
      img: tailwind,
    },
    {
      name: 'SQL Server',
      desc: 'A Microsoft-developed relational database system used for storing and retrieving data efficiently in enterprise-grade applications.',
      img: sql,
    },
  ];

  return (
    <>
      <header className="intro-banner">
        <div className="intro-container">
          <h2>My <span>Skills</span></h2>
          <p>
            Throughout my journey in tech, I've gained experience in a variety of programming languages,
            tools, and frameworks that enable me to build scalable, user-friendly applications.
          </p>
        </div>
      </header>

      <div className="skills-page">
        <section className="skills-section">
          <h2 className="section-title">Technical <span>Expertise</span></h2>
          <p className="section-subtext">
            These are some of the core technologies and tools I've worked with in web development, software engineering,
            and artificial intelligence.
          </p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.img} alt={`${skill.name} Icon`} />
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
