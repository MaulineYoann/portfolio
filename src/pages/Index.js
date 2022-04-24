import '../styles/Index.scss'
import Home from '../Components/Home/Home';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import React from 'react';

export default function index() {
  return (
    <div className="container">
        <Home />
        <div id="about">
          <About />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
    </div>
  );
}
