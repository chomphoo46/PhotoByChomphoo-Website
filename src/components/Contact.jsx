import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // ในที่นี้คุณจะเพิ่มโค้ดเพื่อส่งข้อมูลแบบฟอร์มไปยังเซิร์ฟเวอร์
    console.log('Form submitted:', formData)
    alert('ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact">
      <h2>ติดต่อฉัน</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>ข้อมูลติดต่อ</h3>
          <p>อีเมล: youremail@example.com</p>
          <p>โทรศัพท์: +66 xx xxx xxxx</p>
          <p>ที่อยู่: [ที่อยู่ของคุณ]</p>
          
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">ชื่อ</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">อีเมล</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">ข้อความ</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          
          <button type="submit">ส่งข้อความ</button>
        </form>
      </div>
    </section>
  )
}

export default Contact