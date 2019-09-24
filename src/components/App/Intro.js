// == Import : npm
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// == Composant
const Intro = ({ loading }) => {
  const endLoading = classNames({
    endLoading: loading === false,
  });
  return (
    <div id="intro">
      <div className={`title ${endLoading}`}>
        ELISE ACCART
      </div>
      <div className={`titleMove ${endLoading}`}>
        ELISE ACCART
      </div>
    </div>
  );
};

Intro.propTypes = {
  loading: PropTypes.bool.isRequired,
};


// == Export
export default Intro;
