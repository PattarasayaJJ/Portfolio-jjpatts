import { ProjectCard } from './ProjectCard';
import { Link } from 'react-router-dom';
import '../projects.css';



export function Works() {
  return (
     <section className="projects-section">
        <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">My Projects</span>
      </nav>
              <div className="projects-container">
                
              <Link to="/finalproject" className="project-link">           
               <div className="final-project-card">
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
                  src="/googleplay.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="minicard">

        <div className="final-project-text">
        <h2 className="final-project-title gradient-text">Final Project</h2> </div>

       
            <div className="mini-projects-grid">
            <Link to="/kkubus" className="project-link">
              <ProjectCard
                  icon="/figma.png"
                 image="/KKUbus.png"
                 gradient="from-purple-100 to-pink-200"            />
              </Link>

            <Link to="/class" className="project-link">
                <ProjectCard
                  icon="/adobexd.png"
                  image="/classfull.png"
                  gradient="from-purple-100 to-pink-200"            />
              </Link>
              <Link to="/nine" className="project-link">
              <ProjectCard
                  icon="/power-bi.png"
                 image="/9Diamond.png"
                 gradient="from-purple-100 to-pink-200"            />
              </Link>
             
            </div>
            </div>
          </div>
        </section>
      );
    }
    