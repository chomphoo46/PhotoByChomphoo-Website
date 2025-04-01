import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>ยินดีต้อนรับสู่ <br />
        Photo By Chomphoo</h1>
        <p>ให้เราได้เป็นส่วนหนึ่งของคุณนะคะ เลือกเราไม่มีคำว่าผิดหวัง</p>
        <button onClick={() => window.location.href = '#gallery'}>ดูผลงาน</button>
        <button onClick={() => window.location.href = '#gallery'}>แพ็คเกจ</button>
      </div>
    </section>
  )
}

export default Hero
