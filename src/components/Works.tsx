import '../work.css';

export function Works() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Final Project Card */}
        <div className="project-card final">
          <h2 className="project-title">Final Project</h2>
          {/* รูปเดียวที่มี 3 หน้าจอรวมกัน */}
          <img
            src="/googleplay.png"
            alt="Final Project"
            className="project-image"
          />
           <img
            src="/paper.png"
            alt="Final Project"
            className="project-image"
          />
          <div className="project-hashtags">
            <span>#Figma</span>
            <span>#React-native</span>
            <span>#MongoDB</span>
            <span>#NodeJS</span>
          </div>
        </div>

        {/* Mini Project 1 */}
        <div className="project-card mini">
          <h2 className="project-title">Mini Project</h2>
          <img
            src="/musiceieifull.png"
            alt="Mini Project 1"
            className="project-image"
          />
          <div className="project-hashtags">
            <span>#AdobeXD</span>
          </div>
        </div>

        {/* Mini Project 2 */}
        <div className="project-card mini">
          <h2 className="project-title">Mini Project</h2>
          <img
            src="/classfull.png"
            alt="Mini Project 2"
            className="project-image"
          />
          <div className="project-hashtags">
            <span>#Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
