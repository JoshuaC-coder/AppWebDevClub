import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to App & Web Development Club</h1>
          <p className="hero-subtitle">
            We learn to build apps and websites using Swift, HTML, CSS, and JavaScript.
          </p>
          <p className="hero-description">
            Empowering Monta Vista students for 15+ years through hands-on coding and collaborative learning. 
            Join us to build amazing projects and grow your skills together.
          </p>
          <Link to="/contact" className="cta-button">Join the Club</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
