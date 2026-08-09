// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//         <div className='logo'>
//             <h2>MyPortfolio</h2>
//         </div>

//         <ul className='nav-links'>
//             <li><a href='#home'>Home</a></li>
//              <li><a href='#about'>About</a></li>
//               <li><a href='#skills'>Skills</a></li>
//                <li><a href='#projects'>Projects</a></li>
//                 <li><a href='#contact'>Contact</a></li>
//         </ul>
      
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
     <div className="logo">
        <h3>Supriya</h3>
</div>

     
      {/* Hamburger */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

      

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;
