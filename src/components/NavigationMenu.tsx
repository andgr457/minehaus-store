import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './NavigationMenu.css'

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  //Ensure the nav menu is closed after navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Monthly Support Tiers", path: "/support/monthly" },
    { name: "One-Time Support", path: "/support/one-time" },
  ];

  return (
    <nav className='nav'>
      <div className='minehaus-hr'></div>

      <div className='nav-content'>
        
        {/* Logo & Hamburger Menu*/}
        <div style={{ cursor: 'pointer'}}>
          
          <div>
            <Link key={`home-link`} to={'/'} className='nav-header'>
              <img className='logo' src={'/images/minehaus-logo.png'} />
            </Link>
          </div>
          
        </div>

      </div>
      {/* Desktop Menu */}
      <div style={{cursor: 'pointer', float: 'right', marginRight: '5px', fontSize: 'larger'}} onClick={() => setIsOpen(!isOpen)} >
        {isOpen ? "✕" : "☰"}
      </div>
      <div className={`desktop-menu ${isOpen ? 'closed' : 'open'}`} style={{marginLeft: '10px'}}>
        {links.map((link) => (
          <Link key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        {links.map((link) => (
          <div>
            <Link
              key={link.name}
              to={link.path}
              className='nav-item'
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
        <div className='minehaus-hr' ></div>
      
    </nav>
  );
}