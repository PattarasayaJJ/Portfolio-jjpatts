import { ProjectCard } from './ProjectCard';
import '../projects.css';

export function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Final Project */}
        <a href="/final-project" className="project-link">
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
        </a>

        {/* Mini Projects Grid */}
        <div className="mini-projects-grid">
          <a href="/mini-project-1" className="project-link">
            <ProjectCard
              title="Mini Project"
              icon="/figma.png"
              image="/classcafe.png"

              gradient="from-purple-100 to-pink-200"
            />
          </a>
          <a href="/mini-project-2" className="project-link">
            <ProjectCard
              title="Mini Project"
              icon="/adobexd.png"
              image="/musiceiei.png"
              gradient="from-purple-100 to-pink-200"            />
          </a>
          <a href="/mini-project-3" className="project-link">
            <ProjectCard
              title="Mini Project"
              icon="/figma.png"
             image="/musiceiei.png"

             gradient="from-purple-100 to-pink-200"            />
          </a>
          <a href="/mini-project-4" className="project-link">
            <ProjectCard
              title="Mini Project"
               icon="/figma.png"
               image="/musiceiei.png"

               gradient="from-purple-100 to-pink-200"            />
          </a>
        </div>
      </div>
    </section>
  );
}
