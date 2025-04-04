import "./Hero.css";

function Hero({ setCurrentSection }) {  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          ยินดีต้อนรับสู่ <br />
          Photo By Chomphoo
        </h1>
        <p>ให้เราได้เป็นส่วนหนึ่งของคุณนะคะ เลือกเราไม่มีคำว่าผิดหวัง</p>
        <button onClick={() => setCurrentSection("gallery")}>ดูผลงาน</button>
        <button onClick={() => setCurrentSection("packages")}>แพ็คเกจ</button>
      </div>
    </section>
  );
}

export default Hero;
