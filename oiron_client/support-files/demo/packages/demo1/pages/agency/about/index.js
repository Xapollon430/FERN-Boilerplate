import React, { Fragment } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '../../../theme/common';
import Header from '../../../components/agency/@Custom/Header';
import Counter from '../../../components/agency/Counter';
import Banner from '../../../components/agency/About/Banner';
import PhotoSlider from '../../../components/agency/About/PhotoSlider';
import TeamSlider from '../../../components/agency/About/TeamSlider';
import AboutVideo from '../../../components/agency/About/Video';
import AboutProgress from '../../../components/agency/About/Progress';
import ContactMap from '../../../components/agency/Forms/ContactMap';
import CallAction from '../../../components/agency/CallAction';
import CompanyLogo from '../../../components/agency/CompanyLogo';
import Footer from '../../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

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
            src={imgAPI.agencyInner[1]}
            data-2d={imgAPI.agencyInner[0]}
            data-3d={imgAPI.agencyInner[1]}
            className="img-2d3d"
            alt="services 3d"
          />
        </Banner>
        <CompanyLogo />
        <Counter />
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
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function About(props) {
  return(
    <div>
      <Agency pageName="Home Page">
        <AboutContent {...props} />
      </Agency>
    </div>
  )
};

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
