import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
// Use this below for Server Side Render/Translation (SSR)
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import About from '~/components/Home/About';
import Services from '~/components/Home/Services';
import Speciality from '~/components/Home/Speciality';
import Testimonials from '~/components/Home/Testimonials';
import CaseStudies from '~/components/Home/CaseStudies';
import CallAction from '~/components/CallAction';
import CompanyLogo from '~/components/CompanyLogo';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.marketing.name }
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
          <section
            id="about"
            className={isDesktop ? classes.spaceTop : ''}
          >
            <About />
          </section>
          <section
            id="services"
            className={classes.spaceTop}
          >
            <Services />
          </section>
          <section
            id="our-expertise"
            className={isDesktop ? classes.spaceTopShort : ''}
          >
            <Speciality />
          </section>
          <section className={isDesktop ? classes.spaceTop : ''}>
            <CompanyLogo />
          </section>
          <section id="case-studies" className={classes.spaceTopShort}>
            <CaseStudies />
          </section>
          <section id="testimonials" className={isTablet ? classes.spaceTopShort : ''}>
            <Testimonials />
          </section>
          <div id="call-to-action" className={clsx(classes.spaceBottom, classes.spaceTopShort)}>
            <CallAction />
          </div>
        </main>
        <Hidden smDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
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

// Use this below for Server Side Render/Translation (SSR)
export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };

export default Landing;
