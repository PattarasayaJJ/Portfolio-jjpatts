import '../experience.css';

export function Experience() {
  return (
    <section className="works-container">
      <div className="works-item top-left">
        <img src="/AB.png" alt="AB Testing" className="works-img" />
        <img src="/arrow.png" alt="arrow" className="arrow arrow-1" />
        <p className="works-text">สอนการทำ AB Testing</p>
      </div>

      <div className="works-item bottom-left">
        <img src="/wireframe.png" alt="Wireframe" className="works-img" />
        <img src="/arrow.png" alt="arrow" className="arrow arrow-2" />
        <p className="works-text">
          สอนการทำ Paper Pencil Prototype<br />Wireframe , Mockup
        </p>
      </div>

      <div className="works-item bottom-right">
        <img src="/Logoicon.png" alt="Logo" className="works-img" />
        <img src="/arrow.png" alt="arrow" className="arrow arrow-3" />
        <p className="works-text">สอนการทำ Logo & Icon</p>
      </div>

      <div className="works-item bottom-right">
        <img src="/work4.jpg" alt="Wireframe2" className="works-img" />
        <img src="/arrow.png" alt="arrow" className="arrow arrow-4" />
        <p className="works-text">
          สอนการทำ Paper Pencil Prototype<br />Wireframe , Mockup
        </p>
      </div>
    </section>
  );
}
