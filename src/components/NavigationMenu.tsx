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
    { name: "Home", path: "/home" },
    { name: "Monthly Support Tiers", path: "/support/monthly" },
    { name: "One-Time Support", path: "/support/one-time" },
  ];

  return (
    <nav className='nav'>
      <div className='minehaus-hr' style={{marginBottom: '5px'}}></div>

      <div className='nav-content'>
        
        {/* Logo & Hamburger Menu*/}
        <div style={{ cursor: 'pointer'}}>
          <div>
            <Link key={`home-link`} to={'/'} className='nav-header'>
              <img  className='logo' src='images/minehaus-logo.png' />
            </Link>
          </div>
          <div style={{float: 'left'}} onClick={() => setIsOpen(!isOpen)} >
            <Link to='checkout'>
              <img style={{height: '1.3em', marginTop: '5px'}} src='images/shopping-cart-svgrepo-com.svg' />
            </Link>
          </div>
          <div style={{float: 'right', fontSize: 'larger'}} onClick={() => setIsOpen(!isOpen)} >
            {isOpen ? "✕" : "☰"}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ gap: "24px" }}>
          {links.map((link) => (
            <Link key={link.name} to={link.path} style={{  }}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className='nav-item'
            style={{ }}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className='minehaus-hr' style={{marginTop: '5px'}}></div>
    </nav>
  );
}