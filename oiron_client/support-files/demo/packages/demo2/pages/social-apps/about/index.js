import React, { Fragment } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/social/@Custom/Header';
import Counter from '../../../components/social/Counter';
import Banner from '../../../components/social/About/Banner';
import PhotoSlider from '../../../components/social/About/PhotoSlider';
import TeamSlider from '../../../components/social/About/TeamSlider';
import AboutVideo from '../../../components/social/About/Video';
import AboutProgress from '../../../components/social/About/Progress';
import CallAction from '../../../components/social/CallAction';
import CompanyLogo from '../../../components/social/CompanyLogo';
import Footer from '../../../components/social/@Custom/Footer';
// Theme Wrapper
import Social from '../../../components/wrapper/Social';

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
              src={imgAPI.socialInner[1]}
              data-2d={imgAPI.socialInner[0]}
              data-3d={imgAPI.socialInner[1]}
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
          <div className={classes.spaceTopShort}>
            <CallAction />
          </div>
        </div>
        <Footer bg toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function About(props) {
  return (
    <div>
      <Social pageName="About">
        <AboutContent {...props} />
      </Social>
    </div>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
