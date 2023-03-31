import React from 'react';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/medical/@Custom/Header';
import BannerSlider from '../../components/medical/Home/BannerSlider';
import Counter from '../../components/medical/Home/Counter';
import Facilities from '../../components/medical/Home/Facilities';
import Speciality from '../../components/medical/Home/Speciality';
import AskDoctors from '../../components/medical/Home/AskDoctors';
import Testimonials from '../../components/medical/Home/Testimonials';
import CallAction from '../../components/medical/CallAction';
import Clinics from '../../components/medical/Home/Clinics';
import Corner from '../../components/medical/@Custom/Corner';
import Footer from '../../components/medical/@Custom/Footer';
import Notification from '../../components/medical/Notification';
// Theme Wrapper
import Medical from '../../components/wrapper/Medical';

function LandingContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section className={classes.spaceTop}>
            <Counter />
          </section>
          <section
            id="facility"
            className={classes.spaceTop}
          >
            <Facilities />
          </section>
          <section
            id="our-expertise"
            className={classes.spaceTop}
          >
            <Speciality />
          </section>
          <section
            id="ask-doctors"
            className={classes.spaceTop}
          >
            <AskDoctors />
          </section>
          <section
            id="testimonials"
            className={classes.spaceTopShort}
          >
            <Testimonials />
          </section>
          <div className={classes.spaceTopShort} id="call-to-action">
            <CallAction />
          </div>
          <div className={clsx(classes.spaceTopShort, classes.spaceBottom)} id="clinics">
            <Clinics />
          </div>
        </main>
        <Hidden smDown>
          <Corner />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

function Landing(props) {
  return(
    <div>
      <Medical pageName="Home Page">
        <LandingContent {...props} />
      </Medical>
    </div>
  )
};

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'medical-landing'],
});

export default Landing;
