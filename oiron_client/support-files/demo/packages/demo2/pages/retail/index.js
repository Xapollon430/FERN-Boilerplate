import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/retail/@Custom/Header';
import BannerSlider from '../../components/retail/Home/BannerSlider';
import Feature from '../../components/retail/Home/Feature';
import Counter from '../../components/retail/Home/Counter';
import Management from '../../components/retail/Home/Management';
import Business from '../../components/retail/Home/Business';
import Testimonials from '../../components/retail/Home/Testimonials';
import NewsEvent from '../../components/retail/Home/NewsEvent';
import CallAction from '../../components/retail/CallAction';
import Corner from '../../components/retail/@Custom/Corner';
import Footer from '../../components/retail/@Custom/Footer';
import Notification from '../../components/retail/Notification';
// Theme Wrapper
import Retail from '../../components/wrapper/Retail';

function LandingContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

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
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
          <section className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Counter />
          </section>
          <section id="management" className={classes.spaceTop}>
            <Management />
          </section>
          <section id="business" className={classes.spaceTop}>
            <Business />
          </section>
          <section id="testimonials" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="blog" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
          <section id="call-action" className={clsx(classes.spaceTopShort, !isTablet && classes.spaceBottomShort)}>
            <CallAction />
          </section>
        </main>
        <Footer toggleDir={onToggleDir} />
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
      <Retail pageName="Home page">
        <LandingContent {...props} />
      </Retail>
    </div>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'retail-landing'],
});

export default Landing;
