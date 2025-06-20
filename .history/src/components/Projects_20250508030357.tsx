import '../projects.css';
import { Link } from 'react-router-dom';


export function Projects() {
 
  return (
    <section className="projects-section">
      <div className="projects-container">

          <div className="minicard">
          
            <div className="final-project-content">

            <div className="projects-container">
            <div className="final-project-card">
            <div className="final-project-content">
              <div className="final-project-text">
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
                  src="/googleplay.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
            </div>
            
          </div>

       
       
       
     

        
      </div>
      <Link
  to="/works"
  className="moreproject"
  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
>
  <span className="gradient-text">View All My Projects</span>
  <span className="arrow-icon gradient-text">›</span>
</Link>

          
              
             
             
              
            </div>

            
          </div>

          
          </div>
    </section>
  );
}
