import '../hero.css';

export function Hero() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-image-wrapper">
              <img
                src="/jj.png"
                alt="Portfolio character illustration"
                className="hero-main-image"
              />
            </div>
            <div className="hero-decor-wrapper">
              <img src="/u.png" alt="Decorative U" className="decor decor-u1 decor-fly-1" />
              <img src="/u.png" alt="Decorative U" className="decor decor-u2 decor-fly-2" />
              <img src="/x.png" alt="Decorative X" className="decor decor-x decor-fly-3" />
              <img src="/i.png" alt="Decorative I" className="decor decor-i decor-fly-4" />
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-text-box">
              <p className="hero-quote">
                "จุดเริ่มต้นของการเส้นใน UX/UI คือการได้เรียนวิชานี้ตอนปี1
                มีความสนใจชอบออกแบบ กำไว้รู้แค่ว่าตัวเองอยากทำหลายอย่างมาก
                และต้องการพัฒนาตัวเอง จึงเริ่มต้นประสบการณ์จากการเป็น Teaching
                Assistant (TA) ในช่วงปี3และ4 ได้ลองและเรียนรู้เพิ่มเติม
                ช่วยให้คำแนะนำโปรเจคต่างๆของนักศึกษาในรายวิชา"
              </p>
              <p className="hero-name">Pattarasaya Srisanga</p>
              <p className="hero-nickname">JJ</p>
            </div>
          </div>
        </div>
      </section>

       {/* --- Bottom Section --- */}
       <section className="hero-section">
        <div className="bottom-container">
          <h2 className="experience-title">experience</h2>

          <div className="bottom-card">
            <img
              src="/ta.png"  // ปรับเส้นทางรูปตามต้องการ
              alt="TA Presentation"
              className="bottom-image"
            />
            <p className="bottom-caption">
              “บรรยากาศการเป็นTA ได้สอนหลายๆอย่างตั้งแต่การทำ 
              User Research โดยการออกแบบจะต้องเน้นผู้ใช้เป็นหลัก
              และการทดสอบก่อนนำไปใช้จริง
              การออกแบบที่ดีต้อง useful + useable คือ มีประโยชน์และใช้งานได้จริง”
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
