import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/saas2/Header/Basic';
import Register from '../../components/saas2/Forms/Register';
import Footer from '../../components/saas2/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Saas2 from '../../components/wrapper/Saas2';

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
          href={link.saas2.login}
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
  return (
    <div>
      <Saas2 pageName="Register">
        <RegisterContent {...props} />
      </Saas2>
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
