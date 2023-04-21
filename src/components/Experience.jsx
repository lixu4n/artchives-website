import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
  contentStyle={{
    background: "#1d1836",
    color: "#fff",
    width: "46%",
  }}
  contentArrowStyle={{ borderRight: "10px solid  #232631" }}
  date={experience.date}
  iconStyle={{ background: experience.iconBg }}
 
>

      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[200px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-10 list-disc ml-2 space-y-8'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-3 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      <div dangerouslySetInnerHTML={{ __html: experience.image }} />
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (


    <>
    <div></div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Résultats
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Analyse
        </h2>
        <h2 >
        Voici l'analyse de nos diagrammes. Les élèves
           ce sont concentré sur
           les données qui ont comme 
           but d'évaluer la scène canadienne française 
           au courant des 10 ans du Centre national des arts. Alors dans les tableaux et diagrammes qui suivent, on utilise majoritairement les données de lieu de naissance, de pays d'origine,
          d'origine éthnique, de genre et de langues
          des artistes. On étudie la citoyenneté, l'origine éthnique et les genres. On vous encourage de créer vos propres opinions et analyses afin 
        </h2>
        
      </motion.div>

      <div className='mt-10 flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");