import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import uiState from '~/theme/config';
import SiteMap from './SiteMap';
import Blog from './Blog';
import Contact from './Contact';
import Basic from './Basic';

function Main(props) {
  const [state] = useReducer(null, uiState);
  const { bg } = props;
  return (
    <div>
      { state.footer === 'basic' && <Basic bg={bg} />}
      { state.footer === 'blog' && <Blog bg={bg} />}
      { state.footer === 'contact' && <Contact bg={bg} />}
      { state.footer === 'sitemap' && <SiteMap bg={bg} />}
    </div>
  );
}

Main.propTypes = {
  bg: PropTypes.bool
};

Main.defaultProps = {
  bg: false
};

export default Main;
