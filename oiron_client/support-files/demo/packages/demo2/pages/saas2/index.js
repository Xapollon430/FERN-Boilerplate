import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/saas2/@Custom/Header';
import BannerSlider from '../../components/saas2/Home/BannerSlider';
import Counter from '../../components/saas2/Home/Counter';
import Feature from '../../components/saas2/Home/Feature';
import Integration from '../../components/saas2/Home/Integration';
import Testimonials from '../../components/saas2/Home/Testimonials';
import NewsEvent from '../../components/saas2/Home/NewsEvent';
import CallAction from '../../components/saas2/CallAction';
import CompanyLogo from '../../components/saas2/CompanyLogo';
import Corner from '../../components/saas2/@Custom/Corner';
import Footer from '../../components/saas2/@Custom/Footer';
import Notification from '../../components/saas2/Notification';
// Theme Wrapper
import Saas2 from '../../components/wrapper/Saas2';

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
        <main className={clsx(classes.containerFront, classes.containerWrap)}>
          <section id="home">
            <BannerSlider />
          </section>
          <section>
            <CompanyLogo />
          </section>
          <section className={classes.spaceTopShort}>
            <Counter />
          </section>
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
          <section id="integration" className={classes.spaceTopShort}>
            <Integration />
          </section>
          <section id="testimonials" className={classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="call-action" className={classes.spaceTopShort}>
            <CallAction />
          </section>
          <section id="blog" className={clsx(isMobile ? classes.spaceTopShort : classes.spaceTop, classes.spaceBottomShort)}>
            <NewsEvent />
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
      <Saas2 pageName="Home Page">
        <LandingContent {...props} />
      </Saas2>
    </div>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas2-landing'],
});

export default Landing;
