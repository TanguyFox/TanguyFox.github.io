import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Rating } from 'react-simple-star-rating';
import "react-tabs/style/react-tabs.css"
import styles from "./SkillTabs.module.css"


export const SkillTabs = () => {
  return (
    <Tabs className={styles.container}>
        <TabList className={styles.tabList}>
            <Tab className={styles.tab} selectedClassName={styles.selected}>Générales</Tab>
            <Tab className={styles.tab} selectedClassName={styles.selected}>Techniques</Tab>
            <Tab className={styles.tab} selectedClassName={styles.selected}>Autres</Tab>
        </TabList>

        <TabPanel>
            <Tabs className={styles.subContainer}>
                <TabList className={styles.subtabList}>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Réaliser des applications </Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Optimiser des applications</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Adminisitrer des applications</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Gérer les données</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Conduire un développement</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Collaborer</Tab>
            </TabList>

            <TabPanel selectedClassName={styles.content}>
                <div className={styles.header}>
                    <h3>Réaliser des applications</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={4}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                
                <p>Le BUT Informatique forme à réaliser des applications, quelles soient web ou logicielles.
                    Ainsi, j'ai pu apprendre les concepts de programmation et de conception objet, les patrons de conception les plus répandus,
                    la modélisation (de données ou de besoin), l'analyse des besoins, les tests unitaires et la validation.
                    Cette compétence de réalisation est le coeur de ma formation et je pense y avoir des compétences solides.
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
                <div className={styles.header}>
                    <h3>Optimiser des applications</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={3}  fillColor='#2c0b47' size={25}/>
                    </div>
                   
                </div>
                <p>Depuis le deuxième semestre de ma deuxième année, j'apprends comment optimiser une application.
                    Cela passe par l'utilisation d'algorithme itératifs et récursifs, de structures de données classique,
                    du calcul de coût et de complexité d'un algorithme et la connaissance d'outils mathématiques.
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
                <div className={styles.header}>
                <h3>Administrer des applications</h3>
                <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={2.5}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>Le BUT Informatique apporte les compétences pour réaliser et accompagner une application tout au long de son cycle de vie.
                    Ainsi, j'ai pu acquérir des compétences en administration d'application, telles que l'administration système classique, ou 
                    encore les protocoles et services réseaux
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
                <div className={styles.header}>
                    <h3>Gérer des données</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={3.28}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>Une application étant étroitement liée aux données, ma formation m'a permis d'acquérir des compétences dans leur gestion.
                    Ainsi, je suis en capacité de modéliser des données, réaliser des requêtes SQL et PL/SQL, ou encore gérer les transactions.
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
            <div className={styles.header}>
                <h3>Conduire un développement</h3>
                <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={3.66}  fillColor='#2c0b47' size={25}/>
                    </div>
                    </div>
                <p>
                    Réaliser une application demande une certaine organisation. Dans ce but, le BUT m'a initié aux méthodes agiles.
                    Au cours de divers projets, j'ai dû (généralement en équipe), étudier les besoins client et développer les 
                    applications sous forme d'itérations, pour que le client soit régulièrement notifié de l'avancée du projet.
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
                <div className={styles.header}>
                    <h3>Collaborer</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={4}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                
                <p> La collaboration, que ce soit avec son équipe ou le client, est essentielle lors de la réalisation d'une application.
                    Pour cela, j'ai pu acquérir des solides compétences en communication, tant en français qu'en anglais, ainsi que les bonnes
                    pratiques de partages de code et de documents, notamment via Git, au cours des nombreux projets en équipe effectués.
                </p>
            </TabPanel>

            </Tabs>
        </TabPanel>

        <TabPanel>
            <Tabs className={styles.subContainer}>
            <TabList className={styles.subtabList}>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Programmation</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Développement</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Bases de données</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Système et réseau</Tab>
                <Tab className={styles.subtab} selectedClassName={styles.selectedSubtab}>Administration et déploiement</Tab>
            </TabList>

            <TabPanel selectedClassName={styles.content}>
                <div className={styles.header}>
                    <h3>Programmation</h3>
                    <div>
                         Note globale :  <Rating readonly iconsCount={5} allowFraction initialValue={4}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>
                    Quelle soit fonctionnelle ou orientée objet, la programmation est au coeur de ma formation.
                    J'aime particulièrement les bonnes pratiques que j'ai pu apprendre telles que les principes SOLID ou encore
                    certains patrons de conceptions qui permettent d'avoir un code propre. J'ai également une certaine facilité d'adaptation 
                    à différents langages par la multitude de ceux utilisés lors de ma formations. Là où j'ai encore des progrès à faire serait 
                    la partie algorithmique, essentielle à tout bon développement.  
                </p>
            </TabPanel>
            
            <TabPanel selectedClassName={styles.content}>
            <div className={styles.header}>
                    <h3>Développement</h3>
                    <div>
                         Note globale :  <Rating readonly iconsCount={5} allowFraction initialValue={3.75}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <div className={styles.subTitle}>
                    <h4>Web</h4>
                    <div>
                         <Rating readonly iconsCount={5} allowFraction initialValue={3.75}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <div>
                    Le développement web occupe une part importante dans ma formation. J'ai pu y apprendre les rudiments du HTML et CSS, puis 
                    y intégrer des scripts JavaScript (fonctions, objets, classes, DOM/évènements, et programmation asynchrone). J'ai ensuite appris
                    la programmation en PHP, notamment pour les cookies / sessions et le sécurité. Je pense avoir de bonne capacités dans ce domaine,
                    notamment la partie back-end. J'ai des compétences assez faible en style (CSS) mais j'ai pour objectif d'approfondir plus cet aspect.
                </div>
                <div className={styles.subTitle}>
                    <h4>Mobile</h4>
                    <div>
                        <Rating readonly iconsCount={5} allowFraction initialValue={2.66}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>
                    Le développement mobile n'en est qu'à ses débuts dans ma formation. Jusqu'à présent, j'ai pu découvrir le framework Flutter couplé au 
                    langage Dart à travers un projet de ToDo List. Pendant cette dernière année, nous avons pu approfondir ce domaine en utilisant l'outil TensorFlow dans 
                    un contexte d'application mobile de reconnaissance d'images. Comme ce domaine n'est pas très approfondi au cours de ma formation,
                    je pense être aux prémisces de ce que l'on peut faire en développement mobile
                </p>

                <div className={styles.subTitle}>
                    <h4>Gestion de projet</h4>
                    <div>
                        <Rating readonly iconsCount={5} allowFraction initialValue={3.5}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>
                    De manière plus générale, j'ai pu apprendre les méthodes d'analyse et de conception objet en UML. Lors de nombreux projets, j'ai été mis 
                    dans un contexte de développement agiles avec un système d'itérations : réaliser des tâches dans une période donnée au terme desquelles nous pouvions
                    montrer l'avancée au client. Enfin, j'ai été initié aux diagrammes de Gantt et de PERT pour planifier un projet et ses coûts.
                    Les nombreux projets que nous avons réalisé me permettent d'avoir une base solide en méthode agile et planification. 
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
            <div className={styles.header}>
                    <h3>Base de données</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={3.5}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>
                    La conception d'une base de données est une compétence utile lorsqu'il s'agit de développer une application ou un programme.
                    Personnellement, je suis en capacité de faire une modélisation UML d'une base de données et d'en établir des relations.
                    Je sais également effectuer des requêtes SQL pour gérer les données ou encore utiliser des Object-Relational Mapper (ORM) pour 
                    gérer les données au sein d'une application web par exemple. Comme pour la programmation, j'ai pu manipuler différents Système de Gestion de 
                    Base de Données (SGBD) ce qui m'a donné une forte capacité d'adaptation. D'un autre côté, l'aspect de normalisation, est une action 
                    assez complexe. J'ai également été initié au NoSQL lors de ma formation, mais cette forme de base de données ne pas été enseigné de manière 
                    à ce que je puisse la considérer comme acquise. De manière général, je sais gérer une base de données (création, requêtes, modification)
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
            <div className={styles.header}>
                    <h3>Système et réseau</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={2}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>
                    Mes compétences en système et réseau sont assez limitées. Le BUT m'a appris les protocoles et services réseaux intranet/internet tels que le TCP/IP, le DNS, HTTP, ou les sockets.
                    J'ai également appris la programmation Shell et système en C sous environnement Unix, ainsi que la gestion des processus et threads d'un programme.
                    
                    Une chose que j'ai trouvé très intéressante est l'API Remote Method Invocation (RMI). Propre à Java, elle permet de d'appeler des méthodes d'un programme tournant sur une notre machine.
                    Cette API permet de faire des programmes de manière simplifiée permettant à plusieurs machines d'intéragir entre elles. 

                    Ces domaines n'étant pas tous très développés, j'estime y avoir un niveau assez faible, sauf en RMI où j'ai eu un plus de facilités.
                </p>
            </TabPanel>

            <TabPanel selectedClassName={styles.content}>
            <div className={styles.header}>
                    <h3>Administration et déploiement</h3>
                    <div>
                         Note :  <Rating readonly iconsCount={5} allowFraction initialValue={2.66}  fillColor='#2c0b47' size={25}/>
                    </div>
                </div>
                <p>
                    Ces domaines ont été abordés lors de la dernière année du BUT. J'ai pu être initié à la virtualisation de services, 
                    mais surtout à l'utilisation de Docker, au déploiement cloud et au Continuous Integration (CI) et Continuous Development (CD).
                    Les CI/CD sont utilisés lors de développement collaboratif afin de garder un code partagé "sain" et de pouvoir automatisé le déploiement d'une application 
                    sur un serveur par exemple.
                    
                    Ces domaines étant arrivées tardivement, j'estime n'avoir acquis que les bases et avoir une grande marge de progression.
                </p>
            </TabPanel>
            </Tabs>
        </TabPanel>        
    </Tabs>
  )
}
