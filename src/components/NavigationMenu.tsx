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
      <div>
        
      </div>
      <div className='minehaus-hr'></div>

      <div className='nav-content'>
        
        {/* Logo & Hamburger Menu*/}
        
        <div style={{ cursor: 'pointer'}}>
          <div>
            <Link key={`home-link`} to={'/'} className='nav-header'>
              <img style={{borderRadius: '6px'}} className='logo' src={'/images/minehaus-logo.png'} />
            </Link>
          </div>
        
        </div>
      </div>
      <div className='page-main reveal'>
        <div className={`desktop-menu ${isOpen ? 'closed' : 'open'}`} style={{marginLeft: '10px'}}>
          {links.map((link) => (
            <Link key={link.name} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>  
      </div>
    </nav>
  );
}