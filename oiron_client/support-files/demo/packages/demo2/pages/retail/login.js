import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import Header from '../../components/retail/Header/Basic';
import Login from '../../components/retail/Forms/Login';
import Footer from '../../components/retail/@Custom/Footer';
import link from '~/public/text/link';
// Theme Wrapper
import Retail from '../../components/wrapper/Retail';

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
          href={link.retail.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={clsx(classes.containerGeneral, classes.containerFront)}>
            <Login />
          </div>
        </Container>
        <div className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

function LoginPage(props) {
  return (
    <div>
      <Retail pageName="Login">
        <LoginContent {...props} />
      </Retail>
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
