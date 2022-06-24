/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo2.png';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(!showNav);
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav>
        <HashLink smooth to="#home" scroll={(el) => scrollWithOffset(el)}>
          <img src={logo} alt="logo" height={100} width={100} />
        </HashLink>
        <ul className="box-contain">
          <li>
            <HashLink
              smooth
              to="#home"
              scroll={(el) => scrollWithOffset(el)}
              className="items"
            >
              Accueil
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#about"
              scroll={(el) => scrollWithOffset(el)}
              className="items"
            >
              A propos
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#project"
              scroll={(el) => scrollWithOffset(el)}
              className="items"
            >
              Projets
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="#contact"
              scroll={(el) => scrollWithOffset(el)}
              className="items"
            >
              Contact
            </HashLink>
          </li>
        </ul>
        <div onClick={handleShowNav} className="burger">
          <div className="cssBurger"></div>
          <GiHamburgerMenu className="burgerIcon " />
        </div>
      </nav>
      {showNav && (
        <section className="sideNav">
          <ul>
            <HashLink smooth to="/#home" scroll={(el) => scrollWithOffset(el)}>
              <a onClick={handleShowNav}> Accueil</a>
            </HashLink>
            <HashLink smooth to="#about" scroll={(el) => scrollWithOffset(el)}>
              <a onClick={handleShowNav}>A Propos</a>
            </HashLink>
            <HashLink
              smooth
              to="#project"
              scroll={(el) => scrollWithOffset(el)}
            >
              <a onClick={handleShowNav}>Project</a>
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              scroll={(el) => scrollWithOffset(el)}
            >
              <a onClick={handleShowNav}>Contact</a>
            </HashLink>
          </ul>
        </section>
      )}
    </header>
  );
}
