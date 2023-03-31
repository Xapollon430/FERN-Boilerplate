import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createTheme,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import { create } from 'jss';
import { PageTransition } from 'next-page-transitions';
import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import { appWithTranslation } from 'next-i18next';
import lngDetector from '../lib/languageDetector';
import appTheme from '~/theme/appTheme';
/* import css vendors */
import 'react-image-lightbox/style.css';
import '~/vendors/animate.css';
import '~/vendors/animate-slider.css';
import '~/vendors/hamburger-menu.css';
import '../vendors/animate-extends.css';
import '../vendors/react-top-loading-bar.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('oironTheme') || 'light';
}

function MyApp(props) {
  const { Component, pageProps, router } = props; // eslint-disable-line
  const loadingTime = 1500;
  const [loading, setLoading] = useState(0);
  const curLang = lngDetector.detect();

  const [theme, setTheme] = useState({
    ...appTheme('rose', themeType),
    direction: curLang === 'ar' ? 'rtl' : 'ltr'
  });

  useEffect(() => {
    // Enable this code below for Server Side Rendering/Translation (SSR)
    // const { pathname, asPath, query } = router;
    // router.push({ pathname, query }, asPath, { locale: curLang });

    // Set layout direction
    document.dir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', curLang);

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, loadingTime);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, loadingTime + 500);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('oironTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme({
      ...appTheme('rose', newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const muiTheme = createTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <LoadingBar
            height={0}
            color={theme.palette.primary.main}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            <PageTransition timeout={loadingTime} classNames="page-fade-transition">
              <Component
                {...pageProps}
                onToggleDark={toggleDarkTheme}
                onToggleDir={toggleDirection}
                key={router.route}
              />
            </PageTransition>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
