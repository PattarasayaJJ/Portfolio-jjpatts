import React from 'react';

import '../work.css';



export function Nine() {
  const skills = [
    { name: '#Power BI', type: 'tool' },

    
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
<h2 className="final-project-title gradient-text">Mini Project - 9Diamond</h2> </div>
          <div className="final-project-card">
          
            <div className="final-project-content">
         
              
              <div className="final-project-image">
                <img
                  src="/9Diamond.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
                
              <div className="final-project-image">
                <img
                  src="/9Diamond_location.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>

              
              
            </div>
            <div className="final-project-card-text">
            <div className="final-project-content">
            <div className="final-project-image">
                <img
                  src="/9Diamond_1.png"
                  alt="Empathy"
                  className="project-screenshot"
                />
              </div>
              
             
             
              <div className="final-project-image">
                <img
                  src="/9Diamond_2.png"
                  alt="storykkubus"
                  className="project-screenshot"
                />
              </div>

              <div className="final-project-image">
                <img
                  src="/9Diamond_3.png"
                  alt="wireframekkubus"
                  className="project-screenshot"
                />
              </div>
              <div className="final-project-image">
                <img
                  src="/9Diamond_4.png"
                  alt="wireframekkubus"
                  className="project-screenshot"
                />
              </div>
              <div className="final-project-image">
                <img
                  src="/9Diamond_5.png"
                  alt="wireframekkubus"
                  className="project-screenshot"
                />
              </div>
            </div> 

            
          </div>
          
            
            
          </div>
          <div className="final-project-card-text">
            <div className="final-project-content">
             
            We reached out to the store to get its sales data, which we analyzed to come up with a suitable promotion.
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
          
          



          
          



          </div></div>



          


          
        </section>
      );
    }
    