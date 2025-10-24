import React from 'react';
import '../styles/pages/Lessons.css';

function Lessons() {
  const swiftLessons = [
    {
      title: 'Swift Basics',
      description: 'Variables, constants, data types, and operators',
      videoId: 'u0nQwxGZLW0',
      level: 'Beginner'
    },
    {
      title: 'Control Flow',
      description: 'If statements, loops, and conditional logic',
      videoId: 'Z8tDSqbSRuM',
      level: 'Beginner'
    },
    {
      title: 'Functions',
      description: 'Creating and using functions in Swift',
      videoId: 'Y0ciM09mBSI',
      level: 'Beginner'
    },
    {
      title: 'Collections',
      description: 'Arrays, dictionaries, and sets',
      videoId: '2H5vNvj-1RU',
      level: 'Intermediate'
    },
    {
      title: 'Structs',
      description: 'Creating custom data types with structures',
      videoId: 'ZeGjBySWsSk',
      level: 'Intermediate'
    },
    {
      title: 'Enums',
      description: 'Enumerations and pattern matching',
      videoId: 'mCpkD5pTmRA',
      level: 'Intermediate'
    }
  ];

  const webLessons = [
    {
      title: 'HTML Basics',
      description: 'Structure, tags, elements, and semantic HTML',
      videoId: 'PlAzCW5P5HQ',
      level: 'Beginner'
    },
    {
      title: 'CSS Basics',
      description: 'Selectors, properties, and styling fundamentals',
      videoId: 'pU2ZReknzhM',
      level: 'Beginner'
    },
    {
      title: 'Box Model',
      description: 'Understanding margins, padding, borders, and content',
      videoId: 'xNmvQ752z0Q',
      level: 'Beginner'
    },
    {
      title: 'Flexbox',
      description: 'Modern layout system for responsive designs',
      videoId: '-0JDE23WiNA',
      level: 'Intermediate'
    },
    {
      title: 'JavaScript Basics',
      description: 'Variables, functions, DOM manipulation, and events',
      videoId: '3mLnF_WTYHE',
      level: 'Intermediate'
    }
  ];

  return (
    <div className="lessons-page">
      <div className="page-header">
        <h1>Learning Hub</h1>
        <p>Reference materials for missed meetings or concept review</p>
      </div>

      <section className="lessons-section">
        <div className="lesson-category">
          <h2>Swift Development</h2>
          <p className="category-description">Learn to build iOS apps with Swift and SwiftUI</p>
          
          <div className="video-grid">
            {swiftLessons.map((lesson, index) => (
              <div key={index} className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                    title={lesson.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                  <span className={`lesson-level ${lesson.level.toLowerCase()}`}>{lesson.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lesson-category">
          <h2>Web Development</h2>
          <p className="category-description">Master the fundamentals of web development</p>
          
          <div className="video-grid">
            {webLessons.map((lesson, index) => (
              <div key={index} className="video-card">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                    title={lesson.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                  <span className={`lesson-level ${lesson.level.toLowerCase()}`}>{lesson.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resources-preview">
          <h2>Additional Resources</h2>
          <div className="resource-links">
            <a href="https://developer.apple.com/tutorials/swiftui" target="_blank" rel="noopener noreferrer" className="resource-link">
              Apple Developer Documentation
            </a>
            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
              W3Schools Web Tutorials
            </a>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer" className="resource-link">
              MDN Web Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lessons;
