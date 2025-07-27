import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <>
      {/* Intro Banner */}
      <section className="intro-banner">
        <div className="intro-container">
          <h2 className="contact-heading">
            Let’s <span>Connect</span>
          </h2>
          <p className="contact-subtext">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you're a client,
            recruiter, or fellow developer — feel free to get in touch!
          </p>
        </div>
      </section>

  
      <div className="contact-container">
        <section className="contact-form-section">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                autoComplete="name"
                aria-label="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                aria-label="Email"
              />
            </div>

      
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Reason for contacting"
                autoComplete="off"
                aria-label="Subject"
              />
            </div>

    
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                aria-label="Message"
              ></textarea>
            </div>

            <div className="button-group">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
              <button type="reset" className="btn-outline">
                Clear
              </button>
            </div>

            <p className="privacy-note">
              <small>
                * Your information will only be used to respond to your inquiry.
              </small>
            </p>

           
        
          </form>
        </section>
      </div>
    </>
  );
}
