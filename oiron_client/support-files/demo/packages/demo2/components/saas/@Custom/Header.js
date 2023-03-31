import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Mixed from '../Header/Mixed';
import Mega from '../Header/Mega';
import DropList from '../Header/DropList';
import NavScroll from '../Header/NavScroll';
import Search from '../Header/Search';
import Basic from '../Header/Basic';
import Blog from '../Header/BlogHeader';
import Hamburger from '../Header/Hamburger';
import { Context } from '../../wrapper/Store';

function HeaderCustom(props) {
  const [state] = useContext(Context);
  const { home, onToggleDark, onToggleDir } = props;
  return (
    <div>
      { state.header === 'mixed' && <Mixed home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'mega' && <Mega onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'droplist' && <DropList onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'navscroll' && <NavScroll home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'search' && <Search onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'basic' && <Basic onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'blog' && <Blog onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
      { state.header === 'hamburger' && <Hamburger home={home} onToggleDark={onToggleDark} onToggleDir={onToggleDir} />}
    </div>
  );
}

HeaderCustom.propTypes = {
  home: PropTypes.bool,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

HeaderCustom.defaultProps = {
  home: false
};

export default HeaderCustom;
