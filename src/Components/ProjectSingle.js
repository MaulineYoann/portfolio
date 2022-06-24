import React from 'react';
// eslint-disable-next-line no-unused-vars
// import '../styles/ProjectSingle.scss';
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa';
import '../styles/Dev.scss';

export const ProjectSingle = ({ project }) => {
  return (
    <section className="projectSingle">
      <img
        className="projectImg"
        src={project.image}
        // max-height={350}
        // max-width={350}
        alt={project.name}
      />
      <div className="infoProject">
        <p className="techno">
          Technologie utilisé:{' '}
          <span className="language">{project.techno}</span>
        </p>
        <p className="desc">{project.description}</p>
      </div>
      <div className="containButton">
        <div className="containLink">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> Github
          </a>
        </div>
        <div className="containLink">
          <a href={project.web} target="_blank" rel="noreferrer">
            <FaGlobeAmericas className="icon" /> Site Web
          </a>
        </div>
      </div>
    </section>
  );
};
