import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/fintech/@Custom/Header';
import BannerSlider from '../../components/fintech/Home/BannerSlider';
import About from '../../components/fintech/Home/About';
import Feature from '../../components/fintech/Home/Feature';
import PaymentStep from '../../components/fintech/Home/PaymentStep';
import TopPromotions from '../../components/fintech/Home/TopPromotions';
import Testimonials from '../../components/fintech/Home/Testimonials';
import Merchants from '../../components/fintech/Home/Merchants';
import DownloadBanner from '../../components/fintech/Home/DownloadBanner';
import Corner from '../../components/fintech/@Custom/Corner';
import Footer from '../../components/fintech/@Custom/Footer';
import FooterExtend from '../../components/fintech/Footer/FooterExtend';
import Notification from '../../components/fintech/Notification';
// Theme Wrapper
import Fintech from '../../components/wrapper/Fintech';

function LandingContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  // Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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
          <section id="about" className={classes.spaceTop}>
            <About />
          </section>
          <section id="feature" className={isDesktop ? classes.spaceTopShort : classes.spaceTop}>
            <Feature />
          </section>
          <section id="payment" className={isMobile ? classes.spaceTop : classes.spaceTopShort}>
            <PaymentStep />
          </section>
          <section id="promotions" className={classes.spaceTopShort}>
            <TopPromotions />
          </section>
          <section id="testimonials" className={isDesktop ? classes.spaceTopShort : classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="merchant" className={classes.spaceTop}>
            <Merchants />
          </section>
          <DownloadBanner />
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

function Landing(props) {
  return(
    <div>
      <Fintech pageName="Home Page">
        <LandingContent {...props} />
      </Fintech>
    </div>
  )
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'fintech-landing'],
});

export default Landing;
