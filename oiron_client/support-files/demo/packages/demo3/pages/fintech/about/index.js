import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/fintech/@Custom/Header';
import Counter from '../../../components/fintech/Counter';
import Banner from '../../../components/fintech/About/Banner';
import PhotoSlider from '../../../components/fintech/About/PhotoSlider';
import TeamSlider from '../../../components/fintech/About/TeamSlider';
import AboutVideo from '../../../components/fintech/About/Video';
import AboutProgress from '../../../components/fintech/About/Progress';
import CompanyLogo from '../../../components/fintech/CompanyLogo';
import Footer from '../../../components/fintech/@Custom/Footer';
import FooterExtend from '../../../components/fintech/Footer/FooterExtend';
// Theme Wrapper
import Fintech from '../../../components/wrapper/Fintech';

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
              src={imgAPI.fintechInner[1]}
              data-2d={imgAPI.fintechInner[0]}
              data-3d={imgAPI.fintechInner[1]}
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
      <Fintech pageName="About">
        <AboutContent {...props} />
      </Fintech>
    </div>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
