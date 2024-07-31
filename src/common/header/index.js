import React, { useState, useEffect, useRef, useContext } from 'react';
import './header.scss';
import Toyotalogomain from "../../assets/icons/toyotalogomain.svg";
import DropdownIcon from "../../assets/icons/dropdownicon.png";
import DropdownIconsc from "../../assets/icons/dropdowniconsc.png";
import mapicon from "../../assets/icons/map.png";
import mobioleicon from "../../assets/icons/mobile.png";
import haderbackground from "../../assets/headerimage/haderbackground.png";
import { Link } from 'react-router-dom';
import { CursorContext } from '../../components/CursorProvider';

const Header = () => {
  const [dropdown, setDropdown] = useState({
    products: false,
    service: false,
    india: false,
    more: false,
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown({
          products: false,
          service: false,
          india: false,
          more: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name) => {
    setDropdown((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, key === name ? !prev[key] : false])),
    }));
  };

  const navItems = [
    { label: 'PRODUCTS', key: 'products', dropdownItems: ['Product 1', 'Product 2'] },
    { label: 'SERVICE', key: 'service', dropdownItems: ['Service 1', 'Service 2'] },
    { label: 'TOYOTA IN INDIA', key: 'india', dropdownItems: ['Option 1', 'Option 2'] },
    { label: 'MORE', key: 'more', dropdownItems: ['More 1', 'More 2'] },
  ];

  const additionalNavItems = [
    { label: 'VIRTUAL SHOWROOM', href: '/' },
    { label: 'USED CARS', href: '/' },
    { label: 'MOBILITY', href: '/' },
    { label: 'MEDIA', href: '/' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const { setColor } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setColor('highlightColor');
  };

  const handleMouseLeave = () => {
    setColor('defaultColor');
  };


  return (
    <div>
      <header>
        <div className="headerrl-main">
          <div className="header-background-main">
            <img src={haderbackground} alt="haderbackground" />
          </div>
          <div className="header-main">
            <div className="header-fl-maain">
              <div className="brand">
                <Link to={"/"}><img src={Toyotalogomain} alt="Toyotalogomain" /></Link>
              </div>
              <nav className="nav">
                {navItems.map(({ label, key, dropdownItems }) => (
                  <div key={key} className="nav-item">
                    <span
                      onClick={() => toggleDropdown(key)}
                      className={dropdown[key] ? 'active' : ''}
                    >
                      {label}
                      <img src={DropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </span>
                    {dropdown[key] && (
                      <div ref={dropdownRef} className="dropdown">
                        {dropdownItems.map((item, index) => (
                          <a key={index} href={`/${index + 1}`}>{item}</a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {additionalNavItems.map(({ label, href }) => (
                  <div key={href} className="nav-item">
                    <a href={href}>{label}</a>
                  </div>
                ))}
              </nav>

              <div className="menumain">
                <div className={`menubackground-main ${isActive ? 'active' : ''}`}>
                  <div className="menu-toggle">
                    <input onClick={toggleMenu} id="burger-checkbox" type="checkbox" />
                    <label className="burger" htmlFor="burger-checkbox">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                  </div>
                  <div className="btn-hover"></div>
                </div>
              </div>

              <div className="menu-contant highlight-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={`menu ${isOpen ? 'open' : 'close'}`}>
                  <nav className="nav">
                    {navItems.map(({ label, key, dropdownItems }) => (
                      <div key={key} className="nav-item">
                        <span
                          onClick={() => toggleDropdown(key)}
                          className={dropdown[key] ? 'active' : ''}
                        >
                          {label}
                          <img src={DropdownIconsc} alt="Dropdown Icon" className="dropdown-icon" />
                        </span>
                        {dropdown[key] && (
                          <div ref={dropdownRef} className="dropdown">
                            {dropdownItems.map((item, index) => (
                              <a key={index} href={`/${index + 1}`}>{item}</a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    {additionalNavItems.map(({ label, href }) => (
                      <div key={href} className="nav-item">
                        <a href={href}>{label}</a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <div className="Header-mobile-main">
        <div className="mobile-header-rl-main">
          <div className="mobile-header-background-main">
            <img src={haderbackground} alt="haderbackground" />
          </div>
          <div className="header-contant-main">
            <div className="header-mobile-contant">
              <div>
                <div className="menu-toggle">
                  <input onClick={toggleMenu} id="burger-checkbox-sc" type="checkbox" />
                  <label className="burger" htmlFor="burger-checkbox-sc">
                    <span></span>
                    <span></span>
                    <span></span>
                  </label>
                </div>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`menu highlight-section ${isOpen ? 'open' : 'close'}`}>
                  <nav className="nav">
                    {navItems.map(({ label, key, dropdownItems }) => (
                      <div key={key} className="nav-item">
                        <span
                          onClick={() => toggleDropdown(key)}
                          className={dropdown[key] ? 'active' : ''}
                        >
                          {label}
                          <img src={DropdownIconsc} alt="Dropdown Icon" className="dropdown-icon" />
                        </span>
                        {dropdown[key] && (
                          <div ref={dropdownRef} className="dropdown">
                            {dropdownItems.map((item, index) => (
                              <a key={index} href={`/${index + 1}`}>{item}</a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    {additionalNavItems.map(({ label, href }) => (
                      <div key={href} className="nav-item">
                        <a href={href}>{label}</a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="header-mobile-logo">
                <Link to={"/"}><img src={Toyotalogomain} alt="Toyotalogomain" /></Link>
              </div>

              <div className="header-mobile-nevigation-icons-main">
                <div className="map-icon">
                  <img src={mapicon} alt="mapicon" />
                </div>
                <div className="telephone-icon">
                  <img src={mobioleicon} alt="mobioleicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Header;