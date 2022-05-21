import React from "react";
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <h1 className="nav--title">
        Musicder
      </h1>
      <a 
        href="https://github.com/ike-gg"
        target="_blank"
        rel="noreferrer"
        className="nav--github btn-like btn-primary" 
      >GitHub</a>
    </nav>
  )
}

export default Nav;