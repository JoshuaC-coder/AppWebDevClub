import React from 'react';
import '../styles/pages/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Join the Club</h1>
        <p>Get involved and start your coding journey with us</p>
      </div>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get Connected</h2>
          
          <div className="info-card">
            <h3>Email Us</h3>
            <p>montavistaappwebdev@gmail.com</p>
            <p className="info-description">Send us an email for any questions or inquiries</p>
          </div>

          <div className="info-card">
            <h3>Follow Us on Instagram</h3>
            <p><a href="https://instagram.com/mvappandwebdev" target="_blank" rel="noopener noreferrer">@mvappandwebdev</a></p>
            <p className="info-description">Stay updated with club activities and announcements</p>
          </div>

          <div className="info-card">
            <h3>Find Us</h3>
            <p>Every other Wednesday in room C205</p>
          </div>

          <div className="info-card meeting-schedule-card">
            <h3>Meeting Schedule 2025-2026</h3>
            <div className="schedule-compact">
              <div className="schedule-month-compact">
                <strong>October 2025:</strong> 10/8, 10/22
              </div>
              <div className="schedule-month-compact">
                <strong>November 2025:</strong> 11/12
              </div>
              <div className="schedule-month-compact">
                <strong>December 2025:</strong> 12/10
              </div>
              <div className="schedule-month-compact">
                <strong>January 2026:</strong> 1/14, 1/28
              </div>
              <div className="schedule-month-compact">
                <strong>February 2026:</strong> 2/11, 2/25
              </div>
              <div className="schedule-month-compact">
                <strong>March 2026:</strong> 3/11, 3/25
              </div>
              <div className="schedule-month-compact">
                <strong>April 2026:</strong> 4/8, 4/22
              </div>
              <div className="schedule-month-compact">
                <strong>May 2026:</strong> 5/20
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Join Our Club</h2>
          <p className="form-description">Fill out the form below to become a member</p>
          <div className="google-form-embed">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfwWJjI6CsL1LGnZ0uTCiguQHHCqylJ-THWd7nkx-Et20qOIQ/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Join Club Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
