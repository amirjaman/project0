import React from "react";
import { Link } from "gatsby";
import "./landingheader.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Welth Finovation</div>
      <nav className="header__nav">
        <Link to="http://localhost:3000/auth/google/" className="header__menu-link">
          Login/Signup
        </Link>
      </nav>
    </header>
  );
};

export default Header;
