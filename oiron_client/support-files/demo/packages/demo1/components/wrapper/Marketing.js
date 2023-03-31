import React, { useState, useEffect } from 'react';
import App from 'next/app';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import { create } from 'jss';
import rtl from 'jss-rtl';
import brand from '../../public/text/brand';
import HeadProps from '../HeadProperties';
import ThemePalette from './ThemePalette';
// Showcase Setup
import { i18n } from '../../i18n';
import appTheme from '../../theme/marketingMui';


let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('oironTheme') || 'light';
}

function Marketing(props) {
  const { children, pageName } = props;

  const [direction, changeDir] = useState('ltr');
  const [themeMode, changeMode] = useState(themeType);
  const [color, changeColor] = useState('sunset');
  const [theme, changeTheme] = useState({
    direction: i18n.language === 'ara' ? 'rtl' : 'ltr',
    ...appTheme('sunset', themeType)
  });

  useEffect(() => {
    // Set layout direction
    document.dir = i18n.language === 'ara' ? 'rtl' : 'ltr';

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDirection = dir => {
    setTimeout(() => {
      document.dir = dir;
    }, 200);
    changeDir(dir);
    changeTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const toggleDarkTheme = () => {
    localStorage.setItem('oironTheme', themeMode === 'light' ? 'dark' : 'light');
    changeMode(themeMode === 'light' ? 'dark' : 'light');
    changeTheme({
      direction,
      ...appTheme(color, themeMode === 'light' ? 'dark' : 'light')
    });
  };
  
  const handleChangeColor = selectedColor => {
    changeColor(selectedColor);
    changeTheme({
      direction,
      ...appTheme(selectedColor, themeMode)
    });
  };
                
  const muiTheme = createMuiTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  // Add new props to children
  const childrenWithProps = React.cloneElement(
    children,
    { 
      onToggleDark: toggleDarkTheme,
      onToggleDir: toggleDirection
    }
  );

  return (
    <div>
      <Head>
        <title>
          {brand.marketing.name}
          &nbsp; - &nbsp;
          {pageName}
        </title>
        <HeadProps />
      </Head>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {childrenWithProps}
          <ThemePalette
            changeColor={handleChangeColor}
            changeDir={toggleDirection}
            changeMode={toggleDarkTheme}
            isDark={themeMode}
            isRtl={direction}
            selectedColor={color}
          />
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

Marketing.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

Marketing.defaultProps = {
  pageName: 'Landing Page',
};

export default Marketing;
