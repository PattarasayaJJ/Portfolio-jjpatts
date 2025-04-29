import React from 'react';

import '../work.css';



export function Kkubus() {
  const skills = [
    { name: '#User Research', type: 'ux' },
    { name: '#Usability Testing', type: 'ux' },
    { name: '#Persona', type: 'ux' },
    { name: '#A/B Testing', type: 'ux' },
    { name: '#Wireframe', type: 'ux' },
    { name: '#Mockup', type: 'ux' },
    { name: '#Prototyping', type: 'ux' },
   
    { name: '#Figma', type: 'tool' },
    
  ];

  return (
    
     <section className="projects-section">
        <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <a href="/works" className="breadcrumb-link">
          My Projects
        </a>        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Mini Projects</span>
      </nav>


              <div className="projects-container">
          <div className="final-project-card">
          
            <div className="final-project-content">
            <div className="final-project-text">
                <h2 className="final-project-title gradient-text">KKUBUS</h2>
                
              </div>
              
              <div className="final-project-image">
                <img
                  src="/KKUbus.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>

              
              
            </div>
            <div className="final-project-card-text">
            <div className="final-project-content">
            <div className="final-project-image">
                <img
                  src="/Empathy.png"
                  alt="Empathy"
                  className="project-screenshot"
                />
              </div>
              
             
             
              <div className="final-project-image">
                <img
                  src="/storykkubus.jpeg"
                  alt="storykkubus"
                  className="project-screenshot"
                />
              </div>

              <div className="final-project-image">
                <img
                  src="/wireframekkubus.png"
                  alt="wireframekkubus"
                  className="project-screenshot"
                />
              </div>
              <div className="final-project-image">
                <img
                  src="/personas.png"
                  alt="wireframekkubus"
                  className="project-screenshot"
                />
              </div>
            </div> 

            
          </div>
          
            
            
          </div>
          <div className="final-project-card-text">
            <div className="final-project-content">
             
            This was my first mini project, starting with user research and 
            continuing through to design, following various principles and 
            guidelines. The main focus was to ensure that users could use the 
            product without a steep learning curve. In this project, I conducted 
            A/B testing, usability testing, and applied other UX/UI principles as well.

            </div>
            
          </div>
          <div className="final-project-card-text">
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
            
          </div>
          
          



          
          



          </div>


          


          
        </section>
      );
    }
    