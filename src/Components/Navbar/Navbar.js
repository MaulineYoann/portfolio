/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png'
import './Navbar.scss'


export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(!showNav);

  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" height={100} width={100} />
        <ul className="box-contain">
          <Link to="/" className="items">
            Acceuil
          </Link>
          <Link className="items" to="#about">
            A propos
          </Link>
          <Link to="#project" className="items">
            Projets
          </Link>
          <Link className="items" to="#contact">
            Contact
          </Link>
        </ul>
        <div onClick={handleShowNav} className='burger'>
          <div className="cssBurger"></div>
          <GiHamburgerMenu className="burgerIcon "/>
        </div>
      </nav>
      {showNav && (
        <section className="sideNav">
          <ul>
            <Link to="/">
              <a onClick={handleShowNav}> Acceuil</a>
            </Link>
            <Link to="#about">
              <a onClick={handleShowNav}>A Propos</a>
            </Link>
            <Link to="#project">
              <a onClick={handleShowNav}>Project</a>
            </Link>
            <Link to="#contact">
              <a onClick={handleShowNav}>Contact</a>
            </Link>
          </ul>
        </section>
      )}
    </header>
  );
}
