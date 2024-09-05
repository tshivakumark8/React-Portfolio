import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Web</span>Dev
      </div>
      <ul className="navbar-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#techtag">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
