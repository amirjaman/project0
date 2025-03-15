import React from 'react';
import { Link } from 'gatsby';
import './header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        Welth Finovation
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/user" className="header__menu-link">Home</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/learning" className="header__menu-link">Learning</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/tools" className="header__menu-link">Tools</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/articles" className="header__menu-link">Articles</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/profile" className="header__menu-link">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;