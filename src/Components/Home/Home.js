import React from 'react';
import './Home.scss';
import profil from '../../assets/profil.png';
import Typewriter from 'typewriter-effect';
import IconComponent from '../../assets/Icon/IconComponent';
import { links } from '../../assets/Link/Link';

function Home() {
  
  return (
    <hero className="home">
      <div className="containTitle">
        <h1 className="title">
          Bienvenue, <br /> je suis <span className="name">Yoann Mauline</span>
          <br />
          {
            <Typewriter
              options={{
                strings: [
                  'Développeur Front-end',
                  'Développeur JavaScript',
                  'Consultant Informatique',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          }
        </h1>
        <p className="useful">
          Liens utiles:
          <IconComponent link={links.linkedin}/>
          <IconComponent link={links.github} />
        </p>
      </div>
      <div className="imageContain">
        <img 
        className='profil'
        src={profil} 
        width={400} 
        height={400} 
        alt="profil" 
        />
      </div>
    </hero>
  );
}

export default Home;
