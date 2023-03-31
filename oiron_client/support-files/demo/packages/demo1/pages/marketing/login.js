import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import link from '~/public/text/link';
import FormDeco from '../../components/marketing/Decoration/FormDeco';
import Header from '../../components/marketing/Header/Basic';
import Login from '../../components/marketing/Forms/Login';
import Footer from '../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../components/wrapper/Marketing';

function LoginContent(props) {
   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <FormDeco />
        <Header
          text={t('common:header_register')}
          href={link.marketing.register}
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
      <Marketing pageName="Login">
        <LoginContent {...props} />
      </Marketing>
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
