import { useEffect, useState } from 'react';
import '../projects.css';
import { Link } from 'react-router-dom';


export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/googleplay.png', '/musiceieifull.png', '/KKUbus.png', '/classfull.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <Link to="/works" className="project-link">

          <div className="final-project-card">
          <div className="final-project-text">
                <h2 className="final-project-title gradient-text">My Project</h2>
                
              </div>
            <div className="final-project-content">
              
              <div className="final-project-image slider-container">
                <div
                  className="slider-wrapper"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`project-${index}`}
                      className="slider-image"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </Link>
          </div>
    </section>
  );
}
