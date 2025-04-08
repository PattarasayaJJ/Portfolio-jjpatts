import '../work.css';

export function Works() {
  return (
    <div className="projects-section">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Works</span>
      </nav>
      <div className="projects-container">
      
        <div className="project-card final">
          <h2 className="project-title">Final Project - แอปพลิเคชันช่วยเหลือกายภาพบำบัดที่บ้าน</h2>
          <div className='text-final'>
            โปรเจคนี้เริ่มตั้งแต่ทำ User Research แล้วจึงนำมาออกแบบเนื่องจากผู้ใช้ส่วนมากคือผู้สูงอายุแล้วป่วย การออกแบบจึงต้องออกแบบให้ใช้งานง่ายที่สุดไม่ซับซ้อน
          </div>
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
    </div>
  );
}
