import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/crypto/Header/Basic';
import Register from '../../components/crypto/Forms/Register';
import Footer from '../../components/crypto/@Custom/Footer';
import FooterExtend from '../../components/crypto/Footer/FooterExtend';
import link from '~/public/text/link';
// Theme Wrapper
import Crypto from '../../components/wrapper/Crypto';

function RegisterContent(props) {
   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_login')}
          href={link.crypto.login}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Register />
          </div>
        </Container>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function RegisterPage(props) {
  return(
    <div>
      <Crypto pageName="Register">
        <RegisterContent {...props} />
      </Crypto>
    </div>
  )
}

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

RegisterPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(RegisterPage);
