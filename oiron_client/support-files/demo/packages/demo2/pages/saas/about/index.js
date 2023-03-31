import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas/@Custom/Header';
import Counter from '../../../components/saas/Counter';
import Banner from '../../../components/saas/About/Banner';
import PhotoSlider from '../../../components/saas/About/PhotoSlider';
import TeamSlider from '../../../components/saas/About/TeamSlider';
import AboutVideo from '../../../components/saas/About/Video';
import AboutProgress from '../../../components/saas/About/Progress';
import CallAction from '../../../components/saas/CallAction';
import CompanyLogo from '../../../components/saas/CompanyLogo';
import SubscribeForm from '../../../components/saas/SubscribeForm';
import Footer from '../../../components/saas/@Custom/Footer';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

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
            src={imgAPI.saasInner[1]}
            data-2d={imgAPI.saasInner[0]}
            data-3d={imgAPI.saasInner[1]}
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
        <section className={classes.spaceTopShort}>
          <SubscribeForm />
        </section>
        <Footer bg toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function About(props) {
  return (
    <div>
      <Saas pageName="About">
        <AboutContent {...props} />
      </Saas>
    </div>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
