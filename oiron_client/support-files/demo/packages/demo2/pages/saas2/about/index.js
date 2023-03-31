import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas2/@Custom/Header';
import Counter from '../../../components/saas2/Counter';
import Banner from '../../../components/saas2/About/Banner';
import PhotoSlider from '../../../components/saas2/About/PhotoSlider';
import TeamSlider from '../../../components/saas2/About/TeamSlider';
import AboutVideo from '../../../components/saas2/About/Video';
import AboutProgress from '../../../components/saas2/About/Progress';
import CallAction from '../../../components/saas2/CallAction';
import CompanyLogo from '../../../components/saas2/CompanyLogo';
import Footer from '../../../components/saas2/@Custom/Footer';
// Theme Wrapper
import Saas2 from '../../../components/wrapper/Saas2';

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
              src={imgAPI.saas2Inner[1]}
              data-2d={imgAPI.saas2Inner[0]}
              data-3d={imgAPI.saas2Inner[1]}
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
        <div className={classes.spaceTop}>
          <Footer bg toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function About(props) {
  return (
    <div>
      <Saas2 pageName="About">
        <AboutContent {...props} />
      </Saas2>
    </div>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
