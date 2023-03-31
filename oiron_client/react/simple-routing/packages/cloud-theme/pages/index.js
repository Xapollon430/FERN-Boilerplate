import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
// Use this below for Server Side Render/Translation (SSR)
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import Promotion from '~/components/Home/Promotion';
import Feature from '~/components/Home/Feature';
import CompanyLogo from '~/components/CompanyLogo';
import Benefit from '~/components/Home/Benefit';
import Integration from '~/components/Home/Integration';
import Map from '~/components/Home/Map';
import Testimonials from '~/components/Home/Testimonials';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import FooterExtend from '~/components/Footer/FooterExtend';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.cloud.name }
          &nbsp;- Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <div id="promotion">
            <Promotion />
          </div>
          <Box mt={{ sm: 10 }}>
            <CompanyLogo />
          </Box>
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
          <section id="benefit" className={classes.spaceTopShort}>
            <Benefit />
          </section>
          <section id="integration" className={classes.spaceTop}>
            <Integration />
          </section>
          <section id="map" className={classes.spaceTopShort}>
            <Map />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
        </main>
        <Hidden smDown>
          <Corner />
        </Hidden>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };
