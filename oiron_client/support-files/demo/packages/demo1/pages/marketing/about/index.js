import React, { Fragment } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/marketing/@Custom/Header';
import Counter from '../../../components/marketing/Counter';
import Banner from '../../../components/marketing/About/Banner';
import PhotoSlider from '../../../components/marketing/About/PhotoSlider';
import TeamSlider from '../../../components/marketing/About/TeamSlider';
import AboutVideo from '../../../components/marketing/About/Video';
import AboutProgress from '../../../components/marketing/About/Progress';
import CallAction from '../../../components/marketing/CallAction';
import CompanyLogo from '../../../components/marketing/CompanyLogo';
import Footer from '../../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../../components/wrapper/Marketing';

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
            src={imgAPI.marketingInner[1]}
            data-2d={imgAPI.marketingInner[0]}
            data-3d={imgAPI.marketingInner[1]}
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
      <Marketing pageName="About">
        <AboutContent {...props} />
      </Marketing>
    </div>
  )
};

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
