import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Contact from '~/components/Forms/Contact';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function ContactPage(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  // Media query
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'sm'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.education.name }
          &nbsp; - Contact
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
          <Container maxWidth="md">
            <Contact />
          </Container>
        </div>
        <div className={isTablet ? classes.spaceTop : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

ContactPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default ContactPage;
