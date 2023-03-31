import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/fintech/Header/Basic';
import Login from '../../components/fintech/Forms/Login';
import FooterExtend from '../../components/fintech/Footer/FooterExtend';
import Footer from '../../components/fintech/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Fintech from '../../components/wrapper/Fintech';

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
          href={link.fintech.register}
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
      <Fintech pageName="Login">
        <LoginContent {...props} />
      </Fintech>
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
