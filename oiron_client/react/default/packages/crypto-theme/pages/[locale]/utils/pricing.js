import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Pricing from '~/components/Pricing';
import Faq from '~/components/Faq';
import Footer from '~/components/Footer';
import FooterExtend from '~/components/Footer/FooterExtend';
import brand from '~/public/text/brand';

function PricingPage(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Pricing
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerFront, classes.containerGeneral)}>
          <div className={classes.spaceBottomShort}>
            <Box mt={{ sm: 3 }}>
              <Pricing />
            </Box>
            <div className={classes.spaceTopShort}>
              <Faq />
            </div>
          </div>
        </div>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

PricingPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default PricingPage;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
