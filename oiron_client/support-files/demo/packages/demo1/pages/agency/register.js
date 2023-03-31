import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import link from '~/public/text/link';
import Header from '../../components/agency/Header/Basic';
import Register from '../../components/agency/Forms/Register';
import Footer from '../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../components/wrapper/Agency';

function RegisterContent(props) {
  // Theme breakpoints

   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_login')}
          href={link.agency.login}
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
      <Agency pageName="Register">
        <RegisterContent {...props} />
      </Agency>
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
