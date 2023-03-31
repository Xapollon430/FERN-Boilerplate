import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SiteMap from '../Footer/SiteMap';
import Blog from '../Footer/Blog';
import Contact from '../Footer/Contact';
import Basic from '../Footer/Basic';
import { Context } from '../../wrapper/Store';

function FooterCustom(props) {
  const [state] = useContext(Context);
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

FooterCustom.propTypes = {
  bg: PropTypes.bool
};

FooterCustom.defaultProps = {
  bg: false
};

export default FooterCustom;
