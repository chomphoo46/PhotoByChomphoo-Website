import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} [Chomphoo]. สงวนลิขสิทธิ์ทั้งหมด.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61555299486342" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://lin.ee/xYjPOrk" target="_blank" rel="noopener noreferrer">Line official</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer