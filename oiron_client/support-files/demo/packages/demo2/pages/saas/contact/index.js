import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/saas/@Custom/Header';
import FormDeco from '../../../components/saas/Decoration/FormDeco';
import Contact from '../../../components/saas/Forms/Contact';
import Footer from '../../../components/saas/@Custom/Footer';
// Theme Wrapper
import Saas from '../../../components/wrapper/Saas';

function ContactContent(props) {
  const classes = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={clsx(classes.containerGeneral, classes.containerFront)}>
          <Container maxWidth="md">
            <FormDeco />
            <Contact />
          </Container>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

function ContactPage(props) {
  return (
    <div>
      <Saas pageName="Contact">
        <ContactContent {...props} />
      </Saas>
    </div>
  );
}

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
