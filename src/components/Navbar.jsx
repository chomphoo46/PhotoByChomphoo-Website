import './Navbar.css'

function Navbar({ currentSection, setCurrentSection }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setCurrentSection('home')}>
        Photo By Chomphoo
      </div>
      <ul className="nav-links">
        <li 
          className={currentSection === 'home' ? 'active' : ''} 
          onClick={() => setCurrentSection('home')}
        >
          หน้าแรก
        </li>
        <li 
          className={currentSection === 'gallery' ? 'active' : ''} 
          onClick={() => setCurrentSection('gallery')}
        >
          แกลเลอรี่
        </li>
        <li 
          className={currentSection === 'packages' ? 'active' : ''} 
          onClick={() => setCurrentSection('packages')}
        >
          แพ็คเกจ
        </li>
        <li 
          className={currentSection === 'about' ? 'active' : ''} 
          onClick={() => setCurrentSection('about')}
        >
          เกี่ยวกับฉัน
        </li>
        <li 
          className={currentSection === 'contact' ? 'active' : ''} 
          onClick={() => setCurrentSection('contact')}
        >
          ติดต่อ
        </li>
      </ul>
    </nav>
  )
}

export default Navbar