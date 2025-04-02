import { useState } from 'react'
import './Packages.css'

function Packages() {
  const [setSelectedPackage] = useState(null)
  
  const packages = [
    {
      id: 1,
      name: 'ยิ้มให้เรา 1 ชั่วโมง',
      price: '1,500 บาท',
      duration: '1 ชั่วโมง',
      photos: 'ไม่จำกัด',
      features: [
        'ส่งงานภายใน 1-3 วัน ผ่าน google drive',
        'ถ่ายภาพได้ไม่จำกัด',
        'ปรับโทนสีให้ทุกภาพ',
        'สำรองไฟล์ไว้ให้ 3 เดือน'
      ]
    },
    {
      id: 2,
      name: 'ยิ้มให้เรา 3 ชั่วโมง',
      price: '2,500 บาท',
      duration: '3 ชั่วโมง',
      photos: 'ไม่จำกัด',
      features: [
        'ส่งงานภายใน 1-3 วัน ผ่าน google drive',
        'ถ่ายภาพได้ไม่จำกัด',
        'ปรับโทนสีให้ทุกภาพ',
        'สำรองไฟล์ไว้ให้ 3 เดือน'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'ยิ้มให้เราตลอดทั้งวัน',
      price: '4,500 บาท',
      duration: '6 ชั่วโมง',
      photos: 'ไม่จำกัด',
      features: [
        'ส่งงานภายใน 1-3 วัน ผ่าน google drive',
        'ถ่ายภาพได้ไม่จำกัด',
        'ปรับโทนสีให้ทุกภาพ',
        'สำรองไฟล์ไว้ให้ 3 เดือน'
      ]
    },
  ]

  const handleBooking = (packageId) => {
    setSelectedPackage(packageId)
    // นำทางไปยังฟอร์มการจอง หรือเปิด modal
    alert(`คุณได้เลือกแพ็คเกจ ${packages.find(pkg => pkg.id === packageId).name} กรุณากรอกข้อมูลติดต่อเพื่อดำเนินการต่อ`)
  }

  return (
    <section className="packages">
      <h2>แพ็คเกจการถ่ายภาพ</h2>
      <p className="packages-intro">เลือกแพ็คเกจที่เหมาะกับความต้องการของคุณ</p>
      
      <div className="packages-container">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`package-card ${pkg.popular ? 'popular' : ''}`}
          >
            {pkg.popular && <div className="popular-badge">แนะนำ</div>}
            <h3>{pkg.name}</h3>
            <div className="price">{pkg.price}</div>
            <div className="duration">
              <strong>ระยะเวลา:</strong> {pkg.duration}
            </div>
            <div className="photo-count">
              <strong>จำนวนภาพ:</strong> {pkg.photos}
            </div>
            <div className="features">
              <strong>รายละเอียด:</strong>
              <ul>
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button 
              className="booking-btn"
              onClick={() => handleBooking(pkg.id)}
            >
              จองแพ็คเกจนี้
            </button>
          </div>
        ))}
      </div>
      
      <div className="custom-package">
        <h3>ต้องการแพ็คเกจแบบกำหนดเอง?</h3>
        <p>หากคุณต้องการแพ็คเกจที่ปรับแต่งตามความต้องการเฉพาะของคุณ โปรดติดต่อเรา</p>
        <button onClick={() => window.location.href = '#contact'}>ติดต่อเรา</button>
      </div>
    </section>
  )
}

export default Packages