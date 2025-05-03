import '../projects.css';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';


export function Projects() {
 
  return (
    <section className="projects-section">
      <div className="projects-container">
        <Link to="/works" className="project-link">

          <div className="minicard">
          <div className="final-project-text">
                <h2 className="final-project-title gradient-text">My Projects</h2>
                
              </div>

              

              
            <div className="final-project-content">


            <Link to="/finalproject" className="project-link">           
            <ProjectCard
                                icon="/favicon.ico"
                               image="/Ptah.png"
                               gradient = 'bg-gradient-to-b from-white to-[#e6cdf5]'
                               />
                            </Link>
                            <Link to="/kkubus" className="project-link">
                            <ProjectCard
                                icon="/figma.png"
                               image="/KKUbus.png"
                               gradient = 'bg-gradient-to-b from-white to-[#e6cdf5]'
                               />
                            </Link>
                            <Link to="/class" className="project-link">
                <ProjectCard
                  icon="/adobexd.png"
                  image="/classfull.png"
                  gradient = 'bg-gradient-to-b from-white to-[#e6cdf5]'
                  />
              </Link>
              <Link to="/nine" className="project-link">
              <ProjectCard
                  icon="/power-bi.png"
                 image="/9Diamond.png"
                 gradient = 'bg-gradient-to-b from-white to-[#e6cdf5]'
                 />
              </Link>
              
              
            </div>

            
          </div>

          
          </Link>
          </div>
    </section>
  );
}
