import React, { Fragment } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/medical/@Custom/Header';
import Counter from '../../../components/medical/Counter';
import Banner from '../../../components/medical/About/Banner';
import PhotoSlider from '../../../components/medical/About/PhotoSlider';
import TeamSlider from '../../../components/medical/About/TeamSlider';
import AboutVideo from '../../../components/medical/About/Video';
import AboutProgress from '../../../components/medical/About/Progress';
import CallAction from '../../../components/medical/CallAction';
import CompanyLogo from '../../../components/medical/CompanyLogo';
import Footer from '../../../components/medical/@Custom/Footer';
// Theme Wrapper
import Medical from '../../../components/wrapper/Medical';

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
        <Banner>
          <img
            src={imgAPI.medicalInner[1]}
            data-2d={imgAPI.medicalInner[0]}
            data-3d={imgAPI.medicalInner[1]}
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
            <Grid container justify="center" spacing={3}>
              <Grid item md={6} sm={8} xs={12}>
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
        <div className={clsx(classes.spaceBottom, classes.spaceTopShort)}>
          <CallAction />
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function About(props) {
  return(
    <div>
      <Medical pageName="About">
        <AboutContent {...props} />
      </Medical>
    </div>
  )
};

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
