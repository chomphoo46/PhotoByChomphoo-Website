import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoDetail.css";

function PhotoDetail({setCurrentSection}) {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [relatedPhotos, setRelatedPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลรูปภาพจาก localStorage หรือ API
    const storedPhoto = localStorage.getItem('selectedPhoto');
    if (storedPhoto) {
      const parsedPhoto = JSON.parse(storedPhoto);
      setPhoto(parsedPhoto);
      setSelectedImage(parsedPhoto.url);
      
      // ดึงรูปภาพที่เกี่ยวข้อง (สมมติว่าเป็นรูปภาพในประเภทเดียวกัน)
      // ในสถานการณ์จริง คุณอาจจะดึงจาก API หรือฐานข้อมูล
      const category = parsedPhoto.category;
      
      // สร้างตัวอย่างรูปภาพเพิ่มเติมสำหรับการสาธิต
      // ในระบบจริงคุณควรดึงจากแหล่งข้อมูลของคุณ
      const additionalImages = [
        { id: parsedPhoto.id + "_1", url: parsedPhoto.url, isMain: true },
        { id: parsedPhoto.id + "_2", url: "./assets/khanun.jpg", isMain: false },
        { id: parsedPhoto.id + "_3", url: `/images/${category}_additional2.jpg`, isMain: false },
        { id: parsedPhoto.id + "_4", url: `/images/${category}_additional3.jpg`, isMain: false },
        { id: parsedPhoto.id + "_5", url: `/images/${category}_additional4.jpg`, isMain: false }
      ];
      
      setRelatedPhotos(additionalImages);
    } else {
      console.log("ไม่พบข้อมูลรูปภาพ");
      // ให้เพิ่มโค้ดดึงข้อมูลจาก API หรือฐานข้อมูลตามโครงสร้างของคุณ
    }
  }, [id]);

  const handleBack = () => {
    setCurrentSection("gallery");
  };
  
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  if (!photo) {
    return (
      <div className="photo-detail">
        <p>ไม่พบข้อมูลรูปภาพ</p>
        <button className="back-button" onClick={handleBack}>
          กลับไปยังแกลเลอรี
        </button>
      </div>
    );
  }

  return (
    <div className="photo-detail">
      <button className="back-button" onClick={handleBack}>
        ← กลับไปยังแกลเลอรี
      </button>

      <div className="photo-detail-content">
        <div className="photo-detail-gallery">
          <div className="main-image-container">
            <img 
              src={selectedImage || photo.url} 
              alt={photo.title} 
              className="main-image"
            />
          </div>
          
          <div className="thumbnail-gallery">
            {relatedPhotos.map((img) => (
              <div 
                key={img.id} 
                className={`thumbnail ${selectedImage === img.url ? 'active' : ''}`}
                onClick={() => handleImageClick(img.url)}
              >
                <img src={img.url} alt={`รูปภาพเพิ่มเติม ${img.id}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="photo-detail-info">
          <h2>{photo.title}</h2>
          <p className="photo-category">หมวดหมู่: {photo.category}</p>
          <p className="photo-description">
            {photo.description || "ไม่มีคำอธิบายสำหรับรูปภาพนี้"}
          </p>

          <div className="photo-metadata">
            <p>
              <strong>วันที่ถ่าย:</strong> {photo.date || "ไม่ระบุ"}
            </p>
            <p>
              <strong>สถานที่:</strong> {photo.location || "ไม่ระบุ"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetail;