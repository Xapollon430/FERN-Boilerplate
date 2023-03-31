import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import link from '~/public/text/link';
import { useSpacing } from '~/theme/common';
import Header from '../../components/agency/Header/Basic';
import Login from '../../components/agency/Forms/Login';
import Footer from '../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../components/wrapper/Agency';

function LoginContent(props) {
   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          text={t('common:header_register')}
          href={link.agency.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Login />
          </div>
        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function LoginPage(props) {
  return(
    <div>
      <Agency pageName="Home Page">
        <LoginContent {...props} />
      </Agency>
    </div>
  )
};

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
};


export default withTranslation(['common'])(LoginPage);
