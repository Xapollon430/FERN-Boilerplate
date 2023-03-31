import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { useSpacing } from '~/theme/common';
import Header from '../../../components/crypto/@Custom/Header';
import Contact from '../../../components/crypto/Forms/Contact';
import Footer from '../../../components/crypto/@Custom/Footer';
import FooterExtend from '../../../components/crypto/Footer/FooterExtend';
// Theme Wrapper
import Crypto from '../../../components/wrapper/Crypto';

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
        <FooterExtend>
          <Footer toggleDir={onToggleDir} />
        </FooterExtend>
      </div>
    </Fragment>
  );
}

function ContactPage(props) {
  return(
    <div>
      <Crypto pageName="Contact">
        <ContactContent {...props} />
      </Crypto>
    </div>
  )
}

ContactPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default ContactPage;
