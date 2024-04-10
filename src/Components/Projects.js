/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { projectDetail } from '../data/fetchProject';
import { ProjectSingle } from './ProjectSingle';
import "../styles/Projects.scss"

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projets</h1>
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
