import React, {useState} from "react";
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utilis'


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
        <img 
            className={styles.menuBtn} 
            src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png") } 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li><a href="#studies">Ma formation</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Expériences</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>
}