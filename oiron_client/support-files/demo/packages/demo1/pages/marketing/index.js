import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/marketing/@Custom/Header';
import BannerSlider from '../../components/marketing/Home/BannerSlider';
import About from '../../components/marketing/Home/About';
import Services from '../../components/marketing/Home/Services';
import Speciality from '../../components/marketing/Home/Speciality';
import Testimonials from '../../components/marketing/Home/Testimonials';
import CaseStudies from '../../components/marketing/Home/CaseStudies';
import CallAction from '../../components/marketing/CallAction';
import CompanyLogo from '../../components/marketing/CompanyLogo';
import Corner from '../../components/marketing/@Custom/Corner';
import Footer from '../../components/marketing/@Custom/Footer';
import Notification from '../../components/marketing/Notification';
// Theme Wrapper
import Marketing from '../../components/wrapper/Marketing';

function LandingContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
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

function Landing(props) {
  return(
    <div>
      <Marketing pageName="Home Page">
        <LandingContent {...props} />
      </Marketing>
    </div>
  )
};

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'marketing-landing'],
});

export default Landing;
