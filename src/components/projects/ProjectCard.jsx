import React from "react";
import styles from "./ProjectCard.module.css"


export const ProjectCard = ({project: {title, description, languages, source}}) => {
    return (
    <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.languages}>{
            languages.map((language, id) => {
               return <li key={id} className={styles.language}>{language}</li>
            })
        }</ul>
        <div className={styles.links}><a href={source} className={styles.link} target="_blank">Source</a></div>
    </div>
    );
}