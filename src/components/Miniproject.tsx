import React from 'react';

import '../work.css';



export function Miniproject() {
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
                <h2 className="final-project-title gradient-text">Mini Project - KKUBUS</h2>
                <div className="final-project-icons">
                  <div className="icon-wrapper">
                    <img src="/adobexd.png" alt="adobe" className="icon-image" />
                  </div>
                 
                </div>
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
            
            
          </div>
          
          



          <div className="final-project-card">
            <div className="final-project-content">
              <div className="final-project-text">
                <h2 className="final-project-title gradient-text">Mini Project - ClassCafe</h2>
                <div className="final-project-icons">
                  <div className="icon-wrapper">
                    <img src="/figma.png" alt="figma" className="icon-image" />
                  </div>
                 
                </div>
              </div>
              <div className="final-project-image">
                <img
                  src="/classfull.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
              

              
              
            </div>
            <div className="final-project-card-text">
            <div className="final-project-content">
             
            This project involved a business-driven goal: how can we increase sales for this store?
            I started by collecting data through user research and 
            business analysis to understand customer behavior and pain points. 
            From there, I brainstormed and designed specific features aimed at improving user engagement and driving conversions. 
            The process continued through to wireframing, prototyping, and final UI design—ensuring that every decision aligned with both user needs 
            and business objectives.

            </div>
            
          </div>
            
            
          </div>
          


          <div className="final-project-card">
            <div className="final-project-content">
              <div className="final-project-text">
                <h2 className="final-project-title gradient-text">Mini Project - MusicEiEi</h2>
                <div className="final-project-icons">
                  <div className="icon-wrapper">
                    <img src="/figma.png" alt="figma" className="icon-image" />
                  </div>
                 
                </div>
              </div>
              <div className="final-project-image">
                <img
                  src="/musiceieifull.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>

              
              
            </div>
            
            
          </div>
          



          </div>


          


          
        </section>
      );
    }
    