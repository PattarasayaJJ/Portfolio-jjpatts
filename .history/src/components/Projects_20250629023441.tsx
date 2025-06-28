import '../projects.css';
import { Link } from 'react-router-dom';


export function Projects() {
 
  return (
    <section className="projects-section">
      <div className="projects-container">

         
      <Link
  to="/works"
  className="moreproject"
  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
>
  <span className="gradient-text">View All My Projects</span>
  <span className="arrow-icon gradient-text">›</span>
</Link>

          
                
            </div>

            
        
    </section>
  );
}
