import React from "react";
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utilis";

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div  className={styles.text}><h3>Restons en contact !</h3></div>
        <ul  className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:tanguyfox@gmail.com">tanguyfox@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon"/>
                <a href="https://github.com/TanguyFox">TanguyFox</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/tanguy-renard-302386255/">Tanguy Renard</a>
            </li>
        </ul>
    </footer> 
    
}