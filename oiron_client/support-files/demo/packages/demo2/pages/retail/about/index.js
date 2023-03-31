import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/retail/@Custom/Header';
import Counter from '../../../components/retail/Counter';
import Banner from '../../../components/retail/About/Banner';
import PhotoSlider from '../../../components/retail/About/PhotoSlider';
import TeamSlider from '../../../components/retail/About/TeamSlider';
import AboutVideo from '../../../components/retail/About/Video';
import AboutProgress from '../../../components/retail/About/Progress';
import CallAction from '../../../components/retail/CallAction';
import CompanyLogo from '../../../components/retail/CompanyLogo';
import Footer from '../../../components/retail/@Custom/Footer';
// Theme Wrapper
import Retail from '../../../components/wrapper/Retail';

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
            src={imgAPI.retailInner[1]}
            data-2d={imgAPI.retailInner[0]}
            data-3d={imgAPI.retailInner[1]}
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
        <div>
          <Footer bg toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function About(props) {
  return (
    <div>
      <Retail pageName="About">
        <AboutContent {...props} />
      </Retail>
    </div>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
