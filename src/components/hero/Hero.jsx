import React from "react";
import { getImageUrl } from "../../utilis";
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Salut, Moi c'est Tanguy !</h1>
            <p className={styles.presentation}>
                Passionné par le monde numérique depuis mon adolescence, je cherche à comprendre comment ce monde fonctionne.<br />
                Outre mes recherches personnelles, je me suis orienté vers un Bachelor Universitaire de Technologie (BUT) en Informatique, au sein de 
                l'IUT Nancy-Charlemagne de Nancy, pour mettre un pied à l'étrier dans ce vaste monde.<br /> <br /> Je suis aujourd'hui en 3ème année, 
                en option Ingénierie Logicielle. <br />
                Ces 3 années m'ont permis de découvrir ce qu'est le monde informatique et ce qu'on peut y faire. J'ai d'ailleurs un certain attrait
                pour le développement web (notamment back-end) ou logiciel, ou encore les bases de données. <br />
                
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