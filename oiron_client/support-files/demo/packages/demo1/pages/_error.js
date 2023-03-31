import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Error from '../components/agency/Error';
import brand from '../public/text/brand';
import { withTranslation } from '../i18n';

const useSpacing = makeStyles(() => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
}));

function ErrorPage(props) {
  const classes = useSpacing();
  const { errorCode, stars, t } = props;
  
  if (errorCode) {
    return (
      <Fragment>
        <Head>
          <title>
            { brand.marketing.name }
            &nbsp; -&nbsp;
            {errorCode}
          </title>
        </Head>
        <div className={classes.mainWrap}>
          <Error errorCode={errorCode} text={t('common:404')} />
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      {t('description')}
      Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  t: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0,
};

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ErrorPage);
