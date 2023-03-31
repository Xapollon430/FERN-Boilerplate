import React, { useContext } from 'react';
import SiteMap from '../Footer/SiteMap';
import Blog from '../Footer/Blog';
import Contact from '../Footer/Contact';
import Basic from '../Footer/Basic';
import { Context } from '../../wrapper/Store';

function FooterCustom() {
  const [state] = useContext(Context);
  return (
    <div>
      { state.footer === 'basic' && <Basic />}
      { state.footer === 'blog' && <Blog />}
      { state.footer === 'contact' && <Contact />}
      { state.footer === 'sitemap' && <SiteMap />}
    </div>
  );
}

export default FooterCustom;
