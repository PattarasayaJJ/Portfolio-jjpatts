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
    { name: '#Git', type: 'tech' },
    { name: '#HTML', type: 'tech' },
    { name: '#CSS', type: 'tech' },
    { name: '#Tailwind', type: 'tech' },
    { name: '#React', type: 'tech' },
    { name: '#React-native', type: 'tech' },
    { name: '#MongoDB', type: 'tech' },
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
              <p className="name">Pattarasaya Srisanga (JJ)</p>
              <p  className="name" >Age: 22 | Date of Birth: December 3, 2002</p>
              <p className="name" >Graduated from  College of Computing,</p>
              <p className="name" >Bachelor of Science (Information Technology)
              </p>
              <p className="name" > Khon Kaen University (2021-2025) </p>

            </div>


            
          </div>


          
         
        </div>

        <div className="skills-column">

          <div className="skills-card">

            <div className="section-title">Skills</div>

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
            <div className="section-title-soft">Soft Skills</div>
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
