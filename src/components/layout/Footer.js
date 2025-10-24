import React from 'react';
import '../../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>App & Web Development Club</h3>
            <p>Learning to build apps and websites through coding and collaboration.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/lessons">Lessons</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Email: montavistaappwebdev@gmail.com</p>
            <p>Instagram: @mvappandwebdev</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 App & Web Dev Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
