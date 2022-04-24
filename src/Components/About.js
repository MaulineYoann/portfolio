/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/About.scss'
import Button from './Button';
import CV from "../assets/CV.pdf"
import { arraySkill } from '../data/arraySkill';
import Skills from './Skills';

const About = () => {
  return (
    <section className="about">
      <h1>A Propos</h1>
      <p className="info">
        Vous trouverez ici plus d'informations sur moi, ce que je fais et mes
        compétences actuelles principalement en termes de programmation et de
        technologie
      </p>
      <section className="sectionContain">
        <aside className="presentation">
          <h2>Qui suis-je </h2>
          <p>
            <span>Passionné d'informatique</span> et de programmation, il est assez naturel que je me suis reconvertisse dans ce domaine.
            <br />
            Aujourd'hui <span>développeur Front-end</span> je développe des
            sites, applications web et des solutions pour les entreprises.
            <br />
            Curieux de nature je continue de développer mes compétences par la
            veille technologique, l'apprentissage de nouvelles méthodes,
            langages, et le <span>développement de projets perso.</span> <br />
            <span>Ouvert aux opportunités professionnelles</span>, je serais ravi
            de pouvoir vous apporter mon aide et mes compétences. N'hésiter pas à entrer en contact avec moi.
          </p>
          <a href={CV} className="resume" download={CV}>
            <Button name="Mon CV" />
          </a>
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
