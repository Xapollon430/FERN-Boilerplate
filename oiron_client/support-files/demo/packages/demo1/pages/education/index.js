import React from 'react';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import { useSpacing } from '~/theme/common';
import Header from '../../components/education/@Custom/Header';
import BannerSlider from '../../components/education/Home/BannerSlider';
import Feature from '../../components/education/Home/Feature';
import PopularCourse from '../../components/education/Home/PopularCourse';
import Explore from '../../components/education/Home/Explore';
import About from '../../components/education/Home/About';
import Testimonials from '../../components/education/Home/Testimonials';
import Blog from '../../components/education/Home/Blog';
import DecoFooter from '../../components/education/Footer/DecorationTop';
import SubscribeForm from '../../components/education/SubscribeForm';
import Corner from '../../components/education/@Custom/Corner';
import Footer from '../../components/education/@Custom/Footer';
import Notification from '../../components/education/Notification';
// Theme Wrapper
import Education from '../../components/wrapper/Education';

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
          <div id="home">
            <BannerSlider />
          </div>
          <section id="feature" className={classes.spaceTop}>
            <Feature />
          </section>
          <section id="popular" className={classes.spaceTopShort}>
            <PopularCourse />
          </section>
          <section id="explore">
            <Explore />
          </section>
          <section id="about" className={classes.spaceTopShort}>
            <About />
          </section>
          <section id="testimonials" className={classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="blog" className={classes.spaceTop}>
            <Blog />
          </section>
        </main>
        <section id="subscribe" className={clsx(classes.bottomDecoWrap, classes.spaceTop)}>
          <DecoFooter />
          <SubscribeForm />
        </section>
        <Footer toggleDir={onToggleDir} />
        <Hidden smDown>
          <Corner />
        </Hidden>
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
      <Education pageName="Home Page">
        <LandingContent {...props} />
      </Education>
    </div>
  )
};

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'education-landing'],
});

export default Landing;
