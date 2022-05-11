/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { projectDetail } from '../data/fetchProject';
import { ProjectSingle } from './ProjectSingle';
import "../styles/Projects.scss"

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projets</h1>
      <p>
        Voici une sélection de certaines de mes réalisations personnelles. D'autres
        sont mis à disposition sur
        <span>
          <a href="https://github.com/MaulineYoann" target="_blank">
            Github
          </a>
        </span>
        .
      </p>
      <div className="containProject">
        {projectDetail.map((project, index) => (
          <div key={index}>
            <ProjectSingle project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
