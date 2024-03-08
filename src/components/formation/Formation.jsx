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
               Le Bachelor Universitaire de Technologie (BUT) en Informatique est un diplôme post-BAC se déroulant sur trois ans.
               Il mêle cours théorique et TD mais aussi des Situation Apprentissage et d'Evaluation (SAE) étant des projets de plus 
               grande ampleur, réalisé par groupe de 2 à 6 suivant les sujets, permettant de mettre en pratique nos compétences dans des situations plus 
               proche du réel qu'en cours. <br /><br />Pendant ces trois ans, j'ai pu apprendre les concepts de conception, de programmation, de gestion de projet.
               J'ai pu aussi voir les concepts d'administration système, d'algorithmique ou encore de gestion et traitements des données. <br /><br />
               Personnellement, je suis dans le Parcours "Réalisation d'applications : conception, développement, validation" se concentrant sur le cycle de vie d'une application : du besoin à la maintenance.
               Plus précisément, je suis dans l'option "Ingénierie Logicielle" destinée à la poursuite d'études. <br/><br/>
                
                Le BUT peut amener à 2 voies :<br /> <br />
                <ol>
                    <li>La voie professionnelle : les compétences acquises permettent une insertion rapide dans le monde professionnel pour ceux qui le souhaitent</li>
                    <li>La poursuite d'étude : la formation garantie un niveau scientifique suffisant pour poursuivre ses études en école d'ingénieur ou en Master</li>
                </ol><br /><br />

              

                En arrivant dans ce diplome, je pensais seulement apprendre à créer des sites webs et applications comme on en utilise beaucoup.
                Finalement, j'ai appris beaucoup plus que ça et je suis plus polyvalant que ce que j'aurais imaginé en postulant à cette formation.
            </p>
            
        </div>
    </section>
}