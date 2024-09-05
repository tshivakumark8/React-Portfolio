import React from "react";

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-text">
        <h1>I'm Shiva Kumar</h1>
        <p>Front-End Developer</p>
        <p>Turning Ideas Into Interactive Reality</p>
        <div className="social-icons">
          <button className="btn">
            <a href="https://github.com/" target="_blank"><i className="bi bi-github"></i></a>
          </button>
          <button className="btn">
            <a href="https://www.linkedin.com/feed/" target="_blank"><i className="bi bi-linkedin"></i></a>
          </button>
          <button className="btn">
            <a href="#"><i className="bi bi-twitter"></i></a>
          </button>
        </div>
      </div>
      <div className="intro-image">
        <img src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg" alt="Mobile illustration" />
      </div>
    </section>
  );
};

export default IntroSection;
