// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Intro from 'src/containers/App/Intro';
import Header from 'src/containers/Header';
import Navigation from 'src/containers/Navigation';
import Main from 'src/containers/Main';
import './app.scss';
import 'axios-progress-bar/dist/nprogress.css';

// == Composant
const App = ({ fetchData, fetchCategories, fetchTags, setActiveCategory, fetchAbout, loading }) => {
  useEffect(() => {
    fetchData();
    fetchCategories();
    fetchTags();
    fetchAbout();

    const pathname = window.location.pathname.substr(1);
    const name = pathname.split('/');
    if (name[0] === 'advertising') {
      setActiveCategory('ADVERTISING');
    }
    else {
      setActiveCategory('EDITORIAL');
    }
  }, []);

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.parentNode.removeChild(intro);
      }, 1800);
    }
  }, [loading]);

  return (
    <div id="app">
      <Intro />
      <Header />
      <Main />
      <Navigation />
    </div>
  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchTags: PropTypes.func.isRequired,
  fetchAbout: PropTypes.func.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
