import React, { useState } from 'react';
import '../styles/pages/Projects.css';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('app');

  const projectCategories = {
    app: {
      title: 'App Development',
      description: 'Build mobile and desktop applications',
      projects: [
        { name: 'iOS Weather App', difficulty: 'Beginner', languages: ['Swift'], link: 'https://developer.apple.com/tutorials/app-dev-training' },
        { name: 'To-Do List App', difficulty: 'Beginner', languages: ['Swift', 'React Native'], link: 'https://github.com/codecrafters-io/build-your-own-x' },
        { name: 'Calculator App', difficulty: 'Beginner', languages: ['Swift'], link: 'https://developer.apple.com/tutorials/swiftui' },
        { name: 'Chat Application', difficulty: 'Intermediate', languages: ['Swift', 'React Native'], link: 'https://github.com/codecrafters-io/build-your-own-x' },
        { name: 'Photo Gallery App', difficulty: 'Intermediate', languages: ['Swift'], link: 'https://developer.apple.com/tutorials/app-dev-training' },
        { name: 'Game with SpriteKit', difficulty: 'Advanced', languages: ['Swift'], link: 'https://developer.apple.com/spritekit/' },
        { name: 'Fitness Tracker', difficulty: 'Advanced', languages: ['Swift'], link: 'https://developer.apple.com/healthkit/' },
        { name: 'Music Player App', difficulty: 'Intermediate', languages: ['Swift'], link: 'https://developer.apple.com/documentation/avfoundation' }
      ]
    },
    web: {
      title: 'Web Development',
      description: 'Build websites, web apps, and web tools',
      projects: [
        { name: 'Personal Portfolio Website', difficulty: 'Beginner', languages: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/codecrafters-io/build-your-own-x' },
        { name: 'Build Your Own React', difficulty: 'Advanced', languages: ['JavaScript'], link: 'https://pomb.us/build-your-own-react/' },
        { name: 'Create a Web Server', difficulty: 'Intermediate', languages: ['Node.js', 'Python'], link: 'https://github.com/codecrafters-io/build-your-own-x#build-your-own-web-server' },
        { name: 'Discord Bot', difficulty: 'Beginner', languages: ['JavaScript', 'Python'], link: 'https://discordjs.guide/' },
        { name: 'Build a Static Site Generator', difficulty: 'Intermediate', languages: ['JavaScript', 'Python'], link: 'https://github.com/codecrafters-io/build-your-own-x#build-your-own-static-site-generator' },
        { name: 'E-commerce Website', difficulty: 'Advanced', languages: ['JavaScript', 'React'], link: 'https://github.com/codecrafters-io/build-your-own-x' },
        { name: 'Blog Platform', difficulty: 'Intermediate', languages: ['JavaScript', 'Node.js'], link: 'https://github.com/codecrafters-io/build-your-own-x' },
        { name: 'Build a Database', difficulty: 'Advanced', languages: ['Python', 'JavaScript'], link: 'https://cstack.github.io/db_tutorial/' },
        { name: 'Create Your Own Virtual DOM', difficulty: 'Advanced', languages: ['JavaScript'], link: 'https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060' },
        { name: 'Weather Dashboard', difficulty: 'Beginner', languages: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/codecrafters-io/build-your-own-x' }
      ]
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>Project Ideas</h1>
        <p>Utilize your skills to create amazing projects in second semester</p>
      </div>

      <section className="category-selector">
        <div className="category-buttons">
          {Object.keys(projectCategories).map((key) => (
            <button
              key={key}
              className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              {projectCategories[key].title}
            </button>
          ))}
        </div>
      </section>

      <section className="projects-display">
        <div className="category-info">
          <h2>{projectCategories[selectedCategory].title}</h2>
          <p>{projectCategories[selectedCategory].description}</p>
        </div>

        <div className="project-grid">
          {projectCategories[selectedCategory].projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className={`difficulty ${project.difficulty.toLowerCase()}`}>
                  {project.difficulty}
                </span>
              </div>
              <div className="project-languages">
                {project.languages.map((lang, i) => (
                  <span key={i} className="language-tag">{lang}</span>
                ))}
              </div>
              <div className="project-link-indicator">
                View Tutorial →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="more-projects">
        <h2>Want More Ideas?</h2>
        <p>Explore hundreds of additional "Build Your Own X" tutorials covering everything from operating systems to neural networks.</p>
        <a
          href="https://github.com/codecrafters-io/build-your-own-x"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View Full Repository on GitHub →
        </a>
      </section>
    </div>
  );
}

export default Projects;
