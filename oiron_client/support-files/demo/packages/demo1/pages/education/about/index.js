import React, { Fragment } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/education/@Custom/Header';
import Counter from '../../../components/education/Counter';
import Banner from '../../../components/education/About/Banner';
import PhotoSlider from '../../../components/education/About/PhotoSlider';
import TeamSlider from '../../../components/education/About/TeamSlider';
import AboutVideo from '../../../components/education/About/Video';
import AboutProgress from '../../../components/education/About/Progress';
import DecoFooter from '../../../components/education/Footer/DecorationTop';
import CallAction from '../../../components/education/CallAction';
import CompanyLogo from '../../../components/education/CompanyLogo';
import Footer from '../../../components/education/@Custom/Footer';
// Theme Wrapper
import Education from '../../../components/wrapper/Education';

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
              src={imgAPI.educationInner[1]}
              data-2d={imgAPI.educationInner[0]}
              data-3d={imgAPI.educationInner[1]}
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
          <div className={clsx(classes.spaceBottom, classes.spaceTopShort)}>
            <PhotoSlider />
          </div>
        </div>
        <div className={clsx(classes.bottomDecoWrap, classes.spaceBottom, classes.spaceTop)}>
          <DecoFooter />
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
      <Education pageName="About">
        <AboutContent {...props} />
      </Education>
    </div>
  )
};

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
