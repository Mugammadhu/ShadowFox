import styles from "./Navbar.module.css";
import {getImageUrl} from '../../utils.js'
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
  
      <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
          Portfolio
        </a>
        <a href='https://drive.google.com/file/d/1vp7vqLgXMzL8IVWtGWP5WrsXfyGLO1rN/view?usp=sharing' target="_blank" className={styles.resume}>Resume</a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={menuOpen ? getImageUrl('nav/closeIcon.png') :getImageUrl("nav/menuIcon.png")}
            alt="menu-Btn" onClick={()=>{setMenuOpen(!menuOpen)}}
          />
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}` } onClick={()=>{setMenuOpen(false)}}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#Certificates">Certificates</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
   
  );
};
