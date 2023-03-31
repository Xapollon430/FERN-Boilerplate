import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/social/@Custom/Header';
import BannerSlider from '../../components/social/Home/BannerSlider';
import Counter from '../../components/social/Home/Counter';
import Feature from '../../components/social/Home/Feature';
import Discover from '../../components/social/Home/Discover';
import Stories from '../../components/social/Home/Stories';
import TopCommunities from '../../components/social/Home/TopCommunities';
import NewsEvent from '../../components/social/Home/NewsEvent';
import CallAction from '../../components/social/CallAction';
import Corner from '../../components/social/@Custom/Corner';
import Footer from '../../components/social/@Custom/Footer';
import Notification from '../../components/social/Notification';
import brand from '~/public/text/brand';
// Theme Wrapper
import Social from '../../components/wrapper/Social';

function LandingContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
          <section className={classes.spaceTop}>
            <Counter />
          </section>
          <section id="discover" className={classes.spaceTop}>
            <Discover />
          </section>
          <section id="stories" className={classes.spaceTop}>
            <Stories />
          </section>
          <section id="community" className={classes.spaceTopShort}>
            <TopCommunities />
          </section>
          <section id="blog" className={isMobile ? classes.spaceTop : ''}>
            <NewsEvent />
          </section>
          <section id="call-action">
            <CallAction />
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
      <Social pageName="Home Page">
        <LandingContent {...props} />
      </Social>
    </div>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'social-landing'],
});

export default Landing;
