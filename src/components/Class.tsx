import React from 'react';

import '../work.css';



export function Class() {
  const skills = [
  
    { name: '#AdobeXD', type: 'tool' },
    
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
              <div className="minicard">

<div className="final-project-text">
 </div>
                
          <div className="final-project-card">
          
            <div className="final-project-content">
      
              
              <div className="final-project-image">
                <img
                  src="/classfull.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>

              
              
            </div>
            
          
            
            
          </div>
          <div className="final-project-card-text">
          <span className='project-name'>Class Cafe</span>

            <div className="final-project-content">
             
          This project had a clear business objective: How can we increase this store’s sales? <br></br>
            I started by gathering customer insights and business metrics, then brainstormed revenue‑driving features before moving on to the design phase.

            </div>
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
          </div>


          


          
        </section>
      );
    }
    