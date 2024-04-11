import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import "../../styles/IconComponent.scss"

const IconComponent = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="link">
      <>
      { link.includes("linkedin") && <FaLinkedin /> }
      { link.includes("github") && <FaGithub /> }
      </>
    </a>
  );
};

export default IconComponent;
