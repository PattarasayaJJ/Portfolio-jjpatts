import '../work.css';

export function Works() {
  const Ptahskills = [
    { name: '#React-native', type: 'tool' },
    { name: '#React', type: 'tool' },
    { name: '#Node.js', type: 'tool' },
    { name: '#MongoDB', type: 'tool' },
  ];

  const stv = [
    { name: '#HTML', type: 'tool' },
    { name: '#Javascript', type: 'tool' },
    { name: '#Bootstrap', type: 'tool' },
  ];

  const tarot = [
    { name: '#React', type: 'tool' },
    { name: '#Tailwind', type: 'tool' },
  ];

  const kkuBusSkills = [
    { name: '#Figma', type: 'tool' },
  ];

  const ClassSkills = [
    { name: '#AdobeXD', type: 'tool' },
  ];

  const BakeySkills = [
    { name: '#Figma', type: 'tool' },
  ];

  const NineSkills = [
    { name: '#Power BI', type: 'tool' },
  ];

    const Chillcast = [
    { name: '#Vue.js', type: 'tool' },
    { name: '#Tailwind', type: 'tool' },
  ];

  return (
    <section className="projects-section">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator"></span>
        <span className="breadcrumb-current">My Projects</span>
      </nav>

      <div className="projects-container">
       <div className="final-project-text">
  <div className="project-title-container">
    <div className="project-title-text">Final Project</div>
  </div>
</div>

        <div className="project-card">
          <div className="project-images">
            <img
              src="/Ptah.png"
              alt="PTAH Mobile App"
              className="project-image"
            />
            <img
              src="/ptahdoctor.png"
              alt="PTAH Desktop App"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">Physical Therapy At Home Application. </span> 
              I gained first-hand experience as a full-stack developer and collaborated with medical professionals from Srinagarind Hospital.
            </p>
            
            <div className="skills-list">
              {Ptahskills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="final-project-text">
           <div className="project-title-container">
    <div className="project-title-text">Mini Projects</div>
  </div>
</div>

        {/* 360streetview Project */}
        <div className="project-card">
          <div className="project-images single">
             <img
              src="/tour.png"
              alt="360streetview"
              className="project-image"
            />
            <img
              src="/360.png"
              alt="360streetview"
              className="project-image"
            />
           
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">360streetview. </span> 
              A website featuring 360-degree virtual tours of various locations at Khon Kaen University.
            </p>
            
            <div className="skills-list">
              {stv.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tarot Project */}
        <div className="project-card">
          <div className="project-images single">
            <img
              src="/tarot.png"
              alt="Tarot Reading"
              className="project-image"
            />
             <img
              src="/tarot2.png"
              alt="Tarot Reading"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">Doo Duang with Nong JJ. </span> 
              is an interactive tarot reading website that uses the full 78-card tarot.
            </p>
            
            <div className="skills-list">
              {tarot.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* Chillcast Project */}
        <div className="project-card">
          <div className="project-images single">
            <img
              src="/chillcast.png"
              alt="Tarot Reading"
              className="project-image"
            />
             <img
              src="/tarot2.png"
              alt="Tarot Reading"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">Doo Duang with Nong JJ. </span> 
              is an interactive tarot reading website that uses the full 78-card tarot.
            </p>
            
            <div className="skills-list">
              {tarot.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* KKU Bus Project */}
        <div className="project-card">
          <div className="project-images">
            <img
              src="/KKUbus.png"
              alt="KKU Bus App"
              className="project-image"
            />
            <img
              src="/storykkubus.jpeg"
              alt="KKU Bus Story"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">KKU Shuttle Bus. </span> 
              This was my first mini project, starting with user research and continuing through to design, following various principles and guidelines. The main focus was to ensure that users could use the product without a steep learning curve. In this project, I conducted A/B testing, usability testing, and applied other UX/UI principles as well.
            </p>
            
            <div className="skills-list">
              {kkuBusSkills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Class Cafe Project */}
        <div className="project-card">
          <div className="project-images single">
            <img
              src="/classfull.png"
              alt="Class Cafe"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">Class Cafe. </span> 
              This project had a clear business objective: How can we increase this store's sales? I started by gathering customer insights and business metrics, then brainstormed revenue‑driving features before moving on to the design phase.
            </p>
            
            <div className="skills-list">
              {ClassSkills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bakery Shop Project */}
        <div className="project-card">
          <div className="project-images single">
            <img
              src="/bakery.png"
              alt="Bakery Shop"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">Bakery Shop. </span> 
              The Bakey Shop application was created as a teaching tool for first-year students, with the purpose of introducing and providing practice in using Figma.
            </p>
            
            <div className="skills-list">
              {BakeySkills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 9Diamond Project */}
        <div className="project-card">
          <div className="project-images single">
            <img
              src="/9Diamond.png"
              alt="9Diamond"
              className="project-image"
            />
          </div>
          
          <div className="project-content">
            <p className="project-name">
              <span className="highlight">9Diamond. </span> 
              I reached out to the store to get its sales data, which we analyzed to come up with a suitable promotion.
            </p>
            
            <div className="skills-list">
              {NineSkills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}