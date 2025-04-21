import '../work.css';
import { Link } from 'react-router-dom';



export function Works() {
  return (
    <>
     <section className="projects-section">
        <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">My Projects</span>
      </nav>
              <div className="projects-container">
              <Link to="/finalproject" className="project-link">          <div className="final-project-card">
            <div className="final-project-content">
              <div className="final-project-text">
                <h2 className="final-project-title gradient-text">Final Project</h2>
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
          </div>
          </Link>

          <Link to="/miniproject" className="project-link">
          <div className="final-project-card">
            <div className="final-project-content">
              <div className="final-project-text">
                <h2 className="final-project-title gradient-text">Mini Project</h2>
                <div className="final-project-icons">
                  <div className="icon-wrapper">
                    <img src="/figma.png" alt="figma" className="icon-image" />
                  </div>
                  <div className="icon-wrapper">
                    <img src="/adobexd.png" alt="adobe" className="icon-image" />
                  </div>
                </div>
              </div>
              <div className="final-project-image">
                <img
                  src="/KKUbus.png"
                  alt="kku bus"
                  className="project-screenshot"
                />
              </div>
            </div>
          </div>
          </Link>
    
          </div>
        </section>
        </>
      );
    }
    