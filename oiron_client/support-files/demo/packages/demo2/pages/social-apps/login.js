import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/social/Header/Basic';
import Login from '../../components/social/Forms/Login';
import Footer from '../../components/social/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Social from '../../components/wrapper/Social';

function LoginContent(props) {
  // Theme breakpoints

   // Translation Function
  const { t } = props;

  const classes = useSpacing();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_register')}
          href={link.social.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Login />
          </div>
        </Container>
        <div className={isMobile ? classes.spaceTopShort : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function LoginPage(props) {
  return (
    <div>
      <Social pageName="Login">
        <LoginContent {...props} />
      </Social>
    </div>
  );
}

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
};


export default withTranslation(['common'])(LoginPage);
