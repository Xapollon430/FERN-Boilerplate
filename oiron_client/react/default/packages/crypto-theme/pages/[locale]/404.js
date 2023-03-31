import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Error from '~/components/Error';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import brand from '~/public/text/brand';
import { useSpacing } from '~/theme/common';

function ErrorPage(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars } = props;
  const { t } = useTranslation('common');

  if (errorCode) {
    return (
      <Fragment>
        <Head>
          <title>
            { brand.crypto.name }
            &nbsp; -&nbsp;
            {errorCode}
          </title>
        </Head>
        <div className={classes.mainWrap}>
          <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
          <div className={classes.spaceBottomShort}>
            <Error errorCode={errorCode} text={t('404')} />
          </div>
          <Footer toggleDir={onToggleDir} />
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.dedicatedPage}>
      {t('description')}
      Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0,
};

export default ErrorPage;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
