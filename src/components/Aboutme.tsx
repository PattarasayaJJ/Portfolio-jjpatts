import React from 'react';
import '../aboutme.css';

export function Aboutme() {
  const skills = [
    { name: '#User Research', type: 'ux' },
    { name: '#Usability Testing', type: 'ux' },
    { name: '#Persona', type: 'ux' },
    { name: '#A/B Testing', type: 'ux' },
    { name: '#Wireframe', type: 'ux' },
    { name: '#Mockup', type: 'ux' },
    { name: '#Prototyping', type: 'ux' },
    { name: '#Visual Design', type: 'ux' },
    { name: '#Interaction Design', type: 'ux' },
    { name: '#Design System', type: 'ux' },
    { name: '#Manual Testing', type: 'ux' },
    { name: '#Automated Testing ', type: 'ux' },
    { name: '#Figma', type: 'tool' },
    { name: '#Adobe XD', type: 'tool' },
    { name: '#Power BI', type: 'tool' },
    { name: '#Postman', type: 'tool' },
    { name: '#cypress.io', type: 'tool' },
    { name: '#Google Sheets', type: 'tool' },
    { name: '#Git', type: 'tool' },
    { name: '#HTML', type: 'tool' },
    { name: '#CSS', type: 'tool' },
    { name: '#React', type: 'tool' },
    { name: '#React-native', type: 'tool' },
    { name: '#MongoDB', type: 'tool' },
    { name: '#Node.js', type: 'tool' },

  ];

  const softSkills = ['#Team Collaboration', '#Time Management ', '#Continuous Learning'];

  return (
    <div className="about-container">
            <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">About Me</span>
      </nav>

      
      <div className="about-columns">
        <div className="profile-column">
          
          <div className="profile-card">
            
            
            
            <div className="profile-top">
              <div className="avatar-wrapper">
                <img
                  src="/jejey.png"
                  alt="Profile"
                />
              </div>
              <p className="email">jj.pattarasaya@gmail.com</p>
              <div className="social-icons">
  <a href="https://github.com/PattarasayaJJ" target="_blank" rel="noopener noreferrer">
  <img src="https://github.githubassets.com/favicons/favicon.png" alt="GitHub" />

  </a>
</div>

            </div>
            <div className="profile-bio">
              
              <p className="name">Miss Pattarasaya Srisanga (JJ)</p>
              <p className="name" >Bachelor of Science in Information Technology</p>
              <p className="name" >
              College of Computing, Khon Kaen University — Graduated 2025 (2021 – 2025)
              </p>

            </div>


            
          </div>


          
         
        </div>

        <div className="skills-column">

          <div className="skills-card">

            <div className="section-title gradient-text">Skills</div>

            <div className="skills-list">

              {skills.map((skill, index) => {
                let typeClass = 'pink';
                if (skill.type === 'tool') typeClass = 'purple';
                else if (skill.type === 'tech') typeClass = 'indigo';
                return (
                  <span className={`tag ${typeClass}`} key={index}>
                    {skill.name}
                  </span>
                );
              })}
            </div>
            <div className="section-title-soft gradient-text">Soft Skills</div>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <span className="tag pink" key={index}>
                  {skill}
                </span>
              ))}
            </div>



            

          </div>
          
          

          
        </div>

        
        
      </div>
      
      


      
      
      
    </div>
    

    
  );
}
