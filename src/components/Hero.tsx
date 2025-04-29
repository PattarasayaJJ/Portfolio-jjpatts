import '../hero.css';

export function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
        <div className="hero-right">
            <div className="hero-text-box">
              <p className="hero-quote">
               <span className='hero-name'>Hello, I'm JJ </span>  
               and I recently graduated from Khon Kaen University, 
               seeking opportunities to gain real-world experience. 
               I have a strong interest in UX/UI design and Software Testing.
              
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
              “I have been a TA in the UX/UI Design course. 
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
