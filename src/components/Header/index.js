// == Import : npm
import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';


// == Import : local
import './header.scss';

// == Composant
const Header = ({ showAbout, closeAbout, about }) => {
  const handleClickAbout = () => {
    showAbout();
  };
  const handleCloseAbout = () => {
    closeAbout();
  };
  const handleTopScroll = () => {
    const body = document.querySelector('body');
    const ht = document.querySelector('html');
    // safari
    if (ht.scrollTop === 0) {
      body.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // other
    if (body.scrollTop === 0) {
      ht.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  

  const quidAbout = className({
    aboutShow: about === true,
  });

  return (
    <div id="header">
      <h1 id="title">Elise Accart Styliste</h1>
      <div className={`contact ${quidAbout}`} onClick={handleClickAbout}>ABOUT</div>
      <div className={`return ${quidAbout}`} onClick={handleCloseAbout}>&#8647;</div>
      <div className="white"></div>
      <div className={`top ${quidAbout}`} onClick={handleTopScroll}><span>&#8648; </span> TOP</div>
    </div>
  );
}

Header.propTypes = {
  showAbout: PropTypes.func.isRequired,
  about: PropTypes.bool.isRequired,
  closeAbout: PropTypes.func.isRequired,
};


// == Export
export default Header;
