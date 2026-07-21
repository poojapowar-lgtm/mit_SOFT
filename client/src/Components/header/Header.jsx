import React, { useState } from "react";
import { RiHome3Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navMenus, subMenus } from "./navMenus";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="header">

      {/* Left Logo Section */}
      <div className="logo-section">
        <img src="/assets/images/home/mit_logo_black.webp" alt="Logo 1" className="logo1" />
        <div className="logo2-section">
          <img src="/assets/images/home/SoFT_Logo.png" alt="Logo 2" className="logo2" />
          <div className="logo-text">
            <h1 className="logo-title">MIT-SoFT</h1>
            <p className="logo-subtitle">School of Food Technology</p>
          </div>
        </div>
      </div>


      {/* Desktop Nav */}
      <nav className="nav-section">
        <ul className="sub-navbar">
          {subMenus.map((item) => (
            <li key={item.key} className="submenu-item">
              {item.to ? (
                <Link to={item.to} className="nav-link">{item.title}</Link>
              ) : (
                <>
                  <span className="nav-item">
                    {item.title}
                    <IoMdArrowDropdown />
                  </span>
                  {item.columns && (
                    <ul className="dropdown-menu">
                      {item.columns.map((sub, index) => (
                        <li key={index}><Link to={sub.to}>{sub.name}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
        <ul className="main-navbar">
          {navMenus.map((item) => (
            <li key={item.key}>
              {item.to ? (
                <Link to={item.to}>
                  {item.key === "home" ? <RiHome3Fill /> : item.title}
                </Link>
              ) : (
                <>
                  <span className="nav-item">
                    {item.title}
                    <IoMdArrowDropdown className="dropdown-icon" />
                  </span>
                  {item.columns && (
                    <ul className="dropdown-menu">
                      {item.columns.map((sub, index) => (
                        <li key={index}><Link to={sub.to}>{sub.name}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      {!isOpen && (
        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu />
        </div>
      )}

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={closeMenu}><FaTimes /></div>


        <ul className="mobile-main-navbar">
          {navMenus.map((item) => (
            <li key={item.key}>
              {item.to ? (
                <Link to={item.to} onClick={closeMenu}>
                  {item.key === "home" ? <RiHome3Fill /> : item.title}
                </Link>
              ) : (
                <>
                  <span onClick={() => toggleDropdown(item.key)}>
                    {item.title} <IoMdArrowDropdown className={openDropdown === item.key ? "rotated" : ""} />
                  </span>
                  <ul className={`mobile-dropdown ${openDropdown === item.key ? "open" : ""}`}>
                    {item.columns.map((sub, index) => (
                      <li key={index}><Link to={sub.to} onClick={closeMenu}>{sub.name}</Link></li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* <ul className="mobile-sub-navbar">
          {subMenus.map((item) => (
            <li style={{ color: "#004d00"}} key={item.key}>
              <span onClick={() => toggleDropdown(item.key)}>
                {item.title} <IoMdArrowDropdown className={openDropdown === item.key ? "rotated" : ""} />
              </span>
              {item.columns && (
                <ul className={`mobile-dropdown ${openDropdown === item.key ? "open" : ""}`}>
                  {item.columns.map((sub, index) => (
                    <li key={index}><Link to={sub.to} onClick={closeMenu}>{sub.name}</Link></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul> */}
        <ul className="mobile-sub-navbar">
          {subMenus.map((item) => (
            <li style={{ color: "#004d00" }} key={item.key}>

              {item.to ? (
                <Link to={item.to} onClick={closeMenu}>
                  {item.title}
                </Link>
              ) : (
                <>
                  <span onClick={() => toggleDropdown(item.key)}>
                    {item.title}
                    <IoMdArrowDropdown
                      className={openDropdown === item.key ? "rotated" : ""}
                    />
                  </span>

                  {item.columns && (
                    <ul className={`mobile-dropdown ${openDropdown === item.key ? "open" : ""}`}>
                      {item.columns.map((sub, index) => (
                        <li key={index}>
                          <Link to={sub.to} onClick={closeMenu}>
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}

            </li>
          ))}
        </ul>

      </div>

      {isOpen && <div className="menu-overlay" onClick={closeMenu} />}

    </header>
  );
};

export default Header;
