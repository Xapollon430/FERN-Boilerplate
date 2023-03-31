import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import Counter from '../../../components/crypto/Counter';
import Banner from '../../../components/crypto/About/Banner';
import PhotoSlider from '../../../components/crypto/About/PhotoSlider';
import TeamSlider from '../../../components/crypto/About/TeamSlider';
import AboutVideo from '../../../components/crypto/About/Video';
import AboutProgress from '../../../components/crypto/About/Progress';
import CompanyLogo from '../../../components/crypto/CompanyLogo';
import Footer from '../../../components/crypto/@Custom/Footer';
import FooterExtend from '../../../components/crypto/Footer/FooterExtend';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

function AboutContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerFront}>
          <Banner>
            <img
              src={imgAPI.cryptoInner[1]}
              data-2d={imgAPI.cryptoInner[0]}
              data-3d={imgAPI.cryptoInner[1]}
              className="img-2d3d"
              alt="services 3d"
            />
          </Banner>
          <CompanyLogo />
          <div className={classes.spaceTopShort}>
            <Counter />
          </div>
          <div className={classes.spaceTopShort}>
            <Container>
              <Grid container justify="center" spacing={6}>
                <Grid item md={6} xs={12}>
                  <AboutVideo />
                </Grid>
                <Grid item md={6} sm={8} xs={12}>
                  <AboutProgress />
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.spaceTopShort}>
            <TeamSlider />
          </div>
          <div className={classes.spaceTopShort}>
            <PhotoSlider />
          </div>
        </div>
        <FooterExtend withCounter>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function About(props) {
  return(
    <div>
      <Crypto pageName="About">
        <AboutContent {...props} />
      </Crypto>
    </div>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
