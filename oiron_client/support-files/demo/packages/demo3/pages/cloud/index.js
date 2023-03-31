import React from 'react';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/cloud/@Custom/Header';
import BannerSlider from '../../components/cloud/Home/BannerSlider';
import Promotion from '../../components/cloud/Home/Promotion';
import Feature from '../../components/cloud/Home/Feature';
import CompanyLogo from '../../components/cloud/CompanyLogo';
import Benefit from '../../components/cloud/Home/Benefit';
import Integration from '../../components/cloud/Home/Integration';
import Map from '../../components/cloud/Home/Map';
import Testimonials from '../../components/cloud/Home/Testimonials';
import Corner from '../../components/cloud/@Custom//Corner';
import Footer from '../../components/cloud/@Custom/Footer';
import FooterExtend from '../../components/cloud/Footer/FooterExtend';
import Notification from '../../components/cloud/Notification';
// Theme Wrapper
import Cloud from '../../components/wrapper/Cloud';

function LandingContent(props) {
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

function Landing(props) {
  return(
    <div>
      <Cloud pageName="Home Page">
        <LandingContent {...props} />
      </Cloud>
    </div>
  )
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'cloud-landing'],
});

export default Landing;
