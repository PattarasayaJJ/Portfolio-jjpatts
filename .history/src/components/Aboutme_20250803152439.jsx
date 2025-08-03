import React from 'react';
import '../aboutme.css';

export function Aboutme() {
  const skills = [
    { name: '#HTML', type: 'tool' },
    { name: '#CSS', type: 'tool' },
    { name: '#Javascript', type: 'tool' },
  ];

  const frame = [
    { name: '#Node.js', type: 'tool' },
    { name: '#Vue.js', type: 'tool' },
    { name: '#React', type: 'tool' },
    { name: '#React-native', type: 'tool' },
    { name: '#Bootstrap', type: 'tool' },
    { name: '#Tailwind', type: 'tool' },
  ];

  const database = [
    { name: '#MongoDB', type: 'tool' },
    { name: '#MySQL', type: 'tool' },
  ];

  const tools = [
    { name: '#Figma', type: 'tool' },
    { name: '#AdobeXD', type: 'tool' },
    { name: '#Git', type: 'tool' },
    { name: '#Power BI', type: 'tool' },
    { name: '#Postman', type: 'tool' },
    { name: '#cypress.io', type: 'tool' },
    { name: '#Google Sheets', type: 'tool' },
  ];

  const uxui = [
    { name: '#User Research', type: 'ux' },
    { name: '#Usability Testing', type: 'ux' },
    { name: '#Persona', type: 'ux' },
    { name: '#A/B Testing', type: 'ux' },
    { name: '#Wireframe', type: 'ux' },
    { name: '#Mockup', type: 'ux' },
    { name: '#Prototyping', type: 'ux' },
    { name: '#Interaction Design', type: 'ux' },
  ];

  const tester = [
    { name: '#Manual Testing', type: 'ux' },
    { name: '#Automated Testing', type: 'ux' },
  ];

  return (
    <div className="about-container">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">About Me</span>
      </nav>

      <div className="about-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="avatar-wrapper">
                <img
                  src="/nongjj.png"
                  alt="Profile"
                  className="avatar-img"
                />
              </div>
              <p className="email">jj.pattarasaya@gmail.com</p>
              
              <div className="social-icons">
                <a href="https://github.com/PattarasayaJJ" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src="https://github.githubassets.com/favicons/favicon.png" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-card">
            <h3 className="section-title">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="education-content">
              <h4 className="degree">Bachelor of Science (Information Technology)</h4>
              <p className="university">College of Computing, KhonKaen University</p>
              <p className="graduation">Graduated 2025 (2021–2025)</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-grid">
            {/* Programming Languages */}
            <div className="skill-category">
              <h3 className="category-title">
                <span className="gradient-text">Programming Languages</span>
              </h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="skill-category">
              <h3 className="category-title">
                <span className="gradient-text">Frameworks & Libraries</span>
              </h3>
              <div className="skills-list">
                {frame.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category">
              <h3 className="category-title">
                <span className="gradient-text">Databases</span>
              </h3>
              <div className="skills-list">
                {database.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h3 className="category-title">
                <span className="gradient-text">Tools</span>
              </h3>
              <div className="skills-list">
                {tools.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Testing */}
            <div className="skill-category">
              <h3 className="category-title">
                <span className="gradient-text">Software Testing</span>
              </h3>
              <div className="skills-list">
                {tester.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* UX/UI Design */}
            <div className="skill-category">
              <h3 className="category-title">
                <span className="gradient-text">UX/UI Design</span>
              </h3>
              <div className="skills-list">
                {uxui.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}