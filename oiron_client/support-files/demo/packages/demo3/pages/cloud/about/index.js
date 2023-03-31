import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/cloud/@Custom/Header';
import Counter from '../../../components/cloud/Counter';
import Banner from '../../../components/cloud/About/Banner';
import PhotoSlider from '../../../components/cloud/About/PhotoSlider';
import TeamSlider from '../../../components/cloud/About/TeamSlider';
import AboutVideo from '../../../components/cloud/About/Video';
import AboutProgress from '../../../components/cloud/About/Progress';
import CompanyLogo from '../../../components/cloud/CompanyLogo';
import Footer from '../../../components/cloud/@Custom/Footer';
import FooterExtend from '../../../components/cloud/Footer/FooterExtend';
// Theme Wrapper
import Cloud from '../../../components/wrapper/Cloud';

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
            src={imgAPI.cloudInner[1]}
            data-2d={imgAPI.cloudInner[0]}
            data-3d={imgAPI.cloudInner[1]}
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
      <Cloud pageName="Home Page">
        <AboutContent {...props} />
      </Cloud>
    </div>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default About;
