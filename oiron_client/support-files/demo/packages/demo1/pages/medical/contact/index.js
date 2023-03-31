import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/medical/@Custom/Header';
import Contact from '../../../components/medical/Forms/Contact';
import Footer from '../../../components/medical/@Custom/Footer';
// Theme Wrapper
import Medical from '../../../components/wrapper/Medical';

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
      <Medical pageName="Contact">
        <ContactContent {...props} />
      </Medical>
    </div>
  )
};

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
