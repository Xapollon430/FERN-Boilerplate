import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import Hidden from '@material-ui/core/Hidden';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import Counter from '~/components/Home/Counter';
import Feature from '~/components/Home/Feature';
import Discover from '~/components/Home/Discover';
import Stories from '~/components/Home/Stories';
import TopCommunities from '~/components/Home/TopCommunities';
import NewsEvent from '~/components/Home/NewsEvent';
import CallAction from '~/components/CallAction';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.social.name }
          &nbsp;- Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={clsx(classes.containerFront, classes.containerWrap)}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
          <section className={classes.spaceTop}>
            <Counter />
          </section>
          <section id="discover" className={classes.spaceTop}>
            <Discover />
          </section>
          <section id="stories" className={classes.spaceTop}>
            <Stories />
          </section>
          <section id="community" className={classes.spaceTopShort}>
            <TopCommunities />
          </section>
          <section id="blog" className={isMobile ? classes.spaceTop : ''}>
            <NewsEvent />
          </section>
          <section id="call-action">
            <CallAction />
          </section>
        </main>
        <Footer bg toggleDir={onToggleDir} />
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

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
