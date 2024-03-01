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
            <p className={styles.description}>Description du BUT ici</p>
        </div>
    </section>
}