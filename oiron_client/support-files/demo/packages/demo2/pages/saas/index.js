import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/saas/@Custom/Header';
import BannerSlider from '../../components/saas/Home/BannerSlider';
import Counter from '../../components/saas/Home/Counter';
import Feature from '../../components/saas/Home/Feature';
import Integration from '../../components/saas/Home/Integration';
import Testimonials from '../../components/saas/Home/Testimonials';
import NewsEvent from '../../components/saas/Home/NewsEvent';
import CallAction from '../../components/saas/CallAction';
import SubscribeForm from '../../components/saas/SubscribeForm';
import CompanyLogo from '../../components/saas/CompanyLogo';
import Corner from '../../components/saas/@Custom/Corner';
import Footer from '../../components/saas/@Custom/Footer';
import Notification from '../../components/saas/Notification';
// Theme Wrapper
import Saas from '../../components/wrapper/Saas';

function LandingContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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
          <section>
            <CompanyLogo />
          </section>
          <section className={!isMobile ? classes.spaceTopShort : ''}>
            <Counter />
          </section>
          <section id="feature" className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Feature />
          </section>
          <section id="integration">
            <Integration />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="call-action">
            <CallAction />
          </section>
          <section id="blog" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <NewsEvent />
          </section>
          <section className={classes.spaceTop}>
            <SubscribeForm />
          </section>
        </main>
        <Footer bg toggleDir={onToggleDir} />
        <Hidden smDown>
          <Corner />
        </Hidden>
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

function Landing(props) {
  return (
    <div>
      <Saas pageName="Home Page">
        <LandingContent {...props} />
      </Saas>
    </div>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas-landing'],
});

export default Landing;
