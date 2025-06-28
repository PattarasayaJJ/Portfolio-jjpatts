import '../hero.css';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
        <div className="hero-left">

            <div className="hero-text-box">
              
            <span className="hero-name typing">Hello, I'm JJ. </span>

              <p className="hero-quote">

               I recently graduated from Khon Kaen University,College of Computing.
              
              </p>
              
              <li className='interest'>My Interest: </li>
             <li >UX/UI Designer</li>
             <li >Software Tester</li>
             <li >Programmer</li>
             

       


             
            </div>
          </div>
          
          <div className="hero-left">
            <div className="hero-image-wrapper">
              <img
                src="/card1.png"
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
              
              <div className="final">
              <img
              src="/ta.png"  
              alt="TA Presentation"
              className="bottom-image"
            />
              
              </div>
              <p className="bottom-caption">
              Nov. 2023 - Mar. 2025 at College of Computing, Khon Kaen University.
              Assisted in teaching and guiding students on topics related to <span className='uxui'> UX/UI design.</span>
         
            </p>
           
            
           
            </div>

            
          </div>
          


          
    
    



      
      </section>


      

    </>
  );
}
