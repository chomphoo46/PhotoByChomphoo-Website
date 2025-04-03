import React, { useState } from "react";
import "./Gallery.css";

function Gallery({ setCurrentSection, setSelectedPhoto }) {
  // สร้างข้อมูลตัวอย่าง - แทนที่ด้วยรูปภาพจริงของคุณ
  const photos = [
    {
      id: 1,
      url: "/src/assets/khanun.jpg",
      title: "graduation",
      category: "graduation",
      description: "ภาพถ่ายงานรับปริญญาของบัณฑิตใหม่ ถ่ายในวันรับจริง",
      date: "15 มีนาคม 2025",
      location: "มหาวิทยาลัยเกษตรศาสตร์  บางเขน",
    },
    {
      id: 2,
      url: "/src/assets/nida.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 3,
      url: "/src/assets/kim.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 4,
      url: "/src/assets/pookie.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 5,
      url: "/src/assets/chi.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 6,
      url: "/src/assets/save.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 7,
      url: "/src/assets/pator.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 8,
      url: "/src/assets/gace.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 9,
      url: "/src/assets/fern2.jpg",
      title: "graduation",
      category: "graduation",
    },
    {
      id: 10,
      url: "/src/assets/nursing.png",
      title: "รับหมวกพยาบาล",
      category: "nursing",
    },
    {
      id: 11,
      url: "/src/assets/กีตาร์.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 12,
      url: "/src/assets/rixa_1.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 13,
      url: "/src/assets/plam.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 14,
      url: "/src/assets/chula.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 15,
      url: "/src/assets/tar.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 16,
      url: "/src/assets/rixa_2.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 17,
      url: "/src/assets/ball_rixa.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 18,
      url: "/src/assets/jar.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 19,
      url: "/src/assets/ning.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 20,
      url: "/src/assets/mos.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 21,
      url: "/src/assets/nur.jpg",
      title: "portrait",
      category: "portrait",
    },
    {
      id: 22,
      url: "/src/assets/น้องไหม.jpg",
      title: "กีฬาสี",
      category: "sport",
    },
    {
      id: 23,
      url: "/src/assets/3k.jpg",
      title: "กีฬาสี",
      category: "sport",
    },
    {
      id: 24,
      url: "/src/assets/same.jpg",
      title: "กีฬาสี",
      category: "sport",
    },
    {
      id: 25,
      url: "/src/assets/mac.jpg",
      title: "งานเลี้ยง",
      category: "new-home",
    },
    {
      id: 26,
      url: "/src/assets/newhome.jpg",
      title: "ขึ้นบ้านใหม่",
      category: "new-home",
    },
    {
      id: 27,
      url: "/src/assets/newhome2.jpg",
      title: "ขึ้นบ้านใหม่",
      category: "new-home",
    },

    // เพิ่มรูปภาพอื่นๆ ตามต้องการ
  ];

  const [filter, setFilter] = useState("all");

  const filteredPhotos =
    filter === "all"
      ? photos
      : photos.filter((photo) => photo.category === filter);
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setCurrentSection("photoDetail");
  };

  return (
    <section className="gallery">
      <h2>ผลงานของฉัน</h2>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          ทั้งหมด
        </button>
        <button
          className={filter === "graduation" ? "active" : ""}
          onClick={() => setFilter("graduation")}
        >
          graduation
        </button>
        <button
          className={filter === "nursing" ? "active" : ""}
          onClick={() => setFilter("nursing")}
        >
          รับหมวกพยาบาล
        </button>
        <button
          className={filter === "new-home" ? "active" : ""}
          onClick={() => setFilter("new-home")}
        >
          ขึ้นบ้านใหม่/งานเลี้ยง
        </button>
        <button
          className={filter === "portrait" ? "active" : ""}
          onClick={() => setFilter("portrait")}
        >
          portrait
        </button>
        <button
          className={filter === "sport" ? "active" : ""}
          onClick={() => setFilter("sport")}
        >
          กีฬาสี
        </button>
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="photo-item"
            onClick={() => handlePhotoClick(photo)}
          >
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
