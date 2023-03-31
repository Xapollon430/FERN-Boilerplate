import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import link from '~/public/text/link';
import Header from '../../components/medical/Header/Basic';
import Register from '../../components/medical/Forms/Register';
import Footer from '../../components/medical/@Custom/Footer';
// Theme Wrapper
import Medical from '../../components/wrapper/Medical';

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
          href={link.medical.login}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Register />
          </div>
        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function RegisterPage(props) {
  return(
    <div>
      <Medical pageName="Register">
        <RegisterContent {...props} />
      </Medical>
    </div>
  )
};

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

RegisterPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(RegisterPage);
