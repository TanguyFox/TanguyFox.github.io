import React from "react";
import { getImageUrl } from "../../utilis";
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Salut, Moi c'est Tanguy !</h1>
            <p className={styles.presentation}>Je suis actuellement en 3ème année de BUT Informatique au sein de l'IUT Nancy-Charlemagne 🏫 (54).<br /><br />
                Je suis le parcours "RÉALISATION D’APPLICATIONS : CONCEPTION, DÉVELOPPEMENT, VALIDATION". Il se concentre sur le cycle de vie du logiciel, de l’expression du besoin du client, à la conception, à la programmation, à la validation et à la maintenance de l’application. <br /><br />
                Plus précisément, je suis en option Ingénierie Logicielle destinée à former de futurs [...].
                N'hésitez pas à me contacter pour plus d'infos !
            </p>
            <a href="mailto:tanguyfox@gmail.com" className={styles.contactBtn}>Me contacter</a>
        </div>
        <div className={styles.portraitContainer}>
            <img src={getImageUrl("hero/photo_perso.png")} className={styles.portrait} alt="Photo de moi"/>
        </div>
       
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
}