import React from 'react';
import styled from 'styled-components';

const Skills = ({ skill }) => {
  const Contain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
    }
    p {
      font-size: 18px;
      font-weight: 600;    
    }
  `;
  return (
    <Contain>
      <img src={skill.logo} heigth={40} width={40} alt="logo de compétence" />
      <p>{skill.name}</p>
    </Contain>
  );
};

export default Skills;
