import React from "react";
import styles from "./Skills.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utilis";
import { SkillTabs } from "./SkillTabs";

export const Skills = () => {
    return <section id="skills" className={styles.container}>
        <h2 className={styles.title}>Mes compétences</h2>
        <div className={styles.content}>
            <SkillTabs />
        <h3 className={styles.subtitle}>Langages</h3>
            <div className={styles.languages}>{
                skills.map((skill,id) => {
                    return <div key={id} className={styles.language}>
                       <div className={styles.languageImgContainer}>
                        <a href={skill.website} target="_blank"><img src={getImageUrl(skill.imgSrc)} alt={skill.title} /></a>
                       </div>  
                       <p>{skill.title}</p>
                    </div>
                })
            }</div>
            
        </div>
    </section>;
}