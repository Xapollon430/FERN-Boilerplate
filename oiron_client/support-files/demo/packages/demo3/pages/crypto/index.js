import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import MarketPrice from '../../components/crypto/Home/MarketPrice';
import Header from '../../components/crypto/@Custom/Header';
import BannerSlider from '../../components/crypto/Home/BannerSlider';
import About from '../../components/crypto/Home/About';
import Feature from '../../components/crypto/Home/Feature';
import Benefit from '../../components/crypto/Home/Benefit';
import TopCoin from '../../components/crypto/Home/TopCoin';
import Testimonials from '../../components/crypto/Home/Testimonials';
import NewsEvent from '../../components/crypto/Home/NewsEvent';
import DownloadBanner from '../../components/crypto/Home/DownloadBanner';
import Corner from '../../components/crypto/@Custom/Corner';
import Footer from '../../components/crypto/@Custom/Footer';
import FooterExtend from '../../components/crypto/Footer/FooterExtend';
import Notification from '../../components/crypto/Notification';
// Theme Wrapper
import Crypto from '../../components/wrapper/Crypto';

function LandingContent(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <div className={classes.mainWrap}>
        <Hidden mdDown>
          <MarketPrice />
        </Hidden>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={clsx(classes.containerWrap, classes.containerFront)}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="about" className={classes.spaceTop}>
            <About />
          </section>
          <section id="feature" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
            <Feature />
          </section>
          <section id="benefit">
            <Benefit />
          </section>
          <section id="view-market" className={classes.spaceTop}>
            <TopCoin />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="news" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
          <DownloadBanner />
        </main>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
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
  return(
    <div>
      <Crypto pageName="Home Page">
        <LandingContent {...props} />
      </Crypto>
    </div>
  )
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'crypto-landing'],
});

export default Landing;
