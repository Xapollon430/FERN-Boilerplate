import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/agency/@Custom/Header';
import FormDeco from '../../../components/agency/Decoration/FormDeco';
import Contact from '../../../components/agency/Forms/Contact';
import Footer from '../../../components/agency/@Custom/Footer';
// Theme Wrapper
import Agency from '../../../components/wrapper/Agency';

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
  return(
    <div>
      <Agency pageName="Contact">
        <ContactContent {...props} />
      </Agency>
    </div>
  )
};

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
