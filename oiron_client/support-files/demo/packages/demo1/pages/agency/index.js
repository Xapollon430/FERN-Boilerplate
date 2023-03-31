import React, { Fragment } from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '../../theme/common';
import Header from '../../components/agency/@Custom/Header';
import BannerSlider from '../../components/agency/Home/BannerSlider';
import About from '../../components/agency/Home/About';
import Services from '../../components/agency/Home/Services';
import Expertise from '../../components/agency/Home/Expertise';
import Testimonials from '../../components/agency/Home/Testimonials';
import CaseStudies from '../../components/agency/Home/CaseStudies';
import CallAction from '../../components/agency/CallAction';
import CompanyLogo from '../../components/agency/CompanyLogo';
import Corner from '../../components/agency/@Custom/Corner';
import Footer from '../../components/agency/@Custom/Footer';
import Notification from '../../components/agency/Notification';
// Theme Wrapper
import Agency from '../../components/wrapper/Agency';

function LandingContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
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
          className={classes.spaceTop}
        >
          <About />
        </section>
        <section
          id="services"
          className={isTablet ? classes.spaceTopShort : classes.spaceTop}
        >
          <Services />
        </section>
        <section
          id="our-expertise"
          className={isMobile ? classes.spaceTopShort : classes.spaceTop}
        >
          <Expertise />
        </section>
        <section
          id="testimonials"
          className={isMobile ? classes.spaceTopShort : classes.spaceTop}
        >
          <Testimonials />
        </section>
        <section id="company" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
          <CompanyLogo />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <div
          id="call-to-action"
          className={clsx(classes.spaceBottom, classes.spaceTopShort)}
        >
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
  );
}

function Landing(props) {
  return(
    <div>
      <Agency pageName="Home Page">
        <LandingContent {...props} />
      </Agency>
    </div>
  )
};

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'agency-landing'],
});

export default Landing;
