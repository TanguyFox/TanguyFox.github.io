import React from "react";
import styles from "./Skills.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utilis";

export const Skills = () => {
    return <section id="skills" className={styles.container}>
        <h2 className={styles.title}>Mes compétences</h2>
        <div className={styles.content}>
            <div className={styles.languages}>{
                skills.map((skill,id) => {
                    return <div key={id} className={styles.language}>
                       <div className={styles.languageImgContainer}>
                        <a href={skill.website}><img src={getImageUrl(skill.imgSrc)} alt={skill.title} /></a>
                       </div>  
                       <p>{skill.title}</p>
                    </div>
                })
            }</div>
            <ul className={styles.skills}>
                Mettre tableau de compétences ici
            </ul>
        </div>
    </section>;
}