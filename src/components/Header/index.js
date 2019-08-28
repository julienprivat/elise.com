// == Import : npm
import React from 'react';


// == Import : local
import './header.scss';

// == Composant
const Header = () => (
  <div id="header">
    <h1 id="title">Elise Accart Stilyste</h1>
    <h2 id="contact" className="is-hidden">
      freelance basé sur Paris. <br />
      Me contacter par mail sur <a href="mailto:hello@eliseaccart.com"> hello@eliseaccart.com </a> <br /> 
      ou par téléphone au +33 6 48 10 79 35
    </h2>
  </div>
);

// == Export
export default Header;
