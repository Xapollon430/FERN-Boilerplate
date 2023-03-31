import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import link from '~/public/text/link';
import { useSpacing } from '~/theme/common';
import Header from '../../components/marketing/Header/Basic';
import Register from '../../components/marketing/Forms/Register';
import FormDeco from '../../components/marketing/Decoration/FormDeco';
import Footer from '../../components/marketing/@Custom/Footer';
// Theme Wrapper
import Marketing from '../../components/wrapper/Marketing';

function RegisterContent(props) {
  // Theme breakpoints

   // Translation Function
  const { t } = props;

  const classes = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <FormDeco />
        <Header
          text={t('common:header_login')}
          href={link.marketing.login}
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
      <Marketing pageName="Register">
        <RegisterContent {...props} />
      </Marketing>
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
