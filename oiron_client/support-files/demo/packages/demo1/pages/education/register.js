import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import { useSpacing } from '~/theme/common';
import link from '~/public/text/link';
import Header from '../../components/education/Header/Basic';
import Register from '../../components/education/Forms/Register';
import Footer from '../../components/education/@Custom/Footer';
// Theme Wrapper
import Education from '../../components/wrapper/Education';

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
          href={link.education.login}
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
      <Education pageName="Register">
        <RegisterContent {...props} />
      </Education>
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
