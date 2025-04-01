import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  // สร้างข้อมูลตัวอย่าง - แทนที่ด้วยรูปภาพจริงของคุณ
  const photos = [
    { id: 1, url: 'https://via.placeholder.com/400x300', title: 'ธรรมชาติ', category: 'nature' },
    { id: 2, url: 'https://via.placeholder.com/400x300', title: 'เมือง', category: 'urban' },
    { id: 3, url: 'https://via.placeholder.com/400x300', title: 'คน', category: 'portrait' },
    { id: 4, url: 'https://via.placeholder.com/400x300', title: 'สถาปัตยกรรม', category: 'architecture' },
    { id: 5, url: 'https://via.placeholder.com/400x300', title: 'สัตว์', category: 'wildlife' },
    { id: 6, url: 'https://via.placeholder.com/400x300', title: 'ทะเล', category: 'nature' },
    // เพิ่มรูปภาพอื่นๆ ตามต้องการ
  ]

  const [filter, setFilter] = useState('all')
  
  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter)

  return (
    <section className="gallery">
      <h2>ผลงานของฉัน</h2>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          ทั้งหมด
        </button>
        <button 
          className={filter === 'nature' ? 'active' : ''} 
          onClick={() => setFilter('nature')}
        >
          รับปริญญา
        </button>
        <button 
          className={filter === 'urban' ? 'active' : ''} 
          onClick={() => setFilter('urban')}
        >
          ขึ้นบ้านใหม่/ทำบุญ
        </button>
        <button 
          className={filter === 'portrait' ? 'active' : ''} 
          onClick={() => setFilter('portrait')}
        >
          บุคคล
        </button>
        <button 
          className={filter === 'architecture' ? 'active' : ''} 
          onClick={() => setFilter('architecture')}
        >
          กีฬาสี
        </button>
      </div>
      
      <div className="photo-grid">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
