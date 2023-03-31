import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/social/Header/Basic';
import Register from '../../components/social/Forms/Register';
import Footer from '../../components/social/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Social from '../../components/wrapper/Social';

function RegisterContent(props) {
   // Translation Function
  const { t } = props;

  const classes = useSpacing();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_login')}
          href={link.social.login}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Register />
          </div>
        </Container>
        <div className={isMobile ? classes.spaceTopShort : ''}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function RegisterPage(props) {
  return (
    <div>
      <Social pageName="Register">
        <RegisterContent {...props} />
      </Social>
    </div>
  );
}

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

RegisterPage.propTypes = {
  t: PropTypes.func.isRequired,
};


export default withTranslation(['common'])(RegisterPage);
