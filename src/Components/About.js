/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../styles/About.scss";
import { arraySkill } from "../data/arraySkill";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="about">
      <h1>A Propos</h1>
      <section className="sectionContain">
        <aside className="presentation">
          <h2>Qui suis-je </h2>
          <p>
            Développeur front-end passionné dans la création de sites web et d'applications
            robustes. Ma spécialité réside dans la maîtrise de JavaScript et
            React, où j'ai développé une solide expertise. Toujours avide
            d'apprendre et de relever de nouveaux défis, je suis constamment à
            l'affût des dernières tendances et techniques pour créer des
            expériences utilisateur exceptionnelles. Je suis enthousiaste à
            l'idée de contribuer à des projets innovants et de mettre en valeur
            mes compétences pour aider votre entreprise à atteindre ses
            objectifs. Contactez-moi pour discuter de la façon dont nous pouvons
            collaborer pour réussir ensemble.
          </p>
        </aside>
        <aside className="skills">
          <h2>Compétences</h2>
          <div className="skillsList">
            {arraySkill.map((skill, index) => (
              <div key={index}>
                <Skills skill={skill} />
              </div>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
};

export default About;
