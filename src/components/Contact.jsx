import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (

    




    <div
      className={`xl:mt-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-20 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Conclusion</p>
        <h3 className={styles.sectionHeadText}>Discussion.</h3>
        <br/>
        <br/>

        <p>

        La richesse culturelle d'Ottawa et la présence du Centre national des arts soulèvent des questions importantes sur la représentation géoculturelle dans le domaine des arts, et cette étude vise à y répondre en examinant la représentation des artistes impliqués dans les productions du Théâtre français du CNA sur une période de 10 ans.
<br/>
<br/>
Le projet de recherche a été mené par un groupe d'étudiants en collaboration avec le Dr Jada Watson, en utilisant des méthodologies rigoureuses pour collecter et analyser des données provenant de diverses sources, y compris les programmations du CNA. Les résultats ont été présentés sous forme de tableaux croisés et de diagrammes pour permettre une analyse approfondie des tendances et des caractéristiques des artistes impliqués.

<br/>
<br/>
Les données révèlent que la majorité des artistes sur la scène théâtrale française du CNA sont d'origine ethnique nord-américaine autre qu'autochtone, ce qui suggère que le CNA met en avant ces artistes. Cependant, il y a une sous-représentation des artistes autochtones et non-blancs, ce qui soulève des questions sur la diversité et l'inclusion dans le domaine des arts au Canada.
<br/>
<br/>
Les résultats montrent également que la majorité des artistes sont Canadiens, ce qui est une bonne nouvelle pour le talent canadien, mais il est important de noter que la diversité et l'inclusion sont également importantes pour la représentation géoculturelle dans le domaine des arts.
<br/>
<br/>
En somme, cette étude a permis de dresser une liste de questions importantes sur la représentation géoculturelle des artistes dans le domaine des arts et plus spécifiquement dans le Théâtre français du CNA. Ces questions sont essentielles pour comprendre les tendances actuelles et pour encourager une représentation plus diversifiée et inclusive sur la scène théâtrale canadienne.
         </p>
        <br/>
        <br/>


        <h3 className={styles.sectionHeadText}>Références.</h3>
        <br/>
        <br/>

        <h4>
        Les articles :
        </h4>

        <p>
        <br/>
        Graphes, cartes et arbres par Franco Morreti<br/>
        <br/>
        « Changer le monde un hit à la fois » ? Programmation et diversité à CKOI-FM par Dr. Jada Watson
        <br/>

        </p>
        <br/>

        <h3 className={styles.sectionHeadText}>À propos.</h3>
        <p>
        <br/>
        projet par Céleste Duguay, étudiante en sciences informatiques et sciences humaines numériques digitales.
        <br/>
        <br/>
        "J'ai eu un plaisir de mettre en oeuvre un projet qui à la fois me permet de mettre 
        en pratique mes habiletés en technologie et de codage, tout en se ratachant à notre projet final!
        
        " <br/>
        <br/>
        <h3 className={styles.sectionHeadText}>Ressources.</h3>
        <br/>
        Projet codé en React.js, Three.js. <br/>
        <br></br>
        Ressources comme partie de codes, logos, modèle 3D: 
<br/>
            <br/>@Adrian Hajdin<br/>
            BrandCrowd.com, Canva.com & Sketchfab.com (logo & images 3D)<br/>
        </p>

        <br/>
        <br/>

        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");