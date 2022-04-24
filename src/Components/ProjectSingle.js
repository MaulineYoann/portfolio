
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Button from './Button';
import '../styles/ProjectSingle.scss'

export const ProjectSingle = ({ project }) => {
 
  return (
    <section className="projectSingle">
      <img
        src={project.image}
        max-height={350}
        max-width={350}
        alt={project.name}
      />
      <div className="infoProject">
        <p className='techno'>{project.techno}</p>
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
