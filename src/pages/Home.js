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

      <section className="gallery-section">
        <div className="gallery-container">
          <h2>Our Community</h2>
          <p className="gallery-subtitle">See what we've been up to at club fairs and meetings</p>
          
          <div className="photo-grid">
            <div className="photo-card">
              <img src="/IMG_8961 2.JPG" alt="Club members at club fair" />
            </div>
            <div className="photo-card">
              <img src="/IMG_8985 2.JPG" alt="Club fair booth display" />
            </div>
            <div className="photo-card">
              <img src="/IMG_8999 2.JPG" alt="Student coding at club fair" />
            </div>
            <div className="photo-card">
              <img src="/IMG_9010.JPG" alt="Club members welcoming new students" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
