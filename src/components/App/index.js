// == Import : npm
import React from 'react';

// == Import : local
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Navigation />
  </div>
);

// == Export
export default App;
