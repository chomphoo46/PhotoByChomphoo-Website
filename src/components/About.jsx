import './About.css'

function About() {
  return (
    <section className="about">
      <h2>เกี่ยวกับฉัน</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src="/src/assets/profile.jpg" alt="โปรไฟล์" />
        </div>
        <div className="bio">
          <p>สวัสดีค่ะ! ช่างภาพชื่อชมพูนะคะ เป็นช่างภาพอิสระจากจังหวัดปทุมธานี รับถ่ายภาพในกรุงเทพฯและปริมณฑล</p>
          <p>ฉันมีความหลงใหลในการถ่ายภาพมาตั้งแต่ที่ยังเรียนอยู่และได้พัฒนาสไตล์การถ่ายภาพที่เป็นเอกลักษณ์ของตัวเอง</p>
          <p>ฉันเชี่ยวชาญในการถ่ายภาพบุคคล การแคนดิต เก็บบรรยากาศต่างๆ</p>
          
          <h3>อุปกรณ์ที่ใช้</h3>
          <ul>
            <li>กล้อง: cannon eos 200d , cannon eos 650d</li>
            <li>เลนส์: EF-S18-55mm f/4-5.6 IS STM , EF 50mm f1.8 , EF-S55-250mm f/4-5.6 IS STM , EF-S 10-22MM F/3.5-4.5 USM เลนส์ Wide</li>
            <li>อุปกรณ์เสริมอื่นๆ: ขาตั้งกล้อง, ไฟ led</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About