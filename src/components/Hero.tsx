import '../hero.css';

export function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
        <div className="hero-left">

            <div className="hero-text-box">
            <span className="hero-name typing">Hello, I'm JJ</span>

              <p className="hero-quote">

               I recently graduated from Khon Kaen University,College of Computing.
              
              </p>
             
             
            </div>
          </div>
          <div className="hero-left">
            <div className="hero-image-wrapper">
              <img
                src="/me.png"
                alt="Portfolio character illustration"
                className="hero-main-image"
              />
            </div>
           
          </div>
         
        </div>
      </section>

       <section className="hero-section">
       


          <div className="final-project-card-ex">

          <h2 className="final-project-title gradient-text">Experience-Teaching Assistant(TA)</h2>

            <div className="final-project-content">
              
              <div className="final-project-image">
              <img
              src="/ta.png"  
              alt="TA Presentation"
              className="bottom-image"
            />
              
              </div>
              <p className="bottom-caption">
              “I have been a TA in the<span className='uxui'> UX/UI Design course.</span>
              The experience of being a teaching assistant has taught me many 
              things, including the importance of conducting user research with
               a user-centered design approach. It also emphasized the necessity of 
               testing prior to actual implementation. A good design should be both useful and usable.”
            </p>
           
            </div>

            
          </div>
          


          
    
    



      
      </section>


      

    </>
  );
}
