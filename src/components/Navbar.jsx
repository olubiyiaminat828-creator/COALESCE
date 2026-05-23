
import styles from '../styles/Navbar.module.css';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import {X} from "lucide-react";
import { Link } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
  return (
     <>
         <nav className={styles.navbar}>
      {/* Logo Group */}
      <div className={styles.logoGroup}>
        <div className={styles.logoIcon}>
          {/* Simple SVG matching the abstract geometric logo in your image */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 9H9L12 2Z" fill="#6366F1"/>
            <path d="M12 22L9 15H15L12 22Z" fill="#4F46E5"/>
            <path d="M2 12L9 9V15L2 12Z" fill="#4338CA"/>
            <path d="M22 12L15 15V9L22 12Z" fill="#312E81"/>
          </svg>
        </div>
        <span className={styles.logoText}>Coalesce</span>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
         <Link to="/"><li>Home</li></Link>
       <Link to="/about"><li><a>About</a></li></Link>
        <Link to="/features"><li><a>Features</a></li></Link>
       <Link> <li><a>Workflows</a></li></Link>
       <Link> <li><a href="#blog">Blog</a></li></Link>
        <Link><li><a href="#support">Support</a></li></Link>
      </ul>
      {/* Auth Buttons */}
      <div className={styles.authButtons}>
        <button className={styles.btnSignIn}>Sign In</button>
        <button className={styles.btnStartFree}>Start Free Trial</button>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className={`${styles.hamburger}`}>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </nav>
     <div className={`${styles.sidebar} ${isOpen ? styles.open: ""}`}>
        <div className={styles.close_sidebar} onClick={() => setIsOpen(!isOpen)}>
             <X size={28}/>
        </div>
          <ul className={styles.navLinks} style={{flexDirection: "column"}}>
          <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#workflows">Workflows</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      {/* Auth Buttons */}
      <div className={styles.authButtons}>
        <button className={styles.btnSignIn}>Sign In</button>
        <button className={styles.btnStartFree}>Start Free Trial</button>
      </div>
     </div>
     </>
  );
}

export default Navbar;