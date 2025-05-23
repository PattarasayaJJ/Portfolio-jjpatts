import '../projects.css';



export function Works() {
  const Ptahskills = [
    { name: '#React-native', type: 'tool' },
    { name: '#Node.js', type: 'tool' },
    { name: '#MongoDB', type: 'tool' },
    
  ];
  const stv = [
    { name: '#HTML', type: 'tool' },
    { name: '#Javascript', type: 'tool' },
    { name: '#Bootstrap', type: 'tool' },


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
              <div className="final-project-text">
          <h2 className="project-title gradient-text"> <li>Final Project</li> </h2> </div>

              
              <div className="minicard">
          <div className="final-project-card-text">

            <div className="final-project-content">
            <div className="final-project-image">
                <img
                  src="/Ptah.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
                
              </div>
              <div className="final-project-content">

              <p> <span className='appname'>Physical Therapy At Home Application. </span>
           I gained first-hand experience as a
             full-stack developer and collaborated with medical professionals 
             from Srinagarind Hospital.</p>
             </div>
            </div>
            <div className="skills-list">
{Ptahskills.map((skill, index) => {
  let typeClass = 'pink';
  if (skill.type === 'tool') typeClass = 'purple';
  else if (skill.type === 'tech') typeClass = 'indigo';
  return (
    <span className={`tag ${typeClass}`} key={index}>
      {skill.name}
    </span>
  );
})}
</div>

          </div>
          </div>

          <div className="final-project-text">
          <h2 className="project-title gradient-text"> <li>Mini Projects</li> </h2> </div>

          <div className="minicard">
          <div className="final-project-card-text">

            <div className="final-project-content">
              
            <div className="final-project-image">
                <img
                  src="/360.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
                
              </div>
              
              <div className="final-project-content">

<p> <span className='appname'>360streetview. </span>
A website featuring 360-degree virtual tours of various locations at Khon Kaen University.</p>
</div>

            </div>
            <div className="skills-list">
{stv.map((skill, index) => {
  let typeClass = 'pink';
  if (skill.type === 'tool') typeClass = 'purple';
  else if (skill.type === 'tech') typeClass = 'indigo';
  return (
    <span className={`tag ${typeClass}`} key={index}>
      {skill.name}
    </span>
  );
})}
</div>
          </div>
          </div>


          <div className="minicard">
          <div className="final-project-card-text">

            <div className="final-project-content">
              
            <div className="final-project-image">
                <img
                  src="/KKUbus.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
                
              </div>
              
              <div className="final-project-content">

<p> <span className='appname'>KKU Shuttle Bus. </span>
This was my first mini project, starting with user research and 
            continuing through to design, following various principles and 
            guidelines. The main focus was to ensure that users could use the 
            product without a steep learning curve. In this project, I conducted 
            A/B testing, usability testing, and applied other UX/UI principles as well.</p>
</div>
            </div>
            <div className="skills-list">
{kkuBusSkills.map((skill, index) => {
  let typeClass = 'pink';
  if (skill.type === 'tool') typeClass = 'purple';
  else if (skill.type === 'tech') typeClass = 'indigo';
  return (
    <span className={`tag ${typeClass}`} key={index}>
      {skill.name}
    </span>
  );
})}
</div>
          </div>
          </div>

        

          <div className="minicard">
          <div className="final-project-card-text">
            <div className="final-project-content">
            <div className="final-project-image">
                <img
                  src="/classfull.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
              <div className="final-project-content">

<p> <span className='appname'>Class Cafe. </span>
This project had a clear business objective: How can we increase this store’s sales? <br></br>
I started by gathering customer insights and business metrics, then brainstormed revenue‑driving features before moving on to the design phase.</p>
</div>
            </div>
            <div className="skills-list">
{ClassSkills.map((skill, index) => {
  let typeClass = 'pink';
  if (skill.type === 'tool') typeClass = 'purple';
  else if (skill.type === 'tech') typeClass = 'indigo';
  return (
    <span className={`tag ${typeClass}`} key={index}>
      {skill.name}
    </span>
  );
})}
</div>
          </div>
          </div>


            <div className="minicard">
          <div className="final-project-card-text">
            <div className="final-project-content">
            <div className="final-project-image">
                <img
                  src="/bakery.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
              <div className="final-project-content">

<p> <span className='appname'>Class Cafe. </span>
This project had a clear business objective: How can we increase this store’s sales? <br></br>
I started by gathering customer insights and business metrics, then brainstormed revenue‑driving features before moving on to the design phase.</p>
</div>
            </div>
            <div className="skills-list">
{ClassSkills.map((skill, index) => {
  let typeClass = 'pink';
  if (skill.type === 'tool') typeClass = 'purple';
  else if (skill.type === 'tech') typeClass = 'indigo';
  return (
    <span className={`tag ${typeClass}`} key={index}>
      {skill.name}
    </span>
  );
})}
</div>
          </div>
          </div>


          <div className="minicard">
          <div className="final-project-card-text">
            <div className="final-project-content">
            <div className="final-project-image">
                <img
                  src="/9Diamond.png"
                  alt="Final project screenshot"
                  className="project-screenshot"
                />
              </div>
              <div className="final-project-content">

<p> <span className='appname'>9Diamond. </span>
I reached out to the store to get its sales data, which we analyzed to come up with a suitable promotion.
</p>
</div>
            </div>
            <div className="skills-list">
{NineSkills.map((skill, index) => {
  let typeClass = 'pink';
  if (skill.type === 'tool') typeClass = 'purple';
  else if (skill.type === 'tech') typeClass = 'indigo';
  return (
    <span className={`tag ${typeClass}`} key={index}>
      {skill.name}
    </span>
  );
})}
</div>
          </div>
          </div>

        
          </div>
        </section>
      );
    }
    