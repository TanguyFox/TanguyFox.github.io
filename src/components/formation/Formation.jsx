import React from "react";
import styles from "./Formation.module.css"
import { getImageUrl } from "../../utilis";

export const Formation = () => {
    return <section className={styles.container} id="studies">
        <h2 className={styles.title}>Le BUT Informatique</h2>
        <div className={styles.content}>
            <img src={getImageUrl("formation/diploma.png")} 
                alt="Diploma hat"
                className={styles.formationImg}
            />
            <p className={styles.description}>
                Le BUT Informatique est un diplome formant de futurs développeur web et/ou logiciel. 
                Tout au long de la formation, nous apprenons les bases de l'Informatique, comment développer une application
                mais aussi comment organiser et conduire un projet Informatique.
            </p>
        </div>
    </section>
}