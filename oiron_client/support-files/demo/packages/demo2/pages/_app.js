import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { PageTransition } from 'next-page-transitions';
import LoadingBar from 'react-top-loading-bar';
import { appWithTranslation } from '../i18n';
import Store from '../components/wrapper/Store';
/* import css vendors */
import 'react-image-lightbox/style.css';
import '~/vendors/animate.css';
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
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);
  }, []);

  const { Component, pageProps, router } = props; // eslint-disable-line

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <LoadingBar
        height={0}
        color="#2196F3"
        progress={loading}
        className="top-loading-bar"
      />
      <div id="main-wrap">
        <Store>
          <PageTransition timeout={300} classNames="page-fade-transition">
            <Component
              {...pageProps}
              key={router.route}
              mode={themeType}
            />
          </PageTransition>
        </Store>
      </div>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
