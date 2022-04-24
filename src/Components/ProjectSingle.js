
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Button from './Button';
import '../styles/ProjectSingle.scss'

export const ProjectSingle = ({ project }) => {
 
  return (
    <section className="projectSingle">
      <img
        src={project.image}
        max-height={320}
        max-width={320}
        alt={project.name}
      />
      <div className="infoProject">
        <h4>{project.techno}</h4>
        <p className="desc">{project.description}</p>
      </div>
      <div className="containButton">
        <div className="containLink">
          <a href={project.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <div className="containLink">
          <a href={project.web} target="_blank" rel="noreferrer">
            Site Web
          </a>
        </div>
      </div>
    </section>
  );
};
