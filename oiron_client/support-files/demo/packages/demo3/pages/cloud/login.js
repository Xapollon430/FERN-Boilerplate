import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/cloud/Header/Basic';
import Login from '../../components/cloud/Forms/Login';
import FooterExtend from '../../components/cloud/Footer/FooterExtend';
import Footer from '../../components/cloud/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Cloud from '../../components/wrapper/Cloud';

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
          href={link.cloud.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Login />
          </div>
        </Container>
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function LoginPage(props) {
  return(
    <div>
      <Cloud pageName="Login">
        <LoginContent {...props} />
      </Cloud>
    </div>
  )
}

LoginPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(LoginPage);
