import React from 'react';

import '../work.css';



export function Finalproject() {
  const skills = [
    { name: '#React-native', type: 'tech' },
    { name: '#NodeJs', type: 'tech' },
    { name: '#MongoDB', type: 'tech' },
    { name: '#Manual Testing', type: 'ux' },

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
        <span className="breadcrumb-current">Final Projects</span>
      </nav>


              <div className="projects-container">
              <div className="minicard">

<div className="final-project-text">
<h2 className="final-project-title gradient-text">Final Project - Physical Therapy At Home</h2> </div>
          <div className="final-project-card">
            <div className="final-project-content">
            
              <div className="final-project-image">
                <img
                  src="/Ptah.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>


              
            </div>
           
            


            
          </div>
         
          <div className="final-project-card-text">
            <div className="final-project-content">
             
            This senior project is a Physical Therapy At Home Application. I gained first-hand experience as a
             full-stack developer and collaborated with medical professionals 
             from Srinagarind Hospital.
           
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
          </div>

        </section>
      );
    }
    