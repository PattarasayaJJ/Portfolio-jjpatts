import React from 'react';

import '../work.css';



export function Finalproject() {
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
          <div className="final-project-card">
            <div className="final-project-content">
              <div className="final-project-text">
                <h2 className="final-project-title gradient-text">Final Project-PTAH</h2>
                <div className="final-project-icons">
                  <div className="icon-wrapper">
                    <img src="/figma.png" alt="figma" className="icon-image" />
                  </div>
                  <div className="icon-wrapper">
                    <img
                      src="https://www.mongodb.com/assets/images/global/favicon.ico"
                      alt="MongoDB"
                      className="icon-image"
                    />
                  </div>
                  <div className="icon-wrapper">
                    <img
                      src="https://reactjs.org/favicon.ico"
                      alt="React"
                      className="icon-image"
                    />
                  </div>
                  <div className="icon-wrapper">
                    <img
                      src="https://nodejs.org/static/images/favicons/favicon.png"
                      alt="Node.js"
                      className="icon-image"
                    />
                  </div>
                </div>
              </div>
              <div className="final-project-image">
                <img
                  src="/Ptah.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>


              
            </div>
            <div className="final-project-card-text">
            <div className="final-project-content">
             
            This senior project is a physical therapy application 
            designed for at-home use. I gained first-hand experience as a
             full-stack developer and collaborated with medical professionals 
             from Srinagarind Hospital 
            for requirements gathering and validation
            </div>
            

            
          </div>
            


            
          </div>
         
        
          
    

       
          </div>
        </section>
      );
    }
    